// JoinUs.jsx
import React from "react";
import GirlBg from "../assets/career/lady.mp4";
import LadyBg from "../assets/career/lady2.mp4";
import Coding from "../assets/career/coding.mp4";
import Bg from "../assets/career/bg.svg";
import { useTranslation } from "react-i18next";
const CareerOpportunities = () => {
  const { t, i18n } = useTranslation();
  const videoWidth = () => {
    switch (i18n.language) {
      case "en":
        return " md:w-[460px] w-[140px]";
      case "ms":
        return " md:w-[540px] w-[140px]";
      default:
        return " md:w-[460px] w-[140px]";
    }
  };

  const videoWidth2 = () => {
    switch (i18n.language) {
      case "end":
        return "md:w-[490px]";
      case "ms":
        return "md:w-[430px]";
      default:
        return "md:w-[490px]";
    }
  };

  const videoWidth3 = () => {
    switch (i18n.language) {
      case "end":
        return "md:w-[550px] w-[190px]";
      case "ms":
        return "md:w-[650px] w-[170px]";
      default:
        return "md:w-[550px] w-[190px]";
    }
  };
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
                <div>
                  {t("not-just")}
                  <span className="text-[#4D9138]"> {t("create-product")}</span>
                  {t("same-time")}
                  <span className="text-[#F67F00]">
                    {" "}
                    {t("craft-experience")}{" "}
                  </span>
                  {t("use-them")}
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
                    className={`md:text-[40px] text-xs text-left ${videoWidth()}`}
                    style={{
                      fontFamily: "SF Pro Display B",
                      lineHeight: "normal",
                    }}
                  >
                    {t("discover-impact")}
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
                      <div className="hidden md:flex flex-col justify-center items-center">
                        <div> {t("place-energy")} </div>
                        <div>{t("converge")}</div>
                        <div>{t("pursuit-value")}</div>
                        <div>{t("achievement")}</div>
                        <div>{t("join-community")}</div>
                        <div>{t("contribute-field")}</div>
                        <div>{t("of-education")}</div>
                      </div>
                      <div className="md:hidden flex flex-col">
                        {t("energy-converge-mobile")}
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
                {t("marketing-team")}
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
                  <div>{t("join-team")}</div>
                  <div>{t("passion-work")}</div>
                </div>
                <div className="md:hidden flex flex-col">
                  {t("join-team-mobile")}
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
                  className={`md:text-[40px] text-xs md:text-black text-white text-left  w-[140px] ${videoWidth2()}`}
                  style={{
                    fontFamily: "SF Pro Display B",
                    lineHeight: "normal",
                  }}
                >
                  {t("value-integrated")}
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
                <div>{t("full-innovation")}</div>
                <div>{t("experience-exhilarating")}</div>
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
                  className={` text-xs md:text-[40px] text-left text-white ${videoWidth3()}`}
                  style={{
                    fontFamily: "SF Pro Display B",
                    lineHeight: "normal",
                  }}
                >
                  {t("key-point")}
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
              {t("innovation-development")}
            </div>
            <div
              className="md:text-[32px] text-xl"
              style={{
                fontFamily: "SF Pro Display M",
                lineHeight: "normal",
              }}
            >
              <div className=" flex flex-col">{t("capability-work")}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerOpportunities;
