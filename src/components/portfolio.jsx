import React from "react";
import '../css/portfolio.css'
import { useTranslation } from 'react-i18next';
function Portfolio() {
  const { t } = useTranslation();
  return (
    <section id="portfolio">
      {/*Background video*/}
      <div className="video-overlay">
        <video autoPlay={true} preload="true" loop={true} id="bg-video" className="bg-video" src="./wallpaper2.mp4"></video>
      </div>
      {/*Portfolio content*/}
      <div className="portfolio" >
        <h1 >{t('portfolio_line_one')}</h1>
        <h1 >{t('name_intro')}<span>{t('name_portfolio')}</span></h1>
        <h2 >{t('introduction')}</h2>
        <a href="#aboutMe">{t('get_to_know_me')}</a>
      </div>


    </section> 
  );

}
export default Portfolio;
