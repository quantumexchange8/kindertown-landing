// Products.jsx
import React from "react";
import mobile from "../assets/download/mobile.png";
import phone from "../assets/download/phone.png";
import tab from "../assets/download/tablet.png";
import tab2 from "../assets/download/tablet2.png";
import button1 from "../assets/download/button1.svg";
import button2 from "../assets/download/button2.svg";
import button3 from "../assets/download/button3.svg";
import imac from "../assets/download/imac.svg";
import sticker1 from "../assets/download/sticker1.svg";
import sticker2 from "../assets/download/sticker2.svg";
import sticker3 from "../assets/download/sticker3.svg";
import sticker4 from "../assets/download/sticker4.svg";
import sticker5 from "../assets/download/sticker5.svg";
import sticker6 from "../assets/download/sticker6.svg";
import troli from "../assets/download/troli.svg";
import video from "../assets/download/video.mp4";
import video2 from "../assets/download/videobg.mp4";
import video3 from "../assets/download/videobg2.mp4";
import video4 from "../assets/download/videobg3.mp4";
import chat from "../assets/download/chat.svg";
import calendar from "../assets/download/calendar.svg";
import suhu from "../assets/download/suhu.svg";
import open from "../assets/download/open.svg";
import user from "../assets/download/user.svg";
const Download = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center gap-[200px] pt-[150px]">
        {/*CONTENT 1*/}
        <div className="w-full flex flex-col justify-center items-center px-[220px]">
          <div className="w-[1000px] flex flex-col justify-center items-center">
            <div
              className="text-[50px] text-center"
              style={{ fontFamily: "SF Pro Display B", lineHeight: "normal" }}
            >
              <div>You can download our Kindertown</div>
              <div>management system anytime from the</div>
              <div>Apple AppStore and Google PlayStore.</div>
              <div>Let's turn our ideas into reality together.</div>
            </div>
          </div>
        </div>
        <div className="w-[1000px] flex flex-wrap justify-center items-center gap-5">
          {/*CONTENT 2*/}
          <div className="relative md:w-[490px] md:h-[500px] md:rounded-[30px] bg-[#FFDFA1] pt-[44px] pl-[52px] pr-[30px] flex flex-col gap-6">
            <div className="flex flex-col justify-end gap-5">
              <div
                className="text-3xl  text-right"
                style={{ fontFamily: "SF Pro Display B" }}
              >
                Kindertown Parent
              </div>
              <div
                className="text-2xl text-[#666] text-right"
                style={{ fontFamily: "SF Pro Display M" }}
              >
                <div>Understanding the child's</div>
                <div>learning journey.</div>
              </div>
            </div>
            <div className="flex flex-col justify-center overflow-hidden">
              <div className="flex justify-start">
                <div className="flex flex-col justify-start relative top-[100px]">
                  <img
                    src={mobile}
                    alt="Mobile"
                    className="w-[250px] h-[508px]"
                  />
                </div>
                <div className="absolute bottom-0 right-0 p-[30px]">
                  <img src={button1} alt="Button1" />
                </div>
              </div>
            </div>
          </div>
          {/*CONTENT 3*/}
          <div className="relative md:w-[490px] md:h-[500px] md:rounded-[30px] bg-[#3F5DFF] pt-[41px] pb-[30px] pl-[62px] pr-[30px] flex flex-col gap-6">
            <div className="flex flex-col justify-end gap-5">
              <img src={tab} alt="Tablet" className="w-[365px] h-[280px]" />
            </div>
            <div className="flex flex-col justify-start">
              <div className="flex justify-start">
                <div className="flex flex-col justify-start items-start gap-5">
                  <div
                    className="text-3xl  text-left"
                    style={{ fontFamily: "SF Pro Display B" }}
                  >
                    Kindertown Parent
                  </div>
                  <div
                    className="text-2xl text-white text-left"
                    style={{ fontFamily: "SF Pro Display M" }}
                  >
                    <div>Escape the busyness, </div>
                    <div>save valuable time.</div>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 p-[30px]">
                  <img src={button2} alt="Button1" />
                </div>
              </div>
            </div>
          </div>
          {/*CONTENT 4*/}

          <div className="relative md:w-[1000px] md:h-[500px] md:rounded-[30px] bg-[#2FC300] flex items-center gap-6 overflow-hidden">
            <div className="flex gap-[99px]">
              <div className="w-[592px] h-[500px] flex flex-col items-end pt-[49px]">
                <div className="relative right-9">
                  <img src={imac} alt="Mobile" />
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div
                  className="text-[30px]"
                  style={{ fontFamily: "SF Pro Display B" }}
                >
                  Kindertown Admin
                </div>
                <div
                  className="flex flex-col text-2xl text-left text-white"
                  style={{
                    fontFamily: "SF Pro Display M",
                    lineHeight: "normal",
                  }}
                >
                  <div>No more sluggish</div>
                  <div>school enrollment </div>
                  <div>processes from now.</div>
                </div>
                <div className="absolute bottom-0 right-0 pr-[30px] pb-[30px]">
                  <img src={button3} alt="Button3" />
                </div>
              </div>
            </div>
          </div>

          {/* coding margin-method
          <div className="relative md:w-[1000px] md:h-[500px] md:rounded-[30px] bg-[#2FC300] pr-[30xp] flex gap-6 overflow-hidden">
            <div className="flex gap-[99px]">
              <div className="w-[592px] h-[500px] flex flex-col items-end">
                <div className="mt-12">
                  <img src={imac} alt="Mobile" />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-5">
                <div
                  className="text-[30px]"
                  style={{ fontFamily: "SF Pro Display B" }}
                >
                  Kindertown Admin
                </div>
                <div
                  className="flex flex-col text-2xl text-left text-white"
                  style={{
                    fontFamily: "SF Pro Display M",
                    lineHeight: "normal",
                  }}
                >
                  <div>No more sluggish</div>
                  <div>school enrollment </div>
                  <div>processes from now.</div>
                </div>
              </div>
            </div>
          </div>
                */}
          {/* method asal
          <div className="relative box-border md:w-[1000px] md:h-[500px] md:rounded-[30px] bg-[#2FC300] pt-[49px] pr-[30px] flex gap-6">
            <div className="flex justify-start gap-[99px] overflow-hidden">
              <div className="w-[592px] h-[500px] flex flex-col justify-start">
                <div className="relative right-10">
                  <img src={imac} alt="Mobile" />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center items-center">
                  <div className="flex flex-col justify-start gap-5">
                    <div
                      className="text-[30px]"
                      style={{ fontFamily: "SF Pro Display B" }}
                    >
                      Kindertown Admin
                    </div>
                    <div
                      className="text-2xl text-left text-white"
                      style={{
                        fontFamily: "SF Pro Display M",
                        lineHeight: "normal",
                      }}
                    >
                      <div>No more sluggish</div>
                      <div>school enrollment</div>
                      <div> processes from now.</div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 pr-[30px] pb-[30px]">
                    <img src={button3} alt="Button3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          */}
        </div>
        {/*CONTENT 5*/}
        <div className="w-[1000px] flex-col justify-center items-center">
          <div
            className="text-4xl"
            style={{ fontFamily: "SF Pro Display B", lineHeight: "50px" }}
          >
            We are dedicated to working with developers to transform their most
            outstanding ideas into applications that can revolutionize
            traditional kindergarten practices. That's why we are always
            striving to find more efficient ways to alleviate the busy workload
            of teachers and schools. More importantly, we aim to empower parents
            to understand their child's kindergarten journey through a powerful
            system, rather than just through conversation.
          </div>
        </div>
        {/*CONTENT 6*/}
        <div className="w-[1000px] flex flex-wrap justify-center items-center gap-5">
          <div className="relative md:w-[1000px] md:h-[500px] md:rounded-[30px] bg-[#D5FFCD] flex gap-[88px] pr-[114px] pl-[100px] pt-[100px] overflow-hidden">
            <div className="flex flex-col justify-center w-[400px] h-[180px]">
              <div
                className="text-[40px]"
                style={{ fontFamily: "SF Pro Display B", lineHeight: "normal" }}
              >
                No longer will it be troublesome to pay school fees through
                doorstep visits.
              </div>
            </div>
            <div className="flex flex-col justify-center w-[300px] h-[609px]">
              <img src={phone} alt="Mobile" />
            </div>
          </div>
          <div className="relative md:w-[490px] md:h-[500px] md:rounded-[30px] bg-[#176200] flex flex-col px-[45px] pt-[66px] pb-[85px] gap-[51px]">
            <div className="flex flex-col justify-center items-center gap-[7px]">
              <div className="flex justify-center items-center gap-[10px]">
                <div className="flex flex-col">
                  <img src={sticker1} alt="Sticker1" />
                </div>
                <div className="flex flex-col">
                  <img src={sticker2} alt="Sticker2" />
                </div>
                <div className="flex flex-col">
                  <img src={sticker3} alt="Sticke3" />
                </div>
              </div>
              <div className="flex justify-center items-center gap-[10px]">
                <div className="flex flex-col">
                  <img src={sticker4} alt="Sticker4" />
                </div>
                <div className="flex flex-col">
                  <img src={sticker5} alt="Sticker5" />
                </div>
                <div className="flex flex-col">
                  <img src={sticker6} alt="Sticker6" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div
                className="text-3xl text-white text-center"
                style={{ fontFamily: "SF Pro Display B", lineHeight: "normal" }}
              >
                <div>Thoughtful widgets can also</div>
                <div> help children cultivate</div>
                <div>good habits.</div>
              </div>
            </div>
          </div>
          <div className="relative md:w-[490px] md:h-[500px] md:rounded-[30px] bg-[#D5FFCD] flex flex-col pl-[56px] pr-[55px] pt-[80px] pb-[55px] gap-[86px]">
            <div className="flex flex-col justify-center items-center">
              <div
                className="text-3xl text-center"
                style={{ fontFamily: "SF Pro Display B", lineHeight: "normal" }}
              >
                <div>You can easily find the </div>
                <div>stationery children need on</div>
                <div>the marketplace.</div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src={troli} alt="Troli" className="w-[200px] h-[178px]" />
            </div>
          </div>
          <div className="relative md:w-[490px] md:h-[500px] md:rounded-[30px] bg-[#D5FFCD] flex flex-col px-[40px] pt-[62px] pb-[61px] gap-[50px]">
            <div className="flex flex-col justify-center items-center">
              <img src={chat} alt="Chat" className="w-[200px] h-[196px]" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <div
                className="text-3xl text-center"
                style={{ fontFamily: "SF Pro Display B", lineHeight: "normal" }}
              >
                <div>In community, schools, </div>
                <div>teachers and parents will</div>
                <div>share the delightful moments</div>
                <div>of children's growth together.</div>
              </div>
            </div>
          </div>
          <div className="relative md:w-[490px] md:h-[500px] md:rounded-[30px] flex flex-col pr-[38px] pl-[152px] pt-[357px] pb-[43px]">
            <video
              className="absolute inset-0 w-full h-full object-cover rounded-[30px]"
              autoPlay
              loop
              muted
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="relative bottom-0 right-0 flex justify-start items-center w-[300px] h-[100px]">
              <div className="flex flex-col">
                <div
                  className="text-[30px] text-right"
                  style={{
                    fontFamily: "SF Pro Display B",
                    lineHeight: "normal",
                  }}
                >
                  <div>Capture the moments</div>
                  <div>of childlike innocence</div>
                  <div>and earnest learning.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-[300px] pt-[300px] pb-[200px]">
        <div className="w-[1000px] flex flex-col justify-center items-center gap-[100px]">
          <div className="flex flex-col">
            <div
              className="text-[70px] text-center"
              style={{ fontFamily: "SF Pro Display B", lineHeight: "normal" }}
            >
              <div>
                More <span className="text-[#FF5F5F]"> intelligent </span>
                experiences
              </div>
              <div>
                with <span className="text-[#F67F00]"> Kindertown</span> system
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-5">
            <div className="relative md:w-[1000px] md:h-[500px] md:rounded-[30px] bg-[#7F5FFF] flex items-center gap-20 pr-[29px] pb-[58px] pt-[57px] pl-[99px]">
              <div className="flex flex-col w-[292px] h-[180px] justify-center items-center">
                <div
                  className="text-3xl text-white"
                  style={{ fontFamily: "SF Pro Display B" }}
                >
                  <div>With just a tap of </div>
                  <div>their fingertips,</div>
                  <div>teachers can tackle</div>
                  <div>the majority of their</div>
                  <div> ongoing busyness.</div>
                </div>
              </div>
              <div className="flex flex-col">
                <img src={tab2} alt="Tablet2" />
              </div>
            </div>
            <div className="relative md:w-[1000px] md:h-[500px] md:rounded-[30px] flex gap-20 pr-[51px] pb-[51px] pt-[279px] pl-[623px]">
              <video
                className="absolute inset-0 w-full h-full object-cover rounded-[30px]"
                autoPlay
                loop
                muted
              >
                <source src={video2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="relative bottom-0 right-0 flex items-center w-[326px] h-[170px]">
                <div className="flex flex-col">
                  <div
                    className="text-[30px] text-right text-white"
                    style={{
                      fontFamily: "SF Pro Display B",
                      lineHeight: "normal",
                    }}
                  >
                    <div>The era of intelligence</div>
                    <div>is gradually enabling</div>
                    <div>teachers to save a</div>
                    <div>considerable amount</div>
                    <div>of valuable time.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative md:w-[490px] md:h-[500px] md:rounded-[30px] bg-[#582DFF] flex flex-col justify-center items-center gap-[90px] pb-[113px] pt-[54px] px-[35px]">
              <div className="flex flex-col justify-center items-center">
                <img src={calendar} alt="Calendar" />
              </div>
              <div className="flex flex-col w-[420px] h-[60px] justify-center items-center">
                <div
                  className="text-3xl text-white text-center"
                  style={{ fontFamily: "SF Pro Display B" }}
                >
                  <div>An easier arrangement</div>
                  <div>for classroom schedules.</div>
                </div>
              </div>
            </div>
            <div className="relative md:w-[490px] md:h-[500px] md:rounded-[30px] bg-[#7F5FFF] flex flex-col justify-center items-center gap-[69px] pb-[93px] pt-[54px] px-[35px]">
              <div className="flex flex-col justify-center items-center">
                <img src={suhu} alt="Thermometer" />
              </div>
              <div className="flex flex-col w-[420px] h-[101px] justify-center items-center">
                <div
                  className="text-3xl text-center"
                  style={{ fontFamily: "SF Pro Display B" }}
                >
                  <div>We also place great</div>
                  <div>importance on students' </div>
                  <div>health conditions.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1000px] flex flex-col justify-center items-center gap-[100px]">
          <div className="flex flex-col justify-center items-center">
            <div
              className="text-[70px] text-center"
              style={{ fontFamily: "SF Pro Display B", lineHeight: "normal" }}
            >
              <div>Kindertown is more than just a </div>
              <div>
                <span className="text-[#814300]"> system</span>; it's like your
              </div>
              <div className="text-[#23D300]">Intelligent Assistant.</div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-5">
            <div className="relative md:w-[1000px] md:h-[500px] md:rounded-[30px] flex gap-20 pr-[643px] pb-[57px] pt-[273px] pl-[57px]">
              <video
                className="absolute inset-0 w-full h-full object-cover rounded-[30px]"
                autoPlay
                loop
                muted
              >
                <source src={video3} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="relative bottom-0 left-0 flex items-center w-[300px] h-[170px]">
                <div className="flex flex-col">
                  <div
                    className="text-[30px] text-left"
                    style={{
                      fontFamily: "SF Pro Display B",
                      lineHeight: "normal",
                    }}
                  >
                    <div>The most</div>
                    <div>indispensable tool</div>
                    <div>for educational </div>
                    <div>institutions is an </div>
                    <div>Intelligent Assistant.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative md:w-[1000px] md:h-[500px] md:rounded-[30px] bg-[#FCBF4A] flex items-center pr-[122px] py-[75px] pl-[108px] gap-[54px]">
              <div className="flex flex-col justify-center items-center w-[440px]">
                <div
                  className="text-3xl"
                  style={{ fontFamily: "SF Pro Display B" }}
                >
                  <div className="flex flex-col  gap-[30px]">
                    <div className="w-[370px] h-[60px] text-[#FF0001]">
                      Do we still have to line up for school enrollment?{" "}
                    </div>
                    <div className="w-[370px] h-[60px] text-[#4800FF]">
                      Can we submit our documents online?
                    </div>
                    <div className="w-[370px] h-[60px] text-[#00821D]">
                      Can I reserve a seat for my child in advance?
                    </div>
                    <div className="w-[440px] h-[60px]">
                      It seems like every year, parents ask the same questions!
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <img
                  src={open}
                  alt="OpenSign"
                  className="w-[250px] h-[298px]"
                />
              </div>
            </div>
            <div className="relative md:w-[1000px] md:h-[500px] md:rounded-[30px] bg-[#FFDA92] flex items-center pr-[76px] py-[133px] pl-[108px] gap-[96px]">
              <div className="flex flex-col justify-center items-center">
                <img src={user} alt="User" className="w-[250px] h-[234px]" />
              </div>
              <div className="flex w-[470px] flex-col items-center justify-center">
                <div
                  className="text-3xl text-left"
                  style={{
                    fontFamily: "SF Pro Display B",
                    lineHeight: "normal",
                  }}
                >
                  <div> When developing our system,</div>
                  <div> we have already incorporated</div>
                  <div> privacy features and controls</div>
                  <div> to safeguard the personal</div>
                  <div>information of schools, teachers,</div>
                  <div> parents, and students.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*CONTENT VIDEO*/}
      <div className="relative w-full overflow-hidden">
        <div className="w-full h-[900px] pl-[114px] pb-[117px] pt-[603px] pr-[836px]">
          <video
            src={video4}
            autoPlay
            loop
            muted
            className="absolute top-[-257px] left-0 w-full object-cover object-center"
          />

          <div className="relative bottom-0 left-0 flex justify-center items-center w-[490px] h-[180px]">
            <div
              className="text-[40px] text-white"
              style={{ fontFamily: "SF Pro Display B", lineHeight: "normal" }}
            >
              <div>From the moment children</div>
              <div>step into kindergarten, </div>
              <div>their journey of learning</div>
              <div>dreams begins.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-[100px] pt-[300px]">
        <div className="w-[1000px] flex flex-col">
          <div
            className="text-[32px] text-center"
            style={{ fontFamily: "SF Pro Display M", lineHeight: "normal" }}
          >
            <div>
              At any moment, feel free to leave your contact information without{" "}
            </div>
            <div>
              hesitation, and our attentive service personnel will get in touch
              with you.
            </div>
            <div>Only through quality communication can</div>
            <div>we understand your needs.</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Download;
