import React from "react";
import apple from "../../assets/parentmodal/apple.svg";
import android from "../../assets/parentmodal/android.svg";
import video from "../../assets/parentmodal/video.mp4";
import close from "../../assets/parentmodal/close.svg";
import icon from "../../assets/parentmodal/icon.svg";
import shopping from "../../assets/parentmodal/shopping.svg";
import smile from "../../assets/parentmodal/smile.svg";
import setting from "../../assets/parentmodal/setting.svg";
import location from "../../assets/parentmodal/location.svg";
import education from "../../assets/parentmodal/education.svg";
import gallery from "../../assets/parentmodal/gallery.svg";
import data from "../../assets/parentmodal/data.svg";
import contact from "../../assets/parentmodal/contact.svg";
import data2 from "../../assets/parentmodal/data2.svg";
function Modal1({ isOpen, onClose }) {
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
              className="absolute bottom-[49px] right-[46px] text-right text-white text-[32px]"
              style={{ fontFamily: "SF Pro Display B", lineHeight: "normal" }}
            >
              <div>The gift parents give to their</div>
              <div>children is not only love and</div>
              <div>companionship, but more</div>
              <div>importantly, education.</div>
            </div>
          </div>

          {/* CONTENT 2*/}
          <div className="w-full flex flex-col gap-[50px] pt-[100px]">
            <div className="w-[900px] px-[100px] justify-start">
              <div
                className="text-4xl"
                style={{ fontFamily: "SF Pro Display B" }}
              >
                <div>The beginning of a child's learning</div>
                <div>journey is crucial.</div>
              </div>
            </div>
            <div className="w-[900px] flex flex-col gap-12 pl-[100px] pr-[40px]">
              <div
                className="w-[700px] text-[32px]"
                style={{ fontFamily: "SF Pro Display M", lineHeight: "normal" }}
              >
                The Kindertown management system we have carefully tailored for
                you will significantly enhance the quality of the school while
                also increasing confidence between parents and the school.
              </div>
              <div className="w-full flex">
                <div
                  className="w-[700px] text-[32px]"
                  style={{
                    fontFamily: "SF Pro Display M",
                    lineHeight: "normal",
                  }}
                >
                  Through the functionalities developed by our designers and IT
                  engineers, parents will be able to focus more on and better
                  understand their child's learning progress.
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
                <div className="w-full flex flex-col items-center gap-9">
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
                  Purchase school supplies through the ‘Market’ in Kindertown.
                </li>
                <li>
                  Self pick-up / delay pick-up / emergency pick-up protection /
                  change contact feature.
                </li>
                <li>
                  Track kids’ daily activities, status, meal intake, temperature
                  and more simply on Kindertown.
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
        </div>
      </div>
    </div>
  );
}

export default Modal1;
