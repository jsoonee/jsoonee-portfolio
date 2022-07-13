import React from "react";

import myPic from "../images/me.png";

import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";

const About = () => {
  return (
    <section className="sec about" id="about">
      <h1 className="sec-title">ABOUT ME</h1>
      <div className="flexbox">
        <div className="maxw">
          <div className="flex2">
            <div className="pic">
              <img src={myPic} alt="me" className="me" />
            </div>
            <div className="intro">
              <div className="iAlign">
                <div className="qLine">
                  <div className="lAlign">
                    <div className="quotes">
                      <ImQuotesLeft />
                    </div>
                    <div className="qCon">
                      <h2>quotes</h2>
                    </div>
                    <div className="quotes r">
                      <ImQuotesRight />
                    </div>
                  </div>
                </div>
                <div className="word">
                  <p>message1</p>
                  <p>message1</p>
                  <p>message1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
