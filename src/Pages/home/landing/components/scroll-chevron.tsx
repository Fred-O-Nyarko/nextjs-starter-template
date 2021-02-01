import React from "react";
import "./style.css";
export default function ScrollDown() {
  return (
    <a
      className="center-con position-absolute scroll-down"
      href="#firstSection"
    >
      <div className="round">
        <span id="span"></span>
        <span id="span"></span>
        <span id="span"></span>
        <span id="span"></span>
      </div>
    </a>
  );
}
