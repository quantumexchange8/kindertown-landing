import React from "react";
import apple from "../../assets/parentmodal/apple.svg";
import android from "../../assets/parentmodal/android.svg";
import video from "../../assets/adminmodal/header.mp4";
import close from "../../assets/parentmodal/close.svg";
import icon from "../../assets/adminmodal/icon.png";
import shopping from "../../assets/parentmodal/shopping.svg";
import smile from "../../assets/parentmodal/smile.svg";
import setting from "../../assets/parentmodal/setting.svg";
import location from "../../assets/parentmodal/location.svg";
import education from "../../assets/parentmodal/education.svg";
import gallery from "../../assets/parentmodal/gallery.svg";
import data from "../../assets/parentmodal/data.svg";
import contact from "../../assets/parentmodal/contact.svg";
import data2 from "../../assets/parentmodal/data2.svg";
import { useTranslation } from "react-i18next";
const ModalAdmin = ({ showModal3, setShowModal3 }) => {
  const { t, i18n } = useTranslation();
  const handleCloseModal = () => {
    setShowModal3(false);
  };

  const handleModalClick = (e) => {
    e.stopPropagation(); // Stop propagation to prevent backdrop click from firing
  };
  return (
    <>
      {showModal3 ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={handleCloseModal}
          >
            <div
              className="relative w-full md:max-w-[900px]  my-auto md:py-[50px] flex modal-content"
              onClick={handleModalClick}
            >
              <div className="md:hidden fixed z-50 bottom-[20px] right-[20px]">
                <button onClick={() => setShowModal3(false)}>
                  <img
                    src={close}
                    alt="CloseButton"
                    className="md:w-[60px] md:h-[60px] w-[50px] h-[50px]"
                  />
                </button>
              </div>
              {/*content*/}
              <div className="border-0 md:rounded-[50px] relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/* Video section */}
                <div className="relative h-auto">
                  <video
                    className="w-full h-full object-cover md:rounded-t-[50px]"
                    autoPlay
                    loop
                    muted
                  >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div
                    className={`absolute md:top-[29px] md:right-[46px] text-right md:text-[32px] text-xs  right-[29px] top-[34px] ${
                      i18n.language === "en"
                        ? "md:w-[389px] w-[164px] "
                        : i18n.language === "ms"
                        ? " md:w-[420px] w-[170px]"
                        : i18n.language === "zh"
                        ? "md:w-[389px] w-[164px] font-bold"
                        : "md:w-[389px] w-[164px] "
                    }
                    `}
                    style={{
                      fontFamily: "SF Pro Display B",
                      lineHeight: "normal",
                    }}
                  >
                    {t("adminmodal-video")}
                  </div>
                </div>

                <div className="w-full md:max-w-[900px] flex flex-col justify-center items-center  md:px-0 pl-[31px] pr-[32px] md:pt-[100px] pt-[50px]  md:pb-[100px] pb-[60px]">
                  <div className="w-full md:w-[700px]  flex flex-col">
                    <div className="w-full flex flex-col md:gap-[100px] gap-[50px]">
                      {/*Content 2*/}
                      <div className="w-full flex flex-col md:gap-[50px] gap-[30px]">
                        <div
                          className={`md:text-4xl text-2xl text-left ${
                            i18n.language === "zh" ? "font-bold" : ""
                          }`}
                          style={{ fontFamily: "SF Pro Display B" }}
                        >
                          {t("adminmodal-title")}
                        </div>
                        <div className="flex">
                          <div
                            className={`text-xl text-left ${
                              i18n.language === "zh"
                                ? "md:text-[30px]"
                                : " md:text-[32px] "
                            }`}
                            style={{
                              fontFamily: "SF Pro Display M",
                              lineHeight: "normal",
                            }}
                          >
                            {t("adminmodal-desc")}
                          </div>
                          <div className="hidden md:flex absolute right-[40px] top-[910px]">
                            <button onClick={() => setShowModal3(false)}>
                              <img
                                src={close}
                                alt="CloseButton"
                                className="w-[60px] h-[60px]"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div>
                        <hr className=" w-full border-[#F67F00] mx-auto dark:border-[#F67F00]-900" />
                      </div>
                      {/*CONTENT 3*/}
                      <div
                        className={`w-full flex flex-col gap-[100px] ${
                          i18n.language === "zh"
                            ? "md:gap-[100px]"
                            : "md:gap-[200px] "
                        }`}
                      >
                        <div className="w-full flex flex-col items-center">
                          <div
                            className="md:text-[32px] text-2xl text-center"
                            style={{
                              fontFamily: "SF Pro Display M",
                              lineHeight: "normal",
                            }}
                          >
                            <div className="flex flex-wrap">
                              <span
                                className={`${
                                  i18n.language === "en"
                                    ? "md:w-[650px] "
                                    : i18n.language === "ms"
                                    ? "md:w-full"
                                    : i18n.language === "zh"
                                    ? "md:w-[700px] "
                                    : "md:w-[650px]"
                                }`}
                              >
                                {t("subscribe-plan")}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="w-full flex flex-col md:gap-[100px] gap-[50px]">
                          {/*CONTENT 4*/}
                          <div className="relative w-full rounded-[30px] bg-[#D1C5B8] flex flex-col items-center md:py-[49px] py-[26px] md:gap-20 gap-[36px] md:px-[78px] pl-[26px] pr-[25px]">
                            <div>
                              <img
                                src={icon}
                                alt="icon"
                                className="md:w-[150px] md:h-[150px] w-[100px] h-[100px]"
                              />
                            </div>
                            <div className="w-full flex flex-col items-center md:gap-[60px] gap-[25px]">
                              <div className="flex md:gap-[50px] gap-[11px]">
                                <div>
                                  <img src={apple} alt="Apple" />
                                </div>
                                <div>
                                  <img src={android} alt="Android" />
                                </div>
                              </div>
                              <div className="w-full flex flex-col justify-center items-center md:gap-9 gap-[17px]">
                                <div
                                  className="md:text-base text-xs"
                                  style={{
                                    fontFamily: "SF Pro Display B",
                                    lineHeight: "normal",
                                  }}
                                >
                                  Data Linked to You
                                </div>

                                <div className="flex flex-col md:gap-5 gap-[11px]">
                                  <div className="w-full grid grid-cols-3 md:gap-[50px] gap-[11px]">
                                    <div className="flex w-full">
                                      <div className="flex items-center md:gap-5 gap-[11px]">
                                        <div className="md:w-5 md:h-5 w-[10px] h-[10px]">
                                          <img src={shopping} alt="Shopping" />
                                        </div>
                                        <div
                                          className="md:text-xl text-[10px]"
                                          style={{
                                            fontFamily: "SF Pro Display R",
                                          }}
                                        >
                                          Purchases
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex w-full">
                                      <div className="flex items-center md:gap-5 gap-[11px]">
                                        <div className="md:w-5 md:h-5 w-[10px] h-[10px]">
                                          <img src={smile} alt="Identifier" />
                                        </div>
                                        <div
                                          className="md:text-xl text-[10px]"
                                          style={{
                                            fontFamily: "SF Pro Display R",
                                          }}
                                        >
                                          Identifiers
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex w-full">
                                      <div className="flex items-center md:gap-5 gap-[11px]">
                                        <div className="md:w-5 md:h-5 w-[10px] h-[10px]">
                                          <img src={setting} alt="Diagnostic" />
                                        </div>
                                        <div
                                          className="md:text-xl text-[10px] md:w-[108px]"
                                          style={{
                                            fontFamily: "SF Pro Display R",
                                          }}
                                        >
                                          Diagnostics
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="w-full grid grid-cols-3 md:gap-[50px] gap-[11px]">
                                    <div className="flex w-full">
                                      <div className="flex items-center md:gap-5 gap-[11px]">
                                        <div className="md:w-5 md:h-5 w-[10px] h-[10px]">
                                          <img src={location} alt="Location" />
                                        </div>
                                        <div
                                          className="md:text-xl text-[10px]"
                                          style={{
                                            fontFamily: "SF Pro Display R",
                                          }}
                                        >
                                          Location
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex w-full">
                                      <div className="flex items-center md:gap-5 gap-[11px]">
                                        <div className="md:w-5 md:h-5 w-[10px] h-[10px]">
                                          <img
                                            src={education}
                                            alt="Education"
                                          />
                                        </div>
                                        <div
                                          className="md:text-xl text-[10px]"
                                          style={{
                                            fontFamily: "SF Pro Display R",
                                          }}
                                        >
                                          Education
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex md:w-[162px]">
                                      <div className="flex items-center md:gap-5 gap-[11px]">
                                        <div className="md:w-5 md:h-5 w-[10px] h-[10px]">
                                          <img
                                            src={gallery}
                                            alt="UserContent"
                                          />
                                        </div>
                                        <div
                                          className="md:text-xl text-[10px]"
                                          style={{
                                            fontFamily: "SF Pro Display R",
                                          }}
                                        >
                                          User Content
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="w-full grid grid-cols-3 md:gap-[50px] gap-[11px]">
                                    <div className="flex w-full">
                                      <div className="flex items-center md:gap-5 gap-[11px]">
                                        <div className="md:w-5 md:h-5 w-[10px] h-[10px]">
                                          <img src={data} alt="UsageData" />
                                        </div>
                                        <div
                                          className="md:text-xl text-[10px]"
                                          style={{
                                            fontFamily: "SF Pro Display R",
                                          }}
                                        >
                                          Usage Data
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex w-full">
                                      <div className="flex items-center md:gap-5 gap-[11px]">
                                        <div className="md:w-5 md:h-5 w-[10px] h-[10px]">
                                          <img src={contact} alt="Contacts" />
                                        </div>
                                        <div
                                          className="md:text-xl text-[10px]"
                                          style={{
                                            fontFamily: "SF Pro Display R",
                                          }}
                                        >
                                          Contacts
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex md:w-[162px] w-full">
                                      <div className="flex items-center md:gap-5 gap-[11px]">
                                        <div className="md:w-5 md:h-5 w-[10px] h-[10px]">
                                          <img src={data2} alt="Other Data" />
                                        </div>
                                        <div
                                          className="md:text-xl text-[10px]"
                                          style={{
                                            fontFamily: "SF Pro Display R",
                                          }}
                                        >
                                          Other Data
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/*CONTENT 5*/}
                          <div className="w-full flex flex-col justify-center items-center md:gap-[150px] gap-[50px]">
                            <div className="w-full flex flex-col justify-center items-center md:gap-[50px] gap-[30px]">
                              <div className="w-full flex flex-col">
                                <div
                                  className={`md:text-4xl text-2xl text-left ${
                                    i18n.language === "zh" ? "font-bold" : ""
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
                            <div className="w-full">
                              <div
                                className={`w-full relative md:rounded-t-[30px] rounded-t-[14px] bg-[#FF8400] md:py-[38px] pt-[15px] pb-[17px] md:pl-[86px] md:pr-[85px]  ${
                                  i18n.language === "zh"
                                    ? "pl-[40px] pr-[49px]"
                                    : "pl-[37px] pr-[32px]"
                                }`}
                              >
                                <div
                                  className="md:text-xl text-xs flex justify-center"
                                  style={{ fontFamily: "SF Pro Display M" }}
                                >
                                  <div
                                    className={`flex ${
                                      i18n.language === "zh"
                                        ? "md:gap-[203px] font-semibold gap-[90px]"
                                        : "md:gap-[156px] gap-[63px]"
                                    }`}
                                  >
                                    <div
                                      className={`flex ${
                                        i18n.language === "zh"
                                          ? "md:gap-[182px] gap-[71px]"
                                          : "md:gap-[156px]  gap-[63px]"
                                      }`}
                                    >
                                      <div> {t("free")}</div>
                                      <div> {t("standard")}</div>
                                    </div>
                                    <div> {t("premium")}</div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className={`w-full relative md:rounded-b-[30px] rounded-b-[14px] bg-[#FFB261] md:py-[38px] py-[9px] ${
                                  i18n.language === "en"
                                    ? "md:pl-[72px] pl-[35px] pr-[30px] md:pr-[79px]"
                                    : i18n.language === "ms"
                                    ? "md:pl-[75px]  md:pr-[28px] pl-[29px] pr-5"
                                    : "md:pl-[67px] md:pr-[67px] pl-[30px] pr-[39px]"
                                }`}
                              >
                                <div
                                  className={`md:text-xl flex ${
                                    i18n.language === "en"
                                      ? "md:gap-[127px] gap-[47px] justify-center  text-xs"
                                      : i18n.language === "ms"
                                      ? "md:gap-[47px] gap-6  text-xs"
                                      : "md:gap-[163px] gap-[70px] justify-center text-[10px]"
                                  }`}
                                  style={{ fontFamily: "SF Pro Display M" }}
                                >
                                  <div
                                    className={`flex text-center ${
                                      i18n.language === "en"
                                        ? "md:gap-[128px] gap-[47px]"
                                        : i18n.language === "ms"
                                        ? "md:gap-[92px] gap-7  justify-center"
                                        : "md:gap-[142px] gap-[55px] justify-center"
                                    }`}
                                  >
                                    <div
                                      className={`${
                                        i18n.language === "zh"
                                          ? "md:w-[80px] w-[40px]"
                                          : i18n.language === "ms"
                                          ? "md:w-[65px] w-[50px]"
                                          : "md:w-[70px]"
                                      }`}
                                    >
                                      {t("limit-access")}
                                    </div>
                                    <div
                                      className={`hidden md:flex flex-col text-center ${
                                        i18n.language === "en"
                                          ? " md:w-[121px]"
                                          : i18n.language === "ms"
                                          ? "md:w-[193px]"
                                          : i18n.language === "zh"
                                          ? "md:w-[80px] "
                                          : "md:w-[121px]"
                                      }`}
                                    >
                                      <div> {t("daily-charge")}</div>
                                      {i18n.language === "ms" && (
                                        <div> {t("daily-charge2")}</div>
                                      )}
                                    </div>
                                    <div
                                      className={`md:hidden flex flex-col text-center ${
                                        i18n.language === "ms"
                                          ? "w-[100px]"
                                          : i18n.language === "zh"
                                          ? " w-[40px]"
                                          : "w-full"
                                      }`}
                                    >
                                      <div> {t("daily-charge-mobile")}</div>
                                    </div>
                                  </div>

                                  <div
                                    className={` text-center ${
                                      i18n.language === "en"
                                        ? " md:w-[97px]"
                                        : i18n.language === "ms"
                                        ? "md:w-[186px] w-[69px]"
                                        : i18n.language === "zh"
                                        ? " md:w-[80px] w-[40px]"
                                        : "md:w-[97px]"
                                    }`}
                                  >
                                    {t("get-quote")}
                                  </div>
                                </div>
                              </div>
                              {/*
     <div className="relative w-full md:rounded-t-[30px] rounded-t-[14px] bg-[#FF8400] items-center md:pl-[86px] pl-[37px] pr-[32px] md:pr-[85px] md:py-[38px] pt-[15px] pb-[17px]">
                                <div
                                  className="md:text-xl text-xs flex justify-between text-center "
                                  style={{ fontFamily: "SF Pro Display M" }}
                                >
                                  <div className="flex flex-col"> Free</div>
                                  <div className="flex flex-col">Standard</div>
                                  <div className="flex flex-col">Premium</div>
                                </div>
                              </div>
                              <div className="relative w-full md:rounded-b-[30px] rounded-b-[14px] bg-[#FFB261] items-center md:pl-[72px] md:pr-[79px] px-[29px] md:py-[26px] py-[9px]">
                                <div
                                  className="md:text-xl text-xs flex md:justify-between gap-[47px] md:gap-0 text-center"
                                  style={{ fontFamily: "SF Pro Display M" }}
                                >
                                  <div className="flex-col md:w-[70px]">
                                    {t("limit-access")}
                                  </div>
                                  <div className="flex-col md:w-[121px]">
                                    {t("daily-charge")}
                                  </div>
                                  <div className="flex-col md:w-[97px]">
                                    Get Quote Now!
                                  </div>
                                </div>
                              </div>
*/}
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
          <div className=" fixed inset-0 z-40 bg-gray-800 bg-opacity-50 backdrop-blur-sm"></div>
        </>
      ) : null}
    </>
  );
};

export default ModalAdmin;
