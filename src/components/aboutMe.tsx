import React from "react";
import '../css/aboutMe.css';
import { useTranslation } from 'react-i18next';

function AboutMe() {
    const { t } = useTranslation();  // Hook to access translations
    return (
        <div className="aboutMe" id="aboutMe">
            <div className="aboutMe_container" >
                <h1>{t('Let me tell you about myself!')}</h1>
                <h2>{t('Or... you can see by yourself')}</h2>
                <div className="socialMedia">
                    <a href="https://www.linkedin.com/in/julian-piedra-89a494306" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn Icon"/>
                    </a>
                    <a href="https://github.com/JulianPiedra" target="_blank">
                        <img src="./github.png" alt="GitHub Icon"/>
                    </a>

                </div>
            </div>
            <div className="aboutMe_list" >
                <h1>{t('contact_me_title')}</h1>
                <h2>{t('contact_me_paragraph')}</h2>
            </div>
        </div>
    );
}

export default AboutMe;
