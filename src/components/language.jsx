import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // Importing useTranslation hook from react-i18next

const Language = () => {
  const { i18n } = useTranslation(); // Access the i18n instance to manage languages
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // State to keep track of selected language

  // Function to change the language when a flag is clicked
  const handleChangeLanguage = (code) => {
    setSelectedLanguage(code); // Update the selected language state
    i18n.changeLanguage(code); // Change the language using i18n's changeLanguage method
  };

  return (
    <div
      onClick={() => handleChangeLanguage(selectedLanguage === 'en' ? 'es' : 'en')} // Toggle between 'en' and 'es' on click
      onMouseEnter={(e) => (e.target).style.transform = 'scale(1.1)'} // Scale up on hover
      onMouseLeave={(e) => (e.target).style.transform = 'scale(1)'} // Scale back to normal when mouse leaves
    >

      {/* Flag image based on the selected language */}
      <img
        src={
          selectedLanguage === 'en' 
            ? './us.png'  // Display the US flag for English
            : './es.png' // Display the Spain flag for Spanish
        }
        alt={selectedLanguage} // Set alt attribute to the current language
        style={{ width: '30px', height: '22px', marginTop: '5px', cursor: 'pointer', 
          transition: 'transform 0.3s ease', 
          backfaceVisibility: 'hidden', 
          transformStyle: 'preserve-3d', 
          willChange: 'transform', 
          transform: 'translateZ(0)', }} // Style for the flag image
      />
    </div>
  );
};

export default Language;
