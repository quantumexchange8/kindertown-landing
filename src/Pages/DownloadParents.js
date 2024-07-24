import React from "react";
import PopupForm from "./Form";
import icon from "../assets/parentmodal/icon.png";
import apple from "../assets/parentmodal/apple.svg";
import android from "../assets/parentmodal/android.svg";
import parentVideo from "../assets/parentmodal/video.mp4";
import { useTranslation } from "react-i18next";

const DownloadParent = () => {
    const { t, i18n } = useTranslation();
    return (
        <div>
            <div className="w-full flex flex-col justify-center items-center md:pt-[60px] pt-[60px] md:px-0 md:gap-[150px] gap-[50px] md:pb-[150px] pb-[50px]">
                <div className="relative w-full md:pb-[20px] md:h-[900px] h-[300px] overflow-hidden">
                    <div className="w-full md:pt-[108px] md:pl-[106px]">
                        <video
                            src={parentVideo}
                            autoPlay
                            loop
                            muted
                            className="absolute md:top-0 left-0 w-full h-[300px] md:h-auto object-cover object-center"
                        />

                        <div className="absolute flex items-center justify-center text-center inset-0 text-[#5AFFF8] z-10">
                            <div
                                className={`md:text-[64px] text-2xl font-bold`}
                                style={{
                                    fontFamily: "SF Pro Display B",
                                    lineHeight: "normal",
                                }}
                            >
                                <><div>{t("parentmodal-video1")}</div>
                                    <div>{t("parentmodal-video2")}</div></>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-col justify-center text-center items-center md:gap-[150px] gap-[50px]">
                    <div className="w-full flex flex-col justify-center text-center max-w-[1000px]">
                        <div className="w-full flex flex-col md:gap-[50px]">
                            <div className="md:text-[64px] font-bold"
                                style={{
                                    fontFamily: "SF Pro Display B",
                                    lineHeight: "normal",
                                }}>
                                <div>{t("parentmodal-title1")}</div>
                                <div>{t("parentmodal-title2")}</div>
                            </div>

                            {i18n.language === 'zh'
                                ? <div className="md:text-[32px] md:flex flex-col font-semibold"
                                    style={{
                                        fontFamily: "SF Pro Display Semibold",
                                        lineHeight: "normal",
                                    }}>
                                    <div>{t("parentmodal-desc1")}</div>
                                    <div className="md:pb-[50px]">{t("parentmodal-desc2")}</div>
                                    <div>{t("parentmodal-desc3")}</div>
                                </div>
                                : <div className="md:text-[32px] md:flex flex-col font-medium md:gap-[30px] tracking-[0.045em]"
                                    style={{
                                        fontFamily: "SF Pro Display M",
                                        lineHeight: "normal",
                                    }}>
                                    <div>{t("parentmodal-desc1")}</div>
                                    <div>{t("parentmodal-desc2")}</div>
                                </div>
                            }
                        </div>
                    </div>

                    <div className="w-full flex flex-col justify-center items-center md:w-[742px] md:gap-[100px]">
                        <div>
                            <img
                                src={icon}
                                alt="parentlogo"
                                className="md:w-[250px] md:h-[250px]"/>
                        </div>

                        <div className="w-full flex flex-row md:gap-[50px] justify-between align-center">
                            <img
                            src={apple}
                            alt="playstore"
                            className="md:w-[346px]"/>

                            <img
                            src={android}
                            alt="appstore"
                            className="md:w-[346px]"/>
                        </div>
                    </div>

                    <div className="w-full flex flex-col text-start md:gap-[50px] gap-[30px] max-w-[1000px]">
                      <div className=" w-full flex flex-col">
                        <div
                          className={`md:text-4xl text-xl font-bold`}
                          style={{ fontFamily: " SF Pro Display B" }}
                        >
                          {t("feature")}:
                        </div>
                      </div>
                      <div
                        className={`w-full flex flex-col text-base md:text-[32px]`}
                        style={{
                          fontFamily: "SF Pro Display R",
                          lineHeight: "normal",
                        }}
                      >
                        <ul className="list-outside list-disc flex flex-col md:gap-10 gap-5 md:pl-[50px] pl-[25px] ">
                          <li>{t("search-kindergarten")}</li>
                          <li>{t("referral-function")}</li>
                          <li>{t("seat-reserve")}</li>
                          <li>{t("pay-school")}</li>
                          <li>{t("instant-noti")}</li>
                          <li>{t("daily-mission")}</li>
                          <li>{t("academic-performance")}</li>
                          <li>{t("feedback-form")}</li>
                          <li>{t("purchase-supplies")}</li>
                          <li>{t("self-pickup")}</li>
                          <li>{t("track-activity")}</li>
                          <li>{t("live-cctv")}</li>
                          <li>{t("interact-community")}</li>
                          <li>{t("cute-widget")}</li>
                        </ul>
                      </div>
                    </div>
                </div>
            </div>
            <PopupForm /></div>
    );
};

export default DownloadParent;