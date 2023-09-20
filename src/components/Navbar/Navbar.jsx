import React from "react";
import "./Navbar.css";
import { useRef } from "react";

const Navbar = () => {
  const hamburgerMenu = useRef();
  const toggleOpen = useRef();

  function toggleMenuOpen() {
    hamburgerMenu.current.classList.add("active");
    toggleOpen.current.classList.add("active");
  }
  function toggleMenuClose() {
    hamburgerMenu.current.classList.remove("active");
    toggleOpen.current.classList.remove("active");
  }

  return (
    <section className="navbar-wrapper">
      <div className="navbar-container">
        <nav className="flex">
          <h2 className="clash logo">
            <span>get</span>
            <span>linked</span>
          </h2>
          <div className="hamburger">
            <div
              className="toggle toggleMenuOpen"
              onClick={toggleMenuOpen}
              ref={toggleOpen}
            >
              <img src="./images/VectorHamburger.svg" alt="" />
            </div>
            <ul className="flexCol" ref={hamburgerMenu}>
              <div className="toggle toggleMenuClose" onClick={toggleMenuClose}>
                <img src="./images/CloseMenu.svg" alt="" />
              </div>
              <div className="flexCol inter list">
                <li>Timeline</li>
                <li>Overview</li>
                <li>FAQs</li>
                <li>Contact</li>
                <button className="button">Register</button>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
