// JoinUs.jsx
import React from "react";
import img1 from "../assets/referral/img group.png";
import pc from "../assets/referral/pcs.png";
import ic from "../assets/referral/ic.svg";
import card from "../assets/referral/card.svg";
import register from "../assets/referral/register.svg";
import subscribe from "../assets/referral/subscribe.svg";
import reward from "../assets/referral/reward.svg";

const ReferralProgrames = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center md:pt-[150px] pt-[80px] md:pb-[200px] pb-[100px]">
        <div className="w-full md:max-w-[1000px] flex flex-col">
          <div className="w-full flex flex-col md:gap-[300px] gap-[100px]">
            {/*content 1 & 2 */}
            <div className="w-full flex flex-col md:gap-[200px] gap-[100px]">
              {/*CONTENT 1*/}
              <div className="flex flex-col justify-center items-center md:px-0 pl-[31px] pr-8">
                <div className="w-full md:w-[800px] flex flex-col gap-[50px]">
                  <div className="flex flex-col justify-center items-center">
                    <div
                      className="md:text-[70px] text-[36px]"
                      style={{
                        fontFamily: "SF Pro Display B",
                        lineHeight: "normal",
                      }}
                    >
                      <span className="text-[#7600D3]">Tiny act</span> of
                      sharing, monumental{" "}
                      <span className="text-[#FFA1AC]">momentum</span>.
                    </div>
                  </div>
                  <div className="w-full md:h-[653px] flex flex-col justify-center items-center">
                    <img src={img1} alt="Ladies" />
                  </div>
                </div>
              </div>
              {/*CONTENT 2*/}
              <div className="flex flex-col justify-center items-center md:px-0 px-5">
                <div className="w-full  flex flex-col items-center md:gap-[100px] gap-[50px]">
                  <div className="flex flex-col">
                    <div
                      className="md:text-[32px] text-[20px] text-center"
                      style={{
                        fontFamily: "SF Pro Display Semibold",
                        lineHeight: "normal",
                      }}
                    >
                      We have a highly comprehensive referral program system
                      that allows you to easily recommend our system to parents
                      or schools who have not yet used it. Both the referrer and
                      the referred both can receive rewards, and more
                      importantly, your small act of sharing addresses a problem
                      that schools have been facing for a long time.
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <img src={pc} alt="PC" />
                  </div>
                </div>
              </div>
            </div>
            {/*content 3 & 4 */}
            <div className="w-full flex flex-col justify-center items-center md:gap-[200px] gap-[100px] md:px-0 pl-[31px] pr-[32px]">
              {/*Content 3*/}
              <div className="w-full md:w-[800px] flex flex-col md:gap-[100px] gap-[50px]">
                {/*Ttile*/}
                <div className="flex flex-col">
                  <div
                    className="md:text-[70px] text-[36px]"
                    style={{
                      fontFamily: "SF Pro Display B",
                      lineHeight: "normal",
                    }}
                  >
                    <div>Recommendation</div>
                    <div>
                      is <span className="text-[#4D9138]">simply </span>a
                    </div>
                    <div>straightforward action.</div>
                  </div>
                </div>
                {/*Box1*/}
                <div className="relative w-full flex flex-col justify-center items-center md:rounded-[47px] rounded-[20px] bg-[#C1FFB4]  pt-[51px] md:pt-[129px] md:gap-[129px] gap-[50px]">
                  <div>
                    <img
                      src={ic}
                      alt="IdentificationCard"
                      className="md:w-[300px] w-[130px]"
                    />
                  </div>
                  <div className="relative w-full md:rounded-b-[47px] rounded-b-[20px] bg-[#6EDD58]  md:py-[80px] pt-[31px] pb-[30px] md:px-[75px] px-[15px]">
                    <div className="flex flex-col justify-center items-center md:gap-[30px] gap-5">
                      <div
                        className="md:text-[40px] text-base"
                        style={{
                          fontFamily: "SF Pro Display B",
                          lineHeight: "normal",
                        }}
                      >
                        Register an account.
                      </div>
                      <div
                        className="text-center md:text-[32px] text-base"
                        style={{
                          fontFamily: "SF Pro Display M",
                          lineHeight: "normal",
                        }}
                      >
                        <div className="flex flex-col">
                          Regardless of whether you registered as a parent,
                          teacher, or school owner.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Box2*/}
                <div className="relative w-full flex flex-col items-center justify-center md:rounded-[47px] rounded-[20px] bg-[#FFF6C5] pt-[44px] md:pt-[115px] gap-[45px] md:gap-[114px]">
                  <div>
                    <img
                      src={card}
                      alt="Card"
                      className="md:w-[300px] w-[130px]"
                    />
                  </div>
                  <div className="relative w-full md:rounded-b-[47px] rounded-b-[20px] bg-[#FFE55A]  pt-[30px] pb-[31px] md:py-[80px] md:px-[75px] px-[15px]">
                    <div className="flex flex-col justify-center items-center md:gap-[30px] gap-5">
                      <div
                        className="md:text-[40px] text-base"
                        style={{
                          fontFamily: "SF Pro Display B",
                          lineHeight: "normal",
                        }}
                      >
                        Referral code.
                      </div>
                      <div
                        className="text-center md:text-[32px]  text-base"
                        style={{
                          fontFamily: "SF Pro Display M",
                          lineHeight: "normal",
                        }}
                      >
                        <div className="flex flex-col">
                          Copy your referral code and share it with a parent or
                          school owner.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Box3*/}
                <div className="relative w-full flex flex-col items-center justify-center md:rounded-[47px] rounded-[20px] bg-[#FFB9B9]  md:pt-[80px] pt-[29px] md:gap-[80px] gap-[30px]">
                  <div>
                    <img
                      src={register}
                      alt="Register"
                      className="md:w-[300px] w-[130px]"
                    />
                  </div>
                  <div className="relative w-full md:rounded-b-[47px] rounded-b-[20px] bg-[#FF6161] pt-[30px] pb-[31px] md:py-[80px] md:px-[75px] px-[15px]">
                    <div className="flex flex-col justify-center items-center md:gap-[30px] gap-5">
                      <div
                        className="md:text-[40px] text-base"
                        style={{
                          fontFamily: "SF Pro Display B",
                          lineHeight: "normal",
                        }}
                      >
                        Referree registered an account.
                      </div>
                      <div
                        className="text-center md:text-[32px] text-base"
                        style={{
                          fontFamily: "SF Pro Display M",
                          lineHeight: "normal",
                        }}
                      >
                        <div className="hidden md:flex flex-col">
                          <div className="flex items-center">
                            Referee registered an account using
                          </div>
                          <div className="flex justify-center items-center">
                            your referral code.
                          </div>
                        </div>
                        <div className="md:hidden flex flex-wrap">
                          Referee registered an account using your referral
                          code.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Box4*/}
                <div className="relative w-full flex flex-col items-center justify-center md:rounded-[47px] rounded-[20px] bg-[#BEC8FF]  md:pt-[94px] pt-[35px] md:gap-[94px] gap-9">
                  <div>
                    <img
                      src={subscribe}
                      alt="Subscriber"
                      className="md:w-[300px] w-[130px]"
                    />
                  </div>
                  <div className="relative w-full md:rounded-b-[47px] rounded-b-[20px] bg-[#7188FF]  md:py-[80px] md:px-[75px] pt-[20px] pb-[21px] px-[15px]">
                    <div className="flex flex-col justify-center items-center md:gap-[30px] gap-5">
                      <div
                        className="md:text-[40px] text-base"
                        style={{
                          fontFamily: "SF Pro Display B",
                          lineHeight: "normal",
                        }}
                      >
                        Referree successfully subscribed.
                      </div>
                      <div
                        className="text-center md:text-[32px] text-base"
                        style={{
                          fontFamily: "SF Pro Display M",
                          lineHeight: "normal",
                        }}
                      >
                        <div className="flex flex-col">
                          Referree's child successfully enrolled or school owner
                          successfully subscribed to the system.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Box5*/}
                <div className="relative w-full flex flex-col items-center justify-center md:rounded-[47px] rounded-[20px] bg-[#FFD976]  md:pt-[95px] md:gap-[95px] gap-[35px] pt-[36px]">
                  <div>
                    <img
                      src={reward}
                      alt="Reward"
                      className="md:w-[300px] w-[130px]"
                    />
                  </div>
                  <div className="relative md:rounded-b-[47px] rounded-b-[20px] bg-[#FFB800]  pt-[30px] md:pt-[78px] pb-[31px] md:pb-[79px] px-[15px] md:px-[89px]">
                    <div className="flex flex-col justify-center items-center md:gap-[30px] gap-5">
                      <div
                        className="md:text-[40px] text-base"
                        style={{
                          fontFamily: "SF Pro Display B",
                          lineHeight: "normal",
                        }}
                      >
                        Both parties receive rewards.
                      </div>
                      <div
                        className="text-center md:text-[32px] text-base"
                        style={{
                          fontFamily: "SF Pro Display M",
                          lineHeight: "normal",
                        }}
                      >
                        <div className=" flex flex-wrap">
                          Both the referrer and the referee will receive rewards
                          simultaneously.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Content 4*/}
              <div className="w-full flex flex-col justify-center items-center md:gap-[100px] gap-[30px]">
                <div className="md:w-[800px] w-full flex flex-col justify-center items-center ">
                  <div
                    className="md:text-[70px] text-2xl text-center"
                    style={{
                      fontFamily: "SF Pro Display B",
                      lineHeight: "normal",
                    }}
                  >
                    Do not miss out on this opportunity to receive mutual
                    rewards.
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div
                    className="md:text-[40px] text-xl text-center"
                    style={{
                      fontFamily: "SF Pro Display M",
                      lineHeight: "normal",
                    }}
                  >
                    <div>
                      <span className="md:w-[950px] w-full inline-block">
                        The steps are very simple – you just need to send them
                        the Kindertown app referral code.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReferralProgrames;
