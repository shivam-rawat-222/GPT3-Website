import React from "react";
import "./brand.css";
import google from "../../Assets/google.png";
import dropbox from "../../Assets/dropbox.png";
import shopify from "../../Assets/shopify.png";
import slack from "../../Assets/slack.png";

export default function Brand() {
  return (
    <div className="brand-outer">
      <div className="brand-inner">
        <img src={google} alt="" />
        <img src={dropbox} alt="" />
        <img src={shopify} alt="" />
        <img src={slack} alt="" />
      </div>
    </div>
  );
}
