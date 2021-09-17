import React from 'react';

import myPic from '../images/me.png';

import { ImQuotesLeft } from 'react-icons/im';
import { ImQuotesRight } from 'react-icons/im';

const About = () => {
    return (
        <section className="sec even about">
            <h1>ABOUT ME</h1>
            <div className="flexbox">
                <div className="maxw">
                    <div className="flex2">
                        <div className="pic">
                            <img src={myPic} alt="me" className="me"/>
                        </div>
                        <div className="intro">
                            <div className="iAlign">
                                <div className="qLine">
                                    <div class="quotes"><ImQuotesLeft/></div>
                                    <div className="qCon"><h2>신입 프론트엔드 개발자 신종소입니다.</h2></div>
                                    <div class="quotes r"><ImQuotesRight/></div>
                                </div>
                                <div className="word">
                                    <p>새로운 일에 도전하는 것을 즐기는 27살 청년입니다.</p>
                                    <p>저는 웹 프론트엔드, 특히 React와 같은 JavaScript 기반 프레임워크를 통해 쾌적한 UI/UX를 제공하는 것에 관심이 있습니다.</p>
                                    <p>현실에 안주하지 않고 좋은 웹 개발을 위해 끊임없이 고민하겠습니다.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>  
    );
}

export default About;