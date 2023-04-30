import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Proects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <main>
      <Navbar className="text-gray-400 bg-gray-900 body-font"/>
      <About/>
      <Projects/>
      <Skills/>
      <Testimonials/>
      <Contact/>
    </main>
  );
}

export default App;