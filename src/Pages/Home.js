import React from "react";
import GirlBg from "../assets/girl_child.mp4";

const Home = () => {
  return (
    <>
      <div className="w-full flex justify-center mt-[50px]">
        <div className="w-full max-w-[1000px] mt-[50px] flex flex-col">
          {/* CONTENT 1 */}
          <div>
            <img src="/image/home/main.svg" alt="" loading="lazy" />
          </div>

          <div className="w-full flex flex-col justify-center gap-[150px]">
            {/*Content 2 */}
            <div className="flex flex-col items-center w-full gap-[60px]">
              <div
                className="w-[610px] text-[80px] text-center leading-[90px]"
                style={{ fontFamily: "SF Pro Bold" }}
              >
                Zero - Worries. Zero - Hassle.
              </div>
              <div
                className="w-[1000px] text-center my-6 text-[32px]"
                style={{ fontFamily: "SF Pro Medium" }}
              >
                A child's learning world begins in the classroom, using tools
                that are flexible, easy to operate, prioritise privacy,
                accessibility, and sustainability. Parents will have a better
                understanding of their child's journey in kindergarten because
                of our products.
              </div>
            </div>
          </div>

          {/*CONTENT 3 */}
          <div className="w-full mt-[50px] max-w-[1000px] justify-center">
            <h1 className="text-center my-20 text-3xl font-bold">
              Kindertown’s app super highlight
            </h1>
            <div className="flex flex-col md:flex-row md:flex-wrap justify-between">
              <div className="md:w-[320px] md:h-[460px] md:rounded-[50px] bg-[#F67F00] flex flex-col justify-center items-center gap-[60px]">
                <div>
                  <img
                    src="/image/home/planner.svg"
                    alt="Planner"
                    className="pb-6"
                  ></img>
                </div>

                <div className="flex flex-col items-center gap-5">
                  <div className="px-10 pt-4">
                    <h2 className="text-center font-bold text-2xl">
                      Say goodbye to enrolment worries
                    </h2>
                  </div>

                  <div className="font-semibold pt-3 w-80">
                    <p className="px-[31px] text-[20px] text-center text-xl">
                      You can now secure a seat in your preferred kindergarten
                      in Kindertown.
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:w-[320px] md:h-[460px] md:rounded-[50px] bg-[#FFC19F]  flex flex-col justify-center items-center ">
                <div>
                  <img
                    src="/image/home/child.svg"
                    alt="Planner"
                    className="pb-6"
                  ></img>
                </div>
                <div className="px-10 pt-4">
                  <h2 className="text-center font-bold text-2xl">
                    Know what your kids up to in school
                  </h2>
                </div>
                <div className="font-semibold pt-3 w-80">
                  <p className="px-[31px] text-[20px] text-center text-xl">
                    Stay informed about your kids’ academic status, performance
                    and more.
                  </p>
                </div>
              </div>
              <div className="md:w-[320px] md:h-[460px] md:rounded-[50px] bg-[#FCBF4A]  flex flex-col justify-center items-center ">
                <div>
                  <img
                    src="/image/home/kids-playground.svg"
                    alt="Planner"
                    className="pb-6 h-30 mb-1"
                  ></img>
                </div>
                <div className="px-5 pt-4">
                  <h2 className="text-center font-bold text-2xl">
                    Never miss a school event or class activity
                  </h2>
                </div>
                <div className="font-semibold pt-3 w-80 mb-4">
                  <p className="px-[31px] text-[20px] text-center text-xl">
                    Stay in the loop with all the latest happenings in school.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:flex-wrap justify-between mt-8">
              <div className="md:w-[320px] md:h-[460px] md:rounded-[50px] bg-[#FDE0A4] flex flex-col justify-center items-center">
                <div>
                  <img
                    src="/image/home/computer.svg"
                    alt="Planner"
                    className="pb-6 h-30 mb-1"
                  ></img>
                </div>
                <div className="px-5 pt-4">
                  <h2 className="text-center font-bold text-2xl">
                    Pay your school fees with ease
                  </h2>
                </div>
                <div className="font-semibold pt-3 w-80 mb-4">
                  <p className="px-[31px] text-[20px] text-center text-xl">
                    Make your school fee payments instantly with only a few
                    clicks.
                  </p>
                </div>
              </div>
              <div className="md:w-[320px] md:h-[460px] md:rounded-[50px] bg-[#E0956C] flex flex-col justify-center items-center">
                <div>
                  <img
                    src="/image/home/pencils.png"
                    alt="Planner"
                    className="pb-6 h-30 mb-1"
                  ></img>
                </div>
                <div className="px-8 pt-4">
                  <h2 className="text-center font-bold text-2xl">
                    Marketplace that brings convenience
                  </h2>
                </div>
                <div className="font-semibold pt-3 w-80 mb-4">
                  <p className="px-[31px] text-[20px] text-center text-xl">
                    Supplying resources that cater to your child's needs at any
                    moment.
                  </p>
                </div>
              </div>
              <div className="md:w-[320px] md:h-[460px] md:rounded-[50px] bg-[#FFDDB9] flex flex-col justify-center items-center">
                <div>
                  <img
                    src="/image/home/tel.svg"
                    alt="Planner"
                    className="pb-6 h-30 mb-1"
                  ></img>
                </div>
                <div className="px-8 pt-4">
                  <h2 className="text-center font-bold text-2xl">
                    Discover countless powerful features
                  </h2>
                </div>
                <div className="font-semibold pt-3 w-80 mb-4">
                  <p className="px-[31px] text-[20px] text-center text-xl">
                    Super-strong interaction function between teachers, students
                    and parents.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#FFF7EF] flex justify-center mt-[50px]">
        <div className="w-full max-w-[1000px] mt-[50px] flex flex-col mb-20">
          {/*Content 4 */}
          <div className="flex flex-col justify-center items-center mt-[40px]">
            <img src="/image/home/measure.svg" alt="" loading="lazy" />
          </div>
          <div className="flex flex-col justify-center items-center w-full">
            <div
              className="w-[755px] text-[80px] text-[#7A5AF8] text-center leading-[90px] mt-20"
              style={{ fontFamily: "SF Pro Bold" }}
            >
              Essential tools. Powerful system.
            </div>
          </div>

          <div className="flex flex-row w-full justify-center items-center mt-28 flex-wrap">
            {/*Content 5 */}
            <div className="flex flex-row w-[1000px]">
              <div className="flex flex-col w-20 h-25">
                <img src="/image/home/family.svg"></img>
              </div>
              <div className="flex flex-col flex-grow md:ml-10 md:mt-6">
                <h2 className="text-[#4D9138] text-2xl font-bold">
                  Child's Learning Journey
                </h2>
                <p className="text-xl font-medium mt-2 w-[794px]">
                  Through the powerful Kindertown Parents mobile application,
                  not only does it enhance the intimate relationship between
                  parents and children, but it also makes it easy for parents to
                  find outstanding kindergartens for their children, preparing
                  them for future enrollment. Our system provides the simplest
                  and most convenient registration process and payment methods.
                </p>
                <p className="text-xl font-medium mt-6 w-[794px]">
                  It also includes features such as connectivity with school
                  CCTV, essential management features, and adorable widgets.
                  This allows you to track every detail of your child's learning
                  journey at anytime, anywhere, ensuring that no important
                  information is missed out.
                </p>
              </div>
            </div>
            {/*Content 6 */}
            <div className="flex flex-row w-[1000px]  mt-20">
              <div className="flex flex-col w-20 h-25">
                <img src="/image/home/teachers.svg"></img>
              </div>
              <div className="flex flex-col flex-grow md:ml-10 md:mt-6">
                <h2 className="text-[#752912] text-2xl font-bold">
                  We understand the busyness of teachers
                </h2>
                <p className="text-xl font-medium mt-2 w-[794px]">
                  Kindertown Teacher strengthens the connection between
                  children, parents, and teachers. Recognizing the challenge of
                  guiding the learning process and organizing details for
                  numerous children, we understand the need for a powerful and
                  multifunctional system to manage children's educational
                  progress.
                </p>
                <p className="text-xl font-medium mt-6 w-[794px]">
                  Kindertown Teacher effectively addresses this challenge,
                  enabling teachers to conveniently record children's learning
                  advancements and activities. In addition, the ‘Collection’
                  feature in the app allowing teachers to take photos and upload
                  children's assignments or projects which facilitates parents
                  in tracking the overall learning process of their children.
                </p>
              </div>
            </div>
            {/*Content 7 */}
            <div className="flex flex-row w-[1000px]  mt-20">
              <div className="flex flex-col w-20 h-25">
                <img src="/image/home/slowmode.png"></img>
              </div>
              <div className="flex flex-col flex-grow md:ml-10 md:mt-6">
                <h2 className="text-[#00A0CB] text-2xl font-bold">
                  We understand the busyness of teachers
                </h2>
                <p className="text-xl font-medium mt-2 w-[794px]">
                  The Kindertown Admin plays a crucial role in the kindergarten
                  management system, efficiently handling all user information
                  and updates related to teachers, parents, and children. On the
                  administrator's page, it effectively manages the complexity of
                  powerful features such as handling student enrollment each
                  year, recording payments, managing the onboarding of new
                  teachers, and posting announcements.
                </p>
                <p className="text-xl font-medium mt-6 w-[794px]">
                  It enhances the visibility of the kindergarten, ensures
                  adherence to safety protocols, and boosts parents' confidence.
                  Most importantly, it significantly alleviates the burden of
                  tedious and slow processing tasks that traditional mode
                  kindergartens still face.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Content 8 - Video */}
      <div className="relative w-full h-screen  overflow-hidden">
        <video
          src={GirlBg}
          autoPlay
          loop
          muted
          className="absolute  top-[-330px] left-0 w-full md:h-1-2 object-cover object-center"
        />
        <div className="relative bottom-0 left-24 top-24 flex justify-start items-center w-[460px] h-60">
          <h1 className="text-4xl font-bold">
            Documenting the child's learning and joyful journey in kindergarten.
          </h1>
        </div>
      </div>

      <div className="w-full justify-center">
        <div className="w-[1000px] items-center"> </div>
      </div>
    </>
  );
};

export default Home;
