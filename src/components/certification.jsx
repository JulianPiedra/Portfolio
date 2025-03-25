import React, { useEffect, useState, useRef } from "react";
import '../css/certification.css';
import { useTranslation } from 'react-i18next';
import CertificationCard from './cards.jsx';

function Certifications() {
    const { t } = useTranslation();  // Hook to access translations
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const certificationRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setIsVisible(true);
                    setHasAnimated(true);
                }
            },
            { threshold: 0.2 }
        );

        if (certificationRef.current) {
            observer.observe(certificationRef.current);
        }

        return () => {
            if (certificationRef.current) {
                observer.unobserve(certificationRef.current);
            }
        };
    }, [hasAnimated]);

    return (
        <section className="certification" id="certification" ref={certificationRef}>
            <div className={`certificationHeader ${isVisible ? "fadeInDown" : ""}`}>
                <h1>{t('certification_title')}</h1>
            </div>
            {isVisible && 
            <div className={`certificationContainer`} >
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
            }
        </section>
    );
}

export default Certifications;
