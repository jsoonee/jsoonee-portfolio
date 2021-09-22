import React from 'react';

import { ImMail4, ImGithub } from 'react-icons/im';

const Contact = () => {
    return (
        <section className="sec odd contact" id="contact">
            <h1>CONTACTS</h1>
            <div className="flexbox">
                    <div className="cIcons">
                        <div className="iContainer email">
                            <a href="mailto:jsoonee12@gmail.com">
                                <div className="iFlex">
                                    <ImMail4 className="ci"/>
                                    <div className="addr">jsoonee12@gmail.com</div>
                                </div>
                            </a>
                        </div>
                        <div className="iContainer gh">
                            <a href="https://github.com/jsoonee" target="_blank">
                                <div className="iFlex">
                                    <ImGithub className="ci"/>
                                    <div className="addr">github.com/jsoonee</div>
                                </div>
                            </a>
                        </div>
                    </div>
            </div>
        </section>
    );
}

export default Contact;