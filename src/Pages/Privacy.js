import React from "react";
import Lock from "../assets/privacy/lock.svg";
const Privacy = () => {
  return (
    <div className="w-full bg-[#000] py-[200px] px-[270px] flex justify-center">
      <div className="w-[1000px] flex justify-center items-center gap-[50px]">
        <div className="flex flex-col justify-center items-center w-[165px] h-[182px]">
          <img src={Lock} alt="Lock"></img>
        </div>
        <div className="flex flex-col justify-center gap-[30px] w-[685px]">
          <div className="flex justify-start items-center">
            <div
              className="text-[60px] text-[#FFF]"
              style={{ fontFamily: "SF Pro Display B", lineHeight: "normal" }}
            >
              Privacy in the classroom.
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div
              className="text-[#FFF] text-2xl"
              style={{ fontFamily: "SF Pro Display M", lineHeight: "normal" }}
            >
              Every product, including those for education, has privacy features
              and controls built in to protect personal information. We provide
              transparency and control over how information is shared. Our all
              products designed to work together for maximum security.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
