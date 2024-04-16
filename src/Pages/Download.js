import React, { useState, useRef } from "react";

import Swal from "sweetalert2";

import emailjs from "@emailjs/browser";
import "./modal.css";

import Modal1 from "../components/modal/modalparent";

import Modal2 from "../components/modal/modalteacher";
import Modal3 from "../components/modal/modaladmin";
import mobile from "../assets/download/mobile.png";
import phone from "../assets/download/phone.png";
import tab from "../assets/download/tablet.png";
import tab2 from "../assets/download/tablet2.png";
import button1 from "../assets/download/button1.svg";
import button2 from "../assets/download/button2.svg";
import button3 from "../assets/download/button3.svg";
import imac from "../assets/download/imac.png";
import sticker1 from "../assets/download/sticker1.svg";
import sticker2 from "../assets/download/sticker2.svg";
import sticker3 from "../assets/download/sticker3.svg";
import sticker4 from "../assets/download/sticker4.png";
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
import icon from "../assets/download/Mask group.png";
import tele from "../assets/download/tele.svg";
const Download = () => {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent multiple submissions

    setIsSubmitting(true);

    const formData = new FormData(form.current);
    const userEmail = formData.get("from_email"); // Assuming the input field has name="email"

    emailjs
      //change the id, template id and public key
      .sendForm("service_pszh76a", "template_4m4ms5u", form.current, {
        publicKey: "gQzDzwQht4bausMz-",
        userEmail: userEmail,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsSubmitting(false); // Enable the button after submission
          Swal.fire("Success!", "Form submitted successfully", "success");
          form.current.reset(); // Reset the form
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsSubmitting(false); // Enable the button after submission
          Swal.fire("Error!", "Form submission failed", "error");
        }
      );
  };
  return (
    <>
      {/*Content 1*/}

      <div className="w-full flex flex-col justify-center items-center md:pt-[150px] pt-[80px] md:px-[220px] pl-[31px] pr-[32px]">
        <div className="w-full md:w-[1000px] flex flex-col justify-center items-center">
          <div
            className="md:text-[50px] text-2xl text-center"
            style={{ fontFamily: "SF Pro Display B", lineHeight: "normal" }}
          >
            <div className="hidden md:flex flex-col">
              <div>You can download our Kindertown</div>
              <div>management system anytime from the</div>
              <div>Apple AppStore and Google PlayStore.</div>
              <div>Let's turn our ideas into reality together.</div>
            </div>
            <div className="md:hidden flex flex-col">
              You can download our Kindertown management system anytime from the
              Apple AppStore and Google PlayStore. Let's turn our ideas into
              reality together.
            </div>
          </div>
        </div>
      </div>

      {/*Content 2*/}

      <div className="w-full flex flex-col md:pt-[200px] pt-[50px] md:gap-5 gap-[30px]">
        <div className="w-full flex flex-col justify-center items-center md:px-[220px] pl-[31px] pr-[32px]">
          <div className="w-full md:w-[1000px] flex md:flex flex-wrap justify-center items-center md:gap-5 gap-[30px]">
            <div className="relative w-full md:w-[490px] md:h-[500px] h-[337px] md:rounded-[30px] rounded-[20px] bg-[#FFDFA1] pt-[44px] md:pl-[52px] pl-[35px] pr-[28px] md:pr-[30px] flex flex-col md:gap-6 gap-[19px]">
              <div className="flex flex-col justify-end md:gap-5 gap-[10px]">
                <div
                  className="md:text-3xl text-base  text-right"
                  style={{ fontFamily: "SF Pro Display B" }}
                >
                  Kindertown Parent
                </div>
                <div
                  className="md:text-2xl text-base text-[#666] text-right"
                  style={{ fontFamily: "SF Pro Display M" }}
                >
                  <div>Understanding the child's</div>
                  <div>learning journey.</div>
                </div>
              </div>
              <div className="flex flex-col justify-center overflow-hidden">
                <div className="flex justify-start">
                  <div className="justify-start relative md:top-[100px] top-[80px]">
                    <img
                      src={mobile}
                      alt="Mobile"
                      className="md:w-[250px] md:h-[508px] w-[168px]"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 p-[30px]">
                    <button onClick={() => setShowModal1(true)}>
                      <img
                        src={button1}
                        alt="Button1"
                        className="md:w-[40px] md:h-[40px] w-[25px] h-[25px]"
                      />
                    </button>
                    <Modal1
                      showModal1={showModal1}
                      setShowModal1={setShowModal1}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative md:w-[490px] w-full md:h-[500px] md:rounded-[30px] rounded-[20px] bg-[#3F5DFF] md:pt-[41px] pt-[27px] md:pb-[30px] pb-[28px] md:pl-[62px] pl-[42px] pr-[30px] flex flex-col md:gap-6 gap-[33px]">
              <div className="flex flex-col justify-end">
                <img
                  src={tab}
                  alt="Tablet"
                  className="md:w-[365px] md:h-[280px]"
                />
              </div>
              <div className="flex flex-col justify-start">
                <div className="flex justify-start">
                  <div className="flex flex-col justify-start items-start md:gap-5 gap-[10px]">
                    <div
                      className="md:text-3xl text-base  text-left"
                      style={{ fontFamily: "SF Pro Display B" }}
                    >
                      Kindertown Teacher
                    </div>
                    <div
                      className="md:text-2xl  text-base text-white text-left"
                      style={{ fontFamily: "SF Pro Display M" }}
                    >
                      <div>Escape the busyness, </div>
                      <div>save valuable time.</div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 p-[30px]">
                    <button onClick={() => setShowModal2(true)}>
                      <img
                        src={button2}
                        alt="Button2"
                        className="md:w-[40px] md:h-[40px] w-[25px] h-[25px]"
                      />
                    </button>
                    <Modal2
                      showModal2={showModal2}
                      setShowModal2={setShowModal2}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <div className="relative md:w-[1000px] w-full md:h-[500px] md:rounded-[30px] items-center bg-[#2FC300] flex md:gap-[99px] gap-6 md:pr-[30px] pr-[32px] overflow-hidden md:pt-[49px] pt-[43px] md:pb-0 pb-[44px]">
            <div className="flex flex-col md:w-[546px] w-2/3 relative bottom-0 md:top-10 top-0 right-3">
              <img
                src={imac}
                alt="imac"
                className="md:w-[592px] md:h-full w-full"
              />
            </div>
            <div className="w-1/3 md:w-[256px] flex flex-col md:gap-5 gap-[10px]">
              <div className="flex flex-col">
                <div
                  className="md:text-[30px] text-base"
                  style={{
                    fontFamily: "SF Pro Display B",
                    lineHeight: "normal",
                  }}
                >
                  <div className="hidden md:flex">Kindertown Admin</div>
                  <div className="md:hidden flex flex-col">
                    <div>Kindertown</div>
                    <div> Admin</div>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col md:text-2xl text-sm text-left text-white"
                style={{
                  fontFamily: "SF Pro Display M",
                  lineHeight: "normal",
                }}
              >
                <div className="hidden md:flex flex-col">
                  <div>No more sluggish</div>
                  <div>school enrollment </div>
                  <div>processes from now.</div>
                </div>
                <div className="md:hidden flex flex-col">
                  No more sluggish school enrollment processes from now.
                </div>
              </div>
              <div className="absolute md:bottom-[30px] md:right-[30px] bottom-[35px] right-[35px]">
                <button onClick={() => setShowModal3(true)}>
                  <img
                    src={button3}
                    alt="Button3"
                    className="md:w-[40px] md:h-[40px] w-[25px] h-[25px]"
                  />
                </button>
                <Modal3 showModal3={showModal3} setShowModal3={setShowModal3} />
              </div>
            </div>
          </div>

          {/*Test

            <div className="relative md:w-[1000px] w-full md:h-[500px] md:rounded-[30px] items-center bg-[#2FC300] flex md:gap-[99px] gap-6 md:pr-[30px] pr-[32px] overflow-hidden md:pt-[49px] pt-[43px] md:pb-0 pb-[44px]">
              <div className="flex md:w-[546px] w-full relative bottom-0 md:top-10 top-0 right-3">
                <img
                  src={imac}
                  alt="imac"
                  className="md:w-[592px] md:h-full "
                />
              </div>
              <div className="flex ">
                <div className="flex flex-col md:gap-5 gap-[10px]">
                  <div className="flex flex-col">
                    <div
                      className="md:text-[30px] text-base"
                      style={{
                        fontFamily: "SF Pro Display B",
                        lineHeight: "normal",
                      }}
                    >
                      <div className="hidden md:flex">Kindertown Admin</div>
                      <div className="md:hidden flex flex-col">
                        <div>Kindertown</div>
                        <div> Admin</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div
                      className="flex flex-col md:text-2xl text-sm text-left text-white"
                      style={{
                        fontFamily: "SF Pro Display M",
                        lineHeight: "normal",
                      }}
                    >
                      {" "}
                      <div className="hidden md:flex flex-col">
                        <div>No more sluggish</div>
                        <div>school enrollment </div>
                        <div>processes from now.</div>
                      </div>
                      <div className="md:hidden flex flex-col">
                        <div>No more sluggish</div>
                        <div>school enrollment </div>
                        <div>processes from</div>
                        <div>now.</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="absolute md:bottom-[30px] md:right-[30px] bottom-[50px] right-[50px]">
                    <button onClick={() => setShowModal3(true)}>
                      <img
                        src={button3}
                        alt="Button3"
                        className="md:w-[40px] md:h-[40px] w-[25px] h-[25px]"
                      />
                    </button>
                    <Modal3
                      showModal3={showModal3}
                      setShowModal3={setShowModal3}
                    />
                  </div>
                </div>
              </div>
            </div>
                    */}
        </div>
      </div>

      {/*Content 3*/}
      <div className="w-full flex justify-center items-center  md:py-[200px] pt-[99px] pb-[101px]  pl-[31px] pr-[32px] md:px-[220px]">
        <div className="w-full md:w-[1000px] flex-col justify-center items-center">
          <div
            className="md:text-4xl text-base md:leading-[50px] leading-normal"
            style={{ fontFamily: "SF Pro Display B" }}
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
      </div>
      {/*Content 4*/}
      <div className="w-full flex flex-col justify-center items-center pl-[19px] pr-[21px] md:px-[220px]">
        <div className="w-full md:w-[1000px] flex flex-wrap justify-center items-center md:gap-5 gap-[7px]">
          <div className="relative w-full md:w-[1000px] md:h-[500px] h-[176px] md:rounded-[30px] rounded-[10px] bg-[#D5FFCD] flex gap-[29px] md:gap-[88px] md:pr-[114px] pr-[39px] md:pl-[100px] pl-[32px] md:pt-[100px] pt-[35px] overflow-hidden">
            <div className="flex flex-col items-center md:w-[400px] md:h-[180px]">
              <div
                className="md:text-[40px] text-base"
                style={{ fontFamily: "SF Pro Display B", lineHeight: "normal" }}
              >
                No longer will it be troublesome to pay school fees through
                doorstep visits.
              </div>
            </div>
            <div className="flex flex-col justify-center md:w-[300px] md:h-[609px] w-full relative md:top-5 top-11">
              <img src={phone} alt="Mobile" />
            </div>
          </div>
          <div className="w-full flex justify-center items-center md:gap-5 gap-[7px]">
            <div className="relative md:w-[490px] w-full h-[177px] md:h-[500px] md:rounded-[30px] rounded-[10px] bg-[#176200] flex flex-col md:px-[45px] pl-[16px] pr-[15px] md:pt-[66px] pt-[22px] pb-[31px] md:pb-[85px] md:gap-[51px] gap-[22px]">
              <div className="flex flex-col justify-center items-center md:gap-[7px] gap-[3px]">
                <div className="flex justify-center items-center md:gap-[7px] gap-[3px]">
                  <div className="flex flex-col">
                    <img
                      src={sticker1}
                      alt="Sticker1"
                      className="md:w-[94px] md:h-[94px] w-[33px] h-[33px]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <img
                      src={sticker2}
                      alt="Sticker2"
                      className="md:w-[94px] md:h-[94px] w-[33px] h-[33px]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <img
                      src={sticker3}
                      alt="Sticke3"
                      className="md:w-[94px] md:h-[94px] w-[33px] h-[33px]"
                    />
                  </div>
                </div>
                <div className="flex justify-center items-center md:gap-[7px] gap-[3px]">
                  <div className="flex flex-col">
                    <img
                      src={sticker4}
                      alt="Sticker4"
                      className="md:w-[94px] md:h-[94px] w-[33px] h-[33px]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <img
                      src={sticker5}
                      alt="Sticker5"
                      className="md:w-[94px] md:h-[94px] w-[33px] h-[33px]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <img
                      src={sticker6}
                      alt="Sticker6"
                      className="md:w-[94px] md:h-[94px] w-[33px] h-[33px]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div
                  className="md:text-3xl text-[10px] text-white text-center"
                  style={{
                    fontFamily: "SF Pro Display B",
                    lineHeight: "normal",
                  }}
                >
                  <div className="hidden md:flex flex-col">
                    <div>Thoughtful widgets can also</div>
                    <div> help children cultivate</div>
                    <div>good habits.</div>
                  </div>
                  <div className="md:hidden flex flex-col">
                    Thoughtful widgets can also help children cultivategood
                    habits.
                  </div>
                </div>
              </div>
            </div>
            <div className="relative md:w-[490px] w-full h-[177px] md:h-[500px]  md:rounded-[30px] rounded-[10px] bg-[#D5FFCD] flex flex-col md:pl-[56px] md:pr-[55px] px-[19px] md:pt-[80px] pt-[32px] md:pb-[55px] pb-[19px] md:gap-[86px] gap-[31px]">
              <div className="flex flex-col justify-center items-center">
                <div
                  className="md:text-3xl text-[10px] text-center"
                  style={{
                    fontFamily: "SF Pro Display B",
                    lineHeight: "normal",
                  }}
                >
                  <div className="hidden md:flex flex-col">
                    <div>You can easily find the </div>
                    <div>stationery children need on</div>
                    <div>the marketplace.</div>
                  </div>
                  <div className="md:hidden flex flex-col">
                    You can easily find the stationery children need on the
                    marketplace.
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img
                  src={troli}
                  alt="Troli"
                  className="md:w-[200px] md:h-[178px] w-[70] h-[63px]"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center md:gap-5 gap-[7px]">
            <div className="relative md:w-[490px] w-full h-[177px] md:h-[500px] md:rounded-[30px] rounded-[10px] bg-[#D5FFCD] flex flex-col md:px-[40px] px-[14px] md:pt-[62px] pt-[21px] md:pb-[61px] pb-[15px] md:gap-[50px] gap-[10px]">
              <div className="flex flex-col justify-center items-center">
                <img
                  src={chat}
                  alt="Chat"
                  className="md:w-[200px] md:h-[196px] w-[70px] h-[70px]"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <div
                  className="md:text-3xl text-[10px] text-center"
                  style={{
                    fontFamily: "SF Pro Display B",
                    lineHeight: "normal",
                  }}
                >
                  <div className="hidden md:flex flex-col">
                    <div>In community, schools, </div>
                    <div>teachers and parents will</div>
                    <div>share the delightful moments</div>
                    <div>of children's growth together.</div>
                  </div>
                  <div className="md:hidden flex flex-col">
                    In community, schools, teachers, and parents will share the
                    delightful moments of children's growth together.
                  </div>
                </div>
              </div>
            </div>
            <div className="relative md:w-[490px] w-full h-[177px]  md:h-[500px] md:rounded-[30px] rounded-[10px] flex flex-col px-[14px]">
              <video
                className="absolute inset-0 w-full h-full object-cover md:rounded-[30px] rounded-[10px]"
                autoPlay
                loop
                muted
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute md:bottom-11 bottom-[14px] md:right-9 right-[14px] flex justify-start items-center md:w-[300px] md:h-[100px] w-[106px]">
                <div className="flex flex-col">
                  <div
                    className="md:text-[30px] text-[10px] text-right "
                    style={{
                      fontFamily: "SF Pro Display B",
                      lineHeight: "normal",
                    }}
                  >
                    Capture the moments of childlike innocence and earnest
                    learning.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Content 5*/}
      <div className="w-full flex flex-col justify-center items-center md:pt-[300px] pt-[100px] md:gap-[100px] gap-[50px]">
        <div className="w-full flex flex-col justify-center items-center pl-[31px] pr-[32px] md:px-[220px]">
          <div className="w-full md:w-[1000px] flex flex-col">
            <div
              className="md:text-[70px] text-4xl text-center"
              style={{ fontFamily: "SF Pro Display B", lineHeight: "normal" }}
            >
              <div className="hidden md:flex flex-col ">
                <div>
                  More <span className="text-[#FF5F5F]"> intelligent </span>
                  experiences
                </div>
                <div>
                  with <span className="text-[#F67F00]"> Kindertown</span>{" "}
                  system
                </div>
              </div>
              <div className="md:hidden flex flex-wrap justify-center items-center">
                More &nbsp;
                <span className="text-[#FF5F5F]"> intelligent </span>{" "}
                experiences with{" "}
                <span className="text-[#F67F00]"> Kindertown &nbsp;</span>{" "}
                system
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center pl-[19px] pr-[21px] md:px-[220px]">
          <div className="w-full md:w-[1000px] flex flex-wrap justify-center items-center md:gap-5 gap-2">
            <div className="relative w-full md:w-[1000px] md:h-[500px] md:rounded-[30px] rounded-[10px] bg-[#7F5FFF] flex items-center md:gap-20 gap-[19px] md:pr-[29px] md:pb-[58px] py-[20px] md:pt-[57px] md:pl-[99px] pl-[27px] pr-[10px]">
              <div className="flex flex-col w-[292px] h-[180px] justify-center items-center">
                <div
                  className="md:text-3xl text-xs text-white"
                  style={{ fontFamily: "SF Pro Display B" }}
                >
                  With just a tap of their fingertips, teachers can tackle the
                  majority of their ongoing busyness.
                </div>
              </div>
              <div className="flex flex-col">
                <img src={tab2} alt="Tablet2" />
              </div>
            </div>
            <div className="relative w-full md:w-[1000px] h-[177px] md:h-[500px] md:rounded-[30px]">
              <video
                className="absolute inset-0 w-full h-full object-cover md:rounded-[30px] rounded-[10px]"
                autoPlay
                loop
                muted
              >
                <source src={video2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute md:bottom-11 md:right-9 right-5 bottom-5 flex items-center">
                <div className="flex flex-col md:w-[326px] md:h-[170px] w-[141px]">
                  <div
                    className="md:text-[30px] text-xs text-right text-white"
                    style={{
                      fontFamily: "SF Pro Display B",
                      lineHeight: "normal",
                    }}
                  >
                    The era of intelligence is gradually enabling teachers to
                    save a considerable amount of valuable time.
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center md:gap-5 gap-[8px]">
              <div className="relative w-full md:w-[490px] md:h-[500px] md:rounded-[30px] rounded-[10px] bg-[#582DFF] flex flex-col justify-center items-center md:gap-[90px] gap-[21px] md:pb-[113px] pb-[21px] md:pt-[54px] pt-[19px] md:px-[35px] px-[18px]">
                <div className="flex flex-col justify-center items-center">
                  <img
                    src={calendar}
                    alt="Calendar"
                    className="md:w-[200px] md:h-[182px] w-full h-[64px]"
                  />
                </div>
                <div className="flex flex-col md:w-[420px] md:h-[60px] justify-center items-center">
                  <div
                    className="md:text-3xl text-xs text-white text-center"
                    style={{ fontFamily: "SF Pro Display B" }}
                  >
                    <div>An easier arrangement</div>
                    <div>for classroom schedules.</div>
                  </div>
                </div>
              </div>
              <div className="relative w-full md:w-[490px] md:h-[500px] md:rounded-[30px] rounded-[10px] bg-[#7F5FFF] flex flex-col justify-center items-center md:gap-[69px] gap-5 md:pb-[93px] pb-[22px] md:pt-[54px] pt-[19px] md:px-[35px] px-[21px]">
                <div className="flex flex-col justify-center items-center">
                  <img
                    src={suhu}
                    alt="Thermometer"
                    className="md:w-[107px] md:h-[182px] w-[38px] h-[64px]"
                  />
                </div>
                <div className="flex flex-col md:w-[420px] md:h-[101px] justify-center items-center">
                  <div
                    className="md:text-3xl text-xs text-center"
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
        </div>
      </div>
      {/*Content 6*/}
      <div className="w-full flex flex-col justify-center items-center md:pt-[300px] pt-[100px] md:pb-[200px] pb-[50px] md:px-[220px] px-5">
        <div className="w-full md:w-[1000px] flex flex-col justify-center items-center md:gap-[100px] gap-[50px]">
          <div className="flex flex-col justify-center items-center">
            <div
              className="md:text-[70px] text-4xl text-center"
              style={{ fontFamily: "SF Pro Display B", lineHeight: "normal" }}
            >
              <div className="hidden md:flex flex-col">
                <div>Kindertown is more than just a </div>
                <div>
                  <span className="text-[#814300]"> system</span>; it's like
                  your
                </div>
                <div className="text-[#23D300]">Intelligent Assistant.</div>
              </div>
              <div className="md:hidden flex flex-col">
                <div> Kindertown is more</div>
                <div>
                  than just a<span className="text-[#814300]"> system</span>;
                </div>
                <div> it's like your</div>
                <div>
                  <span className="text-[#23D300]">Intelligent Assistant.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col md:gap-5 gap-[8px]">
            <div className="relative w-full h-[177px] md:w-[1000px] md:h-[500px] md:rounded-[30px] rounded-[10px] flex ">
              <video
                className="absolute inset-0 w-full h-full object-cover md:rounded-[30px] rounded-[10px]"
                autoPlay
                loop
                muted
              >
                <source src={video3} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute md:bottom-14 bottom-[18px] left-[21px] md:left-14 flex items-center md:w-[300px] w-[130px] md:h-[170px]">
                <div className="flex flex-col">
                  <div
                    className="md:text-[30px] text-xs text-left"
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
            <div className="relative w-full md:w-[1000px] md:h-[500px] md:rounded-[30px] rounded-[10px] bg-[#FCBF4A] flex items-center md:pr-[122px] md:py-[75px] pt-[33px] pb-[31px] md:pl-[108px] pr-[43px] pl-[34px] md:gap-[54px] gap-[8px]">
              <div className="flex flex-col justify-center items-center md:w-[440px]">
                <div
                  className="md:text-3xl text-[10px]"
                  style={{ fontFamily: "SF Pro Display B" }}
                >
                  {/*Desktop*/}
                  <div className="hidden md:flex flex-col gap-[50px]">
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
                    </div>
                    <div className="w-[440px] h-[60px]">
                      It seems like every year, parents ask the same questions!
                    </div>
                  </div>
                  {/*Mobile*/}
                  <div
                    className="md:hidden flex flex-col gap-[10px]"
                    style={{ lineHeight: "normal" }}
                  >
                    <div className="text-[#FF0001] w-[131px]">
                      Do we still have to line up for school enrollment?
                    </div>
                    <div className="text-[#4800FF] w-[131px]">
                      Can we submit our documents online?
                    </div>
                    <div className="text-[#00821D] w-[162px]">
                      Can I reserve a seat for my child in advance?
                    </div>

                    <div className="w-[170px]">
                      It seems like every year, parents ask the same questions!
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <img
                  src={open}
                  alt="OpenSign"
                  className="md:w-[250px] md:h-[298px] w-[88px] h-[105px]"
                />
              </div>
            </div>
            <div className="relative w-full md:w-[1000px] md:h-[500px] h-[176px] md:rounded-[30px] rounded-[10px] bg-[#FFDA92] flex items-center md:pr-[76px] pr-[27px] md:py-[133px] py-[46px] md:pl-[108px] pl-[38px] md:gap-[96px] gap-[33px]">
              <div className="flex flex-col justify-center items-center">
                <img
                  src={user}
                  alt="User"
                  className="md:w-[250px] md:h-[234px]"
                />
              </div>
              <div className="flex w-[470px] flex-col items-center justify-center">
                <div
                  className="md:text-3xl text-[10px] text-left"
                  style={{
                    fontFamily: "SF Pro Display B",
                    lineHeight: "normal",
                  }}
                >
                  {/*Desktop*/}
                  <div className="hidden md:flex flex-col">
                    <div> When developing our system,</div>
                    <div> we have already incorporated</div>
                    <div> privacy features and controls</div>
                    <div> to safeguard the personal</div>
                    <div>information of schools, teachers,</div>
                    <div> parents, and students.</div>
                  </div>
                  {/*mobile*/}
                  <div className="md:hidden flex flex-col">
                    When developing our system, we have already incorporated
                    privacy features and controls to safeguard the personal
                    information of schools, teachers, parents, and students.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*CONTENT VIDEO*/}
      <div className="relative w-full md:h-[900px] h-[245px] overflow-hidden">
        <video
          className="absolute top-0 left-0 z-0 object-cover w-full h-full"
          autoPlay
          loop
          muted
        >
          <source src={video4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="md:w-[490px] md:h-[180px] w-[120px] h-[70px] absolute md:bottom-[117px] bottom-[25px] md:left-[114px] left-[31px]">
          <div
            className="md:text-[40px] text-xs  text-white"
            style={{ fontFamily: "SF Pro Display B", lineHeight: "normal" }}
          >
            <div className="hidden md:flex flex-col">
              <div> From the moment children</div>
              <div>step into kindergarten,</div>
              <div> their journey of learning</div>
              <div> dreams begins.</div>
            </div>
            <div className="md:hidden flex flex-col">
              <div> From the moment</div>
              <div> children step into</div>
              <div> kindergarten, their </div>
              <div>journey of learning</div>
              <div> dreams begins.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center md:gap-[100px] gap-[50px] md:pt-[300px] pt-[50px] md:pb-[200px]">
        <div className="w-full flex flex-col justify-center items-center  md:px-[220px] pr-[32px] pl-[31px]">
          <div className="w-full md:w-[1000px] flex flex-col">
            <div
              className="md:text-[32px] text-base text-center"
              style={{ fontFamily: "SF Pro Display M", lineHeight: "normal" }}
            >
              {/*Desktop*/}
              <div className="hidden md:flex flex-col">
                <div>
                  At any moment, feel free to leave your contact information
                  without{" "}
                </div>
                <div>
                  hesitation, and our attentive service personnel will get in
                  touch with you.
                </div>
                <div>Only through quality communication can</div>
                <div>we understand your needs.</div>
              </div>
              {/*Mobile*/}
              <div className=" md:hidden flex flex-col">
                At any moment, feel free to leave your contact information
                without hesitation, and our attentive service personnel will get
                in touch with you. Only through quality communication can we
                understand your needs.
              </div>
            </div>
          </div>
        </div>
        <div
          className="relative w-full md:w-[1100px] md:h-[1225px] md:rounded-[30px] flex flex-col items-center gap-[30px] md:gap-[92px] md:px-[86px] pr-[32px] pl-[31px] md:pt-[82px] py-[50px] md:pb-[95px]"
          style={{
            background:
              "linear-gradient(180deg, rgba(221, 221, 221, 0.3), rgba(221, 221, 221, 1), rgba(221, 221, 221, 0.7))",
          }}
        >
          <div className="flex flex-col w-full md:w-[800px] justify-center items-center">
            <div
              className="md:text-[32px]  text-base text-center"
              style={{ fontFamily: "SF Pro Display B", lineHeight: "normal" }}
            >
              We have prepared detailed product demonstrations prior to
              subscription, along with one-on-one or group teaching modes, to
              provide you with a more comprehensive understanding of how our
              Kindertown management system is essential for your school.
            </div>
          </div>
          <div>
            <img
              src={icon}
              alt="Icon"
              className="md:w-[246px] md:h-[246px] w-[100px] h-[100px]"
            />
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="w-full flex flex-col items-center md:gap-[100px] gap-[42px]">
              <div className="w-full md:w-[928px] flex md:flex flex-col md:gap-[30px] gap-5">
                <div className="w-full md:w-[928px] flex md:flex flex-wrap md:gap-7 gap-5">
                  <div
                    className="flex flex-col md:w-[450px] w-full md:gap-3 gap-[6px] md:text-[20px] text-base"
                    style={{ fontFamily: "SF Pro Display M" }}
                  >
                    <label>School Name:</label>
                    <input
                      type="text"
                      name="school_name"
                      id="schoolname"
                      required
                      className="md:w-[450px] w-full h-[66px] bg-transparent border-2 rounded-[15px] border-white text-gray-900 px-2 dark:hover:bg-gray-700"
                    />
                  </div>
                  <div
                    className="flex flex-col md:w-[450px]  w-full gap-3 md:text-[20px] text-base"
                    style={{ fontFamily: "SF Pro Display M" }}
                  >
                    <label>Name of person-in-charge:</label>
                    <input
                      type="text"
                      name="from_name"
                      id="name"
                      required
                      className="md:w-[450px] h-[66px]  w-full bg-transparent border-2 rounded-[15px] border-white text-gray-900 px-2"
                    />
                  </div>
                </div>

                <div className="w-full md:w-[928px] flex md:flex flex-wrap md:gap-7 gap-5">
                  <div
                    className="flex flex-col md:w-[450px] w-full md:gap-3 gap-[6px] md:text-[20px] text-base"
                    style={{ fontFamily: "SF Pro Display M" }}
                  >
                    <label>Email address:</label>
                    <input
                      type="email"
                      name="from_email"
                      id="email"
                      required
                      className="md:w-[450px] h-[66px] bg-transparent border-2 rounded-[15px] border-white text-gray-900 px-2"
                    />
                  </div>
                  <div
                    className="flex flex-col md:w-[450px] w-full md:gap-3 gap-[6px] md:text-[20px] text-base"
                    style={{ fontFamily: "SF Pro Display M" }}
                  >
                    <label>Contact number or Whatsapp:</label>
                    <input
                      type="text"
                      name="phone"
                      id="tel"
                      required
                      className="md:w-[450px] h-[66px] bg-transparent border-2 rounded-[15px] border-white text-gray-900 px-2"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-between w-full md:w-[536px] md:pl-[53px] px-4 md:pr-[52px] md:h-[93px] md:pt-[23px] md:pb-[22px] py-[22px] text-gray-900 ring-[#BBB] ring-1 bg-white border border-gray-300 shadow-md focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 rounded-[15px] dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  <div className="flex md:flex-row flex-col items-center md:gap-[29px] gap-[7px]">
                    <div
                      className="flex flex-col md:text-xl text-base md:w-[362px] w-full md:order-first order-last"
                      style={{
                        fontFamily: "SF Pro Display M",
                        lineHeight: "normal",
                      }}
                    >
                      <div>Within 24 hours after sending,</div>
                      <div> our service personnel will contact you.</div>
                    </div>
                    <div>
                      <img
                        src={tele}
                        alt="Tele"
                        className="w-10 h-10 md:order-last order-first"
                      />
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </form>
        </div>

        {/*Contact form
        <div
          className="relative w-full md:w-[1100px] md:h-[1225px] md:rounded-[30px] flex flex-col items-center gap-[30px] md:gap-[90px] md:px-[86px] pr-[32px] pl-[31px] md:pt-[82px] py-[50px] md:pb-[95px] "
          style={{
            background:
              "linear-gradient(180deg, rgba(221, 221, 221, 0.3), rgba(221, 221, 221, 1), rgba(221, 221, 221, 0.7))",
          }}
        >
          <div className="flex flex-col w-full md:w-[800px] justify-center items-center">
            <div
              className="md:text-[32px]  text-base text-center"
              style={{ fontFamily: "SF Pro Display B", lineHeight: "normal" }}
            >
              We have prepared detailed product demonstrations prior to
              subscription, along with one-on-one or group teaching modes, to
              provide you with a more comprehensive understanding of how our
              Kindertown management system is essential for your school.
            </div>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="w-full md:w-[928px] flex flex-col justify-center items-center md:gap-[100px] gap-[50px]">
              <div className="flex flex-col">
                <img
                  src={icon}
                  alt="Icon"
                  className="md:w-[246px] md:h-[246px] w-[100px] h-[100px]"
                />
              </div>
              <div className="flex flex-col gap-[30px]">
                <div className="w-full md:w-[928px] md:flex flex-wrap gap-7">
                  <div
                    className="flex flex-col md:w-[450px] w-[330px] gap-3 text-[20px]"
                    style={{ fontFamily: "SF Pro Display M" }}
                  >
                    <label>School Name:</label>
                    <input
                      type="text"
                      name="school_name"
                      id="schoolname"
                      required
                      className="md:w-[450px] w-full h-[66px] bg-transparent border-2 rounded-[15px] border-white text-gray-900 px-2 dark:hover:bg-gray-700"
                    />
                  </div>
                  <div
                    className="flex flex-col md:w-[450px]  w-[330px] gap-3 text-[20px]"
                    style={{ fontFamily: "SF Pro Display M" }}
                  >
                    <label>Name of person-in-charge:</label>
                    <input
                      type="text"
                      name="from_name"
                      id="name"
                      required
                      className="md:w-[450px] h-[66px]  w-[330px] bg-transparent border-2 rounded-[15px] border-white text-gray-900 px-2"
                    />
                  </div>
                </div>
                <div className="w-full md:w-[928px] md:flex flex-wrap gap-7">
                  <div
                    className="flex flex-col md:w-[450px] w-full gap-3 text-[20px]"
                    style={{ fontFamily: "SF Pro Display M" }}
                  >
                    <label>Email address:</label>
                    <input
                      type="email"
                      name="from_email"
                      id="email"
                      required
                      className="md:w-[450px] h-[66px] bg-transparent border-2 rounded-[15px] border-white text-gray-900 px-2"
                    />
                  </div>
                  <div
                    className="flex flex-col md:w-[450px] gap-3 text-[20px]"
                    style={{ fontFamily: "SF Pro Display M" }}
                  >
                    <label>Contact number or Whatsapp:</label>
                    <input
                      type="text"
                      name="phone"
                      id="tel"
                      required
                      className="md:w-[450px] h-[66px] bg-transparent border-2 rounded-[15px] border-white text-gray-900 px-2"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-between md:w-[536px] md:pl-[53px] px-4 md:pr-[52px] h-[93px] text-gray-900 ring-[#BBB] ring-1 bg-white border border-gray-300 shadow-md focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 rounded-[15px] dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  <div className="md:flex items-center md:gap-[29px] gap-[7px]">
                    <div
                      className="flex flex-col md:text-xl text-base md:w-[362px] w-full"
                      style={{ fontFamily: "SF Pro Display M" }}
                    >
                      <div>Within 24 hours after sending,</div>
                      <div> our service personnel will contact you.</div>
                    </div>
                    <div>
                      <img src={tele} alt="Tele" className="w-10 h-10" />
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </form>
        </div>
        */}
      </div>
    </>
  );
};

export default Download;
