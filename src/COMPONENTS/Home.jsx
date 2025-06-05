import { useState } from 'react';
import AboutMe from './AboutMe';
import Projects from './Projects';
import SideBar from './SideBar';
import Studies from './Studies';
import NeedHelp from './NeedHelp';
import '../STYLES/stylesHome.css';

const Home = () => {
  const [activeSection, setActiveSection] = useState('about_me');

  const sections = {
    about_me: <AboutMe />,
    studies: <Studies />,
    projects: <Projects />,
    help: <NeedHelp />,
  };

  return (
    <main className='main'>
      <SideBar setActiveSection={setActiveSection} activeSection={activeSection} />
      <section className='section'>
        {sections[activeSection]}
      </section>
    </main>
  );
};

export default Home;
