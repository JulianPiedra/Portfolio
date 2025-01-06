import Portfolio from './components/portfolio.tsx';
import ContactMe from './components/contactMe.tsx';
import AboutMe from './components/aboutMe.tsx';
import Header from './components/header.tsx';
import Education from './components/education.tsx';

import React from 'react';
import './App.css'


function App() {
  return (
    <>
    <Header />
    <Portfolio />
    <AboutMe />
    <Education />
    <ContactMe />
    </>
  );
}

export default App;
