import React, { useState, useEffect } from 'react';

const Header = () => {
    const [header, setHeader] = useState("header");

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
        return () => window.removeEventListener('scroll', listenScrollEvent);
    }, []);

    const listenScrollEvent = (e) => {
        if (window.scrollY < 30) {
            return setHeader("header")
        } else if (window.scrollY > 30) {
            return setHeader("header2")
        }
    }
    return (
        <header className={header}>
            <div className="container">
                <div className="head">
                    <div className="logo"><a href="/">JS</a></div>
                    <div className="menu">
                        <ul>
                            <li><a href="#about">ABOUT ME</a></li>
                            <li><a href="#skill">SKILLS</a></li>
                            <li><a href="#project">PROJECTS</a></li>
                            <li><a href="#contact">CONTACTS</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;