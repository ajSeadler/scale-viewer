import React from 'react';
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons'; // Import a music icon from Font Awesome

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          Thank you for using the <strong>Circle of Fifths Viewer</strong>! I hope you enjoy exploring musical keys. 
          This is a solo project I built on the side, so be sure to check back for updates!
        </p>
        <nav className="footer-nav">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
          <a href="/contact">Contact Us</a>
        </nav>
      </div>
      <div className="made-with-love">
        Made with <FontAwesomeIcon icon={faMusic} style={{ color: '#1a73e8' }} /> in OKC
      </div>
    </footer>
  );
};

export default Footer;
