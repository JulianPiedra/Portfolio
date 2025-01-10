import Portfolio from './components/portfolio.tsx';
import ContactMe from './components/contactMe.tsx';
import AboutMe from './components/aboutMe.tsx';
import Header from './components/header.tsx';
import Education from './components/education.tsx';
import Certification from './components/certification.tsx';
import React from 'react';
import './App.css'
import Footer from './components/footer.tsx';


function App() {
  return (
    <>
    <Header />
    <Portfolio />
    <AboutMe />
    <Education />
    <Certification/>
    <ContactMe />
    <Footer />
    </>
  );
}

export default App;
