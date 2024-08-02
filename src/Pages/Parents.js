// JoinUs.jsx
import React from "react";
import Privacy from "./Privacy";
import PopupForm from "./Form";
import Phone1 from "../assets/parent/phone1.png";
import Phone2 from "../assets/parent/phone2.png";
import Phone3 from "../assets/parent/phone3.png";
import Phone4 from "../assets/parent/phone4.png";
import Phone5 from "../assets/parent/phone5.png";
import Phone6 from "../assets/parent/phone6.svg";
import Phone7 from "../assets/parent/phone7.svg";
import Phone8 from "../assets/parent/phone8.png";
import Phone9 from "../assets/parent/phone9.svg";
import Phone10 from "../assets/parent/phone10.svg";
import Phone11 from "../assets/parent/phone11.png";
import Jam1 from "../assets/parent/jam1.svg";
import Jam2 from "../assets/parent/jam2.svg";
import Jam3 from "../assets/parent/jam3.svg";
import Jam4 from "../assets/parent/jam4.svg";
import Jam5 from "../assets/parent/jam5.svg";
import Jam6 from "../assets/parent/jam6.svg";
import BringExpert from "../assets/indoors_day.mp4";
import { useTranslation } from "react-i18next";

const Parent = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="w-full flex flex-col relative md:pb-[200px] pt-[60px] pb-[50px] justify-center items-center">
        <div className="w-full md:min-w-[1000px] flex flex-col md:gap-[150px] gap-[100px]">
          <div className="w-full flex flex-col gap-[50px] md:gap-[100px] items-center">

            {/*Content 1 -- Kindertown*/}
            <div className="relative w-full md:pb-[20px] md:h-[900px] h-[300px] overflow-hidden">
              <div className="w-full md:pt-[108px] md:pl-[106px]">
                <video
                  src={BringExpert}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="absolute md:top-0 left-0 w-full h-[300px] md:h-auto object-cover object-center"
                />

                <div className="absolute flex items-center justify-center text-center inset-0 text-[#0CA39B] z-10">
                  <div
                    className={`md:text-[64px] text-2xl font-bold`}
                    style={{
                      lineHeight: "normal",
                    }}
                  >
                    <><div>{t("bring-expert")}</div>
                      <div>{t("bring-expert2")}</div></>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full flex flex-col md:gap-[30px] gap-[10px] px-[30px]">
              <div className="flex flex-col justify-center items-center">
                <div
                  className={`text-center md:text-[80px] text-[24px] font-bold`}
                  style={{
                    lineHeight: "normal",
                  }}
                >
                  <div className="flex flex-col justify-center items-center text-center">
                    {t("KT-parents")}
                  </div>

                </div>
              </div>

              <div className="flex flex-col justify-center items-center">
                <div
                  className={`text-center text-sm md:text-[32px] md:font-medium font-semibold`}
                  style={{
                    lineHeight: "normal",
                  }}
                >
                  <div className="flex flex-wrap items-center justify-center ">
                    {i18n.language === "zh" ? 
                      <>
                        <div className="md:inline-block md:w-[1000px] hidden font-semibold" style={{ lineHeight: "normal" }}>
                          {t("KT-parent-desc")}
                        </div>
                        <div className="md:hidden flex flex-col items-center justify-center text-center font-semibold w-[340px]">
                          <div>{t("mobile-KT-parent-desc")}</div>
                          <div>{t("mobile-KT-parent-desc2")}</div>
                        </div>
                      </>
                     : i18n.language === "ms" ? 
                      <>
                        <div className="md:inline-block md:w-[1000px] hidden">
                          {t("KT-parent-desc")}
                        </div>
                        <div className="md:hidden flex flex-col items-center justify-center text-center w-[340px]">
                          <div>{t("mobile-KT-parent-desc")}</div>
                        </div>
                      </>
                     : 
                      <>
                        <div className="md:inline-block hidden md:w-[785px]">
                          {t("KT-parent-desc")}
                        </div>
                        <div className="md:hidden flex flex-col items-center justify-center font-semibold text-center w-[340px]">
                          <div>{t("mobile-KT-parent-desc")}</div>
                        </div>
                      </>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col justify-center items-center md:gap-[150px] gap-[100px]  md:px-0 px-[30px]">
            <div
              className={`w-full flex items-center flex-col md:gap-[150px] gap-[100px]`}
            >
              {/*CONTENT 2 -- Designed for the future*/}
              <div
                className={`md:w-[1000px] md:h-[612px] h-[250px] w-[370px] relative `}
              >
                <div className="flex flex-col absolute">
                  <img
                    src={Phone1}
                    alt="phone1"
                    className="md:w-[800px] w-full bottom-0 left-0 md:h-auto h-[250px]"
                  />
                </div>

                <div className="flex flex-col items-center absolute top-0 right-0">
                  <div
                    className={`text-center md:w-[500px] text-[#F67F00] font-bold md:text-[64px] text-base`}
                    style={{
                      lineHeight: "normal",
                    }}
                  >
                    <div className="hidden md:flex flex-col text-right relative tracking-tight top-0 right-0">
                      <div>{t("design-web1")}</div>
                      <div>{t("design-web2")}</div>
                    </div>
                    <div
                      className={`md:hidden flex flex-col relative text-right ${i18n.language === "en" ? "w-[130px]" : "w-[145px]"
                        }`}
                    >
                      <div>{t("design-mobile1")}</div>
                      <div>{t("design-mobile2")}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/*CONTENT 3 -- Build for learning*/}
              <div className={`md:w-full w-[370px] md:h-[800px] relative flex justify-center md:gap-[150px] gap-[50px]`}>
                <div className="flex flex-col">
                  <div
                    className={`w-full text-[#64697A] md:text-[64px] text-[16px] font-bold md:h-[800px]`}
                    style={{
                      lineHeight: "normal",
                    }}
                  >
                    <div
                      className={`hidden md:flex flex-col text-left tracking-tight md:w-[532.997px]`}
                    >
                      <div>{t("build-learning")}</div>
                      <div>{t("build-learning2")}</div>
                      {i18n.language === "ms" && (
                        <div>
                          <div>{t("build-learning3")}</div>
                          <div>{t("build-learning4")}</div>{" "}
                        </div>
                      )}
                    </div>

                    <div
                      className={`md:hidden flex flex-col text-left w-[154px]`}
                    >
                      <div>{t("build-learning-mobile")}</div>
                      <div> {t("build-learning2-mobile")}</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ">
                  <img
                    src={Phone2}
                    alt="phone2"
                    className=" md:w-[350px] md:h-[800px] h-[300px] object-fill"
                  />
                </div>
              </div>

              {/*CONTENT 4 -- Witness boundless imagination*/}
              <div className={`md:w-[1000px] md:h-[800px] h-[300px] w-[370px] relative flex justify-center `}>
                <div className="flex flex-col absolute bottom-0 left-0">
                  <img
                    src={Phone3}
                    alt="phone3"
                    className="bottom-0 left-0 md:h-[800px] md:w-auto h-[300px]"
                  />
                </div>

                <div className="flex flex-col items-center absolute top-0 right-0">
                  <div
                    className={`text-center  w-full text-[#003A91] md:text-[64px] text-[16px] font-bold`}
                    style={{
                      lineHeight: "normal",
                    }}
                  >
                    <div
                      className={`hidden md:flex flex-col text-right relative top-0 right-0 ${i18n.language === "ms"
                        ? 'md:w-[648px]'
                        : 'md:w-[400px]'
                        }`}
                    >
                      <div>{t("boundless-imagination")}</div>
                      <div>{t("boundless-imagination2")}</div>
                    </div>
                    <div className={`md:hidden flex flex-col text-right justify-center ${i18n.language === "ms"
                        ? 'w-[150px]'
                        : 'w-[100px]'
                        }`}>
                      <div>{t("boundless-imagination")}</div>
                      <div>{t("boundless-imagination2")}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/*CONTENT 5 -- Ignite learning passion */}
              <div
                className={`w-full flex flex-col md:gap-[50px] gap-[20px] items-center justify-center `}
              >
                <div className="items-center">
                  <div
                    className={`flex flex-col text-center w-full text-[#FF0001] items-center justify-center md:text-[64px] text-base font-bold ${i18n.language === "zh"
                      ? "md:text-[70px] "
                      : "md:text-[50px] "
                      }`}
                    style={{
                      lineHeight: "normal",
                    }}
                  >
                    {/*Desktop*/}
                    <div className="hidden md:flex flex-col justify-center items-center">
                      <div>{t("ignite-learning")}</div>
                      <div> {t("ignite-learning2")}</div>
                      {i18n.language === "ms" && (
                        <div>{t("ignite-learning3")}</div>
                      )}
                    </div>

                    {/*Mobile*/}
                    <div className="md:hidden flex flex-col items-center justify-center w-[340px]">
                      <div> {t("ignite-learning-mobile")}</div>
                      <div> {t("ignite-learning2-mobile")}</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ">
                  <img
                    src={Phone4}
                    alt="phone4"
                    className="md:w-[350px] w-[150px]"
                  />
                </div>
              </div>

              {/*CONTENT 6 -- Share little moment */}
              <div
                className={`w-full flex flex-col items-center justify-center `}
              >
                <div className="flex flex-col items-center md:gap-[50px] gap-[20px]">
                  <div
                    className={`text-center w-full text-[#4D9138] md:text-[64px] font-bold text-base`}
                    style={{
                      lineHeight: "normal",
                    }}
                  >
                    {/*Desktop*/}
                    <div
                      className={`hidden md:flex flex-col justify-center items-center`}
                    >
                      <div>{t("share-moment")}</div>
                      <div>{t("share-moment2")}</div>
                      {i18n.language === "ms" && (
                        <div>{t("share-moment3")}</div>
                      )}
                    </div>
                    {/*Mobile*/}
                    <div
                      className={`md:hidden flex flex-col items-center justify-center w-[333px]`}
                    >
                      <div>{t("share-moment-mobile")}</div>
                      <div>{t("share-moment2-mobile")}</div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <img
                      src={Phone5}
                      alt="phone5"
                      className=" md:w-[350px] md:h-[800px] h-[300px]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* CONTENT 7 -- Attractive widget*/}
            <div className={`md:w-[1000px] flex flex-wrap gap-[30px] md:gap-[100px]`}>
              <div className="flex flex-col justify-center items-center w-full">
                <div className="flex flex-col items-center">
                  <div
                    className={`text-center md:text-[48px] text-base font-bold`}
                    style={{
                      lineHeight: "normal",
                    }}
                  >
                    <div className="md:hidden flex flex-col items-center justify-center">
                      <div> {t("attractive-widget")}</div>
                      <div> {t("attractive-widget2")}</div>
                    </div>
                    <div className="hidden md:flex items-center justify-center">
                      <span className="inline-block">
                        <div> {t("attractive-widget")}</div>
                        <div> {t("attractive-widget2")}</div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* web view */}
              <div className="w-full md:flex flex-wrap hidden md:gap-[100px] align-center">
                <div className="flex justify-between w-full">
                  <div className="flex flex-row">
                    <img
                      src={Jam1}
                      alt="Jam1"
                      className="w-max-full"
                    />
                  </div>
                  <div className="flex flex-row">
                    <img
                      src={Jam2}
                      alt="Jam2"
                      className="w-max-full"
                    />
                  </div>
                  <div className="flex flex-row">
                    <img
                      src={Jam3}
                      alt="Jam3"
                      className="w-max-full"
                    />
                  </div>
                </div>
                <div className="flex justify-between w-full">
                  <div className="md:flex md:flex-row">
                    <img
                      src={Phone6}
                      alt="Phone6"
                      className="w-max-full"
                    />
                  </div>
                  <div className="md:flex md:flex-row">
                    <img
                      src={Phone7}
                      alt="Phone7"
                      className="w-max-full"
                    />
                  </div>
                  <div className="md:flex md:flex-row">
                    <img
                      src={Phone8}
                      alt="Phone8"
                      className="w-max-full"
                    />
                  </div>
                </div>
              </div>

              {/* mobile view */}
              <div className="w-full flex flex-wrap md:hidden align-center gap-4">
                <div className="flex justify-between w-full">
                  <div className="flex flex-row">
                    <img
                      src={Jam4}
                      alt="Jam4"
                      className="w-max-full"
                    />
                  </div>
                  <div className="flex flex-row">
                    <img
                      src={Jam5}
                      alt="Jam5"
                      className="w-max-full"
                    />
                  </div>
                  <div className="flex flex-row">
                    <img
                      src={Jam6}
                      alt="Jam6"
                      className="w-max-full"
                    />
                  </div>
                </div>
                <div className="flex justify-between w-full">
                  <div className="flex flex-row">
                    <img
                      src={Phone9}
                      alt="Phone9"
                      className="w-max-full"
                    />
                  </div>
                  <div className="md:flex md:flex-row">
                    <img
                      src={Phone10}
                      alt="Phone10"
                      className="w-max-full"
                    />
                  </div>
                  <div className="md:flex md:flex-row">
                    <img
                      src={Phone11}
                      alt="Phone11"
                      className="w-max-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PopupForm />
      <Privacy />
    </>
  );
};

export default Parent;
