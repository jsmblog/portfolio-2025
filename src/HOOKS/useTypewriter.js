import { useState, useEffect } from 'react';

export const useTypewriter = (
  texts,
  speed = 100,  
  delay = 3000   
) => {
  const [text, setText] = useState('');         
  const [textIndex, setTextIndex] = useState(0); 
  const [charIndex, setCharIndex] = useState(0);  
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500); 
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const currentText = texts[textIndex];

    // Si estamos en modo “escribir”
    if (!isDeleting) {
      if (charIndex < currentText.length) {
        // escribe la siguiente letra
        const timeout = setTimeout(() => {
          setText(currentText.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        // ya completó la frase: espera `delay` ms y luego pasa a borrar
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delay);
        return () => clearTimeout(timeout);
      }
    } 
    
    // Si estamos en modo “borrar”
    else {
      if (charIndex > 0) {
        // borra una letra
        const timeout = setTimeout(() => {
          setText(currentText.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        // ya borró todo: pasa a la siguiente frase y vuelve a modo “escribir”
        setIsDeleting(false);
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    }
  }, [charIndex, isDeleting, textIndex, texts, speed, delay]);

  return text + (showCursor ? '|' : '');
};
