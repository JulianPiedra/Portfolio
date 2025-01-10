import React, { useEffect, useState } from "react";
import '../css/header.css';
import { useTranslation } from 'react-i18next';
import Language from './language.tsx';
import { isMobile } from 'react-device-detect';

function Header() {
    const { t } = useTranslation(); // Hook to access translations
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        isMobile ? (
            <div className={`Header ${isScrolled ? "scrolled" : ""}`}>
                <div className="navMobile">

                    <div className="logo">
                        <a href="#portfolio">
                            <img src="./logo.png" alt="Logo" />
                        </a>
                    </div>
                    <div className="options">
                        <div className="hamburger" onClick={toggleMenu}>
                            <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
                            <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
                            <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
                        </div>
                        <Language />

                    </div>
                </div>

                {isMenuOpen && (
                    <aside className="mobileNav">
                        <ul>
                            <li>
                                <a href="#aboutMe" onClick={toggleMenu}>{t('about_me_title')} </a>
                            </li>
                            <li>
                                <a href="#education" onClick={toggleMenu}>{t('education_title')}</a>
                            </li>
                            <li>
                                <a href="#certification" onClick={toggleMenu}>{t('contact_me_title')}</a>
                            </li>
                            <li>
                                <a href="#contactMeContainer" onClick={toggleMenu}>{t('contact_me_title')}</a>
                            </li>

                        </ul>

                    </aside>
                )}
            </div>
        ) : (
            <nav className={`Header ${isScrolled ? "scrolled" : ""}`}>
                <div className="navLinks">
                    <div className="logo">
                        <a href="#portfolio">
                            <img src="./logo.png" alt="Logo" />
                        </a>
                    </div>
                    <ul>
                        <li>
                            <a href="#aboutMe">{t('about_me_title')} </a>
                        </li>
                        <li>
                            <a href="#education">{t('education_title')}</a>
                        </li>
                        <li>
                            <a href="#certification">{t('certification_title')}</a>
                        </li>
                        <li>
                            <a href="#contactMeContainer">{t('contact_me_title')}</a>
                        </li>

                        <li>
                            <Language />
                        </li>
                    </ul>
                </div>
            </nav>
        )
    );
};


export default Header;
