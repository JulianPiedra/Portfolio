import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
const Language = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const languages = [
    { code: 'en', name: 'English', flag: '/us.png' },
    { code: 'es', name: 'Español', flag: '/es.png' },
  ];

  const handleChangeLanguage = (code: any) => {
    setSelectedLanguage(code);
    i18n.changeLanguage(code);
  };

  return (
    <div
      style={{
        position: 'fixed',
        display: 'flex',
        alignSelf: 'center',
        top: '0',
        right: '0',
        margin: '10px',
        zIndex: 1000,
      }}
    >
      <div
        onClick={() => handleChangeLanguage(selectedLanguage === 'en' ? 'es' : 'en')}
        style={{
          padding: '15px',
          cursor: 'pointer',
          backgroundColor: 'transparent',
          alignItems: 'center',
          justifyContent: 'center',
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
              ? '/us.png'
              : '/es.png'
          } // Añadir condición para la bandera alemana
          alt={selectedLanguage}
          style={{ width: '30px', height: '22px', marginTop: '5px' }}
        />

      </div>


    </div>
  );
};

export default Language;