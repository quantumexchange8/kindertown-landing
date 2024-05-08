import React from "react";
import apple from "../../assets/parentmodal/apple.svg";
import android from "../../assets/parentmodal/android.svg";
import video from "../../assets/teachermodal/video2.mp4";
import close from "../../assets/parentmodal/close.svg";
import icon from "../../assets/teachermodal/icon.png";
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
const ModalTeacher = ({ showModal2, setShowModal2 }) => {
  const { t, i18n } = useTranslation();
  const handleCloseModal = () => {
    setShowModal2(false);
  };

  const handleModalClick = (e) => {
    e.stopPropagation(); // Stop propagation to prevent backdrop click from firing
  };
  return (
    <>
      {showModal2 ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={handleCloseModal}
          >
            <div
              className="relative w-full md:w-[900px]  my-auto md:py-[100px]  flex modal-content"
              onClick={handleModalClick}
            >
              <div className="md:hidden fixed z-50 bottom-[20px] right-[20px]">
                <button onClick={() => setShowModal2(false)}>
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
                    className={`absolute md:top-[49px] top-[26px] md:right-[46px] right-[23px] text-right md:text-[32px] text-xs  ${
                      i18n.language === "en"
                        ? " md:w-[330px] w-[140px] "
                        : i18n.language === "ms"
                        ? " md:w-[370px] w-[154px]"
                        : "md:w-[330px] w-[140px]"
                    }
                    `}
                    style={{
                      fontFamily: "SF Pro Display B",
                      lineHeight: "normal",
                    }}
                  >
                    {t("teachermodal-video")}
                  </div>
                </div>

                <div className="w-full md:max-w-[900px] flex flex-col justify-center items-center md:pt-[100px] pt-[50px] md:px-0 pl-[31px] pr-[32px]  md:pb-[100px] pb-[60px]">
                  <div className="w-full md:w-[700px] flex flex-col md:gap-[200px] gap-[100px]">
                    {/* CONTENT 2*/}
                    <div className="w-full flex flex-col md:gap-[50px] gap-5">
                      <div
                        className="md:text-4xl text-2xl"
                        style={{ fontFamily: "SF Pro Display B" }}
                      >
                        <div className="flex flex-col">
                          {t("teachermodal-title")}
                        </div>
                      </div>
                      <div className="flex">
                        <div
                          className="md:text-[32px] text-xl"
                          style={{
                            fontFamily: "SF Pro Display M",
                            lineHeight: "normal",
                          }}
                        >
                          {t("teachermodal-desc1")}
                        </div>{" "}
                        <div className="hidden md:flex absolute right-[40px] top-[930px]">
                          <button onClick={() => setShowModal2(false)}>
                            <img
                              src={close}
                              alt="CloseButton"
                              className="w-[60px] h-[60px]"
                            />
                          </button>
                        </div>
                      </div>
                      <div
                        className="md:text-[32px] text-xl"
                        style={{
                          fontFamily: "SF Pro Display M",
                          lineHeight: "normal",
                        }}
                      >
                        {t("teachermodal-desc2")}
                      </div>
                    </div>

                    {/* CONTENT 3*/}
                    <div className="w-full flex flex-col md:gap-[100px] gap-[50px]">
                      <div className="relative w-full md:w-[700px] rounded-[30px] bg-[#D1C5B8] flex flex-col items-center md:py-[49px] py-[26px] md:gap-20 gap-[36px] md:px-[78px] pl-[26px] pr-[25px]">
                        <div>
                          <img
                            src={icon}
                            alt="icon"
                            className=" md:w-[150px] md:h-[150px] w-[100px] h-[100px]"
                          />
                        </div>
                        <div className="w-full flex flex-col items-center md:gap-[60px] gap-[26px]">
                          <div className="flex md:gap-[50px] gap-[11px]">
                            <div>
                              <img src={apple} alt="Apple" />
                            </div>
                            <div>
                              <img src={android} alt="Android" />
                            </div>
                          </div>
                          <div className="w-full flex flex-col items-center md:gap-9 gap-[17px]">
                            <div
                              className="text-xs md:text-base "
                              style={{
                                fontFamily: "SF Pro Display B",
                                lineHeight: "normal",
                              }}
                            >
                              Data Linked to You
                            </div>
                            <div className="flex flex-col md:gap-5 gap-[11px]">
                              <div className="w-full grid grid-cols-3 md:gap-[50px] gap-[15px]">
                                <div className="flex w-full">
                                  <div className="flex items-center md:gap-5 gap-[11px]">
                                    <div className="md:w-5 md:h-5 w-[10px] h-[10px]">
                                      <img src={shopping} alt="Shopping" />
                                    </div>
                                    <div
                                      className="md:text-xl text-[10px]"
                                      style={{ fontFamily: "SF Pro Display R" }}
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
                                      style={{ fontFamily: "SF Pro Display R" }}
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
                                      style={{ fontFamily: "SF Pro Display R" }}
                                    >
                                      Diagnostics
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="w-full grid grid-cols-3 md:gap-[50px] gap-[15px]">
                                <div className="flex w-full">
                                  <div className="flex items-center md:gap-5 gap-[11px]">
                                    <div className="md:w-5 md:h-5 w-[10px] h-[10px]">
                                      <img src={location} alt="Location" />
                                    </div>
                                    <div
                                      className="md:text-xl text-[10px]"
                                      style={{ fontFamily: "SF Pro Display R" }}
                                    >
                                      Location
                                    </div>
                                  </div>
                                </div>
                                <div className="flex w-full">
                                  <div className="flex items-center md:gap-5 gap-[11px]">
                                    <div className="md:w-5 md:h-5 w-[10px] h-[10px]">
                                      <img src={education} alt="Education" />
                                    </div>
                                    <div
                                      className="md:text-xl text-[10px]"
                                      style={{ fontFamily: "SF Pro Display R" }}
                                    >
                                      Education
                                    </div>
                                  </div>
                                </div>
                                <div className="flex md:w-[162px]">
                                  <div className="flex items-center md:gap-5 gap-[11px]">
                                    <div className="md:w-5 md:h-5 w-[10px] h-[10px]">
                                      <img src={gallery} alt="UserContent" />
                                    </div>
                                    <div
                                      className="md:text-xl text-[10px]"
                                      style={{ fontFamily: "SF Pro Display R" }}
                                    >
                                      User Content
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="w-full grid grid-cols-3 md:gap-[50px] gap-[15px]">
                                <div className="flex w-full">
                                  <div className="flex items-center md:gap-5 gap-[11px]">
                                    <div className="md:w-5 md:h-5 w-[10px] h-[10px]">
                                      <img src={data} alt="UsageData" />
                                    </div>
                                    <div
                                      className="md:text-xl text-[10px]"
                                      style={{ fontFamily: "SF Pro Display R" }}
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
                                      style={{ fontFamily: "SF Pro Display R" }}
                                    >
                                      Contacts
                                    </div>
                                  </div>
                                </div>
                                <div className="flex md:w-[162px]">
                                  <div className="flex items-center md:gap-5 gap-[11px]">
                                    <div className="md:w-5 md:h-5 w-[10px] h-[10px]">
                                      <img src={data2} alt="Other Data" />
                                    </div>
                                    <div
                                      className="md:text-xl text-[10px]"
                                      style={{ fontFamily: "SF Pro Display R" }}
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
                      {/* CONTENT 4*/}
                      <div className="w-full flex flex-col  justify-center md:gap-[50px] gap-[30px]">
                        <div className="w-full flex flex-col">
                          <div
                            className="md:text-4xl text-2xl"
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
                          <ul className="list-outside list-disc flex flex-col md:gap-10 gap-5 md:pl-[50px] pl-[30px]">
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
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-gray-800 bg-opacity-50 backdrop-blur-sm"></div>
        </>
      ) : null}
    </>
  );
};

export default ModalTeacher;
