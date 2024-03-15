// JoinUs.jsx
import React from "react";
import img1 from "../assets/referral/img1.svg";
import pc from "../assets/referral/pcs.svg";
const ReferralProgrames = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center gap-[200px] pt-[150px] pb-[300px]">
        {/*CONTENT 1*/}
        <div className="w-[800px] flex flex-col gap-[50px]">
          <div className="flex flex-col justify-center items-center">
            <div
              className="text-[70px]"
              style={{ fontFamily: "SF Pro Display B", lineHeight: "normal" }}
            >
              <div>
                <div>
                  <span className="text-[#7600D3]">Tiny act</span> is a sharing,
                </div>
                <div>
                  monumental <span className="text-[#FFA1AC]">momentum</span>.
                </div>
              </div>
            </div>
          </div>
          <div className="w-[800px] h-[653px] flex flex-col justify-center items-center">
            <img src={img1} alt="Ladies" />
          </div>
        </div>
        <div className="w-[1000px] flex flex-col items-center gap-[100px]">
          <div className="flex flex-col justify-center items-center">
            <div
              className="text-[32px]"
              style={{ fontFamily: "SF Pro Display M", lineHeight: "normal" }}
            >
              <div className="flex items-center justify-center ">
                We have a highly comprehensive referral program system that
                allows
              </div>
              <div className="flex items-center justify-center">
                you to easily recommend our system to parents or schools who
                have
              </div>
              <div className="flex items-center justify-center">
                not yet used it. Both the referrer and the referred both can
                receive
              </div>
              <div className="flex items-center justify-center">
                rewards, and more importantly, your small act of sharing
                addresses a
              </div>
              <div className="flex items-center justify-center">
                problem that schools have been facing for a long time.
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={pc} alt="PC" />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-[800px] flex-col justify-center items-center gap-[100px]">
          <div className="flex flex-col justify-center items-center">
            <div
              className="text-[70px]"
              style={{ fontFamily: "SF Pro Display B", lineHeight: "normal" }}
            >
              <div>
                <div>Recommendation</div>
                <div>
                  is <span className="text-[#4D9138]">simply</span>a
                </div>
                <div>straightforward action.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReferralProgrames;
