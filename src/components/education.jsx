import React, { useEffect, useState, useRef } from "react";
import '../css/education.css';
import { useTranslation } from 'react-i18next';

function Education() {
    const { t } = useTranslation();
    const [selected, setSelected] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const [animationComplete, setAnimationComplete] = useState(false); // Track animation completion
    const educationRef = useRef(null);

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

        if (educationRef.current) {
            observer.observe(educationRef.current);
        }

        return () => {
            if (educationRef.current) {
                observer.unobserve(educationRef.current);
            }
        };
    }, [hasAnimated]);

    useEffect(() => {
        if (isVisible) {
            // Set a timeout to remove the scaleUp class after the animation duration (1s in this case)
            const timeout = setTimeout(() => {
                setAnimationComplete(true);
            }, 1000); // matches the duration of the scaleUp animation

            return () => clearTimeout(timeout); // Cleanup timeout on unmount or re-render
        }
    }, [isVisible]);

    const values = {
        0: {
            alt: "Colegio Francisca Carrasco",
            text: t('high_school_description')
        },
        1: {
            alt: "Idiomas.cr",
            text: t('conversation_english_description')
        },
        2: {
            alt: "Colegio Universitario de Cartago",
            text: t('higher_education_description')
        },
    };

    return (
        <section className="education" id="education" ref={educationRef}>
            <div className={`educationHeader ${isVisible ? "fadeInDown" : ""}`}>
                <h1>{t('education_title')}</h1>
                <h2>{t('education_background')}</h2>
            </div>

            <div className="educationContainer">
                <div className="buttons">
                    <div className={`selected ${isVisible && !animationComplete ? "scaleUp" : ""}`} style={{ transform: `translateY(${selected * 105}%)` }}></div>
                    <div className="button" onClick={() => { setSelected(0) }}>
                        <img src="./francisca.jpg" alt={values[0].alt} />
                        <div className="buttonText">
                            <h3>{t('high_school')}</h3>
                            <h2>Colegio Francisca Carrasco Jiménez, <span>CR-C</span></h2>
                        </div>
                    </div>
                    <div className="button" onClick={() => { setSelected(1) }}>
                        <img src="./idiomas.jpg" alt={values[1].alt} />
                        <div className="buttonText">
                            <h3>{t('conversational_english')}</h3>
                            <h2>Idiomas.CR, <span>CR-C</span></h2>
                        </div>
                    </div>
                    <div className="button" onClick={() => { setSelected(2) }}>
                        <img src="./CUC.png" alt={values[2].alt} />
                        <div className="buttonText">
                            <h3>{t('higher_education')}</h3>
                            <h2>Colegio Universitario de Cartago, <span>CR-C</span></h2>
                        </div>
                    </div>
                </div>

                <div className={`card ${isVisible ? "moveRight" : ""}`}>
                    <h2>{values[selected].alt}</h2>
                    <p>
                        {values[selected].text.split("\n").map((line, index) => (
                            <span key={index}>
                                {line}
                                <br />
                            </span>
                        ))}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Education;
