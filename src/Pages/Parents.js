// JoinUs.jsx
import React from "react";
import Privacy from "./Privacy";
import PopupForm from "./Form";
import Phone1 from "../assets/parent/phone1.png";
import Phone2 from "../assets/parent/phone2.png";
import Phone3 from "../assets/parent/phone3.png";
import Phone4 from "../assets/parent/phone4.png";
import Phone5 from "../assets/parent/phone5.png";
import Phone6 from "../assets/parent/phone6.png";
import Phone7 from "../assets/parent/phone7.png";
import Phone8 from "../assets/parent/phone8.png";
import Jam1 from "../assets/parent/jam1.png";
import Jam2 from "../assets/parent/jam2.png";
import Jam3 from "../assets/parent/jam3.png";
import BringExpert from "../assets/indoors_day.mp4";
import { useTranslation } from "react-i18next";

const Parent = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="w-full flex flex-col relative md:pb-[200px] pt-[60px] pb-[100px] justify-center items-center">
        <div className="w-full md:min-w-[1000px] flex flex-col md:gap-[150px] gap-[100px]">
          <div className="w-full md:px-0 px-5 flex flex-col gap-[50px] md:gap-[100px]  items-center">
            {/*Content 1*/}
            <div className="relative w-full md:pb-[20px] md:h-[900px] h-[300px] overflow-hidden">
              <div className="w-full md:pt-[108px] md:pl-[106px]">
                <video
                  src={BringExpert}
                  autoPlay
                  loop
                  muted
                  className="absolute md:top-0 left-0 w-full object-cover object-center"
                />

                <div className="absolute flex items-center justify-center text-center inset-0 text-[#0CA39B] z-10">
                  <div
                    className={`md:text-[64px] text-2xl font-bold`}
                    style={{
                      fontFamily: "SF Pro Display B",
                      lineHeight: "normal",
                    }}
                  >
                    <><div>{t("bring-expert")}</div>
                      <div>{t("bring-expert2")}</div></>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-[30px]">
              <div className="flex flex-col justify-center items-center">
                <div
                  className={`text-center md:text-[80px] text-4xl ${i18n.language === "zh" ? "font-bold" : ""
                    }`}
                  style={{
                    fontFamily: "SF Pro Display B",
                    lineHeight: "normal",
                  }}
                >
                  {/*mandarin*/}
                  {i18n.language === "zh" && <div>{t("KT-parents")} </div>}

                  {/*eng and ms - web*/}
                  {(i18n.language === "ms" || i18n.language === "en") && (
                    <div className="flex flex-col justify-center items-center text-center">
                      <div className="hidden md:flex flex-col ">
                        {t("KT-parents")}
                      </div>
                      <div className="md:hidden flex flex-col">
                        <div> {t("Kindertown")}</div>
                        <div> Parents</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col justify-center items-center">
                <div
                  className={`text-center text-xl md:text-[32px]`}
                  style={{
                    fontFamily: "SF Pro Display M",
                    lineHeight: "normal",
                  }}
                >
                  {/*Desktop*/}
                  <div className="flex flex-wrap items-center justify-center">
                    {i18n.language === "en" && (
                      <span className="inline-block md:w-[785px] w-full">
                        {t("KT-parent-desc")}
                      </span>
                    )}
                    {i18n.language === "ms" && (
                      <span className="inline-block md:w-[1000px] w-full tracking-wider leading-none">
                        {t("KT-parent-desc")}
                      </span>
                    )}
                    {i18n.language === "zh" && (
                      <span className="inline-block md:w-[500px] w-full">
                        {t("KT-parent-desc")}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center md:gap-[150px] gap-[100px]  md:px-0 pl-[31px]  pr-8 ">
            <div
              className={`w-full flex items-center flex-col gap-[150px]`}
            >
              {/*CONTENT 2 */}
              <div
                className={`md:w-[1000px] h-[612px] w-full relative `}
              >
                <div className="flex flex-col absolute">
                  <img
                    src={Phone1}
                    alt="phone1"
                    className="md:w-[800px] w-[150px] bottom-0 left-0"
                  />
                </div>

                <div className="flex flex-col items-center absolute top-0 right-0">
                  <div
                    className={`text-center md:w-[480px] text-[#F67F00] font-bold md:text-[64px] text-xl`}
                    style={{
                      fontFamily: "SF Pro Display B",
                      lineHeight: "normal",
                    }}
                  >
                    <div className="hidden md:flex flex-col text-right relative top-0 right-0">
                      <div>{t("design-web1")}</div>
                      <div>{t("design-web2")}</div>
                    </div>
                    <div
                      className={`md:hidden flex flex-col items-center justify-center  ${i18n.language === "zh" ? "w-[168px]" : "w-[154px]"
                        }`}
                    >
                      <div> {t("design-mobile1")}</div>
                      <div>{t("design-mobile2")}</div>
                      {(i18n.language === "ms" || i18n.language === "en") && (
                        <>
                          <div>{t("design-mobile1")}</div>
                          <div> {t("design-mobile3")}</div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/*CONTENT 3 */}
              <div
                className={`w-full h-[800px] flex items-center justify-center ${i18n.language === "zh" ? "md:gap-[300px] gap-[7px]" : "md:gap-[150px] gap-[26px]"
                  }`}
              >
                <div className="flex flex-col">
                  <div
                    className={`w-full text-[#64697A] md:text-[64px] text-[16px] font-bold h-[800px]`}
                    style={{
                      fontFamily: "SF Pro Display B",
                      lineHeight: "normal",
                    }}
                  >
                    <div
                      className={`hidden md:flex flex-col text-left md:w-[532.997px] md:[800px]`}
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
                      className={`md:hidden flex flex-col justify-center w-[154px] ${i18n.language === "zh" ? "items-end" : "items-center"
                        }`}
                    >
                      <div>{t("build-learning-mobile")}</div>
                      <div> {t("build-learning2-mobile")}</div>
                      <div>{t("build-learning3")}</div>
                      {(i18n.language === "ms" || i18n.language === "en") && (
                        <div>{t("build-learning4")}</div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <img
                    src={Phone2}
                    alt="phone2"
                    className=" md:w-[350px] md:h-[800px] w-[150px] object-fill"
                  />
                </div>
              </div>
              {/*CONTENT 4 */}
              <div
                className={`w-[1000px] h-[800px] flex relative `}
              >
                <div className="flex flex-col absolute">
                  <img
                    src={Phone3}
                    alt="phone3"
                    className="bottom-0 left-0"
                  />
                </div>

                <div className="flex flex-col items-center absolute top-0 right-0">
                  <div
                    className={`text-center  w-full text-[#003A91] md:text-[64px] text-[16px] font-bold`}
                    style={{
                      fontFamily: "SF Pro Display B",
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
                      {/* {i18n.language === "ms" && (
                        <div>{t("boundless-imagination3")}</div>
                      )} */}
                    </div>
                    <div className="md:hidden flex flex-col items-center justify-center w-[154px]">
                      <div>{t("boundless-imagination-mobile")}</div>
                      <div>{t("boundless-imagination2-mobile")}</div>
                      {(i18n.language === "ms" || i18n.language === "en") && (
                        <>
                          <div>{t("boundless-imagination3-mobile")}</div>
                          <div>{t("boundless-imagination4-mobile")}</div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/*CONTENT 5 */}
              <div
                className={`w-full flex flex-col md:gap-[50px] items-center justify-center `}
              >
                <div className="items-center">
                  <div
                    className={`flex flex-col text-center  w-full text-[#FF0001]  items-center justify-center ${i18n.language === "zh"
                      ? "md:text-[70px] text-2xl font-bold"
                      : "md:text-[50px] text-xl"
                      }`}
                    style={{
                      fontFamily: "SF Pro Display B",
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
                    <div className="md:hidden flex flex-col items-center justify-center w-[154px]">
                      <div> {t("ignite-learning-mobile")}</div>
                      <div> {t("ignite-learning2-mobile")}</div>
                      {!(i18n.language === "zh") && (
                        <>
                          <div>{t("ignite-learning3-mobile")}</div>
                          <div>{t("ignite-learning4-mobile")}</div>
                        </>
                      )}
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
              {/*CONTENT 6 */}
              <div
                className={`w-full flex flex-col items-center justify-center${i18n.language === "zh" ? "gap-[10px]" : "gap-[26px]"
                  }`}
              >
                <div className="flex flex-col items-center md:gap-[50px] ">
                  <div
                    className={`text-center w-full text-[#4D9138] md:text-[64px] font-bold ${i18n.language === "zh"
                      ? "text-2xl font-bold"
                      : "text-xl"
                      }`}
                    style={{
                      fontFamily: "SF Pro Display B",
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
                      className={`md:hidden flex flex-col items-center justify-center ${i18n.language === "zh" ? " w-[170px] " : "  w-[154px]  "
                        }`}
                    >
                      <div>{t("share-moment-mobile")}</div>
                      <div>{t("share-moment2-mobile")}</div>
                      {!(i18n.language === "zh") && (
                        <>
                          {" "}
                          <div>{t("share-moment3-mobile")}</div>
                          <div>{t("share-moment4-mobile")}</div>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <img
                      src={Phone5}
                      alt="phone5"
                      className=" md:w-[350px] md:h-[800px] w-[150px]"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className={`w-[1000px] flex flex-wrap gap-[50px] md:gap-[100px]`}>
              <div className="flex flex-col justify-center items-center w-full">
                <div className="flex flex-col items-center">
                  <div
                    className={`text-center md:text-[48px] text-2xl font-bold`}
                    style={{
                      fontFamily: "SF Pro Display B",
                      lineHeight: "normal",
                    }}
                  >
                    <div className="md:hidden flex flex-col items-center justify-center">
                      <div> {t("attractive-widget")}</div>
                      {i18n.language === "zh" && (
                        <div> {t("attractive-widget2")}</div>
                      )}
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
              <div className="w-full flex flex-wrap md:gap-[100px] gap-4">
                <div className="flex justify-between w-full">
                  <div className="flex flex-row">
                    <img
                      src={Jam1}
                      alt="Jam1"
                      className="md:w-[320px] md:h-[255]"
                    />
                  </div>
                  <div className="flex flex-col flex-shrink">
                    <img
                      src={Jam2}
                      alt="Jam2"
                      className="md:w-[320px] md:h-[255]"
                    />
                  </div>
                  <div className="flex flex-col flex-shrink">
                    <img
                      src={Jam3}
                      alt="Jam3"
                      className="md:w-[320px] md:h-[255]"
                    />
                  </div>
                </div>
                <div className="flex justify-between w-full">
                  <div className="flex flex-col flex-shrink">
                    <img
                      src={Phone6}
                      alt="Phone6"
                      className="md:w-[320px] md:h-[255]"
                    />
                  </div><div className="flex flex-col flex-shrink">
                    <img
                      src={Phone7}
                      alt="Phone7"
                      className="md:w-[320px] md:h-[255]"
                    />
                  </div><div className="flex flex-col flex-shrink">
                    <img
                      src={Phone8}
                      alt="Phone8"
                      className="md:w-[320px] md:h-[255]"
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
