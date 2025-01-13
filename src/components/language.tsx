import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
const Language = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const handleChangeLanguage = (code: any) => {
    setSelectedLanguage(code);
    i18n.changeLanguage(code);
  };

  return (
    <div>
      <div
        onClick={() => handleChangeLanguage(selectedLanguage === 'en' ? 'es' : 'en')}
        style={{
          cursor: 'pointer',
          transition: 'transform 0.3s ease',
          backfaceVisibility: 'hidden',
          transformStyle: 'preserve-3d',
          willChange: 'transform',
          transform: 'translateZ(0)',
        }}
        onMouseEnter={(e) => (e.target as HTMLDivElement).style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => (e.target as HTMLDivElement).style.transform = 'scale(1)'}
      >


        <img
          src={
            selectedLanguage === 'en'
              ? './us.png'
              : './es.png'
          } // Añadir condición para la bandera alemana
          alt={selectedLanguage}
          style={{ width: '30px', height: '22px', marginTop: '5px' }}
        />

      </div>


    </div>
  );
};

export default Language;