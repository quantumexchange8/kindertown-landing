import React, { useState } from "react";
import i18n from "../i18n";
import { Link } from "react-router-dom";
import google from "../assets/footer/android.svg";
import scmd from "../assets/footer/social-media.svg";
import ios from "../assets/footer/apple.svg";
import ct from "../assets/footer/ct.svg";
import Privacy from "../components/modal/privacymodal";
import Terms from "../components/modal/termsmodal";
import About from "../components/modal/aboutmodal";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [PrivacyOpen, setPrivacyOpen] = useState(false);
  const [TermsOpen, setTermsOpen] = useState(false);
  const [AboutOpen, setAboutOpen] = useState(false);

  const { t } = useTranslation();
  return (
    <footer>
      <div className="flex flex-col gap-[11px] md:gap-0">
        <div className="w-full bg-[#FFF7EF] flex flex-col justify-center items-center md:pt-24  md:pb-[85px] pb-[30px] pt-7 md:px-0 pl-[31px] pr-8">
          {/*Desktop*/}
          <div className="w-full md:max-w-[1000px] hidden md:flex flex-col md:gap-9">
            <div className="w-full flex flex-col gap-12">
              <div className="w-full flex flex-wrap justify-between">
                <div className="flex flex-col md:gap-[25px]">
                  <div className="flex md:gap-[30px] md:text-2xl font-bold">
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
                          i18n.changeLanguage("zh");
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                      >
                        中文
                      </button>
                    </div>
                  </div>
                  <div
                    className="flex flex-col md:gap-4 md:text-xl font-medium"
                  >
                    <div className="flex md:gap-9" >
                      <div className="md:w-[207px]">
                        <Link
                          onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            setAboutOpen(true);
                          }}
                          className="hover:text-[#F67F00]"
                        >
                          {t("about-us")}
                        </Link>
                        <About
                          AboutOpen={AboutOpen}
                          setAboutOpen={setAboutOpen}
                        />
                      </div>
                      <div>
                        <Link
                          to="/products/parent"
                          className="hover:text-[#F67F00]"
                        >
                          {t("footer-parent")}
                        </Link>
                      </div>
                    </div>
                    <div className="flex md:gap-9">
                      <div className="md:w-[207px]">
                        <Link
                          to="/"
                          className="hover:text-[#F67F00]"
                        >
                          {t("home")}
                        </Link>
                      </div>
                      <div>
                        <Link
                          to="/products/teacher"
                          className="hover:text-[#F67F00]"
                        >
                          {t("footer-teacher")}
                        </Link>
                      </div>
                    </div>
                    <div className="flex md:gap-9">
                      <div className="md:w-[207px]">
                        <Link
                          to="/join-us/referral-program"
                          className="hover:text-[#F67F00]"
                        >
                          {t("footer-referral")}
                        </Link>
                      </div>
                      <div>
                        <Link to="/products/admin" className="hover:text-[#F67F00]">
                          {t("footer-admin")}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:gap-9">
                  <div className="flex flex-col md:gap-[15px]">
                    <div
                      className={`md:text-2xl text-right font-bold`}
                    >
                      {t("stay-connect")}
                    </div>
                    <div className="flex justify-end">
                      <div className="flex flex-col">
                        <div className="flex justify-end">
                          <div className="flex flex-col">
                            <img
                              src={scmd}
                              alt="Social Media"
                              className="h-[30px]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:gap-[15px]">
                    <div
                      className={`text-2xl text-right font-bold`}
                    >
                      {t("discover-app")}
                    </div>
                    <div className="flex justify-end gap-3 ">
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
                    >
                      Powered by Current Tech Industries
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*Mobile*/}
          <div className="w-full md:hidden flex flex-col gap-[50px]">
            <div
              className="flex flex-col gap-5 text-xl font-medium"
            >
              <Link
                onClick={() => setAboutOpen(true)}
                className="hover:text-[#F67F00]"
              >
                {t("about-us")}
              </Link>
              <About
                AboutOpen={AboutOpen}
                setAboutOpen={setAboutOpen}
              />
              <Link to="/" className="hover:text-[#F67F00]">
                {t("home")}
              </Link>
              <Link to="/join-us/referral-program" className="hover:text-[#F67F00]">
                {t("footer-referral")}
              </Link>
              <Link
                to="/products/parent"
                className="hover:text-[#F67F00]"
              >
                {t("footer-parent")}
              </Link>
              <Link
                to="/products/teacher"
                className="hover:text-[#F67F00]"
              >
                {t("footer-teacher")}
              </Link>
              <Link to="/products/admin" className="hover:text-[#F67F00]">
                {t("footer-admin")}
              </Link>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col flex-wrap gap-[20px]">
                <div
                  className="text-xl font-semibold"
                >
                  {t("stay-connect")}
                </div>
                <div className="flex">
                  <div className="flex flex-col">
                    <img
                      src={scmd}
                      alt="Social Media"
                      className="h-[30px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:gap-[15px] gap-[20px]">
              <div
                className={`text-xl font-semibold`}
              >
                {t("discover-app")}
              </div>
              <div className="flex flex-col gap-3 md:hidden w-[172px]">
                <img src={ios} alt="IOS" />
                <img src={google} alt="Android" />
              </div>
            </div>
            <div className="flex flex-wrap md:hidden">
              <div
                className="text-xs text-[#565656] tracking-wide"
                style={{ lineHeight: "25px", }}
              >
                <div className="flex flex-row gap-6">
                <div>© </div><div>2006 Current Tech Industries Sdn Bhd.</div></div>
                <div className="flex gap-6">
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
        <div className="md:hidden flex gap-4 pb-7 pl-[31px] pr-8">
          <div>
            <img src={ct} alt="CTLogo" />
          </div>
          <div className="text-xs">
            Powered by Current Tech Industries
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
