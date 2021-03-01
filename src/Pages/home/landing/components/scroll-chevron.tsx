import React from "react";
import "./style.css";
import {Link} from 'react-scroll'
export default function ScrollDown() {
  return (
    // <a
    //   className="center-con position-absolute scroll-down"
    //   href="#firstSection"
    // >
    //   <div className="round">
    //     <span id="span"></span>
    //     <span id="span"></span>
    //     <span id="span"></span>
    //     <span id="span"></span>
    //   </div>
    // </a>

    <section id="scroll-down" className="demo">``
      <Link to="firstSection" spy={true} smooth={true} >
        <span></span>
      </Link>
    </section>
  );
}
