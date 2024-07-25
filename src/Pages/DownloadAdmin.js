import React from "react";
import PopupForm from "./Form";
import icon from "../assets/adminmodal/icon.png";
import apple from "../assets/parentmodal/apple.svg";
import android from "../assets/parentmodal/android.svg";
import adminVideo from "../assets/adminmodal/videoadmin.mp4";
import { useTranslation } from "react-i18next";

const DownloadAdmin = () => {
    const { t, i18n } = useTranslation();
    return (
        <div>
            <div className="w-full flex flex-col justify-center items-center md:pt-[60px] pt-[60px] md:px-0 md:gap-[150px] gap-[50px] md:pb-[150px] pb-[50px]">
                <div className="relative w-full md:pb-[20px] md:h-[900px] h-[300px] overflow-hidden">
                    <div className="w-full md:pt-[108px] md:pl-[106px]">
                        <video
                            src={adminVideo}
                            autoPlay
                            loop
                            muted
                            className="absolute md:top-0 left-0 w-full h-[300px] md:h-auto object-cover object-center"
                        />

                        <div className="absolute flex items-center justify-center text-center inset-0 text-[#FF244C] z-10">
                            <div
                                className={`md:text-[64px] text-2xl font-bold`}
                                style={{
                                    fontFamily: "SF Pro Display B",
                                    lineHeight: "normal",
                                }}
                            >
                                <><div>{t("adminmodal-video1")}</div>
                                    <div>{t("adminmodal-video2")}</div></>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-col justify-center text-center items-center md:gap-[150px] gap-[50px] px-[30px]">
                    <div className="w-full flex flex-col justify-center text-center max-w-[1000px]">
                        <div className="w-full flex flex-col md:gap-[50px] gap-[20px]">
                            <div className="md:text-[48px] font-bold"
                                style={{
                                    fontFamily: "SF Pro Display B",
                                    lineHeight: "normal",
                                }}>
                                <div className="text-balance">{t("adminmodal-title1")}</div>
                                <div>{t("adminmodal-title2")}</div>
                                <div>{t("adminmodal-title3")}</div>
                            </div>

                            {i18n.language === 'zh'
                                ? <div className="md:text-[32px] md:flex flex-col hidden font-semibold"
                                    style={{
                                        fontFamily: "SF Pro Display Semibold",
                                        lineHeight: "normal",
                                    }}>
                                    <div>{t("adminmodal-desc1")}</div>
                                    <div>{t("adminmodal-desc2")}</div>
                                    <div>{t("adminmodal-desc3")}</div>
                                </div>
                                : <div className="md:text-[32px] md:flex flex-col hidden font-medium"
                                    style={{
                                        fontFamily: "SF Pro Display M",
                                        lineHeight: "normal",
                                    }}>
                                    <div>{t("adminmodal-desc1")}</div>
                                    <div>{t("adminmodal-desc2")}</div>
                                    <div>{t("adminmodal-desc3")}</div>
                                </div>
                            }

                            <div className="flex flex-col md:hidden text-sm font-semibold text-balance"
                                style={{
                                    fontFamily: "SF Pro Display Semibold",
                                    lineHeight: "normal",
                                }}>
                                    <div className="">{t("mobile-adminmodal-desc1")}</div>
                                    <div>{t("mobile-adminmodal-desc2")}</div>
                                    <div>{t("mobile-adminmodal-desc3")}</div>
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

                        <div className="w-full flex flex-row md:gap-[50px] justify-between align-center">
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

                    <div className="w-full flex flex-col justify-center items-start max-w-[1000px] md:gap-[50px] gap-[30px]">
                        <div className="w-full flex flex-col">
                            <div
                                className={`md:text-4xl text-2xl text-left ${i18n.language === "zh" ? "font-bold" : ""
                                    }`}
                                style={{ fontFamily: " SF Pro Display B" }}
                            >
                                {t("feature")}:
                            </div>
                        </div>
                        <div
                            className="w-full md:w-[700px] flex flex-col md:text-[32px] text-base"
                            style={{
                                fontFamily: "SF Pro Display R",
                                lineHeight: "normal",
                            }}
                        >
                            <ul className="list-outside list-disc flex flex-col md:gap-10 gap-5 md:pl-[50px] pl-[25px] text-left">
                                <li>{t("add-account")}</li>
                                <li>{t("add-teacher")}</li>
                                <li>{t("add-class")}</li>
                                <li>{t("new-notice")}</li>
                                <li>{t("update-assessment")}</li>
                                <li>{t("invoice-function")}</li>
                                <li>{t("market-store")}</li>
                                <li>{t("live-connection")}</li>
                                <li>{t("payment-gateway")}</li>
                                <li>{t("create-timetable")}</li>
                                <li>{t("attendance-report")}</li>
                                <li>{t("driver-service")}</li>
                                <li>{t("add-insurance")}</li>
                                <li>{t("training-online")}</li>
                                <li>{t("referral-prog")}</li>
                                <li>{t("delay-pickup")}</li>
                                <li>{t("iphone-widget")}</li>
                                <li>{t("searchable")}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <PopupForm /></div>
    );
};

export default DownloadAdmin;