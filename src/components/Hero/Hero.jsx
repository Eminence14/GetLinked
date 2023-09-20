import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <header>
        <h3>Igniting a Revolution in HR Innovation</h3>
        <img src="./images/curved-line.svg" alt="" />
      </header>
      <div className="hero-container">
        <div className="left">
          <div>
            <div className="intro">
              <img className="hero-bulb" src="./images/bulb.svg" alt="" />
              <h2 className="clash">
                getlinked Tech <br /> Hackathon
                <span className="hack-num">1.0</span>
                <img className="hero-ill ill1" src="./images/link.svg" alt="" />
                <img className="hero-ill ill2" src="./images/sun.svg" alt="" />
              </h2>
            </div>
            <p>
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
            <button className="button">Register</button>
          </div>
          <div className="timer">
            <span className="timer-number">00</span>H
            <span className="timer-number">00</span>M
            <span className="timer-number">00</span>S
          </div>
        </div>
        <div className="right">
          <img src="public/images/hero-avatar.png" alt="" />
          <img src="public/images/hero-stars.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
