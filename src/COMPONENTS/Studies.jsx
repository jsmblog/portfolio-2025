import iconCareer from '/computacion.png';
import '../STYLES/stylesStudies.css'
const Studies = () => {
  return (
    <section className='about-me fade-in'>
      <img className='iconCareer' src={iconCareer} alt="" />
      <h1>Ingeniería en Ciencias de la Computación – Diseño de Software
        - Desarrollo FullStack y Gestión de Datos</h1>
      <h3>2022 - Actualidad (Previsión de graduación: 2027)</h3>
      <p className='description'>Ingeniería en Ciencias de la Computación avalada por <a href="https://www.espam.edu.ec/web/oferta/grado/computacion.aspx" target="_blank" rel="noopener noreferrer">ESPAM MFL</a>: formación en diseño de software y patrones arquitectónicos, desarrollo FullStack (JavaScript, C#, .NET), gestión de datos con MySQL y desarrollo móvil/web con Angular JS. Actualmente aplico estos conocimientos en proyectos personales.</p>
      <h3>Competencias técnicas</h3>
      <ul className='list-tech'>
        <li>Diseño de APIs RESTful</li>
        <li>Desarrollo de Aplicaciones Web Progresivas (PWA)</li>
        <li>Integración de servicios en la nube (Google Cloud, Firebase)</li>
        <li>Frameworks de JavaScript (React, Angular js)</li>
        <li>Desarrollo de aplicaciones móviles con Ionic</li>
        <li>Desarrollo de chatbots con IA</li>
      </ul>
    </section>
  )
}

export default Studies