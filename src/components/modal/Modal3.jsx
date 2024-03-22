import React from "react";

import video from "../../assets/parentmodal/video.mp4";

import close from "../../assets/parentmodal/close.svg";

const Modal3 = ({ isOpen, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-800 bg-opacity-75 backdrop-blur-sm py-2">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white w-[90%] sm:w-[80%] md:w-[90%] lg:w-[60%] xl:w-[50%] rounded-[50px] overflow-hidden">
          {/* Video section */}
          <div className="relative h-[50vh]">
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
              className="absolute bottom-0 right-0 p-6 text-right text-white"
              style={{ fontFamily: "SF Pro Display B" }}
            >
              <div>The gift parents give to their</div>
              <div>children is not only love and</div>
              <div>companionship, but more</div>
              <div>importantly, education.</div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="p-6">
            <div
              className="text-4xl mb-6"
              style={{ fontFamily: "SF Pro Display B" }}
            >
              <div>The beginning of a child's learning</div>
              <div>journey is crucial.</div>
            </div>
            <button onClick={onClose}>
              <img src={close} alt="CloseButton" className="w-12 h-12" />
            </button>
          </div>
          <div className="p-6">
            <div
              className="text-4xl mb-6"
              style={{ fontFamily: "SF Pro Display B" }}
            >
              <div>The beginning of a child's learning</div>
              <div>journey is crucial.</div>
            </div>
            <button onClick={onClose}>
              <img src={close} alt="CloseButton" className="w-12 h-12" />
            </button>
          </div>
          <div className="p-6">
            <div
              className="text-4xl mb-6"
              style={{ fontFamily: "SF Pro Display B" }}
            >
              <div>The beginning of a child's learning</div>
              <div>journey is crucial.</div>
            </div>
            <button onClick={onClose}>
              <img src={close} alt="CloseButton" className="w-12 h-12" />
            </button>
          </div>
          <div className="p-6">
            <div
              className="text-4xl mb-6"
              style={{ fontFamily: "SF Pro Display B" }}
            >
              <div>The beginning of a child's learning</div>
              <div>journey is crucial.</div>
            </div>
            <button onClick={onClose}>
              <img src={close} alt="CloseButton" className="w-12 h-12" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal3;
