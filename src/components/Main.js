import React from 'react';
import Typist from 'react-typist';

import '../css/module/Typist.css';

const Main = () => {
    return (
        <div className="sec odd main" style={{ height: window.innerHeight - 100, display: 'block' }}>
            <div className="flex">
                <div className="typing">
                <Typist>
                    Hi! 👋 I'm<span></span><br/>
                    <Typist.Delay ms={500} /><span>SHIN JONGSO</span><br/>
                    <Typist.Delay ms={500} />A web frontend developer
                </Typist>
                </div>
            </div>
        </div>
    );
}

export default Main;