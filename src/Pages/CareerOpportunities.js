// JoinUs.jsx
import React from "react";
import GirlBg from "../assets/career/lady.mp4";
import LadyBg from "../assets/career/lady2.mp4";
import Coding from "../assets/career/coding.mp4";
import Bg from "../assets/career/bg.png";
const CareerOpportunities = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center gap-[100px] pt-[150px]">
        {/*CONTENT 1*/}
        <div className="w-full flex flex-col justify-center items-center px-[220px]">
          <div className="w-[1000px] flex flex-col justify-center items-center">
            <div
              className="text-[70px]"
              style={{ fontFamily: "SF Pro Display B", lineHeight: "normal" }}
            >
              <div>
                <div>
                  We're not just{" "}
                  <span className="text-[#4D9138]"> creating</span>
                </div>
                <div>
                  <span className="text-[#4D9138]">products</span>; at the same
                  time,
                </div>
                <div>
                  we're
                  <span className="text-[#F67F00]">
                    {" "}
                    crafting an experience{" "}
                  </span>
                </div>
                <div>for the people who use them.</div>
              </div>
            </div>
          </div>
        </div>
        {/*CONTENT 2*/}

        <div className="relative w-full h-[1000px] flex items-center justify-center overflow-hidden">
          <video className="w-full h-full object-cover" autoPlay loop muted>
            <source src={GirlBg} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute top-0 left-0 pt-[86px] pl-[83px]">
            <div
              className="text-[40px] text-left"
              style={{ fontFamily: "SF Pro Display B", lineHeight: "normal" }}
            >
              <div>Discover how you can</div>
              <div>make an impact: </div>
              <div>understand the nature of</div>
              <div>our work, give yourself a</div>
              <div>platform to excel, and</div>
              <div>create the achievements </div>
              <div>that satisfy you.</div>
            </div>
          </div>
        </div>
      </div>

      {/*CONTENT 3*/}
      <div
        className="w-full flex flex-col justify-center items-center h-screen bg-cover"
        style={{ backgroundImage: `url(${Bg})` }}
      >
        <div className="w-full flex flex-col justify-center items-center px-[220px] py-[250px]">
          <div className="w-[1000px] flex flex-col justify-center items-center">
            <div
              className="text-[60px] text-white text-center"
              style={{ fontFamily: "SF Pro Display B", lineHeight: "normal" }}
            >
              <div> This is a place where energy </div>
              <div>converges, dedicated to the</div>
              <div>pursuit of values that lead to great</div>
              <div>achievements. Here, you're not just</div>
              <div>joining something; in our community,</div>
              <div>you're contributing to the field</div>
              <div>of education.</div>
            </div>
          </div>
        </div>
      </div>

      {/*CONTENT 4*/}
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center px-[220px] py-[400px]">
          <div className="w-[1000px] flex flex-col justify-center items-center gap-10">
            <div
              className="text-[36px] text-center"
              style={{ fontFamily: "SF Pro Display M", lineHeight: "normal" }}
            >
              Marketing Team
            </div>
            <div
              className="text-[70px] text-center bg-gradient-to-r from-[#00057C] via-[#D942FF] to-[#0075FF]"
              style={{
                fontFamily: "SF Pro Display B",
                lineHeight: "normal",
                WebkitBackgroundClip: "text" /* For Safari */,
                color: "transparent" /* Make text color transparent */,
              }}
            >
              <div>Join our team and ignite</div>
              <div>the passion for work</div>
            </div>
          </div>
        </div>
      </div>

      {/*CONTENT 5*/}
      <div className="relative w-full h-[1000px] flex items-center justify-center overflow-hidden">
        <video
          className="w-full h-full object-cover object-center"
          autoPlay
          loop
          muted
        >
          <source src={LadyBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute bottom-0 left-0 pb-[90px] pl-[83px]">
          <div
            className="text-[40px] text-left"
            style={{ fontFamily: "SF Pro Display B", lineHeight: "normal" }}
          >
            <div>Your values are integrated</div>
            <div>into everything we build </div>
            <div>here, expanding your </div>
            <div>career infinitely.</div>
          </div>
        </div>
      </div>

      {/*CONTENT 6*/}
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center px-[165px] py-[400px]">
          <div className="w-[1000px] flex flex-col justify-center items-center gap-10">
            <div
              className="text-[36px] text-center"
              style={{ fontFamily: "SF Pro Display M", lineHeight: "normal" }}
            >
              IT Engineer
            </div>
            <div
              className="text-[70px] text-center bg-gradient-to-r from-[#00057C] via-[#D942FF] to-[#0075FF]"
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
        </div>
      </div>

      {/*CONTENT 7*/}
      <div className="relative w-full h-[1000px] flex items-center justify-center overflow-hidden">
        <video
          className="w-full h-full object-cover object-center"
          autoPlay
          loop
          muted
        >
          <source src={Coding} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute bottom-0 left-0 pb-[88px] pl-[83px]">
          <div
            className="text-[40px] text-left text-white"
            style={{ fontFamily: "SF Pro Display B", lineHeight: "normal" }}
          >
            <div>Our IT engineers focus on one</div>
            <div>key point when developing </div>
            <div>software - the people who will </div>
            <div>use it. This is also based on</div>
            <div>respect for customer needs.</div>
          </div>
        </div>
      </div>

      {/*CONTENT 8*/}
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center px-[165px] py-[300px]">
          <div className="w-[1000px] flex flex-col justify-start gap-[50px]">
            <div
              className="text-[70px]"
              style={{
                fontFamily: "SF Pro Display B",
                lineHeight: "normal",
              }}
            >
              <div>Innovation and development</div>
              <div>are our ultimate decisions.</div>
            </div>
            <div
              className="text-[32px]"
              style={{
                fontFamily: "SF Pro Display M",
                lineHeight: "normal",
              }}
            >
              <div>
                Being able to see your capabilities and work shine in our
                products and
              </div>
              <div>development platforms will make us incredibly proud.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerOpportunities;
