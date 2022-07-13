import React from "react";
import Typist from "react-typist";

import "../css/module/Typist.css";

const Main = () => {
  return (
    <section
      className="sec main"
      style={{ height: window.innerHeight - 100, display: "block" }}
    >
      <div className="flex">
        <div className="typing">
          <Typist>
            Hi! 👋 I'm
            <span />
            <br />
            <br />
            <span>
              <Typist.Delay ms={500} />
              SHIN JONGSO
            </span>
            <br />
            <br />
            <Typist.Delay ms={500} />
            Web frontend developer
          </Typist>
        </div>
      </div>
    </section>
  );
};

export default Main;
