import React from "react";
import apple from "../../assets/parentmodal/apple.svg";
import android from "../../assets/parentmodal/android.svg";
import video from "../../assets/parentmodal/video.mp4";
import close from "../../assets/parentmodal/close.svg";
import icon from "../../assets/parentmodal/icon.png";
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
const ModalParent = ({ showModal1, setShowModal1 }) => {
  const { t, i18n } = useTranslation();
  const handleCloseModal = () => {
    setShowModal1(false);
  };

  const handleModalClick = (e) => {
    e.stopPropagation(); // Stop propagation to prevent backdrop click from firing
  };
  return (
    <>
      {showModal1 ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={handleCloseModal}
          >
            <div
              className="relative w-full md:max-w-[900px]  my-auto md:py-[100px] flex modal-content"
              onClick={handleModalClick}
            >
              <div className="md:hidden fixed z-50 bottom-[20px] right-[20px]">
                <button onClick={() => setShowModal1(false)}>
                  <img
                    src={close}
                    alt="CloseButton"
                    className="md:w-[60px] md:h-[60px] w-[50px] h-[50px]"
                  />
                </button>
              </div>
              {/*content*/}
              <div className="border-0 md:rounded-[50px] shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*video*/}
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
                    className={`absolute md:bottom-[49px] bottom-[29px] md:right-[46px] right-[25px] text-right text-white md:text-[32px] text-xs  ${
                      i18n.language === "en"
                        ? "md:w-[410px] w-[180px] "
                        : i18n.language === "ms"
                        ? "md:w-[440px] w-[180px]"
                        : " md:w-[410px] w-[180px]"
                    }`}
                    style={{
                      fontFamily: "SF Pro Display B",
                      lineHeight: "normal",
                    }}
                  >
                    {t("parentmodal-video")}
                  </div>
                </div>
                {/*Content1*/}
                <div className="w-full md:w-[900px] flex flex-col justify-center items-center  md:pt-[100px] pt-[50px] md:px-0 pl-[31px] pr-8 md:gap-[200px] gap-[100px]  md:pb-[100px] pb-[60px]">
                  <div className="w-full md:w-[700px] flex flex-col md:gap-[50px] gap-5">
                    <div
                      className="md:text-4xl text-[24px]"
                      style={{ fontFamily: "SF Pro Display B" }}
                    >
                      <div className="hidden md:flex flex-col">
                        <div> {t("parentmodal-title1")}</div>
                        <div> {t("parentmodal-title2")}</div>
                      </div>
                      <div className=" md:hidden flex flex-col">
                        {t("parentmodal-title-full")}
                      </div>
                    </div>
                    <div
                      className=" md:text-[32px] text-xl"
                      style={{
                        fontFamily: "SF Pro Display M",
                        lineHeight: "normal",
                      }}
                    >
                      {t("parentmodal-desc1")}
                    </div>
                    <div className="flex">
                      <div
                        className=" md:text-[32px] text-xl"
                        style={{
                          fontFamily: "SF Pro Display M",
                          lineHeight: "normal",
                        }}
                      >
                        {t("parentmodal-desc2")}
                      </div>
                      <div className="hidden md:flex absolute right-[40px]">
                        <button onClick={() => setShowModal1(false)}>
                          <img
                            src={close}
                            alt="CloseButton"
                            className="w-[60px] h-[60px]"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex flex-col md:w-[700px] md:gap-[100px] gap-[50px]">
                    <div className="relative w-full rounded-[30px] bg-[#D1C5B8] flex flex-col items-center md:py-[49px] py-[27px] gap-9 md:gap-20 md:px-[78px] pl-[26px] pr-[25px]">
                      <div>
                        <img
                          src={icon}
                          alt="iconmodal"
                          className="md:w-[150px] md:h-[150px] w-[100px] h-[100px]"
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
                            className=" md:text-base text-xs "
                            style={{
                              fontFamily: "SF Pro Display B",
                              lineHeight: "normal",
                            }}
                          >
                            Data Linked to You
                          </div>

                          <div className="flex flex-col md:gap-5 gap-[11px]">
                            <div className="w-full grid grid-cols-3 md:gap-[50px] gap-[15px] ">
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
                                    className="md:text-xl text-[10px] w-[108px]"
                                    style={{
                                      fontFamily: "SF Pro Display R",
                                    }}
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
                                    <img src={education} alt="Education" />
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
                              <div className="flex md:w-[162px] w-full">
                                <div className="flex items-center md:gap-5 gap-[11px]">
                                  <div className="md:w-5 md:h-5 w-[10px] h-[10px]">
                                    <img src={gallery} alt="UserContent" />
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
                            <div className="w-full grid grid-cols-3 md:gap-[50px] gap-[15px]">
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
                    <div className="w-full flex flex-col justify-center md:gap-[50px] gap-[30px]">
                      <div className=" w-full flex flex-col">
                        <div
                          className="md:text-4xl text-xl"
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
                        <ul className="list-outside list-disc flex flex-col md:gap-10 gap-5 md:pl-[50px] pl-[25px]">
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

                {/*Coding lama**

            
                <div className="w-full flex flex-col md:px-[100px] pl-[31px] pr-[32px] justify-center md:pt-[100px] pt-[50px] md:gap-[50px] gap-[30px]">
                  <div className="md:w-[700px] w-full flex flex-col">
                    <div
                      className="md:text-4xl text-xl"
                      style={{ fontFamily: " SF Pro Display B" }}
                    >
                      Features:
                    </div>
                  </div>
                  <div
                    className="w-full md:w-[700px] flex flex-col md:text-[32px] text-base"
                    style={{
                      fontFamily: "SF Pro Display R",
                      lineHeight: "normal",
                    }}
                  >
                    <ul className="list-outside list-disc flex flex-col md:gap-10 gap-5 md:pl-[50px] pl-[20px]">
                      <li>Search the kindergartens near you.</li>
                      <li>Referral Program and Reward Wallet function.</li>
                      <li>Reserve a seat for your kids through Kindertown.</li>
                      <li>
                        Pay your school fee directly through Kindertown app,
                        seamlessly supported by over 10 banks.
                      </li>
                      <li>Instant notification feature on mobile phones.</li>
                      <li>Child's daily mission with adorable star sticker.</li>
                      <li>Checking kid’s academic performance. </li>
                      <li>Feedback form for kindergarten.</li>
                      <li>
                        Purchase school supplies through the ‘Market’ in
                        Kindertown.
                      </li>
                      <li>
                        Self pick-up / delay pick-up / emergency pick-up
                        protection / change contact feature.
                      </li>
                      <li>
                        Track kids’ daily activities, status, meal intake,
                        temperature and more simply on Kindertown.
                      </li>
                      <li>Live connect to school CCTV.</li>
                      <li>
                        Interact with teacher or other parents from the same
                        kindergarten in ‘Community’.
                      </li>
                      <li>
                        Cute widgets and etc that can be purchased in{" "}
                        <span>the app.</span>
                      </li>
                    </ul>
                  </div>
                </div>
                */}
              </div>
            </div>
          </div>
          <div className=" fixed inset-0 z-40 bg-gray-800 bg-opacity-50 backdrop-blur-sm"></div>
        </>
      ) : null}
    </>
  );
};

export default ModalParent;
