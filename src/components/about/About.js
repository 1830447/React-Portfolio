import React from "react";
import "./About.css";
import yo from '../../media/yo.jpg'

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Acerca de mi</h3>
        <p>
          ingeiero en TI en busca de una salida laboral y practicar sus conociminetos.
        </p>
      </div>
      <div className="about-img">
        <img
          src={yo}
          alt="about"
        />
      </div>
    </div>
  );
};

export default About;
