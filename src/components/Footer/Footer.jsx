import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer-wrapper">
      <div className="footer-container">
        <footer className="flexCol">
          <div className="flexCol first">
            <div className="top">
              <h2 className="logo">
                <span>get</span>
                <span>linked</span>
              </h2>
              <p>
                Getlinked Tech Hackathon is a technology innovation program
                established by a group of organizations with the aim of
                showcasing young and talented individuals in the field of
                technology
              </p>
            </div>
            <div className="flex">
              <span>Terms of Use </span>
              <hr />
              <span>Privacy Policy</span>
            </div>
          </div>
          <div className="second">
            <h4>Useful Links</h4>
            <ul className="flexCol">
              <li>Overview</li>
              <li>Timeline</li>
              <li>FAQs</li>
              <li>Register</li>
            </ul>
            <div className="flex">
              <span>Follow us</span>
              <div className="flex social-links">
                <img src="./images/instagram.svg" alt="" />
                <img src="./images/x.svg" alt="" />
                <img src="./images/facebook.svg" alt="" />
                <img src="./images/linkedin.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="third">
            <h4>Contact Us</h4>
            <div className="flexCol">
              <div className="flex contact-info">
                <img src="./images/phone.svg" alt="" />
                <span className="contact-info-text">+234 6707653444</span>
              </div>
              <div className="flex contact-info">
                <img src="./images/location.svg" alt="" />
                <span className="contact-info-text">
                  27,Alara Street <br /> Yaba 100012 <br /> Lagos State
                </span>
              </div>
            </div>
          </div>
        </footer>
        <div className="copyright">
          All rights reserved. &copy; getlinked Ltd.
        </div>
      </div>
    </section>
  );
};

export default Footer;
