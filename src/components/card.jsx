import { useState } from "react";
// Reusable Certification Card Component
function CertificationCard({ href, imageSrc, title, issuer, certificateDescription, issuerLink, site }) {
    const [transform, setTransform] = useState({ x: 0, y: 0, glowX: 0, glowY: 0 });

    const handleMouseMove = (e) => {
        const { width, height, left, top } = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / 10;
        const y = (e.clientY - top - height / 2) / 10;

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
                transform: `rotateY(${transform.x}deg) rotateX(${-transform.y}deg)`,
                boxShadow: `10px 10px 30px rgba(255, 0, 255, 0.5), 
                            -10px -10px 30px rgba(0, 255, 255, 0.5)`,
                background: `radial-gradient(circle at ${transform.glowX}% ${transform.glowY}%, 
                            rgba(255, 255, 255, 0.2), transparent)`,
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

export default CertificationCard;
