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

const ModalTeacher = ({ showModal2, setShowModal2 }) => {
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
              className="relative w-full md:w-[900px] overflow-y-auto  my-auto md:py-[100px]  flex modal-content"
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
              <div className="border-0 md:rounded-[50px] relative flex flex-col w-full bg-white outline-none focus:outline-none md:pb-[100px] pb-[60px]">
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
                    className="absolute md:top-[49px] top-[26px] md:right-[46px] right-[23px] text-right md:text-[32px] text-xs md:w-[330px] w-[140px]"
                    style={{
                      fontFamily: "SF Pro Display B",
                      lineHeight: "normal",
                    }}
                  >
                    The selfless guidance that teachers provide to children is
                    evident to everyone.
                  </div>
                </div>

                {/* CONTENT 2*/}
                <div className="w-full flex flex-col md:gap-[50px] gap-5 md:pt-[100px] pt-[50px]">
                  <div className="w-full md:w-[900px] md:px-[100px] pl-[31px] pr-[32px] justify-start">
                    <div
                      className="md:text-4xl text-2xl"
                      style={{ fontFamily: "SF Pro Display B" }}
                    >
                      <div className="hidden md:flex flex-col">
                        <div>The dynamics of children at school are </div>
                        <div>observed and guided by teachers.</div>
                      </div>
                      <div className="md:hidden flex flex-col">
                        The dynamics of children at school are observed and
                        guided by teachers.
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-[900px] flex flex-col gap-12 md:pl-[100px] md:pr-[40px] pl-[31px] pr-[32px]">
                    <div className="w-full flex ">
                      <div
                        className="w-full md:w-[700px] md:text-[32px] text-xl"
                        style={{
                          fontFamily: "SF Pro Display M",
                          lineHeight: "normal",
                        }}
                      >
                        We fully understand the crucial role teachers play in
                        the education of children. From language learning to
                        homework, moral values, and discipline, teachers must
                        attentively observe each student and communicate
                        effectively with parents to keep them informed about
                        their child's progress at school.
                      </div>
                      <div className="hidden md:flex flex-col relative top-[196px] right-0">
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
                      className="w-full md:w-[700px] md:text-[32px] text-xl"
                      style={{
                        fontFamily: "SF Pro Display M",
                        lineHeight: "normal",
                      }}
                    >
                      Therefore, teachers need better management tools to make
                      their workload more efficient. The valuable time of
                      teachers should not be wasted due to busyness.
                    </div>
                  </div>
                </div>
                {/* CONTENT 3*/}
                <div className="w-full md:pt-[200px] pt-[100px] md:px-[100px] pl-[31px] pr-[32px]">
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
                </div>
                {/* CONTENT 4*/}
                <div className="w-full flex flex-col md:px-[100px] pl-[31px] pr-[32px] justify-center md:pt-[100px] pt-[50px] md:gap-[50px] gap-[30px]">
                  <div className="w-full md:w-[700px] flex flex-col">
                    <div
                      className="md:text-4xl text-2xl"
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
                    <ul className="list-outside list-disc flex flex-col md:gap-10 gap-5 pl-[50px]">
                      <li>Update students check-in / out status.</li>
                      <li>Update students temperature.</li>
                      <li>
                        Update students daily activities and academic
                        performance.
                      </li>
                      <li>
                        Update students homework and grades status through the
                        Kindertown app.
                      </li>
                      <li>Referral Program and Reward Wallet function.</li>
                      <li>
                        Interact with teacher or other parents from the same
                        kindergarten in ‘Community’.
                      </li>
                      <li>
                        Receive self pick-up / delay pick-up / emergency pick-up
                        protection / change contact notification.{" "}
                      </li>
                      <li>Time table checking function.</li>
                    </ul>
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
