import React, { useState } from "react";
import i18n from "../i18n";
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
import { useTranslation } from "react-i18next";
const Footer = () => {
  const [PrivacyOpen, setPrivacyOpen] = useState(false);
  const [TermsOpen, setTermsOpen] = useState(false);
  const handleLinkClick = (url) => {
    window.location.href = url;
  };
  const { t } = useTranslation();

  return (
    <footer>
      <div className="flex flex-col gap-[11px] md:gap-0">
        <div className="w-full bg-[#FFF7EF] flex flex-col justify-center items-center  md:pt-16  md:pb-[64px]  py-7 md:px-0 pl-[31px] pr-8">
          {/*Desktop*/}
          <div className="w-full md:max-w-[1000px] hidden md:flex flex-col md:gap-9">
            <div className="flex justify-start items-start w-[74px] h-[50px]">
              <Link
                to="/"
                onClick={() => handleLinkClick("/")}
                className="hover:text-[#F67F00]"
              >
                <img src={logo} alt="Logo" />
              </Link>
            </div>
            <div className="w-full flex flex-col gap-12">
              <div className="w-full flex flex-wrap justify-between">
                <div className="flex flex-col md:gap-[25px]">
                  <div className="flex md:gap-[30px] md:text-2xl font-semibold">
                    <button
                      className="hover:text-[#F67F00]"
                      onClick={() => {
                        i18n.changeLanguage("en");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      English
                    </button>
                    <button
                      className="hover:text-[#F67F00]"
                      onClick={() => {
                        i18n.changeLanguage("ms");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      Malay
                    </button>

                    <div>
                      {" "}
                      <button
                        className="hover:text-[#F67F00]"
                        onClick={() => {
                          i18n.changeLanguage("zn");
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                      >
                        中文
                      </button>
                    </div>
                  </div>
                  <div
                    className="flex flex-col md:gap-4 md:text-xl"
                    style={{ fontFamily: "SF Pro Display M" }}
                  >
                    <div className="flex md:gap-9">
                      <div className="md:w-[207px]">
                        <Link
                          to="/products/parent"
                          className="hover:text-[#F67F00]"
                        >
                          {t("footer-parent")}
                        </Link>
                      </div>
                      <div>
                        <Link
                          to="/join-us/referral-program"
                          className="hover:text-[#F67F00]"
                        >
                          {t("referral-program")}
                        </Link>
                      </div>
                    </div>
                    <div className="flex md:gap-9">
                      <div className="md:w-[207px]">
                        <Link
                          to="/products/teacher"
                          className="hover:text-[#F67F00]"
                        >
                          {t("footer-teacher")}
                        </Link>
                      </div>
                      <div>
                        <Link
                          to="/join-us/career-opportunities"
                          className="hover:text-[#F67F00]"
                        >
                          {t("career-opportunity")}
                        </Link>
                      </div>
                    </div>
                    <div className="flex md:gap-9">
                      <div className="md:w-[207px]">
                        <Link
                          to="/products/admin"
                          className="hover:text-[#F67F00]"
                        >
                          {t("footer-admin")}
                        </Link>
                      </div>
                      <div>
                        <Link to="/download" className="hover:text-[#F67F00]">
                          {t("download")}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:gap-9">
                  <div className="flex flex-col md:gap-[15px]">
                    <div
                      className="md:text-2xl text-right"
                      style={{ fontFamily: "SF Pro Display Semibold" }}
                    >
                      {t("stay-connect")}
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
                  <div className="flex flex-col md:gap-[15px]">
                    <div
                      className="text-2xl text-right"
                      style={{ fontFamily: "SF Pro Display Semibold" }}
                    >
                      {t("discover-app")}
                    </div>
                    <div className="flex justify-end gap-3">
                      <img src={ios} alt="IOS" />
                      <img src={google} alt="Android" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col gap-4">
                <hr className="flex w-full border-[#000] mx-auto dark:border-black-900" />
                <div className="flex justify-between">
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

                  <div className="flex items-center gap-4">
                    <div>
                      <img src={ct} alt="CTLogo" />
                    </div>
                    <div
                      className="text-xs"
                      style={{ fontFamily: "SF Pro Display R" }}
                    >
                      Powered by Current Tech Industries
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*Mobile*/}
          <div className="w-full md:hidden flex flex-col gap-10 ">
            <div
              className="flex flex-col gap-5 text-xl"
              style={{ fontFamily: "SF Pro Display M" }}
            >
              <Link to="/products/parent" className="hover:text-[#F67F00]">
                {t("footer-parent")}
              </Link>
              <Link to="/products/teacher" className="hover:text-[#F67F00]">
                {t("footer-teacher")}
              </Link>
              <Link to="/products/admin" className="hover:text-[#F67F00]">
                {t("footer-admin")}
              </Link>
              <Link
                to="/join-us/referral-program"
                className="hover:text-[#F67F00]"
              >
                {t("referral-program")}
              </Link>
              <Link
                to="/join-us/career-opportunities"
                className="hover:text-[#F67F00]"
              >
                {t("career-opportunity")}
              </Link>
              <Link to="/download" className="hover:text-[#F67F00]">
                {t("download")}
              </Link>
            </div>
            <div className="flex flex-col gap-9">
              <div className="flex flex-wrap gap-[15px]">
                <div
                  className="text-2xl"
                  style={{ fontFamily: "SF Pro Display Semibold" }}
                >
                  {t("stay-connect")}
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
              <div className="flex flex-wrap">
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
          </div>
        </div>
        <div className="md:hidden flex gap-4 pb-[51px] pl-[31px] pr-8">
          <div>
            <img src={ct} alt="CTLogo" />
          </div>
          <div className="text-xs" style={{ fontFamily: "SF Pro Display R" }}>
            Powered by Current Tech Industries
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
