import React from "react";
import apple from "../../assets/parentmodal/apple.svg";
import android from "../../assets/parentmodal/android.svg";
import video from "../../assets/parentmodal/video.mp4";
import close from "../../assets/parentmodal/close.svg";
import icon from "../../assets/parentmodal/icon.svg";

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
              <div className="flex flex-col items-center gap-[60px]">
                <div className="flex gap-[50px]">
                  <div>
                    <img src={apple} alt="Apple" />
                  </div>
                  <div>
                    <img src={android} alt="Android" />
                  </div>
                </div>
                <div className="flex flex-col gap-[36px]">
                  <div
                    className=" text-base"
                    style={{
                      fontFamily: "SF Pro Display B",
                      lineHeight: "normal",
                    }}
                  >
                    Data Linked to You
                  </div>
                  <div className="w-full flex flex-col"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modal1;
