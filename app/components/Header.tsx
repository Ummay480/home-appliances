"use client";

import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-left">
        <p>Follow us:</p>
        <div className="social-icons">
          <a href="#" className="icon-circle"><FaFacebook /></a>
          <a href="#" className="icon-circle"><FaInstagram /></a>
          <a href="#" className="icon-circle"><FaTwitter /></a>
        </div>
      </div>
      <div className="header-center">
        <p>Winter is coming! 50% off for new year</p>
      </div>
      <div className="header-right">
        <div className="contact-info">
          <FaPhone className="contact-icon phone-icon" />
          <span className="contact-text">(+98) 253-1189</span>
          <FaEnvelope className="contact-icon" />
          <span className="contact-text">pigmentagency@gmail.com</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
