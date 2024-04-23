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

const ModalAdmin = ({ showModal3, setShowModal3 }) => {
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
                    className="absolute md:top-[29px] md:right-[46px] text-right md:text-[32px] text-xs md:w-[389px] w-[164px] right-[29px] top-[34px]"
                    style={{
                      fontFamily: "SF Pro Display B",
                      lineHeight: "normal",
                    }}
                  >
                    The contributions made by the school owner to the school,
                    teachers, and students are revolutionary.
                  </div>
                </div>

                <div className="w-full md:max-w-[900px] flex flex-col justify-center items-center  md:px-0 pl-[31px] pr-[32px] md:pt-[100px] pt-[50px]">
                  <div className="w-full md:w-[700px]  flex flex-col">
                    <div className="w-full flex flex-col md:gap-[100px] gap-[50px]">
                      {/*Content 2*/}
                      <div className="w-full flex flex-col md:gap-[50px] gap-[30px]">
                        <div
                          className="md:text-4xl text-2xl text-left"
                          style={{ fontFamily: "SF Pro Display B" }}
                        >
                          The school owner is the key force behind the success
                          of the institution. They set the direction, values,
                          and standards of excellence, ensuring a transformative
                          school management system for everyone.
                        </div>
                        <div className="flex">
                          <div
                            className=" md:text-[32px] text-xl text-left"
                            style={{
                              fontFamily: "SF Pro Display M",
                              lineHeight: "normal",
                            }}
                          >
                            The school owner, with our Kindertown management
                            system, has streamlined the student enrollment
                            process and efficiently tackled the busy
                            administrative tasks of the school. They enable
                            educators to focus more on nurturing young minds.
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
                      <div className="w-full flex flex-col md:gap-[200px] gap-[100px]">
                        <div className="w-full flex flex-col items-center">
                          <div
                            className="md:text-[32px] text-2xl text-center"
                            style={{
                              fontFamily: "SF Pro Display M",
                              lineHeight: "normal",
                            }}
                          >
                            <div className="md:w-[650px] flex flex-wrap">
                              Subscribing to the Premium Plan allows you to
                              enjoy top-tier features specifically designed to
                              meet the unique needs of kindergartens, along with
                              an exceptional level of service.
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
                                  className="md:text-4xl text-2xl text-left"
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
                                <ul className="list-outside list-disc flex flex-col md:gap-10 gap-5 md:pl-[50px] pl-[25px] text-left">
                                  <li>
                                    Add student accounts and parents accounts.
                                  </li>
                                  <li>
                                    Add teacher accounts and sub-admin accounts.
                                  </li>
                                  <li>Add class room.</li>
                                  <li>Create new notice or announcement.</li>
                                  <li>Update student skill assessment.</li>
                                  <li>Create invoice function.</li>
                                  <li>Market store “Selling function”.</li>
                                  <li>Live CCTV Connection.</li>
                                  <li>Payment gateway function.</li>
                                  <li>
                                    Create teacher and student time table.
                                  </li>
                                  <li>
                                    Teacher and student attendance report.
                                  </li>
                                  <li>Add driver or school bus service.</li>
                                  <li>Add insurance coverage function.</li>
                                  <li>
                                    Face to face training, online training and
                                    support.
                                  </li>
                                  <li>Referral Program.</li>
                                  <li>
                                    Delay pick-up / emergency pick-up protection
                                    feature.
                                  </li>
                                  <li>
                                    In-app purchase iPhone and iWatch widgets
                                  </li>
                                  <li>
                                    Searchable in Kindertown reservation list.
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="w-full">
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
                                    Limited Access
                                  </div>
                                  <div className="flex-col md:w-[121px]">
                                    Daily Charge per seat
                                  </div>
                                  <div className="flex-col md:w-[97px]">
                                    Get Quote Now!
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
