// JoinUs.jsx
import React from "react";
import Privacy from "./Privacy";
import Tab1 from "../assets/teacher/tab1.svg";
import Tab2 from "../assets/teacher/tab2.svg";
import Tab3 from "../assets/teacher/tab3.svg";
import Tab4 from "../assets/teacher/tab4.svg";
import Tab5 from "../assets/teacher/tab5.svg";
import Logo from "../assets/teacher/logo.svg";
import CTLogo from "../assets/teacher/ct-logo.svg";
import Header from "../assets/teacher/header.svg";
const Teacher = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center pt-[150px]">
        <img src={Header} className="w-full"></img>
      </div>
      <div className="w-full flex flex-col justify-center items-center pt-[100px] gap-[200px] px-[220px] pb-[200px]">
        {/*CONTENT 2*/}
        <div className="w-[1000px] flex flex-col gap-[50px]">
          <div className="flex flex-col justify-center items-center">
            <div
              className="text-center text-[80px]"
              style={{ fontFamily: "SF Pro Display B", lineHeight: "normal" }}
            >
              Kindertown Teacher
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div
              className="text-center text-[32px]"
              style={{ fontFamily: "SF Pro Display M", lineHeight: "normal" }}
            >
              Moving away from traditional manual handling of school affairs and
              transitioning into a technological system which allows school
              staff to easily address the daily intricacies.
            </div>
          </div>
        </div>
        {/*CONTENT 3*/}
        <div className="w-[1000px] flex flex-col gap-[50px]">
          <div className="flex flex-col justify-center items-center">
            <img src={Tab1} alt="Tablet1" className="w-[800px] h-[614px]"></img>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div
              className="text-[40px]"
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
          </div>
        </div>
        {/*CONTENT 4*/}
        <div className="w-[1000px] flex flex-col gap-[50px]">
          <div className="flex flex-col justify-center items-center">
            <img src={Tab2} alt="Tablet2" className="w-[800px] h-[614px]"></img>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div
              className="text-[40px]"
              style={{
                fontFamily: "SF Pro Display M",
                lineHeight: "normal",
              }}
            >
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
        {/*CONTENT 5*/}
        <div className="w-[1000px] flex flex-col gap-[50px]">
          <div className="flex flex-col justify-center items-center">
            <img src={Tab3} alt="Tablet3" className="w-[800px] h-[614px]"></img>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div
              className="text-[40px]"
              style={{
                fontFamily: "SF Pro Display M",
                lineHeight: "normal",
              }}
            >
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
          </div>
        </div>
        {/*CONTENT 6*/}
        <div className="w-[1000px] flex flex-col gap-[50px]">
          <div className="flex flex-col justify-center items-center">
            <img src={Tab4} alt="Tablet4" className="w-[800px] h-[614px]"></img>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div
              className="text-[40px]"
              style={{
                fontFamily: "SF Pro Display M",
                lineHeight: "normal",
              }}
            >
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
          </div>
        </div>
        {/*CONTENT 7*/}
        <div className="w-[1000px] flex flex-col gap-[50px]">
          <div className="flex flex-col justify-center items-center">
            <img src={Tab5} alt="Tablet5" className="w-[800px] h-[614px]"></img>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div
              className="text-[40px]"
              style={{
                fontFamily: "SF Pro Display M",
                lineHeight: "normal",
              }}
            >
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
          </div>
        </div>

        {/*CONTENT 8
        <div className="w-[1000px] flex flex-col gap-[50px]">
          <div className="flex flex-col justify-center items-center">
            <img src={Logo} alt="Logo" className="w-[400px] h-[400px]"></img>
          </div>
        </div>
        */}

        {/*CONTENT 8*/}
        <div className="w-[1000px] flex flex-col gap-[50px]">
          <div className="flex flex-col justify-center items-center">
            <div className="relative flex flex-col md:w-[400px] md:h-[400px] md:rounded-[50px] bg-gradient-to-t from-[#ADADAD] to-[#F9F9F9] pt-[53px] pb-[61px] pl-[34px] pr-[33px] gap-[59px]">
              <div className="flex flex-col justify-center items-center">
                <img
                  src={CTLogo}
                  alt="CT Logo"
                  className="w-[160px] h-[106px]"
                ></img>
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

export default Teacher;
