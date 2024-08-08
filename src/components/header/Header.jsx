import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import { curt, darkLight, forkKnife } from "../../assets/index";

const Header = ({ basketNumber }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav>
      <div className="container">
        <div className="nav-items">
          <div className="left-nav-items">
            <NavLink to="/home">
              <img src={forkKnife} alt="logo" />
            </NavLink>
            <p>eatly</p>
            <NavLink className="two-links" to="/home">
              Home
            </NavLink>
            <NavLink className="two-links" to="/dishes">
              Dishes
            </NavLink>
          </div>
          <div className="right-nav-items">
            <NavLink to="/basket" className="basket">
              <img src={curt} alt="logo" />
              <div className="basket-above">
                {basketNumber === 0 ? null : basketNumber}
              </div>
            </NavLink>

            <NavLink to="/login">
              <button className="log">Login</button>
            </NavLink>
            <NavLink to="/">
              <button className="log">Sign Up</button>
            </NavLink>
            <div className="mode-border">
              <img src={darkLight} alt="darkLight" />
            </div>
            <div className="hamburger-menu">
              <button
                className={`menu-btn ${isOpen ? "open" : ""}`}
                onClick={toggleMenu}
              >
                <div className="menu-btn-burger"></div>
                <div className="menu-btn-burger"></div>
                <div className="menu-btn-burger"></div>
              </button>
              <div className={`menu-items ${isOpen ? "open" : ""}`}>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/dishes">Dishes</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Sign Up</NavLink>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </nav>
  );
};

export default Header;
