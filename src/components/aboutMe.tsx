import React from "react";
import '../css/aboutMe.css';
import { useTranslation } from 'react-i18next';

function AboutMe() {
    const { t } = useTranslation();  // Hook to access translations
    return (
        <div className="aboutMe" id="aboutMe">
            <div >
                <h1>{t('contact_me_title')}</h1>
                <h2>{t('contact_me_paragraph')}</h2>
            </div>
        </div>
    );
}

export default AboutMe;
