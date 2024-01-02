import React, { useState } from "react";
import "./navbar.css";
import logo from "../../Assets/logo.png";
import { IoClose } from "react-icons/io5";
import { MdMenuOpen } from "react-icons/md";
export default function Navbar() {
  const [togglemenu, settogglemenu] = useState(false);
  return (
    <div className="outer-nav ">
      <div className="inner-nav">
        <div className="nav-container">
          <div className="nav-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="nav-container-links">
            <p>
              <a href="#Home">Home</a>
            </p>
            <p>
              <a href="#What">What is GPT</a>
            </p>
            <p>
              <a href="#Openai">OpenAI</a>
            </p>
            <p>
              <a href="#CaseStudies">Case Studies</a>
            </p>
            <p>
              <a href="#Library">Library</a>
            </p>
          </div>
        </div>
        <div className="nav-sign">
          <div className="nav-signin">
            <a href="#signin">Sign In</a>
          </div>
          <div className="nav-signout">
            <button className="nav-signout-button">Sign Out</button>
          </div>
          <div className="nav-menu-container">
            {togglemenu ? (
              <IoClose
                size={26}
                onClick={() => {
                  settogglemenu(false);
                }}
              />
            ) : (
              <MdMenuOpen
                size={26}
                onClick={() => {
                  settogglemenu(true);
                }}
              />
            )}
            {togglemenu && (
              <div className="nav-menu scale-up-ver-top">
                <div className="nav-menu-content"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
