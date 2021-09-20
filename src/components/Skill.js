import React from 'react';

import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";

const Skill = () => {
    return (
        <section className="sec skill" id="skill">
            <h1>SKILLS</h1>
            <div className="flexbox">
                <div className="maxw">
                    <ul className="sUl">
                        <li className="liItem">
                            <div className="hov">
                                <SiHtml5/>
                                <p>HTML5</p>
                            </div>
                        </li>
                        <li className="liItem">
                            <div className="hov">
                                <SiCss3/>
                                <p>CSS3</p>
                            </div>
                        </li>
                        <li className="liItem">
                            <div className="hov">
                                <SiJavascript/>
                                <p>JavaScript</p>
                            </div>
                        </li>
                        <li className="liItem">
                            <div className="hov">
                                <SiReact/>
                                <p>React</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Skill;