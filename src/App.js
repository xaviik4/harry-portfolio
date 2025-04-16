// harry-portfolio/src/App.js
import React from 'react';
import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Photography from './sections/Photography';
// import Content from './sections/Content';
import Contact from './sections/Contact';

function App() {
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener('contextmenu', handleContextMenu);
    return () => document.removeEventListener('contextmenu', handleContextMenu);
  }, []);
  
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Photography />
      {/* <Content /> */}
      {/* <Contact /> */}
    </>
  );
}

export default App;