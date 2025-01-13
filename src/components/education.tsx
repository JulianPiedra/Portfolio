import React, { useEffect, useState } from "react";
import '../css/education.css';
import { useTranslation } from 'react-i18next';

function Education() {
    const { t } = useTranslation();  // Hook to access translations



    return (
        <div className="education" id="education">
            <div className="educationHeader">
                <h1>{t('education_title')}</h1>
                <h2>{t('education_background')}</h2>
            </div>

            <div className="educationContainer">
                <div className="card">
                    <img src="https://drecartago.org/circuito2/cole_francisca.png" />
                    <h2>{t('high_school')}</h2>
                    <h3>Colegio Francisca Carrasco Jiménez, <span>CR-C</span></h3>
                    <p>{t('high_school_description')}</p>
                </div>
                <div className="card">
                    <img src="https://lh5.googleusercontent.com/p/AF1QipPFpQo9k-591UA74hFtg2UvsJ8kLCf_XRuCxV3R=s467-k-no" />
                    <h2>{t('conversational_english')}</h2>
                    <h3>Idiomas.CR, <span>CR-C</span></h3>
                    <p>{t('conversation_english_description')}</p>
                </div>
                <div className="card">
                    <img src="https://www.larepublica.net/storage/images/2021/11/05/20211105161832.cuc-1.jpg" />
                    <h2>{t('higher_education')}</h2>
                    <h3>Colegio Universitario de Cartago, <span>CR-C</span></h3>
                    <p>{t('higher_education_description')}</p>
                </div>
            </div>
        </div>
    );
}

export default Education;
