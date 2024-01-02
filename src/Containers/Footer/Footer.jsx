import React from "react";
import "./footer.css";
import logo from "../../Assets/logo.png";
export default function Footer() {
  return (
    <div className="footer-outer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-top-quote">
            Do you want to step in to the future before others
          </div>
          <div className="footer-top-button">
            <button>Get Early Access</button>
            <div className="glass"></div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-left-container">
            <div className="footer-bottom-left-container-logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="footer-bottom-left-container-text">
              Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
            </div>
            <div></div>
          </div>
          <div className="footer-bottom-right-container">
            <div className="footer">
              <div className="footer-heading">Links</div>
              <div className="footer-links">Overons</div>
              <div className="footer-links">Social Media</div>
              <div className="footer-links">Counters</div>
              <div className="footer-links">Contact</div>
            </div>
            <div className="footer">
              <div className="footer-heading">Company</div>
              <div className="footer-links">Terms & Conditions</div>
              <div className="footer-links">Privacy Policy</div>
              <div className="footer-links">Contact</div>
            </div>
            <div className="footer">
              <div className="footer-heading">Get in touch</div>
              <div className="footer-links">
                Crechterwoord K12 182 DK Alknjkcb
              </div>
              <div className="footer-links">085-132567</div>
              <div className="footer-links">info@payme.net</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
