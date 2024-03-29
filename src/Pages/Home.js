import React from "react";

import GirlBg from "../assets/girl_child.mp4";
import Planner from "../assets/home/planner.png";
import Child from "../assets/home/child.png";
import Playground from "../assets/home/playground.png";
import Tel from "../assets/home/tel.png";
import Pencil from "../assets/home/pencils.png";
import Computer from "../assets/home/computer.png";
import Tools from "../assets/home/measure.png";
import Family from "../assets/home/family.png";
import Teachers from "../assets/home/teachers.png";
import Slowmode from "../assets/home/slowmode.png";
import Choose from "../assets/home/choose.png";
import Owners from "../assets/home/schoolowners.png";
import Admin from "../assets/home/admin.png";
import Teacher2 from "../assets/home/teachers2.png";
import Parent from "../assets/home/parent.png";
import Main from "../assets/home/main.png";
const Home = () => {
  return (
    <>
      <div className=" flex justify-center mt-[50px]">
        <div className="md:w-[1000px] mt-[50px] flex flex-col">
          {/* CONTENT 1 */}
          <div>
            <img src={Main} alt="" loading="lazy" />
          </div>

          <div className="w-full flex flex-col justify-center gap-[150px]">
            {/*Content 2 */}
            <div className="flex flex-col items-center w-full gap-[60px]">
              <div
                className="w-full max-w-[610px] text-[80px] text-center leading-[90px]"
                style={{ fontFamily: "SF Pro Bold" }}
              >
                Zero - Worries. Zero - Hassle.
              </div>
              <div
                className="w-full text-center text-[32px]"
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

          <div className="w-full mt-[50px] max-w-[1000px] justify-center">
            <h1 className="text-center my-20 text-3xl font-bold">
              Kindertown’s app super highlight
            </h1>
            <div className="flex flex-col md:flex-row md:flex-wrap justify-between">
              <div className="md:w-[315px] md:h-[460px] md:rounded-[30px] py-[70px] pl-[27px] pr-[18px] bg-[#F67F00] flex flex-col justify-center items-center gap-[60px]">
                <div>
                  <img
                    src={Planner}
                    alt="Planner"
                    className="md:w-40 md:h-[120px]"
                  />
                </div>

                <div className="flex flex-col items-center gap-5 w-[270px] md:h-full">
                  <div
                    className="text-center text-xl leading-normal w-full"
                    style={{ fontFamily: "SF Pro Bold" }}
                  >
                    <div className="flex items-center justify-center h-6">
                      Say goodbye to
                    </div>
                    <div className="flex items-center justify-center h-6">
                      enrolment worries
                    </div>
                  </div>

                  <div className="text-center text-[20px] leading-normal">
                    <div
                      className="flex items-center justify-center h-[25px]"
                      style={{ fontFamily: "SF Pro Medium" }}
                    >
                      You can now secure
                    </div>
                    <div
                      className="flex items-center justify-center h-[25px]"
                      style={{ fontFamily: "SF Pro Medium" }}
                    >
                      a seat in your preferred
                    </div>
                    <div
                      className="flex items-center justify-center h-[25px]"
                      style={{ fontFamily: "SF Pro Medium" }}
                    >
                      kindergarten in Kindertown.
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-[315px] md:h-[460px] md:rounded-[30px] py-[70px] pl-[22px] pr-[23px] bg-[#FFC19F]  flex flex-col justify-center items-center gap-[60px]">
                <div>
                  <img
                    src={Child}
                    alt="Child"
                    className="md:h-[120px] md:w-[133px]"
                  />
                </div>

                <div className="flex flex-col items-center gap-5 w-[270px] md:h-full">
                  <div
                    className="text-center text-xl leading-normal w-full"
                    style={{ fontFamily: "SF Pro Bold" }}
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
                      style={{ fontFamily: "SF Pro Medium" }}
                    >
                      Stay informed about your
                    </div>
                    <div
                      className="flex items-center justify-center h-[25px]"
                      style={{ fontFamily: "SF Pro Medium" }}
                    >
                      kids’ academic status,
                    </div>
                    <div
                      className="flex items-center justify-center h-[25px]"
                      style={{ fontFamily: "SF Pro Medium" }}
                    >
                      performance and more.
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-[314px] md:h-[460px] md:rounded-[30px] pt-[70px] pb-[93px] px-[21px] bg-[#FCBF4A]  flex flex-col justify-center items-center gap-[60px]">
                <div>
                  <img
                    src={Playground}
                    alt="Child"
                    className="md:h-[120px] md:w-[137px]"
                  />
                </div>

                <div className="flex flex-col items-center gap-[18px] w-full md:h-full">
                  <div
                    className="text-center text-xl leading-normal w-full"
                    style={{ fontFamily: "SF Pro Bold" }}
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
                      style={{ fontFamily: "SF Pro Medium" }}
                    >
                      Stay in the loop with all the{" "}
                    </div>
                    <div
                      className="h-[25px]"
                      style={{ fontFamily: "SF Pro Medium" }}
                    >
                      latest happenings in school.
                    </div>
                    {/* <div
                      className="flex items-center justify-center h-[25px]"
                      style={{ fontFamily: "SF Pro Medium" }}
                    >
                      Stay in the loop with all the
                    </div>

                    <div
                      className="flex items-center justify-center h-[25px]"
                      style={{ fontFamily: "SF Pro Medium" }}
                    >
                      latest happenings in school.
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:flex-wrap justify-between mt-7">
              <div className="md:w-[315px] md:h-[460px] md:rounded-[30px] bg-[#FDE0A4] pl-[27px] pr-[18px] flex flex-col justify-center items-center gap-[60px] py-[70px]">
                <div>
                  <img
                    src={Computer}
                    alt="Gadget"
                    className="md:h-[120px] md:w-[150px]"
                  />
                </div>

                <div className="flex flex-col items-center gap-5 w-[270px] md:h-full">
                  <div
                    className="text-center text-xl leading-normal w-full"
                    style={{ fontFamily: "SF Pro Bold" }}
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
                      style={{ fontFamily: "SF Pro Medium" }}
                    >
                      Make your school fee
                    </div>

                    <div
                      className="flex items-center justify-center h-[25px]"
                      style={{ fontFamily: "SF Pro Medium" }}
                    >
                      payments instantly with
                    </div>
                    <div
                      className="flex items-center justify-center h-[25px]"
                      style={{ fontFamily: "SF Pro Medium" }}
                    >
                      only a few clicks.
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-[315px] md:h-[460px] md:rounded-[30px]  bg-[#E0956C] flex flex-col justify-center items-center gap-[60px] py-[70px] pl-[27px] pr-[18px] ">
                <div>
                  <img
                    src={Pencil}
                    alt="Pencil"
                    className="md:h-[120px] md:w-[120px]"
                  />
                </div>

                <div className="flex flex-col items-center gap-5 w-[270px] md:h-full">
                  <div
                    className="text-center text-xl leading-normal w-full"
                    style={{ fontFamily: "SF Pro Bold" }}
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
                      style={{ fontFamily: "SF Pro Medium" }}
                    >
                      Supplying resources that
                    </div>

                    <div
                      className="flex items-center justify-center h-[25px]"
                      style={{ fontFamily: "SF Pro Medium" }}
                    >
                      cater to your child's needs
                    </div>
                    <div
                      className="flex items-center justify-center h-[25px]"
                      style={{ fontFamily: "SF Pro Medium" }}
                    >
                      at any moment.
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-[314px] md:h-[460px] md:rounded-[30px]  bg-[#FFDDB9] flex flex-col justify-center items-center gap-[60px] px-[22px] py-[70px]">
                <div>
                  <img
                    src={Tel}
                    alt="Telephone"
                    className="md:h-[120px] md:w-[126px]"
                  />
                </div>
                <div className="flex flex-col items-center gap-5 w-[270px] md:h-full">
                  <div
                    className="text-center text-xl leading-normal w-full"
                    style={{ fontFamily: "SF Pro Bold" }}
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
                      style={{ fontFamily: "SF Pro Medium" }}
                    >
                      Super-strong interaction
                    </div>

                    <div
                      className="flex items-center justify-center h-[25px]"
                      style={{ fontFamily: "SF Pro Medium" }}
                    >
                      function between teachers,
                    </div>
                    <div
                      className="flex items-center justify-center h-[25px]"
                      style={{ fontFamily: "SF Pro Medium" }}
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

      <div className="w-full flex flex-col bg-[#FFF7EF] mt-24 py-[150px] px-[220px]">
        {/*CONTENT 4*/}
        <div className="w-[1000px] mx-auto flex flex-col justify-center items-center gap-y-12">
          <div className="flex flex-col justify-center items-center">
            <img src={Tools} className="w-32 h-32" alt="Tools" />
          </div>
          <div className="flex flex-col items-center w-full md:h-full">
            <div
              className="text-center text-[80px] text-[#7A5AF8] leading-[90px] w-full"
              style={{ fontFamily: "SF Pro Display B" }}
            >
              <div className="flex items-center justify-center h-[90px]">
                Essential tools.
              </div>
              <div className="flex items-center justify-center h-[90px]">
                Powerful system.
              </div>
            </div>
          </div>
        </div>

        <div className="w-[1000px] mx-auto flex flex-col justify-center items-center pt-[200px] gap-y-[150px]">
          {/* REFER HERE FOR SAMPLE */}

          {/* CONTENT 5 */}
          <div className="flex gap-9">
            <div>
              <img src={Family} alt="Family" />
            </div>
            <div className="flex flex-col justify-center w-[864px] gap-[30px]">
              <div
                className="text-[#4D9138] text-[32px] pt-[30px]"
                style={{ fontFamily: "SF Pro Extrabold" }}
              >
                Child's Learning Journey
              </div>
              <div className="flex flex-col gap-10">
                <div
                  className="text-[32px]"
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
                  className="text-[32px]"
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
          <div className="flex gap-9">
            <div>
              <img src={Teachers} alt="Family" />
            </div>
            <div className="flex flex-col justify-center w-[864px] gap-[30px]">
              <div
                className="text-[#752912] text-[32px] pt-[30px]"
                style={{ fontFamily: "SF Pro Extrabold" }}
              >
                We understand the busyness of teachers
              </div>
              <div className="flex flex-col gap-10">
                <div
                  className="text-[32px]"
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
                  className="text-[32px]"
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
          <div className="flex gap-9">
            <div>
              <img src={Slowmode} alt="Family" />
            </div>
            <div className="flex flex-col justify-center w-[864px] gap-[30px]">
              <div
                className="text-[#00A0CB] text-[32px] pt-[30px]"
                style={{ fontFamily: "SF Pro Extrabold" }}
              >
                Break free from traditional slow modes.
              </div>
              <div className="flex flex-col gap-10">
                <div
                  className="text-[32px]"
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
                  className="text-[32px]"
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
      <div className="relative w-full overflow-hidden">
        <div className="w-full h-[900px]">
          <video
            src={GirlBg}
            autoPlay
            loop
            muted
            className="absolute top-[-379px] left-0 w-full object-cover object-center"
          />

          <div className="relative bottom-0 left-24 top-24 flex justify-start items-center h-[130px]">
            <div>
              <div
                className="text-[40px] leading-normal"
                style={{ fontFamily: "SF Pro Bold" }}
              >
                Documenting the child's
              </div>
              <div
                className="text-[40px] leading-normal"
                style={{ fontFamily: "SF Pro Bold" }}
              >
                learning and joyful
              </div>
              <div
                className="text-[40px] leading-normal"
                style={{ fontFamily: "SF Pro Bold" }}
              >
                journey in kindergarten.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-[200px]  px-[220px] flex justify-center items-center">
        <div className="w-[1000px] flex flex-col justify-center items-center gap-y-[200px]">
          {/*CONTENT 9*/}
          <div className="flex flex-col justify-center items-center gap-[50px]">
            <div>
              <img src={Choose} alt="Teachers" className="w-32 h-32" />
            </div>
            <div className="flex w-[466px] h-40">
              <div
                className="text-[#752A15] leading-[90px]"
                style={{ fontSize: "80px", fontFamily: "SF Pro Display B" }}
              >
                Why choose Kindertown?
              </div>
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
                  Let's address the complex operations of the school to enhance
                </div>
                <div className="flex items-center justify-center">
                  efficiency for both the school and teachers. Simultaneously,
                </div>
                <div className="flex items-center justify-center">
                  let's effectively enhance the school's reputation.
                </div>
              </div>
            </div>
          </div>

          {/*CONTENT 10*/}
          <div className="w-full flex flex-col justify-center items-center gap-[50px]">
            <div>
              <img src={Owners} alt="Owner" className="w-[600px] h-[426px]" />
            </div>
            <div className="flex flex-col justify-center items-center gap-[30px]">
              <div style={{ fontSize: "50px", fontFamily: "SF Pro Display B" }}>
                School Owners
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
              <div style={{ fontSize: "50px", fontFamily: "SF Pro Bold" }}>
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
