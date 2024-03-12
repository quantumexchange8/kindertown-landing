// JoinUs.jsx
import React from "react";

const Parent = () => {
  return (
    <>
      <div className="w-full flex  flex-col justify-center items-center py-[200px] px-[320px]">
        <div className="w-[1000px] px-[100px] ">
          <div className="w-full flex flex-col items-center gap-y-[100px]">
            <div className="md:w-[800px] md:h-[660px] md:rounded-[50px] bg-gradient-to-t from-[#FFDD98]  via-[#FFEABE] to-[#FFF7E5]"></div>
            <div className="flex flex-col gap-[50px] justify-center items-center">
              <div style={{ fontSize: "80px", fontFamily: "SF Pro Bold" }}>
                Kindertown Parents
              </div>
              <div
                className="flex items-center"
                style={{ fontSize: "32px", fontFamily: "SF Pro Medium" }}
              >
                A powerful platform that allows you to seamlessly monitor your
                child's activities at any time, from anywhere.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*
      <div className="flex flex-col mt-[200px]">
        <div className="w-full flex justify-center">
          <div className="max-w-[1000px] w-full flex flex-col items-center">
            <div className="w-full flex flex-col items-center">
              <div className="md:w-[800px] md:h-[660px] md:rounded-[50px] bg-[#FFDD98]"></div>

              <div className="flex flex-col justify-center items-center w-full">
                <div
                  className="text-[80px] font-bold text-center"
                  style={{ fontFamily: "SF Pro Bold" }}
                >
                  Kindertown Parents
                </div>
                <div>
                  A powerful platform that allows you to seamlessly monitor your
                  child's activities at any time, from anywhere.
                </div>
              </div>
            </div>

            <div></div>
          </div>
        </div>
      </div>
  */}
    </>
  );
};

export default Parent;
