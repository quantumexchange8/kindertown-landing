// JoinUs.jsx
import React from "react";
import Privacy from "./Privacy";
import Header from "../assets/admin/header.svg";
import Device from "../assets/admin/Device - Macbook Pro.svg";
import Macbook from "../assets/admin/macbook2.svg";
import Macbook2 from "../assets/admin/Device.svg";
import Ipad from "../assets/admin/ipad.svg";
import icon1 from "../assets/admin/icon1.svg";
import icon2 from "../assets/admin/icon2.svg";
import icon3 from "../assets/admin/icon3.svg";
import icon4 from "../assets/admin/icon4.svg";
import icon5 from "../assets/admin/icon5.svg";
import icon6 from "../assets/admin/icon6.svg";
import icon7 from "../assets/admin/icon7.svg";
import icon8 from "../assets/admin/icon8.svg";
import icon9 from "../assets/admin/icon9.svg";
import icon10 from "../assets/admin/icon10.svg";
import icon11 from "../assets/admin/icon11.svg";
import icon12 from "../assets/admin/icon12.svg";
import icon13 from "../assets/admin/icon13.svg";
import icon14 from "../assets/admin/icon14.svg";
import icon15 from "../assets/admin/icon15.svg";
import icon16 from "../assets/admin/icon16.svg";
import icon17 from "../assets/admin/icon17.svg";
import icon18 from "../assets/admin/icon18.svg";
import icon19 from "../assets/admin/icon19.svg";
import icon20 from "../assets/admin/icon20.svg";
import icon21 from "../assets/admin/icon21.svg";
import icon22 from "../assets/admin/icon22.svg";
import icon23 from "../assets/admin/icon23.svg";
import icon24 from "../assets/admin/icon24.svg";
const Admin = () => {
  return (
    <>
      {/*CONTENT 1*/}
      <div className="w-full flex flex-col justify-center items-center pt-[150px]">
        <div className="flex flex-col justify-center items-center gap-[100px]">
          <div className="flex flex-col items-center">
            <img
              src={Header}
              alt="Header"
              className="w-[800px] h-[622px]"
            ></img>
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

      {/*       <div className="w-full flex flex-col gap-[200px] pt-[200px]">
        <div className="flex flex-col pl-[220px]">
          <div class="flex justify-end gap-[30px]">
            <div className="flex flex-col justify-center items-center">
              <div
                className="text-[50px]"
                style={{ fontFamily: "SF Pro Display B", lineHeight: "normal" }}
              >
                Superb Interface with Exceptional User Experience
              </div>
            </div>

            <div className="flex flex-col w-[1008px] h-[591px]">
              <img src={Device} alt="Device" />
            </div>
          </div>
        </div>
      </div>*/}

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
            <img src={Macbook} alt="Macbook" className="w-[1000px]"></img>
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
            <img src={Macbook2} alt="Macbook" className="w-[1000px]"></img>
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
            <img
              src={Ipad}
              alt="Macbook"
              className="w-[1000px] h-[768px]"
            ></img>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center pt-[200px] px-[169px]">
        {/*CONTENT 7*/} {/*I havent finish fixing the gap yet */}
        <div className="w-[1102px] flex flex-col justify-center items-center gap-[100px]">
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
          <div className="w-full flex flex-col justify-center items-center gap-[65px]">
            {/*ROW 1 */}
            <div className="flex justify-between items-center gap-[50px]">
              {/*Icon 1*/}
              <div className="flex flex-col justify-center items-center gap-4 w-[107px]">
                <div>
                  <img src={icon1}></img>
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
              <div className="flex flex-col justify-center items-center gap-4 w-[76px]">
                <div>
                  <img src={icon2}></img>
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
              {/*Icon 3*/}
              <div className="flex flex-col justify-center items-center gap-4 w-[84px]">
                <div>
                  <img src={icon3}></img>
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
              <div className="flex flex-col justify-center items-center gap-4 w-[107px]">
                <div>
                  <img src={icon4}></img>
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
              <div className="flex flex-col justify-center items-center gap-4 w-[98px]">
                <div>
                  <img src={icon5}></img>
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
              <div className="flex flex-col justify-center items-center gap-4 w-[76px]">
                <div>
                  <img src={icon6}></img>
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
              <div className="flex flex-col justify-center items-center gap-4 w-[98px]">
                <div>
                  <img src={icon7}></img>
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
              <div className="flex flex-col justify-center items-center gap-4 w-[97px]">
                <div>
                  <img src={icon8}></img>
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
            {/*ROW 2 */}
            <div className="flex justify-around items-center gap-[50px]">
              {/*Icon 1*/}
              <div className="flex flex-col justify-center items-center gap-4 w-[87px]">
                <div>
                  <img src={icon9}></img>
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
              <div className="flex flex-col justify-center items-center gap-4 w-[90px]">
                <div>
                  <img src={icon10}></img>
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
              <div className="flex flex-col justify-center items-center gap-4 w-[117px]">
                <div>
                  <img src={icon11}></img>
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
              <div className="flex flex-col justify-center items-center gap-4 w-[88px]">
                <div>
                  <img src={icon12}></img>
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
              <div className="flex flex-col justify-center items-center gap-4 w-[69px]">
                <div>
                  <img src={icon13}></img>
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
              <div className="flex flex-col justify-center items-center gap-4 w-[56px]">
                <div>
                  <img src={icon14}></img>
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
              <div className="flex flex-col justify-center items-center gap-4 w-[83px]">
                <div>
                  <img src={icon15}></img>
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
              <div className="flex flex-col justify-center items-center gap-4 w-[101px]">
                <div>
                  <img src={icon16}></img>
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
            {/*ROW 3 */}
            <div className="flex justify-between items-center gap-[50px]">
              {/*Icon 1*/}
              <div className="flex flex-col justify-center items-center gap-4">
                <div>
                  <img src={icon17}></img>
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
              {/*Icon 3*/}
              <div className="flex flex-col justify-center items-center gap-4">
                <div>
                  <img src={icon18}></img>
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
                  <img src={icon19}></img>
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
                  <img src={icon20}></img>
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
                  <img src={icon21}></img>
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
                  <img src={icon22}></img>
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
                  <img src={icon23}></img>
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
                  <img src={icon24}></img>
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
      </div>
    </>
  );
};

export default Admin;
