import React, { useEffect, useState } from "react";
import '../css/aboutMe.css';
import { useTranslation } from 'react-i18next';
import { faGraduationCap, faCode, faLaptop, faCog, faBullseye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// AboutMe component - Displays information about the user with skills, social media links, and resume.
function AboutMe() {
    const { t } = useTranslation();  // Hook to access translations

    // State to manage resume link based on language
    const [resume, setResume] = useState('');
    
    // List of skills to display
    const skills = [
        'C#', 'C++', 'C', 'VB.NET', 'JavaScript', 'React', 'Node.js',
        'SQL', 'MongoDB', 'HTML', 'CSS', 'NoSQL', 'TypeScript', 'Python', 'PHP', 'Java'
    ];

    // Update resume link dynamically based on selected language
    useEffect(() => {
        const language = t('language'); // Assuming `t('language')` returns the current language
        setResume(language === 'es' ? './Curriculum-JulianPiedra.pdf' : './Resume-JulianPiedra.pdf');
    }, [t]);

    return (
        <section className="aboutMe" id="aboutMe">
            {/* Header Section */}
            <div className="aboutMeContainer">
                <div className="aboutMeHeader">
                    <div className="intro">
                        <h1>{t('about_me')}</h1>
                        <h2>{t('about_me_explore')}</h2>
                    </div>

                    {/* Social Media Links */}
                    <div className="socialMedia">
                        <a href="https://www.linkedin.com/in/julian-piedra-89a494306" target="_blank" rel="noopener noreferrer">
                            <img src="./linkedin.svg" alt="LinkedIn Icon" />
                        </a>
                        <a href="https://github.com/JulianPiedra" target="_blank" rel="noopener noreferrer">
                            <img src="./github.svg" alt="GitHub Icon" />
                        </a>
                        <a href={resume} target="_blank" rel="noopener noreferrer">
                            <img src="./resume.svg" alt="Resume Icon" />
                        </a>
                    </div>
                </div>

                {/* About Me Content */}
                <div className="aboutMeContent">
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faGraduationCap} bounce style={{ color: '#FF6347' }} className="icon" />
                            <p className="text">{t('about_me_line_one')}</p>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCode} bounce style={{ color: '#4CAF50' }} className="icon" />
                            <p className="text">{t('about_me_line_two')}</p>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faLaptop} bounce style={{ color: '#2196F3' }} className="icon" />
                            <p className="text">{t('about_me_line_three')}</p>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCog} bounce style={{ color: '#FF9800' }} className="icon" />
                            <p className="text">{t('about_me_line_four')}</p>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faBullseye} bounce style={{ color: '#9C27B0' }} className="icon" />
                            <p className="text">{t('about_me_line_five')}</p>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Skills Section */}
            <div className="skillsList">
                <div className="skillConveyor">
                    {/* Create a sliding effect for skills */}
                    {Array(2).fill(null).map((_, slideIndex) => (
                        <div className="skillSlide" key={slideIndex}>
                            {skills.map((skill, index) => (
                                <span key={`${slideIndex}-${index}`} className="skills">{skill}</span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AboutMe;

