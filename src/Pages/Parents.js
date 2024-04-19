// JoinUs.jsx
import React from "react";
import Privacy from "./Privacy";
import Phone1 from "../assets/parent/phone1.png";
import Phone2 from "../assets/parent/phone2.png";
import Phone3 from "../assets/parent/phone3.png";
import Phone4 from "../assets/parent/phone4.png";
import Phone5 from "../assets/parent/phone5.png";
import Phone6 from "../assets/parent/phone6.png";
import Phone7 from "../assets/parent/phone7.png";
import Jam1 from "../assets/parent/jam2.png";
import Jam2 from "../assets/parent/jam1.png";
import Icon from "../assets/parent/icon.png";
import Arrow from "../assets/parent/arrow.svg";

const Parent = () => {
  return (
    <>
      <div className="w-full flex flex-col md:py-[200px] pt-[80px] pb-[100px] justify-center items-center">
        <div className="w-full md:max-w-[1000px] flex flex-col md:gap-[200px] gap-[100px]">
          <div className="w-full md:px-0 px-5 flex flex-col gap-[50px] md:gap-[100px] items-center">
            {/*Content 1*/}
            <div className="relative w-full md:w-[800px] md:h-[660px] h-[273px] md:rounded-[50px] rounded-[20px]  bg-gradient-to-t from-[#FFDD98]  via-[#FFEABE] to-[#FFF7E5]">
              <div className="absolute md:top-[87px] top-[37px] md:right-[80px] right-[30px]">
                <img
                  src={Icon}
                  alt="Icon"
                  className="md:w-[200px] md:h-[200px] w-[100px] h-[100px]"
                />
              </div>
              <div className="absolute md:bottom-[150px] md:right-[128px] bottom-[70px] right-[80px]">
                <img
                  src={Arrow}
                  alt="arrow"
                  className="md:w-[210px] md:h-[266px] w-[100px]"
                />
              </div>
              <div className="absolute md:bottom-[88px] md:left-[94px] md:right-[175px] left-[30px] right-[84px] bottom-[25px] md:w-[531px] w-[239px]">
                <div
                  className="md:text-[80px] text-4xl text-[#0CA39B]"
                  style={{
                    fontFamily: "SF Pro Display B",
                    lineHeight: "normal",
                  }}
                >
                  <div>Bring an</div>
                  <div>expert</div>
                  <div>to your school.</div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col md:gap-[50px] gap-[30px]">
              <div className="flex flex-col justify-center items-center">
                <div
                  className="text-center md:text-[80px] text-4xl"
                  style={{
                    fontFamily: "SF Pro Display B",
                    lineHeight: "normal",
                  }}
                >
                  <div className="hidden md:flex"> Kindertown Parents</div>
                  <div className="md:hidden flex flex-col">
                    <div>Kindertown</div>
                    <div> Parents</div>
                  </div>
                </div>
              </div>

              <div className="hidden md:flex flex-col justify-center items-center">
                <div
                  className="text-center md:text-[32px] text-xl"
                  style={{
                    fontFamily: "SF Pro Display M",
                    lineHeight: "normal",
                  }}
                >
                  {/*Desktop*/}
                  <div className="hidden md:flex flex-wrap items-center justify-center ">
                    <div>A powerful platform that allows you to seamlessly</div>
                    <div>
                      monitor your child's activities at any time, from
                      anywhere.
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:hidden flex flex-col justify-center items-center">
                <div
                  className="text-center md:text-[32px] text-xl"
                  style={{
                    fontFamily: "SF Pro Display Semibold",
                    lineHeight: "normal",
                  }}
                >
                  A powerful platform that allows you to seamlessly monitor your
                  child's activities at any time, from anywhere.
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col md:gap-[300px] gap-[100px]  md:px-0 pl-[31px]  pr-8 ">
            <div className="w-full flex flex-col gap-[100px]">
              {/*CONTENT 2 */}
              <div className="w-full flex justify-center items-center md:gap-[66px] gap-[26px]">
                <div className="flex flex-col">
                  <img
                    src={Phone1}
                    alt="phone1"
                    className="  md:h-[711px] md:w-[350px] w-[150px]"
                  />
                </div>

                <div className="md:flex flex-col items-center">
                  <div
                    className="text-center md:text-[50px] text-xl w-full text-[#F67F00]"
                    style={{
                      fontFamily: "SF Pro Display B",
                      lineHeight: "normal",
                    }}
                  >
                    {/*Web Version*/}
                    <div className="hidden md:flex flex-col justify-center items-center">
                      <div className="md:h-14">Designed for the future.</div>
                      <div className="md:h-14">Designed for</div>
                      <div className="md:h-14">kindergarten.</div>
                    </div>
                    {/*Mobile Version*/}
                    <div className="md:hidden flex flex-col justify-center items-center">
                      <div> Designed for </div>
                      <div> the future. </div>
                      <div> Designed for</div>
                      <div> kindergarten. </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*CONTENT 3 */}
              <div className="w-full flex items-center justify-center md:gap-[66px] gap-[26px]">
                <div className="flex flex-col items-center">
                  <div
                    className="text-center md:text-[50px] text-xl w-full text-[#64697A]"
                    style={{
                      fontFamily: "SF Pro Display B",
                      lineHeight: "normal",
                    }}
                  >
                    <div className="hidden md:flex flex-col justify-center items-center ">
                      <div className="md:h-14">Build for Learning</div>
                      <div className="md:h-14">Connecting and Caring</div>
                    </div>
                    <div className="md:hidden flex flex-col justify-center items-center ">
                      <div>Build for</div>
                      <div> Learning</div>
                      <div>Connecting</div> <div>and Caring</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <img
                    src={Phone2}
                    alt="phone2"
                    className=" md:w-[350px] md:h-[711px] w-[150px]"
                  />
                </div>
              </div>
              {/*CONTENT 4 */}
              <div className="w-full flex items-center justify-center md:gap-[66px] gap-[26px]">
                <div className="flex flex-col ">
                  <img
                    src={Phone3}
                    alt="phone3"
                    className="md:w-[350px] md:h-[711px] w-[150px]"
                  />
                </div>

                <div className="flex flex-col items-center">
                  <div
                    className="text-center md:text-[50px] text-xl w-full text-[#003A91]"
                    style={{
                      fontFamily: "SF Pro Display B",
                      lineHeight: "normal",
                    }}
                  >
                    <div className="hidden md:flex flex-col items-center justify-center">
                      <div className="md:h-14">Witness the boundless</div>
                      <div className="md:h-14">imagination of a child.</div>
                    </div>
                    <div className="md:hidden flex flex-col items-center justify-center">
                      <div>Witness</div>
                      <div>the boundless</div>
                      <div>imagination</div>
                      <div>of a child.</div>
                    </div>
                  </div>
                </div>
              </div>
              {/*CONTENT 5 */}
              <div className="w-full flex items-center justify-center md:gap-[66px] gap-[26px]">
                <div className="flex flex-col items-center">
                  <div
                    className="text-center md:text-[50px] text-xl w-full text-[#FF0001]"
                    style={{
                      fontFamily: "SF Pro Display B",
                      lineHeight: "normal",
                    }}
                  >
                    {/*Desktop*/}
                    <div className="hidden md:flex items-center justify-center md:h-14">
                      Ignite the learning
                    </div>
                    <div className="hidden md:flex items-center justify-center md:h-14">
                      passion in every student.
                    </div>

                    {/*Mobile*/}
                    <div className="md:hidden flex flex-col items-center justify-center">
                      <div> Ignite the</div>
                      <div> learning</div>
                      <div> passion in</div>
                      <div>every student</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ">
                  <img
                    src={Phone4}
                    alt="phone4"
                    className="md:w-[350px] md:h-[711px] w-[150px]"
                  />
                </div>
              </div>
              {/*CONTENT 6 */}
              <div className="w-full flex items-center justify-center md:gap-[66px] gap-[26px]">
                <div className="flex flex-col">
                  <img
                    src={Phone5}
                    alt="phone5"
                    className=" md:w-[350px] md:h-[711px] w-[150px]"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <div
                    className="text-center md:text-[50px] text-xl w-full text-[#4D9138]"
                    style={{
                      fontFamily: "SF Pro Display B",
                      lineHeight: "normal",
                    }}
                  >
                    {/*Desktop*/}
                    <div className="hidden md:flex flex-col items-center justify-center">
                      <div className="md:h-14">Share little moment in the</div>
                      <div className="md:h-14">education community.</div>
                    </div>
                    {/*Mobile*/}
                    <div className="md:hidden flex flex-col items-center justify-center">
                      <div>Share little</div>
                      <div>moment in the</div>
                      <div>education</div>
                      <div>community.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col md:gap-[150px] gap-[50px]">
              <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col items-center">
                  <div
                    className="text-center md:text-[60px] text-2xl"
                    style={{
                      fontFamily: "SF Pro Display B",
                      lineHeight: "normal",
                    }}
                  >
                    <div className="md:hidden flex flex-col items-center justify-center">
                      <div>All the attractive widgets</div>
                      <div>you love. And, even more</div>
                      <div>to discover.</div>
                    </div>
                    <div className="hidden md:flex items-center justify-center">
                      All the attractive widgets you love.
                    </div>
                    <div className="hidden md:flex items-center justify-center">
                      And, even more to discover.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-around items-end md:gap-[40px] gap-4">
                <div className="flex flex-col">
                  <img
                    src={Jam2}
                    alt="Jam2"
                    className=" md:w-[154px] md:h-[255]"
                  />
                </div>
                <div className="flex flex-col flex-shrink">
                  <img
                    src={Jam1}
                    alt="Jam1"
                    className=" md:w-[154px] md:h-[255]"
                  />
                </div>
                <div className="flex flex-col justify-center items-center md:w-[185px] md:h-[375]">
                  <img src={Phone7} alt="Phone7" />
                </div>
                <div className="flex flex-col justify-center items-center md:w-[185px] md:h-[375]">
                  <img src={Phone6} alt="Phone6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*********Coding lama************/}

      {/*CONTENT 1 */}
      {/*
      <div className="w-full flex flex-col justify-center items-center py-[200px] px-[320px]">
    
        <div className="md:w-[1000px]  flex  md:flex-col items-center  gap-[100px]">
          <div className="w-full px-[100px] ">
            <div className="relative md:w-[800px] md:h-[660px] md:rounded-[50px] bg-gradient-to-t from-[#FFDD98]  via-[#FFEABE] to-[#FFF7E5] pt-[87px] pb-[88px] pl-[94px] pr-[58px]">
              <img
                src={Arrow}
                alt="Arrow"
                className="absolute z-0 top-[299px] bottom-[207px] left-[400px] right-[127px]"
              />

           
              <div className="relative">
                <img
                  src={Icon}
                  alt="icon"
                  className="w-[200px] h-[200px] absolute top-0 right-0 max-w-[calc(100% - 94px)] max-h-[calc(100% - 87px)]"
                />
              </div>

              
              <div
                className="absolute bottom-[88px] left-[94px] text-[80px] text-[#0CA39B]"
                style={{ fontFamily: "SF Pro Display B", lineHeight: "normal" }}
              >
                <div>Bring an</div>
                <div>expert</div>
                <div>to your school.</div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center gap-[50px]">
            <div style={{ fontSize: "80px", fontFamily: "SF Pro Display B" }}>
              Kindertown Parents
            </div>
            <div className="flex items-center">
              <div
                className="text-[32px]"
                style={{
                  fontFamily: "SF Pro Display M",
                  lineHeight: "normal",
                }}
              >
                <div className="flex items-center justify-center ">
                  A powerful platform that allows you to seamlessly
                </div>
                <div className="flex items-center justify-center">
                  monitor your child's activities at any time, from anywhere.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
*/}

      <Privacy />
    </>
  );
};

export default Parent;
