import React, { useEffect, useState } from "react";
import '../css/aboutMe.css';
import { useTranslation } from 'react-i18next';
import { faGraduationCap, faCode, faLaptop, faCog, faBullseye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AboutMe() {
    const { t } = useTranslation();  // Hook to access translations
    const [resume, setResume] = useState('');

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
            <div className="aboutMeHeader">
                <h1>{t('about_me')}</h1>
                <h2>{t('about_me_explore')}</h2>
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
                            I’m a proud recent graduate based in Costa Rica with a strong foundation in coding and software development. Ready to excel in the fast-paced world of technology.
                        </div>
                    </li>
                    <li>
                        <div className="icon" style={{ color: '#4CAF50' }}>
                            <FontAwesomeIcon icon={faCode} bounce />
                        </div>
                        <div className="text">
                            I enjoy creating efficient, impactful solutions and turning ideas into reality through code.
                        </div>
                    </li>
                    <li>
                        <div className="icon" style={{ color: '#2196F3' }}>
                            <FontAwesomeIcon icon={faLaptop} bounce />
                        </div>
                        <div className="text">
                            Constantly exploring new technologies and staying updated with the latest industry trends.
                        </div>
                    </li>
                    <li>
                        <div className="icon" style={{ color: '#FF9800' }}>
                            <FontAwesomeIcon icon={faCog} bounce />
                        </div>
                        <div className="text">
                            Skilled at analyzing problems, recognizing patterns, and crafting optimized solutions.
                        </div>
                    </li>
                    <li>
                        <div className="icon" style={{ color: '#9C27B0' }}>
                            <FontAwesomeIcon icon={faBullseye} bounce />
                        </div>
                        <div className="text">
                            Always seeking opportunities to grow by mastering new tools and technologies.
                        </div>
                    </li>
                </ul>
            </div>



        </div>
    );
}

export default AboutMe;
