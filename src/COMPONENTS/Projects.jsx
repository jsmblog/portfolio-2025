import { MY_PROJECTS } from '../JS/projects'
import '../STYLES/stylesProjects.css'

const Projects = () => {
  return (
    <section className="projects-section fade-in">
      <div className="projects-container">
        <div className="projects-grid">
          {MY_PROJECTS.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img 
                  src={`/${project.image}`} 
                  alt={project.name}
                  loading="lazy"
                />
                <div className="project-overlay">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15,3 21,3 21,9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                    Ver Proyecto
                  </a>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <h5 className='technologies-used'>tecnologías usadas:</h5>
                <div className="project-technologies">
                  {project.technologiesUsed.map((tech, techIndex) => (
                    <div key={techIndex} className="tech-item">
                      <img 
                        src={tech.icon} 
                        alt={tech.language}
                        className="tech-icon"
                      />
                      <span className="tech-name">{tech.language}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects