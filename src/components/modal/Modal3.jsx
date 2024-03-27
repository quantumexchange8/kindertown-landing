import React from "react";
import apple from "../../assets/parentmodal/apple.png";
import android from "../../assets/parentmodal/android.png";
import video from "../../assets/adminmodal/header.mp4";
import close from "../../assets/parentmodal/close.png";
import icon from "../../assets/adminmodal/icon.png";
import shopping from "../../assets/parentmodal/shopping.png";
import smile from "../../assets/parentmodal/smile.png";
import setting from "../../assets/parentmodal/setting.png";
import location from "../../assets/parentmodal/location.png";
import education from "../../assets/parentmodal/education.png";
import gallery from "../../assets/parentmodal/gallery.png";
import data from "../../assets/parentmodal/data.png";
import contact from "../../assets/parentmodal/contact.png";
import data2 from "../../assets/parentmodal/data2.png";
function Modal3({ isOpen, onClose }) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-800 bg-opacity-75 backdrop-blur-sm py-10">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white md:w-[900px] rounded-[50px] overflow-hidden pb-[100px]">
          {/* Video section */}
          <div className="relative h-auto">
            <video
              className="w-full h-full object-cover rounded-t-[50px]"
              autoPlay
              loop
              muted
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div
              className="absolute top-[29px] right-[46px] text-right text-[32px]"
              style={{ fontFamily: "SF Pro Display B", lineHeight: "normal" }}
            >
              <div>The contributions made by</div>
              <div>the school owner to the</div>
              <div>school, teachers, and</div>
              <div>students are revolutionary.</div>
            </div>
          </div>

          {/* CONTENT 2*/}
          <div className="w-full flex flex-col gap-[50px] py-[100px]">
            <div className="w-[900px] px-[100px] justify-start">
              <div
                className="text-4xl"
                style={{ fontFamily: "SF Pro Display B" }}
              >
                The school owner is the key force behind the success of the
                institution. They set the direction, values, and standards of
                excellence, ensuring a transformative school management system
                for everyone.
              </div>
            </div>
            <div className="w-[900px] flex flex-col gap-12 pl-[100px] pr-[40px]">
              <div className="w-full flex items-center ">
                <div
                  className="w-[700px] text-[32px]"
                  style={{
                    fontFamily: "SF Pro Display M",
                    lineHeight: "normal",
                  }}
                >
                  The school owner, with our Kindertown management system, has
                  streamlined the student enrollment process and efficiently
                  tackled the busy administrative tasks of the school. They
                  enable educators to focus more on nurturing young minds.
                </div>
                <div>
                  <button onClick={onClose}>
                    <img
                      src={close}
                      alt="CloseButton"
                      className="w-[60px] h-[60px]"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr className="w-[700px] border-[#F67F00] mx-auto dark:border-[#F67F00]-900" />
          {/*CONTENT 3*/}
          <div className="w-full pt-[100px] px-[100px]">
            <div className="w-[700px] flex flex-col items-center">
              <div
                className="text-[32px] text-center"
                style={{ fontFamily: "SF Pro Display M", lineHeight: "normal" }}
              >
                <div> Subscribing to the Premium Plan allows you to</div>
                <div> enjoy top-tier features specifically designed to</div>
                <div> meet the unique needs of kindergartens, along</div>
                <div> with an exceptional level of service.</div>
              </div>
            </div>
          </div>
          {/*CONTENT 4*/}
          <div className="w-full pt-[200px] px-[100px]">
            <div className="relative md:w-[700px] rounded-[30px] bg-[#D1C5B8] flex flex-col items-center py-[49px] gap-20 px-[78px]">
              <div>
                <img src={icon} alt="icon" className=" w-[150px] h-[150px]" />
              </div>
              <div className="w-full flex flex-col items-center gap-[60px]">
                <div className="flex gap-[50px]">
                  <div>
                    <img src={apple} alt="Apple" />
                  </div>
                  <div>
                    <img src={android} alt="Android" />
                  </div>
                </div>
                <div className="w-full flex flex-col justify-center items-center gap-9">
                  <div
                    className=" text-base "
                    style={{
                      fontFamily: "SF Pro Display B",
                      lineHeight: "normal",
                    }}
                  >
                    Data Linked to You
                  </div>

                  <div className="flex flex-col gap-5">
                    <div className="w-full grid grid-cols-3 gap-[50px]">
                      <div className="flex w-full">
                        <div className="flex items-center gap-5">
                          <div className="w-5 h-5">
                            <img src={shopping} alt="Shopping" />
                          </div>
                          <div
                            className="text-xl"
                            style={{ fontFamily: "SF Pro Display R" }}
                          >
                            Purchases
                          </div>
                        </div>
                      </div>
                      <div className="flex w-full">
                        <div className="flex items-center gap-5">
                          <div className="w-5 h-5">
                            <img src={smile} alt="Identifier" />
                          </div>
                          <div
                            className="text-xl"
                            style={{ fontFamily: "SF Pro Display R" }}
                          >
                            Identifiers
                          </div>
                        </div>
                      </div>
                      <div className="flex w-full">
                        <div className="flex items-center gap-5">
                          <div className="w-5 h-5">
                            <img src={setting} alt="Diagnostic" />
                          </div>
                          <div
                            className="text-xl w-[108px]"
                            style={{ fontFamily: "SF Pro Display R" }}
                          >
                            Diagnostics
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full grid grid-cols-3 gap-[50px]">
                      <div className="flex w-full">
                        <div className="flex items-center gap-5">
                          <div className="w-5 h-5">
                            <img src={location} alt="Location" />
                          </div>
                          <div
                            className="text-xl"
                            style={{ fontFamily: "SF Pro Display R" }}
                          >
                            Location
                          </div>
                        </div>
                      </div>
                      <div className="flex w-full">
                        <div className="flex items-center gap-5">
                          <div className="w-5 h-5">
                            <img src={education} alt="Education" />
                          </div>
                          <div
                            className="text-xl"
                            style={{ fontFamily: "SF Pro Display R" }}
                          >
                            Education
                          </div>
                        </div>
                      </div>
                      <div className="flex w-[162px]">
                        <div className="flex items-center gap-5">
                          <div className="w-5 h-5">
                            <img src={gallery} alt="UserContent" />
                          </div>
                          <div
                            className="text-xl"
                            style={{ fontFamily: "SF Pro Display R" }}
                          >
                            User Content
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full grid grid-cols-3 gap-[50px]">
                      <div className="flex w-full">
                        <div className="flex items-center gap-5">
                          <div className="w-5 h-5">
                            <img src={data} alt="UsageData" />
                          </div>
                          <div
                            className="text-xl"
                            style={{ fontFamily: "SF Pro Display R" }}
                          >
                            Usage Data
                          </div>
                        </div>
                      </div>
                      <div className="flex w-full">
                        <div className="flex items-center gap-5">
                          <div className="w-5 h-5">
                            <img src={contact} alt="Contacts" />
                          </div>
                          <div
                            className="text-xl"
                            style={{ fontFamily: "SF Pro Display R" }}
                          >
                            Contacts
                          </div>
                        </div>
                      </div>
                      <div className="flex w-[162px]">
                        <div className="flex items-center gap-5">
                          <div className="w-5 h-5">
                            <img src={data2} alt="Other Data" />
                          </div>
                          <div
                            className="text-xl"
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

          <div className="w-full flex flex-col px-[100px] justify-center pt-[100px] gap-[50px]">
            <div className="w-[700px] flex flex-col">
              <div
                className="text-4xl"
                style={{ fontFamily: " SF Pro Display B" }}
              >
                Features:
              </div>
            </div>
            <div
              className="w-[700px] flex flex-col text-[32px]"
              style={{ fontFamily: "SF Pro Display R", lineHeight: "normal" }}
            >
              <ul className="list-outside list-disc flex flex-col gap-10 pl-[50px]">
                <li>Add student accounts and parents accounts.</li>
                <li>Add teacher accounts and sub-admin accounts.</li>
                <li>Add class room.</li>
                <li>Create new notice or announcement.</li>
                <li>Update student skill assessment.</li>
                <li>Create invoice function.</li>
                <li>Market store “Selling function”.</li>
                <li>Live CCTV Connection.</li>
                <li>Payment gateway function.</li>
                <li>Create teacher and student time table.</li>
                <li>Teacher and student attendance report.</li>
                <li>Add driver or school bus service.</li>
                <li>Add insurance coverage function.</li>
                <li>Face to face training, online training and support.</li>
                <li>Referral Program.</li>
                <li>Delay pick-up / emergency pick-up protection feature.</li>
                <li>In-app purchase iPhone and iWatch widgets</li>
                <li>Searchable in Kindertown reservation list.</li>
              </ul>
            </div>
          </div>

          <div className="w-full pt-[150px] px-[100px]">
            <div className="relative md:w-[700px] rounded-t-[30px] bg-[#FF8400] items-center pl-[86px] pr-[85px] py-[38px]">
              <div
                className="text-xl  flex justify-between text-center "
                style={{ fontFamily: "SF Pro Display M" }}
              >
                <div className="flex flex-col"> Free</div>
                <div className="flex flex-col">Standard</div>
                <div className="flex flex-col">Premium</div>
              </div>
            </div>
            <div className="relative md:w-[700px] rounded-b-[30px] bg-[#FFB261] items-center pl-[72px] pr-[79px] py-[26px]">
              <div
                className="text-xl flex justify-between text-center"
                style={{ fontFamily: "SF Pro Display M" }}
              >
                <div className="flex-col w-[70px]">Limited Access</div>
                <div className="flex-col w-[121px]">Daily Charge per seat</div>
                <div className="flex-col w-[97px]">Get Quote Now!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal3;
