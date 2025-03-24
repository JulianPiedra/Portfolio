

import React from 'react';
import './App.css'
import './i18n'
import Header from './components/header.jsx';
import Portfolio from './components/portfolio.jsx';
import AboutMe from './components/aboutMe.jsx';
import Education from './components/education.jsx';
import Certification from './components/certification.jsx';
import ContactMe from './components/contactMe.tsx';
import Footer from './components/footer.jsx';
import Project from './components/project.jsx';

function App() {
  return (
    <>
    <Header />
    <Portfolio />
    <AboutMe />
    <Education />
    <Project/>
    <Certification/>
    <ContactMe />
    <Footer />
    </>
  );
}

export default App;
