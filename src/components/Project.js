import React from 'react';

import tdl from '../images/tdl320.png';
import weather from '../images/weather320.png';

const Project = () => {
    return (
        <section className="sec even project">
            <h1>PROJECTS</h1>
            <div className="flexbox">
                <a href="https://github.com/jsoonee/todolist" target="_blank">
                    <div className="frame">
                    
                        <div className="fflex">
                            <div className="pjs">
                                <img src={tdl} alt="To Do List" className="scn"/>
                            </div>
                            <div className="des">
                                <h2>할 일 목록</h2>
                                <p>스마트폰에 영감을 얻어 디자인한 할 일 목록 앱</p>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/jsoonee/weather" target="_blank">
                    <div className="frame">
                        <div className="fflex">
                            <div className="pjs">
                                <img src={weather} alt="To Do List" className="scn"/>
                            </div>
                            <div className="des">
                                <h2>실시간 날씨</h2>
                                <p>전세계 도시별 날씨를 실시간으로 확인할 수 있는 간단한 앱</p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </section>
    );
}

export default Project;