import React from "react";
import "./cta.css";
export default function Cta() {
  return (
    <div className="cta-outer">
      <div className="cta-inner">
        <div className="cta-left-container">
          <div className="cta-left-container-text">
            Request Early Access to Get Started
          </div>
          <div className="cta-left-container-quote">
            Register today & start exploring the endless possiblities.
          </div>
        </div>
        <div className="cta-right-container">
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
}
