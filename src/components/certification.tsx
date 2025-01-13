import React, { useEffect, useState } from "react";
import '../css/certification.css';
import { useTranslation } from 'react-i18next';

function Certifications() {
    const { t } = useTranslation();  // Hook to access translations

    return (
        <div className="certification" id="certification">
            <div className="certificationHeader">
                <h1>{t('certification_title')}</h1>
            </div>

            <div className="certificationContainer">
                <a className="card" href="./certificate_scrum.pdf" target="_blank">
                    <img src="data:image/png;base64,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" />
                    <div className="info">
                        <p>Scrum Foundation Professional Certification SFPC</p>
                        
                        <p>{t('issued_by')}   <span  className="external-link" onClick={() => window.open('https://certiprof.com/' , '_blank')}>Certiprof</span></p>
                        <p>{t('scrum_cert')}</p>
                    </div>

                </a>
                <a className="card" href="./certificate_remote.pdf" target="_blank">
                    <img src="data:image/png;base64,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" />
                    <div className="info">
                        <p>Remote Work Professional Certification - RWPC™</p>
                        <p>{t('issued_by')}   <span  className="external-link" onClick={() => window.open('https://certiprof.com/' , '_blank')}>Certiprof</span></p>
                        <p>{t('remote_cert')}</p>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Certifications;
