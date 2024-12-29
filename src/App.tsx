import Portfolio from './components/portfolio.tsx';
import Language from './components/language.tsx';
import ContactMe from './components/contactMe.tsx'
import AboutMe from './components/aboutMe.tsx'
import React from 'react';
import './App.css'


function App() {
  return (
    <>
    <Language />
    <Portfolio />
    <AboutMe />
    <ContactMe />
    </>
  );
}

export default App;
