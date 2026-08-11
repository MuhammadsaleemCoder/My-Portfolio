import { useEffect } from 'react';
import Navbar from './components/layout/Navbar.jsx';
import Hero from './components/sections/Hero.jsx';
import About from './components/sections/About.jsx';
import Skills from './components/sections/Skills.jsx';
import Experience from './components/sections/Experience.jsx';
import Education from './components/sections/Education.jsx';
import Projects from './components/sections/Projects.jsx';
import Contact from './components/sections/Contact.jsx';

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 border-t border-border mt-20 text-center text-muted-foreground text-sm">
        <p>&copy; {new Date().getFullYear()} Muhammad Saleem. Built with MERN Stack.</p>
      </footer>
    </div>
  );
}
