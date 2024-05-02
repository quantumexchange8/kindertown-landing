import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { GlobalIcon } from "./Icons/outline";
import { useTranslation } from "react-i18next";
import "../font.css";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import i18n from "../i18n";
const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [activeProductSubPage, setActiveProductSubPage] = useState("parent"); // Default active sub-page for Products section
  const [activeJoinUsSubPage, setActiveJoinUsSubPage] =
    useState("referral-program"); // Default active sub-page for Products section
  const [showMenu, setShowMenu] = useState(false); // State to manage the visibility of the menu
  const [showProduct, setProduct] = useState(false);
  const [showJoin, setShowJoinUsSubmenu] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const toggleLanguageDropdown = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  const toggleProductDropdown = () => {
    setProduct((prev) => !prev); //Toggle dropdown for submenu Product for mobile view
  };
  const toggleJoinUsDropdown = () => {
    setShowJoinUsSubmenu((prev) => !prev); //Toggle dropdown for submenu Join Us for mobile view
  };

  //Close the menu whenever the location change and scroll to top-mobile view
  useEffect(() => {
    setShowMenu(false);
    window.scrollTo(0, 0);
  }, [location]);

  //Css for menu for web version
  const linkStyles = {
    base: "flex justify-center items-center text-[#FFF] bg-[#F67F00] rounded-[15px]",
    home: "w-[66px]",
    products: "w-[90px]",
    joinUs: "w-[100px]",
    download: "w-[100px]",
  };

  //Css for menu for mobile version
  const linkStylesmobile = {
    base: " text-[#FFF] bg-[#F67F00] rounded-[15px]",

    /*   base: "flex justify-center items-center text-[#FFF] bg-[#F67F00] rounded-[15px]",
    home: "w-[76px]",
    products: "w-[107px]",
    joinUs: "w-[105px]",
    download: "w-[116px]", */
  };

  //Css for submenu for web version
  const subLinkStyles = {
    active: "text-[#000] text-center text-base",
    none: "text-[#BBB] text-center text-base",
  };

  // Update active sub-page based on current location
  useEffect(() => {
    if (location.pathname.includes("/products")) {
      setActiveProductSubPage(getActiveProductSubPage(location.pathname));
    } else if (location.pathname.includes("/join-us")) {
      setActiveJoinUsSubPage(getActiveJoinUsSubPage(location.pathname));
    }
  }, [location.pathname]);

  // Handle click on Products link to set the default active sub-page
  const handleProductsClick = () => {
    setActiveProductSubPage("parent"); // Set the default active sub-page to Kindertown Parent
  };
  // Handle click on Join link to set the default active sub-page
  const handleJoinUsClick = () => {
    setActiveJoinUsSubPage("referral-program"); // Set the default active sub-page to referral
  };

  const getActiveProductSubPage = (pathname) => {
    // Logic to determine active sub-page for Products section
    if (pathname.includes("/products/parent")) {
      return "parent";
    } else if (pathname.includes("/products/teacher")) {
      return "teacher";
    } else if (pathname.includes("/products/admin")) {
      return "admin";
    }
    // Default to "parent" if none matches
    return "parent";
  };

  const getActiveJoinUsSubPage = (pathname) => {
    // Logic to determine active sub-page for Join Us section
    if (pathname.includes("/join-us/referral-program")) {
      return "referral-program";
    } else if (pathname.includes("/join-us/career-opportunities")) {
      return "career-opportunities";
    }
    // Default to "referral-program" if none matches
    return "referral-program";
  };

  const handleCloseModal = () => {
    setShowMenu(false);
  };

  const handleModalClick = (e) => {
    e.stopPropagation(); // Stop propagation to prevent backdrop click from firing
  };
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="w-full flex flex-col fixed top-0  z-40 justify-center items-center">
      <div className="bg-[#fff7efe6] w-full flex justify-center h-[50px] px-5 md:px-0">
        <div className="w-full md:w-[1000px] flex items-center justify-between">
          <div className="flex flex-col">
            <img src={logo} alt="Logo" />
          </div>
          {/* web/desktop*/}
          <div className="hidden md:flex items-center gap-[20px]">
            <Link
              to="/"
              className={`${
                location.pathname === "/"
                  ? `${linkStyles.base} ${linkStyles.home}`
                  : " hover:text-[#F67F00]"
              } `}
              style={{ fontFamily: "SF Pro Display M" }}
            >
              {t("home")}
            </Link>
            <Link
              to="/products/parent"
              className={`${
                location.pathname.includes("/products")
                  ? `${linkStyles.base} ${linkStyles.products}`
                  : " hover:text-[#F67F00]"
              } `}
              style={{ fontFamily: "SF Pro Display M" }}
              onClick={handleProductsClick}
            >
              {t("products")}
            </Link>
            <Link
              to="/join-us/referral-program"
              className={`${
                location.pathname.includes("/join-us")
                  ? `${linkStyles.base} ${linkStyles.joinUs}`
                  : " hover:text-[#F67F00]"
              } `}
              style={{ fontFamily: "SF Pro Display M" }}
              onClick={handleJoinUsClick}
            >
              {t("join-us")}
            </Link>
            <Link
              to="/download"
              className={`${
                location.pathname === "/download"
                  ? `${linkStyles.base} ${linkStyles.download}`
                  : " hover:text-[#F67F00]"
              } `}
              style={{ fontFamily: "SF Pro Display M" }}
            >
              {t("download")}
            </Link>
            <div className="relative">
              <button onClick={toggleLanguageDropdown}>
                <div
                  className={`transition duration-300 ease-in-out transform ${
                    isHovered ? "hover:scale-110 opacity-90" : ""
                  }`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <GlobalIcon />
                </div>
              </button>
              {isLanguageOpen && (
                <div className="absolute top-full right-[5px] z-50 bg-[#fff7efe6] shadow-md">
                  <div
                    className="py-2 flex flex-col px-5 gap-4 items-start md:text-base"
                    style={{ fontFamily: "SF Pro Display R" }}
                  >
                    <button
                      className="hover:text-[#F67F00]"
                      onClick={() => {
                        i18n.changeLanguage("en");
                        window.location.reload();
                      }}
                    >
                      English
                    </button>
                    <button
                      className="hover:text-[#F67F00]"
                      onClick={() => {
                        i18n.changeLanguage("ms");
                        window.location.reload();
                      }}
                    >
                      Malay
                    </button>
                    <button className="hover:text-[#F67F00]">中文</button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* mobile*/}
          <div className="flex md:hidden items-center">
            <div className="flex gap-[30px] items-center">
              <div className="relative">
                <button onClick={toggleLanguageDropdown}>
                  <GlobalIcon />
                </button>
                {isLanguageOpen && (
                  <div className="absolute top-full right-[5px] z-50 bg-[#fff7ef] shadow-md">
                    <div
                      className="py-2 flex flex-col px-5 gap-4 items-start md:text-base"
                      style={{ fontFamily: "SF Pro Display R" }}
                    >
                      <button
                        className="hover:text-[#F67F00]"
                        onClick={() => {
                          i18n.changeLanguage("en");
                          window.location.reload();
                        }}
                      >
                        English
                      </button>
                      <button
                        className="hover:text-[#F67F00]"
                        onClick={() => {
                          i18n.changeLanguage("ms");
                          window.location.reload();
                        }}
                      >
                        Malay
                      </button>
                      <button className="hover:text-[#F67F00]">中文</button>
                    </div>
                  </div>
                )}
              </div>
              <div className="w-[26px]">
                <button onClick={() => setShowMenu(!showMenu)}>
                  <img src={menu} alt="Menu" />
                </button>
              </div>
            </div>
          </div>
          <div className={`md:hidden ${showMenu ? "block" : "hidden"}`}>
            <div className="fixed inset-0 z-50">
              <div
                className="bg-[#E8E8E8] bg-opacity-75 backdrop-blur-sm flex items-center justify-center min-h-screen"
                onClick={() => {
                  handleCloseModal();
                  setShowJoinUsSubmenu(false);
                  setProduct(false);
                }}
              >
                <div
                  className="bg-white fixed justify-center top-[40px] w-full flex flex-col  h-[212px] py-[30px] px-5"
                  onClick={handleModalClick}
                >
                  <div className="h-full flex gap-[50px]">
                    <div className="w-[114px] flex flex-col justify-between text-left">
                      <div className="text-[20px]">
                        <Link
                          to="/"
                          className={`${
                            location.pathname === "/"
                              ? ` ${linkStylesmobile.base}`
                              : ""
                          } px-2`}
                          style={{ fontFamily: "SF Pro Display M" }}
                          onClick={() => {
                            setShowJoinUsSubmenu(false);
                            setProduct(false);
                          }}
                        >
                          {t("home")}
                        </Link>
                      </div>
                      <div className="text-[20px]">
                        <button
                          className={`${
                            location.pathname.includes("/products")
                              ? ` ${linkStylesmobile.base}`
                              : ""
                          } px-2 `}
                          style={{ fontFamily: "SF Pro Display M" }}
                          onClick={() => {
                            toggleProductDropdown();

                            setShowJoinUsSubmenu(false);
                          }}
                        >
                          {t("products")}
                        </button>
                      </div>
                      <div className="text-[20px]">
                        <button
                          className={`${
                            location.pathname.includes("/join-us")
                              ? ` ${linkStylesmobile.base}`
                              : ""
                          } px-2 `}
                          style={{ fontFamily: "SF Pro Display M" }}
                          onClick={() => {
                            toggleJoinUsDropdown();
                            setProduct(false);
                          }}
                        >
                          {t("join-us")}
                        </button>
                      </div>
                      <div className="text-[20px]">
                        <Link
                          to="/download"
                          className={`${
                            location.pathname === "/download"
                              ? ` ${linkStylesmobile.base}`
                              : ""
                          } px-2 `}
                          style={{ fontFamily: "SF Pro Display M" }}
                          onClick={() => {
                            setProduct(false);

                            setShowJoinUsSubmenu(false);
                          }}
                        >
                          {t("download")}
                        </Link>
                      </div>
                    </div>
                    {showProduct && (
                      <div className="flex gap-4">
                        <div className="border-r border-gray-300 h-full"></div>
                        <div className="flex flex-col gap-5">
                          <div>
                            <Link
                              to="/products/parent"
                              className={`${
                                location.pathname === "/products"
                                  ? `${linkStylesmobile.base}`
                                  : ""
                              }`}
                              style={{ fontFamily: "SF Pro Display M" }}
                            >
                              Kindertown Parent
                            </Link>
                          </div>
                          <div>
                            <Link
                              to="/products/teacher"
                              className={`${
                                location.pathname === "/products"
                                  ? `${linkStylesmobile.base}`
                                  : ""
                              }`}
                              style={{ fontFamily: "SF Pro Display M" }}
                            >
                              Kindertown Teacher
                            </Link>
                          </div>
                          <div>
                            <Link
                              to="/products/admin"
                              className={`${
                                location.pathname === "/products"
                                  ? `${linkStylesmobile.base}`
                                  : ""
                              }`}
                              style={{ fontFamily: "SF Pro Display M" }}
                            >
                              Kindertown Admin
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}

                    {showJoin && (
                      <div className="flex gap-4">
                        <div className="border-r border-gray-300 h-full"></div>
                        <div className="flex flex-col h-[100px] gap-5">
                          <div>
                            <Link
                              to="/join-us/referral-program"
                              className={`${
                                location.pathname === "/join-us"
                                  ? `${linkStylesmobile.base}`
                                  : ""
                              }`}
                              style={{ fontFamily: "SF Pro Display M" }}
                            >
                              {t("referral-program")}
                            </Link>
                          </div>
                          <div>
                            <Link
                              to="/join-us/career-opportunities"
                              className={`${
                                location.pathname === "/join-us"
                                  ? `${linkStylesmobile.base}`
                                  : ""
                              }`}
                              style={{ fontFamily: "SF Pro Display M" }}
                            >
                              {t("career-opportunity")}
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* web/desktop*/}

      {location.pathname.includes("/products") && (
        <div className="bg-[#ffffffe6] hidden w-full md:flex justify-center h-[50px]">
          <div className="max-w-[1000px] w-full flex items-end justify-end gap-[26px] border-b border-[#DDD]">
            <Link
              to="/products/parent"
              className={`${
                activeProductSubPage === "parent"
                  ? `${subLinkStyles.active}`
                  : `${subLinkStyles.none}`
              }`}
              style={{ fontFamily: "SF Pro Medium" }}
              onClick={() => setActiveProductSubPage("parent")}
            >
              Kindertown Parent
            </Link>
            <Link
              to="/products/teacher"
              className={`${
                activeProductSubPage === "teacher"
                  ? `${subLinkStyles.active}`
                  : `${subLinkStyles.none}`
              }`}
              style={{ fontFamily: "SF Pro Medium" }}
              onClick={() => setActiveProductSubPage("teacher")}
            >
              Kindertown Teacher
            </Link>
            <Link
              to="/products/admin"
              className={`${
                activeProductSubPage === "admin"
                  ? `${subLinkStyles.active}`
                  : `${subLinkStyles.none}`
              }`}
              style={{ fontFamily: "SF Pro Medium" }}
              onClick={() => setActiveProductSubPage("admin")}
            >
              Kindertown Admin
            </Link>
          </div>
        </div>
      )}

      {location.pathname.includes("/join-us") && (
        <div className="w-full bg-[#ffffffe6] hidden md:flex justify-center h-[50px]">
          <div className="max-w-[1000px] w-full flex items-end justify-end gap-[26px] border-b border-[#DDD]">
            <Link
              to="/join-us/referral-program"
              className={`${
                activeJoinUsSubPage === "referral-program"
                  ? `${subLinkStyles.active}`
                  : `${subLinkStyles.none}`
              }`}
              style={{ fontFamily: "SF Pro Medium" }}
              onClick={() => setActiveJoinUsSubPage("referral-program")}
            >
              {t("referral-program")}
            </Link>
            <Link
              to="/join-us/career-opportunities"
              className={`${
                activeJoinUsSubPage === "career-opportunities"
                  ? `${subLinkStyles.active}`
                  : `${subLinkStyles.none}`
              }`}
              style={{ fontFamily: "SF Pro Medium" }}
              onClick={() => setActiveJoinUsSubPage("career-opportunities")}
            >
              {t("career-opportunity")}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
