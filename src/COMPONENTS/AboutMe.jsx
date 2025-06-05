import { MY_STACK } from '../JS/skills';
import '../STYLES/stylesAboutMe.css'
import { useTypewriter } from './../HOOKS/useTypewriter';
import { phrases } from './../JS/phrases';

const AboutMe = () => {
  const typingPhrases = useTypewriter(phrases)
  const renderSkills = (skill) => {
    return <div className='cont-skills'>
      <h5>{skill}</h5>
      <div className='header-skill'>
        {
          MY_STACK[skill].map((s, index) => (
            <div className='skill' key={index}>
              <img width={s.size} src={s.icon} alt={s.name} />
              <h6>{s.name}</h6>
            </div>
          ))
        }
      </div>
    </div>
  }

  return (
    <section className='about-me fade-in'>
      <h1>¡ Hola ! Soy Jefferson Mera , {typingPhrases}</h1>
      <p className='description'>Como desarrollador, integro una combinación versátil de habilidades y tecnologías que me capacitan para llevar a cabo proyectos complejos con resultados excepcionales. Gracias a mi experiencia en diferentes plataformas y metodologías de trabajo, diseño soluciones innovadoras, optimizo procesos y garantizo entregas puntuales, siempre enfocado en la calidad y en la satisfacción del cliente.</p>
      <a className='download-cv'
        href="/cv-jefferson-mera.pdf"
        download="cv-jefferson-mera.pdf"
        rel="noopener noreferrer">
        <h5>DESCARGAR CV ↓</h5>
      </a>

      <div className='skills'>
        {renderSkills('Backend')}
        {renderSkills('Frontend')}
      </div>
      <div className='skills'>
        {renderSkills('Servicios en la nube')}
        {renderSkills('Control de versiones')}
        {renderSkills('Diseño UI/UX')}
      </div>
    </section>
  )
}

export default AboutMe