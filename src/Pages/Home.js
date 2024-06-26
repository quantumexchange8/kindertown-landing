import React from "react";

import GirlBg from "../assets/girl_child.mp4";
import Planner from "../assets/home/planner.png";
import Child from "../assets/home/child.png";
import Playground from "../assets/home/playground.png";
import Tel from "../assets/home/tel.png";
import Pencil from "../assets/home/pencils.png";
import Computer from "../assets/home/computer.png";
import Tools from "../assets/home/measure.svg";
import Family from "../assets/home/family.png";
import Teachers from "../assets/home/teachers.png";
import Slowmode from "../assets/home/slowmode.png";
import Choose from "../assets/home/Blocks.svg";
import Owners from "../assets/home/schoolowners.png";
import Admin from "../assets/home/admin.png";
import Teacher2 from "../assets/home/teachers2.png";
import Parent from "../assets/home/parent.png";
import Main from "../assets/home/main.png";
import { useTranslation } from "react-i18next";
const Home = () => {
  const { t, i18n } = useTranslation();

  const getDocumentJourneyWidth = () => {
    switch (i18n.language) {
      case "en":
        return "md:w-[460px] w-[150px]";
      case "ms":
        return "md:w-[495px] w-[160px]";
      case "zh":
        return "md:w-[460px] w-[170px]";
      default:
        return "md:w-[460px] w-[150px]";
    }
  };
  const TeacherDescWidth = () => {
    switch (i18n.language) {
      case "en":
        return "w-[900px]";
      case "ms":
        return " w-[990px]";
      case "zh":
        return " w-full";
      default:
        return "w-[900px]";
    }
  };
  return (
    <>
      <div
        className={`w-full flex flex-col justify-center items-center md:pt-[100px] pt-[80px]  gap-[100px] ${
          i18n.language === "zh" ? "md:gap-[100px]" : "md:gap-[150px]"
        }`}
      >
        <div className="w-full md:max-w-[1000px] flex flex-col justify-center items-center">
          <div className="w-full flex flex-col md:px-0 pl-[31px] pr-[32px] md:gap-[150px] gap-[100px]">
            {/*Gambar main*/}
            <div className="w-full flex flex-col md:gap-[100px] gap-[50px]">
              {/*CONTENT 1 GAMBAR*/}
              <div>
                <img src={Main} alt="" loading="lazy" />
              </div>
              {/*Content 2 */}
              <div className="w-full flex flex-col justify-center gap-[150px]">
                <div
                  className={`flex flex-col items-center w-full ${
                    i18n.language === "en"
                      ? "gap-[30px] md:gap-[60px] "
                      : i18n.language === "ms"
                      ? "md:gap-[100px] gap-[30px] "
                      : i18n.language === "zh"
                      ? "gap-[50px] md:gap-[100px] "
                      : "gap-[30px] md:gap-[60px] "
                  }`}
                >
                  <div
                    className={`w-full text-4xl md:text-[80px] text-center md:leading-[90px] ${
                      i18n.language === "zh" ? "font-black" : ""
                    }`}
                    style={{ fontFamily: "SF Pro Display B" }}
                  >
                    <div>{t("zero-worry")}</div>
                    <div> {t("zero-hassle")}</div>
                  </div>
                  <div
                    className={`w-full text-center ${
                      i18n.language === "en"
                        ? "md:text-[32px] text-xl "
                        : i18n.language === "ms"
                        ? "md:text-[32px] text-xl "
                        : i18n.language === "zh"
                        ? "md:text-[36px] text-xl "
                        : "md:text-[32px] text-xl "
                    }`}
                    style={{
                      fontFamily: "SF Pro Display M",
                      lineHeight: "normal",
                    }}
                  >
                    <span
                      className={` inline-block ${
                        i18n.language === "en"
                          ? "w-full"
                          : i18n.language === "ms"
                          ? "md:w-[900px] "
                          : i18n.language === "zh"
                          ? "md:w-[830px]"
                          : "md:w-[950px]"
                      }`}
                      style={{
                        fontFamily: "SF Pro Display M",
                        lineHeight: "normal",
                      }}
                    >
                      {t("main-text")}
                    </span>

                    {/* <div className="" ></div>
                <div className="text-[32px]" style={{ fontFamily: "SF Pro Display M" }}></div>
                <div className="text-[32px]" style={{ fontFamily: "SF Pro Display M" }}></div>
                <div className="text-[32px]" style={{ fontFamily: "SF Pro Display M" }}></div> */}
                  </div>
                </div>
              </div>
            </div>

            {/*Kindertown superhighlight*/}
            <div className="flex flex-col md:gap-[50px] gap-[30px]  justify-center items-center ">
              <div
                className={`text-center md:w-[496px] ${
                  i18n.language === "en"
                    ? "md:text-3xl text-xl  w-[175px]"
                    : i18n.language === "ms"
                    ? "md:text-3xl text-xl   w-[175px]"
                    : i18n.language === "zh"
                    ? "md:text-[32px] text-xl font-[1000]"
                    : "md:text-3xl text-xl w-full"
                }`}
                style={{
                  fontFamily: "SF Pro Display B",
                  lineHeight: "normal",
                }}
              >
                {t("app-highlight")}
              </div>
              <div className="w-full flex flex-wrap md:gap-7 gap-[30px]">
                <div
                  className={`w-full md:w-[315px] rounded-[30px] pt-[47px] pb-12 md:pt-[70px] md:pb-[71px] px-[25px] md:pl-[27px]  ${
                    i18n.language === "zh"
                      ? "md:pr-[28px] md:gap-[60px]  gap-[60px] "
                      : i18n.language === "ms"
                      ? "md:pr-[18px] md:gap-[50px]  gap-[50px] "
                      : i18n.language === "en"
                      ? "md:pr-[18px] md:gap-[60px] gap-[50px] "
                      : "md:pr-[18px] md:gap-[60px]  gap-[50px] "
                  } bg-[#F67F00] flex flex-col justify-center items-center`}
                >
                  <div>
                    <img
                      src={Planner}
                      alt="Planner"
                      className="md:w-40 md:h-[120px]"
                    />
                  </div>

                  <div
                    className={`flex flex-col items-center  w-[270px] md:h-full ${
                      i18n.language === "zh"
                        ? "gap-5 md:gap-[26px] "
                        : "gap-[30px] md:gap-5 "
                    }`}
                  >
                    <div
                      className={`text-center text-xl w-full ${
                        i18n.language === "zh" ? "font-black" : " "
                      }`}
                      style={{
                        fontFamily:
                          i18n.language === "zh"
                            ? "SF Pro Display EB"
                            : "SF Pro Display B",
                        lineHeight: "normal",
                      }}
                    >
                      <div className="hidden md:flex flex-col">
                        <div className="flex items-center justify-center h-6">
                          {t("say-goodbye")}
                        </div>
                        <div className="flex items-center justify-center h-6">
                          {t("say-goodbye2")}
                        </div>

                        {i18n.language === "ms" && (
                          <div className="flex items-center justify-center h-6">
                            {t("say-goodbye3")}
                          </div>
                        )}
                      </div>

                      <div className="md:hidden flex flex-col">
                        <div> {t("say-goodbye-mobile")}</div>
                        <div> {t("say-goodbye2-mobile")}</div>
                      </div>
                    </div>
                    {/*web*/}
                    <div className="hidden md:flex flex-col text-center text-[20px]">
                      <div
                        className="flex items-center justify-center h-[25px]"
                        style={{
                          fontFamily: "SF Pro Display M",
                          lineHeight: "normal",
                        }}
                      >
                        {t("now-secure")}
                      </div>
                      <div
                        className="flex items-center justify-center h-[25px]"
                        style={{ fontFamily: "SF Pro Display M" }}
                      >
                        {t("now-secure2")}
                      </div>
                      <div
                        className="flex items-center justify-center h-[25px]"
                        style={{ fontFamily: "SF Pro Display M" }}
                      >
                        {t("now-secure3")}
                      </div>
                    </div>
                    {/*Mobile*/}
                    <div className="md:hidden flex flex-col text-center text-[20px]">
                      <div
                        className="flex items-center justify-center h-[25px]"
                        style={{
                          fontFamily: "SF Pro Display M",
                          lineHeight: "normal",
                        }}
                      >
                        {t("now-secure-mobile")}
                      </div>
                      <div
                        className="flex items-center justify-center h-[25px]"
                        style={{ fontFamily: "SF Pro Display M" }}
                      >
                        {t("now-secure2-mobile")}
                      </div>
                      <div
                        className="flex items-center justify-center h-[25px]"
                        style={{ fontFamily: "SF Pro Display M" }}
                      >
                        {t("now-secure3-mobile")}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`w-full md:w-[315px] rounded-[30px] py-[44px] ${
                    i18n.language === "zh"
                      ? "md:pt-[70px] md:pb-[94px]  md:gap-[60px] gap-[60px]"
                      : i18n.language === "ms"
                      ? " gap-[30px]  md:py-[70px]  md:gap-[50px]"
                      : i18n.language === "en"
                      ? " gap-[50px]  md:py-[70px]  md:gap-[60px]"
                      : " gap-[50px]  md:py-[70px]  md:gap-[60px]"
                  } md:pl-[22px] md:pr-[23px] px-[25px] bg-[#FFC19F]  flex flex-col justify-center items-center`}
                >
                  <div>
                    <img
                      src={Child}
                      alt="Child"
                      className="md:h-[120px] md:w-[133px]"
                    />
                  </div>

                  <div
                    className={`flex flex-col items-center w-[270px] md:h-full ${
                      i18n.language === "zh"
                        ? "gap-5 md:gap-[26px] "
                        : "gap-[30px] md:gap-5 "
                    }`}
                  >
                    <div
                      className={`text-center text-xl leading-normal w-full ${
                        i18n.language === "zh" ? "font-black" : " "
                      }`}
                      style={{ fontFamily: "SF Pro Display B" }}
                    >
                      <div className="flex items-center justify-center h-6">
                        {t("know-ur-kid")}
                      </div>
                      <div className="flex items-center justify-center h-6">
                        {t("know-ur-kid2")}
                      </div>
                      {i18n.language === "ms" && (
                        <div className="flex items-center justify-center h-6">
                          {t("know-ur-kid3")}
                        </div>
                      )}
                    </div>

                    <div
                      className="text-center text-xl leading-normal"
                      style={{ fontFamily: "SF Pro Display M" }}
                    >
                      <div className="flex items-center justify-center h-[25px]">
                        {t("stay-inform")}
                      </div>
                      <div className="flex items-center justify-center h-[25px]">
                        {t("stay-inform2")}
                      </div>
                      {(i18n.language === "ms" || i18n.language === "en") && (
                        <div className="flex items-center justify-center h-[25px]">
                          {t("stay-inform3")}
                        </div>
                      )}
                      {i18n.language === "ms" && (
                        <div className="flex items-center justify-center h-[25px]">
                          {t("stay-inform4")}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div
                  className={`w-full md:w-[314px] rounded-[30px] py-[60px] md:pt-[70px] md:pb-[93px] px-[25px] ${
                    i18n.language === "zh"
                      ? "md:px-[27px]  md:gap-[60px] gap-[60px]"
                      : i18n.language === "en"
                      ? " md:px-[22px]  md:gap-[60px] gap-[50px]"
                      : i18n.language === "ms"
                      ? " md:gap-[50px] md:px-[22px] gap-[50px]"
                      : " md:px-[22px]  md:gap-[60px]  gap-[50px]"
                  } bg-[#FCBF4A]  flex flex-col justify-center items-center`}
                >
                  <div>
                    <img
                      src={Playground}
                      alt="Child"
                      className="md:h-[120px] md:w-[137px]"
                    />
                  </div>

                  <div
                    className={`flex flex-col items-center w-full md:h-full ${
                      i18n.language === "zh"
                        ? "md:gap-[26px]  gap-5"
                        : i18n.language === "ms"
                        ? "md:gap-5 gap-5"
                        : i18n.language === "en"
                        ? "md:gap-[18px]  gap-[30px]"
                        : "md:gap-[18px]  gap-[30px]"
                    }`}
                  >
                    <div
                      className={`text-center text-xl leading-normal w-full ${
                        i18n.language === "zh" ? "font-black" : " "
                      }`}
                      style={{ fontFamily: "SF Pro Display B" }}
                    >
                      <div className="flex items-center justify-center h-6">
                        {t("miss-school-act")}
                      </div>
                      <div className="flex items-center justify-center h-6">
                        {t("miss-school-act2")}
                      </div>
                      {i18n.language === "ms" && (
                        <div className="flex items-center justify-center h-6">
                          {t("miss-school-act3")}
                        </div>
                      )}
                    </div>

                    <div
                      className="text-center text-[20px] leading-normal"
                      style={{ fontFamily: "SF Pro Display M" }}
                    >
                      <div className="h-[25px]">{t("latest-happening")}</div>
                      <div className="h-[25px]">{t("latest-happening2")}</div>
                      {i18n.language === "ms" && (
                        <div className="h-[25px]">{t("latest-happening3")}</div>
                      )}
                    </div>
                  </div>
                </div>
                <div
                  className={`w-full md:w-[315px] rounded-[30px] bg-[#FDE0A4] px-[25px] md:pl-[27px]  ${
                    i18n.language === "zh"
                      ? "md:pr-[28px] md:pt-[70px] md:pb-[94px] md:gap-[60px] gap-[60px]"
                      : i18n.language === "ms"
                      ? "md:pr-[18px]  md:py-[70px]  md:gap-[51px] gap-[50px]"
                      : i18n.language === "en"
                      ? "md:pr-[18px]  md:py-[70px]  md:gap-[60px] gap-[50px]"
                      : "md:pr-[18px]  md:py-[70px]  md:gap-[60px]  gap-[50px]"
                  } pt-[47px] pb-12 flex flex-col justify-center items-center`}
                >
                  <div>
                    <img
                      src={Computer}
                      alt="Gadget"
                      className="md:h-[120px] md:w-[150px]"
                    />
                  </div>

                  <div
                    className={`flex flex-col items-center  w-[270px] md:h-full gap-[30px] ${
                      i18n.language === "zh"
                        ? "md:gap-[26px]"
                        : i18n.language === "ms"
                        ? "md:gap-[45px]"
                        : i18n.language === "en"
                        ? "md:gap-5"
                        : "md:gap-5"
                    }`}
                  >
                    <div
                      className={`text-center text-xl leading-normal w-full ${
                        i18n.language === "zh" ? "font-black" : " "
                      }`}
                      style={{ fontFamily: "SF Pro Display B" }}
                    >
                      <div className="flex items-center justify-center h-6">
                        {t("pay-fees")}
                      </div>
                      <div className="flex items-center justify-center h-6">
                        {t("pay-fees2")}
                      </div>
                    </div>

                    <div
                      className="text-center text-xl leading-normal"
                      style={{ fontFamily: "SF Pro Display M" }}
                    >
                      <div className="flex items-center justify-center h-[25px]">
                        {t("school-fee")}
                      </div>

                      <div className="flex items-center justify-center h-[25px]">
                        {t("school-fee2")}
                      </div>
                      {(i18n.language === "ms" || i18n.language === "en") && (
                        <div className="flex items-center justify-center h-[25px]">
                          {t("school-fee3")}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div
                  className={`w-full md:w-[315px] rounded-[30px]  bg-[#E0956C] flex flex-col justify-center items-center md:pt-[70px] ${
                    i18n.language === "zh"
                      ? "md:pb-[94px] md:pr-[28px] md:gap-[60px] gap-[60px] "
                      : i18n.language === "ms"
                      ? "md:pb-[71px] md:pr-[18px] md:gap-[50px] gap-[50px] "
                      : i18n.language === "en"
                      ? "md:pb-[71px] md:pr-[18px] md:gap-[60px] gap-[50px] "
                      : "md:gap-[60px]  md:pb-[71px] md:pr-[18px] gap-[50px] "
                  } md:pl-[27px]  pt-[47px] pb-[48px] px-[25px]`}
                >
                  <div>
                    <img
                      src={Pencil}
                      alt="Pencil"
                      className="md:h-[120px] md:w-[120px]"
                    />
                  </div>

                  <div
                    className={`flex flex-col items-center gap-[30px]  w-[270px] md:h-full  ${
                      i18n.language === "zh"
                        ? "md:gap-[26px]"
                        : i18n.language === "ms"
                        ? "md:gap-5"
                        : i18n.language === "en"
                        ? "md:gap-5"
                        : "md:gap-5"
                    }`}
                  >
                    <div
                      className={`text-center text-xl leading-normal w-full ${
                        i18n.language === "zh" ? "font-black" : " "
                      }`}
                      style={{ fontFamily: "SF Pro Display B" }}
                    >
                      <div className="hidden md:flex flex-col">
                        <div className="flex items-center justify-center h-6">
                          {t("market-convenience")}
                        </div>
                        <div className="flex items-center justify-center h-6">
                          {t("market-convenience2")}
                        </div>
                        {i18n.language === "ms" && (
                          <div className="hidden md:flex items-center justify-center h-6">
                            {t("market-convenience3")}
                          </div>
                        )}
                      </div>
                      {/*mobile*/}
                      <div
                        className="md:hidden flex flex-col"
                        style={{ lineHeight: "normal" }}
                      >
                        <div> {t("market-convenience-mobile")}</div>
                        <div> {t("market-convenience2-mobile")}</div>
                      </div>
                    </div>

                    <div className="text-center text-xl leading-normal">
                      <div
                        className="flex items-center justify-center h-[25px]"
                        style={{ fontFamily: "SF Pro Display M" }}
                      >
                        {t("supply-resource1")}
                      </div>

                      <div
                        className="flex items-center justify-center h-[25px]"
                        style={{ fontFamily: "SF Pro Display M" }}
                      >
                        {t("supply-resource2")}
                      </div>
                      {(i18n.language === "ms" || i18n.language === "en") && (
                        <div
                          className="flex items-center justify-center h-[25px]"
                          style={{ fontFamily: "SF Pro Display M" }}
                        >
                          {t("supply-resource3")}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div
                  className={`w-full md:w-[314px] rounded-[30px]  bg-[#FFDDB9] flex flex-col justify-center items-center px-[25px] ${
                    i18n.language === "zh"
                      ? "md:px-[27px] md:gap-[60px] gap-[60px]"
                      : i18n.language === "ms"
                      ? "md:px-[22px] md:gap-[51px] gap-[50px]  "
                      : i18n.language === "en"
                      ? "md:gap-[60px] md:px-[22px] gap-[50px]  "
                      : "md:gap-[60px] md:px-[22px] gap-[50px]  "
                  }  md:pt-[70px] md:pb-[71px] pt-[38px] pb-[39px]`}
                >
                  <div>
                    <img
                      src={Tel}
                      alt="Telephone"
                      className="md:h-[120px] md:w-[126px]"
                    />
                  </div>
                  <div
                    className={`flex flex-col items-center  w-[270px] md:h-full gap-[30px] ${
                      i18n.language === "zh"
                        ? "md:gap-[26px]"
                        : i18n.language === "ms"
                        ? "md:gap-[45px]"
                        : i18n.language === "en"
                        ? "md:gap-5"
                        : "md:gap-5"
                    }`}
                  >
                    <div
                      className={`text-center text-xl leading-normal w-full ${
                        i18n.language === "zh" ? "font-black" : " "
                      }`}
                      style={{ fontFamily: "SF Pro Display B" }}
                    >
                      <div className="flex items-center justify-center h-6">
                        {t("countless-feature")}
                      </div>
                      <div className="flex items-center justify-center h-6">
                        {t("countless-feature2")}
                      </div>
                    </div>

                    <div className="text-center text-xl leading-normal">
                      <div
                        className="flex items-center justify-center h-[25px]"
                        style={{ fontFamily: "SF Pro Display M" }}
                      >
                        {t("interaction-teacher")}
                      </div>

                      <div
                        className="flex items-center justify-center h-[25px]"
                        style={{ fontFamily: "SF Pro Display M" }}
                      >
                        {t("interaction-teacher2")}
                      </div>
                      {(i18n.language === "ms" || i18n.language === "en") && (
                        <div
                          className="flex items-center justify-center h-[25px]"
                          style={{ fontFamily: "SF Pro Display M" }}
                        >
                          {t("interaction-teacher3")}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`w-full flex flex-col bg-[#FFF7EF] justify-center items-center md:px-0 px-5 md:py-[150px] pt-[50px] ${
            i18n.language === "en" ? "pb-[100px]" : "  pb-[50px]"
          }`}
        >
          <div
            className={`w-full md:max-w-[1000px] flex flex-col justify-center md:gap-[200px] ${
              i18n.language === "zh" ? "gap-[50px]" : "gap-[100px]"
            }`}
          >
            {/*Essential tools*/}
            <div className="w-full flex flex-col md:gap-[50px] gap-[30px]">
              <div className="flex flex-col justify-center items-center">
                <img
                  src={Tools}
                  className="md:w-32 md:h-32 w-[100px] h-[100px]"
                  alt="Tools"
                />
              </div>
              <div className="flex flex-col items-center w-full ">
                <div
                  style={{
                    fontFamily: "SF Pro Display B",
                    lineHeight: "normal",
                  }}
                  className={`text-center text-4xl md:text-[80px] text-[#7A5AF8] md:leading-[90px]  w-full  ${
                    i18n.language === "zh" ? "font-bold" : " "
                  }`}
                >
                  <div className="flex items-center justify-center">
                    {t("essential-tool")}
                  </div>
                  <div className="flex items-center justify-center">
                    {t("powerful-system")}
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`flex flex-col justify-center items-center gap-[100px] ${
                i18n.language === "zh" ? "md:gap-[200px]" : " md:gap-[150px]"
              }`}
            >
              {/*Content 5*/}
              <div
                className={`flex flex-wrap w-full md:gap-9  ${
                  i18n.language === "zh" ? "gap-5" : " gap-[30px]"
                }`}
              >
                <div>
                  <img
                    src={Family}
                    alt="Family"
                    className="md:w-[100px] md:h-[100px] w-[73px] h-[73px]"
                  />
                </div>
                <div
                  className={`flex flex-col justify-center w-full md:w-[864px] md:gap-[30px] ${
                    i18n.language === "zh" ? "gap-[10px]" : "  gap-[15px]"
                  }`}
                >
                  <div
                    className="text-[#4D9138] text-[20px] md:text-[32px] md:pt-[30px]"
                    style={{
                      fontFamily: "SF Pro Display EB",
                      fontWeight: i18n.language === "zh" ? "860" : "",
                    }}
                  >
                    <div> {t("learn-journey")}</div>
                  </div>
                  <div>
                    <div
                      className={`text-xl flex flex-col md:gap-10 gap-5 ${
                        i18n.language === "zh"
                          ? "md:text-[30px]"
                          : "md:text-[32px]"
                      }`}
                      style={{
                        fontFamily:
                          i18n.language === "zh"
                            ? "SF Pro Display R"
                            : "SF Pro Display M",
                        lineHeight: "normal",
                      }}
                    >
                      <div>{t("learn-journey-desc")}</div>
                      <div>{t("learn-journey-desc2")}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`flex flex-col  gap-[100px] ${
                  i18n.language === "en"
                    ? "md:gap-[125px]"
                    : i18n.language === "ms"
                    ? "md:gap-[150px]"
                    : i18n.language === "zh"
                    ? "md:gap-[200px]"
                    : "md:gap-[125px]"
                }`}
              >
                {/*Content 6*/}
                <div
                  className={`flex flex-wrap w-full md:gap-9  ${
                    i18n.language === "zh" ? "gap-5" : " gap-[30px]"
                  }`}
                >
                  <div>
                    <img
                      src={Teachers}
                      alt="Teacher"
                      className="md:w-[100px] md:h-[100px] w-[73px] h-[73px]"
                    />
                  </div>
                  <div
                    className={`flex flex-col justify-center md:w-[864px] md:gap-[30px] ${
                      i18n.language === "zh" ? "gap-[10px]" : "  gap-[15px]"
                    }`}
                  >
                    <div
                      className={`text-[#752912] md:text-[32px] text-[20px] md:pt-[30px] ${
                        i18n.language === "zh" ? "font-bold" : ""
                      }`}
                      style={{
                        fontFamily: "SF Pro Display EB",
                        lineHeight: "normal",
                      }}
                    >
                      {t("busy-teacher")}
                    </div>
                    <div>
                      <div
                        className={` text-[20px]  flex flex-col md:gap-10 gap-5 ${
                          i18n.language === "zh"
                            ? "md:text-[30px]"
                            : "md:text-[32px]"
                        }`}
                        style={{
                          fontFamily:
                            i18n.language === "zh"
                              ? "SF Pro Display R"
                              : "SF Pro Display M",
                          lineHeight: "normal",
                        }}
                      >
                        <div>{t("busy-teacher-desc")}</div>
                        <div>{t("busy-teacher-desc2")}</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Content 7*/}
                <div
                  className={`flex flex-wrap w-full md:gap-9 ${
                    i18n.language === "zh" ? "gap-5" : " gap-[30px]"
                  }`}
                >
                  <div>
                    <img
                      src={Slowmode}
                      alt="SlowModes"
                      className={`w-[73px] h-[73px] ${
                        i18n.language === "ms"
                          ? "md:w-[100px] md:h-[107px]"
                          : "md:w-[100px] md:h-[100px]"
                      }`}
                    />
                  </div>
                  <div
                    className={`flex flex-col justify-center w-full md:w-[864px]  ${
                      i18n.language === "zh"
                        ? "md:gap-[30px] gap-[10px]"
                        : i18n.language === "ms"
                        ? "md:gap-[32px] gap-[15px]"
                        : "md:gap-[30px] gap-[15px]"
                    }`}
                  >
                    <div
                      className={`text-[#00A0CB] md:text-[32px] text-xl md:pt-[30px] ${
                        i18n.language === "zh" ? "font-bold" : ""
                      }`}
                      style={{ fontFamily: "SF Pro Display EB" }}
                    >
                      {t("slow-mode")}
                    </div>
                    <div>
                      <div
                        className={`text-xl  flex flex-col md:gap-10 gap-5  ${
                          i18n.language === "zh"
                            ? "md:text-[30px]"
                            : "md:text-[32px]"
                        }`}
                        style={{
                          fontFamily:
                            i18n.language === "zh"
                              ? "SF Pro Display R"
                              : "SF Pro Display M",
                          lineHeight: "normal",
                        }}
                      >
                        <div>{t("slow-mode-desc")}</div>
                        <div>{t("slow-mode-desc2")}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Content 8 - Video */}

      <div className="relative w-full  md:h-[900px] h-[280px] overflow-hidden">
        <div className="w-full md:pt-[108px] md:pl-[106px]">
          <video
            src={GirlBg}
            autoPlay
            loop
            muted
            className="absolute md:top-0 left-0 w-full md:object-cover object-center"
          />

          <div className="absolute md:left-24 md:top-24 left-5 top-[21px] flex items-center">
            <div
              className={`md:text-[40px] text-base  ${getDocumentJourneyWidth()}`}
              style={{
                fontFamily: "SF Pro Display B",
                lineHeight: "normal",
                fontWeight: i18n.language === "zh" ? "700" : "",
              }}
            >
              {t("document-journey")}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`w-full flex py-[100px] md:px-0 pl-[31px] pr-[32px] justify-center items-center ${
          i18n.language === "zh"
            ? " md:pt-[150px] md:pb-[200px]"
            : " md:py-[200px]"
        }`}
      >
        <div className="w-full md:max-w-[1000px] flex flex-col justify-center items-center md:gap-[200px] gap-[100px]">
          {/*CONTENT 9*/}
          <div
            className={`w-full flex flex-col justify-center items-center md:gap-[50px] ${
              i18n.language === "zh" ? " gap-[50px]" : " gap-[30px]"
            }`}
          >
            <div
              className={`flex flex-col justify-center items-center ${
                i18n.language === "zh"
                  ? "md:gap-[66px] gap-[30px]"
                  : " md:gap-[50px] gap-[30px]"
              }`}
            >
              <div>
                <img
                  src={Choose}
                  alt="Teachers"
                  className="md:w-32 md:h-32 w-full"
                />
              </div>
              <div
                className={`flex w-full justify-center items-center ${
                  i18n.language === "zh" ? "md:w-[320px]" : "md:w-[690px] "
                }`}
              >
                <div
                  className={`text-[#752A15] md:text-[80px] text-center text-4xl md:leading-[90px] ${
                    i18n.language === "zh" ? "font-bold" : " "
                  }`}
                  style={{ fontFamily: "SF Pro Display B" }}
                >
                  {(i18n.language === "ms" || i18n.language === "en") && (
                    <div> {t("choose-KT")}</div>
                  )}
                  {i18n.language === "zh" && (
                    <>
                      <div> {t("choose-KT-mand")}</div>
                      <div> {t("choose-KT-mand2")}</div>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <div
                className={`md:text-[32px] text-center ${
                  i18n.language === "zh" ? "text-xl" : " text-base"
                }`}
                style={{
                  fontFamily: "SF Pro Display M",
                  lineHeight: "normal",
                }}
              >
                <div className="w-full flex items-center justify-center ">
                  <span
                    className={`w-full ${
                      i18n.language === "en"
                        ? "md:w-[858px]"
                        : i18n.language === "ms"
                        ? "md:w-[908px]"
                        : "md:w-[800px]"
                    }`}
                  >
                    {t("choose-desc")}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/*CONTENT 10*/}
          <div className="w-full flex flex-col justify-center items-center gap-[50px]">
            <div>
              <img
                src={Owners}
                alt="Owner"
                className="md:w-[600px] md:h-[426px] w-[207px] h-[146px]"
              />
            </div>
            <div
              className={`flex flex-col justify-center items-center ${
                i18n.language === "zh"
                  ? "gap-5 md:gap-4"
                  : " gap-4 md:gap-[30px]"
              }`}
            >
              <div
                className={`md:text-[50px] text-[32px] ${
                  i18n.language === "zh" ? "font-bold" : ""
                }`}
                style={{ fontFamily: "SF Pro Display B" }}
              >
                {t("school-owner")}
              </div>

              <div className="flex items-center">
                <div
                  className={`text-center justify-center items-center ${
                    i18n.language === "zh"
                      ? "md:text-[30px] text-xl"
                      : "md:text-[32px] text-base"
                  }`}
                  style={{
                    fontFamily: "SF Pro Display M",
                    lineHeight: "normal",
                  }}
                >
                  {/**Web version */}
                  <div className="hidden md:flex flex-col justify-center items-center">
                    <div> {t("school-owner-desc")}</div>
                    {i18n.language === "zh" && (
                      <div> {t("school-owner-desc2")}</div>
                    )}
                  </div>

                  {/**mobile version */}
                  <div className="md:hidden flex flex-col justify-center items-center">
                    <div> {t("school-owner-desc-mobile")}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*CONTENT 11*/}

          <div
            className={`w-full flex flex-col justify-center items-center ${
              i18n.language === "zh" ? "gap-[50px]" : "md:gap-[50px] gap-[49px]"
            }`}
          >
            <div>
              <img
                src={Admin}
                alt="Admin"
                className="md:w-[600px] md:h-[388px] w-[207px] h-[133px]"
              />
            </div>
            <div
              className={`w-full flex flex-col justify-center items-center  ${
                i18n.language === "zh"
                  ? "gap-5 md:gap-4"
                  : " gap-4 md:gap-[30px]"
              }`}
            >
              <div
                className={`md:text-[50px] text-[32px] ${
                  i18n.language === "zh" ? "font-bold" : ""
                }`}
                style={{ fontFamily: "SF Pro Display B" }}
              >
                {t("administrator")}
              </div>

              <div
                className={`w-full flex flex-col items-center  text-center  ${
                  i18n.language === "zh"
                    ? "md:text-3xl text-xl"
                    : "md:text-[32px] text-base"
                }`}
                style={{
                  fontFamily: "SF Pro Display M",
                  lineHeight: "normal",
                }}
              >
                {i18n.language === "ms" && (
                  <>
                    <div className="hidden md:flex flex-col justify-center items-center">
                      <div> {t("admin-desc1")}</div>
                      <div> {t("admin-desc2")}</div>
                      <div> {t("admin-desc3")}</div>
                      <div> {t("admin-desc4")}</div>
                    </div>
                    <div className="md:hidden flex flex-col justify-center items-center">
                      <div> {t("admin-desc")}</div>
                    </div>
                  </>
                )}
                {(i18n.language === "en" || i18n.language === "zh") && (
                  <div className="flex flex-col justify-center items-center">
                    <div> {t("admin-desc")}</div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/*CONTENT 12*/}
          <div className="w-full flex flex-col justify-center items-center gap-[50px]">
            <div>
              <img
                src={Teacher2}
                alt="Teacher"
                className="md:w-[600px] md:h-[406px] w-[207px] h-[140px]"
              />
            </div>
            <div
              className={`flex flex-col justify-center items-center  ${
                i18n.language === "zh"
                  ? "gap-5 md:gap-4"
                  : " gap-4 md:gap-[30px]"
              }`}
            >
              <div
                className={`md:text-[50px] text-[32px]  ${
                  i18n.language === "zh" ? "font-bold" : ""
                }`}
                style={{ fontFamily: "SF Pro Display B" }}
              >
                {t("teacher")}
              </div>

              <div className="flex items-center">
                <div
                  className={`text-center  ${
                    i18n.language === "zh"
                      ? "md:text-[30px] text-xl"
                      : "md:text-[32px] text-base "
                  }`}
                  style={{
                    fontFamily: "SF Pro Display M",
                    lineHeight: "normal",
                  }}
                >
                  {/*Mobile*/}
                  <div className="md:hidden flex items-center justify-center text-center">
                    {t("teacher-desc-mobile")}
                  </div>

                  {/*Desktop*/}
                  <div className="hidden md:flex flex-wrap justify-center items-center">
                    <span className={`inline-block ${TeacherDescWidth()}`}>
                      <div>{t("teacher-desc")}</div>
                      {i18n.language === "zh" && (
                        <div>{t("teacher-desc2")}</div>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*CONTENT 13*/}
          <div className="flex flex-col justify-center items-center gap-[50px]">
            <div>
              <img
                src={Parent}
                alt="Parent"
                className={` w-[207px] h-[180px] ${
                  i18n.language === "zh"
                    ? " md:w-[530px] md:h-[530px]"
                    : "  md:w-[530px] md:h-[450px]"
                }`}
              />
            </div>
            <div
              className={`flex flex-col justify-center items-center ${
                i18n.language === "zh"
                  ? "gap-5 md:gap-4"
                  : " gap-4 md:gap-[30px]"
              }`}
            >
              <div
                className={`md:text-[50px] text-[32px]  ${
                  i18n.language === "zh" ? "font-bold" : ""
                }`}
                style={{ fontFamily: "SF Pro Display B" }}
              >
                {t("parent")}
              </div>

              <div className="flex items-center">
                <div
                  className={`text-center ${
                    i18n.language === "zh"
                      ? "md:text-[30px] text-xl"
                      : "md:text-[32px] text-base "
                  }`}
                  style={{
                    fontFamily: "SF Pro Display M",
                    lineHeight: "normal",
                  }}
                >
                  <div className="flex items-center justify-center ">
                    {t("parent-desc")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  coding asal utk why choose
      <div className="w-full flex flex-col justify-center items-center px-[220px] py-[200px]">
        <div className="w-[1000px] flex flex-col justify-center items-center gap-y-[200px]">
          <div className="flex flex-col justify-center items-center gap-[50px]">
            <div>
              <img src={Choose} alt="Teachers" className="w-32 h-32"></img>
            </div>
            <div className="flex w-[466px] h-40">
              <h1
                className="text-[#752A15] text-3xl/[80px]"
                style={{ fontSize: "80px", fontFamily: "SF Pro Bold" }}
              >
                Why choose Kindertown?
              </h1>
            </div>
            <div>
              <p
                style={{ fontFamily: "SF Pro Medium" }}
                className="text-3xl text-center"
              >
                Let's address the complex operations of the school to enhance
                efficiency for both the school and teachers. Simultaneously,
                let's effectively enhance the school's reputation.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div>
              <img
                src={Owners}
                alt="Owner"
                className="w-[600px] h-[426px]"
              ></img>
            </div>
            <div className="pt-[50px]">
              <h1 style={{ fontSize: "50px", fontFamily: "SF Pro Bold" }}>
                School Owners
              </h1>
            </div>
            <div className="pt-[30px]">
              <p
                style={{ fontFamily: "SF Pro Medium" }}
                className="text-3xl text-center"
              >
                We will comprehensively understand the school and ensure
                reputation and quality control. Supervise the operational
                aspects of the school and improve communication between teachers
                and staff.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div>
              <img
                src={Admin}
                alt="Admin"
                className="w-[600px] h-[388px]"
              ></img>
            </div>
            <div className="pt-[50px]">
              <h1 style={{ fontSize: "50px", fontFamily: "SF Pro Bold" }}>
                Administrators
              </h1>
            </div>
            <div className="pt-[30px]">
              <p
                style={{ fontFamily: "SF Pro Medium" }}
                className="text-3xl text-center"
              >
                An advanced management system with technological records,
                significantly enhancing efficiency and saving time and money in
                administrative tasks. It also addresses the sluggish procedural
                issues often found intraditional school settings.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div>
              <img
                src={Teacher2}
                alt="Admin"
                className="w-[600px] h-[406px]"
              ></img>
            </div>
            <div className="pt-[50px]">
              <h1 style={{ fontSize: "50px", fontFamily: "SF Pro Bold" }}>
                Teachers
              </h1>
            </div>
            <div className="pt-[30px]">
              <p
                style={{ fontFamily: "SF Pro Medium" }}
                className="text-3xl text-center"
              >
                Effectively enhance accountability for teachers regarding
                student attitudes and progress in learning. Additionally, it
                enables faster real-time synchronization of students'
                assignments and activities within the school.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div>
              <img
                src={Parent}
                alt="Admin"
                className="w-[530px] h-[450px]"
              ></img>
            </div>
            <div className="pt-[50px]">
              <h1 style={{ fontSize: "50px", fontFamily: "SF Pro Bold" }}>
                Parents
              </h1>
            </div>
            <div className="pt-[30px]">
              <p
                style={{ fontFamily: "SF Pro Medium" }}
                className="text-3xl text-center"
              >
                Stay informed in real-time about your child's learning progress,
                school activities, announcements, temperature records,
                kindergarten check-ins, important updates, and convenient
                tuition payment options. This system allows parents to engage
                more humanely and effectively with school-related matters.
              </p>
            </div>
          </div>
        </div>
      </div>
*/}
    </>
  );
};

export default Home;
