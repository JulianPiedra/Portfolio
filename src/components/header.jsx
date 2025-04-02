import React, { useEffect, useState } from "react";
import '../css/header.css';
import { useTranslation } from 'react-i18next';
import Language from './language.jsx'; // Importing Language component
import { isMobile } from 'react-device-detect'; // Checking if the device is mobile

function Header() {
    const { t } = useTranslation(); // Hook to access translations
    const [isScrolled, setIsScrolled] = useState(false); // State to track if page is scrolled
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle mobile menu open/close

    // Toggle the mobile menu state
    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState); // Toggle the menu open/close
    };

    // Handle clicking outside of the mobile menu to close it
    const handleClickOutside = (event) => {
        if (isMenuOpen && !event.target.closest(".mobileNav") && !event.target.closest(".hamburger")) {
            setIsMenuOpen(false); // Close the menu if clicking outside
        }
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
        window.addEventListener("click", handleClickOutside); // Add click event listener for closing the menu
        return () => {
            window.removeEventListener("scroll", handleScroll); // Clean up event listener on component unmount
            window.removeEventListener("click", handleClickOutside); // Clean up click event listener
        };
    }, [isMenuOpen]);
    const NavLinks = ({ showLanguage }) => {
        return (
            <ul>
                <li>
                    <a href="#aboutMe">{t('about_me_title')} </a>
                </li>
                <li>
                    <a href="#education">{t('education_title')}</a>
                </li>
                <li>
                    <a href="#project">{t('project_title')}</a>
                </li>
                <li>
                    <a href="#certification">{t('certification_title')}</a>
                </li>
                <li>
                    <a href="#contactMeContainer">{t('contact_me_title')}</a>
                </li>
                {showLanguage && <Language />}
            </ul>
        );
    }



    return (
        // Check if the device is mobile to render mobile-specific navigation
        isMobile ? (
            <nav className={`Header ${isScrolled ? "scrolled" : ""}`} >  {/* Add scrolled class when page is scrolled */}
                <div className="navMobile">
                    {/* Logo section */}
                    <div className="logo">
                        <a href="#portfolio">
                            <img src="./logo.png" alt="Logo" /> {/* Logo image */}
                        </a>
                    </div>

                    {/* Navigation options */}
                    <div className="options">
                        {/* Language component */}
                        <Language />

                        {/* Hamburger icon to open/close mobile menu */}
                        <div className="hamburger" onClick={toggleMenu}>
                            <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
                            <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
                            <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
                        </div>
                    </div>
                </div>

                {/* Mobile menu: Appears when isMenuOpen is true */}
                {isMenuOpen && (
                    <aside className="mobileNav">
                        {/* Navigation links */}
                        <NavLinks showLanguage={false} />
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

                    {/* Navigation links */}
                    <NavLinks showLanguage={true} />
                    {/* Language component */}
                </div>
            </nav>
        )
    );
};

export default Header;
