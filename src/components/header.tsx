import React, { useEffect, useState } from "react";
import '../css/header.css';
import { useTranslation } from 'react-i18next';
import Language from './language.tsx';

function Header() {
    const { t } = useTranslation(); // Hook to access translations
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 900) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`Header ${isScrolled ? "scrolled" : ""}`}>
            <div className="navLinks">
                <div>
                    <a href="#portfolio">{t('name_portfolio')}</a>
                </div>
                <ul>
                    <a href="#aboutMe">{t('about_me_title')}</a>
                    <a href="#contactMeContainer">{t('contact_me_title')}</a>
                    <a href="#education">{t('education_title')}</a>
                    <Language />
                </ul>
            </div>
        </nav>
    );
}

export default Header;
