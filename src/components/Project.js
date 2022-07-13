import React, { useState, useEffect } from "react";

import { data } from '../assets/project.json';
import Card from './Card';

const Project = () => {
  const [projects] = useState(data);

  return (
    <section className="sec even project" id="project">
      <h1 className="sec-title">PROJECTS</h1>
      <div className="flexbox">
        <div className="maxw">
          <div className="cardFlex">
            {projects.map((value, index) => 
              <Card key={index} data={value} />
            )}
          </div>
        </div>
      </div>
      {/* <div className="flexbox">
        <a href="https://github.com/jsoonee/todolist" target="_blank">
          <div className="frame">
            <div className="fflex">
              <div className="pjs">
                <img src={tdl} alt="To Do List" className="scn" />
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
                <img src={weather} alt="To Do List" className="scn" />
              </div>
              <div className="des">
                <h2>실시간 날씨</h2>
                <p>전세계 도시의 실시간 날씨를 볼 수 있는 간단한 앱</p>
              </div>
            </div>
          </div>
        </a>

        <a href="https://github.com/jsoonee/sooneeshop" target="_blank">
          <div className="frame">
            <div className="fflex">
              <div className="pjs">
                <img src={shop} alt="shopping cart" className="scn" />
              </div>
              <div className="des">
                <h2>쇼핑몰</h2>
                <p>장바구니 담기, 필터 등의 기능을 탑재한 가상 쇼핑몰</p>
              </div>
            </div>
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Project;
