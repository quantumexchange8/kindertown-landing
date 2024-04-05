// JoinUs.jsx
import React from "react";
import Privacy from "./Privacy";
import Header from "../assets/admin/header.png";

import Macbook from "../assets/admin/macbook2.png";
import Macbook2 from "../assets/admin/Device.png";
import Ipad from "../assets/admin/ipad.png";
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
import CTLogo from "../assets/admin/ct-logo.svg";
const Admin = () => {
  return (
    <>
      {/*CONTENT 1*/}
      <div className="w-full flex flex-col justify-center items-center md:pt-[150px] pt-[80px]  md:px-[220px] px-[20px]">
        <div className="w-full md:w-[1000px] flex flex-col justify-center items-center md:gap-[100px] gap-[50px]">
          <div className="flex flex-col items-center">
            <img
              src={Header}
              alt="Header"
              className="md:w-[800px] md:h-[622px]"
            />
          </div>
          <div className="w-full flex flex-col md:px-0 pl-[11px] pr-[12px] ">
            <div className="w-full md:w-[1000px] flex flex-col justify-center items-center md:gap-[50px] gap-[30px]">
              <div className="flex flex-col items-center">
                <div
                  className="md:text-[80px] text-4xl"
                  style={{
                    fontFamily: "SF Pro Display B",
                    lineHeight: "normal",
                  }}
                >
                  <div className="hidden md:flex">Kindertown Admin</div>
                  <div className="md:hidden flex flex-col items-center">
                    <div> Kindertown</div>
                    <div> Admin</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div
                  className="md:text-[32px] text-xl text-center"
                  style={{
                    fontFamily: "SF Pro Display M",
                    lineHeight: "normal",
                  }}
                >
                  Kindertown is a management system specifically designed for
                  kindergartens and early childhood education. It can be
                  customized according to the specific conditions and needs of
                  the kindergarten.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*
      <div className="w-full flex flex-col justify-center items-center md:pt-[150px] pt-[80px]  pl-[220px]">
        <div className="w-full flex justify-end items-center gap-[30px] ">
          <div className="flex flex-col ">
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
          <div className="flex flex-col justify-end">
            <img src={Device} alt="Header" className="w-full" />
          </div>
        </div>
      </div>
    */}

      <div className="w-full flex flex-col md:gap-[200px] gap-[100px] pt-[100px] md:pt-[200px]">
        {/* Content 2  */}
        <div className="w-full flex md:flex-row flex-col md:pl-[220px] pl-[31px] gap-[30px]">
          <div className="flex flex-col w-full justify-center items-center">
            <div
              className="md:text-[50px] text-xl w-full md:w-[400px]"
              style={{ fontFamily: "SF Pro Display B", lineHeight: "normal" }}
            >
              <div
                className="md:text-[50px] text-xl"
                style={{ fontFamily: "SF Pro Display B", lineHeight: "normal" }}
              >
                <div className="hidden md:flex flex-col items-center">
                  <div className="flex items-center">Superb Interface</div>
                  <div className="flex items-center">with Exceptional</div>
                  <div className="flex items-center">User Experience</div>
                </div>
                <div className="md:hidden flex flex-col items-center">
                  <div className="flex items-center">Superb Interface with</div>
                  <div className="flex items-center">
                    Exceptional User Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full overflow-hidden justify-end">
            <div className="md:w-[1008px] md:h-[591px]  w-full h-[207px] relative bg-hero-image bg-cover bg-no-repeat md:left-[10%] left-[20%]"></div>
          </div>
        </div>

        {/* Content 3 */}
        <div className="w-full flex md:flex-row flex-col md:pr-[220px] pr-[31px] gap-[30px]">
          <div className="flex flex-col w-full overflow-hidden justify-start">
            <div className="md:w-[1008px] md:h-[591px]  w-full h-[207px] relative bg-hero-image2 bg-cover bg-no-repeat overflow-hidden md:order-none order-last md:right-[20%] right-[30%]"></div>
          </div>
          <div className="flex flex-col w-full md:order-last order-first md:pl-0 pl-[31px] justify-center items-center">
            <div
              className="md:text-[50px] text-xl w-full md:w-[50%]"
              style={{ fontFamily: "SF Pro Display B", lineHeight: "normal" }}
            >
              <div
                className="md:text-[50px] text-xl"
                style={{ fontFamily: "SF Pro Display B", lineHeight: "normal" }}
              >
                <div className="hidden md:flex flex-col items-center">
                  <div className="flex items-center">Make school</div>
                  <div className="flex items-center">enrollment </div>
                  <div className="flex items-center">effortless, </div>
                  <div className="flex items-center">efficient, and </div>
                  <div className="flex items-center">time-saving. </div>
                </div>
                <div className="md:hidden flex flex-col items-center">
                  <div className="flex items-center">
                    Make school enrollment
                  </div>
                  <div className="flex items-center">
                    effortless, efficient, and
                  </div>
                  <div className="flex items-center">time-saving. </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*content 2
        
        <div className="flex md:flex-row flex-col md:pl-[220px] pl-[31px] gap-[30px]">
    
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center pr-[32px] md:pr-0">
            <div
              className="md:text-[50px] text-xl w-full md:w-[400px]"
              style={{ fontFamily: "SF Pro Display B", lineHeight: "normal" }}
            >
              <div
                className="md:text-[50px] text-xl"
                style={{ fontFamily: "SF Pro Display B", lineHeight: "normal" }}
              >
                <div className="hidden md:flex flex-col items-center">
                  <div className="flex items-center">Superb Interface</div>
                  <div className="flex items-center">with Exceptional</div>
                  <div className="flex items-center">User Experience</div>
                </div>
                <div className="md:hidden flex flex-col items-center">
                  <div className="flex items-center">Superb Interface with</div>
                  <div className="flex items-center">
                    Exceptional User Experience
                  </div>
                </div>
              </div>
            </div>
          </div>

       
          <div className="flex flex-col w-[1008px] overflow-hidden justify-end">
            <div className="md:w-[1008px] md:h-[591px] w-full h-[200px] flex flex-col bg-hero-image bg-left-custom bg-cover  bg-no-repeat overflow-hidden"></div>
          </div>
        </div>
        content 3
        <div className="flex md:flex-row flex-col md:pr-[220px] pr-[32px] gap-[30px]">

          <div className="w-full md:w-1/2  flex flex-col overflow-hidden">
            <div className="md:w-[1008px] md:h-[591px] w-full h-[207px] flex flex-col bg-hero-image2 md:bg-left-custom bg-cover bg-no-repeat overflow-hidden md:order-none order-last"></div>
          </div>

          <div className="md:w-1/2 w-full flex flex-col justify-center items-center md:order-last order-first md:pl-0 pl-[31px]">
            <div
              className="md:text-[50px] text-xl w-full md:w-[50%]"
              style={{ fontFamily: "SF Pro Display B", lineHeight: "normal" }}
            >
              <div
                className="md:text-[50px] text-xl"
                style={{ fontFamily: "SF Pro Display B", lineHeight: "normal" }}
              >
                <div className="hidden md:flex flex-col items-center">
                  <div className="flex items-center">Make school</div>
                  <div className="flex items-center">enrollment </div>
                  <div className="flex items-center">effortless, </div>
                  <div className="flex items-center">efficient, and </div>
                  <div className="flex items-center">time-saving. </div>
                </div>
                <div className="md:hidden flex flex-col items-center">
                  <div className="flex items-center">
                    Make school enrollment
                  </div>
                  <div className="flex items-center">
                    effortless, efficient, and
                  </div>
                  <div className="flex items-center">time-saving. </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        */}
      </div>

      {/*CONTENT 2 & CONTENT 3*/}
      {/*
      <div className="w-full flex flex-col md:gap-[200px] gap-[100px] pt-[100px] md:pt-[200px]">
        <div className="flex flex-col md:pl-[220px] pl-[31px]">
          <div className="flex md:flex-row flex-wrap justify-center gap-[30px] ">
            <div className="flex flex-col justify-center items-center w-[400px]">
              <div
                className="md:text-[50px] text-xl"
                style={{ fontFamily: "SF Pro Display B", lineHeight: "normal" }}
              >
                <div className="hidden md:flex flex-col items-center">
                  <div className="flex items-center">Superb Interface</div>
                  <div className="flex items-center">with Exceptional</div>
                  <div className="flex items-center">User Experience</div>
                </div>
                <div className="md:hidden flex flex-col items-center">
                  <div className="flex items-center">Superb Interface with</div>
                  <div className="flex items-center">
                    Exceptional User Experience
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:w-[1008px] md:h-[591px]">
              <img src={Device} alt="Device" />
            </div>
          </div>
        </div>

        <div className="flex flex-col pr-[220px]">
          <div className="flex justify-center gap-[30px]">
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
  */}
      <div className="w-full flex flex-col justify-center items-center md:gap-[200px] gap-[100px] md:pt-[200px] pt-[100px] md:pl-[221px] md:pr-[219px] px-[20px]">
        {/*CONTENT 4*/}
        <div className="w-full md:w-[1000px] flex flex-col justify-center md:gap-[100px] gap-[30px]">
          <div className="flex flex-col justify-center items-center">
            <div
              className="text-center md:text-[40px] text-xl"
              style={{
                lineHeight: "normal",
              }}
            >
              {/*Desktop*/}
              <div
                className="hidden md:flex flex-col items-center"
                style={{ fontFamily: "SF Pro Display M" }}
              >
                <div className="flex items-center">
                  See how innovative management tools and schools are
                </div>
                <div className="flex items-center">
                  leveraging our technology to expand the possibilities of
                </div>
                <div className="flex items-center">school operations.</div>
              </div>

              <div
                className="md:hidden flex flex-col items-center"
                style={{ fontFamily: "SF Pro Display B" }}
              >
                See how innovative management tools and schools are leveraging
                our technology to expand the possibilities of school operations.
              </div>
            </div>
          </div>

          <div className="md:w-[1000px] w-full flex flex-col justify-center items-center">
            <img src={Macbook} alt="Macbook" />
          </div>
        </div>
        {/*CONTENT 5*/}
        <div className="w-full md:w-[1000px] flex flex-col justify-center md:gap-[100px] gap-[30px]">
          <div className="flex flex-col justify-center items-center">
            <div
              className="text-center md:text-[40px] text-xl"
              style={{
                lineHeight: "normal",
              }}
            >
              <div
                className="hidden md:flex flex-col items-center "
                style={{ fontFamily: "SF Pro Display M" }}
              >
                <div className="flex items-center">
                  Schools and educators are making significant
                </div>
                <div className="flex items-center">
                  contributions to childrens’ academic achievements.
                </div>
              </div>
              <div
                className="md:hidden flex flex-col items-center "
                style={{ fontFamily: "SF Pro Display B" }}
              >
                Schools and educators are making significant contributions to
                childrens’ academic achievements.
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src={Macbook2}
              alt="Macbook2"
              className="md:w-[1000px] w-full"
            />
          </div>
        </div>
        {/*CONTENT 6*/}
        <div className="w-full md:w-[1000px] flex flex-col justify-center  md:gap-[100px] gap-[30px]">
          <div className="flex flex-col justify-center items-center">
            <div
              className="text-center md:text-[40px] text-xl"
              style={{
                lineHeight: "normal",
              }}
            >
              {/*Desktop*/}
              <div
                className="hidden md:flex flex-col items-center"
                style={{ fontFamily: "SF Pro Display M" }}
              >
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
              {/*Mobile*/}
              <div
                className="md:hidden flex flex-col items-center"
                style={{ fontFamily: "SF Pro Display B" }}
              >
                We firmly believe that schools, teachers, and parents highly
                value the learning progress and journey of students. Our
                Kindertown management system is precisely the tool to achieve
                this goal, all without altering the classroom structure or
                increasing additional burden to students admission. Single cost
                with double effect, our system remains a smart choice to support
                your most cherished priorities.
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src={Ipad}
              alt="Macbook3"
              className="md:w-[1000px] md:h-[768px] w-full"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center md:py-[200px] py-[100px] gap-[100px] md:gap-[200px] px-[20px] md:pr-[171px] md:pl-[169px]">
        {/*Content 7*/}
        <div className="w-full flex flex-col justify-center items-center  md:gap-[100px] gap-[35px]">
          <div className="w-full md:w-[1102px] flex flex-col justify-center items-center md:pl-[155px] md:pr-[154px]">
            <div className="w-full md:w-[793px] flex flex-col justify-center items-center">
              <div
                className="md:text-[70px] text-[32px] text-center"
                style={{ fontFamily: "SF Pro Display B", lineHeight: "normal" }}
              >
                {/*Desktop*/}
                <div className="hidden md:flex flex-col items-center">
                  <div className="flex justify-center items-center">
                    All thoughtful features
                  </div>
                  <div className="flex justify-center items-center">
                    are designed for schools.
                  </div>
                </div>
                {/*Mobile*/}
                <div className="md:hidden flex flex-col items-center">
                  <div className="flex justify-center items-center">
                    All thoughtful
                  </div>
                  <div className="flex justify-center items-center">
                    features are
                  </div>
                  <div className="flex justify-center items-center">
                    designed for schools.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[1102px] flex flex-col justify-center items-center md:gap-y-[66px] gap-9">
            {/*row 1*/}
            <div className="w-full grid md:grid-cols-8 grid-cols-4 md:gap-y-0 gap-y-9">
              <div className="flex flex-col justify-center items-center md:gap-4 gap-[10px]">
                <div>
                  <img
                    src={icon1}
                    alt="admission"
                    className="md:w-[50px] md:h-[50px] w-[30px]"
                  />
                </div>
                <div
                  className="md:text-base text-[10px] md:w-[106px] w-full text-center"
                  style={{
                    fontFamily: "SF Pro Display M",
                    lineHeight: "normal",
                  }}
                >
                  <div className="hidden md:flex flex-col items-center">
                    <div className="flex items-center">Admission</div>
                    <div className="flex items-center">& Enrollment</div>
                  </div>
                  <div className="md:hidden flex flex-col items-center">
                    <div className="flex items-center">School</div>
                    <div className="flex items-center">Enrollment</div>
                  </div>
                </div>
              </div>
              {/*Icon 2*/}
              <div className="flex flex-col justify-center items-center md:gap-4 gap-[10px]">
                <div>
                  <img
                    src={icon2}
                    alt="Student"
                    className="md:w-[50px] md:h-[50px] w-[30px]"
                  />
                </div>
                <div
                  className="md:text-base text-[10px] md:w-[106px] w-full text-center"
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
              <div className="flex flex-col justify-center items-center md:gap-4 gap-[10px]">
                <div>
                  <img
                    src={icon3}
                    alt="Dashboard"
                    className="md:w-[50px] md:h-[50px] w-[30px]"
                  />
                </div>
                <div
                  className="md:text-base text-[10px] md:w-[106px] w-full text-center"
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
              <div className="flex flex-col justify-center items-center md:gap-4 gap-[10px]">
                <div>
                  <img
                    src={icon4}
                    alt="Classroom"
                    className="md:w-[50px] md:h-[50px] w-[30px]"
                  />
                </div>
                <div
                  className="md:text-base text-[10px] md:w-[106px] w-full  text-center"
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
              <div className="flex flex-col justify-center items-center md:gap-4 gap-[10px]">
                <div>
                  <img
                    src={icon5}
                    alt="Qualification"
                    className="md:w-[50px] md:h-[50px] w-[30px]"
                  />
                </div>
                <div
                  className="md:text-base text-[10px] md:w-[106px] w-full  text-center"
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
              <div className="flex flex-col justify-center items-center md:gap-4 gap-[10px]">
                <div>
                  <img
                    src={icon6}
                    alt="Check Log"
                    className="md:w-[50px] md:h-[50px] w-[30px]"
                  />
                </div>
                <div
                  className="md:text-base text-[10px] md:w-[106px] w-full text-center"
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
              <div className="flex flex-col justify-center items-center md:gap-4 gap-[10px]">
                <div>
                  <img
                    src={icon7}
                    alt="Homework"
                    className="md:w-[50px] md:h-[50px] w-[30px]"
                  />
                </div>
                <div
                  className="md:text-base text-[10px] md:w-[106px] w-full text-center"
                  style={{
                    fontFamily: "SF Pro Display M",
                    lineHeight: "normal",
                  }}
                >
                  <div className="hidden md:flex flex-col items-center">
                    <div className="flex items-center">homework &</div>
                    <div className="flex items-center">doc upload</div>
                  </div>
                  <div className="md:hidden flex flex-col items-center">
                    <div className="flex items-center">homework </div>
                    <div className="flex items-center">upload</div>
                  </div>
                </div>
              </div>
              {/*Icon 8*/}
              <div className="flex flex-col justify-center items-center md:gap-4 gap-[10px]">
                <div>
                  <img
                    src={icon8}
                    alt="Download"
                    className="md:w-[50px] md:h-[50px] w-[30px]"
                  />
                </div>
                <div
                  className="md:text-base text-[10px] md:w-[106px] w-full  text-center"
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
            <div className="w-full grid md:grid-cols-8 grid-cols-4 md:gap-y-0 gap-y-9">
              {/*Icon 1*/}
              <div className="flex flex-col justify-center items-center md:gap-4 gap-[10px]">
                <div>
                  <img
                    src={icon9}
                    alt="Calendar"
                    className="md:w-[50px] md:h-[50px] w-[30px]"
                  />
                </div>
                <div
                  className="md:text-base text-[10px] md:w-[106px] w-full text-center"
                  style={{
                    fontFamily: "SF Pro Display M",
                    lineHeight: "normal",
                  }}
                >
                  <div className="hidden md:flex flex-col items-center">
                    <div className="flex items-center">Calendar &</div>
                    <div className="flex items-center">schedule</div>
                  </div>
                  <div className=" md:hidden flex flex-col items-center">
                    <div className="flex items-center">Calendar </div>
                    <div className="flex items-center">schedule</div>
                  </div>
                </div>
              </div>
              {/*Icon 2*/}
              <div className="flex flex-col justify-center items-center md:gap-4 gap-[10px]">
                <div>
                  <img
                    src={icon10}
                    alt="Email"
                    className="md:w-[50px] md:h-[50px] w-[30px]"
                  />
                </div>
                <div
                  className="md:text-base text-[10px] md:w-[106px] w-full text-center"
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
              <div className="flex flex-col justify-center items-center md:gap-4 gap-[10px]">
                <div>
                  <img
                    src={icon11}
                    alt="Announcement"
                    className="md:w-[50px] md:h-[50px] w-[30px]"
                  />
                </div>
                <div
                  className="md:text-base text-[10px] md:w-[106px] w-full text-center"
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
              <div className="flex flex-col justify-center items-center md:gap-4 gap-[10px]">
                <div>
                  <img
                    src={icon12}
                    alt="Community"
                    className="md:w-[50px] md:h-[50px] w-[30px]"
                  />
                </div>
                <div
                  className="md:text-base text-[10px] md:w-[106px] w-full text-center"
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
              <div className="flex flex-col justify-center items-center md:gap-4 gap-[10px]">
                <div>
                  <img
                    src={icon13}
                    alt="Payment"
                    className="md:w-[50px] md:h-[50px] w-[30px]"
                  />
                </div>
                <div
                  className="md:text-base text-[10px] md:w-[106px] w-full text-center"
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
              <div className="flex flex-col justify-center items-center md:gap-4 gap-[10px]">
                <div>
                  <img
                    src={icon14}
                    alt="Market"
                    className="md:w-[50px] md:h-[50px] w-[30px]"
                  />
                </div>
                <div
                  className="md:text-base text-[10px] md:w-[106px] w-full  text-center"
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
              <div className="flex flex-col justify-center items-center md:gap-4 gap-[10px]">
                <div>
                  <img
                    src={icon15}
                    alt="TimeTable"
                    className="md:w-[50px] md:h-[50px] w-[30px]"
                  />
                </div>
                <div
                  className="md:text-base text-[10px] md:w-[106px] w-full text-center"
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
              <div className="flex flex-col justify-center items-center md:gap-4 gap-[10px]">
                <div>
                  <img
                    src={icon16}
                    alt="Event"
                    className="md:w-[50px] md:h-[50px] w-[30px]"
                  />
                </div>
                <div
                  className="md:text-base text-[10px] md:w-[106px] w-full  text-center"
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
            <div className="w-full grid md:grid-cols-8 grid-cols-4 md:gap-y-0 gap-y-9">
              {/*Icon 1*/}
              <div className="flex flex-col justify-center items-center md:gap-4 gap-[10px]">
                <div>
                  <img
                    src={icon17}
                    alt="Attendance"
                    className="md:w-[50px] md:h-[50px] w-[30px]"
                  />
                </div>
                <div
                  className="md:text-base text-[10px] md:w-[106px] w-full  text-center"
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
              <div className="flex flex-col justify-center items-center  md:gap-4 gap-[10px]">
                <div>
                  <img
                    src={icon18}
                    alt="Grading"
                    className="md:w-[50px] md:h-[50px] w-[30px]"
                  />
                </div>
                <div
                  className="md:text-base text-[10px] md:w-[106px] w-full  text-center"
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
              <div className="flex flex-col justify-center items-center  md:gap-4 gap-[10px]">
                <div>
                  <img
                    src={icon19}
                    alt="daycare"
                    className="md:w-[50px] md:h-[50px] w-[30px]"
                  />
                </div>
                <div
                  className="md:text-base text-[10px] md:w-[106px] w-full  text-center"
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
              <div className="flex flex-col justify-center items-center  md:gap-4 gap-[10px]">
                <div>
                  <img
                    src={icon20}
                    alt="bus"
                    className="md:w-[50px] md:h-[50px] w-[30px]"
                  />
                </div>
                <div
                  className="md:text-base text-[10px] md:w-[106px] w-full  text-center"
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
              <div className="flex flex-col justify-center items-center  md:gap-4 gap-[10px]">
                <div>
                  <img
                    src={icon21}
                    alt="CCTV"
                    className="md:w-[50px] md:h-[50px] w-[30px]"
                  />
                </div>
                <div
                  className="md:text-base text-[10px] md:w-[106px] w-full text-center"
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
              <div className="flex flex-col justify-center items-center  md:gap-4 gap-[10px]">
                <div>
                  <img
                    src={icon22}
                    alt="SMS"
                    className="md:w-[50px] md:h-[50px] w-[30px]"
                  />
                </div>
                <div
                  className="md:text-base text-[10px] md:w-[106px] w-full  text-center"
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
              <div className="flex flex-col justify-center items-center md:gap-4 gap-[10px]">
                <div>
                  <img
                    src={icon23}
                    alt="homework"
                    className="md:w-[50px] md:h-[50px] w-[30px]"
                  />
                </div>
                <div
                  className="md:text-base text-[10px] md:w-[106px] w-full  text-center"
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
              <div className="flex flex-col justify-center items-center md:gap-4 gap-[10px]">
                <div>
                  <img
                    src={icon24}
                    alt="exam"
                    className="md:w-[50px] md:h-[50px] w-[30px]"
                  />
                </div>
                <div
                  className="md:text-base text-[10px] md:w-[106px] w-full  text-center"
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
        <div className="w-full md:w-[1000px] flex flex-col">
          <div className="flex flex-col justify-center items-center">
            <div className="relative flex flex-col md:w-[400px] md:h-[400px] md:rounded-[50px] rounded-[16px] bg-gradient-to-t from-[#ADADAD] to-[#F9F9F9] md:pt-[53px] pt-[27px] md:pb-[61px] pb-[22px] px-[14px] md:pl-[34px] md:pr-[33px] md:gap-[59px] gap-[27px]">
              <div className="flex flex-col justify-center items-center">
                <img
                  src={CTLogo}
                  alt="CTLogo"
                  className="md:w-[160px] md:h-[106px] w-[66px]"
                />
              </div>
              <div className="flex flex-col justify-center items-center md:gap-[40px] gap-[10px]">
                <div className="flex flex-col justify-center items-center">
                  <div
                    className="md:text-[24px] text-[10px] inline-block"
                    style={{
                      fontFamily: "SF Pro Display B",
                      lineHeight: "normal",
                    }}
                  >
                    CT PRODUCT {""}
                    <span className=" bg-black  md:w-[77px] h-[29px] md:rounded-[4px] rounded-[2px] text-white px-[5.6px]">
                      CARE
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div
                    className="md:text-[24px] text-[10px] inline-block text-center"
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
