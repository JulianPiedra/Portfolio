import React, { useEffect, useState } from "react";
import '../css/aboutMe.css';
import { useTranslation } from 'react-i18next';
import { faGraduationCap, faCode, faLaptop, faCog, faBullseye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AboutMe() {
    const { t } = useTranslation();  // Hook to access translations
    const [resume, setResume] = useState('');
    const skills = [
        '.NET',
        'C#',
        'JavaScript',
        'React',
        'Angular',
        'Node.js',
        'Express',
        'SQL',
        'MongoDB',
        'HTML',
        'CSS',
        'NoSQL',
        'TypeScript',
        'Python',
        'PHP',
        'Java'
    ];


    useEffect(() => {
        if (t('language') === 'es') {
            setResume('./Curriculum-JulianPiedra.pdf');
        } else {
            setResume('./Resume-JulianPiedra.pdf');
        }
    },
        [t]);
    return (
        <div className="aboutMe" id="aboutMe">
            <div className="aboutMeContainer">
                <div className="aboutMeHeader">
                    <div>
                        <h1>{t('about_me')}</h1>
                        <h2>{t('about_me_explore')}</h2>
                    </div>

                    <div className="socialMedia">

                        <a href="https://www.linkedin.com/in/julian-piedra-89a494306" target="_blank">
                            <img src="./linkedin.svg" alt="LinkedIn Icon" />
                        </a>
                        <a href="https://github.com/JulianPiedra" target="_blank">
                            <img src="./github.svg" alt="GitHub Icon" />
                        </a>
                        <a href={resume} target="_blank">
                            <img src="./resume.svg" alt="GitHub Icon" />
                        </a>
                    </div>

                </div>

                <div className="aboutMeContent">
                    <ul>
                        <li>
                            <div className="icon" style={{ color: '#FF6347' }}>
                                <FontAwesomeIcon icon={faGraduationCap} bounce />
                            </div>
                            <div className="text">
                                {t('about_me_line_one')}
                            </div>
                        </li>
                        <li>
                            <div className="icon" style={{ color: '#4CAF50' }}>
                                <FontAwesomeIcon icon={faCode} bounce />
                            </div>
                            <div className="text">
                                {t('about_me_line_two')}
                            </div>
                        </li>
                        <li>
                            <div className="icon" style={{ color: '#2196F3' }}>
                                <FontAwesomeIcon icon={faLaptop} bounce />
                            </div>
                            <div className="text">
                                {t('about_me_line_three')}
                            </div>
                        </li>
                        <li>
                            <div className="icon" style={{ color: '#FF9800' }}>
                                <FontAwesomeIcon icon={faCog} bounce />
                            </div>
                            <div className="text">
                                {t('about_me_line_four')}
                            </div>
                        </li>
                        <li>
                            <div className="icon" style={{ color: '#9C27B0' }}>
                                <FontAwesomeIcon icon={faBullseye} bounce />
                            </div>
                            <div className="text">
                                {t('about_me_line_five')}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="skillsList">
                <div className="skillConveyor">
                    <div className="skillSlide">
                        {skills.map((skill, index) => (
                            <span key={index} className="skills">{skill}</span>
                        ))}
                    </div>
                    <div className="skillSlide">
                        {skills.map((skill, index) => (
                            <span key={index} className="skills">{skill}</span>
                        ))}
                    </div>
                </div>
            </div>

        </div>

    );
}

export default AboutMe;
