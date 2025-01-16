import React from "react";

// Reusable Certification Card Component
function CertificationCard ({ href, imageSrc, title, issuer, certificateDescription, issuerLink, site }) {
    return (
        <a className="card" href={href} target="_blank" rel="noopener noreferrer">
            <img src={imageSrc || "default-image.png"} alt="Certification" />
            <div className="info">
                <p>{title}</p>
                <p>
                    {issuer} 
                    <span className="external-link">
                        <a href={issuerLink} target="_blank" rel="noopener noreferrer">{site}</a>
                    </span>
                </p>
                <p>{certificateDescription}</p>
            </div>
        </a>
    );
}

export default CertificationCard;