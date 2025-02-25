import React, { useEffect, useState } from "react";
import '../css/footer.css';
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation();  // Hook to access translations
    const [resume, setResume] = useState('');
    // Set the resume link based on the language
    useEffect(() => {
        if (t('language') === 'es') {
            setResume('./Curriculum-JulianPiedra.pdf');
        } else {
            setResume('./Resume-JulianPiedra.pdf');
        }
    }, [t]);
    return (
        <footer className="footer" id="footer">

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
            <div className="footerText">
                Copyright © {new Date().getFullYear()} Julian Piedra's Portfolio
            </div>


        </footer>
    );
}

export default Footer;
