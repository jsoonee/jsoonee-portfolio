import React from 'react';

import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";

const Skill = () => {
    return (
        <section className="sec odd skill">
            <h1>SKILLS</h1>
            <div className="flexbox">
                <div className="sLogo">
                    <SiHtml5/>
                </div>
                <div className="sLogo">
                    <SiCss3/>
                </div>
                <div className="sLogo">
                    <SiJavascript/>
                </div>
                <div className="sLogo">
                    <SiReact/>
                </div>
                
            </div>
        </section>
    );
}

export default Skill;