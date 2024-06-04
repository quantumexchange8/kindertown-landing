// JoinUs.jsx
import React from "react";
import img1 from "../assets/referral/img group.png";
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
      <div className="w-full flex flex-col justify-center items-center md:pt-[150px] pt-[80px] md:pb-[200px] pb-[100px]">
        <div className="w-full md:max-w-[1000px] flex flex-col">
          <div className="w-full flex flex-col md:gap-[300px] gap-[100px]">
            {/*content 1 & 2 */}
            <div className="w-full flex flex-col md:gap-[200px] gap-[100px]">
              {/*CONTENT 1*/}
              <div className="flex flex-col justify-center items-center md:px-0 pl-[31px] pr-8">
                <div className="w-full md:w-[800px] flex flex-col gap-[50px]">
                  <div className="flex flex-col">
                    <div
                      className={`md:text-[70px] text-[36px] ${
                        i18n.language === "zh" ? "font-bold" : ""
                      }`}
                      style={{
                        fontFamily: "SF Pro Display B",
                        lineHeight: "normal",
                      }}
                    >
                      {i18n.language === "en" && (
                        <div>
                          <span className="text-[#7600D3]">
                            {t("tiny-act")}
                          </span>{" "}
                          {t("sharing-monumental")}{" "}
                          <span className="text-[#FFA1AC]">
                            {" "}
                            {t("momentum")}
                          </span>
                          .
                        </div>
                      )}
                      {i18n.language === "zh" && (
                        <div className="flex flex-col">
                          <div>
                            <span className="text-[#7600D3]">
                              {t("tiny-act")}
                            </span>
                            {t("sharing-monumental")}
                          </div>
                          <div>
                            {" "}
                            {t("sharing-monumental2")}{" "}
                            <span className="text-[#FFA1AC]">
                              {" "}
                              {t("momentum")}
                            </span>
                          </div>
                        </div>
                      )}

                      {i18n.language === "ms" && (
                        <>
                          <div className="flex flex-wrap gap-x-3">
                            <span>{t("sharing-monumental")} </span>{" "}
                            <span className="text-[#7600D3]">
                              {" "}
                              {t("tiny-act")}
                            </span>
                            <span className="text-[#FFA1AC]">
                              {t("momentum")}
                            </span>
                            <span>{t("besar")}</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="w-full md:h-[653px] flex flex-col justify-center items-center">
                    <img src={img1} alt="Ladies" />
                  </div>
                </div>
              </div>
              {/*CONTENT 2*/}
              <div className="flex flex-col justify-center items-center md:px-0 px-5">
                <div className="w-full  flex flex-col items-center md:gap-[100px] gap-[50px]">
                  <div className="flex flex-col">
                    <div
                      className={`text-[20px] text-center ${
                        i18n.language === "zh"
                          ? "md:text-3xl font-semibold"
                          : "md:text-[32px] "
                      }`}
                      style={{
                        fontFamily: "SF Pro Display Semibold",
                        lineHeight: "normal",
                      }}
                    >
                      {t("comprehensive-referral")}
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
              <div className="w-full md:w-[800px] flex flex-col md:gap-[100px] gap-[50px]">
                {/*Ttile*/}
                <div className="flex flex-col">
                  <div
                    className="md:text-[70px] text-[36px]"
                    style={{
                      fontFamily: "SF Pro Display B",
                      lineHeight: "normal",
                    }}
                  >
                    {i18n.language === "en" && (
                      <div>
                        <div>{t("recommendation")}</div>
                        <div>
                          {t("is")}{" "}
                          <span className="text-[#4D9138]">{t("simply")} </span>
                          {t("a")}
                        </div>
                        <div>{t("straightforward-act")}</div>
                      </div>
                    )}

                    {i18n.language === "ms" && (
                      <div>
                        <div>{t("recommendation")}</div>
                        <div>
                          {t("is")}{" "}
                          <span className="text-[#4D9138]">{t("simply")} </span>
                        </div>
                      </div>
                    )}
                    {i18n.language === "zh" && (
                      <div className=" font-bold text-center">
                        <div>{t("recommendation")}</div>
                        <div>
                          <span className="text-[#4D9138]">{t("simply")} </span>{" "}
                          {t("is")}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/*Box - 1 */}
                <div>
                  <div className="relative w-full flex flex-col items-center justify-center md:rounded-t-[47px] rounded-t-[20px] bg-[#C1FFB4]  md:py-[129px] py-[51px]">
                    <img
                      src={ic}
                      alt="IdentitiyCard"
                      className="md:w-[300px] w-[130px]"
                    />
                  </div>
                  <div
                    className={`relative w-full flex flex-col items-center justify-center md:rounded-b-[47px] rounded-b-[20px] bg-[#6EDD58] md:px-[75px]  md:gap-[30px] ${
                      i18n.language === "zh"
                        ? " py-[29px] md:py-[75px] px-[35px]  gap-4"
                        : " pt-[30px] pb-[31px] md:py-[80px]  px-[15px]  gap-5"
                    }`}
                  >
                    <div
                      className={`md:text-[40px] text-base ${
                        i18n.language === "zh" ? "font-bold" : ""
                      }`}
                      style={{
                        fontFamily: "SF Pro Display B",
                        lineHeight: "normal",
                      }}
                    >
                      {t("register-account")}
                    </div>
                    <div
                      className={`text-center md:text-[32px] ${
                        i18n.language === "zh" ? "text-sm" : "text-base"
                      }`}
                      style={{
                        fontFamily: "SF Pro Display M",
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
                <div>
                  <div className="relative w-full flex flex-col items-center justify-center md:rounded-t-[47px] rounded-t-[20px] bg-[#FFF6C5]  md:py-[115px] pt-[44px] pb-[45px]">
                    <img
                      src={card}
                      alt="Card"
                      className="md:w-[300px] w-[130px]"
                    />
                  </div>
                  <div
                    className={`relative w-full flex flex-col items-center justify-center md:rounded-b-[47px] rounded-b-[20px] bg-[#FFE55A] md:px-[75px]  md:gap-[30px] ${
                      i18n.language === "zh"
                        ? " py-[29px] md:py-[75px] px-[35px]  gap-4"
                        : " pt-[30px] pb-[31px] md:py-[80px]  px-[15px]  gap-5"
                    }`}
                  >
                    <div
                      className={`md:text-[40px] text-base ${
                        i18n.language === "zh" ? "font-bold" : ""
                      }`}
                      style={{
                        fontFamily: "SF Pro Display B",
                        lineHeight: "normal",
                      }}
                    >
                      {t("referral-code")}
                    </div>
                    <div
                      className={`text-center md:text-[32px] ${
                        i18n.language === "zh" ? "text-sm" : "text-base"
                      }`}
                      style={{
                        fontFamily: "SF Pro Display M",
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
                <div>
                  <div className="relative w-full flex flex-col items-center justify-center md:rounded-t-[47px] rounded-t-[20px] bg-[#FFB9B9]  md:py-[80px] pt-[29px] pb-[30px]">
                    <img
                      src={register}
                      alt="Register"
                      className="md:w-[300px] w-[130px]"
                    />
                  </div>
                  <div
                    className={`relative w-full md:rounded-b-[47px] rounded-b-[20px] bg-[#FF6161] md:px-[75px] ${
                      i18n.language === "zh"
                        ? "py-[29px] md:py-[75px]  px-[35px]"
                        : "pt-[30px] pb-[31px] md:py-[80px]  px-[15px]"
                    }`}
                  >
                    <div
                      className={`flex flex-col justify-center items-center md:gap-[30px] ${
                        i18n.language === "zh" ? " gap-4 " : " gap-5"
                      }`}
                    >
                      <div
                        className={`md:text-[40px] text-base ${
                          i18n.language === "zh" ? "font-bold" : ""
                        }`}
                        style={{
                          fontFamily: "SF Pro Display B",
                          lineHeight: "normal",
                        }}
                      >
                        {t("referee-register")}
                      </div>
                      <div
                        className={`text-center md:text-[32px]${
                          i18n.language === "zh" ? " text-sm " : " text-base "
                        }`}
                        style={{
                          fontFamily: "SF Pro Display M",
                          lineHeight: "normal",
                        }}
                      >
                        <div> {t("referee-register-desc")}</div>
                        {(i18n.language === "en" || i18n.language === "zh") && (
                          <div> {t("referee-register-desc2")}</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {/*Box - 4*/}
                <div>
                  <div className="relative w-full flex flex-col items-center justify-center md:rounded-t-[47px] rounded-t-[20px] bg-[#BEC8FF]  md:py-[94px] pt-[35px] pb-[36px]">
                    <img
                      src={subscribe}
                      alt="Subscriber"
                      className="md:w-[300px] w-[130px]"
                    />
                  </div>
                  <div
                    className={`relative w-full flex flex-col md:rounded-b-[47px] rounded-b-[20px] bg-[#7188FF]  md:px-[75px]  ${
                      i18n.language === "zh"
                        ? "md:py-[60px] py-[29px] pl-[28px] pr-[27px] gap-4"
                        : "md:py-[80px] py-[21px] px-[15px] gap-5"
                    }`}
                  >
                    <div
                      className={`text-center md:text-[40px] text-base ${
                        i18n.language === "zh" ? "font-bold" : ""
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
                        fontFamily: "SF Pro Display M",
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
                {/**Coding lama */}

                {/*Box - 5}

              
                {/*Box5*/}
                <div>
                  <div className="relative w-full flex flex-col items-center justify-center md:rounded-t-[47px] rounded-t-[20px] bg-[#FFD976]  md:py-[95px] py-[36px]">
                    <img
                      src={reward}
                      alt="Reward"
                      className="md:w-[300px] w-[130px]"
                    />
                  </div>
                  <div
                    className={`relative flex flex-col justify-center items-center md:rounded-b-[47px] rounded-b-[20px] bg-[#FFB800]  md:gap-[30px] ${
                      i18n.language === "zh"
                        ? "md:pt-[74px] md:pb-[73px] md:pl-[75px] md:pr-[103px] py-[29px] px-[35px]  gap-4 "
                        : "py-[31px] md:pt-[78px] md:pb-[79px] md:px-[89px] px-[15px]  gap-5 "
                    }`}
                  >
                    <div
                      className={`md:text-[40px] text-base text-center ${
                        i18n.language === "zh" ? "font-bold" : ""
                      }`}
                      style={{
                        fontFamily: "SF Pro Display B",
                        lineHeight: "normal",
                      }}
                    >
                      {t("receive-reward")}
                    </div>
                    <div
                      className={`text-center md:text-[32px] ${
                        i18n.language === "zh" ? "text-sm" : "text-base"
                      }`}
                      style={{
                        fontFamily: "SF Pro Display M",
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
              {/*Content 4*/}
              <div className="w-full flex flex-col justify-center items-center md:gap-[100px] gap-[30px]">
                <div className="w-full flex flex-col justify-center items-center ">
                  <div
                    className={`md:text-[70px] text-2xl text-center ${
                      i18n.language === "zh" ? "font-bold" : ""
                    }`}
                    style={{
                      fontFamily: "SF Pro Display B",
                      lineHeight: "normal",
                    }}
                  >
                    <div
                      className={`${
                        i18n.language === "ms"
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
                        className={`md:w-[950px] w-full inline-block ${
                          i18n.language === "zh" ? "font-[600]" : ""
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
