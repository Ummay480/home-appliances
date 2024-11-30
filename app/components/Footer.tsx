"use client"
import React from 'react';
import Link from 'next/link';
import styles from"../../styles/Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Stay Connected Section */}
        <div className={styles.section}>
          <h3>Stay Connected</h3>
          <p>Address: Istanbul, Turkey</p>
          <p>Phone: (+90) 985 98 75</p>
          <h3>Follow us on social media</h3>
          <div className={styles.socialIcons}>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/twitter.png" alt="Twitter" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/facebook.png" alt="Facebook" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/linkdin.png" alt="LinkedIn" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/instagarm.png" alt="Instagram" />
            </a>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className={styles.section}>
          <h3>Mansoury.</h3>
          <ul>
            <li><Link href="/aboutUs"passHref>About Us</Link></li>
            <li><Link href="/career"passHref>Careers</Link></li>
            <li><Link href="/collabration"passHref>Collaboration</Link></li>
            <li><Link href="/dashboard"passHref>Dashboard</Link></li>
            <li><Link href="/policies"passHref>Policies</Link></li>
          </ul>
        </div>
        
        {/* Customer Services Section */}
        <div className={styles.section}>
          <h3>Customer Services</h3>
          <ul>
            <li><Link href="/help-center"passHref>Rules and Regulations</Link></li>
            <li><Link href="/track-order"passHref>Terms of Use</Link></li>
            <li><Link href="/returns"passHref>Return Procedure</Link></li>
            <li><Link href="/policies"passHref>Privacy Policy</Link></li>
            <li><Link href="/faq"passHref>Forums</Link></li>
          </ul>
        </div>
       
        {/* Quick Access Section */}
        <div className={styles.section}>
          <h3>Quick Access</h3>
          <ul>
            <li><Link href="/contact"passHref>Contact Us</Link></li>
            <li><Link href="/blog"passHref>Blog</Link></li>
            <li><Link href="/returns"passHref>Return Procedure</Link></li>
            <li><Link href="/policies"passHref>Privacy Policy</Link></li>
            <li><Link href="/faq"passHref>FAQ</Link></li>
          </ul>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>&copy; 2024-25 Ummay Kulsoom. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
