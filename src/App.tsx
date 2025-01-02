import Portfolio from './components/portfolio.tsx';
import ContactMe from './components/contactMe.tsx';
import AboutMe from './components/aboutMe.tsx';
import Header from './components/header.tsx';

import React from 'react';
import './App.css'


function App() {
  return (
    <>
    <Header />
    <Portfolio />
    <AboutMe />
    <ContactMe />
    </>
  );
}

export default App;
