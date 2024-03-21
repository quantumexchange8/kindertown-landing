import React from "react";
import logo from "../assets/footer/logo.svg";
import socmed from "../assets/footer/socmed.svg";
import google from "../assets/footer/google.svg";
import ios from "../assets/footer/ios.svg";
import ct from "../assets/footer/ct.svg";
const Footer = () => {
  return (
    <footer className="bg-[#FFF7EF]  justify-center items-center pb-[64px]  pt-16">
      <div className="w-full flex flex-col justify-center items-center pb-[48px] px-[170px] gap-9">
        <div className="w-[1000px] flex flex-col justify-center gap-9">
          <div className="flex flex-col w-full">
            <div className="w-[74px] h-[51px]">
              <img src={logo} alt="Logo" />
            </div>
          </div>
          <div className="flex justify-between">
            {/*Language*/}
            <div className="flex flex-col gap-[25px]">
              <div
                className="flex h-[30px] gap-[30px] text-2xl"
                style={{ fontFamily: "SF Pro Display M" }}
              >
                <div className="flex flex-col">English</div>
                <div className="flex flex-col">Malay</div>
                <div className="flex flex-col">中文</div>
              </div>
              <div className="flex flex-col gap-4">
                <div
                  className="flex gap-9 text-xl"
                  style={{ fontFamily: "SF Pro Display M" }}
                >
                  <div className="flex flex-col  w-[207px]">
                    Kindertown Parents
                  </div>
                  <div className="flex flex-col">Referral Program</div>
                </div>
                <div
                  className="flex gap-9 text-xl"
                  style={{ fontFamily: "SF Pro Display M" }}
                >
                  <div className="flex flex-col w-[207px]">
                    Kindertown Teacher
                  </div>
                  <div className="flex flex-col">Career Opportunities</div>
                </div>
                <div
                  className="flex gap-9 text-xl"
                  style={{ fontFamily: "SF Pro Display M" }}
                >
                  <div className="flex flex-col w-[207px]">
                    Kindertown Admin
                  </div>
                  <div className="flex flex-col">Download</div>
                </div>
              </div>
            </div>
            {/*Icon etc*/}
            <div className="flex flex-col justify-end gap-9">
              <div className="flex flex-col gap-[15px]">
                <div
                  className="text-2xl text-right"
                  style={{ fontFamily: "SF Pro Display M" }}
                >
                  Stay connect with us:
                </div>
                <div className="flex justify-end">
                  <img src={socmed} alt="SocMed" />
                </div>
              </div>
              <div className="flex flex-col gap-[15px]">
                <div
                  className="text-2xl text-right"
                  style={{ fontFamily: "SF Pro Display M" }}
                >
                  Discover our applications:
                </div>
                <div className="flex justify-end gap-3">
                  <img src={ios} alt="IOS" />
                  <img src={google} alt="Android" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-[1000px] border-[#000] mx-auto dark:border-black-900" />
      <div className="w-full flex justify-center items-center px-[170px]">
        <div className="w-[1000px] pt-[15px] flex justify-between">
          <div className="flex flex-col w-[501px]">
            <div
              className="text-xs text-[#565656]"
              style={{ fontFamily: "SF Pro Display R" }}
            >
              <div className="flex gap-2">
                <div className="flex-col">
                  © 2006 Current Tech Industries Sdn Bhd.
                </div>
                <div>|</div>
                <div className="flex-col">Privacy Policy</div>
                <div>|</div>
                <div className="flex-col">Terms of use</div>
                <div>|</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div
              className="text-xs text-[#565656]"
              style={{ fontFamily: "SF Pro Display R" }}
            >
              <div className="flex gap-4">
                <div className="flex flex-col">
                  <img src={ct} alt="CTLogo" />
                </div>
                <div className="flex flex-col">
                  Powered by Current Tech Industries
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
