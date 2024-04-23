// JoinUs.jsx
import React from "react";
import GirlBg from "../assets/career/lady.mp4";
import LadyBg from "../assets/career/lady2.mp4";
import Coding from "../assets/career/coding.mp4";
import Bg from "../assets/career/bg.svg";
const CareerOpportunities = () => {
  return (
    <>
      <div className="w-full  flex flex-col justify-center items-center md:pt-[150px] pt-[80px] md:gap-[300px] gap-[100px] md:pb-[300px] pb-[100px] ">
        <div className="w-full flex flex-col justify-center items-center md:gap-[400px] gap-[100px]">
          <div className="w-full flex flex-col md:gap-[100px] gap-[50px] justify-center items-center">
            {/*Title content 1*/}
            <div className="w-full md:max-w-[1000px] flex flex-col justify-center items-center md:px-0 pl-[31px] pr-[32px]">
              <div
                className="md:text-[70px] text-[32px]"
                style={{ fontFamily: "SF Pro Display B", lineHeight: "normal" }}
              >
                <div className="w-full flex flex-wrap">
                  <div>
                    We're not just{" "}
                    <span className="text-[#4D9138]"> creating products</span>;
                    at the same time, we're
                    <span className="text-[#F67F00]">
                      {" "}
                      crafting an experience{" "}
                    </span>
                    for the people who use them.
                  </div>
                </div>
              </div>
            </div>
            {/*Video and purple bg*/}
            <div className="w-full">
              {/*video content-2*/}
              <div className="relative w-full md:h-[1000px] flex items-center justify-center overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                >
                  <source src={GirlBg} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute md:top-[86px] top-5 md:left-[83px] left-5">
                  <div
                    className="md:text-[40px] text-xs text-left md:w-[460px] w-[140px]"
                    style={{
                      fontFamily: "SF Pro Display B",
                      lineHeight: "normal",
                    }}
                  >
                    Discover how you can make an impact: understand the nature
                    of our work, give yourself a platform to excel, and create
                    the achievements that satisfy you.
                  </div>
                </div>
              </div>
              {/*video content-3*/}
              <div
                className="w-full flex flex-col justify-center items-center bg-cover md:py-[250px] pt-[88px] pb-[102px]  md:px-0  pl-[31px] pr-[32px]"
                style={{ backgroundImage: `url(${Bg})` }}
              >
                <div className="w-full flex flex-col justify-center items-center">
                  <div className="w-full md:max-w-[1000px] flex flex-col justify-center items-center">
                    <div
                      className="md:text-[60px] text-xl text-white text-center"
                      style={{
                        fontFamily: "SF Pro Display B",
                        lineHeight: "normal",
                      }}
                    >
                      <div className="hidden md:flex flex-col">
                        <div> This is a place where energy </div>
                        <div>converges, dedicated to the</div>
                        <div>pursuit of values that lead to great</div>
                        <div>achievements. Here, you're not just</div>
                        <div>joining something; in our community,</div>
                        <div>you're contributing to the field</div>
                        <div>of education.</div>
                      </div>
                      <div className="md:hidden flex flex-col">
                        This is a place where energy converges, dedicated to the
                        pursuit of values that lead to great achievements. Here,
                        you're not just joining something; in our community,
                        you're contributing to the field of education.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col md:gap-[400px] gap-[100px] items-center">
            {/*content 4*/}
            <div className="w-full flex flex-col md:w-[1000px] md:gap-10 gap-[30px] md:px-0 pl-[31px] pr-[32px]">
              <div
                className="md:text-[36px] text-xl text-center"
                style={{ fontFamily: "SF Pro Display M", lineHeight: "normal" }}
              >
                Marketing Team
              </div>
              <div
                className="md:text-[70px] text-4xl text-center bg-gradient-to-r from-[#00057C] via-[#D942FF] to-[#0075FF]"
                style={{
                  fontFamily: "SF Pro Display B",
                  lineHeight: "normal",
                  WebkitBackgroundClip: "text" /* For Safari */,
                  color: "transparent" /* Make text color transparent */,
                }}
              >
                <div className="hidden md:flex flex-col">
                  <div>Join our team and ignite</div>
                  <div>the passion for work</div>
                </div>
                <div className="md:hidden flex flex-col">
                  Join our team and ignite the passion for work
                </div>
              </div>
            </div>
            {/*video content-5*/}
            <div className="relative w-full md:h-[1000px] flex items-center justify-center overflow-hidden">
              <video
                className="w-full h-full object-cover object-center"
                autoPlay
                loop
                muted
              >
                <source src={LadyBg} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute md:left-[83px] md:bottom-[90px] left-5 bottom-5">
                <div
                  className="md:text-[40px] text-xs md:text-black text-white text-left md:w-[490px] w-[140px]"
                  style={{
                    fontFamily: "SF Pro Display B",
                    lineHeight: "normal",
                  }}
                >
                  Your values are integrated into everything we build here,
                  expanding your career infinitely.
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col md:gap-[400px] gap-[100px] items-center">
            {/*content 6*/}
            <div className="w-full flex flex-col md:w-[1000px] md:gap-10 gap-[30px] md:px-0 pl-[31px] pr-[32px]">
              <div
                className="md:text-[36px] text-xl text-center"
                style={{ fontFamily: "SF Pro Display M", lineHeight: "normal" }}
              >
                IT Engineer
              </div>
              <div
                className="text-4xl md:text-[70px] text-center bg-gradient-to-r from-[#00057C] via-[#D942FF] to-[#0075FF]"
                style={{
                  fontFamily: "SF Pro Display B",
                  lineHeight: "normal",
                  WebkitBackgroundClip: "text" /* For Safari */,
                  color: "transparent" /* Make text color transparent */,
                }}
              >
                <div>Work is full of innovation.</div>
                <div>The experience is exhilarating.</div>
              </div>
            </div>
            {/*video content-7*/}
            <div className="relative w-full md:h-[1000px] flex items-center justify-center overflow-hidden">
              <video
                className="w-full h-full object-cover object-center"
                autoPlay
                loop
                muted
              >
                <source src={Coding} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute md:bottom-[88px] bottom-[21px] left-5 md:left-[83px]">
                <div
                  className=" md:w-[550px] w-[190px] text-xs md:text-[40px] text-left text-white"
                  style={{
                    fontFamily: "SF Pro Display B",
                    lineHeight: "normal",
                  }}
                >
                  Our IT engineers focus on one key point when developing
                  software - the people who will use it. This is also based on
                  respect for customer needs.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*CONTENT 8*/}

        <div className="w-full flex flex-col justify-center items-center md:px-0 pl-[31px] pr-[32px] ">
          <div className="w-full md:w-[1000px] flex flex-col justify-start md:gap-[50px] gap-[30px]">
            <div
              className="md:text-[70px] text-[32px]"
              style={{
                fontFamily: "SF Pro Display B",
                lineHeight: "normal",
              }}
            >
              Innovation and development are our ultimate decisions.
            </div>
            <div
              className="md:text-[32px] text-xl"
              style={{
                fontFamily: "SF Pro Display M",
                lineHeight: "normal",
              }}
            >
              <div className=" flex flex-col">
                Being able to see your capabilities and work shine in our
                products and development platforms will make us incredibly
                proud.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerOpportunities;
