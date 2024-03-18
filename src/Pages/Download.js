// Products.jsx
import React from "react";
import mobile from "../assets/download/mobile.png";
import tab from "../assets/download/tablet.png";
import button1 from "../assets/download/button1.svg";
import button2 from "../assets/download/button2.svg";
import button3 from "../assets/download/button3.svg";
import imac from "../assets/download/imac.svg";
const Download = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center gap-[200px] pt-[150px]">
        {/*CONTENT 1*/}
        <div className="w-full flex flex-col justify-center items-center px-[220px]">
          <div className="w-[1000px] flex flex-col justify-center items-center">
            <div
              className="text-[50px] text-center"
              style={{ fontFamily: "SF Pro Display B", lineHeight: "normal" }}
            >
              <div>You can download our Kindertown</div>
              <div>management system anytime from the</div>
              <div>Apple AppStore and Google PlayStore.</div>
              <div>Let's turn our ideas into reality together.</div>
            </div>
          </div>
        </div>
        <div className="w-[1000px] flex flex-wrap justify-center items-center gap-5">
          {/*CONTENT 2*/}
          <div className="relative md:w-[490px] md:h-[500px] md:rounded-[30px] bg-[#FFDFA1] pt-[44px] pl-[52px] pr-[30px] flex flex-col gap-6">
            <div className="flex flex-col justify-end gap-5">
              <div
                className="text-3xl  text-right"
                style={{ fontFamily: "SF Pro Display B" }}
              >
                Kindertown Parent
              </div>
              <div
                className="text-2xl text-[#666] text-right"
                style={{ fontFamily: "SF Pro Display M" }}
              >
                <div>Understanding the child's</div>
                <div>learning journey.</div>
              </div>
            </div>
            <div className="flex flex-col justify-center overflow-hidden">
              <div className="flex justify-start">
                <div className="flex flex-col justify-start relative top-[100px]">
                  <img
                    src={mobile}
                    alt="Mobile"
                    className="w-[250px] h-[508px]"
                  />
                </div>
                <div className="absolute bottom-0 right-0 p-[30px]">
                  <img src={button1} alt="Button1" />
                </div>
              </div>
            </div>
          </div>
          {/*CONTENT 3*/}
          <div className="relative md:w-[490px] md:h-[500px] md:rounded-[30px] bg-[#3F5DFF] pt-[41px] pb-[30px] pl-[62px] pr-[30px] flex flex-col gap-6">
            <div className="flex flex-col justify-end gap-5">
              <img src={tab} alt="Tablet" className="w-[365px] h-[280px]" />
            </div>
            <div className="flex flex-col justify-start">
              <div className="flex justify-start">
                <div className="flex flex-col justify-start items-start gap-5">
                  <div
                    className="text-3xl  text-left"
                    style={{ fontFamily: "SF Pro Display B" }}
                  >
                    Kindertown Parent
                  </div>
                  <div
                    className="text-2xl text-white text-left"
                    style={{ fontFamily: "SF Pro Display M" }}
                  >
                    <div>Escape the busyness, </div>
                    <div>save valuable time.</div>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 p-[30px]">
                  <img src={button2} alt="Button1" />
                </div>
              </div>
            </div>
          </div>
          {/*CONTENT 4*/}
          <div className="relative md:w-[1000px] md:h-[500px] md:rounded-[30px] bg-[#2FC300] pt-[49px] pr-[30px] flex gap-6">
            <div className="flex justify-start gap-[99px] overflow-hidden">
              <div className="w-[592px] h-[500px] flex flex-col justify-start">
                <div className="relative right-10">
                  <img src={imac} alt="Mobile" />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center items-center">
                  <div className="flex flex-col justify-start gap-5">
                    <div
                      className="text-[30px]"
                      style={{ fontFamily: "SF Pro Display B" }}
                    >
                      Kindertown Admin
                    </div>
                    <div
                      className="text-2xl text-left text-white"
                      style={{
                        fontFamily: "SF Pro Display M",
                        lineHeight: "normal",
                      }}
                    >
                      <div>No more sluggish</div>
                      <div>school enrollment</div>
                      <div> processes from now.</div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 pr-[30px] pb-[30px]">
                    <img src={button3} alt="Button3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Download;
