// JoinUs.jsx
import React from "react";
import Privacy from "./Privacy";
import productsAdmin from "../assets/admin/productsAdmin.mp4";
import Device from "../assets/admin/Device.png";
import Device2 from "../assets/admin/Device2.png";
import Macbook from "../assets/admin/macbook.png";
import Macbook2 from "../assets/admin/macbook2.png";
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
import PopupForm from "./Form";
import { useTranslation } from "react-i18next";
const Admin = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center md:pt-[60px] pt-[60px] w-max-[1000px] md:px-0 md:gap-[150px] gap-[50px] md:pb-[200px] pb-[50px]">
        <div className="relative w-full md:pb-[20px] md:h-[900px] h-[300px] overflow-hidden">
          <div className="w-full md:pt-[108px] md:pl-[106px]">
            <video
              src={productsAdmin}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="absolute md:top-0 left-0 w-full h-[300px] md:h-auto object-cover object-center"
            />

            <div className="absolute flex items-center justify-center text-center inset-0 text-[#6938EF] z-10">
              <div
                className={`md:text-[64px] text-2xl font-bold`}
                style={{
                  lineHeight: "normal",
                }}
              >
                <><div>{t("inclusive-environment1")}</div>
                  <div>{t("inclusive-environment2")}</div></>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`w-full max-w-[1000px] md:px-0 px-[30px] flex flex-col justify-center items-center gap-[100px] md:gap-[150px]`}
        >
          {/*Content 1*/}
          <div className="w-full flex flex-col md:gap-[100px] gap-[50px]">
            <div className="w-full flex flex-col justify-center items-center gap-[10px]">
              <div className="flex flex-col items-center">
                <div
                  className={`md:text-[80px] text-2xl font-bold`}
                  style={{
                    lineHeight: "normal",
                  }}
                >
                  <div>{t("KT-admin")}</div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div
                  className={`text-center text-sm md:text-[32px]`}
                  style={{
                    lineHeight: "normal",
                  }}>
                  <div
                    className="hidden md:flex flex-col">
                    <div
                      className={`flex flex-col items-center ${i18n.language === "zh" ? "font-semibold" : "font-medium"
                        }`}>
                      <div>{t("KT-admin-desc1")}</div>
                      <div className="md:w-[805px]">{t("KT-admin-desc2")}</div>
                    </div>
                  </div>
                  <div
                    className={`md:hidden flex flex-col font-semibold w-[340px]`}>
                    {t("KT-admin-desc1")}{t("KT-admin-desc2")}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Content 2 -- Superb Interface  */}
          <div
            className={`w-full flex md:flex-row flex-col justify-center items-center gap-[30px]`}
          >
            <div
              className="flex flex-col text-center relative w-full font-bold md:gap-0 gap-[20px] align-center items-center"
              style={{ lineHeight: "normal" }}
            >
              <div
                className={`hidden md:flex tracking-tight ${i18n.language === "ms" ? "md:w-[400px]" : "md:w-[300px]"} 
                md:absolute top-0 right-0 text-right ${i18n.language === "zh" ? "md:text-[55px] indent-24" : "md:text-[36px]"
                  }`}
              >
                {t("superb-interface")}
              </div>

              <div className={`md:hidden flex flex-col text-[16px] w-[340px] text-center`}>
                <div>{t("superb-interface-mobile")}</div>
              </div>

              <div className="w-full flex flex-col">
                <img src={Device} alt="Device" className="w-full md:w-[800px]" />
              </div>
            </div>


          </div>
          {/*Content 3 -- School Enrollment*/}
          <div
            className={`w-full flex md:flex-row flex-col justify-center items-center md:gap-0 gap-[20px]`}
          >
            <div className="w-full flex flex-col md:order-2 order-2">
              <img src={Device2} alt="Device2" className="w-full md:w-[733px]" />
            </div>
            <div
              className="flex flex-col md:order-1 order-1"
              style={{ lineHeight: "normal" }}
            >
              {/*Desktop */}
              <div
                className={`hidden md:flex items-center md:w-[275px] ${i18n.language === "zh"
                  ? "md:text-[55px] "
                  : "md:text-[36px]"
                  }`}
              >
                <span
                  className={`inline-block w-full font-bold tracking-tight`}
                >
                  {t("efficient-timesave")}
                </span>
              </div>

              {/*Mobile */}
              <div
                className={`md:hidden flex flex-col justify-center items-center text-base font-bold w-[340px]`}
                style={{ lineHeight: "normal" }}
              >
                <div> {t("efficient-timesave-mobile")}</div>
                <div> {t("efficient-timesave2-mobile")}</div>
              </div>
            </div>
          </div>
          {/*CONTENT 4 -- Management Tools*/}
          <div className="w-full flex flex-col justify-center md:gap-[50px] gap-[20px]">
            <div className="flex flex-col justify-center items-center">
              <div
                className={`text-center text-base md:text-[36px] font-bold`}
                style={{
                  lineHeight: "normal",
                }}
              >
                {/*Desktop*/}
                <div
                  className={`hidden md:flex flex-col items-center ${i18n.language === "ms" ? "text-balance" : (i18n.language === "zh") ? "md:w-[700px]" : ""}`}
                >
                  {t("manage-tool")}
                </div>
                {/*Mobile*/}
                <div
                  className={`md:hidden flex flex-col items-center tracking-tight w-[340px]`}
                >
                  {t("manage-tool")}
                </div>
              </div>
            </div>

            <div className=" w-full flex flex-col justify-center items-center">
              <img src={Macbook} alt="Macbook" />
            </div>
          </div>
          {/*CONTENT 5 -- Significant Contributions */}
          <div className="w-full flex flex-col justify-center md:gap-[50px] gap-[20px]">
            <div className="flex flex-col justify-center items-center">
              <div
                className={`text-center text-base md:text-[36px] font-bold`}
                style={{
                  lineHeight: "normal",
                }}
              >
                <div
                  className="hidden md:flex flex-col items-center"
                >
                  <div className={`flex items-center ${i18n.language === "zh" ? "md:w-[550px]" : "text-balance"}`}>
                    {t("academic-achievement")}
                  </div>
                </div>
                <div
                  className="md:hidden flex flex-col items-center w-[340px]"
                >
                  <div>{t("mobile-academic-achievement1")}</div>
                  <div>{t("mobile-academic-achievement2")}</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src={Macbook2} alt="Macbook2" className="w-full" />
            </div>
          </div>
          {/*CONTENT 6 -- Management system*/}
          <div className="w-full flex flex-col justify-center  md:gap-[50px] gap-[20px] md:pb-0 pb-[50px]">
            <div className="flex flex-col justify-center items-center">
              <div
                className={`text-center text-base md:text-[36px]`}
                style={{
                  lineHeight: "normal",
                }}
              >
                <div
                  className="md:flex flex-col hidden items-center font-bold "
                >
                  <div>{t("management-system1")}</div>
                  <div>{t("management-system2")}</div>
                  <div>{t("management-system3")}</div>
                  <div>{t("management-system4")}</div>
                  <div>{t("management-system5")}</div>
                </div>
                <div
                  className={`md:hidden flex flex-col items-center font-bold w-[340px]`}
                >
                  <div>{t("mobile-management-system")}</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src={Ipad} alt="Macbook3" />
            </div>
          </div>
        </div>
        {/*Content 7 -- Thoughtful features*/}

        <div className="w-full md:w-[1000px] flex flex-col justify-center items-center  md:gap-[100px] gap-[20px]">
          <div className="w-full flex flex-col justify-center items-center">
            <div
              className={`text-center font-bold md:text-[64px]`}
              style={{
                lineHeight: "normal",
              }}
            >
              {/*Desktop*/}
              <div
                className={`hidden md:flex flex-col justify-center items-center ${i18n.language === "en"
                  ? "md:w-[800px]"
                  : i18n.language === "zh"
                    ? "md:w-[700px]"
                    : "md:w-[950px]"
                  }`}
              >
                {t("thoughtful-feature")}
              </div>

              {/*Mobile*/}
              <div className="md:hidden flex flex-col justify-center items-center w-[340px]">
                <div>{t("thoughtful-feature1-mobile")}</div>
                <div>{t("thoughtful-feature2-mobile")}</div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col justify-center items-center md:gap-[66px] gap-9">
            {/*row 1*/}
            <div className="w-full grid md:grid-cols-8 grid-cols-4 md:gap-y-0 gap-y-9">
              <div className="flex flex-col justify-center items-center md:gap-4 gap-[10px]">
                <div>
                  <img
                    src={icon1}
                    alt="admission"
                    className="w-[50px] h-[50px]"
                  />
                </div>
              </div>
              {/*Icon 2*/}
              <div className="flex flex-col justify-center items-center md:gap-4 gap-[10px]">
                <div>
                  <img
                    src={icon2}
                    alt="Student"
                    className="w-[50px] h-[50px]"
                  />
                </div>
              </div>
              {/*Icon 3*/}
              <div className="flex flex-col justify-center items-center md:gap-4 gap-[10px]">
                <div>
                  <img
                    src={icon3}
                    alt="Dashboard"
                    className="w-[50px] h-[50px]"
                  />
                </div>
              </div>
              {/*Icon 4*/}
              <div className="flex flex-col justify-center items-center md:gap-4 gap-[10px]">
                <div>
                  <img
                    src={icon4}
                    alt="Classroom"
                    className="w-[50px] h-[50px]"
                  />
                </div>
              </div>
              {/*Icon 5*/}
              <div className="flex flex-col justify-center items-center md:gap-4 gap-[10px]">
                <div>
                  <img
                    src={icon5}
                    alt="Qualification"
                    className="w-[50px] h-[50px]"
                  />
                </div>
              </div>
              {/*Icon 6*/}
              <div className="flex flex-col justify-center items-center md:gap-4 gap-[10px]">
                <div>
                  <img
                    src={icon6}
                    alt="Check Log"
                    className="w-[50px] h-[50px]"
                  />
                </div>
              </div>
              {/*Icon 7*/}
              <div className="flex flex-col justify-center items-center md:gap-4 gap-[10px]">
                <div>
                  <img
                    src={icon7}
                    alt="Homework"
                    className="w-[50px] h-[50px]"
                  />
                </div>
              </div>
              {/*Icon 8*/}
              <div className="flex flex-col justify-center items-center md:gap-4 gap-[10px]">
                <div>
                  <img
                    src={icon8}
                    alt="Download"
                    className="w-[50px] h-[50px]"
                  />
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
                    className="w-[50px] h-[50px]"
                  />
                </div>
              </div>
              {/*Icon 2*/}
              <div className="flex flex-col justify-center items-center md:gap-4 gap-[10px]">
                <div>
                  <img
                    src={icon10}
                    alt="Email"
                    className="w-[50px] h-[50px]"
                  />
                </div>
              </div>
              {/*Icon 3*/}
              <div className="flex flex-col justify-center items-center md:gap-4 gap-[10px]">
                <div>
                  <img
                    src={icon11}
                    alt="Announcement"
                    className="w-[50px] h-[50px]"
                  />
                </div>
              </div>
              {/*Icon 4*/}
              <div className="flex flex-col justify-center items-center md:gap-4 gap-[10px]">
                <div>
                  <img
                    src={icon12}
                    alt="Community"
                    className="w-[50px] h-[50px]"
                  />
                </div>
              </div>
              {/*Icon 5*/}
              <div className="flex flex-col justify-center items-center md:gap-4 gap-[10px]">
                <div>
                  <img
                    src={icon13}
                    alt="Payment"
                    className="w-[50px] h-[50px]"
                  />
                </div>
              </div>
              {/*Icon 6*/}
              <div className="flex flex-col justify-center items-center md:gap-4 gap-[10px]">
                <div>
                  <img
                    src={icon14}
                    alt="Market"
                    className="w-[50px] h-[50px]"
                  />
                </div>
              </div>
              {/*Icon 7*/}
              <div className="flex flex-col justify-center items-center md:gap-4 gap-[10px]">
                <div>
                  <img
                    src={icon15}
                    alt="TimeTable"
                    className="w-[50px] h-[50px]"
                  />
                </div>
              </div>
              {/*Icon 8*/}
              <div className="flex flex-col justify-center items-center md:gap-4 gap-[10px]">
                <div>
                  <img
                    src={icon16}
                    alt="Event"
                    className="w-[50px] h-[50px]"
                  />
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
                    className="w-[50px] h-[50px]"
                  />
                </div>
              </div>
              {/*Icon 2*/}
              <div className="flex flex-col justify-center items-center  md:gap-4 gap-[10px]">
                <div>
                  <img
                    src={icon18}
                    alt="Grading"
                    className="w-[50px] h-[50px]"
                  />
                </div>
              </div>
              {/*Icon 3*/}
              <div className="flex flex-col justify-center items-center  md:gap-4 gap-[10px]">
                <div>
                  <img
                    src={icon19}
                    alt="daycare"
                    className="w-[50px] h-[50px]"
                  />
                </div>
              </div>
              {/*Icon 4*/}
              <div className="flex flex-col justify-center items-center  md:gap-4 gap-[10px]">
                <div>
                  <img
                    src={icon20}
                    alt="bus"
                    className="w-[50px] h-[50px]"
                  />
                </div>
              </div>
              {/*Icon 5*/}
              <div className="flex flex-col justify-center items-center  md:gap-4 gap-[10px]">
                <div>
                  <img
                    src={icon21}
                    alt="CCTV"
                    className="w-[50px] h-[50px]"
                  />
                </div>
              </div>
              {/*Icon 6*/}
              <div className="flex flex-col justify-center items-center  md:gap-4 gap-[10px]">
                <div>
                  <img
                    src={icon22}
                    alt="SMS"
                    className="w-[50px] h-[50px]"
                  />
                </div>
              </div>
              {/*Icon 7*/}
              <div className="flex flex-col justify-center items-center md:gap-4 gap-[10px]">
                <div>
                  <img
                    src={icon23}
                    alt="homework"
                    className="w-[50px] h-[50px]"
                  />
                </div>
              </div>
              {/*Icon 8*/}
              <div className="flex flex-col justify-center items-center md:gap-4 gap-[10px]">
                <div>
                  <img
                    src={icon24}
                    alt="exam"
                    className="w-[50px] h-[50px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PopupForm />
      {/*Content 8*/}
      <div className="w-full md:flex hidden flex-col justify-center items-center md:pb-[150px]">
        <div className="flex flex-col justify-center items-center">
          <div className="relative flex flex-col justify-center md:w-[400px] w-[167px] rounded-[16px] md:rounded-[50px] bg-gradient-to-t from-[#ADADAD] to-[#F9F9F9] md:pt-[53px] pt-[27px] md:pb-[61px] pb-[22px] md:pl-[34px] md:pr-[33px] px-[14px] md:gap-[59px] gap-[27px]">
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
                  className="md:text-[24px] text-[10px] inline-block font-bold"
                  style={{
                    lineHeight: "normal",
                  }}
                >
                  CT PRODUCT &nbsp;
                  <span className=" bg-black  md:w-[77px] h-[29px] md:rounded-[4px] rounded-[2px] text-white md:px-[5.6px] px-[3px] py-[1px]">
                    CARE
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div
                  className="md:text-[24px] text-[10px] inline-block text-center font-medium"
                  style={{
                    lineHeight: "normal",
                  }}
                >
                  <div
                    className="hidden md:flex flex-col"
                  >
                    <div className="flex items-center justify-center ">
                      Free provide face to face training and online tutorials.
                    </div>
                  </div>
                  <div
                    className="md:hidden flex flex-wrap"
                  >
                    Free provide face to face training and online tutorials.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/**Coding Lama********** */}

      {/*Content 2*/}
      {/*
        <div className="w-full flex md:flex-row flex-col gap-[30px] justify-end items-center  overflow-hidden">
          <div
            className="flex flex-col w-full md:w-[400px] md:text-[50px] text-xl"
            style={{ fontFamily: "SF Pro Display B", lineHeight: "normal" }}
          >
            <div
              className="md:text-[50px] text-xl text-center"
              style={{ fontFamily: "SF Pro Display B", lineHeight: "normal" }}
            >
              <div className="hidden md:flex flex-wrap items-center ">
                Superb Interface with Exceptional User Experience
              </div>
              <div className="md:hidden flex flex-col items-center">
                <div className="flex items-center">Superb Interface with</div>
                <div className="flex items-center">
                  Exceptional User Experience
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col relative left-[119px]">
            <img src={Device} alt="Device" className="md:w-[1008px] w-full" />
          </div>
        </div>
      
        <div className="w-full flex md:flex-row flex-col gap-[30px]  justify-start items-center  overflow-hidden">
          <div className="flex flex-col relative  right-[119px] md:order-1 order-2">
            <img src={Device2} alt="Device2" className="md:w-[1008px] w-full" />
          </div>
          <div
            className="md:text-[50px] text-xl w-full md:w-[400px] order-1 md:order-2"
            style={{ fontFamily: "SF Pro Display B", lineHeight: "normal" }}
          >
            <div
              className="md:text-[50px] text-xl text-center"
              style={{ fontFamily: "SF Pro Display B", lineHeight: "normal" }}
            >
              <div className="hidden md:flex flex-wrap items-center">
                Make school enrollment effortless, efficient, and time-saving.
              </div>
              <div className="md:hidden flex flex-col items-center">
                <div className="flex items-center">Make school enrollment</div>
                <div className="flex items-center">
                  effortless, efficient, and
                </div>
                <div className="flex items-center">time-saving. </div>
              </div>
            </div>
          </div>
        </div>
         */}

      {/**Coding Lama********** */}

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

      <Privacy />
    </>
  );
};

export default Admin;
