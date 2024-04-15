import React, { useState } from "react";

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
import ct from "../assets/footer/ct.svg";
import Privacy from "../components/modal/privacymodal";
import Terms from "../components/modal/termsmodal";
const Footer = () => {
  const [PrivacyOpen, setPrivacyOpen] = useState(false);
  const [TermsOpen, setTermsOpen] = useState(false);
  const handleLinkClick = (url) => {
    window.location.href = url;
  };

  return (
    <footer>
      <div className="bg-[#FFF7EF]  justify-center items-center">
        {/*Mobile*/}
        <div className="w-full md:hidden flex flex-wrap gap-9 py-7 px-8 md:p-0">
          <div className="flex flex-wrap gap-[40px] md:hidden">
            <div className="text-xl" style={{ fontFamily: "SF Pro Display M" }}>
              <div className="flex flex-col md:hidden gap-5">
                <div>
                  <Link
                    to="/products/parent"
                    onClick={() => handleLinkClick("/products/parent")}
                    className="hover:text-[#F67F00]"
                  >
                    Kindertown Parents
                  </Link>
                </div>
                <div>
                  <Link
                    to="/products/teacher"
                    onClick={() => handleLinkClick("/products/teacher")}
                    className="hover:text-[#F67F00]"
                  >
                    Kindertown Teacher
                  </Link>
                </div>
                <div>
                  <Link
                    to="/products/admin"
                    onClick={() => handleLinkClick("/products/admin")}
                    className="hover:text-[#F67F00]"
                  >
                    Kindertown Admin
                  </Link>
                </div>
                <div>
                  <Link
                    to="/join-us/referral-program"
                    onClick={() => handleLinkClick("/join-us/referral-program")}
                    className="hover:text-[#F67F00]"
                  >
                    Referral Program
                  </Link>
                </div>
                <div>
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
                <div>
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
            <div className="flex flex-wrap gap-[15px]">
              <div
                className="text-2xl text-left"
                style={{ fontFamily: "SF Pro Display M" }}
              >
                Stay connect with us:
              </div>
              <div className="flex gap-[10px]">
                <div className="flex flex-col">
                  <img src={wsp} alt="Whatsapp" className="w-[30px] h-[30px]" />
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
                  <img src={fb} alt="Facebook" className="w-[30px] h-[30px]" />
                </div>
                <div className="flex flex-col">
                  <img src={ig} alt="Instagram" className="w-[30px] h-[30px]" />
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
          </div>
          <div className="flex flex-col">
            <div
              className="text-xs text-[#565656]"
              style={{ fontFamily: "SF Pro Display R" }}
            >
              <div>© 2006 Current Tech Industries Sdn Bhd.</div>
              <div className="flex gap-4">
                <span>|</span>
                <button
                  className="hover:text-[#FF8400]"
                  onClick={() => setPrivacyOpen(true)}
                >
                  Privacy Policy
                </button>
                <Privacy
                  PrivacyOpen={PrivacyOpen}
                  setPrivacyOpen={setPrivacyOpen}
                />
                <span>|</span>
                <button
                  className="hover:text-[#FF8400]"
                  onClick={() => setTermsOpen(true)}
                >
                  Terms of use
                </button>
                <Terms TermsOpen={TermsOpen} setTermsOpen={setTermsOpen} />
                <span>|</span>
              </div>
            </div>
          </div>
        </div>
        {/*Desktop*/}
        <div className="w-full hidden md:flex flex-col justify-center items-center gap-[50px] pt-[64px]">
          <div className="w-full md:w-[1000px] md:flex flex-col justify-center gap-9">
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
                  className="flex h-[30px] gap-[30px] text-2xl font-semibold"
                  style={{ fontFamily: "SF Pro Display Semibold" }}
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
                    style={{ fontFamily: "SF Pro Display Semibold" }}
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
                    style={{ fontFamily: "SF Pro Display Semibold" }}
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

          <div className="flex flex-col gap-4 mb-16">
            <hr className="hidden md:flex md:w-[1000px] border-[#000] mx-auto dark:border-black-900" />

            <div className="w-full md:flex justify-center items-center">
              <div className="hidden md:w-[1000px] md:flex justify-between">
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
                        <Privacy
                          PrivacyOpen={PrivacyOpen}
                          setPrivacyOpen={setPrivacyOpen}
                        />
                      </div>
                      <div>|</div>
                      <div className="flex-col">
                        <button
                          className="hover:text-[#FF8400]"
                          onClick={() => setTermsOpen(true)}
                        >
                          Terms of use
                        </button>
                        <Terms
                          TermsOpen={TermsOpen}
                          setTermsOpen={setTermsOpen}
                        />
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
          </div>
        </div>
      </div>
      <div className="md:hidden flex pl-[31px] pr-[120px] gap-4 pt-[10px] pb-[93px]">
        <div>
          <img src={ct} alt="CT" />
        </div>
        <div className="text-xs" style={{ fontFamily: "SF Pro Display R" }}>
          Powered by Current Tech Industries
        </div>
      </div>
    </footer>
  );
};

export default Footer;
