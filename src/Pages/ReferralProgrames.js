// JoinUs.jsx
import React from "react";
import img1 from "../assets/referral/img group.png";
import pc from "../assets/referral/pcs.png";
import ic from "../assets/referral/ic.png";
import card from "../assets/referral/card.png";
import register from "../assets/referral/register.png";
import subscribe from "../assets/referral/subscribe.png";
import reward from "../assets/referral/reward.png";

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
      <div className="w-full flex flex-col justify-center items-center gap-[200px] pb-[200px]">
        <div className="w-[800px] flex flex-col justify-center items-center gap-[100px]">
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
          <div className="w-full flex flex-col">
            <div className="relative md:w-[800px] md:h-[500px] md:rounded-t-[47px] bg-[#C1FFB4]  py-[129px] px-[250px]">
              <img src={ic} alt="IdentificationCard" />
            </div>
            <div className="relative md:w-[800px] md:h-[300px] md:rounded-b-[47px] bg-[#6EDD58]  py-[80px] px-[75px]">
              <div className="flex flex-col justify-center items-center gap-[30px]">
                <div
                  className="text-[40px]"
                  style={{
                    fontFamily: "SF Pro Display B",
                    lineHeight: "normal",
                  }}
                >
                  Register an account.
                </div>
                <div
                  className="text-center text-[32px]"
                  style={{
                    fontFamily: "SF Pro Display M",
                    lineHeight: "normal",
                  }}
                >
                  <div className="flex items-center">
                    Regardless of whether you registered as a
                  </div>
                  <div className="flex justify-center items-center">
                    parent, teacher, or school owner.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col">
            <div className="relative md:w-[800px] md:h-[500px] md:rounded-t-[47px] bg-[#FFF6C5]  py-[115px] px-[250px]">
              <img src={card} alt="Card" className="h-[270px] w-[300px]" />
            </div>
            <div className="relative md:w-[800px] md:h-[300px] md:rounded-b-[47px] bg-[#FFE55A]  py-[80px] px-[75px]">
              <div className="flex flex-col justify-center items-center gap-[30px]">
                <div
                  className="text-[40px]"
                  style={{
                    fontFamily: "SF Pro Display B",
                    lineHeight: "normal",
                  }}
                >
                  Referral code.
                </div>
                <div
                  className="text-center text-[32px]"
                  style={{
                    fontFamily: "SF Pro Display M",
                    lineHeight: "normal",
                  }}
                >
                  <div className="flex items-center">
                    Copy your referral code and share it with a
                  </div>
                  <div className="flex justify-center items-center">
                    parent or school owner.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col">
            <div className="relative md:w-[800px] md:h-[500px] md:rounded-t-[47px] bg-[#FFB9B9]  py-[80px] px-[250px]">
              <img
                src={register}
                alt="Register"
                className="h-[340px] w-[300px]"
              />
            </div>
            <div className="relative md:w-[800px] md:h-[300px] md:rounded-b-[47px] bg-[#FF6161]  py-[80px] px-[75px]">
              <div className="flex flex-col justify-center items-center gap-[30px]">
                <div
                  className="text-[40px]"
                  style={{
                    fontFamily: "SF Pro Display B",
                    lineHeight: "normal",
                  }}
                >
                  Referree registered an account.
                </div>
                <div
                  className="text-center text-[32px]"
                  style={{
                    fontFamily: "SF Pro Display M",
                    lineHeight: "normal",
                  }}
                >
                  <div className="flex items-center">
                    Referee registered an account using
                  </div>
                  <div className="flex justify-center items-center">
                    your referral code.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col">
            <div className="relative md:w-[800px] md:h-[500px] md:rounded-t-[47px] bg-[#BEC8FF]  py-[94px] px-[250px]">
              <img
                src={subscribe}
                alt="Subscriber"
                className="h-[312px] w-[300px]"
              />
            </div>
            <div className="relative md:w-[800px] md:h-[300px] md:rounded-b-[47px] bg-[#7188FF]  py-[80px] px-[75px]">
              <div className="flex flex-col justify-center items-center gap-[30px]">
                <div
                  className="text-[40px]"
                  style={{
                    fontFamily: "SF Pro Display B",
                    lineHeight: "normal",
                  }}
                >
                  Referree successfully subscribed.
                </div>
                <div
                  className="text-center text-[32px]"
                  style={{
                    fontFamily: "SF Pro Display M",
                    lineHeight: "normal",
                  }}
                >
                  <div className="flex items-center">
                    Referree's child successfully enrolled or school
                  </div>
                  <div className="flex justify-center items-center">
                    owner successfully subscribed to the system.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col">
            <div className="relative md:w-[800px] md:h-[500px] md:rounded-t-[47px] bg-[#FFD976]  py-[95px] px-[250px]">
              <img src={reward} alt="Reward" className="h-[310px] w-[300px]" />
            </div>
            <div className="relative md:w-[800px] md:h-[300px] md:rounded-b-[47px] bg-[#FFB800]  pt-[78px] pb-[79px] px-[75px]">
              <div className="flex flex-col justify-center items-center gap-[30px]">
                <div
                  className="text-[40px]"
                  style={{
                    fontFamily: "SF Pro Display B",
                    lineHeight: "normal",
                  }}
                >
                  Both parties receive rewards.
                </div>
                <div
                  className="text-center text-[32px]"
                  style={{
                    fontFamily: "SF Pro Display M",
                    lineHeight: "normal",
                  }}
                >
                  <div className="flex items-center">
                    Both the referrer and the referee will receive
                  </div>
                  <div className="flex justify-center items-center">
                    rewards simultaneously.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1000px] flex flex-col justify-center items-center gap-[100px]">
          <div className="flex flex-col justify-center items-center w-[800px]">
            <div
              className="text-[70px] text-center"
              style={{ fontFamily: "SF Pro Display B", lineHeight: "normal" }}
            >
              Do not miss out on this opportunity to receive mutual rewards.
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div
              className="text-[40px] text-center"
              style={{ fontFamily: "SF Pro Display M", lineHeight: "normal" }}
            >
              <div className="flex flex-col items-center">
                The steps are very simple – you just need to send them
              </div>
              <div className="flex flex-col items-center">
                the Kindertown app referral code.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReferralProgrames;
