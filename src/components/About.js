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
											<h2>최고의 프론트엔드 개발자를 꿈꾸는 신종소입니다.</h2>
										</div>
										<div className="quotes r">
											<ImQuotesRight />
										</div>
									</div>
								</div>
								<div className="word">
									<p>
										새로운 지식을 습득하는 것을 좋아하는 프론트엔드
										개발자입니다.
									</p>
									<p>
										개발 과정에서 사용자 경험을 가장 중요하게 생각합니다.
										사용자가 필요한 기능 및 서비스를 쉽고 빠르게 제공하는 데
										집중합니다.
									</p>
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
