import React from 'react';

import myPic from '../images/furret.png';

const About = () => {
    return (
        <section className="sec even about">
            <h1>ABOUT ME</h1>
            <div className="flexbox">
                <div className="pic">
                    <img src={myPic} alt="me" className="me"/>
                </div>
                <div className="intro">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam tempor laoreet. Vestibulum eleifend vitae orci ut pellentesque. Duis eros orci, mollis vitae dui eu, faucibus mattis neque. Mauris faucibus nunc at ex consectetur commodo. Nulla sollicitudin massa erat, ut dictum mi pharetra at. Proin nec pretium risus, at pretium lectus. Donec elementum lacus quis bibendum pellentesque. Vivamus tristique mollis bibendum. Morbi suscipit massa ac magna molestie ultrices.
                </div>
            </div>
        </section>
    );
}

export default About;