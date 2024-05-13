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
        return " md:w-[460px] w-[140px] md:text-[40px]  text-xs ";
      case "zh":
        return " md:w-[460px] w-[150px] md:text-3xl font-bold text-[10px]";
      case "ms":
        return " md:w-[540px] w-[140px] md:text-[40px]  text-xs ";
      default:
        return " md:w-[460px] w-[140px] md:text-[40px]  text-xs ";
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
      <div className="w-full flex flex-col justify-center items-center md:pt-[200px] pt-[80px]">
        <div
          className={`w-full flex flex-col justify-center items-center  gap-[50px] ${
            i18n.language === "zh" ? "md:gap-[200px]" : "md:gap-[100px]"
          }`}
        >
          {/*Title*/}
          <div
            className={`md:max-w-[1000px] w-full md:px-0 pl-[31px] pr-[32px]  text-[32px] md:text-[70px] ${
              i18n.language === "zh" ? "font-bold" : ""
            }`}
            style={{ fontFamily: "SF Pro Display B", lineHeight: "normal" }}
          >
            {!(i18n.language === "zh") && (
              <>
                {/*web*/}

                <div>
                  {t("crafting-experience1")}{" "}
                  <span className="text-[#4D9138]">
                    {t("crafting-experience2")}
                  </span>{" "}
                  {t("crafting-experience3")}{" "}
                  <span className="text-[#F67F00]">
                    {t("crafting-experience4")}
                  </span>{" "}
                  {t("crafting-experience5")}
                </div>
              </>
            )}

            {i18n.language === "zh" && (
              <>
                {/*web*/}
                <div className="hidden md:flex flex-wrap">
                  <div>
                    {t("crafting-experience1")}
                    <span className="text-[#4D9138]">
                      {" "}
                      {t("crafting-experience2")}
                    </span>
                    ;
                  </div>
                  <div>
                    {" "}
                    {t("crafting-experience3")}
                    <span className="text-[#F67F00]">
                      {" "}
                      {t("crafting-experience4")}{" "}
                    </span>
                    {t("crafting-experience5")}
                  </div>
                </div>
                {/*mobile*/}
                <div className="md:hidden">
                  {t("crafting-experience1")}
                  <span className="text-[#4D9138]">
                    {t("crafting-experience2")};
                  </span>{" "}
                  {t("crafting-experience3")}{" "}
                  <span className="text-[#F67F00]">
                    {t("crafting-experience4")}
                  </span>{" "}
                  {t("crafting-experience5")}
                </div>
              </>
            )}
          </div>
          {/**Video */}
          <div className="w-full">
            {/*video content-2*/}
            <div className="relative w-full md:h-[1000px] flex items-center justify-center overflow-hidden">
              <video className="w-full h-full object-cover" autoPlay loop muted>
                <source src={GirlBg} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute md:top-[86px] top-5 md:left-[83px] left-5">
                <div
                  className={`text-left ${videoWidth()} `}
                  style={{
                    fontFamily: "SF Pro Display B",
                    lineHeight: "normal",
                  }}
                >
                  {t("discover-impact")}
                </div>
              </div>
            </div>
            {/*content-3*/}
            <div
              className={`w-full flex flex-col justify-center items-center bg-cover pt-[88px] pb-[102px]  md:px-0  pl-[31px] pr-[32px] ${
                i18n.language === "zh"
                  ? "md:py-[340px]"
                  : i18n.language === "en"
                  ? "md:py-[250px]"
                  : i18n.language === "ms"
                  ? "md:py-[210px]"
                  : "md:py-[250px]"
              }`}
              style={{ backgroundImage: `url(${Bg})` }}
            >
              <div className="w-full flex flex-col justify-center items-center">
                <div className="w-full md:max-w-[1000px] flex flex-col justify-center items-center">
                  <div
                    className={`md:text-[60px] text-xl text-white text-center ${
                      i18n.language === "zh" ? "font-bold" : ""
                    }`}
                    style={{
                      fontFamily: "SF Pro Display B",
                      lineHeight: "normal",
                    }}
                  >
                    <div className="w-full hidden md:flex flex-col justify-center items-center">
                      <div> {t("energy-converge1")} </div>
                      <div>{t("energy-converge2")}</div>
                      <div>{t("energy-converge3")}</div>
                      <div>{t("energy-converge4")}</div>
                      {!(i18n.language === "zh") && (
                        <>
                          {" "}
                          <div>{t("energy-converge5")}</div>
                          <div>{t("energy-converge6")}</div>
                          <div>{t("energy-converge7")}</div>
                        </>
                      )}
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
      </div>

      <div className="w-full  flex flex-col justify-center items-center md:pt-[400px] pt-[100px] md:gap-[300px] gap-[100px] md:pb-[300px] pb-[100px] ">
        <div className="w-full flex flex-col justify-center items-center md:gap-[400px] gap-[100px]">
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
                className={`text-4xl text-center bg-gradient-to-r from-[#00057C] via-[#D942FF] to-[#0075FF] ${
                  i18n.language === "zh"
                    ? "md:text-[80px] font-bold"
                    : "md:text-[70px] "
                }`}
                style={{
                  fontFamily: "SF Pro Display B",
                  lineHeight: "normal",
                  WebkitBackgroundClip: "text" /* For Safari */,
                  color: "transparent" /* Make text color transparent */,
                }}
              >
                <div className="hidden md:flex flex-col">
                  <div>{t("join-team")}</div>
                  <div>{t("join-team2")}</div>
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
