import React, { useState } from "react";
import ReactModal from "react-modal";
import { Link } from "react-router-dom";
import logo from "../assets/footer/logo.svg";
import wsp from "../assets/footer/wsp-01.svg";
import fb from "../assets/footer/fb.svg";
import ig from "../assets/footer/ig-01.svg";
import msg from "../assets/footer/msg-01.svg";
import linkedin from "../assets/footer/in-01.svg";
import tele from "../assets/footer/tele-01.svg";
import google from "../assets/footer/android.svg";
import ios from "../assets/footer/apple.svg";
import ct from "../assets/footer/ct.png";
import Privacy from "../components/modal/Privacy";
import Terms from "../components/modal/Terms";
const Footer = () => {
  const [PrivacyOpen, setPrivacyOpen] = useState(false);
  const [TermsOpen, setTermsOpen] = useState(false);
  const handleLinkClick = (url) => {
    window.location.href = url;
  };

  return (
    <footer className="bg-[#FFF7EF]  justify-center items-center pb-[64px]  pt-16">
      <div className="w-full flex flex-col justify-center items-center pb-[48px] px-[170px] gap-9">
        <div className="w-[1000px] flex flex-col justify-center gap-9">
          <div className="flex flex-col w-full">
            <div className="w-[74px] h-[51px]">
              <Link
                to="/"
                onClick={() => handleLinkClick("/")}
                className="hover:text-[#F67F00]"
              >
                <img src={logo} alt="Logo" />
              </Link>
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
                    <Link
                      to="/products/parent"
                      onClick={() => handleLinkClick("/products/parent")}
                      className="hover:text-[#F67F00]"
                    >
                      Kindertown Parents
                    </Link>
                  </div>
                  <div className="flex flex-col">
                    <Link
                      to="/join-us/referral-program"
                      onClick={() =>
                        handleLinkClick("/join-us/referral-program")
                      }
                      className="hover:text-[#F67F00]"
                    >
                      Referral Program
                    </Link>
                  </div>
                </div>
                <div
                  className="flex gap-9 text-xl"
                  style={{ fontFamily: "SF Pro Display M" }}
                >
                  <div className="flex flex-col w-[207px]">
                    <Link
                      to="/products/teacher"
                      onClick={() => handleLinkClick("/products/teacher")}
                      className="hover:text-[#F67F00]"
                    >
                      Kindertown Teacher
                    </Link>
                  </div>
                  <div className="flex flex-col">
                    <Link
                      to="/join-us/career-opportunities"
                      onClick={() =>
                        handleLinkClick("/join-us/career-opportunities")
                      }
                      className="hover:text-[#F67F00]"
                    >
                      Career Opportunities
                    </Link>
                  </div>
                </div>
                <div
                  className="flex gap-9 text-xl"
                  style={{ fontFamily: "SF Pro Display M" }}
                >
                  <div className="flex flex-col w-[207px]">
                    <Link
                      to="/products/admin"
                      onClick={() => handleLinkClick("/products/admin")}
                      className="hover:text-[#F67F00]"
                    >
                      Kindertown Admin
                    </Link>
                  </div>
                  <div className="flex flex-col">
                    <Link
                      to="/download"
                      onClick={() => handleLinkClick("/download")}
                      className="hover:text-[#F67F00]"
                    >
                      Download
                    </Link>
                  </div>
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
                <div className="flex justify-end gap-[10px]">
                  <div className="flex flex-col">
                    <img
                      src={wsp}
                      alt="Whatsapp"
                      className="w-[30px] h-[30px]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <img
                      src={tele}
                      alt="Telegram"
                      className="w-[30px] h-[30px]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <img
                      src={msg}
                      alt="Messenger"
                      className="w-[30px] h-[30px]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <img
                      src={fb}
                      alt="Facebook"
                      className="w-[30px] h-[30px]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <img
                      src={ig}
                      alt="Instagram"
                      className="w-[30px] h-[30px]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <img
                      src={linkedin}
                      alt="Linkedin"
                      className="w-[30px] h-[30px]"
                    />
                  </div>
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
                <div className="flex-col">
                  <button
                    className="hover:text-[#FF8400]"
                    onClick={() => setPrivacyOpen(true)}
                  >
                    Privacy Policy
                  </button>
                  <ReactModal
                    isOpen={PrivacyOpen}
                    onRequestClose={() => setPrivacyOpen(false)}
                    contentLabel="Privacy"
                    style={{
                      content: {
                        width: "900px", // Set width to 900px
                        margin: "auto", // Center horizontally
                        borderRadius: "50px", // Set border radius to 50px
                        display: "flex",
                        justifyContent: "center", // Center horizontally
                        alignItems: "center", // Center vertically
                        overflow: "auto",
                      },
                    }}
                  >
                    <Privacy onClose={() => setPrivacyOpen(false)} />
                  </ReactModal>
                </div>
                <div>|</div>
                <div className="flex-col">
                  {" "}
                  <button
                    className="hover:text-[#FF8400]"
                    onClick={() => setTermsOpen(true)}
                  >
                    Terms of use
                  </button>
                  <ReactModal
                    isOpen={TermsOpen}
                    onRequestClose={() => setTermsOpen(false)}
                    contentLabel="Terms"
                    style={{
                      content: {
                        width: "900px", // Set width to 900px
                        margin: "auto", // Center horizontally
                        borderRadius: "50px", // Set border radius to 50px
                        display: "flex",
                        justifyContent: "center", // Center horizontally
                        alignItems: "center", // Center vertically
                        overflow: "auto",
                      },
                    }}
                  >
                    <Terms onClose={() => setTermsOpen(false)} />
                  </ReactModal>
                </div>
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
