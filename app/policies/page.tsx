"use client"

import React from 'react';
import styles from './OurPolicies.module.css';

const OurPolicies: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Policies</h1>

      <section className={styles.policySection}>
        <h2 className={styles.policyTitle}>1. Privacy Policy</h2>
        <p>
          We take your privacy seriously. This policy explains how we collect, use, and protect your personal
          information when you visit our website or interact with our services. Your data will never be shared with
          third parties without your consent, except where required by law.
        </p>
        <ul>
          <li>Personal information is only collected for the purpose of providing services.</li>
          <li>Cookies are used to improve the user experience.</li>
          <li>You can request access to or deletion of your personal information at any time.</li>
        </ul>
      </section>

      <section className={styles.policySection}>
        <h2 className={styles.policyTitle}>2. Terms of Service</h2>
        <p>
          By using our website and services, you agree to the terms outlined in this agreement. These terms govern
          the use of our site, including purchasing products or services, creating accounts, and interacting with other
          users.
        </p>
        <ul>
          <li>You must be at least 18 years old to use our services.</li>
          <li>We reserve the right to modify or terminate our services at any time.</li>
          <li>All content on the site is protected by copyright laws.</li>
        </ul>
      </section>

      <section className={styles.policySection}>
        <h2 className={styles.policyTitle}>3. Return and Refund Policy</h2>
        <p>
          We strive to ensure that you are satisfied with our products or services. If you are not completely satisfied,
          we offer a return and refund policy within a specified period.
        </p>
        <ul>
          <li>Returns are accepted within 30 days of purchase.</li>
          <li>Products must be unused and in their original packaging to be eligible for a refund.</li>
          <li>Refunds will be processed to the original payment method.</li>
        </ul>
      </section>

      <section className={styles.policySection}>
        <h2 className={styles.policyTitle}>4. Shipping Policy</h2>
        <p>
          We offer reliable and efficient shipping for all orders placed on our website. Delivery times vary depending
          on your location.
        </p>
        <ul>
          <li>Orders are processed within 1-2 business days.</li>
          <li>Shipping fees are calculated at checkout.</li>
          <li>We currently ship to [list of countries or regions].</li>
        </ul>
      </section>

      <section className={styles.policySection}>
        <h2 className={styles.policyTitle}>5. Security Policy</h2>
        <p>
          We use advanced security measures to ensure that your personal and financial information is safe. Our website
          uses SSL encryption and complies with industry-standard security practices.
        </p>
        <ul>
          <li>All payment information is securely processed.</li>
          <li>We regularly update our security protocols to prevent unauthorized access.</li>
          <li>You are responsible for maintaining the confidentiality of your account and password.</li>
        </ul>
      </section>

      <section className={styles.policySection}>
        <h2 className={styles.policyTitle}>6. Cookie Policy</h2>
        <p>
          Our website uses cookies to enhance user experience. By continuing to use our site, you consent to the use of
          cookies in accordance with this policy.
        </p>
        <ul>
          <li>Cookies are used to store preferences and improve site functionality.</li>
          <li>You can disable cookies in your browser settings, but some features may not function correctly.</li>
        </ul>
      </section>

      <section className={styles.policySection}>
        <h2 className={styles.policyTitle}>7. Acceptable Use Policy</h2>
        <p>
          Our services should be used responsibly and respectfully. We do not tolerate any activity that could harm our
          users, the website, or violate laws and regulations.
        </p>
        <ul>
          <li>No spamming, hacking, or abuse of the system.</li>
          <li>No illegal activities or uploading of harmful content.</li>
          <li>We reserve the right to suspend or terminate accounts involved in violations.</li>
        </ul>
      </section>

      <section className={styles.policySection}>
        <h2 className={styles.policyTitle}>8. Pricing and Payment Policy</h2>
        <p>
          Our pricing is transparent and clearly displayed on our website. We offer multiple payment methods, including
          credit cards, PayPal, and other secure payment gateways.
        </p>
        <ul>
          <li>All prices are displayed in [currency].</li>
          <li>Sales tax or VAT may apply based on your location.</li>
          <li>Payments are processed securely.</li>
        </ul>
      </section>

      <section className={styles.policySection}>
        <h2 className={styles.policyTitle}>9. Disclaimer</h2>
        <p>
          While we make every effort to ensure that the information on our website is accurate, we cannot guarantee that
          it is always up to date or error-free. All services are provided "as is," and we are not liable for any damages
          resulting from the use of our site.
        </p>
      </section>
    </div>
  );
};

export default OurPolicies;
