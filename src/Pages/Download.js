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
import { useTranslation } from "react-i18next";
const Download = () => {
  const { t, i18n } = useTranslation();
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

  const tapFingerGap = () => {
    switch (i18n.language) {
      case "en":
        return "md:gap-20 gap-[19px]";
      case "ms":
        return "md:gap-[33px] gap-[19px]";
      case "zh":
        return "md:gap-[80px] gap-[28px]";
      default:
        return "md:gap-20 gap-[19px]";
    }
  };
  const CaptureVideo = () => {
    switch (i18n.language) {
      case "en":
        return "md:w-[300px]";
      case "ms":
        return "md:w-[380px]";
      case "zh":
        return "md:w-[290px] font-bold";
      default:
        return "md:w-[300px]";
    }
  };

  const intelligentVideo = () => {
    switch (i18n.language) {
      case "en":
        return "md:w-[326px] w-[141px]";
      case "ms":
        return "md:w-[420px] w-[170px]";
      case "zh":
        return "md:w-[336px] w-[141px]";
      default:
        return "md:w-[326px] w-[141px]";
    }
  };

  const momentChildwidth = () => {
    switch (i18n.language) {
      case "en":
        return "md:w-[490px] w-[120px]";
      case "ms":
        return "md:w-[564px] w-[130px]";
      default:
        return "md:w-[490px] w-[120px]";
    }
  };
  const stationaryTroli = () => {
    switch (i18n.language) {
      case "en":
        return "md:gap-[86px] gap-[31px] md:pt-[80px] md:pb-[55px] pt-[32px] pb-[19px]";
      case "ms":
        return "md:gap-[63px] gap-[21px] md:pt-[73px] md:pb-[55px] pt-[27px] pb-[19px]";
      case "zh":
        return "md:gap-[50px] md:pt-[76px] md:pb-[55px] pt-[31px] pb-5 gap-[31px]";
      default:
        return "md:gap-[86px] gap-[31px] md:pt-[80px] md:pb-[55px] pt-[32px] pb-[19px]";
    }
  };
  return (
    <>
      <div className="w-full flex flex-wrap justify-center md:pt-[150px] pt-[80px] md:gap-[200px] gap-[50px] md:pb-[200px]">
        <div className="w-full md:max-w-[1000px] flex flex-col justify-center items-center ">
          <div className="w-full flex flex-col md:gap-[200px] gap-[100px]">
            {/*Content 1 & 2*/}
            <div className="w-full flex flex-col md:gap-[200px] gap-[50px]">
              {/*Content 1*/}

              <div
                className={`w-full md:px-0 pl-[31px] pr-[32px] md:text-[50px] text-2xl text-center ${
                  i18n.language === "zh" ? "font-bold" : ""
                }`}
                style={{
                  fontFamily: "SF Pro Display B",
                  lineHeight: "normal",
                }}
              >
                <div className=" flex flex-col items-center">
                  <span
                    className={`inline-block  w-full ${
                      i18n.language === "zh" ? "w-full" : "md:max-w-[950px]"
                    }`}
                  >
                    {t("dw-KT-app")}
                  </span>
                </div>
              </div>
              {/*Content 2*/}
              <div className="w-full flex flex-col md:gap-5 gap-[30px]">
                <div className="w-full flex flex-wrap justify-center md:gap-5 gap-[30px] md:px-0 pl-[31px] pr-[32px]">
                  <div className="relative md:w-[490px] md:h-[500px] h-[336px] w-full flex flex-col md:rounded-[30px] rounded-[20px] bg-[#FFDFA1] md:pt-[44px] pt-[27px] md:pl-[52px] pl-[35px] pr-[28px] md:pr-[30px] md:gap-6 gap-[19px]">
                    <div
                      className={`flex flex-col items-end  gap-[9px] ${
                        i18n.language === "zh"
                          ? "font-bold  md:gap-4"
                          : "md:gap-5"
                      }`}
                    >
                      <div
                        className="md:text-[30px] text-base"
                        style={{ fontFamily: "SF Pro Display B" }}
                      >
                        {t("KT-parent")}
                      </div>
                      <div
                        className={` text-[#666] text-right ${
                          i18n.language === "zh"
                            ? "md:text-xl text-sm"
                            : "md:text-2xl text-base"
                        }`}
                        style={{
                          fontFamily: "SF Pro Display M",
                          lineHeight: "normal",
                        }}
                      >
                        <div>{t("understand-child")}</div>
                        {!(i18n.language === "zh") && (
                          <div> {t("learning-journey")}</div>
                        )}
                      </div>
                    </div>
                    <div className="flex overflow-hidden justify-between">
                      <div>
                        {" "}
                        <img
                          src={mobile}
                          alt="Mobile"
                          className="md:w-[250px] w-[168px]"
                        />
                      </div>
                      <div className="flex items-end pb-[30px]">
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
                  <div className="relative w-full flex flex-col md:w-[490px] md:h-[500px] md:rounded-[30px] rounded-[20px] bg-[#3F5DFF] md:pt-[41px] pt-[27px] md:pb-[30px] pb-[28px] md:pl-[62px] pl-[42px] pr-[30px] md:pr-[30px] md:gap-[41px] gap-[33px]">
                    <div>
                      <img src={tab} alt="Tablet" />
                    </div>
                    <div className="flex flex-col md:gap-5 gap-[10px]">
                      <div
                        className={`text-base md:text-[30px] ${
                          i18n.language === "zh" ? "font-bold" : ""
                        }`}
                        style={{ fontFamily: "SF Pro Display B" }}
                      >
                        {t("kindertown-teacher")}
                      </div>
                      <div className="w-full flex justify-between">
                        <div
                          className={` text-[#FFF] ${
                            i18n.language === "zh"
                              ? "md:text-xl text-sm"
                              : "text-base md:text-2xl"
                          }`}
                          style={{
                            fontFamily: "SF Pro Display M",
                            lineHeight: "normal",
                          }}
                        >
                          <div> {t("escape-busy")}</div>
                          <div> {t("valuable-time")}</div>
                        </div>
                        <div className="flex">
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

                  {/*   <div className="relative w-full md:w-[490px] md:h-[500px] h-[337px] md:rounded-[30px] rounded-[20px] bg-[#FFDFA1] pt-[44px] md:pl-[52px] pl-[35px] pr-[28px] md:pr-[30px] flex flex-col md:gap-6 gap-[19px]">
                    <div className="flex flex-col items-end md:gap-5 gap-[10px]">
                      <div
                        className="md:text-3xl text-base  text-right"
                        style={{
                          fontFamily: "SF Pro Display B",
                          lineHeight: "normal",
                        }}
                      >
                        Kindertown Parent
                      </div>
                      <div
                        className="md:text-2xl text-base text-[#666] text-right md:w-[280px] w-[200px]"
                        style={{ fontFamily: "SF Pro Display M" }}
                      >
                        Understanding the child's learning journey.
                      </div>
                    </div>
                    <div className="flex flex-col justify-center overflow-hidden">
                      <div>
                        <div className="relative md:top-[100px] top-[80px]">
                          <img
                            src={mobile}
                            alt="Mobile"
                            className="md:w-[250px]  w-[168px]"
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
                  <div className="relative w-full md:w-[490px] md:h-[500px] md:rounded-[30px] rounded-[20px] bg-[#3F5DFF] md:pt-[41px] pt-[27px] md:pb-[30px] pb-[28px] md:pl-[62px] px-[42px] md:pr-[63px] flex flex-col md:gap-6 gap-[33px]">
                    <div className="flex flex-col justify-end">
                      <img src={tab} alt="Tablet" className="md:w-[365px]" />
                    </div>
                    <div className="flex flex-col justify-start">
                      <div className="flex">
                        <div className="flex flex-col items-start md:gap-5 gap-[10px]">
                          <div
                            className="md:text-3xl text-base  text-left"
                            style={{ fontFamily: "SF Pro Display B" }}
                          >
                            Kindertown Teacher
                          </div>
                          <div
                            className="md:text-2xl  text-base text-white text-left md:w-[243px] w-[176px]"
                            style={{
                              fontFamily: "SF Pro Display M",
                              lineHeight: "normal",
                            }}
                          >
                            Escape the busyness, save valuable time.
                          </div>
                        </div>
                        <div className="absolute bottom-[30px] right-[30px]">
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
                  </div>*/}
                </div>
                <div className="w-full">
                  <div className="relative w-full bg-[#2FC300] md:rounded-[30px] justify-between items-center flex md:gap-[100px] gap-6 py-[43px] md:pt-[49px] md:pr-[98px] pr-[32px] md:pb-0  overflow-hidden">
                    <div className="w-2/3 md:w-[544px] relative md:top-[19px] md:right-5 right-4">
                      <img src={imac} alt="imac" className="w-full" />
                    </div>
                    <div
                      className={`flex flex-col md:gap-5 gap-[10px]  w-[124px] ${
                        i18n.language === "zh"
                          ? "md:w-[243px]"
                          : i18n.language === "ms"
                          ? "md:w-[280px]"
                          : "md:w-[256px]"
                      }`}
                    >
                      <div className="flex flex-col">
                        <div
                          className={`md:text-[30px] text-base ${
                            i18n.language === "zh" ? "font-bold" : ""
                          }`}
                          style={{
                            fontFamily: "SF Pro Display B",
                            lineHeight: "normal",
                          }}
                        >
                          {i18n.language === "zh" && <div>{t("KT-admin")}</div>}

                          {!(i18n.language === "zh") && (
                            <>
                              <div className="hidden md:flex">
                                {t("KT-admin")}
                              </div>
                              <div className="md:hidden flex flex-col">
                                <div>Kindertown</div>
                                <div> Admin</div>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                      <div
                        className={`flex flex-col text-sm text-left text-white ${
                          i18n.language === "zh" ? "md:text-xl" : "md:text-2xl "
                        }`}
                        style={{
                          fontFamily: "SF Pro Display M",
                          lineHeight: "normal",
                        }}
                      >
                        <div className="hidden md:flex flex-col">
                          <div>{t("no-sluggish")}</div>
                          <div>{t("school-enroll")}</div>
                          {!(i18n.language === "zh") && (
                            <div>{t("process-now")}</div>
                          )}
                        </div>
                        <div className="md:hidden flex flex-col">
                          <div>{t("no-sluggish-full")}</div>
                        </div>
                      </div>
                      <div className="absolute md:bottom-[30px] md:right-[30px] bottom-[30px] right-[30px]">
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

                  {/* 
                  <div className="relative w-full md:rounded-[30px] items-center bg-[#2FC300] flex md:gap-[99px] gap-6 md:pr-[98px] pr-[32px] overflow-hidden md:pt-[49px] pt-[43px] md:pb-0 pb-[44px]">
                    <div className="flex flex-col md:w-[546px] w-2/3 relative bottom-0 md:top-10 right-3">
                      <img src={imac} alt="imac" />
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
                      <div className="absolute md:bottom-[30px] md:right-[30px] bottom-[45px] right-[50px]">
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
*/}
                </div>
              </div>
            </div>

            {/*Content 3 */}
            <div className="w-full md:px-0 pl-[31px] pr-[32px]">
              <div
                className={`md:text-4xl text-base md:leading-[50px] leading-normal ${
                  i18n.language === "zh" ? "font-bold" : ""
                }`}
                style={{ fontFamily: "SF Pro Display B" }}
              >
                {t("dedicated-work")}
              </div>
            </div>

            <div className="w-full flex flex-col md:px-0 pl-[19px] pr-[21px] gap-[100px] md:gap-[300px]">
              {/*Content 4 */}
              <div className="w-full flex flex-wrap justify-center items-center md:gap-5 gap-[7px]">
                <div
                  className={`w-full relative h-[176px] md:h-[500px] md:rounded-[30px] rounded-[10px] bg-[#D5FFCD] flex   md:pt-[100px] pt-[35px] ${
                    i18n.language === "zh"
                      ? "md:gap-[37px] gap-[30px] pr-[39px] pl-[32px] md:pr-[112px] md:pl-[91px]"
                      : i18n.language === "ms"
                      ? "gap-[16px] md:gap-[13px] pr-[39px] md:pr-[112px] md:pl-[75px] pl-[32px]"
                      : "gap-[29px] md:gap-[88px]  pr-[40px] md:pr-[112px] md:pl-[100px] pl-[32px] "
                  }`}
                >
                  <div>
                    {" "}
                    <div
                      className={`${
                        i18n.language === "zh"
                          ? "  md:text-[50px] text-base font-bold md:w-[460px]"
                          : i18n.language === "ms"
                          ? "md:text-[40px] text-xs w-[160px] md:w-[500px]"
                          : "md:text-[40px] text-base"
                      }`}
                      style={{
                        fontFamily: "SF Pro Display B",
                        lineHeight: "normal",
                      }}
                    >
                      {t("no-troublesome")}
                    </div>
                  </div>
                  <div className="relative overflow-hidden w-full">
                    <img
                      src={phone}
                      alt="Mobile"
                      className={` ${
                        i18n.language === "zh"
                          ? " absolute md:top-2 md:left-0 object-cover w-full "
                          : i18n.language === "ms"
                          ? "absolute md:top-5 md:left-0 w-full  "
                          : "absolute md:top-2 md:left-0 object-cover w-full "
                      }`}
                    />
                  </div>
                </div>

                <div className="w-full flex justify-center items-center md:gap-5 gap-[7px]">
                  <div className="relative md:w-[490px] w-full h-[177px] md:h-[500px] md:rounded-[30px] rounded-[10px] bg-[#176200] flex flex-col md:px-[45px] px-[16px] md:pt-[66px] pt-[22px] pb-[31px] md:pb-[85px] md:gap-[51px] gap-[22px]">
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
                        className={`md:text-3xl text-[10px] text-white text-center ${
                          i18n.language === "zh" ? "font-bold" : ""
                        }`}
                        style={{
                          fontFamily: "SF Pro Display B",
                          lineHeight: "normal",
                        }}
                      >
                        <div className="hidden md:flex flex-col">
                          <div>{t("thoughtful-widget")}</div>
                          <div> {t("children-cultivate")}</div>
                          {!(i18n.language === "zh") && (
                            <div>{t("good-habit")}</div>
                          )}
                        </div>
                        <div className="md:hidden flex flex-col">
                          {t("thoughtful-widget-mobile")}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`relative md:w-[490px] w-full h-[177px] md:h-[500px]  md:rounded-[30px] rounded-[10px] bg-[#D5FFCD] flex flex-col md:pl-[56px] md:pr-[55px] px-[19px] ${stationaryTroli()}`}
                  >
                    <div className="flex flex-col justify-center items-center">
                      <div
                        className={`text-center ${
                          i18n.language === "zh"
                            ? "md:text-[40px] text-xs font-bold"
                            : "md:text-3xl text-[10px] "
                        }`}
                        style={{
                          fontFamily: "SF Pro Display B",
                          lineHeight: "normal",
                        }}
                      >
                        <div className="flex flex-col">
                          {t("find-stationary")}
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
                <div className="w-full flex justify-center items-center md:gap-5 gap-[8px]">
                  <div className="relative md:w-[490px] w-full h-[177px] md:h-[500px] md:rounded-[30px] rounded-[10px] bg-[#D5FFCD] flex flex-col justify-center md:px-[40px] px-[14px] md:pt-[62px] pt-[21px] md:pb-[61px] pb-[15px] md:gap-[50px] gap-[10px]">
                    <div className="flex flex-col justify-center items-center">
                      <img
                        src={chat}
                        alt="Chat"
                        className="md:w-[200px] md:h-[196px] w-[70px] h-[70px]"
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <div
                        className={`md:text-3xl  text-center ${
                          i18n.language === "zh"
                            ? "text-xs font-bold"
                            : "text-[10px]"
                        }`}
                        style={{
                          fontFamily: "SF Pro Display B",
                          lineHeight: "normal",
                        }}
                      >
                        <div className="flex flex-col">
                          {t("share-delightmoment")}
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
                    <div
                      className={`absolute md:bottom-11 bottom-[14px] md:right-9 right-[14px] flex md:h-[100px] w-[106px] ${CaptureVideo()}`}
                    >
                      <div className="flex flex-col">
                        <div
                          className="md:text-[30px] text-[10px] text-right "
                          style={{
                            fontFamily: "SF Pro Display B",
                            lineHeight: "normal",
                          }}
                        >
                          {t("capture-moment")}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Content 5 */}
              <div className="w-full flex flex-col justify-center items-center md:gap-[100px] gap-[50px]">
                <div
                  className="md:text-[70px] text-4xl text-center"
                  style={{
                    fontFamily: "SF Pro Display B",
                    lineHeight: "normal",
                  }}
                >
                  {i18n.language === "en" && (
                    <>
                      {/*Web */}
                      <div className="hidden md:flex flex-wrap justify-center">
                        <span className="whitespace-pre-line">
                          {t("more")}{" "}
                          <span className="text-[#FF5F5F]">
                            {t("intelligent")}
                          </span>{" "}
                          {t("xperience")}{" "}
                        </span>
                        <span className="whitespace-pre-line">
                          {t("with")}{" "}
                          <span className="text-[#F67F00]">{t("KT")}</span>{" "}
                          {t("system")}
                        </span>
                      </div>
                      {/*Mobile */}
                      <div className="md:hidden flex flex-wrap justify-center whitespace-pre-line">
                        {t("more")}&nbsp;
                        <span className="text-[#FF5F5F]">
                          {t("intelligent")}&nbsp;
                        </span>
                        {t("xperience")}&nbsp;{t("with")}&nbsp;
                        <span className="text-[#F67F00]">{t("KT")}</span>&nbsp;
                        {t("system")}
                      </div>
                    </>
                  )}

                  {i18n.language === "ms" && (
                    <>
                      {/*Web */}
                      <div className="hidden md:flex flex-wrap justify-center">
                        <span className="whitespace-pre-line">
                          {t("more")}{" "}
                          <span className="text-[#FF5F5F]">
                            {t("intelligent")}
                          </span>{" "}
                        </span>
                        <span className="whitespace-pre-line">
                          {t("with")}&nbsp;
                          <span className="text-[#F67F00]">{t("KT")}</span>{" "}
                        </span>
                      </div>
                      {/*Mobile */}
                      <div className="md:hidden flex flex-wrap justify-center whitespace-pre-line">
                        {t("more")}&nbsp;
                        <span className="text-[#FF5F5F]">
                          {t("intelligent")}&nbsp;
                        </span>
                        {t("with")}&nbsp;
                        <span className="text-[#F67F00]">{t("KT")}</span>&nbsp;
                      </div>
                    </>
                  )}
                  {i18n.language === "zh" && (
                    <>
                      <div className="flex flex-wrap justify-center text-center font-bold">
                        <span className="whitespace-pre-line">
                          <span className="text-[#F67F00]">{t("more")}</span>{" "}
                          {t("intelligent")}{" "}
                        </span>
                        <span className="whitespace-pre-line">
                          <span className="text-[#FF5F5F]">
                            {t("xperience")}
                          </span>{" "}
                          {t("with")}&nbsp;
                        </span>
                      </div>
                    </>
                  )}
                </div>

                {/*Content 6*/}

                <div className="w-full md:max-w-[1000px] flex flex-col justify-center items-center md:gap-5 gap-2">
                  <div
                    className={`w-full flex justify-center items-center md:rounded-[30px] rounded-[10px] bg-[#7F5FFF] md:pl-[99px] md:pr-[29px] md:py-[58px] py-5 pr-[10px] pl-[27px] ${tapFingerGap()}`}
                  >
                    <div
                      className={`md:text-[30px] text-xs text-white ${
                        i18n.language === "ms"
                          ? "md:w-[339px] w-full"
                          : i18n.language === "zh"
                          ? "md:w-[292px] w-full font-bold"
                          : "md:w-[292px] w-full"
                      }`}
                      style={{
                        fontFamily: "SF Pro Display B",
                        lineHeight: "normal",
                      }}
                    >
                      {t("tap-finger")}
                    </div>
                    <div>
                      <img src={tab2} alt="Tablet2" />
                    </div>
                  </div>
                  <div className="relative w-full md:h-[500px] h-[177px] justify-center items-center  md:rounded-[30px]">
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
                      <div className={`flex flex-col ${intelligentVideo()}`}>
                        <div
                          className="md:text-[30px] text-xs text-right text-white"
                          style={{
                            fontFamily: "SF Pro Display B",
                            lineHeight: "normal",
                          }}
                        >
                          {t("era-intelligent")}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex justify-center items-center md:gap-5 gap-[7px]">
                    <div
                      className={`w-full flex flex-col bg-[#582DFF] md:h-[500px] h-[180px] md:rounded-[30px] rounded-[10px] justify-center items-center md:px-[35px] md:pt-[54px] md:pb-[113px] pt-[19px] pb-[21px] px-[18px] gap-[21px] ${
                        i18n.language === "zh"
                          ? "md:gap-[55px]"
                          : "md:gap-[90px] "
                      }`}
                    >
                      <div>
                        <img
                          src={calendar}
                          alt="Calendar"
                          className="md:h-[182px] h-[64px]"
                        />
                      </div>
                      <div
                        className={`text-xs text-white text-center ${
                          i18n.language === "zh"
                            ? "md:text-[40px] font-bold"
                            : "md:text-[30px] "
                        }`}
                        style={{
                          fontFamily: "SF Pro Display B",
                          lineHeight: "normal",
                        }}
                      >
                        <div className="hidden md:flex flex-col">
                          <div> {t("easy-arrangement")}</div>
                          <div>{t("easy-arrangement2")}</div>
                        </div>
                        {!(i18n.language === "zh") && (
                          <div className="md:hidden flex flex-col">
                            {t("easy-arrangement-mobile")}
                          </div>
                        )}
                        {i18n.language === "zh" && (
                          <div className="md:hidden flex flex-col">
                            <div> {t("easy-arrangement")}</div>
                            <div>{t("easy-arrangement2")}</div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="w-full flex flex-col bg-[#7F5FFF] md:h-[500px] md:rounded-[30px] rounded-[10px] justify-center items-center md:px-[35px] md:pt-[54px] md:pb-[93px] pt-[19px] pb-[21px] px-[21px] md:gap-[69px] gap-[20px]">
                      <div>
                        <img
                          src={suhu}
                          alt="Temperature"
                          className="md:h-[182px] h-[64px]"
                        />
                      </div>
                      <div
                        className={`text-xs text-center ${
                          i18n.language === "zh"
                            ? "md:text-[40px] font-bold"
                            : "md:text-[30px] "
                        }`}
                        style={{
                          fontFamily: "SF Pro Display B",
                          lineHeight: "normal",
                        }}
                      >
                        <div>{t("student-condition")}</div>
                        {i18n.language === "zh" && (
                          <div>{t("student-condition2")}</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*content 7 */}
              <div className="w-full flex flex-col justify-center items-center md:gap-[100px] gap-[50px]">
                <div className="flex flex-col justify-center items-center">
                  <div
                    className="md:text-[70px] text-4xl text-center"
                    style={{
                      fontFamily: "SF Pro Display B",
                      lineHeight: "normal",
                    }}
                  >
                    <div className="w-full flex flex-col">
                      <span
                        className={`inline-block ${
                          i18n.language === "zh"
                            ? "md:w-[850px] font-bold"
                            : " md:w-[960px]"
                        }`}
                      >
                        {t("KT-more-than")}{" "}
                        <span className="text-[#814300]">{t("system")}</span>;
                        {t("like-your")}{" "}
                        <span className="text-[#23D300]">
                          {t("intelligent-assistant")}
                        </span>
                        {i18n.language === "zh" && <span>{t("fullstop")}</span>}
                        {i18n.language === "ms" && <span>{t("anda")}.</span>}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col md:gap-5 gap-[8px]">
                  <div className="relative w-full h-[177px] md:h-[500px] md:rounded-[30px] rounded-[10px] flex ">
                    <video
                      className="absolute inset-0 w-full h-full object-cover md:rounded-[30px] rounded-[10px]"
                      autoPlay
                      loop
                      muted
                    >
                      <source src={video3} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="absolute md:bottom-14 bottom-[18px] left-[21px] md:left-14 flex items-center">
                      <div className="flex flex-col">
                        <div
                          className={`md:text-[30px] text-left ${
                            i18n.language === "ms"
                              ? "md:w-[320px] w-[142px]  text-xs"
                              : i18n.language === "en"
                              ? "md:w-[280px] w-[130px]  text-xs"
                              : i18n.language === "zh"
                              ? "md:w-[300px] font-bold w-[106px] text-[10px]"
                              : "md:w-[280px] w-[130px]  text-xs"
                          }`}
                          style={{
                            fontFamily: "SF Pro Display B",
                            lineHeight: "normal",
                          }}
                        >
                          <div>{t("educational-tool")}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*COntent 8*/}

                  {/*  have to fix tomorrow
                  <div className="w-full md:rounded-[30px] rounded-[10px] bg-[#FCBF4A] flex justify-center items-center md:py-[85px] gap-5">
                    <div
                      className={`flex flex-col md:gap-[30px] gap-[10px] ${
                        i18n.language === "zh"
                          ? "md:text-2xl text-[8px] font-bold"
                          : i18n.language === "ms"
                          ? "md:w-[25px]  text-[10px]"
                          : "md:text-3xl  text-[10px] "
                      }`}
                      style={{
                        fontFamily: "SF Pro Display B",
                        lineHeight: "normal",
                      }}
                    >
                      <div className="text-[#FF0001] w-[140px] ">
                        {t("line-up")}{" "}
                      </div>
                      <div className="text-[#4800FF] w-[150px] ">
                        {t("submit-docs")}{" "}
                      </div>
                      <div className="text-[#00821D] w-[160px]">
                        {t("seat-advance")}{" "}
                      </div>
                      <div className="w-[170px] md:w-[440px]">
                        {t("same-ques")}{" "}
                      </div>
                    </div>
                    <div className="flex">
                      <img
                        src={open}
                        alt="OpenSign"
                        className="md:w-[250px] md:h-[298px] w-[88px] h-[105px]"
                      />
                    </div>
                  </div>
*/}

                  <div className="w-full flex md:rounded-[30px] rounded-[10px] bg-[#FCBF4A] md:py-[85px] md:gap-[68px] gap-[9px] md:pl-[108px] md:pr-[108px]">
                    <div
                      className="flex flex-col md:gap-[30px] gap-[10px] md:text-3xl"
                      style={{ fontFamily: "SF Pro Display B" }}
                    >
                      <div className="text-[#FF0001] ">{t("line-up")}</div>
                      <div className="text-[#4800FF]">{t("submit-docs")} </div>
                      <div className="text-[#00821D]">{t("seat-advance")} </div>
                      <div>{t("same-ques")} </div>
                    </div>
                    <div>
                      <img
                        src={open}
                        alt="OpenSign"
                        className="md:w-[250px] md:h-[298px] w-[88px] h-[105px]"
                      />
                    </div>
                  </div>

                  <div className="relative w-full  md:h-[500px] h-[176px] md:rounded-[30px] rounded-[10px] bg-[#FFDA92] flex items-center md:pr-[76px] pr-[27px] md:py-[133px] py-[46px] md:pl-[108px] pl-[38px] md:gap-[96px] gap-[33px]">
                    <div className="flex flex-col justify-center items-center">
                      <img
                        src={user}
                        alt="User"
                        className="md:w-[250px] md:h-[234px] w-[88px]"
                      />
                    </div>
                    <div className="flex md:w-[470px] w-full flex-col items-center justify-center">
                      <div
                        className="md:text-3xl text-[10px] text-left"
                        style={{
                          fontFamily: "SF Pro Display B",
                          lineHeight: "normal",
                        }}
                      >
                        {/*Desktop*/}
                        <div className="hidden md:flex flex-col">
                          <div>{t("develop-system")}</div>
                          <div>{t("already-incorporate")}</div>
                          <div> {t("privacy-feature")}</div>
                          <div> {t("safeguard-personal")}</div>
                          <div>{t("info-school")}</div>
                          <div> {t("parent-student")}</div>
                        </div>
                        {/*mobile*/}
                        <div className="md:hidden flex flex-col">
                          {t("incorporate-feature")}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:gap-[300px] gap-[50px]">
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
                style={{
                  fontFamily: "SF Pro Display B",
                  lineHeight: "normal",
                }}
              >
                <div className={`flex flex-col ${momentChildwidth()}`}>
                  {t("moment-children")}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col justify-center items-center md:gap-[100px] gap-[50px]">
            <div className="w-full flex flex-col justify-center items-center  md:px-0 pr-[32px] pl-[31px]">
              <div className="w-full md:max-w-[1000px] flex flex-col">
                <div
                  className="md:text-[32px] text-base text-center"
                  style={{ lineHeight: "normal" }}
                >
                  {/*Desktop*/}
                  <div
                    className="hidden md:flex flex-col"
                    style={{ fontFamily: "SF Pro Display M" }}
                  >
                    <div className="flex flex-col justify-center items-center">
                      <div>{t("leave-contact")}</div>
                      <div>{t("quality-communication")}</div>
                      <div>{t("understand-need")}</div>
                    </div>
                  </div>
                  {/*Mobile*/}
                  <div
                    className="md:hidden flex flex-col justify-center items-center"
                    style={{ fontFamily: "SF Pro Display Semibold" }}
                  >
                    {t("leave-contact-full")}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full  flex justify-center items-center">
              <div
                className="relative w-full md:max-w-[1100px] md:rounded-[30px] flex flex-col items-center gap-[30px] md:gap-[90px] md:px-[86px] pr-[32px] pl-[31px] md:pt-[82px] py-[50px] md:pb-[95px]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(221, 221, 221, 0.3), rgba(221, 221, 221, 1), rgba(221, 221, 221, 0.7))",
                }}
              >
                <div
                  className={`flex flex-col w-full justify-center items-center md:w-[${
                    i18n.language === "ms" ? "950px" : "800px"
                  }]`}
                >
                  <div
                    className="md:text-[32px]  text-base text-center"
                    style={{
                      fontFamily: "SF Pro Display B",
                      lineHeight: "normal",
                    }}
                  >
                    {t("form-desc")}
                  </div>
                </div>
                <div className="flex flex-col md:gap-[100px] gap-[50px] items-center justify-center">
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
                            <label>{t("school-name")}</label>
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
                            <label>{t("name-pic")}</label>
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
                            <label>{t("email-address")}</label>
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
                            <label>{t("contact-no")}</label>
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
                              <div>{t("24hr-send")}</div>
                              <div>{t("service-contact")}</div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Download;
