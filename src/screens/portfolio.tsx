import { useEffect, useState } from "react";
import React from "react";
import '../css/portfolio.css'
import { useTranslation } from 'react-i18next';
import ContactMe from '../components/contactMe.tsx'

function Portfolio() {
  const { t } = useTranslation();  // Hook para acceder a las traducciones

  return (
    <div>
      <div className="portfolio">
        <h1>{t('portfolio_line_one')}</h1>
        <p>{t('portfolio_line_two')}</p>
        <p>{t('portfolio_line_three')}</p>
        <p>{t('portfolio_line_four')}</p>
      </div>

      <ContactMe />

    </div>
  );

}
export default Portfolio;
