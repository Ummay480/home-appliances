"use client";

import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope } from "react-icons/fa";
import "../../styles/Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-left">
        <p>Follow us:</p>
        <div className="social-icons">
          {/* Social Media Links */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-circle"
            // Ensures the icons are white
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-circle"
          
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-circle"
           
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      <div className="header-center">
        <p>Winter is coming! 50% off for new year</p>
      </div>

      <div className="header-right">
        <div className="contact-info">
          {/* WhatsApp Link for Phone Icon */}
          <a
            href="https://wa.me/982531189"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
            style={{ color: "white" }}
          >
            <FaPhone className="phone-icon" />
            <span className="contact-text">(+98) 253-1189</span>
          </a>

          {/* Email Link */}
          <a
            href="mailto:pigmentagency@gmail.com"
            className="contact-icon"
            style={{ color: "white" }}
          >
            <FaEnvelope />
            <span className="contact-text">pigmentagency@gmail.com</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
