import React from "react";
import PopupForm from "./Form";
import icon from "../assets/teachermodal/icon.png";
import apple from "../assets/parentmodal/apple.svg";
import android from "../assets/parentmodal/android.svg";
import teacherVideo from "../assets/teachermodal/videoteacher.mp4";
import { useTranslation } from "react-i18next";
import "./modal.css";

const DownloadTeacher = () => {
    const { t, i18n } = useTranslation();
    return (
        <div>
            <div className="w-full flex flex-col justify-center items-center md:pt-[60px] pt-[60px] md:px-0 md:gap-[150px] gap-[50px] md:pb-[150px] pb-[50px]">
                <div className="relative w-full md:pb-[20px] md:h-[900px] h-[300px] overflow-hidden">
                    <div className="w-full md:pt-[108px] md:pl-[106px]">
                        <video
                            src={teacherVideo}
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="auto"
                            className="absolute md:top-0 left-0 w-full h-[300px] md:h-auto object-cover object-center"
                        />

                        <div className="absolute flex items-center justify-center text-center inset-0 text-[#FF6B00] z-10">
                            <div
                                className={`md:text-[64px] text-2xl font-bold`}
                                style={{
                                    lineHeight: "normal",
                                }}
                            >
                                <><div>{t("teachermodal-video1")}</div>
                                    <div>{t("teachermodal-video2")}</div>
                                    <div>{t("teachermodal-video3")}</div></>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-col justify-center text-center items-center md:gap-[150px] gap-[50px] px-[30px]">
                    <div className="w-full flex flex-col justify-center text-center max-w-[1000px]">
                        <div className="w-full flex flex-col md:gap-[50px] gap-[10px]">
                            {/* web view */}
                            <div className="md:text-[64px] md:flex flex-col hidden font-bold"
                                style={{
                                    lineHeight: "normal",
                                }}>
                                <div>{t("teachermodal-title1")}</div>
                                <div>{t("teachermodal-title2")}</div>
                                <div>{t("teachermodal-title3")}</div>
                            </div>
                            {/* mobile view */}
                            <div className="md:text-[64px] md:hidden flex flex-col font-bold"
                                style={{
                                    lineHeight: "normal",
                                }}>
                                <div>{t("mobile-teachermodal-title1")}</div>
                                <div>{t("mobile-teachermodal-title2")}</div>
                            </div>

                            {i18n.language === 'zh'
                                ? <div className="md:text-[32px] md:flex flex-col hidden font-semibold"
                                    style={{
                                        lineHeight: "normal",
                                    }}>
                                    <div>{t("teachermodal-desc1")}</div>
                                    <div>{t("teachermodal-desc2")}</div>
                                    <div className="md:pb-[50px]">{t("teachermodal-desc6")}</div>
                                    <div>{t("teachermodal-desc7")}</div>
                                    <div>{t("teachermodal-desc8")}</div>
                                </div>
                                : <div className="md:text-[32px] md:flex flex-col hidden font-medium"
                                    style={{
                                        lineHeight: "normal",
                                    }}>
                                    <div>{t("teachermodal-desc1")}</div>
                                    <div>{t("teachermodal-desc2")}</div>
                                    <div>{t("teachermodal-desc3")}</div>
                                    <div>{t("teachermodal-desc4")}</div>
                                    <div>{t("teachermodal-desc5")}</div>
                                    <div className="md:pb-[30px]">{t("teachermodal-desc6")}</div>
                                    <div>{t("teachermodal-desc7")}</div>
                                    <div>{t("teachermodal-desc8")}</div>
                                    <div>{t("teachermodal-desc9")}</div>
                                </div>
                            }

                            <div className="md:hidden flex flex-col text-sm font-semibold"
                                style={{
                                    lineHeight: "normal",
                                }}>
                                <div className="pb-[20px]">{t("mobile-teachermodal-desc1")}</div>
                                <div>{t("mobile-teachermodal-desc2")}</div>                        
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex flex-col justify-center items-center md:w-[742px] w-[260px] md:gap-[100px] gap-[30px]">
                        <div>
                            <img
                                src={icon}
                                alt="parentlogo"
                                className="md:w-[250px] md:h-[250px] w-[100px] h-[100px]" />
                        </div>

                        <div className="flex flex-row md:gap-[50px] gap-[20px] justify-between align-center">
                            <img
                                src={apple}
                                alt="playstore"
                                className="md:w-[346px] w-[120px]" />

                            <img
                                src={android}
                                alt="appstore"
                                className="md:w-[346px] w-[120px]" />
                        </div>
                    </div>  

                    <div className="w-full flex flex-col text-start max-w-[1000px] justify-center md:gap-[50px] gap-[30px]">
                        <div className="w-full flex flex-col">
                            <div
                                className={`md:text-4xl text-2xl ${i18n.language === "zh" ? "font-bold" : ""
                                    }`}
                            >
                                {t("feature")}:
                            </div>
                        </div>
                        <div
                            className={`w-full flex flex-col md:text-[32px] text-base md:font-medium ${i18n.language === "zh"
                                    ? "font-medium"
                                    : "font-semibold"
                                    }`}
                            style={{
                                lineHeight: "normal",
                            }}
                        >
                            <ul
                                className={`list-outside list-disc flex flex-col md:gap-10 gap-5 pl-[30px] md:pl-[50px]`}
                            >
                                <li>{t("update-checkin")}</li>
                                <li>{t("update-temp")}</li>
                                <li>{t("update-activity")}</li>
                                <li>{t("update-homework")}</li>
                                <li>{t("referral-function")}</li>
                                <li>{t("interact-community")}</li>
                                <li>{t("receive-pickup")}</li>
                                <li>{t("timetable-function")}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <PopupForm /></div>
    );
};

export default DownloadTeacher;