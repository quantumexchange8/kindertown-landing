import React from "react";

import GirlBg from "../assets/girl_child.mp4";
import Planner from "../assets/home/planner.png";
import Child from "../assets/home/child.png";
import Playground from "../assets/home/playground.png";
import Tel from "../assets/home/tel.png";
import Pencil from "../assets/home/pencils.png";
import Computer from "../assets/home/computer.png";
import Tools from "../assets/home/measure.svg";
import Family from "../assets/home/family.png";
import Teachers from "../assets/home/teachers.png";
import Slowmode from "../assets/home/slowmode.png";
import Choose from "../assets/home/choose.svg";
import Owners from "../assets/home/schoolowners.png";
import Admin from "../assets/home/admin.png";
import Teacher2 from "../assets/home/teachers2.png";
import Parent from "../assets/home/parent.png";
import Main from "../assets/home/main.png";
const Home = () => {
  return (
    <>
      <div className=" flex justify-center mt-[50px] md:pb-[150px] pb-[100px]">
        <div className="w-full md:w-[1000px] pt-[30px] md:pt-[50px] flex flex-col pl-[31px] pr-[32px] md:px-0">
          {/* CONTENT 1 */}
          <div>
            <img src={Main} alt="" loading="lazy" />
          </div>

          <div className="w-full flex flex-col justify-center gap-[150px]">
            {/*Content 2 */}
            <div className="flex flex-col items-center w-full md:gap-[60px] gap-[30px]">
              <div
                className="w-full md:max-w-[610px] text-4xl md:text-[80px] text-center md:leading-[90px]"
                style={{ fontFamily: "SF Pro Display B" }}
              >
                Zero - Worries. Zero - Hassle.
              </div>
              <div
                className="w-full text-center md:text-[32px] text-xl"
                style={{ fontFamily: "SF Pro Display M", lineHeight: "normal" }}
              >
                A child's learning world begins in the classroom, using tools
                that are flexible, easy to operate, prioritise privacy,
                accessibility, and sustainability. Parents will have a better
                understanding of their child's journey in kindergarten because
                of our products.
                {/* <div className="" ></div>
                <div className="text-[32px]" style={{ fontFamily: "SF Pro Display M" }}></div>
                <div className="text-[32px]" style={{ fontFamily: "SF Pro Display M" }}></div>
                <div className="text-[32px]" style={{ fontFamily: "SF Pro Display M" }}></div> */}
              </div>
            </div>
          </div>

          {/*CONTENT 3 */}

          <div className="w-full md:pt-[150px] pt-[100px] md:max-w-[1000px] flex flex-col justify-center items-center">
            <h1
              className="text-center w-[175px] md:w-[496px] justify-center items-center md:text-3xl text-xl"
              style={{ fontFamily: "SF Pro Display B" }}
            >
              Kindertown’s app super highlight
            </h1>
            <div className="md:w-[1000px] flex flex-col  md:gap-7 gap-[30px] md:pt-[50px] pt-[30px] ">
              <div className="flex flex-col md:flex-row flex-wrap justify-between md:gap-7 gap-[30px]">
                <div className="w-full md:w-[315px] md:h-[460px] rounded-[30px] pt-[47px] pb-12 md:py-[70px] px-[25px] md:pl-[27px] md:pr-[18px] bg-[#F67F00] flex flex-col justify-center items-center gap-[50px] md:gap-[60px]">
                  <div>
                    <img
                      src={Planner}
                      alt="Planner"
                      className="md:w-40 md:h-[120px]"
                    />
                  </div>

                  <div className="flex flex-col items-center gap-[30px] md:gap-5 w-[270px] md:h-full">
                    <div
                      className="text-center text-xl w-full"
                      style={{
                        fontFamily: "SF Pro Display B",
                        lineHeight: "normal",
                      }}
                    >
                      <div className="flex items-center justify-center h-6">
                        Say goodbye to
                      </div>
                      <div className="flex items-center justify-center h-6">
                        enrolment worries
                      </div>
                    </div>

                    <div className="text-center text-[20px]">
                      <div
                        className="flex items-center justify-center h-[25px]"
                        style={{
                          fontFamily: "SF Pro Display M",
                          lineHeight: "normal",
                        }}
                      >
                        You can now secure
                      </div>
                      <div
                        className="flex items-center justify-center h-[25px]"
                        style={{ fontFamily: "SF Pro Display M" }}
                      >
                        a seat in your preferred
                      </div>
                      <div
                        className="flex items-center justify-center h-[25px]"
                        style={{ fontFamily: "SF Pro Display M" }}
                      >
                        kindergarten in Kindertown.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-[315px] md:h-[460px] rounded-[30px] py-[44px] md:py-[70px] md:pl-[22px] md:pr-[23px] px-[25px] bg-[#FFC19F]  flex flex-col justify-center items-center gap-[50px] md:gap-[60px]">
                  <div>
                    <img
                      src={Child}
                      alt="Child"
                      className="md:h-[120px] md:w-[133px]"
                    />
                  </div>

                  <div className="flex flex-col items-center gap-[30px] md:gap-5 w-[270px] md:h-full">
                    <div
                      className="text-center text-xl leading-normal w-full"
                      style={{ fontFamily: "SF Pro Display B" }}
                    >
                      <div className="flex items-center justify-center h-6">
                        Know what your
                      </div>
                      <div className="flex items-center justify-center h-6">
                        kids up to in school
                      </div>
                    </div>

                    <div className="text-center text-[20px] leading-normal">
                      <div
                        className="flex items-center justify-center h-[25px]"
                        style={{ fontFamily: "SF Pro Display M" }}
                      >
                        Stay informed about your
                      </div>
                      <div
                        className="flex items-center justify-center h-[25px]"
                        style={{ fontFamily: "SF Pro Display M" }}
                      >
                        kids’ academic status,
                      </div>
                      <div
                        className="flex items-center justify-center h-[25px]"
                        style={{ fontFamily: "SF Pro Display M" }}
                      >
                        performance and more.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-[314px] md:h-[460px] rounded-[30px] py-[60px] md:pt-[70px] md:pb-[93px] px-[25px] md:px-[21px] bg-[#FCBF4A]  flex flex-col justify-center items-center gap-[50px] md:gap-[60px]">
                  <div>
                    <img
                      src={Playground}
                      alt="Child"
                      className="md:h-[120px] md:w-[137px]"
                    />
                  </div>

                  <div className="flex flex-col items-center gap-[30px] md:gap-[18px] w-full md:h-full">
                    <div
                      className="text-center text-xl leading-normal w-full"
                      style={{ fontFamily: "SF Pro Display B" }}
                    >
                      <div className="flex items-center justify-center h-6">
                        Never miss a school
                      </div>
                      <div className="flex items-center justify-center h-6">
                        event or class activity
                      </div>
                    </div>

                    <div className="text-center text-[20px] leading-normal">
                      <div
                        className="h-[25px]"
                        style={{ fontFamily: "SF Pro Display M" }}
                      >
                        Stay in the loop with all the
                      </div>
                      <div
                        className="h-[25px]"
                        style={{ fontFamily: "SF Pro Display M" }}
                      >
                        latest happenings in school.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row flex-wrap justify-between md:gap-7 gap-[30px]">
                <div className="w-full md:w-[315px] md:h-[460px] rounded-[30px] bg-[#FDE0A4] px-[25px] md:pl-[27px] md:pr-[18px] pt-[47px] pb-12 md:py-[70px] flex flex-col justify-center items-center gap-[50px] md:gap-[60px]">
                  <div>
                    <img
                      src={Computer}
                      alt="Gadget"
                      className="md:h-[120px] md:w-[150px]"
                    />
                  </div>

                  <div className="flex flex-col items-center md:gap-5 gap-[30px] w-[270px] md:h-full">
                    <div
                      className="text-center text-xl leading-normal w-full"
                      style={{ fontFamily: "SF Pro Display B" }}
                    >
                      <div className="flex items-center justify-center h-6">
                        Pay your school
                      </div>
                      <div className="flex items-center justify-center h-6">
                        fees with ease
                      </div>
                    </div>

                    <div className="text-center text-xl leading-normal">
                      <div
                        className="flex items-center justify-center h-[25px]"
                        style={{ fontFamily: "SF Pro Display M" }}
                      >
                        Make your school fee
                      </div>

                      <div
                        className="flex items-center justify-center h-[25px]"
                        style={{ fontFamily: "SF Pro Display M" }}
                      >
                        payments instantly with
                      </div>
                      <div
                        className="flex items-center justify-center h-[25px]"
                        style={{ fontFamily: "SF Pro Display M" }}
                      >
                        only a few clicks.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-[315px] md:h-[460px] rounded-[30px]  bg-[#E0956C] flex flex-col justify-center items-center md:gap-[60px] gap-[50px] md:py-[70px] md:pl-[27px] md:pr-[18px] pt-[47px] pb-[48px] px-[25px]">
                  <div>
                    <img
                      src={Pencil}
                      alt="Pencil"
                      className="md:h-[120px] md:w-[120px]"
                    />
                  </div>

                  <div className="flex flex-col items-center gap-[30px] md:gap-5 w-[270px] md:h-full">
                    <div
                      className="text-center text-xl leading-normal w-full"
                      style={{ fontFamily: "SF Pro Display B" }}
                    >
                      <div className="flex items-center justify-center h-6">
                        Marketplace that
                      </div>
                      <div className="flex items-center justify-center h-6">
                        brings convenience
                      </div>
                    </div>

                    <div className="text-center text-xl leading-normal">
                      <div
                        className="flex items-center justify-center h-[25px]"
                        style={{ fontFamily: "SF Pro Display M" }}
                      >
                        Supplying resources that
                      </div>

                      <div
                        className="flex items-center justify-center h-[25px]"
                        style={{ fontFamily: "SF Pro Display M" }}
                      >
                        cater to your child's needs
                      </div>
                      <div
                        className="flex items-center justify-center h-[25px]"
                        style={{ fontFamily: "SF Pro Display M" }}
                      >
                        at any moment.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-[314px] md:h-[460px] rounded-[30px]  bg-[#FFDDB9] flex flex-col justify-center items-center gap-[50px] md:gap-[60px] px-[25px] md:px-[22px] md:py-[70px] pt-[38px] pb-[39px]">
                  <div>
                    <img
                      src={Tel}
                      alt="Telephone"
                      className="md:h-[120px] md:w-[126px]"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-[30px] md:gap-5 w-[270px] md:h-full">
                    <div
                      className="text-center text-xl leading-normal w-full"
                      style={{ fontFamily: "SF Pro Display B" }}
                    >
                      <div className="flex items-center justify-center h-6">
                        Discover countless
                      </div>
                      <div className="flex items-center justify-center h-6">
                        powerful features
                      </div>
                    </div>

                    <div className="text-center text-xl leading-normal">
                      <div
                        className="flex items-center justify-center h-[25px]"
                        style={{ fontFamily: "SF Pro Display M" }}
                      >
                        Super-strong interaction
                      </div>

                      <div
                        className="flex items-center justify-center h-[25px]"
                        style={{ fontFamily: "SF Pro Display M" }}
                      >
                        function between teachers,
                      </div>
                      <div
                        className="flex items-center justify-center h-[25px]"
                        style={{ fontFamily: "SF Pro Display M" }}
                      >
                        students and parents.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center bg-[#FFF7EF] md:py-[150px] px-5 md:px-[220px] pt-[50px] pb-[100px]">
        {/*CONTENT 4*/}
        <div className="w-full md:w-[1000px] flex flex-col justify-center items-center gap-[30px] md:gap-[50px]">
          <div className="flex flex-col justify-center items-center">
            <img src={Tools} className="w-32 h-32" alt="Tools" />
          </div>
          <div className="flex flex-col items-center w-full md:h-full">
            <div
              className="text-center text-4xl md:text-[80px] text-[#7A5AF8] md:leading-[90px] leading-normal w-full"
              style={{
                fontFamily: "SF Pro Display B",
              }}
            >
              <div className="flex items-center justify-center">
                Essential tools.
              </div>
              <div className="flex items-center justify-center">
                Powerful system.
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[1000px] flex flex-col justify-center items-center pt-[100px] md:pt-[200px] gap-[100px] md:gap-[150px]">
          {/* REFER HERE FOR SAMPLE */}

          {/* CONTENT 5 */}
          <div className="w-full md:flex flex-wrap md:gap-9 gap-[30px]">
            <div>
              <img src={Family} alt="Family" />
            </div>
            <div className="flex flex-col justify-center w-full md:w-[864px] md:gap-[30px] gap-[15px]">
              <div
                className="text-[#4D9138] text-[20px] md:text-[32px] pt-[30px]"
                style={{ fontFamily: "SF Pro Display EB" }}
              >
                Child's Learning Journey
              </div>
              <div className="flex flex-col gap-10">
                <div
                  className="md:text-[32px] text-xl"
                  style={{
                    fontFamily: "SF Pro Display M",
                    lineHeight: "normal",
                  }}
                >
                  Through the powerful Kindertown Parents mobile application,
                  not only does it enhance the intimate relationship between
                  parents and children, but it also makes it easy for parents to
                  find outstanding kindergartens for their children, preparing
                  them for future enrollment. Our system provides the simplest
                  and most convenient registration process and payment methods.
                </div>
                <div
                  className="md:text-[32px] text-xl"
                  style={{
                    fontFamily: "SF Pro Display M",
                    lineHeight: "normal",
                  }}
                >
                  It also includes features such as connectivity with school
                  CCTV, essential management features, and adorable widgets.
                  This allows you to track every detail of your child's learning
                  journey at anytime, anywhere, ensuring that no important
                  information is missed out.
                </div>
              </div>
            </div>
          </div>
          {/* CONTENT 6 */}
          <div className="w-full md:flex flex-wrap md:gap-9 gap-[30px]">
            <div>
              <img src={Teachers} alt="Family" />
            </div>
            <div className="flex flex-col justify-center md:w-[864px] md:gap-[30px] gap-[15px]">
              <div
                className="text-[#752912] md:text-[32px] text-[20px] pt-[30px]"
                style={{
                  fontFamily: "SF Pro Display EB",
                  lineHeight: "normal",
                }}
              >
                We understand the busyness of teachers
              </div>
              <div className="flex flex-col gap-10">
                <div
                  className="md:text-[32px] text-[20px]"
                  style={{
                    fontFamily: "SF Pro Display M",
                    lineHeight: "normal",
                  }}
                >
                  Kindertown Teacher strengthens the connection between
                  children, parents, and teachers. Recognizing the challenge of
                  guiding the learning process and organizing details for
                  numerous children, we understand the need for a powerful and
                  multifunctional system to manage children's educational
                  progress.
                </div>
                <div
                  className="md:text-[32px] text-[20px]"
                  style={{
                    fontFamily: "SF Pro Display M",
                    lineHeight: "normal",
                  }}
                >
                  Kindertown Teacher effectively addresses this challenge,
                  enabling teachers to conveniently record children's learning
                  advancements and activities. In addition, the ‘Collection’
                  feature in the app allowing teachers to take photos and upload
                  children's assignments or projects which facilitates parents
                  in tracking the overall learning process of their children.
                </div>
              </div>
            </div>
          </div>
          {/* CONTENT 7 */}
          <div className="w-full md:flex flex-wrap md:gap-9 gap-[30px]">
            <div>
              <img src={Slowmode} alt="Family" />
            </div>
            <div className="flex flex-col justify-center w-full md:w-[864px] md:gap-[30px] gap-[15px]">
              <div
                className="text-[#00A0CB] md:text-[32px] text-xl pt-[30px]"
                style={{ fontFamily: "SF Pro Display EB" }}
              >
                Break free from traditional slow modes.
              </div>
              <div className="flex flex-col gap-10">
                <div
                  className="md:text-[32px] text-xl"
                  style={{
                    fontFamily: "SF Pro Display M",
                    lineHeight: "normal",
                  }}
                >
                  The Kindertown Admin plays a crucial role in the kindergarten
                  management system, efficiently handling all user information
                  and updates related to teachers, parents, and children. On the
                  administrator's page, it effectively manages the complexity of
                  powerful features such as handling student enrollment each
                  year, recording payments, managing the onboarding of new
                  teachers, and posting announcements.
                </div>
                <div
                  className="md:text-[32px] text-xl"
                  style={{
                    fontFamily: "SF Pro Display M",
                    lineHeight: "normal",
                  }}
                >
                  It enhances the visibility of the kindergarten, ensures
                  adherence to safety protocols, and boosts parents' confidence.
                  Most importantly, it significantly alleviates the burden of
                  tedious and slow processing tasks that traditional mode
                  kindergartens still face.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Content 8 - Video */}

      <div className="relative w-full  md:h-[900px] h-[280px] overflow-hidden">
        <div className="w-full md:pt-[108px] md:pl-[106px]">
          <video
            src={GirlBg}
            autoPlay
            loop
            muted
            className="absolute md:top-[-379px] left-0 w-full md:object-cover object-center"
          />

          <div className="absolute md:left-24 md:top-24 left-5 top-[21px] flex items-center">
            <div
              className="md:text-[40px] text-base md:w-[460px] w-[149px]"
              style={{ fontFamily: "SF Pro Display B", lineHeight: "normal" }}
            >
              Documenting the child's learning and joyful journey in
              kindergarten.
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:flex md:py-[200px] pt-[100px] md:px-[220px] pl-[31px] pr-[32px] flex justify-center items-center">
        <div className="w-full md:w-[1000px] flex flex-col justify-center items-center md:gap-[200px] gap-[100px]">
          {/*CONTENT 9*/}
          <div className="flex flex-col justify-center items-center gap-[30px] md:gap-[50px]">
            <div>
              <img src={Choose} alt="Teachers" className="w-32 h-32" />
            </div>
            <div className="flex md:w-[466px] md:h-40 items-center">
              <div
                className="text-[#752A15] md:text-[80px] text-center text-4xl md:leading-[90px]"
                style={{ fontFamily: "SF Pro Display B" }}
              >
                Why choose Kindertown?
              </div>
            </div>
            <div className="flex items-center">
              <div
                className="md:text-[32px] text-base"
                style={{
                  fontFamily: "SF Pro Display M",
                  lineHeight: "normal",
                }}
              >
                <div className="hidden md:flex items-center justify-center ">
                  Let's address the complex operations of the school to enhance
                </div>
                <div className="hidden md:flex items-center justify-center">
                  efficiency for both the school and teachers. Simultaneously,
                </div>
                <div className="hidden md:flex items-center justify-center">
                  let's effectively enhance the school's reputation.
                </div>

                <div className="md:hidden flex items-center justify-center ">
                  Let's address the complex operations of
                </div>
                <div className=" md:hidden flex items-center justify-center">
                  the school to enhance efficiency for both
                </div>
                <div className=" md:hidden flex items-center justify-center">
                  the school and teachers. Simultaneously,
                </div>
                <div className=" md:hidden flex items-center justify-center">
                  let's effectively enhance the school's
                </div>
                <div className=" md:hidden flex items-center justify-center">
                  reputation.
                </div>
              </div>
            </div>
          </div>

          {/*CONTENT 10*/}
          <div className="w-full flex flex-col justify-center items-center gap-[50px]">
            <div>
              <img
                src={Owners}
                alt="Owner"
                className="md:w-[600px] md:h-[426px]"
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-[30px]">
              <div
                className="md:text-[50px] text-[32px]"
                style={{ fontFamily: "SF Pro Display B" }}
              >
                School Owners
              </div>

              <div className="flex items-center">
                <div
                  className="md:text-[32px] text-base"
                  style={{
                    fontFamily: "SF Pro Display M",
                    lineHeight: "normal",
                  }}
                >
                  <div className="flex items-center justify-center ">
                    We will comprehensively understand the school and ensure
                    reputation
                  </div>
                  <div className="flex items-center justify-center">
                    and quality control. Supervise the operational aspects of
                    the school and
                  </div>
                  <div className="flex items-center justify-center">
                    improve communication between teachers and staff.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*CONTENT 11*/}

          <div className="w-full flex flex-col justify-center items-center gap-[50px]">
            <div>
              <img src={Admin} alt="Admin" className="w-[600px] h-[388px]" />
            </div>
            <div className="flex flex-col justify-center items-center gap-[30px]">
              <div style={{ fontSize: "50px", fontFamily: "SF Pro Display B" }}>
                Administrators
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
                    An advanced management system with technological records,
                  </div>
                  <div className="flex items-center justify-center">
                    significantly enhancing efficiency and saving time and money
                    in
                  </div>
                  <div className="flex items-center justify-center">
                    administrative tasks. It also addresses the sluggish
                    procedural issues
                  </div>
                  <div className="flex items-center justify-center">
                    often found intraditional school settings.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*CONTENT 12*/}
          <div className="w-full flex flex-col justify-center items-center gap-[50px]">
            <div>
              <img
                src={Teacher2}
                alt="Teacher"
                className="w-[600px] h-[406px]"
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-[30px]">
              <div style={{ fontSize: "50px", fontFamily: "SF Pro Display B" }}>
                Teachers
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
                    Effectively enhance accountability for teachers regarding
                    student
                  </div>
                  <div className="flex items-center justify-center">
                    attitudes and progress in learning. Additionally, it enables
                    faster
                  </div>
                  <div className="flex items-center justify-center">
                    real-time synchronization of students' assignments and
                    activities
                  </div>
                  <div className="flex items-center justify-center">
                    within the school.
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*CONTENT 13*/}
          <div className="flex flex-col justify-center items-center gap-[50px]">
            <div>
              <img src={Parent} alt="Parent" className="w-[530px] h-[450px]" />
            </div>
            <div className="flex flex-col justify-center items-center gap-[30px]">
              <div style={{ fontSize: "50px", fontFamily: "SF Pro Display B" }}>
                Parents
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
                    Stay informed in real-time about your child's learning
                    progress, school
                  </div>
                  <div className="flex items-center justify-center">
                    activities, announcements, temperature records, kindergarten
                    check-ins,
                  </div>
                  <div className="flex items-center justify-center">
                    important updates, and convenient tuition payment options.
                    This system
                  </div>
                  <div className="flex items-center justify-center">
                    allows parents to engage more humanely and effectively with
                    school-
                  </div>
                  <div className="flex items-center justify-center">
                    related matters.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  coding asal utk why choose
      <div className="w-full flex flex-col justify-center items-center px-[220px] py-[200px]">
        <div className="w-[1000px] flex flex-col justify-center items-center gap-y-[200px]">
          <div className="flex flex-col justify-center items-center gap-[50px]">
            <div>
              <img src={Choose} alt="Teachers" className="w-32 h-32"></img>
            </div>
            <div className="flex w-[466px] h-40">
              <h1
                className="text-[#752A15] text-3xl/[80px]"
                style={{ fontSize: "80px", fontFamily: "SF Pro Bold" }}
              >
                Why choose Kindertown?
              </h1>
            </div>
            <div>
              <p
                style={{ fontFamily: "SF Pro Medium" }}
                className="text-3xl text-center"
              >
                Let's address the complex operations of the school to enhance
                efficiency for both the school and teachers. Simultaneously,
                let's effectively enhance the school's reputation.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div>
              <img
                src={Owners}
                alt="Owner"
                className="w-[600px] h-[426px]"
              ></img>
            </div>
            <div className="pt-[50px]">
              <h1 style={{ fontSize: "50px", fontFamily: "SF Pro Bold" }}>
                School Owners
              </h1>
            </div>
            <div className="pt-[30px]">
              <p
                style={{ fontFamily: "SF Pro Medium" }}
                className="text-3xl text-center"
              >
                We will comprehensively understand the school and ensure
                reputation and quality control. Supervise the operational
                aspects of the school and improve communication between teachers
                and staff.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div>
              <img
                src={Admin}
                alt="Admin"
                className="w-[600px] h-[388px]"
              ></img>
            </div>
            <div className="pt-[50px]">
              <h1 style={{ fontSize: "50px", fontFamily: "SF Pro Bold" }}>
                Administrators
              </h1>
            </div>
            <div className="pt-[30px]">
              <p
                style={{ fontFamily: "SF Pro Medium" }}
                className="text-3xl text-center"
              >
                An advanced management system with technological records,
                significantly enhancing efficiency and saving time and money in
                administrative tasks. It also addresses the sluggish procedural
                issues often found intraditional school settings.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div>
              <img
                src={Teacher2}
                alt="Admin"
                className="w-[600px] h-[406px]"
              ></img>
            </div>
            <div className="pt-[50px]">
              <h1 style={{ fontSize: "50px", fontFamily: "SF Pro Bold" }}>
                Teachers
              </h1>
            </div>
            <div className="pt-[30px]">
              <p
                style={{ fontFamily: "SF Pro Medium" }}
                className="text-3xl text-center"
              >
                Effectively enhance accountability for teachers regarding
                student attitudes and progress in learning. Additionally, it
                enables faster real-time synchronization of students'
                assignments and activities within the school.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div>
              <img
                src={Parent}
                alt="Admin"
                className="w-[530px] h-[450px]"
              ></img>
            </div>
            <div className="pt-[50px]">
              <h1 style={{ fontSize: "50px", fontFamily: "SF Pro Bold" }}>
                Parents
              </h1>
            </div>
            <div className="pt-[30px]">
              <p
                style={{ fontFamily: "SF Pro Medium" }}
                className="text-3xl text-center"
              >
                Stay informed in real-time about your child's learning progress,
                school activities, announcements, temperature records,
                kindergarten check-ins, important updates, and convenient
                tuition payment options. This system allows parents to engage
                more humanely and effectively with school-related matters.
              </p>
            </div>
          </div>
        </div>
      </div>
*/}
      {/*
      <div className="w-full flex flex-col justify-center items-center px-[220px] py-[200px]">
        <div className="w-[1000px] flex flex-col justify-center items-center gap-[50px]">
          <div className="flex flex-row justify-center items-center">
            <img src={Choose} alt="Teachers" className="w-32 h-32"></img>
          </div>
          <div className="flex flex-row justify-center items-center w-[466px] h-40">
            <h1
              className="text-[#752A15]"
              style={{ fontSize: "80px", fontFamily: "SF Pro Bold" }}
            >
              Why choose Kindertown?
            </h1>
          </div>
          <div className="flex flex-row justify-center items-center">
            <p className="text-3xl" style={{ fontFamily: "SF Pro Medium" }}>
              Let's address the complex operations of the school to enhance
              efficiency for both the school and teachers. Simultaneously, let's
              effectively enhance the school's reputation.
            </p>
          </div>
        </div>
  </div>*/}
    </>
  );
};

export default Home;
