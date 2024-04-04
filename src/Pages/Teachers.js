// JoinUs.jsx
import React from "react";
import Privacy from "./Privacy";
import Tab1 from "../assets/teacher/tab1.png";
import Tab2 from "../assets/teacher/tab2.png";
import Tab3 from "../assets/teacher/tab3.png";
import Tab4 from "../assets/teacher/tab4.png";
import Tab5 from "../assets/teacher/tab5.png";

import CTLogo from "../assets/teacher/ct-logo.svg";
import Header from "../assets/teacher/header.png";
const Teacher = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center md:pt-[150px] pt-[80px]">
        <img src={Header} alt="Header" className="w-full" />
      </div>
      <div className="w-full flex flex-col justify-center items-center md:pt-[100px] pt-[50px] md:gap-[200px] gap-[100px] md:px-[220px] pl-[32px] pr-[31px] md:pb-[200px] pb-[100px]">
        {/*CONTENT 2*/}
        <div className="w-full md:w-[1000px] flex flex-col md:gap-[50px] gap-[30px]">
          <div className="flex flex-col justify-center items-center">
            <div
              className="text-center md:text-[80px] text-4xl"
              style={{ fontFamily: "SF Pro Display B", lineHeight: "normal" }}
            >
              <div className="hidden md:flex"> Kindertown Teacher</div>
              <div className="md:hidden flex flex-col">
                <div>Kindertown</div>
                <div> Teacher</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div
              className="text-center md:text-[32px] text-xl"
              style={{ fontFamily: "SF Pro Display M", lineHeight: "normal" }}
            >
              Moving away from traditional manual handling of school affairs and
              transitioning into a technological system which allows school
              staff to easily address the daily intricacies.
            </div>
          </div>
        </div>
        {/*CONTENT 3*/}
        <div className="w-full md:w-[1000px] flex flex-col md:gap-[50px] gap-[30px]">
          <div className="flex flex-col justify-center items-center">
            <img
              src={Tab1}
              alt="Tablet1"
              className="md:w-[800px] md:h-[614px]"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            {/*Desktop*/}
            <div
              className="hidden md:flex flex-col text-[40px]"
              style={{
                fontFamily: "SF Pro Display M",
                lineHeight: "normal",
              }}
            >
              <div className="flex items-center justify-center ">
                Everyone approaches tasks in different ways. We're
              </div>
              <div className="flex items-center justify-center">
                dedicated to technological innovation - transforming
              </div>
              <div className="flex items-center justify-center">
                thinking, challenging limitations, and assisting educators
              </div>
              <div className="flex items-center justify-center">
                in creating the best possible experiences for both
              </div>
              <div className="flex items-center justify-center">
                teachers and parents.
              </div>
            </div>
            {/*Mobile*/}
            <div
              className="md:hidden flex flex-col text-base text-center"
              style={{
                fontFamily: "SF Pro Display M",
                lineHeight: "normal",
              }}
            >
              Everyone approaches tasks in different ways. We're dedicated to
              technological innovation - transforming thinking, challenging
              limitations, and assisting educators in creating the best possible
              experiences for both teachers and parents.
            </div>
          </div>
        </div>
        {/*CONTENT 4*/}
        <div className="w-full md:w-[1000px] flex flex-col gap-[30px] md:gap-[50px]">
          <div className="flex flex-col justify-center items-center">
            <img
              src={Tab2}
              alt="Tablet2"
              className="md:w-[800px] md:h-[614px]"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div
              className="flex flex-col md:text-[40px] text-base text-center"
              style={{
                fontFamily: "SF Pro Display M",
                lineHeight: "normal",
              }}
            >
              <div className="md:hidden flex flex-col justify-center items-center">
                We excel at solving the challenges of student check-in,
                check-out, temperature monitoring, and attendance tracking. Say
                goodbye to tedious manual processes and welcome seamless
                efficiency, allowing educators to focus on what matters most.
              </div>
              <div className="hidden md:flex flex-col">
                <div className="flex items-center justify-center ">
                  We excel at solving the challenges of student check-in,
                </div>
                <div className="flex items-center justify-center">
                  check-out, temperature monitoring, and attendance
                </div>
                <div className="flex items-center justify-center">
                  tracking. Say goodbye to tedious manual processes and
                </div>
                <div className="flex items-center justify-center">
                  welcome seamless efficiency, allowing educators to
                </div>
                <div className="flex items-center justify-center">
                  focus on what matters most.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*CONTENT 5*/}
        <div className="w-full md:w-[1000px] flex flex-col md:gap-[50px] gap-[30px]">
          <div className="flex flex-col justify-center items-center">
            <img
              src={Tab3}
              alt="Tablet3"
              className="md:w-[800px] md:h-[614px]"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div
              className="md:text-[40px] text-base text-center"
              style={{
                fontFamily: "SF Pro Display M",
                lineHeight: "normal",
              }}
            >
              {/*Desktop*/}
              <div className="hidden md:flex flex-col">
                <div className="flex items-center justify-center ">
                  Our system fully harnesses the power of technology, by
                </div>
                <div className="flex items-center justify-center">
                  saving teachers valuable time. Whether it's students'
                </div>
                <div className="flex items-center justify-center">
                  assignments, learning capabilities, or their behavior, we
                </div>
                <div className="flex items-center justify-center">
                  seamlessly integrate into every important aspect.
                </div>
              </div>
              {/*Mobile*/}
              <div className="md:hidden flex flex-col">
                Our system fully harnesses the power of technology, by saving
                teachers valuable time. Whether it's students' assignments,
                learning capabilities, or their behavior, we seamlessly
                integrate into every important aspect.
              </div>
            </div>
          </div>
        </div>
        {/*CONTENT 6*/}
        <div className="w-full md:w-[1000px] flex flex-col md:gap-[50px] gap-[30px]">
          <div className="flex flex-col justify-center items-center">
            <img
              src={Tab4}
              alt="Tablet4"
              className="md:w-[800px] md:h-[614px]"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div
              className="md:text-[40px] text-base text-center"
              style={{
                fontFamily: "SF Pro Display M",
                lineHeight: "normal",
              }}
            >
              {/*Desktop*/}
              <div className="hidden md:flex flex-col">
                <div className="flex items-center justify-center ">
                  We take pride in offering a solution that perfectly
                </div>
                <div className="flex items-center justify-center">
                  addresses the busy task of educators such as recording
                </div>
                <div className="flex items-center justify-center">
                  student assignment grades, tracking grades across
                </div>
                <div className="flex items-center justify-center">
                  different subjects, and assessing student skills.
                </div>
                <div className="flex items-center justify-center">
                  Moreover, through seamless synchronisation with the
                </div>
                <div className="flex items-center justify-center">
                  Kindertown Parents App, parents can monitor their
                </div>
                <div className="flex items-center justify-center">
                  child's learning progress in real-time.
                </div>
              </div>
              {/*Mobile*/}
              <div className="md:hidden flex flex-col">
                We take pride in offering a solution that perfectly addresses
                the busy task of educators such as recording student assignment
                grades, tracking grades across different subjects, and assessing
                student skills. Moreover, through seamless synchronisation with
                the Kindertown Parents App, parents can monitor their child's
                learning progress in real-time.
              </div>
            </div>
          </div>
        </div>
        {/*CONTENT 7*/}
        <div className="w-full md:w-[1000px] flex flex-col md:gap-[50px] gap-[30px]">
          <div className="flex flex-col justify-center items-center">
            <img
              src={Tab5}
              alt="Tablet5"
              className="md:w-[800px] md:h-[614px]"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div
              className="md:text-[40px] text-base text-center"
              style={{
                fontFamily: "SF Pro Display M",
                lineHeight: "normal",
              }}
            >
              {/*Desktop*/}
              <div className="hidden md:flex flex-col">
                <div className="flex items-center justify-center ">
                  The powerful Kindertown Community, where parents and
                </div>
                <div className="flex items-center justify-center">
                  educators come together to share in the joyous journey
                </div>
                <div className="flex items-center justify-center">
                  of student learning. Witness the naivety and happiness
                </div>
                <div className="flex items-center justify-center">
                  of children's learning experiences while gaining deeper
                </div>
                <div className="flex items-center justify-center">
                  insights into your child's development. It's a platform that
                </div>
                <div className="flex items-center justify-center">
                  fosters collaboration, celebrates milestones, and brings
                </div>
                <div className="flex items-center justify-center">
                  families closer together.
                </div>
              </div>

              {/*mobile*/}
              <div className=" md:hidden flex flex-col">
                The powerful Kindertown Community, where parents and educators
                come together to share in the joyous journey of student
                learning. Witness the naivety and happiness of children's
                learning experiences while gaining deeper insights into your
                child's development. It's a platform that fosters collaboration,
                celebrates milestones, and brings families closer together.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*CONTENT 8*/}
      <div className="w-full flex flex-col md:px-[520px] px-[113px] items-center md:pb-[200px] pb-[100px]">
        <div className="w-full md:w-[1000px] flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <div className="relative flex flex-col md:w-[400px] md:h-[400px] rounded-[16px] md:rounded-[50px] bg-gradient-to-t from-[#ADADAD] to-[#F9F9F9] md:pt-[53px] pt-[27px] md:pb-[61px] pb-[22px] md:pl-[34px] md:pr-[33px] px-[14px] md:gap-[59px] gap-[27px]">
              <div className="flex flex-col justify-center items-center">
                <img
                  src={CTLogo}
                  alt="CTLogo"
                  className="md:w-[160px] md:h-[106px] w-[66px]"
                />
              </div>
              <div className="flex flex-col justify-center items-center md:gap-[40px] gap-3">
                <div className="flex flex-col justify-center items-center">
                  <div
                    className="md:text-[24px] text-[10px] inline-block"
                    style={{
                      fontFamily: "SF Pro Display B",
                      lineHeight: "normal",
                    }}
                  >
                    CT PRODUCT{" "}
                    <span className=" bg-black  md:w-[77px] h-[29px] md:rounded-[4px] rounded-[2px] text-white md:px-[5.6px] px-[3px] py-[1px]">
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
                    <div className="hidden md:flex flex-col">
                      <div className="flex items-center justify-center ">
                        Free provide face to face training
                      </div>
                      <div className="flex items-center justify-center ">
                        and online tutorials.
                      </div>
                    </div>
                    <div className="md:hidden flex flex-wrap">
                      Free provide face to face training and online tutorials.
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

export default Teacher;
