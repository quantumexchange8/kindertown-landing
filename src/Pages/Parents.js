// JoinUs.jsx
import React from "react";
import Privacy from "./Privacy";
import Phone1 from "../assets/parent/phone1.svg";
import Phone2 from "../assets/parent/phone2.svg";
import Phone3 from "../assets/parent/phone3.svg";
import Phone4 from "../assets/parent/phone4.svg";
import Phone5 from "../assets/parent/phone5.svg";
import Phone6 from "../assets/parent/phone6.svg";
import Phone7 from "../assets/parent/phone7.svg";
import Jam1 from "../assets/parent/jam2.png";
import Jam2 from "../assets/parent/jam1.png";
import Icon from "../assets/parent/small icon.svg";
import Arrow from "../assets/parent/arrow.svg";
const Parent = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center py-[200px] px-[320px]">
        {/*CONTENT 1 */}
        <div className="md:w-[1000px]  flex  md:flex-col items-center  gap-[100px]">
          <div className="w-full px-[100px] ">
            <div className="relative md:w-[800px] md:h-[660px] md:rounded-[50px] bg-gradient-to-t from-[#FFDD98]  via-[#FFEABE] to-[#FFF7E5] pt-[87px] pb-[88px] pl-[94px] pr-[58px]">
              <img
                src={Arrow}
                alt="Arrow"
                className="absolute z-0 top-[299px] bottom-[207px] left-[400px] right-[127px]"
              />

              {/* Small Image on top right */}
              <div className="relative">
                <img
                  src={Icon}
                  alt="Small Image"
                  className="w-[200px] h-[200px] absolute top-0 right-0 max-w-[calc(100% - 94px)] max-h-[calc(100% - 87px)]"
                />
              </div>

              {/* Text on bottom left */}
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
            <div style={{ fontSize: "80px", fontFamily: "SF Pro Bold" }}>
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

      <div className="w-full flex flex-col justify-center items-center px-[220px]">
        <div className="w-[1000px] gap-[100px] flex flex-col justify-center items-center">
          {/*CONTENT 2 */}
          <div className="w-full flex items-center gap-[66px]">
            <div className="flex flex-col h-[711px] md:max-w-[350px]">
              <img src={Phone1}></img>
            </div>

            <div className="flex flex-col items-center">
              <div
                className="text-center text-[50px] w-full text-[#F67F00]"
                style={{ fontFamily: "SF Pro Display B" }}
              >
                <div className="flex items-center justify-center">
                  Designed for the future.
                </div>
                <div className="flex items-center justify-center">
                  Designed for
                </div>
                <div className="flex items-center justify-center">
                  kindergarten.
                </div>
              </div>
            </div>
          </div>
          {/*CONTENT 3 */}
          <div className="w-full flex items-center gap-[66px]">
            <div className="flex flex-col items-center">
              <div
                className="text-center text-[50px] w-full text-[#64697A]"
                style={{ fontFamily: "SF Pro Display B" }}
              >
                <div className="flex items-center justify-center">
                  Build for Learning
                </div>
                <div className="flex items-center justify-center">
                  Connecting and Caring
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[350px] h-[711px]">
              <img src={Phone2}></img>
            </div>
          </div>
          {/*CONTENT 4 */}
          <div className="w-full flex items-center gap-[66px]">
            <div className="flex flex-col w-[350px] h-[711px]">
              <img src={Phone3}></img>
            </div>

            <div className="flex flex-col items-center">
              <div
                className="text-center text-[50px] w-full text-[#003A91]"
                style={{ fontFamily: "SF Pro Display B" }}
              >
                <div className="flex items-center justify-center">
                  Witness the boundless
                </div>
                <div className="flex items-center justify-center">
                  imagination of a child.
                </div>
              </div>
            </div>
          </div>
          {/*CONTENT 5 */}
          <div className="w-full flex items-center gap-[66px]">
            <div className="w-[584px] flex flex-col items-center">
              <div
                className="text-center text-[50px] w-full text-[#FF0001]"
                style={{ fontFamily: "SF Pro Display B" }}
              >
                <div className="flex items-center justify-center">
                  Ignite the learning
                </div>
                <div className="flex items-center justify-center">
                  passion in every student.
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[350px]">
              <img src={Phone4}></img>
            </div>
          </div>
          {/*CONTENT 6 */}
          <div className="w-full flex items-center gap-[66px]">
            <div className="flex flex-col w-[350px]">
              <img src={Phone5}></img>
            </div>
            <div className="flex flex-col items-center w-[584px]">
              <div
                className="text-center text-[50px] w-full text-[#4D9138]"
                style={{ fontFamily: "SF Pro Display B" }}
              >
                <div className="flex items-center justify-center">
                  Share little moment in the
                </div>
                <div className="flex items-center justify-center">
                  education community.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center pt-[300px] pb-[200px] px-[220px] gap-[150px]">
        <div className="w-[1000px]  flex flex-col justify-center items-center ">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col items-center">
              <div
                className="text-center text-[60px]"
                style={{ fontFamily: "SF Pro Display B", lineHeight: "normal" }}
              >
                <div className="flex items-center justify-center">
                  All the attractive widgets you love.
                </div>
                <div className="flex items-center justify-center">
                  And, even more to discover.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[1000px]  flex flex-col justify-center items-center pr-[102px] pl-[99px]">
          <div className="flex justify-around items-end gap-[40px]">
            <div className="flex flex-col">
              <img src={Jam2} alt="Jam2" className=" w-[154px] h-[255]" />
            </div>
            <div className="flex flex-col flex-shrink">
              <img src={Jam1} alt="Jam1" className=" w-[154px] h-[255]" />
            </div>
            <div className="flex flex-col justify-center items-center w-[185px] h-[375]">
              <img src={Phone7} alt="Phone7" />
            </div>
            <div className="flex flex-col justify-center items-center w-[185px] h-[375]">
              <img src={Phone6} alt="Phone6" />
            </div>
          </div>
        </div>
      </div>
      <Privacy />
    </>
  );
};

export default Parent;
