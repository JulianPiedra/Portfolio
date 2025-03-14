import React from "react";

// Reusable Certification Card Component
function CertificationCard ({ href, imageSrc, title, issuer, certificateDescription, issuerLink, site, className}) {
    return (
        <a className={className} href={href} target="_blank" rel="noopener noreferrer">
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
