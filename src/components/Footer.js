import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Импорт React-обертки для иконок
import { faInstagram, faLinkedin, faGithub, faFacebook, faTelegram } from '@fortawesome/free-brands-svg-icons'; // Социальные сети
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Почта

const Footer = () => {
  return (
    <footer className="footer-container" id="contact-btn">
      <div className="contact-button">
        <div className="contacts">
          <h2 className="visually-hidden">Contacts:</h2>
          <a href="https://www.instagram.com/leorjini" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="1.2x" />
          </a>
          <a href="https://www.linkedin.com/in/oleksii-kozyrev-106b37261" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="1.2x" />
          </a>
          <a href="https://github.com/0leks11" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="1.2x" />
          </a>
          <a href="https://www.facebook.com/faa.hfvptc" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="1.2x" />
          </a>
          <a href="https://t.me/Leorjini" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTelegram} size="1.2x" />
          </a>
          <a href="mailto:ak.kozyrev01@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} size="1.2x" />
          </a>
        </div>
        <h4 className="rights">© 2024 Oleksii Kozyrev. All rights reserved.</h4>
      </div>
    </footer>
  );
};

export default Footer;