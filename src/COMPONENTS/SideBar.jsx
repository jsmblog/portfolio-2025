import { useEffect, useState } from 'react'
import { btns } from '../JS/btnActivate'
import '../STYLES/stylesSidebar.css'
import flagEc from '/ec.webp'
import iconPerfil from '/foto_perfil.webp'
import github from '/github.webp'
import linkedin from '/linkedin.webp'

const SideBar = ({ setActiveSection, activeSection }) => {
    const [isOpenSidebar, setIsOpenSidebar] = useState(false);

    const handleChangeSidebar = () => setIsOpenSidebar(!isOpenSidebar);

    useEffect(() => {
      
    
      return () => {
        const widthScreen = window.innerWidth > 1024;
        setIsOpenSidebar(widthScreen);
      }
    }, [])
    
    return (
        <>
            <div className={isOpenSidebar ? 'cont-sidebar' : ''}>
                {
                    isOpenSidebar && <nav className="sidebar fade-in">
                        <div className='cont-flag'> <img width={15} src={flagEc} alt="flag ec" /> <h6>EC</h6></div>
                        <div class="photo-container">
                            <img src={iconPerfil} class="photo-perfil" />
                            <h2>Jefferson Mera</h2>
                            <h5>jsmblog19@gmail.com</h5>
                            <div class="social-media">
                                <img className='rrss' src={linkedin} alt="linkedin" /><img className='rrss' src={github} alt="github" />
                            </div>
                        </div>
                        {btns?.map(({ key, label }) => (
                            <button
                                key={key}
                                onClick={() => setActiveSection(key)}
                                className={activeSection === key ? 'active' : ''}
                            >
                                {label}
                            </button>
                        ))}
                    </nav>
                }
                <button onClick={handleChangeSidebar} className={!isOpenSidebar ? 'open-sidebar' : 'close-sidebar'}>
                    <h5>{!isOpenSidebar ? '>' : '<'}</h5>
                </button>
            </div>
        </>
    )
}

export default SideBar