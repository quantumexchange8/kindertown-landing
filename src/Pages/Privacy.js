import React from "react";
import Lock from "../assets/privacy/lock.svg";
import "../font.css";
import { useTranslation } from "react-i18next";
const Privacy = () => {
  const { i18n, t } = useTranslation();
  return (
    <div className="w-full bg-[#000] md:py-[103px] py-[44px] md:px-0 px-[37px] flex justify-center text-center">
      <div className="w-full md:w-[1000px] flex flex-col justify-center items-center md:gap-[50px] gap-[15px]">
        <div className="flex flex-col md:justify-center md:items-center md:w-[140px] md:h-[150px] w-[60px] h-[66px]">
          <img src={Lock} alt="Lock"></img>
        </div>
        <div className={`flex flex-col justify-center md:gap-[10px] gap-5 w-full ${(i18n.language === 'ms') ? "md:w-[950px]" : "md:w-[790px]"}`}>
          <div className="flex justify-center items-center">
            <div
              className={`md:text-[48px] text-[18px] text-[#FFF] font-bold`}
            >
              {t("privacy")}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div
              className="hidden md:flex flex-col text-center text-[#FFF] text-2xl w-[1000px]"
              style={{ lineHeight: "normal" }}
            >
              {i18n.language === 'ms' 
                ? <div>{t("privacy-desc1")}</div>
                : <><div>{t("privacy-desc1")}</div><div>{t("privacy-desc2")}</div></>
              }
            </div>
            <div
              className={`md:hidden flex flex-col text-[#FFF] text-[14px] font-medium `}
              style={{ lineHeight: "normal" }}
            >
              <div>{t("mobile-privacy-desc")}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
