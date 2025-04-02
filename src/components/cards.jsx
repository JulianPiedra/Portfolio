import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import { useState } from "react";
// Reusable Certification Card Component
function CertificationCard({ href, imageSrc, title, issuer, certificateDescription, issuerLink, site }) {
    const [transform, setTransform] = useState({ x: 0, y: 0, glowX: 50, glowY: 50 });

    const handleMouseMove = (e) => {
        const { width, height, left, top } = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / 10; // Aumentar el factor de sensibilidad
        const y = (e.clientY - top - height / 2) / 10;  // Aumentar el factor de sensibilidad

        const glowX = (e.clientX - left) / width * 100;
        const glowY = (e.clientY - top) / height * 100;

        setTransform({ x, y, glowX, glowY });
    };

    const handleMouseLeave = () => {
        setTransform({ x: 0, y: 0, glowX: 50, glowY: 50 });
    };

    return (
        <a
            className="card"
            href={href} target="_blank"
            rel="noopener noreferrer"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `perspective(1000px) rotateY(${-transform.x}deg) rotateX(${transform.y}deg) scale3d(1, 1, 1)`,
                boxShadow: `10px 10px 30px rgba(255, 0, 255, 0.5), 
                            -10px -10px 30px rgba(0, 255, 255, 0.5)`,
                background: `radial-gradient(circle at ${transform.glowX}% ${transform.glowY}%, 
                            rgba(255, 255, 255, 0.2), transparent)`,
                transition: 'transform 0.2s ease', // Eliminar el retraso en la transición para que sea en tiempo real
            }}
        >
            <img src={imageSrc || "default-image.png"} alt="Certification" />
            <div className="info">
                <p>{title}</p>
                <p>
                    {issuer}
                    <span className="external-link">
                        <a href={issuerLink} target="_blank" rel="noopener noreferrer" className="issuerLink">{site}</a>
                    </span>
                </p>
                <p>{certificateDescription}</p>
            </div>
        </a>
    );
}
function ProjectCard({ imageSrc, title, github, site, description, siteLang, techStack }) {


    return (
        <div className="card-project">
            <img
                className="card__background"
                src={imageSrc}
                alt={title}

            />
            <div className="card__content | flow">
                <div className="card__content--container | flow">
                    <h2 className="card__title">{title}</h2>
                    <p className="card__description">
                        {description}
                    </p>
                    <div className="card__tech-stack">
                        {
                            techStack.map((tech, index) => {
                                return (

                                    <p key={index}>{tech}</p>
                                )
                            })
                        }
                    </div>
                    <div className="card__buttons"> 
                        <a href={site} target="_blank" className="card__button">{siteLang}</a>
                        <a href={github} target="_blank" className="card__button">Github</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CertificationCard;
export { CertificationCard, ProjectCard };


