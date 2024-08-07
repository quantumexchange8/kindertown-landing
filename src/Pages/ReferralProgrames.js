// JoinUs.jsx
import React from "react";
import referral from "../assets/referral/referral.mp4";
import pc from "../assets/referral/pcs.png";
import ic from "../assets/referral/ic.svg";
import card from "../assets/referral/card.svg";
import register from "../assets/referral/register.svg";
import subscribe from "../assets/referral/subscribe.svg";
import reward from "../assets/referral/reward.svg";
import PopupForm from "./Form";
import { useTranslation } from "react-i18next";
const ReferralProgrames = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="w-full flex flex-col w-max-[1000px] justify-center items-center pt-[60px] md:pb-[150px] pb-[50px]">
        <div className="w-full flex flex-col justify-center items-center">
          <div
            className={`w-full w-max-[1000px] flex flex-col gap-[100px] md:gap-[150px]`}
          >
            {/*content 1 & 2 */}
            <div className="w-full flex flex-col md:gap-[150px] gap-[50px]">
              {/*CONTENT 1 -- Video*/}
              <div className="relative w-full md:pb-[20px] md:h-[900px] h-[300px] overflow-hidden">
                <div className="w-full md:pt-[108px] md:pl-[106px]">
                  <video
                    src={referral}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="absolute md:top-0 left-0 w-full h-[300px] md:h-auto object-cover object-center"
                  />

                  <div className="absolute flex items-center justify-center text-center inset-0 text-[#80D7FF] z-10">
                    <div
                      className={`md:text-[64px] text-2xl font-bold`}
                      style={{
                        lineHeight: "normal",
                      }}
                    >
                      <><div>{t("tiny-act1")}</div>
                        <div>{t("tiny-act2")}</div></>
                    </div>
                  </div>
                </div>
              </div>
              {/*CONTENT 2 -- Referral */}
              <div className="flex flex-col justify-center items-center md:px-0 px-[30px]">
                <div className="flex flex-col items-center md:gap-[100px] gap-[50px]">
                  <div className="flex flex-col md:w-[1000px] md:gap-[30px] gap-[10px]">
                    <div className="flex flex-col text-center font-bold md:text-[80px] text-2xl "
                      style={{
                        lineHeight: "normal",
                      }}>
                      {t("referral-program")}</div>
                    <div
                      className={`md:text-[32px] text-sm flex flex-col text-center md:w-full ${i18n.language === "zh"
                        ? "md:font-semibold"
                        : "md:font-medium"
                        } font-semibold`}
                      style={{
                        lineHeight: "normal",
                      }}
                    >
                      <div className="md:flex flex-col hidden ">
                        <div className={`${i18n.language === "zh" ? "" : "text-balance"}`}>{t("comprehensive-referral1")}</div>
                        <div>{t("comprehensive-referral2")}</div>
                      </div>
                      <div className={`md:hidden flex flex-col justify-center items-center w-[340px] `}>
                        <div className="text-balance">{t("mobile-comprehensive-referral1")}</div>
                        <div>{t("mobile-comprehensive-referral2")}</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <img src={pc} alt="PC" />
                  </div>
                </div>
              </div>
            </div>
            {/*content 3 & 4 */}
            <div className="w-full flex flex-col justify-center items-center md:gap-[150px] gap-[50px] md:px-0 px-[30px]">
              {/*Content 3 -- Recommendation */}
              <div className="w-full md:w-[1000px] flex flex-col justify-center items-center gap-[50px] md:gap-[100px]">
                {/*Ttile*/}
                <div className="flex flex-col md:w-full w-[340px] ">
                  <div
                    className="md:text-[75px] text-[30px] font-bold"
                    style={{
                      lineHeight: "normal",
                    }}
                  >
                    {i18n.language === "zh" ?
                      <>
                        <div className="flex flex-col items-center">
                          <div className="text-[#00944D]">{t("recommendation")}</div>
                          <div className="text-[#F67F00]">
                            <span className="text-[#00944D]">{t("very")}</span>
                            {t("simply")}
                            <span className="text-[#00944D]">{t("is")}</span>
                          </div>
                        </div>
                      </>
                      : i18n.language === "ms" ?
                        <>
                          <div className="flex flex-col items-center">
                            <div className="text-[#00944D]">{t("recommendation")}</div>
                            <div className="text-[#00944D]">
                              {t("is")}{" "}
                              <span className="text-[#F67F00]">
                                {t("simply")}{" "}
                              </span>
                            </div>
                          </div>
                        </>
                        :
                        <>
                          <div className="flex flex-col items-center">
                            <div className="text-[#00944D]">{t("recommendation")}</div>
                            <div className="text-[#00944D]">
                              {t("is")}{" "}
                              <span className="text-[#F67F00]">{t("simply")} </span>
                              {t("a")}
                            </div>
                            <div className="text-[#00944D]">{t("straightforward-act")}</div>
                          </div>
                        </>
                    }
                  </div>
                </div>
                <div
                  className={`flex flex-col items-center justify-center md:gap-[50px] gap-[30px] md:w-[600px] w-full`}
                >
                  {/*Box - 1 -- Register an account */}
                  <div className="flex flex-col w-full">
                    <div className="relative w-full flex flex-col items-center justify-center md:rounded-t-[10px] rounded-t-[5px] md:h-[300px] h-[162.5px] bg-[#C1FFB4] ">
                      <img
                        src={ic}
                        alt="IdentitiyCard"
                        className="md:w-[180px] w-[100px]"
                      />
                    </div>
                    <div
                      className={`relative w-full flex flex-col items-center justify-center md:rounded-b-[10px] rounded-b-[5px] bg-[#6EDD58] gap-[10px]
                        ${i18n.language === "ms"
                          ? "md:py-[42px] py-[15px]"
                          : i18n.language === "zh"
                            ? "md:py-[54px] py-[25px]"
                            : "md:py-[30px] py-[17px]"
                        }`}
                    >
                      {/* web view title */}
                      <div
                        className={`md:text-[32px] md:flex flex-col hidden text-base font-bold`}
                        style={{
                          lineHeight: `${i18n.language === 'en' ? "60px" : "normal"}`,
                        }}
                      >
                        {t("register-account")}
                      </div>
                      {/* mobile view title */}
                      <div
                        className={`flex flex-col md:hidden text-base font-bold`}
                        style={{
                          lineHeight: "normal",
                        }}
                      >
                        {t("register-account")}
                      </div>
                      <div
                        className="md:flex flex-col hidden text-center md:text-[20px] text-sm md:font-medium"
                        style={{
                          lineHeight: "normal",
                        }}
                      >
                        <div> {t("regardless-register1")}</div>
                        <div> {t("regardless-register2")}</div>
                      </div>
                      <div
                        className="text-center md:hidden flex flex-col text-sm font-medium"
                        style={{
                          lineHeight: "normal",
                        }}
                      >
                        <div> {t("regardless-register1")}</div>
                        <div> {t("regardless-register2")}</div>
                      </div>
                    </div>
                  </div>

                  {/*Box - 2 -- Referral code*/}
                  <div className="flex flex-col md:w-[600px] w-full">
                    <div className="relative w-full flex flex-col items-center justify-center md:rounded-t-[10px] rounded-t-[5px] bg-[#FFF6C5] md:h-[300px] h-[162.5px]">
                      <img
                        src={card}
                        alt="Card"
                        className="md:w-[180px] w-[100px]"
                      />
                    </div>
                    <div
                      className={`relative w-full flex flex-col items-center justify-center md:rounded-b-[10px] rounded-b-[5px] bg-[#FFE55A] gap-[10px]
                        ${i18n.language === "ms"
                          ? "md:py-[42px] py-[15px]"
                          : i18n.language === "zh"
                            ? "md:py-[54px] py-[25px]"
                            : "md:py-[30px] py-[17px]"
                        }`}
                    >
                      {/* web view title */}
                      <div
                        className={`md:text-[32px] md:flex flex-col hidden text-base font-bold`}
                        style={{
                          lineHeight: `${i18n.language === 'en' ? "60px" : "normal"}`,
                        }}
                      >
                        {t("referral-code")}
                      </div>
                      {/* mobile view title */}
                      <div
                        className={`flex flex-col md:hidden text-base font-bold`}
                        style={{
                          lineHeight: "normal",
                        }}
                      >
                        {t("referral-code")}
                      </div>
                      <div
                        className={`text-center md:text-[20px] text-sm font-medium`}
                        style={{
                          lineHeight: "normal",
                        }}
                      >
                        <div> {t("copy-referral1")}</div>
                        <div> {t("copy-referral2")}</div>
                      </div>
                    </div>
                  </div>

                  {/*Box - 3 -- Registered account */}
                  <div className="flex flex-col w-full">
                    <div className="relative w-full flex flex-col items-center justify-center md:rounded-t-[10px] rounded-t-[5px] bg-[#FFB9B9] md:h-[300px] h-[162.5px]">
                      <img
                        src={register}
                        alt="Register"
                        className="md:w-[180px] w-[75px]"
                      />
                    </div>
                    <div
                      className={`relative w-full flex flex-col items-center justify-center md:rounded-b-[10px] rounded-b-[5px] bg-[#FF6161]
                          ${i18n.language === "ms"
                          ? "md:py-[42px] py-[17px]"
                          : i18n.language === "zh"
                            ? "md:py-[54px] py-[25.5px]"
                            : "md:py-[30px] py-[17px]"
                        }`}
                    >
                      <div
                        className={`flex flex-col justify-center items-center gap-[10px] `}
                      >
                        {/* web view title */}
                        <div
                          className={`md:text-[32px] md:flex flex-col hidden text-base font-bold`}
                          style={{
                            lineHeight: `${i18n.language === 'en' ? "60px" : "normal"}`,
                          }}
                        >
                          {t("referee-register")}
                        </div>
                        {/* mobile view title */}
                        <div
                          className={`flex flex-col md:hidden text-base font-bold`}
                          style={{
                            lineHeight: "normal",
                          }}
                        >
                          {t("referee-register")}
                        </div>
                        <div
                          className={`text-center md:text-[20px] text-sm `}
                          style={{
                            lineHeight: "normal",
                          }}
                        >
                          <div> {t("referee-register-desc1")}</div>
                          <div> {t("referee-register-desc2")}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Box - 4 -- Referee successfully subscribed */}
                  <div className="flex flex-col w-full">
                    <div className="relative w-full flex flex-col items-center justify-center md:rounded-t-[10px] rounded-t-[5px] bg-[#BEC8FF] md:h-[300px] h-[162.5px]">
                      <img
                        src={subscribe}
                        alt="Subscriber"
                        className="md:w-[180px] w-[82px]"
                      />
                    </div>
                    <div
                      className={`relative w-full flex flex-col items-center justify-center md:rounded-b-[10px] rounded-b-[5px] bg-[#7188FF] gap-[10px]
                        ${i18n.language === "ms"
                          ? "md:py-[42px] py-[16.5px]"
                          : i18n.language === "zh"
                            ? "md:py-[54px] py-[17.5px]"
                            : "md:py-[30px] py-[16.5px]"
                        }`}
                    >
                      {/* web view title */}
                      <div
                        className={`md:text-[32px] md:flex flex-col hidden text-base font-bold`}
                        style={{
                          lineHeight: `${i18n.language === 'en' ? "60px" : "normal"}`,
                        }}
                      >
                        {t("referee-subscribe")}
                      </div>
                      {/* mobile view title */}
                      <div
                        className={`flex flex-col md:hidden text-base font-bold text-center`}
                        style={{
                          lineHeight: "normal",
                        }}
                      >
                        {t("referee-subscribe")}
                      </div>
                      <div
                        className="text-center md:text-[20px] text-sm flex flex-col px-0"
                        style={{
                          lineHeight: "normal",
                        }}
                      >
                        <div> {t("referee-subscribe-desc1")}</div>
                        <div> {t("referee-subscribe-desc2")}</div>
                      </div>
                    </div>
                  </div>
                  {/*Box5 -- Receive rewards */}
                  <div className="flex flex-col w-full">
                    <div className="relative w-full flex flex-col items-center justify-center md:rounded-t-[10px] rounded-t-[5px] bg-[#FFD976] md:h-[300px] h-[162.5px]">
                      <img
                        src={reward}
                        alt="Reward"
                        className="md:w-[180px] w-[85px]"
                      />
                    </div>
                    <div
                      className={`relative flex flex-col justify-center items-center md:rounded-b-[10px] rounded-b-[5px] bg-[#FFB800] gap-[10px] 
                        ${i18n.language === "ms"
                          ? "md:py-[42px] py-[15px]"
                          : i18n.language === "zh"
                            ? "md:py-[54px] py-[25px]"
                            : "md:py-[30px] py-[16.5px]"
                        }`}
                    >
                      {/* web view title */}
                      <div
                        className={`md:text-[32px] md:flex flex-col text-center hidden text-base font-bold`}
                        style={{
                          lineHeight: `${i18n.language === 'en' ? "60px" : "normal"}`,
                        }}
                      >
                        <div className={`${i18n.language === 'ms' ? 'md:px-[130px]' : ''}`}>{t("receive-reward")}</div>
                      </div>
                      {/* mobile view title */}
                      <div
                        className={`flex flex-col md:hidden text-sm text-center font-bold`}
                        style={{
                          lineHeight: "normal",
                        }}
                      >
                        <div className={`${i18n.language === 'ms' ? 'px-[50px] text-balance' : ''}`}>{t("receive-reward")}</div>
                      </div>
                      <div
                        className={`text-center md:text-[20px] text-sm`}
                        style={{
                          lineHeight: "normal",
                        }}
                      >
                        <div>{t("receive-reward-desc1")}</div>
                        <div>{t("receive-reward-desc2")}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Content 4 -- Receive mutual reward*/}
              <div className={`w-full flex flex-col justify-center items-center md:gap-[30px] ${i18n.language === 'ms' ? 'gap-[10px]' : 'gap-[30px]'}`}>
                <div className="w-full flex flex-col justify-center items-center ">
                  <div
                    className={`md:text-[64px] md:flex flex-col hidden text-center font-bold md:w-[1000px]`}
                    style={{
                      lineHeight: "normal",
                    }}
                  >
                    <div>{t("mutual-reward1")}</div>
                    <div className={`${i18n.language === 'en' ? 'text-balance' : ''}`}>{t("mutual-reward2")}</div>
                  </div>
                  <div
                    className={`text-2xl flex flex-col md:hidden text-center font-bold w-[340px]`}
                    style={{
                      lineHeight: "normal",
                    }}
                  >
                    <div>{t("mutual-reward-mobile1")}</div>
                    <div>{t("mutual-reward-mobile2")}</div>
                    <div>{t("mutual-reward-mobile3")}</div>

                  </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div
                    className="md:text-[40px] text-xl text-center"
                    style={{
                      lineHeight: "normal",
                    }}
                  >
                    <div>
                      <span
                        className={`md:w-[1000px] font-medium w-full md:inline-block hidden`}
                      >
                        <div>{t("step-simple1")}</div>
                        <div>{t("step-simple2")}</div>
                      </span>
                    </div>
                    <div>
                      <span
                        className={`md:w-[1000px] w-[340px] text-[16px] flex flex-col items-center md:hidden font-semibold`}
                      >
                        <div>{t("mobile-step-simple1")}</div>
                        <div className="text-balance">{t("mobile-step-simple2")}</div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PopupForm />
    </>
  );
};

export default ReferralProgrames;
