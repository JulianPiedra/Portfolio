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
                    <img src="https://scontent.fsyq7-1.fna.fbcdn.net/v/t39.30808-6/257869071_2008629595967269_2089897665302572830_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Bq5RlMChD5QQ7kNvgEA5eeT&_nc_oc=AdhK6erok3jHocCkThMuRrbFODP5yRdWvFvd0Xkk2YTQsfn7iXEu1nySisBhinPk2m8&_nc_zt=23&_nc_ht=scontent.fsyq7-1.fna&_nc_gid=A-d9tIQ2P7kqRcizdeuwGzg&oh=00_AYC4-XyNvtnaq3Z4A66J_autvs8ZchJR20XnbZyJgs2NxA&oe=67810AC1" />
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
