import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import Education from './components/Education';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Project';
import Skills from './components/Skills';
import  Coding from './components/Codingstats';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Coding />
        <Contact />
        <Footer />
        {}
      </main>
    </>
  );
}

export default App;
