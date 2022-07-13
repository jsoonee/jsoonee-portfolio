import React, { useState, useEffect } from "react";

const Header = () => {
  const [header, setHeader] = useState("header");

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  const listenScrollEvent = (e) => {
    if (window.scrollY < 30) {
      return setHeader("");
    } else if (window.scrollY > 30) {
      return setHeader("header2");
    }
  };

  return (
    <header className={`header ${header}`}>
      <div className="container">
        <div className="head">
          <div className="logo">
            <a href="./">JS</a>
          </div>
          <div className="menu">
            <ul>
              <li>
                <a href="#about">ABOUT</a>
              </li>
              <li>
                <a href="#skill">SKILL</a>
              </li>
              <li>
                <a href="#project">PROJECT</a>
              </li>
              <li>
                <a href="#contact">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
