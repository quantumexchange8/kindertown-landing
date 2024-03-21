import React from "react";
import video from "../../assets/parentmodal/video.mp4";
import icon from "../../assets/parentmodal/icon.png";
import close from "../../assets/parentmodal/close.svg";
const Modal1 = ({ isOpen, onClose }) => {
  return (
    isOpen && (
      <div className="w-full fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75 backdrop-blur-sm pt-8">
        <div className="bg-white w-full md:max-w-[900px] rounded-[50px] h-screen justify-center">
          {/*CONTENT 1*/}
          <div className="relative flex items-center justify-center overflow-hidden">
            <video
              className="w-full h-full object-cover rounded-t-[50px]"
              autoPlay
              loop
              muted
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute bottom-12 right-[46px]">
              <div
                className="text-[30px] text-right text-white"
                style={{ fontFamily: "SF Pro Display B", lineHeight: "normal" }}
              >
                <div>The gift parents give to their</div>
                <div>children is not only love and</div>
                <div>companionship, but more</div>
                <div>importantly, education.</div>
              </div>
            </div>
          </div>
          {/*CONTENT 2 */}
          <div className="w-full flex flex-col gap-[50px] pt-[100px] pb-[200px]">
            <div className="w-full flex flex-col px-[100px]">
              <div className="flex flex-col w-[700px] justify-start">
                <div
                  className="text-4xl"
                  style={{
                    fontFamily: "SF Pro Display B",
                    lineHeight: "normal",
                  }}
                >
                  <div>The beginning of a child's learning</div>
                  <div> journey is crucial.</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full pl-[100px] pr-[40px] gap-5">
              <div className="flex flex-col w-[700px]">
                <div
                  className="text-[32px]"
                  style={{
                    fontFamily: "SF Pro Display M",
                    lineHeight: "normal",
                  }}
                >
                  The Kindertown management system we have carefully tailored
                  for you will significantly enhance the quality of the school
                  while also increasing confidence between parents and the
                  school.
                </div>
              </div>
              <div className="flex flex-col w-[760px]">
                <div className="flex">
                  <div className="flex flex-col w-[700px]">
                    <div
                      className="text-[32px]"
                      style={{
                        fontFamily: "SF Pro Display M",
                        lineHeight: "normal",
                      }}
                    >
                      Through the functionalities developed by our designers and
                      IT engineers, parents will be able to focus more on and
                      better understand their child's learning progress.
                    </div>
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
          </div>

          {/*CONTENT3*/}
          <div className="w-full flex flex-col justify-center items-center">
            <div className="relative md:w-[700px] flex flex-col  rounded-[30px] bg-[#D1C5B8] pt-[43px]">
              <img src={icon} alt="Icon" className="w-[150px] h-[150px]" />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal1;
