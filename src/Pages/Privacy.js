import React from "react";
import Lock from "../assets/privacy/lock.svg";
import "../font.css";
import { useTranslation } from "react-i18next";
const Privacy = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full bg-[#000] md:py-[200px] py-[44px] md:px-0 pl-[31px] pr-[32px] flex justify-center">
      <div className="w-full md:w-[1000px] flex flex-wrap md:justify-center items-center md:gap-[50px] gap-[15px]">
        <div className="flex flex-col md:justify-center md:items-center md:w-[165px] md:h-[182px] w-[60px] h-[66px]">
          <img src={Lock} alt="Lock"></img>
        </div>
        <div className=" flex flex-col justify-center md:gap-[30px] gap-[20px] md:w-[685px] w-full">
          <div className="flex justify-start items-center">
            <div
              className="md:text-[60px] text-[18px] text-[#FFF]"
              style={{ fontFamily: "SF Pro Display B", lineHeight: "normal" }}
            >
              {t("privacy")}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div
              className="hidden md:flex text-[#FFF] text-2xl "
              style={{ lineHeight: "normal", fontFamily: "SF Pro Display M" }}
            >
              {t("privacy-desc")}
            </div>
            <div
              className="md:hidden flex text-[#FFF] text-[15px] "
              style={{ lineHeight: "normal", fontFamily: "SF Pro Display R" }}
            >
              {t("privacy-desc")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
