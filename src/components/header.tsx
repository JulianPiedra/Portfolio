import React, { useEffect, useState } from "react";
import '../css/header.css';
import { useTranslation } from 'react-i18next';
import Language from './language.tsx'; // Importing Language component
import { isMobile } from 'react-device-detect'; // Checking if the device is mobile

function Header() {
    const { t } = useTranslation(); // Hook to access translations
    const [isScrolled, setIsScrolled] = useState(false); // State to track if page is scrolled
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle mobile menu open/close

    // Toggle the mobile menu state
    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState); // Toggle the menu open/close
    };

    // Effect to handle scroll event and update the state
    useEffect(() => {
        // Function to check scroll position and update isScrolled state
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true); // Set to true if page is scrolled down
            } else {
                setIsScrolled(false); // Set to false if at the top of the page
            }
        };

        window.addEventListener("scroll", handleScroll); // Add scroll event listener
        return () => window.removeEventListener("scroll", handleScroll); // Clean up event listener on component unmount
    }, []);

    return (
        // Check if the device is mobile to render mobile-specific navigation
        isMobile ? (
            <nav className={`Header ${isScrolled ? "scrolled" : ""}`}> {/* Add scrolled class when page is scrolled */}
                <div className="navMobile">
                    {/* Logo section */}
                    <div className="logo">
                        <a href="#portfolio">
                            <img src="./logo.png" alt="Logo" /> {/* Logo image */}
                        </a>
                    </div>

                    {/* Navigation options */}
                    <div className="options">
                        {/* Hamburger icon to open/close mobile menu */}
                        <div className="hamburger" onClick={toggleMenu}>
                            <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
                            <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
                            <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
                        </div>

                        {/* Language selector component */}
                        <Language />
                    </div>
                </div>

                {/* Mobile menu: Appears when isMenuOpen is true */}
                {isMenuOpen && (
                    <aside className="mobileNav">
                        <ul>
                            {/* Mobile navigation links */}
                            <li>
                                <a href="#aboutMe" onClick={toggleMenu}>{t('about_me_title')} </a>
                            </li>
                            <li>
                                <a href="#education" onClick={toggleMenu}>{t('education_title')}</a>
                            </li>
                            <li>
                                <a href="#certification" onClick={toggleMenu}>{t('certification_title')}</a>
                            </li>
                            <li>
                                <a href="#contactMeContainer" onClick={toggleMenu}>{t('contact_me_title')}</a>
                            </li>
                        </ul>
                    </aside>
                )}
            </nav>
        ) : (
            // Desktop navigation layout
            <nav className={`Header ${isScrolled ? "scrolled" : ""}`}>
                <div className="navLinks">
                    {/* Logo section */}
                    <div className="logo">
                        <a href="#portfolio">
                            <img src="./logo.png" alt="Logo" />
                        </a>
                    </div>

                    {/* Desktop navigation links */}
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

                        {/* Language selector */}
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