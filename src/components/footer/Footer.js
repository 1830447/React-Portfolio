import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Julio Alberto</h1>
        <p>ciudad Victoria</p>
      </div>
      <div className="footer-contact">
        <h3>Contactame</h3>
        <p>y pongamonos manos a la obra</p>
      </div>
      <div className="footer-sns">
        <div className="sns-links">
          <a href="https://www.linkedin.com/in/julio-alberto-zu%C3%B1iga-gallegos/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="https://twitter.com/julioalbertozu4" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter twitter"></i>
          </a>
          <a href="https://github.com/1830447" target="_blank" rel="noreferrer">
            <i className="fab fa-github github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
