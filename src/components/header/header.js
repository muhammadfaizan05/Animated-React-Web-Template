import React from "react";
import './header.css'

import Fade from 'react-reveal/Fade';
export default function Header() {



    return <>
         <Fade  cascade>

        <div className="warpper">

        <nav className="navMenu">
            <a href="#" className="active">Home</a>
            <a href="#">Blog</a>
            <a href="#">Work</a>
            <a href="#">About</a>
            <div class="dot"></div>
        </nav>
        <h2 className="heading_text"> It's The Time To Go!</h2>
        </div>
         </Fade>
    </>
}