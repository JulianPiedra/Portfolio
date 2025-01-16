import React from "react";
import '../css/certification.css';
import { useTranslation } from 'react-i18next';
import CertificationCard from './card.tsx';

function Certifications() {
    const { t } = useTranslation();  // Hook to access translations

    return (
        <section className="certification" id="certification">
            <div className="certificationHeader">
                <h1>{t('certification_title')}</h1>
            </div>

            <div className="certificationContainer">
                <CertificationCard
                    href="./certificate_scrum.pdf"
                    imageSrc="./logoCertiprof.png"
                    title="Scrum Foundation Professional Certification SFPC"
                    issuer={t('issued_by')}
                    certificateDescription={t('scrum_cert')}
                    issuerLink="https://certiprof.com/"
                    site="Certiprof"
                />
                <CertificationCard
                    href="./certificate_remote.pdf"
                    imageSrc="./logoCertiprof.png"
                    title="Remote Work Professional Certification - RWPC™"
                    issuer={t('issued_by')}
                    certificateDescription={t('remote_cert')}
                    issuerLink="https://certiprof.com/"
                    site="Certiprof"
                />
            </div>
        </section>
    );
}

export default Certifications;
