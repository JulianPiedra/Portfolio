import React, { useEffect, useState, useRef } from "react";
import "../css/aboutMe.css";
import { useTranslation } from "react-i18next";
import { faGraduationCap, faCode, faLaptop, faCog, faBullseye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AboutMe() {
    const { t } = useTranslation();
    const [resume, setResume] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const aboutMeRef = useRef(null);

    const skills = [
        "C#", "C++", "C", "VB.NET", "JavaScript", "React", "Node.js",
        "SQL", "MongoDB", "HTML", "CSS", "NoSQL", "TypeScript", "Python", "PHP", "Java"
    ];

    useEffect(() => {
        const language = t("language");
        setResume(language === "es" ? "./assets/Curriculum-JulianPiedra.pdf" : "./Resume-JulianPiedra.pdf");
    }, [t]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setIsVisible(true);
                    setHasAnimated(true);
                }
            },
            { threshold: 0.3 }
        );

        if (aboutMeRef.current) {
            observer.observe(aboutMeRef.current);
        }

        return () => {
            if (aboutMeRef.current) {
                observer.unobserve(aboutMeRef.current);
            }
        };
    }, [hasAnimated]);

    return (
        <section className="aboutMe" id="aboutMe" ref={aboutMeRef}>
            <div className="aboutMeContainer">
                <div className="aboutMeHeader">
                    <div className={`intro ${isVisible ? "fadeInUp" : ""}`}>
                        <h1>{t("about_me")}</h1>
                        <h2>{t("about_me_explore")}</h2>
                    </div>

                    <div className={`socialMedia ${isVisible ? "scaleUp" : ""}`}>
                        <a href="https://www.linkedin.com/in/julian-piedra-89a494306" target="_blank" rel="noopener noreferrer">
                            <img src="./linkedin.svg" alt="LinkedIn Icon" />
                        </a>
                        <a href="https://github.com/JulianPiedra" target="_blank" rel="noopener noreferrer">
                            <img src="./github.svg" alt="GitHub Icon" />
                        </a>
                        <a href={resume} target="_blank" rel="noopener noreferrer">
                            <img src="./resume.svg" alt="Resume Icon" />
                        </a>
                    </div>
                </div>

                <div className="aboutMeContent">
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faGraduationCap} bounce style={{ color: "#FF6347" }} className="icon" />
                            <p className={`text ${isVisible ? "moveRight" : ""}`}>{t("about_me_line_one")}</p>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCode} bounce style={{ color: "#4CAF50" }} className="icon" />
                            <p className={`text ${isVisible ? "moveRight" : ""}`}>{t("about_me_line_two")}</p>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faLaptop} bounce style={{ color: "#2196F3" }} className="icon" />
                            <p className={`text ${isVisible ? "moveRight" : ""}`}>{t("about_me_line_three")}</p>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCog} bounce style={{ color: "#FF9800" }} className="icon" />
                            <p className={`text ${isVisible ? "moveRight" : ""}`}>{t("about_me_line_four")}</p>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faBullseye} bounce style={{ color: "#9C27B0" }} className="icon" />
                            <p className={`text ${isVisible ? "moveRight" : ""}`}>{t("about_me_line_five")}</p>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Skills Section */}
            <div className="skillsList">
                <div className="skillConveyor">
                    {/* Create a sliding effect for skills */}
                    {Array(2).fill(null).map((_, slideIndex) => (
                        <div className="skillSlide" key={slideIndex}>
                            {skills.map((skill, index) => (
                                <span key={`${slideIndex}-${index}`} className="skills">{skill}</span>
                            ))}
                        </div>  
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
