import React from "react";
import "./header.css";
import intro from "../../Assets/intro.png";
import advimg from "../../Assets/advimg.png";
export default function Header() {
  return (
    <div className="outer-header" id="Home">
      <div className="header-container">
        <div className="header-content">
          <div className="header-quote">
            <h1>Let’s Build Something amazing with GPT-3 OpenAI</h1>
          </div>
          <div className="header-content-container">
            <div className="header-content-text_container">
              <text className="header-content-text">
                Yet bed any for travelling assistance indulgence unpleasing. Not
                thoughts all exercise blessing. Indulgence way everything joy
                alteration boisterous the attachment. Party we years to order
                allow asked of.
              </text>
            </div>

            <div className="header-content-input-container">
              <div className="header-content-input-area-container">
                <input
                  className="header-content-input-area"
                  type="email"
                  placeholder="Your Email Address"
                />
              </div>
              <button className="header-content-input-button">
                Get Started
              </button>
            </div>
          </div>
          <div className="header-adver">
            <div className="header-adver-img">
              <img src={advimg} alt="adver" />
            </div>
            <div className="header-adver-text">
              <text>
                1,600 people requested access a visit in last 24 hours
              </text>
            </div>
          </div>
        </div>
        <div className="header-image">
          <img src={intro} alt="intro" />
        </div>
      </div>
    </div>
  );
}
