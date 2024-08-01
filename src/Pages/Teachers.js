// JoinUs.jsx
import React from "react";
import Privacy from "./Privacy";
import Tab1 from "../assets/teacher/tab1.png";
import Tab2 from "../assets/teacher/tab2.png";
import Tab3 from "../assets/teacher/tab3.png";
import Tab4 from "../assets/teacher/tab4.png";
import Tab5 from "../assets/teacher/tab5.png";
import PopupForm from "./Form";
import CTLogo from "../assets/admin/ct-logo.svg";
import TeacherBg from "../assets/teacher/productsTeacher.mp4"
import { useTranslation } from "react-i18next";
const Teacher = () => {
  const { i18n, t } = useTranslation();
  return (
    <>
      <div
        className={`w-full flex flex-col justify-center items-center pt-[60px] md:gap-[150px] gap-[50px] md:pb-[150px]`}
      >
        <div className="relative w-full md:pb-[20px] md:h-[900px] h-[300px] overflow-hidden">
          <div className="w-full md:pt-[108px] md:pl-[106px]">
            <video
              src={TeacherBg}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="absolute md:top-0 left-0 w-full h-[300px] md:h-auto object-cover object-center"
            />

            <div className="absolute flex items-center justify-center text-center inset-0 text-[#F2FFA1] z-10">
              <div
                className={`md:text-[64px] text-2xl font-bold md:w-full w-[258px] text-balance`}
                style={{
                  lineHeight: "normal",
                }}
              >
                <><div>{t("right-smiles1")}</div>
                  <div>{t("right-smiles2")}</div></>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center md:px-0 pl-[31px] pr-[32px]">
          <div className="w-full md:max-w-[1000px]  flex flex-col  gap-[100px]  md:gap-[150px]">
            {/*CONTENT 2 -- Main description */}
            <div className="w-full flex flex-col md:gap-[30px] gap-[10px]">
              <div className="flex flex-col justify-center items-center">
                <div
                  className={`text-center md:text-[80px] text-[24px] font-bold`}
                  style={{
                    lineHeight: "normal",
                  }}
                >
                  <div>{t("kindertown-teacher")}</div>
                </div>
              </div>

              <div className="hidden md:flex flex-col justify-center items-center md:w-full">
                <div
                  className={`text-center text-xl md:text-[32px] ${i18n.language === 'zh' ? 'font-semibold' : 'font-medium'}`}
                  style={{
                    lineHeight: "normal",
                  }}
                >
                  <div className={`inline-block w-full`}> {t("KT-teacher-desc1")}</div>
                  <div className={`inline-block w-full tracking-tight`}> {t("KT-teacher-desc2")}</div>
                  {!(i18n.language === 'zh')
                    ? <div className={`inline-block w-full`}> {t("KT-teacher-desc3")}</div>
                    : ""
                  }
                </div>
              </div>
              <div className="md:hidden flex flex-col justify-center items-center">
                <div
                  className="text-center md:text-[32px] text-sm font-semibold"
                  style={{
                    lineHeight: "normal",
                  }}
                >
                  <div className={`w-[340px]`}> {t("mobile-KT-teacher-desc")}</div>
                </div>
              </div>
            </div>
            {/*CONTENT 3 -- Different ways*/}
            <div
              className={`w-full flex flex-col md:gap-[30px] gap-[20px]`}
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
                  className={`md:text-[32px] text-sm text-center `}
                  style={{
                    lineHeight: "normal",
                  }}
                >
                  <div
                    className={`md:flex flex-col hidden text-center w-full font-medium`}
                  >
                    <div className="tracking-tight">{t("diff-ways1")}</div>
                    <div>{t("diff-ways2")}</div>
                    <div>{t("diff-ways3")}</div>
                    <div>{t("diff-ways4")}</div>
                  </div>
                  <div className="md:hidden flex flex-col text-center w-[340px] font-semibold">
                    <div>{t("mobile-diff-ways")}</div>
                  </div>
                </div>
              </div>
            </div>
            {/*CONTENT 4 -- Solving the challenges*/}
            <div
              className={`w-full flex flex-col md:gap-[30px] gap-[20px]`}
            >
              <div className="flex flex-col justify-center items-center">
                <img
                  src={Tab2}
                  alt="Tablet2"
                  className="md:w-[800px] md:h-auto"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <div
                  className={`flex flex-col md:text-[32px] text-sm text-center `}
                  style={{
                    lineHeight: "normal",
                  }}
                >
                  <div className={`md:flex hidden flex-col justify-center items-center font-medium`}>
                    <div>{t("solve-challenge1")}</div>
                    <div>{t("solve-challenge2")}</div>
                    <div>{t("solve-challenge3")}</div>
                    <div>{t("solve-challenge4")}</div>
                  </div>

                  <div className="md:hidden flex flex-col justify-center items-center font-semibold w-[340px]">
                    <div>{t("mobile-solve-challenge")}</div>
                  </div>
                </div>
              </div>
            </div>
            {/*CONTENT 5 -- Fully harnesses*/}
            <div
              className={`w-full flex flex-col md:gap-[30px] gap-[20px]`}
            >
              <div className="flex flex-col justify-center items-center">
                <img
                  src={Tab3}
                  alt="Tablet3"
                  className="md:w-[800px] md:h-[614px]"
                />
              </div>
              <div className="flex flex-col justify-center items-center font-semibold">
                <div
                  className={`md:text-[32px] text-sm text-center`}
                  style={{
                    lineHeight: "normal",
                  }}
                >
                  <div className="flex flex-col">
                    <div className={`md:flex hidden flex-col justify-center tracking-tight items-center font-medium`}>
                      <div>{t("harness-power1")}</div>
                      <div>{t("harness-power2")}</div>
                      <div>{t("harness-power3")}</div>
                      <div>{t("harness-power4")}</div>
                    </div>

                    <div className={`md:hidden flex flex-col font-semibold w-[340px]`}>
                      {t("mobile-harness-power")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*CONTENT 6 -- Offer a solution*/}
            <div
              className={`w-full flex flex-col md:gap-[30px] gap-[20px]`}
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
                  className={`md:text-[32px] text-sm text-center`}
                  style={{
                    lineHeight: "normal",
                  }}
                >
                  <div className={`md:flex hidden flex-col tracking-tight text-center font-medium`}>
                    <div>{t("take-pride")}</div>
                    <div>{t("take-pride2")}</div>
                    <div>{t("take-pride3")}</div>
                    <div>{t("take-pride4")}</div>
                  </div>
                  <div className={`md:hidden flex flex-col text-pretty text-center font-semibold w-[340px]`}>
                    <div>{t("mobile-take-pride")}</div>
                  </div>
                </div>
              </div>
            </div>
            {/*CONTENT 7 -- Kindertown community*/}
            <div
              className={`w-full flex flex-col md:gap-[30px] gap-[20px] md:pb-[150px] pb-[50px]`}
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
                  className={`md:text-[32px] text-sm text-center font-medium`}
                  style={{
                    lineHeight: "normal",
                  }}
                >
                  <div className={`md:flex hidden flex-col text-pretty text-center font-medium`}>
                    <div>{t("kingdom-community1")}</div>
                    <div>{t("kingdom-community2")}</div>
                    <div className="tracking-tight">{t("kingdom-community3")}</div>
                    <div>{t("kingdom-community4")}</div>
                    <div>{t("kingdom-community5")}</div>
                  </div>
                  <div className={`flex md:hidden flex-col text-center font-semibold w-[340px]`}>
                    <div>{t("mobile-kingdom-community")}</div>
                  </div>
                </div>
              </div>
            </div>


            {/*CONTENT 8*/}

          </div>
          <PopupForm />
          <div className="w-full md:flex hidden flex-col md:px-0 items-center">
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
                        className="md:text-[24px] text-[10px] inline-block font-bold"
                        style={{
                          lineHeight: "normal",
                        }}
                      >
                        CT PRODUCT &nbsp;
                        <span className=" bg-black  md:w-[77px] h-[29px] md:rounded-[4px] rounded-[2px] text-white md:px-[5.6px] px-[3px] py-[1px]">
                          CARE
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-center font-medium">
                      <div
                        className="md:text-[20px] text-[10px] inline-block text-center"
                        style={{
                          lineHeight: "normal",
                        }}
                      >
                        <div
                          className="hidden md:flex flex-col"
                        >
                          <div className="flex items-center justify-center ">
                            Free provide face to face training and online
                            tutorials.
                          </div>
                        </div>
                        <div
                          className="md:hidden flex flex-wrap"
                          style={{ lineHeight:"normal" }}
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

      <Privacy />
    </>
  );
};

export default Teacher;
