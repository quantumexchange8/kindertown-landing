// JoinUs.jsx
import React from "react";
import Privacy from "./Privacy";
import Tab1 from "../assets/teacher/tab1.png";
import Tab2 from "../assets/teacher/tab2.png";
import Tab3 from "../assets/teacher/tab3.png";
import Tab4 from "../assets/teacher/tab4.png";
import Tab5 from "../assets/teacher/tab5.png";
import CTLogo from "../assets/admin/ct-logo.svg";
import Header from "../assets/teacher/header.png";
import MobileHeader from "../assets/teacher/mobile-header.png";
import HeaderMalay from "../assets/teacher/Header-malay.png";
import MobileHeaderM from "../assets/teacher/mobile-header-malay.png";
import HeaderChinese from "../assets/teacher/header-chinese.png";
import MobileHeaderC from "../assets/teacher/mobile-header-chinese.png";
import { useTranslation } from "react-i18next";
const Teacher = () => {
  const { i18n, t } = useTranslation();

  let headerImageWeb;
  switch (i18n.language) {
    case "zh":
      headerImageWeb = HeaderChinese;
      break;
    case "ms":
      headerImageWeb = HeaderMalay;
      break;
    case "en":
    default:
      headerImageWeb = Header;
      break;
  }

  let headerImageMobile;
  switch (i18n.language) {
    case "zh":
      headerImageMobile = MobileHeaderC;
      break;
    case "ms":
      headerImageMobile = MobileHeaderM;
      break;
    case "en":
    default:
      headerImageMobile = MobileHeader;
      break;
  }

  return (
    <>
      <div
        className={`w-full flex flex-col justify-center items-center md:pt-[150px] pt-[80px] md:gap-[100px] gap-[50px] pb-[100px] ${
          i18n.language === "zh" ? "md:pb-[300px]" : "md:pb-[200px]"
        }`}
      >
        <div className="w-full hidden md:flex">
          <img src={headerImageWeb} alt="Header" className="w-full" />
        </div>

        <div className="w-full md:hidden flex">
          <img src={headerImageMobile} alt="Header" className="w-full" />
        </div>

        <div className="w-full flex flex-col justify-center items-center md:px-0 pl-[31px] pr-[32px]">
          <div className="w-full md:max-w-[1000px]  flex flex-col  gap-[100px]  md:gap-[200px]">
            {/*CONTENT 2*/}
            <div className="w-full flex flex-col md:gap-[50px] gap-[30px]">
              <div className="flex flex-col justify-center items-center">
                <div
                  className={`text-center md:text-[80px] text-4xl  ${
                    i18n.language === "zh" ? "font-bold" : ""
                  }`}
                  style={{
                    fontFamily: "SF Pro Display B",
                    lineHeight: "normal",
                  }}
                >
                  <div>{t("kindertown-teacher")}</div>
                </div>
              </div>

              <div className="hidden md:flex flex-col justify-center items-center">
                <div
                  className={`text-center text-xl ${
                    i18n.language === "zh" ? "md:text-3xl" : "md:text-[32px]"
                  }`}
                  style={{
                    fontFamily: "SF Pro Display M",
                    lineHeight: "normal",
                  }}
                >
                  <span
                    className={`inline-block ${
                      i18n.language === "zh" ? "md:w-[850px]" : "w-full"
                    }`}
                  >
                    {t("KT-teacher-desc")}
                  </span>
                </div>
              </div>
              <div className="md:hidden flex flex-col justify-center items-center">
                <div
                  className="text-center md:text-[32px] text-xl"
                  style={{
                    fontFamily:
                      i18n.language === "zh"
                        ? "SF Pro Display M"
                        : "SF Pro Display Semibold",
                    lineHeight: "normal",
                  }}
                >
                  {t("KT-teacher-desc")}
                </div>
              </div>
            </div>
            {/*CONTENT 3*/}
            <div
              className={`w-full flex flex-col ${
                i18n.language === "zh"
                  ? "md:gap-[100px] gap-[50px] "
                  : "md:gap-[50px] gap-[30px] "
              }`}
            >
              <div className="flex flex-col justify-center items-center">
                <img
                  src={Tab1}
                  alt="Tablet1"
                  className="md:w-[800px] md:h-[614px]"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <div
                  className={`flex flex-col justify-center md:text-[40px] text-center ${
                    i18n.language === "zh" ? "text-xl" : "text-base"
                  }`}
                  style={{
                    fontFamily:
                      i18n.language === "zh"
                        ? "SF Pro Display B"
                        : "SF Pro Display Semibold",
                    lineHeight: "normal",
                    fontWeight: i18n.language === "zh" ? "700" : "",
                  }}
                >
                  <span
                    className={`inline-block text-center ${
                      i18n.language === "zh" ? "md:w-[965px]" : "w-full"
                    }`}
                  >
                    {t("diff-ways")}
                  </span>
                </div>
              </div>
            </div>
            {/*CONTENT 4*/}
            <div
              className={`w-full flex flex-col ${
                i18n.language === "zh"
                  ? "md:gap-[100px] gap-[50px] "
                  : "md:gap-[50px] gap-[30px] "
              }`}
            >
              <div className="flex flex-col justify-center items-center">
                <img
                  src={Tab2}
                  alt="Tablet2"
                  className="md:w-[800px] md:h-[614px]"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <div
                  className={`flex flex-col md:text-[40px] text-center ${
                    i18n.language === "zh" ? "text-xl" : "text-base"
                  }`}
                  style={{
                    fontFamily:
                      i18n.language === "zh"
                        ? "SF Pro Display B"
                        : "SF Pro Display Semibold",
                    lineHeight: "normal",
                    fontWeight: i18n.language === "zh" ? "700" : "",
                  }}
                >
                  <div className="flex flex-col justify-center items-center">
                    {t("solve-challenge")}
                  </div>
                </div>
              </div>
            </div>
            {/*CONTENT 5*/}
            <div
              className={`w-full flex flex-col ${
                i18n.language === "zh"
                  ? "md:gap-[100px] gap-[50px] "
                  : "md:gap-[50px] gap-[30px] "
              }`}
            >
              <div className="flex flex-col justify-center items-center">
                <img
                  src={Tab3}
                  alt="Tablet3"
                  className="md:w-[800px] md:h-[614px]"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <div
                  className={`md:text-[40px] text-center ${
                    i18n.language === "zh" ? "text-xl" : "text-base"
                  }`}
                  style={{
                    fontFamily:
                      i18n.language === "zh"
                        ? "SF Pro Display B"
                        : "SF Pro Display Semibold",
                    fontWeight: i18n.language === "zh" ? "700" : "",
                    lineHeight: "normal",
                  }}
                >
                  <div className="flex flex-col">
                    <span
                      className={`inline-block ${
                        i18n.language === "zh"
                          ? "md:w-[960px] w-full"
                          : "w-full"
                      }`}
                    >
                      {t("harness-power")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/*CONTENT 6*/}
            <div
              className={`w-full flex flex-col ${
                i18n.language === "zh"
                  ? "md:gap-[100px] gap-[50px] "
                  : "md:gap-[50px] gap-[30px] "
              }`}
            >
              <div className="flex flex-col justify-center items-center">
                <img
                  src={Tab4}
                  alt="Tablet4"
                  className="md:w-[800px] md:h-[614px]"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <div
                  className={`md:text-[40px] text-center ${
                    i18n.language === "zh" ? "text-xl" : "text-base"
                  }`}
                  style={{
                    fontFamily:
                      i18n.language === "zh"
                        ? "SF Pro Display B"
                        : "SF Pro Display Semibold",
                    fontWeight: i18n.language === "zh" ? "700" : "",
                    lineHeight: "normal",
                  }}
                >
                  <div className="flex flex-col">{t("take-pride")}</div>
                </div>
              </div>
            </div>
            {/*CONTENT 7*/}
            <div
              className={`w-full flex flex-col ${
                i18n.language === "zh"
                  ? "md:gap-[100px] gap-[50px] "
                  : "md:gap-[50px] gap-[30px] "
              }`}
            >
              <div className="flex flex-col justify-center items-center">
                <img
                  src={Tab5}
                  alt="Tablet5"
                  className="md:w-[800px] md:h-[614px]"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <div
                  className={`md:text-[40px] text-center ${
                    i18n.language === "zh" ? "text-xl" : "text-base"
                  }`}
                  style={{
                    fontFamily:
                      i18n.language === "zh"
                        ? "SF Pro Display B"
                        : "SF Pro Display Semibold",
                    fontWeight: i18n.language === "zh" ? "700" : "",
                    lineHeight: "normal",
                  }}
                >
                  <div className="flex flex-col text-center">
                    {t("kingdom-community")}
                  </div>
                </div>
              </div>
            </div>
            {/*CONTENT 8*/}
            <div className="w-full flex flex-col md:px-0 items-center">
              <div className="w-full md:w-[1000px] flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                  <div className="relative flex flex-col justify-center md:w-[400px] w-[167px] rounded-[16px] md:rounded-[50px] bg-gradient-to-t from-[#ADADAD] to-[#F9F9F9] md:pt-[53px] pt-[27px] md:pb-[61px] pb-[22px] md:pl-[34px] md:pr-[33px] px-[14px] md:gap-[59px] gap-[27px]">
                    <div className="flex flex-col justify-center items-center">
                      <img
                        src={CTLogo}
                        alt="CTLogo"
                        className="md:w-[160px] md:h-[106px] w-[66px]"
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center md:gap-[40px] gap-3">
                      <div className="flex flex-col justify-center items-center">
                        <div
                          className="md:text-[24px] text-[10px] inline-block"
                          style={{
                            fontFamily: "SF Pro Display B",
                            lineHeight: "normal",
                          }}
                        >
                          CT PRODUCT &nbsp;
                          <span className=" bg-black  md:w-[77px] h-[29px] md:rounded-[4px] rounded-[2px] text-white md:px-[5.6px] px-[3px] py-[1px]">
                            CARE
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <div
                          className="md:text-[24px] text-[10px] inline-block text-center"
                          style={{
                            lineHeight: "normal",
                          }}
                        >
                          <div
                            className="hidden md:flex flex-col"
                            style={{ fontFamily: "SF Pro Display R" }}
                          >
                            <div className="flex items-center justify-center ">
                              Free provide face to face training and online
                              tutorials.
                            </div>
                          </div>
                          <div
                            className="md:hidden flex flex-wrap"
                            style={{ fontFamily: "SF Pro Display Semibold" }}
                          >
                            Free provide face to face training and online
                            tutorials.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Privacy />
    </>
  );
};

export default Teacher;
