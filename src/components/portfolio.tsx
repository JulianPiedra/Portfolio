import { useEffect, useState } from "react";
import React from "react";
import '../css/portfolio.css'
import { useTranslation } from 'react-i18next';
function Portfolio() {
  const { t } = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <div>
      <div className="video-overlay">
        <video autoPlay={true} preload="true" loop={true} id="bg-video" className="bg-video" src="./wallpaper2.mp4"></video>
      </div>
      <div className="portfolio" id="portfolio">
        <h1 className={isLoaded ? 'fade-in-up' : ''}>{t('portfolio_line_one')}</h1>
        <h1 className={isLoaded ? 'fade-in-up' : ''}>{t('name_intro')}<span>{t('name_portfolio')}</span></h1>
        <h2 className={isLoaded ? 'fade-in-up' : ''}>{t('introduction')}</h2>
        <a className={isLoaded ? 'fade-in-up' : ''} href="#aboutMe">{t('get_to_know_me')}</a>
      </div>


    </div>
  );

}
export default Portfolio;
