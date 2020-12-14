import React from 'react';
import './styles.scss';
import ZipoLogoWhite from '../../assets/img/ZipulogoWhite.svg';
import { IoLogoTwitter, ImFacebook, FaGoogle, AiFillYoutube } from 'react-icons/all'


const Footer = () => {
  const year = new Date()
  return (
    <div className="footerWrapper">
      <div className="footerTop">
        <div className="footerLogoSection">
          <img src={ZipoLogoWhite} alt="ZipoLogoWhite" />
          <p className="footerLogoSectionText">A valet is usually an employee of the establishment or an employeee of a third party valet service.</p>
          <div className="socialIcons">
            <IoLogoTwitter />
            <ImFacebook />
            <FaGoogle />
            <AiFillYoutube />
          </div>
        </div>
        <div className="footerLinkSection">
          <div className="footerLinkFirst">
            <a href="/">About Zipu</a>
            <a href="/">Contact Customer Service</a>
            <a href="/">Partner help</a>
            <a href="/">Safety resource center</a>
            <a href="/">Terms & Conditions</a>
          </div>
          <div className="footerLinkSecond">
            <a href="/">Motor park</a>
            <a href="/">Regions</a>
            <a href="/">States</a>
            <a href="/">Cities & Towns</a>
            <a href="/">Airports</a>
          </div>
          <div className="footerLinkThird">
            <a href="/">Parks</a>
            <a href="/">Hotels</a>
            <a href="/">Resorts</a>
            <a href="/">Guest Houses</a>
          </div>
        </div>
      </div>

      <div className="footerBottom">
        <p>Copyright C {year.getFullYear()} - 202 Zipu.com. All rights reserved</p>
      </div>

    </div>
  )
}

export default Footer;