import React from "react";
import "./possibility.css";
import feature from "../../Assets/Feature.png";
export default function Possibility() {
  return (
    <div className="poss-outer">
      <div className="poss-inner">
        <div className="poss-left-image">
          <img src={feature} alt="feature" />
        </div>
        <div className="poss-right-container">
          <div className="poss-right-container-adver">
            <div className="poss-right-container-adver1">
              Request Early Access to Get Started
            </div>
            <div className="poss-right-container-quote">
              The possibilities are beyond your imagination
            </div>
            <div className="poss-right-container-text">
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy
              alteration boisterous the attachment. Party we years to order
              allow asked of.
            </div>
            <div className="poss-right-container-adver2">
              Request Early Access to Get Started
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
