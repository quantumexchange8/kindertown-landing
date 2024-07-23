// JoinUs.jsx
import React from "react";
import referral from "../assets/referral/referral.mp4";
import pc from "../assets/referral/pcs.png";
import ic from "../assets/referral/ic.svg";
import card from "../assets/referral/card.svg";
import register from "../assets/referral/register.svg";
import subscribe from "../assets/referral/subscribe.svg";
import reward from "../assets/referral/reward.svg";
import { useTranslation } from "react-i18next";
const ReferralProgrames = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="w-full flex flex-col w-max-[1000px] justify-center items-center md:pt-[60px] pt-[80px] md:pb-[200px] pb-[100px]">
        <div className="w-full flex flex-col justify-center items-center">
          <div
            className={`w-full w-max-[1000px] flex flex-col gap-[100px] md:gap-[150px]`}
          >
            {/*content 1 & 2 */}
            <div className="w-full flex flex-col md:gap-[150px] gap-[100px]">
              {/*CONTENT 1*/}
              <div className="relative w-full md:pb-[20px] md:h-[900px] h-[300px] overflow-hidden">
                <div className="w-full md:pt-[108px] md:pl-[106px]">
                  <video
                    src={referral}
                    autoPlay
                    loop
                    muted
                    className="absolute md:top-0 left-0 w-full h-[300px] md:h-auto object-cover object-center"
                  />

                  <div className="absolute flex items-center justify-center text-center inset-0 text-[#80D7FF] z-10">
                    <div
                      className={`md:text-[64px] text-2xl font-bold`}
                      style={{
                        fontFamily: "SF Pro Display B",
                        lineHeight: "normal",
                      }}
                    >
                      <><div>{t("tiny-act1")}</div>
                        <div>{t("tiny-act2")}</div></>
                    </div>
                  </div>
                </div>
              </div>
              {/*CONTENT 2*/}
              <div className="flex flex-col justify-center items-center md:px-0 px-5">
                <div className="flex flex-col items-center md:gap-[100px] gap-[50px]">
                  <div className="flex flex-col md:w-[1000px] md:gap-[30px]">
                    <div className="flex flex-col text-center md:font-bold md:text-[80px] "
                      style={{
                        fontFamily: "SF Pro Display B",
                        lineHeight: "normal",
                      }}>
                        {t("referral-program")}</div>
                    <div
                      className={`text-[32px] flex flex-col text-center md:w-full ${i18n.language === "zh"
                        ? "font-semibold"
                        : ""
                        }`}
                      style={{
                        fontFamily: `${i18n.language === "zh"? "SF Pro Display Semibold" :"SF Pro Display M"}`,
                        lineHeight: "normal",
                      }}
                    >
                      <div className={`${i18n.language === "zh"? "":"text-balance"}`}>{t("comprehensive-referral1")}</div>
                      <div className=" tracking-wide">{t("comprehensive-referral2")}</div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <img src={pc} alt="PC" />
                  </div>
                </div>
              </div>
            </div>
            {/*content 3 & 4 */}
            <div className="w-full flex flex-col justify-center items-center md:gap-[200px] gap-[100px] md:px-0 pl-[31px] pr-[32px]">
              {/*Content 3*/}
              <div className="w-full md:w-[800px] flex flex-col  gap-[50px] md:gap-[100px]">
                {/*Ttile*/}
                <div className="flex flex-col">
                  <div
                    className="md:text-[75px] text-[36px] font-bold"
                    style={{
                      fontFamily: "SF Pro Display B",
                      lineHeight: "normal",
                    }}
                  >
                    {/**Eng */}
                    {i18n.language === "en" && (
                      <div className="flex flex-col items-center">
                        <div className="text-[#00944D]">{t("recommendation")}</div>
                        <div className="text-[#00944D]">
                          {t("is")}{" "}
                          <span className="text-[#F67F00]">{t("simply")} </span>
                          {t("a")}
                        </div>
                        <div className="text-[#00944D]">{t("straightforward-act")}</div>
                      </div>
                    )}

                    {/**Malay */}
                    {i18n.language === "ms" && (
                      <div className="flex flex-col items-center">
                        <div className="text-[#00944D]">{t("recommendation")}</div>
                        <div className="text-[#00944D]">
                          {t("is")}{" "}
                          <span className="text-[#F67F00]">
                            {t("simply")}{" "}
                          </span>
                        </div>
                      </div>
                    )}
                    {/**Chinese */}
                    {i18n.language === "zh" && (
                      <div className="flex flex-col items-center">
                        <div className="text-[#00944D]">{t("recommendation")}</div>
                        <div className="text-[#F67F00]">
                          {t("simply")}
                          <span className="text-[#00944D]">{t("is")}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div
                  className={`flex flex-col items-center justify-center gap-[50px]`}
                >
                  {/*Box - 1 */}
                  <div className="flex flex-col md:w-[600px]">
                    <div className="relative w-full flex flex-col items-center justify-center md:rounded-t-[10px] rounded-t-[20px] bg-[#C1FFB4]  md:py-[129px] py-[51px]">
                      <img
                        src={ic}
                        alt="IdentitiyCard"
                        className="md:w-[180px] w-[130px]"
                      />
                    </div>
                    <div
                      className={`relative w-full flex flex-col items-center justify-center md:rounded-b-[10px] rounded-b-[20px] bg-[#6EDD58] md:px-[75px]  md:gap-[10px] ${i18n.language === "zh"
                        ? " py-[29px] md:py-[75px] px-[35px]  gap-4"
                        : " pt-[30px] pb-[31px] md:py-[80px]  px-[15px]  gap-5"
                        }`}
                    >
                      <div
                        className={`md:text-[32px] text-base font-bold`}
                        style={{
                          fontFamily: "SF Pro Display B",
                          lineHeight: `${i18n.language === 'en'? "60px":"normal"}`,
                        }}
                      >
                        {t("register-account")}
                      </div>
                      <div
                        className={`text-center md:text-[32px] ${i18n.language === "zh" ? "text-sm" : "text-base"
                          }`}
                        style={{
                          fontFamily: "SF Pro Display R",
                          lineHeight: "normal",
                        }}
                      >
                        <div> {t("regardless-register")}</div>

                        {i18n.language === "zh" && (
                          <div> {t("regardless-register2")}</div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/*Box - 2 */}
                  <div className="flex flex-col md:w-[600px]">
                    <div className="relative w-full flex flex-col items-center justify-center md:rounded-t-[10px] rounded-t-[20px] bg-[#FFF6C5]  md:py-[115px] pt-[44px] pb-[45px]">
                      <img
                        src={card}
                        alt="Card"
                        className="md:w-[180px] w-[130px]"
                      />
                    </div>
                    <div
                      className={`relative w-full flex flex-col items-center justify-center md:rounded-b-[10px] rounded-b-[20px] bg-[#FFE55A] md:px-[75px]  md:gap-[30px] ${i18n.language === "zh"
                        ? " py-[29px] md:py-[75px] px-[35px]  gap-4"
                        : " pt-[30px] pb-[31px] md:py-[80px]  px-[15px]  gap-5"
                        }`}
                    >
                      <div
                        className={`md:text-[40px] text-base ${i18n.language === "zh" ? "font-bold" : ""
                          }`}
                        style={{
                          fontFamily: "SF Pro Display B",
                          lineHeight: "normal",
                        }}
                      >
                        {t("referral-code")}
                      </div>
                      <div
                        className={`text-center md:text-[32px] ${i18n.language === "zh" ? "text-sm" : "text-base"
                          }`}
                        style={{
                          fontFamily: "SF Pro Display R",
                          lineHeight: "normal",
                        }}
                      >
                        <div> {t("copy-referral")}</div>

                        {i18n.language === "zh" && (
                          <div> {t("copy-referral2")}</div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/*Box - 3*/}
                  <div className="flex flex-col md:w-[600px]">
                    <div className="relative w-full flex flex-col items-center justify-center md:rounded-t-[10px] rounded-t-[20px] bg-[#FFB9B9]  md:py-[80px] pt-[29px] pb-[30px]">
                      <img
                        src={register}
                        alt="Register"
                        className="md:w-[180px] w-[130px]"
                      />
                    </div>
                    <div
                      className={`relative w-full md:rounded-b-[10px] rounded-b-[20px] bg-[#FF6161] md:px-[75px] ${i18n.language === "zh"
                        ? "py-[29px] md:py-[75px]  px-[35px]"
                        : "pt-[30px] pb-[31px] md:py-[80px]  px-[15px]"
                        }`}
                    >
                      <div
                        className={`flex flex-col justify-center items-center md:gap-[30px] ${i18n.language === "zh" ? " gap-4 " : " gap-5"
                          }`}
                      >
                        <div
                          className={`md:text-[40px] text-base ${i18n.language === "zh" ? "font-bold" : ""
                            }`}
                          style={{
                            fontFamily: "SF Pro Display B",
                            lineHeight: "normal",
                          }}
                        >
                          {t("referee-register")}
                        </div>
                        <div
                          className={`text-center md:text-[32px]${i18n.language === "zh" ? " text-sm " : " text-base "
                            }`}
                          style={{
                            fontFamily: "SF Pro Display R",
                            lineHeight: "normal",
                          }}
                        >
                          <div> {t("referee-register-desc")}</div>
                          {(i18n.language === "en" ||
                            i18n.language === "zh") && (
                              <div> {t("referee-register-desc2")}</div>
                            )}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Box - 4*/}
                  <div className="flex flex-col md:w-[600px]">
                    <div className="relative w-full flex flex-col items-center justify-center md:rounded-t-[10px] rounded-t-[20px] bg-[#BEC8FF]  md:py-[94px] pt-[35px] pb-[36px]">
                      <img
                        src={subscribe}
                        alt="Subscriber"
                        className="md:w-[180px] w-[130px]"
                      />
                    </div>
                    <div
                      className={`relative w-full flex flex-col md:rounded-b-[10px] rounded-b-[20px] bg-[#7188FF]  md:px-[75px]  ${i18n.language === "zh"
                        ? "md:py-[60px] py-[29px] pl-[28px] pr-[27px] gap-4"
                        : "md:py-[80px] py-[21px] px-[15px] gap-5"
                        }`}
                    >
                      <div
                        className={`text-center md:text-[40px] text-base ${i18n.language === "zh" ? "font-bold" : ""
                          }`}
                        style={{
                          fontFamily: "SF Pro Display B",
                          lineHeight: "normal",
                        }}
                      >
                        {t("referee-subscribe")}
                      </div>
                      <div
                        className="text-center md:text-[32px] text-base"
                        style={{
                          fontFamily: "SF Pro Display R",
                          lineHeight: "normal",
                        }}
                      >
                        <div> {t("referee-subscribe-desc")}</div>
                        {i18n.language === "zh" && (
                          <div> {t("referee-subscribe-desc2")}</div>
                        )}
                      </div>
                    </div>
                  </div>
                  {/*Box5*/}
                  <div className="flex flex-col md:w-[600px]">
                    <div className="relative w-full flex flex-col items-center justify-center md:rounded-t-[10px] rounded-t-[20px] bg-[#FFD976]  md:py-[95px] py-[36px]">
                      <img
                        src={reward}
                        alt="Reward"
                        className="md:w-[180px] w-[130px]"
                      />
                    </div>
                    <div
                      className={`relative flex flex-col justify-center items-center md:rounded-b-[10px] rounded-b-[20px] bg-[#FFB800]  md:gap-[30px] ${i18n.language === "zh"
                        ? "md:pt-[74px] md:pb-[73px] md:pl-[75px] md:pr-[103px] py-[29px] px-[35px]  gap-4 "
                        : "py-[31px] md:pt-[78px] md:pb-[79px] md:px-[89px] px-[15px]  gap-5 "
                        }`}
                    >
                      <div
                        className={`md:text-[40px] text-base text-center ${i18n.language === "zh" ? "font-bold" : ""
                          }`}
                        style={{
                          fontFamily: "SF Pro Display B",
                          lineHeight: "normal",
                        }}
                      >
                        {t("receive-reward")}
                      </div>
                      <div
                        className={`text-center md:text-[32px] ${i18n.language === "zh" ? "text-sm" : "text-base"
                          }`}
                        style={{
                          fontFamily: "SF Pro Display R",
                          lineHeight: "normal",
                        }}
                      >
                        <div>{t("receive-reward-desc")}</div>
                        {i18n.language === "zh" && (
                          <div>{t("receive-reward-desc2")}</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Content 4*/}
              <div className="w-full flex flex-col justify-center items-center md:gap-[100px] gap-[30px]">
                <div className="w-full flex flex-col justify-center items-center ">
                  <div
                    className={`md:text-[70px] text-2xl text-center ${i18n.language === "zh" ? "font-bold" : ""
                      }`}
                    style={{
                      fontFamily: "SF Pro Display B",
                      lineHeight: "normal",
                    }}
                  >
                    <div
                      className={`${i18n.language === "ms"
                        ? "w-full"
                        : "md:w-[800px]  w-full"
                        }`}
                    >
                      {t("mutual-reward")}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div
                    className="md:text-[40px] text-xl text-center"
                    style={{
                      fontFamily: "SF Pro Display M",
                      lineHeight: "normal",
                    }}
                  >
                    <div>
                      <span
                        className={`md:w-[950px] w-full inline-block ${i18n.language === "zh" ? "font-[600]" : ""
                          }`}
                      >
                        {t("step-simple")}
                      </span>
                    </div>
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

export default ReferralProgrames;
