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
import PopupForm from "./Form";
import { useTranslation } from "react-i18next";
const Home = () => {
  const { t, i18n } = useTranslation();
  // const [openForm, setOpenForm] = useState(false);
  return (
    <>
      <div
        className={`w-full flex flex-col justify-center items-center md:pt-[100px] pt-[80px]`}
      >
        <div className="w-full md:max-w-[1000px] flex flex-col justify-center items-center">
          <div className="w-full flex flex-col md:px-0 pl-[31px] pr-[32px] md:gap-[100px] gap-[50px]">
            {/*Gambar main*/}
            <div className="w-full flex flex-col gap-[50px]">
              {/*CONTENT 1 GAMBAR*/}
              <div>
                <img src={Main} alt="" loading="lazy" />
              </div>
              {/*Content 2 */}
              <div className="w-full flex flex-col justify-center gap-[150px] items-center">
                <div
                  className={`flex flex-col items-center md:w-full w-[340px] md:gap-[50px] ${i18n.language === "zh"
                    ? "gap-[10px]"
                    : "gap-[20px]"}`}
                >
                  <div
                    className={`w-full text-4xl md:text-[80px] text-center md:leading-[90px] text-[#F67F00] gap-[50px] font-bold`}
                  >
                    <div>{t("zero-worry")}</div>
                    <div> {t("zero-hassle")}</div>
                  </div>
                  <div
                    className={`w-full text-center font-semibold md:text-[32px] text-base ${i18n.language === 'zh' ? "md:font-semibold" : "md:font-medium"}`}
                    style={{
                      lineHeight: "normal",
                    }}
                  >
                    <div
                      className={"md:flex flex-col hidden items-center justify-center md:w-[1000px]"}
                      style={{
                        lineHeight: "normal",
                      }}
                    >
                      <div>{t("main-text1")}</div>
                      <div>{t("main-text2")}</div>
                      <div>{t("main-text3")}</div>
                    </div>
                    <div
                      className={`md:hidden flex flex-col items-center justify-center w-[340px] ${i18n.language === 'ms' ? 'text-balance' : 'tracking-tight'}`}
                      style={{
                        lineHeight: "normal",
                      }}
                    >
                      <div>{t("main-text-mobile")}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*Kindertown superhighlight*/}
            <div className="flex flex-col md:gap-[50px] gap-[30px] justify-center items-center md:text-3xl text-base ">
              <div
                className={`text-center w-full font-bold`}
                style={{
                  lineHeight: "normal",
                }}
              >
                {t("app-highlight")}
              </div>
              <div className="w-full flex flex-wrap md:gap-7 gap-[30px]">
                {/* box 1 -- Say Goodbye */}
                <div
                  className={`w-full md:w-[315px] rounded-[10px] md:gap-[50px] gap-[30px] py-[30px] md:py-[50px] px-[25px] bg-[#F67F00] flex flex-col justify-center items-center`}
                >
                  <div>
                    <img
                      src={Planner}
                      alt="Planner"
                      className="md:w-40 md:h-[120px]"
                    />
                  </div>

                  <div
                    className={`flex flex-col items-center md:gap-5 gap-[10px] w-[270px]`}
                  >
                    <div
                      className={`text-center text-xl w-full font-bold`}
                      style={{
                        lineHeight: "normal",
                      }}
                    >
                      <div className="hidden md:flex flex-col">
                        <div className="flex flex-col items-center justify-center">
                          <div>{t("say-goodbye")}</div>
                          <div>{t("say-goodbye2")}</div>
                        </div>
                      </div>

                      <div className="md:hidden flex flex-col text-[16px]">
                        <div> {t("say-goodbye-mobile")}</div>
                        <div> {t("say-goodbye2-mobile")}</div>
                      </div>
                    </div>
                    {/*web*/}
                    <div className="hidden md:flex flex-col text-center text-[20px] font-medium">
                      <div
                        className="flex flex-col items-center justify-center tracking-tight" 
                        style={{
                          lineHeight: "normal",
                        }}
                      >
                        <div>{t("now-secure")}</div>
                        <div>{t("now-secure2")}</div>
                        <div>{t("now-secure3")}</div>
                      </div>
                    </div>
                    {/*Mobile*/}
                    <div className="md:hidden flex flex-col text-center text-[14px] text-medium">
                      <div
                        className="flex flex-col items-center justify-center"
                        style={{
                          lineHeight: "normal",
                        }}
                      >
                        <div>{t("now-secure-mobile")}</div>
                        <div>{t("now-secure2-mobile")}</div>
                        <div>{t("now-secure3-mobile")}</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* box 2 -- Know what */}
                <div
                  className={`w-full md:w-[315px] rounded-[10px] md:gap-[50px] gap-[30px] ${i18n.language === "zh"
                    ? "py-[40px]"
                    : "py-[30px]"} md:py-[50px] px-[25px] bg-[#FFC19F] flex flex-col justify-center items-center`}
                >
                  <div>
                    <img
                      src={Child}
                      alt="Child"
                      className="h-[120px] md:w-[126px]"
                    />
                  </div>

                  <div
                    className={`flex flex-col items-center ${i18n.language === "zh"
                      ? "md:gap-[26px] "
                      : "md:gap-5"
                      } gap-[10px] w-[270px]`}
                  >
                    <div
                      className={`text-center md:text-xl text-base w-full tracking-tight font-bold`}
                      style={{ lineHeight: "normal", }}
                    >
                      <div className="flex flex-col items-center justify-center">
                        <div>{t("know-ur-kid")}</div>
                        <div>{t("know-ur-kid2")}</div>
                      </div>
                    </div>

                    <div
                      className="text-center md:text-xl text-sm font-medium"
                      style={{ lineHeight: "normal", }}
                    >
                      <div className="md:flex flex-col hidden items-center justify-center">
                        <div>{t("stay-inform")}</div>
                        <div>{t("stay-inform2")}</div>
                        <div>{t("stay-inform3")}</div>
                      </div>
                      <div className="flex flex-col md:hidden items-center justify-center">
                        <div>{t("stay-inform-mobile1")}</div>
                        <div>{t("stay-inform-mobile2")}</div>
                        <div>{t("stay-inform-mobile3")}</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Box 3 -- Never miss */}
                <div
                  className={`w-full md:w-[314px] rounded-[10px] md:gap-[50px] gap-[30px] py-[30px] md:py-[50px] px-[25px] bg-[#FCBF4A] flex flex-col justify-center items-center`}
                >
                  <div>
                    <img
                      src={Playground}
                      alt="Child"
                      className="md:h-[120px] md:w-[137px]"
                    />
                  </div>

                  <div
                    className={`flex flex-col items-center md:gap-5 gap-[10px] w-[270px]`}
                  >
                    <div
                      className={`text-center md:text-xl text-base w-full font-bold`}
                      style={{ lineHeight: "normal" }}
                    >
                      <div className="flex flex-col items-center justify-center">
                        <div>{t("miss-school-act")}</div>
                        <div>{t("miss-school-act2")}</div>
                      </div>
                    </div>

                    <div
                      className="text-center md:text-xl text-sm md:h-[72px] font-medium"
                      style={{ lineHeight: "normal", }}
                    >
                      <div className="md:flex flex-col hidden items-center justify-center">
                        <div>{t("latest-happening")}</div>
                        <div>{t("latest-happening2")}</div>
                        <div>{t("latest-happening3")}</div>
                      </div>
                      <div className="flex flex-col md:hidden items-center justify-center">
                        <div>{t("latest-happening-mobile1")}</div>
                        <div>{t("latest-happening-mobile2")}</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Box 4 -- Pay your school fee */}
                <div
                  className={`w-full md:w-[314px] rounded-[10px] md:gap-[50px] gap-[30px] py-[30px] md:py-[50px] px-[25px] bg-[#FDE0A4] flex flex-col justify-center items-center`}
                >
                  <div>
                    <img
                      src={Computer}
                      alt="Gadget"
                      className="md:h-[120px] md:w-[150px]"
                    />
                  </div>

                  <div
                    className={`flex flex-col items-center md:gap-5 gap-[10px] w-[270px]`}
                  >
                    <div
                      className={`text-center md:text-xl text-base w-full font-bold`}
                      style={{ lineHeight: "normal", }}
                    >
                      <div className="flex flex-col items-center justify-center">
                        <div>{t("pay-fees")}</div>
                        <div>{t("pay-fees2")}</div>
                      </div>
                    </div>

                    <div
                      className="text-center md:text-xl text-sm md:h-[72px] font-medium"
                      style={{ lineHeight: "normal", }}
                    >
                      <div className="md:flex flex-col hidden items-center justify-center">
                        <div>{t("school-fee")}</div>
                        <div>{t("school-fee2")}</div>
                        <div>{t("school-fee3")}</div>
                      </div>
                      <div className="flex flex-col md:hidden items-center justify-center">
                        <div>{t("school-fee-mobile1")}</div>
                        <div>{t("school-fee-mobile2")}</div>
                        <div>{t("school-fee-mobile3")}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Box 5 -- Marketplace */}
                <div
                  className={`w-full md:w-[314px] rounded-[10px] md:gap-[50px] gap-[30px] py-[30px] md:py-[50px] px-[25px] bg-[#E0956C] flex flex-col justify-center items-center`}
                >
                  <div>
                    <img
                      src={Pencil}
                      alt="Pencil"
                      className="md:h-[120px] md:w-[120px]"
                    />
                  </div>

                  <div
                    className={`flex flex-col items-center md:gap-5 gap-[10px] w-[270px]`}
                  >
                    <div
                      className={`text-center md:text-xl text-base w-full font-bold `}
                      style={{ lineHeight: "normal", }}
                    >
                      <div className="flex flex-col">
                        <div className="flex flex-col items-center justify-center ">
                          <div>{t("market-convenience")}</div>
                          <div>{t("market-convenience2")}</div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="text-center md:text-xl text-sm font-medium"
                      style={{ lineHeight: "normal", }}
                    >
                      <div>{t("supply-resource1")}</div>
                      <div>{t("supply-resource2")}</div>
                      <div>{t("supply-resource3")}</div>
                    </div>
                  </div>
                </div>
                {/* Box 6 -- Discover countless */}
                <div
                  className={`w-full md:w-[314px] rounded-[10px] md:gap-[50px] gap-[30px] py-[30px] md:py-[50px] px-[25px] bg-[#FFDDB9] flex flex-col justify-center items-center`}
                >
                  <div>
                    <img
                      src={Tel}
                      alt="Telephone"
                      className="h-[120px] w-[126px]"
                    />
                  </div>
                  <div
                    className={`flex flex-col items-center md:gap-5 gap-[10px] w-[270px]`}
                  >
                    <div
                      className={`text-center md:text-xl text-base w-full font-bold`}
                      style={{ lineHeight: "normal", }}
                    >
                      <div className="flex flex-col items-center justify-center">
                        <div>{t("countless-feature")}</div>
                        <div>{t("countless-feature2")}</div>
                      </div>
                    </div>

                    <div
                      className="text-center md:text-xl text-sm md:h-[72px] font-medium"
                      style={{ lineHeight: "normal", }}
                    >
                      <div className="md:flex flex-col hidden items-center justify-center">
                        <div>{t("interaction-teacher")}</div>
                        <div>{t("interaction-teacher2")}</div>
                        <div>{t("interaction-teacher3")}</div>
                      </div>
                      <div className="flex flex-col md:hidden items-center justify-center">
                        <div>{t("interaction-teacher-mobile1")}</div>
                        <div>{t("interaction-teacher-mobile2")}</div>
                        <div>{t("interaction-teacher-mobile3")}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`w-full flex flex-col bg-[#FFF] justify-center items-center md:px-0 px-5 md:py-[150px] pt-[100px] pb-[50px]`}
        >
          <div
            className={`w-full md:max-w-[1000px] flex flex-col justify-center items-center md:gap-[150px] gap-[50px]`}
          >
            {/*Essential tools*/}
            <div className="md:w-full w-[340px] flex flex-col md:gap-[50px] gap-[30px]">
              <div className="flex flex-col justify-center items-center">
                <img
                  src={Tools}
                  className="md:w-[200px] md:h-[200px] w-[120px] h-[120px]"
                  alt="Tools"
                />
              </div>
              <div className="flex flex-col items-center w-full ">
                <div
                  style={{
                    lineHeight: "normal",
                  }}
                  className={`text-center text-4xl md:text-[96px] text-[#7A5AF8] md:w-full w-[340px] font-bold`}
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
              className={`flex flex-col justify-center items-center gap-[50px] md:gap-[150px]`}
            >
              {/*Content 5 -- Child's Learning Journey*/}
              <div
                className={`flex flex-col w-full gap-[20px]`}
              >
                <div>
                  <img
                    src={Family}
                    alt="Family"
                    className="md:w-[150px] md:h-[150px] w-[80px] h-[80px]"
                  />
                </div>
                <div
                  className={`flex flex-col justify-center w-full gap-[10px]`}
                >
                  <div
                    className="text-[#4D9138] font-bold text-[16px] md:text-[32px]"
                    style={{
                      lineHeight: "normal",
                    }}
                  >
                    <div> {t("learn-journey")}</div>
                  </div>
                  <div>
                    <div
                      className={`flex flex-col justify-center md:text-[32px] text-sm md:font-medium font-semibold`}
                      style={{
                        lineHeight: "normal",
                      }}
                    >
                      <div className="md:flex flex-col hidden text-left justify-center ">
                        <div>{t("learn-journey-desc1")}</div>
                        <div className="md:pb-[30px]">{t("learn-journey-desc2")}</div>
                        <div>{t("learn-journey-desc3")}</div>
                      </div>
                      <div className={`flex flex-col md:hidden text-left w-[340px]`}>
                        <div className="pb-[30px]">{t("learn-journey-desc-mobile1")}</div>
                        <div>{t("learn-journey-desc-mobile2")}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`flex flex-col md:gap-[150px] gap-[50px]`}
              >
                {/*Content 6 -- Busyness of teachers */}
                <div
                  className={`flex flex-col w-full gap-[20px]`}
                >
                  <div>
                    <img
                      src={Teachers}
                      alt="Teacher"
                      className="md:w-[150px] md:h-[150px] w-[80px] h-[80px]"
                    />
                  </div>
                  <div
                    className={`flex flex-col justify-center w-full gap-[10px] `}
                  >
                    <div
                      className={`text-[#752912] font-bold text-[16px] md:text-[32px]`}
                      style={{
                        lineHeight: "normal",
                      }}
                    >
                      {t("busy-teacher")}
                    </div>
                    <div>
                      <div
                        className={`flex flex-col justify-center md:text-[32px] text-sm md:font-medium font-semibold`}
                        style={{
                          lineHeight: "normal",
                        }}
                      >
                        <div className="md:flex flex-col hidden text-left justify-center ">
                          <div>{t("busy-teacher-desc1")}</div>
                          <div>{t("busy-teacher-desc2")}</div>
                          <div className={`md:pb-[30px] `}>{t("busy-teacher-desc3")}</div>
                          <div>{t("busy-teacher-desc4")}</div>
                        </div>
                        <div className={`flex flex-col md:hidden text-left w-[340px]`}>
                          <div className="pb-[30px]">{t("busy-teacher-desc-mobile1")}</div>
                          <div>{t("busy-teacher-desc-mobile2")}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Content 7 -- Break Free*/}
                <div
                  className={`flex flex-col w-full gap-[20px]`}
                >
                  <div>
                    <img
                      src={Slowmode}
                      alt="SlowModes"
                      className={`md:w-[150px] md:h-[150px] w-[80px] h-[80px] `}
                    />
                  </div>
                  <div
                    className={`flex flex-col justify-center w-full gap-[10px] `}
                  >
                    <div
                      className={`text-[#00A0CB] font-bold text-[16px] md:text-[32px]`}
                      style={{
                        lineHeight: "normal",
                      }}
                    >
                      {t("slow-mode")}
                    </div>
                    <div>
                      <div
                        className={`md:flex flex-col hidden justify-center md:text-[32px] gap-[30px] md:font-medium font-semibold`}
                        style={{
                          lineHeight: "normal",
                        }}
                      >
                        <div>{t("slow-mode-desc1")}</div>
                        <div>{t("slow-mode-desc2")}</div>
                      </div>
                      <div
                        className={`flex flex-col md:hidden justify-center gap-[30px] text-sm md:font-medium font-semibold w-[340px]`}
                        style={{
                          lineHeight: "normal",
                        }}
                      >
                        <div>{t("slow-mode-desc-mobile1")}</div>
                        <div>{t("slow-mode-desc-mobile2")}</div>
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

      <div className="relative w-full  md:h-[900px] h-[300px] overflow-hidden">
        <div className="w-full md:pt-[108px] md:pl-[106px]">
          <video
            src={GirlBg}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute md:top-0 left-0 w-full md:object-cover object-center"
          />

          <div className="absolute flex items-center justify-center text-center inset-0 text-[#F67F00] z-10">
            <div
              className={`md:text-[48px] md:flex flex-col hidden font-bold w-full`}
              style={{
                fontFamily: "SF Pro Display B",
                lineHeight: "normal",
              }}
            >
              <div className="md:flex flex-col hidden text-center">
                <div>{t("document-journey1")}</div>
                <div>{t("document-journey2")}</div>
                <div>{t("document-journey3")}</div>
              </div>
            </div>
            <div
              className={`flex flex-col md:hidden text-2xl font-bold w-[340px]`}
              style={{
                lineHeight: "normal",
              }}
            >
              <div className="flex flex-col md:hidden text-center w-[340px]">
                <div>{t("document-journey-mobile1")}</div>
                <div>{t("document-journey-mobile2")}</div>
                <div>{t("document-journey-mobile3")}</div>
                <div>{t("document-journey-mobile4")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full flex py-[50px] md:px-0 pl-[31px] pr-[32px] justify-center items-center md:py-[150px]">
        <div className="w-full md:max-w-[1000px] flex flex-col justify-center items-center md:gap-[150px] gap-[50px]">
          {/*CONTENT 9 -- Why choose Kindertown */}
          <div
            className={`w-full flex flex-col justify-center items-center md:gap-[30px] gap-[10px]`}
          >
            <div
              className={`flex flex-col justify-center items-center md:gap-[50px] gap-[30px]`}
            >
              <div>
                <img
                  src={Choose}
                  alt="Teachers"
                  className="md:w-[200px] md:h-[200px] w-[120px] h-[120px]"
                />
              </div>
              <div
                className={`flex w-full justify-center items-center"
                  }`}
              >
                <div
                  className={`text-[#752A15] md:text-[96px] text-center font-bold md:flex flex-col hidden`}
                  style={{
                    fontFamily: "SF Pro Display B",
                    lineHeight: "normal",
                  }}
                >
                  <div> {t("choose-KT1")}</div>
                  <div> {t("choose-KT2")}</div>
                </div>
                <div
                  className={`text-[#752A15] text-center text-4xl font-bold flex flex-col md:hidden`}
                  style={{
                    lineHeight: "normal",
                  }}
                >
                  <div> {t("choose-KT1")}</div>
                  <div> {t("choose-KT2")}</div>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <div
                className={`md:text-[32px] text-sm text-center`}
                style={{
                  lineHeight: "normal",
                }}
              >
                <div className="w-full md:flex hidden items-center justify-center ">
                  <span
                    className={`w-full flex flex-col md:font-medium font-semibold`}
                  >
                    <div>{t("choose-desc1")}</div>
                    <div>{t("choose-desc2")}</div>
                    <div>{t("choose-desc3")}</div>
                  </span>
                </div>
                <div className="w-full flex md:hidden items-center justify-center ">
                  <div
                    className={`md:w-full flex flex-col md:font-medium font-semibold w-[340px]`}
                  >
                    {(i18n.language === 'zh')
                      ?
                      <><div>{t("choose-desc-mobile1")}</div><div>{t("choose-desc-mobile2")}</div></>
                      :
                      <div>{t("choose-desc-mobile")}</div>}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CONTENT 10 -- School Owners */}
          <div className="w-full flex flex-col justify-center items-center md:gap-[50px] gap-[20px]">
            <div>
              <img
                src={Owners}
                alt="Owner"
                className="md:w-[500px] md:h-[350px] h-[150px]"
              />
            </div>
            <div
              className={`flex flex-col justify-center items-center gap-2.5`}
            >
              <div
                className={`md:text-[48px] text-[24px] font-bold `}
              >
                {t("school-owner")}
              </div>

              <div className="flex items-center">
                <div
                  className={`text-center justify-center items-center md:text-[24px] text-[14px]`}
                  style={{
                    lineHeight: "normal",
                  }}
                >
                  {/**Web version */}
                  <div className="hidden md:flex flex-col justify-center items-center font-medium text-balance">
                    <div> {t("school-owner-desc1")}</div>
                    <div> {t("school-owner-desc2")}</div>
                  </div>

                  {/**mobile version */}
                  <div className="w-full flex md:hidden items-center justify-center ">
                    <span
                      className={`flex flex-col font-semibold w-[340px]`}
                    >
                      <div>{t("school-owner-desc-mobile")}</div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*CONTENT 11 -- Adminstrators*/}

          <div
            className={`w-full flex flex-col justify-center items-center gap-[20px] md:gap-[50px]`}
          >
            <div>
              <img
                src={Admin}
                alt="Admin"
                className="md:w-[500px] md:h-[350px] h-[150px]"
              />
            </div>
            <div
              className={`w-full flex flex-col justify-center items-center gap-[10px] `}
            >
              <div
                className={`md:text-[48px] text-[24px] font-bold`}
              >
                {t("administrator")}
              </div>

              <div
                className={`w-full flex flex-col items-center text-center md:text-[24px] text-[14px]`}
                style={{
                  lineHeight: "normal",
                }}
              >
                <div className="w-full flex items-center justify-center ">
                  <span
                    className={`md:flex flex-col hidden justify-center items-center text-balance font-medium`}
                  >
                    <div>{t("admin-desc1")}</div>
                    <div>{t("admin-desc2")}</div>
                  </span>
                </div>
                <span
                  className={`flex flex-col md:hidden justify-center items-center font-semibold w-[340px]`}
                >
                  <div>{t("admin-desc")}</div>
                </span>
              </div>
            </div>
          </div>

          {/*CONTENT 12 -- Teachers */}
          <div className="w-full flex flex-col justify-center items-center md:gap-[50px] gap-[20px]">
            <div>
              <img
                src={Teacher2}
                alt="Teacher"
                className="md:w-[500px] md:h-[350px] h-[150px]"
              />
            </div>
            <div
              className={`flex flex-col justify-center items-center gap-[10px]`}
            >
              <div
                className={`md:text-[48px] text-[24px] font-bold `}
              >
                {t("teacher")}
              </div>

              <div className="flex items-center">
                <div
                  className={`text-center md:text-[24px] text-sm`}
                  style={{
                    lineHeight: "normal",
                  }}
                >
                  {/*Mobile*/}
                  <div className="md:hidden flex items-center justify-center text-center font-semibold w-[340px]">
                    {t("teacher-desc-mobile")}
                  </div>

                  {/*Desktop*/}
                  <div className="hidden md:flex flex-wrap justify-center items-center">
                    <div className={`inline-block font-medium flex flex-col justify-center text-center text-balance`}>
                      <div>{t("teacher-desc1")}</div>
                      <div>{t("teacher-desc2")}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*CONTENT 13 -- Parents */}
          <div className="flex flex-col justify-center items-center md:gap-[50px] gap-5">
            <div>
              <img
                src={Parent}
                alt="Parent"
                className={` h-[150px] md:w-[500px] md:h-[430px]`}
              />
            </div>
            <div
              className={`flex flex-col justify-center items-center text-center gap-[10px] font-bold`}
            >
              <div
                className={`md:text-[48px] text-[24px] `}
                style={{ lineHeight: "normal" }}
              >
                {t("parent")}
              </div>

              <div className="flex items-center">
                <div
                  className={`text-center text-pretty md:font-medium font-semibold md:text-[24px] text-sm`}
                  style={{
                    lineHeight: "normal",
                  }}
                >
                  <div className="md:flex flex-col hidden items-center justify-center text-center text-balance">
                    <div>{t("parent-desc1")}</div>
                    <div>{t("parent-desc2")}</div>
                    <div>{t("parent-desc3")}</div>
                  </div>
                  <div className="flex flex-col md:hidden items-center justify-center text-center w-[340px]">
                    <div>{t("parent-desc")}</div>
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
      <PopupForm />
    </>
  );
};

export default Home;
