// JoinUs.jsx
import React from "react";
import Privacy from "./Privacy";
import Header from "../assets/admin/header.png";
import Device from "../assets/admin/Device - Macbook Pro.png";
import Device2 from "../assets/admin/Device2.png";
import Macbook from "../assets/admin/macbook2.png";
import Macbook2 from "../assets/admin/Device.png";
import Ipad from "../assets/admin/ipad.png";
import icon1 from "../assets/admin/icon1.png";
import icon2 from "../assets/admin/icon2.png";
import icon3 from "../assets/admin/icon3.png";
import icon4 from "../assets/admin/icon4.png";
import icon5 from "../assets/admin/icon5.png";
import icon6 from "../assets/admin/icon6.png";
import icon7 from "../assets/admin/icon7.png";
import icon8 from "../assets/admin/icon8.png";
import icon9 from "../assets/admin/icon9.png";
import icon10 from "../assets/admin/icon10.png";
import icon11 from "../assets/admin/icon11.png";
import icon12 from "../assets/admin/icon12.png";
import icon13 from "../assets/admin/icon13.png";
import icon14 from "../assets/admin/icon14.png";
import icon15 from "../assets/admin/icon15.png";
import icon16 from "../assets/admin/icon16.png";
import icon17 from "../assets/admin/icon17.png";
import icon18 from "../assets/admin/icon18.png";
import icon19 from "../assets/admin/icon19.png";
import icon20 from "../assets/admin/icon20.png";
import icon21 from "../assets/admin/icon21.png";
import icon22 from "../assets/admin/icon22.png";
import icon23 from "../assets/admin/icon23.png";
import icon24 from "../assets/admin/icon24.png";
import CTLogo from "../assets/admin/ct-logo.png";
const Admin = () => {
  return (
    <>
      {/*CONTENT 1*/}
      <div className="w-full flex flex-col justify-center items-center pt-[150px]">
        <div className="flex flex-col justify-center items-center gap-[100px]">
          <div className="flex flex-col items-center">
            <img src={Header} alt="Header" className="w-[800px] h-[622px]" />
          </div>
          <div className="w-[1000px] flex flex-col justify-center items-center gap-[50px]">
            <div className="flex flex-col items-center">
              <div
                className="text-[80px]"
                style={{
                  fontFamily: "SF Pro Display B",
                  lineHeight: "normal",
                }}
              >
                Kindertown Admin
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div
                className="text-[32px] text-center"
                style={{
                  fontFamily: "SF Pro Display M",
                  lineHeight: "normal",
                }}
              >
                Kindertown is a management system specifically designed for
                kindergartens and early childhood education. It can be
                customized according to the specific conditions and needs of the
                kindergarten.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Havent try it yet */}

      {/*
      <div className="w-full flex flex-col gap-[200px] pt-[200px]">
        <div className="flex flex-col pl-[220px]">
          <div class="flex justify-end gap-[30px]">
            <div className="flex flex-col justify-center items-center ">
              <div
                className="text-[50px]"
                style={{ fontFamily: "SF Pro Display B", lineHeight: "normal" }}
              >
                Superb Interface
                <br />
                with Exceptional
                <br />
                User Experience
              </div>
            </div>

            <div className="flex flex-col relative">
              <img
                src={Device}
                alt="Device"
                className="w-[1008px] h-[591px] absolute right-0"
                style={{ objectFit: "cover", overflow: "hidden" }}
              />
            </div>
          </div>
        </div>
      </div>
    
              */}
      <div className="w-full flex flex-col gap-[200px] pt-[200px]">
        <div className="flex flex-col pl-[220px]">
          <div class="flex justify-center gap-[30px]">
            <div className="flex flex-col justify-center items-center w-[400px]">
              <div
                className="text-[50px]"
                style={{ fontFamily: "SF Pro Display B", lineHeight: "normal" }}
              >
                <div className="flex flex-col items-center">
                  <div className="flex items-center">Superb Interface</div>
                  <div className="flex items-center">with Exceptional</div>
                  <div className="flex items-center">User Experience</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-[1008px] h-[591px]">
              <img src={Device} alt="Device" />
            </div>
          </div>
        </div>
        <div className="flex flex-col pr-[220px]">
          <div class="flex justify-center gap-[30px]">
            <div className="flex flex-col w-[1008px] h-[591px]">
              <img src={Device2} alt="Device2" />
            </div>
            <div className="flex flex-col justify-center items-center w-[400px]">
              <div
                className="text-[50px]"
                style={{ fontFamily: "SF Pro Display B", lineHeight: "normal" }}
              >
                <div className="flex flex-col items-center">
                  <div className="flex items-center">Make school</div>
                  <div className="flex items-center">enrollment </div>
                  <div className="flex items-center">effortless, </div>
                  <div className="flex items-center">efficient, and </div>
                  <div className="flex items-center">time-saving. </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center gap-[200px] pt-[200px]">
        {/*CONTENT 4*/}
        <div className="w-[1000px] flex flex-col justify-center gap-[100px]">
          <div className="flex flex-col justify-center items-center">
            <div
              className="text-center"
              style={{
                fontFamily: "SF Pro Display M",
                fontSize: "40px",
                lineHeight: "normal",
              }}
            >
              <div className="flex flex-col items-center">
                <div className="flex items-center">
                  See how innovative management tools and schools are
                </div>
                <div className="flex items-center">
                  leveraging our technology to expand the possibilities of
                </div>
                <div className="flex items-center">school operations.</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img src={Macbook} alt="Macbook" className="w-[1000px]" />
          </div>
        </div>
        {/*CONTENT 5*/}
        <div className="w-[1000px] flex flex-col justify-center gap-[100px]">
          <div className="flex flex-col justify-center items-center">
            <div
              className="text-center"
              style={{
                fontFamily: "SF Pro Display M",
                fontSize: "40px",
                lineHeight: "normal",
              }}
            >
              <div className="flex flex-col items-center">
                <div className="flex items-center">
                  Schools and educators are making significant
                </div>
                <div className="flex items-center">
                  contributions to childrens’ academic achievements.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={Macbook2} alt="Macbook2" className="w-[1000px]" />
          </div>
        </div>
        {/*CONTENT 6*/}
        <div className="w-[1000px] flex flex-col justify-center gap-[100px]">
          <div className="flex flex-col justify-center items-center">
            <div
              className="text-center"
              style={{
                fontFamily: "SF Pro Display M",
                fontSize: "40px",
                lineHeight: "normal",
              }}
            >
              <div className="flex flex-col items-center">
                <div className="flex items-center">
                  We firmly believe that schools, teachers, and parents
                </div>
                <div className="flex items-center">
                  highly value the learning progress and journey of
                </div>
                <div className="flex items-center">
                  students. Our Kindertown management system is
                </div>
                <div className="flex items-center">
                  precisely the tool to achieve this goal, all without altering
                </div>
                <div className="flex items-center">
                  the classroom structure or increasing additional burden
                </div>
                <div className="flex items-center">
                  to students admission. Single cost with double effect, our
                </div>
                <div className="flex items-center">
                  system remains a smart choice to support your most
                </div>
                <div className="flex items-center">cherished priorities.</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={Ipad} alt="Macbook3" className="w-[1000px] h-[768px]" />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center py-[200px] gap-[200px]">
        {/*Content 7*/}
        <div className="w-full flex flex-col justify-center items-center  gap-[100px]">
          <div className="w-[1102px] flex flex-col justify-center items-center pl-[155px] pr-[154px]">
            <div className="w-[793px] flex flex-col justify-center items-center">
              <div
                className="text-[70px] text-center"
                style={{ fontFamily: "SF Pro Display B", lineHeight: "normal" }}
              >
                <div className="flex flex-col items-center">
                  <div className="flex justify-center items-center">
                    All thoughtful features
                  </div>
                  <div className="flex justify-center items-center">
                    are designed for schools.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1102px] flex flex-col justify-center items-center  gap-y-[66px]">
            {/*row 1*/}
            <div className="w-full grid grid-cols-8">
              <div className="flex flex-col justify-center items-center gap-4">
                <div>
                  <img src={icon1} alt="admission" />
                </div>
                <div
                  className="text-base w-[106px] text-center"
                  style={{
                    fontFamily: "SF Pro Display M",
                    lineHeight: "normal",
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div className="flex items-center">Admission</div>
                    <div className="flex items-center">& Enrollment</div>
                  </div>
                </div>
              </div>
              {/*Icon 2*/}
              <div className="flex flex-col justify-center items-center gap-4">
                <div>
                  <img src={icon2} alt="Student" />
                </div>
                <div
                  className="text-base w-[106px] text-center"
                  style={{
                    fontFamily: "SF Pro Display M",
                    lineHeight: "normal",
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div className="flex items-center">Student</div>
                    <div className="flex items-center">database</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-4">
                <div>
                  <img src={icon3} alt="Dashboard" />
                </div>
                <div
                  className="text-base w-[106px] text-center"
                  style={{
                    fontFamily: "SF Pro Display M",
                    lineHeight: "normal",
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div className="flex items-center">Statistic</div>
                    <div className="flex items-center">dashboard</div>
                  </div>
                </div>
              </div>
              {/*Icon 4*/}
              <div className="flex flex-col justify-center items-center gap-4">
                <div>
                  <img src={icon4} alt="Classroom" />
                </div>
                <div
                  className="text-base w-[106px] text-center"
                  style={{
                    fontFamily: "SF Pro Display M",
                    lineHeight: "normal",
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div className="flex items-center">Classroom</div>
                    <div className="flex items-center">management</div>
                  </div>
                </div>
              </div>
              {/*Icon 5*/}
              <div className="flex flex-col justify-center items-center gap-4">
                <div>
                  <img src={icon5} alt="Qualification" />
                </div>
                <div
                  className="text-base w-[106px] text-center"
                  style={{
                    fontFamily: "SF Pro Display M",
                    lineHeight: "normal",
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div className="flex items-center">Academic</div>
                    <div className="flex items-center">qualification</div>
                  </div>
                </div>
              </div>
              {/*Icon 6*/}
              <div className="flex flex-col justify-center items-center gap-4">
                <div>
                  <img src={icon6} alt="Check Log" />
                </div>
                <div
                  className="text-base w-[106px] text-center"
                  style={{
                    fontFamily: "SF Pro Display M",
                    lineHeight: "normal",
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div className="flex items-center">Student</div>
                    <div className="flex items-center">check log</div>
                  </div>
                </div>
              </div>
              {/*Icon 7*/}
              <div className="flex flex-col justify-center items-center gap-4">
                <div>
                  <img src={icon7} alt="Homework" />
                </div>
                <div
                  className="text-base w-[106px] text-center"
                  style={{
                    fontFamily: "SF Pro Display M",
                    lineHeight: "normal",
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div className="flex items-center">homework &</div>
                    <div className="flex items-center">doc upload</div>
                  </div>
                </div>
              </div>
              {/*Icon 8*/}
              <div className="flex flex-col justify-center items-center gap-4">
                <div>
                  <img src={icon8} alt="Download" />
                </div>
                <div
                  className="text-base w-[106px] text-center"
                  style={{
                    fontFamily: "SF Pro Display M",
                    lineHeight: "normal",
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div className="flex items-center">Download in</div>
                    <div className="flex items-center">Excel / PDF</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Row 2 */}
            <div className="w-full grid grid-cols-8">
              {/*Icon 1*/}
              <div className="flex flex-col justify-center items-center gap-4">
                <div>
                  <img src={icon9} alt="Calendar" />
                </div>
                <div
                  className="text-base w-[106px] text-center"
                  style={{
                    fontFamily: "SF Pro Display M",
                    lineHeight: "normal",
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div className="flex items-center">Calendar &</div>
                    <div className="flex items-center">schedule</div>
                  </div>
                </div>
              </div>
              {/*Icon 2*/}
              <div className="flex flex-col justify-center items-center gap-4">
                <div>
                  <img src={icon10} alt="Email" />
                </div>
                <div
                  className="text-base w-[106px] text-center"
                  style={{
                    fontFamily: "SF Pro Display M",
                    lineHeight: "normal",
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div className="flex items-center">Email</div>
                    <div className="flex items-center">notification</div>
                  </div>
                </div>
              </div>
              {/*Icon 3*/}
              <div className="flex flex-col justify-center items-center gap-4">
                <div>
                  <img src={icon11} alt="Announcement" />
                </div>
                <div
                  className="text-base w-[106px] text-center"
                  style={{
                    fontFamily: "SF Pro Display M",
                    lineHeight: "normal",
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div className="flex items-center">Create</div>
                    <div className="flex items-center">announcement</div>
                  </div>
                </div>
              </div>
              {/*Icon 4*/}
              <div className="flex flex-col justify-center items-center gap-4">
                <div>
                  <img src={icon12} alt="Community" />
                </div>
                <div
                  className="text-base w-[106px] text-center"
                  style={{
                    fontFamily: "SF Pro Display M",
                    lineHeight: "normal",
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div className="flex items-center">School</div>
                    <div className="flex items-center">community</div>
                  </div>
                </div>
              </div>
              {/*Icon 5*/}
              <div className="flex flex-col justify-center items-center gap-4">
                <div>
                  <img src={icon13} alt="Payment" />
                </div>
                <div
                  className="text-base w-[106px] text-center"
                  style={{
                    fontFamily: "SF Pro Display M",
                    lineHeight: "normal",
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div className="flex items-center">Payment</div>
                    <div className="flex items-center">gateway</div>
                  </div>
                </div>
              </div>
              {/*Icon 6*/}
              <div className="flex flex-col justify-center items-center gap-4">
                <div>
                  <img src={icon14} alt="Market" />
                </div>
                <div
                  className="text-base w-[106px] text-center"
                  style={{
                    fontFamily: "SF Pro Display M",
                    lineHeight: "normal",
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div className="flex items-center">School</div>
                    <div className="flex items-center">market</div>
                  </div>
                </div>
              </div>
              {/*Icon 7*/}
              <div className="flex flex-col justify-center items-center gap-4">
                <div>
                  <img src={icon15} alt="TimeTable" />
                </div>
                <div
                  className="text-base w-[106px] text-center"
                  style={{
                    fontFamily: "SF Pro Display M",
                    lineHeight: "normal",
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div className="flex items-center">Time table</div>
                    <div className="flex items-center">setup</div>
                  </div>
                </div>
              </div>
              {/*Icon 8*/}
              <div className="flex flex-col justify-center items-center gap-4">
                <div>
                  <img src={icon16} alt="Event" />
                </div>
                <div
                  className="text-base w-[106px] text-center"
                  style={{
                    fontFamily: "SF Pro Display M",
                    lineHeight: "normal",
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div className="flex items-center">Create event</div>
                    <div className="flex items-center">& activities</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Row 3 */}
            <div className="w-full grid grid-cols-8">
              {/*Icon 1*/}
              <div className="flex flex-col justify-center items-center gap-4">
                <div>
                  <img src={icon17} alt="Attendance" />
                </div>
                <div
                  className="text-base w-[106px] text-center"
                  style={{
                    fontFamily: "SF Pro Display M",
                    lineHeight: "normal",
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div className="flex items-center">attendance</div>
                    <div className="flex items-center">& report</div>
                  </div>
                </div>
              </div>
              {/*Icon 2*/}
              <div className="flex flex-col justify-center items-center gap-4">
                <div>
                  <img src={icon18} alt="Grading" />
                </div>
                <div
                  className="text-base w-[106px] text-center"
                  style={{
                    fontFamily: "SF Pro Display M",
                    lineHeight: "normal",
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div className="flex items-center">Grading</div>
                    <div className="flex items-center">scheme</div>
                  </div>
                </div>
              </div>
              {/*Icon 3*/}
              <div className="flex flex-col justify-center items-center gap-4">
                <div>
                  <img src={icon19} alt="daycare" />
                </div>
                <div
                  className="text-base w-[106px] text-center"
                  style={{
                    fontFamily: "SF Pro Display M",
                    lineHeight: "normal",
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div className="flex items-center">Daycare</div>
                    <div className="flex items-center">(Add-on)</div>
                  </div>
                </div>
              </div>
              {/*Icon 4*/}
              <div className="flex flex-col justify-center items-center gap-4">
                <div>
                  <img src={icon20} alt="bus" />
                </div>
                <div
                  className="text-base w-[106px] text-center"
                  style={{
                    fontFamily: "SF Pro Display M",
                    lineHeight: "normal",
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div className="flex items-center">Bus service</div>
                    <div className="flex items-center">(Add-on)</div>
                  </div>
                </div>
              </div>
              {/*Icon 5*/}
              <div className="flex flex-col justify-center items-center gap-4">
                <div>
                  <img src={icon21} alt="CCTV" />
                </div>
                <div
                  className="text-base w-[106px] text-center"
                  style={{
                    fontFamily: "SF Pro Display M",
                    lineHeight: "normal",
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div className="flex items-center">Live CCTV</div>
                    <div className="flex items-center">(Add-on)</div>
                  </div>
                </div>
              </div>
              {/*Icon 6*/}
              <div className="flex flex-col justify-center items-center gap-4">
                <div>
                  <img src={icon22} alt="SMS" />
                </div>
                <div
                  className="text-base w-[106px] text-center"
                  style={{
                    fontFamily: "SF Pro Display M",
                    lineHeight: "normal",
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div className="flex items-center">SMS Service</div>
                    <div className="flex items-center">(Add-on)</div>
                  </div>
                </div>
              </div>
              {/*Icon 7*/}
              <div className="flex flex-col justify-center items-center gap-4">
                <div>
                  <img src={icon23} alt="homework" />
                </div>
                <div
                  className="text-base w-[106px] text-center"
                  style={{
                    fontFamily: "SF Pro Display M",
                    lineHeight: "normal",
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div className="flex items-center">e-Homework</div>
                    <div className="flex items-center">(Add-on)</div>
                  </div>
                </div>
              </div>
              {/*Icon 8*/}
              <div className="flex flex-col justify-center items-center gap-4">
                <div>
                  <img src={icon24} alt="exam" />
                </div>
                <div
                  className="text-base w-[106px] text-center"
                  style={{
                    fontFamily: "SF Pro Display M",
                    lineHeight: "normal",
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div className="flex items-center">e-Exam</div>
                    <div className="flex items-center">(Add-on)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Content 8*/}
        <div className="w-[1000px] flex flex-col gap-[50px]">
          <div className="flex flex-col justify-center items-center">
            <div className="relative flex flex-col md:w-[400px] md:h-[400px] md:rounded-[50px] bg-gradient-to-t from-[#ADADAD] to-[#F9F9F9] pt-[53px] pb-[61px] pl-[34px] pr-[33px] gap-[59px]">
              <div className="flex flex-col justify-center items-center">
                <img
                  src={CTLogo}
                  alt="CTLogo"
                  className="w-[160px] h-[106px]"
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-[40px]">
                <div className="flex flex-col justify-center items-center">
                  <div
                    className="text-[24px] inline-block"
                    style={{
                      fontFamily: "SF Pro Display B",
                      lineHeight: "normal",
                    }}
                  >
                    CT PRODUCT {""}
                    <span className=" bg-black  md:w-[77px] h-[29px] md:rounded-[4px] text-white px-[5.6px]">
                      CARE
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div
                    className="text-[24px] inline-block text-center"
                    style={{
                      fontFamily: "SF Pro Display R",
                      lineHeight: "normal",
                    }}
                  >
                    <div className="flex items-center justify-center ">
                      Free provide face to face training
                    </div>
                    <div className="flex items-center justify-center ">
                      and online tutorials.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Privacy />
    </>
  );
};

export default Admin;
