import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { GlobalIcon } from "./Icons/outline";
import { useTranslation } from "react-i18next";
import "../font.css";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import formIcon from "../assets/form.svg";
import triangle from "../assets/triangle.svg";
import i18n from "../i18n";
import About from "../components/modal/aboutmodal";
import Form from "../components/modal/formmodal";

const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [activeProductSubPage, setActiveProductSubPage] = useState("parent"); // Default active sub-page for Products section
  // const [activeJoinUsSubPage, setActiveJoinUsSubPage] =
  //   useState("referral-program");
  const [activeDownloadsSubPage, setActiveDownloadsSubpage] = useState("parent");
  const [showMenu, setShowMenu] = useState(false); // State to manage the visibility of the menu
  const [showLanguageModal, setShowLanguageModal] = useState(false); // State to manage visibility of mobile view language menu (as modal)
  const [showProduct, setProduct] = useState(false);
  // const [showJoin, setShowJoinUsSubmenu] = useState(false);
  const [showDownload, setShowDownloadSubpage] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [AboutOpen, setAboutOpen] = useState(false);
  const [FormOpen, setFormOpen] = useState(false);

  const toggleLanguageDropdown = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  const toggleProductDropdown = () => {
    setProduct((prev) => !prev); //Toggle dropdown for submenu Product for mobile view
  };
  // const toggleJoinUsDropdown = () => {
  //   setShowJoinUsSubmenu((prev) => !prev); 
  // };
  const toggleDownloadDropdown = () => {
    setShowDownloadSubpage((prev) => !prev);
  };
  const toggleLanguageModal = () => {
    setShowLanguageModal(!showLanguageModal);
  };
  const handleBackdropClick = () => {
    toggleLanguageModal();
  }

  //Close the menu whenever the location change and scroll to top-mobile view
  useEffect(() => {
    setShowMenu(false);
    window.scrollTo(0, 0);
  }, [location]);

  //Css for menu for web version
  const linkStyles = {
    base: "flex justify-center items-center text-[#000] border border-[#F67F00] rounded-[5px] py-0.5",
    home: "w-[66px]",
    products: "w-[90px]",
    joinUs: "w-[100px]",
    download: "w-[100px]",
  };


  //Css for menu for mobile version
  const linkStylesmobile = {
    active: "text-[#000] text-center text-base ",
    none: "text-[#BBB] text-center text-base",
    base: "flex justify-center items-center border border-[#F67F00] rounded-[5px] py-0.5 px-0.5",

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
      // } else if (location.pathname.includes("/join-us")) {
      //   setActiveJoinUsSubPage(getActiveJoinUsSubPage(location.pathname));
    } else if (location.pathname.includes("/download")) {
      setActiveDownloadsSubpage(getActiveDownloadSubPage(location.pathname));
    }
  }, [location.pathname]);

  // Handle click on Products link to set the default active sub-page
  const handleProductsClick = () => {
    setActiveProductSubPage("parent"); // Set the default active sub-page to Kindertown Parent
  };
  // Handle click on Join link to set the default active sub-page
  // const handleJoinUsClick = () => {
  //   setActiveJoinUsSubPage("referral-program"); // Set the default active sub-page to referral
  // };
  const handleDownloadClick = () => {
    setActiveDownloadsSubpage("parent");
  }

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

  const getActiveDownloadSubPage = (pathname) => {
    // Logic to determine active sub-page for Download section
    if (pathname.includes("/download/parent")) {
      return "parent";
    } else if (pathname.includes("/download/teacher")) {
      return "teacher";
    } else if (pathname.includes("/download/admin")) {
      return "admin";
    }
    // Default to "parent" if none matches
    return "parent";
  };

  // const getActiveJoinUsSubPage = (pathname) => {
  //   if (pathname.includes("/join-us/referral-program")) {
  //     return "referral-program";
  //   } else if (pathname.includes("/join-us/career-opportunities")) {
  //     return "career-opportunities";
  //   }
  //   return "referral-program";
  // };

  const handleCloseModal = () => {
    setShowMenu(false);
    setShowLanguageModal(false);
  };

  const handleModalClick = (e) => {
    e.stopPropagation(); // Stop propagation to prevent backdrop click from firing
  };
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full flex fixed flex-col top-0 z-[40] justify-center items-center">
      <div className="bg-[#fff7efe6] z-[40] w-full flex justify-center h-[60px] px-5 md:px-0">
        <div className="w-full md:w-[1000px] flex items-center justify-between">
          <div className="flex flex-col">
            <img src={logo} alt="Logo" />
          </div>
          {/* web/desktop*/}
          <div className="hidden md:flex items-center font-semibold gap-[20px]">
            <Link
              className={`hover:text-[#F67F00]`}
              onClick={() => setAboutOpen(true)}
            >
              {t("about-us")}
            </Link>
            <About
              AboutOpen={AboutOpen}
              setAboutOpen={setAboutOpen}
            />
            <Link
              to="/"
              className={`${location.pathname === "/"
                ? `${linkStyles.base} ${linkStyles.home}`
                : " hover:text-[#F67F00]"
                } `}
            >
              {t("home")}
            </Link>
            <Link
              to="/products/parent"
              className={`${location.pathname.includes("/products")
                ? `${linkStyles.base} ${linkStyles.products}`
                : " hover:text-[#F67F00]"
                } `}
              onClick={handleProductsClick}
            >
              {t("products")}
            </Link>
            <Link
              to="/join-us/referral-program"
              className={`${location.pathname.includes("/join-us")
                ? `${linkStyles.base} ${linkStyles.joinUs}`
                : " hover:text-[#F67F00]"
                } `}
            >
              {t("referral-program")}
            </Link>
            <Link
              to="/download/parent"
              className={`${location.pathname.includes("/download")
                ? `${linkStyles.base} ${linkStyles.download}`
                : " hover:text-[#F67F00]"
                } `}
              onClick={handleDownloadClick}
            >
              {t("download")}
            </Link>
            <div className="relative">
              <button onClick={toggleLanguageDropdown}>
                <div
                  className={`transition duration-300 ease-in-out transform md:w-[25px] md:h-[25px] ${isHovered ? "hover:scale-110 opacity-90" : ""
                    }`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <GlobalIcon />
                </div>
              </button>
              {isLanguageOpen && (
                <div className="absolute top-full right-[5px]">
                  <div className="absolute top-0 right-[10px]">
                    <img src={triangle} alt="" />
                  </div>
                  <div
                    className="py-2 flex flex-col mt-[6px] mr-[10px] px-5 gap-4 items-center md:text-base z-50 bg-[#F67F00] text-[#FFFFFF] shadow-md rounded-b-[10px] rounded-tl-[10px] "
                  >
                    <button
                      className=""
                      onClick={() => {
                        i18n.changeLanguage("en");
                        window.location.reload();
                      }}
                    >
                      English
                    </button>
                    <button
                      className=""
                      onClick={() => {
                        i18n.changeLanguage("ms");
                        window.location.reload();
                      }}
                    >
                      Malay
                    </button>
                    <button
                      className=""
                      onClick={() => {
                        i18n.changeLanguage("zh");
                        window.location.reload();
                      }}
                    >
                      中文
                    </button>
                  </div>
                </div>
              )}
            </div>
            <button onClick={() => {
              setFormOpen(true)
              setIsLanguageOpen(false)
            }}
              className="md:w-[30px] md:h-[30px]">
              <div
                className={`transition duration-300 ease-in-out transform ${isHovered ? "hover:scale-110 opacity-90" : ""
                  }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <img src={formIcon} alt="form" />
              </div>
            </button>
            <Form FormOpen={FormOpen} setFormOpen={setFormOpen} />
          </div>

          {/* mobile*/}
          <div className="flex md:hidden items-center">
            <div className="flex gap-[30px] items-center">
              <div className="relative">
                <button onClick={() => setShowLanguageModal(!showLanguageModal)}>
                  <GlobalIcon />
                </button>
                {showLanguageModal && (
                  <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-50 backdrop-blur-sm pt-[20px]"
                    onClick={handleBackdropClick}>
                    <div className="z-50 flex flex-row justify-center">
                      <div
                        className="w-[180px] py-[30px] flex flex-col gap-[30px] items-center text-[20px] font-semibold bg-[#FFFFFF] text-[#F67F00] rounded-[5px]  "
                        style={{ lineHeight: "normal" }}
                        onClick={handleModalClick}
                      >
                        <button
                          className="w-full"
                          onClick={() => {
                            i18n.changeLanguage("en");
                            window.location.reload();
                          }}
                        >
                          English
                        </button>
                        <button
                          className="w-full"
                          onClick={() => {
                            i18n.changeLanguage("ms");
                            window.location.reload();
                          }}
                        >
                          Malay
                        </button>
                        <button
                          className="w-full"
                          onClick={() => {
                            i18n.changeLanguage("zh");
                            window.location.reload();
                          }}
                        >
                          中文
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="w-[30px]">
                <button onClick={() => setShowMenu(!showMenu)}>
                  <img src={menu} alt="Menu" />
                </button>
              </div>
            </div>
          </div>
          <div className={`${showMenu ? "" : "hidden"}`}>
            <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-50 backdrop-blur-sm">
              <div
                className="h-full bg-[#E8E8E8] bg-opacity-75 backdrop-blur-sm flex items-center justify-center min-h-screen"
                onClick={() => {
                  handleCloseModal();
                  // setShowJoinUsSubmenu(false);
                  setProduct(false);
                  setShowDownloadSubpage(false);
                }}
              >
                <div
                  className="bg-white fixed border rounded-[5px] justify-center top-[40px] w-auto min-w-[274px] h-[225px] flex flex-col p-[30px]"
                  onClick={handleModalClick}
                >
                  <div className="h-[225px] flex gap-[30px]">
                    <div className="flex flex-col text-left gap-[20px] h-auto">
                      <div
                        className={`text-[14px] font-bold`}
                      >
                        <button
                          onClick={() => setAboutOpen(true)}
                        >
                          {t("about-us")}
                        </button>
                        <About AboutOpen={AboutOpen} setAboutOpen={setAboutOpen} />
                      </div>
                      <div
                        className="text-[14px] font-bold"
                      >
                        <Link
                          to="/"
                          className={`${location.pathname === ("/")
                            ? `${linkStylesmobile.base} ${linkStyles.active}`
                            : " "
                            } `}
                          onClick={() => {
                            // setShowJoinUsSubmenu(false);
                            setProduct(false);
                            setShowDownloadSubpage(false);
                          }}
                        >
                          {t("home")}
                        </Link>
                      </div>
                      <div
                        className={`text-[14px] font-bold`}
                      >
                        <button
                          className={`${location.pathname.includes("/products")
                            ? `${linkStylesmobile.base} ${linkStyles.active}`
                            : " "
                            } `}
                          onClick={() => {
                            toggleProductDropdown();
                            // setShowJoinUsSubmenu(false);
                            setShowDownloadSubpage(false);
                          }}
                        >
                          {t("products")}
                        </button>
                      </div>
                      <div
                        className="text-[14px] font-bold"
                      >
                        <Link
                          to="/join-us/referral-program"
                          className={`${location.pathname.includes("/join-us")
                            ? `${linkStylesmobile.base} ${linkStyles.active}`
                            : " "
                            } `}
                          onClick={() => {
                            // setShowJoinUsSubmenu(false);
                            setProduct(false);
                            setShowDownloadSubpage(false);
                          }}
                        >
                          {t("referral-program")}
                        </Link>
                      </div>
                      <div
                        className={`text-[14px] font-bold`}
                      >
                        <button
                        className={`${location.pathname.includes("/download")
                          ? `${linkStylesmobile.base} ${linkStyles.active}`
                          : " "
                          } `}
                          onClick={() => {
                            toggleDownloadDropdown();
                            // setShowJoinUsSubmenu(false);
                            setProduct(false);
                          }}
                        >
                          {t("download")}
                        </button>
                      </div>
                    </div>
                    {showProduct && (
                      <div className="flex gap-[30px]">
                        <div className="border-r border-[#F67F00] h-full"></div>
                        <div className="flex flex-col gap-5">
                          <div>
                            <Link
                              to="/products/parent"
                              className={`${activeProductSubPage === "parent"
                                ? `${linkStylesmobile.active}`
                                : `${linkStylesmobile.none}`
                                } text-sm`}

                            >
                              {t("KT-parent")}
                            </Link>
                          </div>
                          <div>
                            <Link
                              to="/products/teacher"
                              className={`${activeProductSubPage === "teacher"
                                ? `${linkStylesmobile.active}`
                                : `${linkStylesmobile.none}`
                                } text-sm`}
                            >
                              {t("footer-teacher")}
                            </Link>
                          </div>
                          <div>
                            <Link
                              to="/products/admin"
                              className={`${activeProductSubPage === "admin"
                                ? `${linkStylesmobile.active}`
                                : `${linkStylesmobile.none}`
                                } text-sm`}
                            >
                              {t("footer-admin")}
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* {showJoin && (
                      <div className="flex gap-4">
                        <div className="border-r border-[#F67F00] h-full"></div>
                        <div className="flex flex-col gap-5">
                          <div>
                            <Link
                              to="/join-us/referral-program"
                              className={`${location.pathname === "/join-us"
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
                              className={`${location.pathname === "/join-us"
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
                    )} */}

                    {showDownload && (
                      <div className="flex gap-[30px]">
                        <div className="border-r border-[#F67F00] h-full"></div>
                        <div className="flex flex-col h-[100px] gap-5">
                          <div>
                            <Link
                              to="/download/parent"
                              className={`${activeDownloadsSubPage === "parent"
                                ? `${linkStylesmobile.active}`
                                : `${linkStylesmobile.none}`
                                } text-sm `}
                            >
                              {t("navbar-parent")}
                            </Link>
                          </div>
                          <div>
                            <Link
                              to="/download/teacher"
                              className={`${activeDownloadsSubPage === "teacher"
                                ? `${linkStylesmobile.active}`
                                : `${linkStylesmobile.none}`
                                } text-sm `}
                            >
                              {t("navbar-teacher")}
                            </Link>
                          </div>
                          <div>
                            <Link
                              to="/download/admin"
                              className={`${activeDownloadsSubPage === "admin"
                                ? `${subLinkStyles.active}`
                                : `${subLinkStyles.none}`
                                } text-sm `}
                            >
                              {t("navbar-admin")}
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
        <div className="bg-[#ffffffe6] hidden w-full md:flex justify-center h-[60px]">
          <div className="max-w-[1000px] w-full flex items-end justify-end gap-[26px] h-[50px]">
            <div className="md:w-auto md:gap-[20px] md:pb-[10px] flex flex-row justify-between border-b border-[#DDD]">
              <Link
                to="/products/parent"
                className={`${activeProductSubPage === "parent"
                  ? `${subLinkStyles.active}`
                  : `${subLinkStyles.none} `
                  }`}
                onClick={() => setActiveProductSubPage("parent")}
              >
                {t("KT-parent")}
              </Link>
              <Link
                to="/products/teacher"
                className={`${activeProductSubPage === "teacher"
                  ? `${subLinkStyles.active}`
                  : `${subLinkStyles.none}`
                  }`}
                onClick={() => setActiveProductSubPage("teacher")}
              >
                {t("footer-teacher")}
              </Link>
              <Link
                to="/products/admin"
                className={`${activeProductSubPage === "admin"
                  ? `${subLinkStyles.active}`
                  : `${subLinkStyles.none}`
                  }`}
                onClick={() => setActiveProductSubPage("admin")}
              >
                {t("footer-admin")}
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* {location.pathname.includes("/join-us") && (
        <div className="w-full bg-[#ffffffe6] hidden md:flex justify-center h-[60px]">
          <div className="max-w-[1000px] w-full flex items-end justify-end gap-[26px] h-[50px]">
            <div className="md:w-auto md:gap-[20px] md:pb-[10px] flex flex-row justify-between border-b border-[#DDD]">
              <Link
                to="/join-us/referral-program"
                className={`${activeJoinUsSubPage === "referral-program"
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
                className={`${activeJoinUsSubPage === "career-opportunities"
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
        </div>
      )} */}

      {location.pathname.includes("/download") && (
        <div className="w-full bg-[#ffffffe6] hidden md:flex justify-center h-[60px]">
          <div className="max-w-[1000px] w-full flex items-end justify-end gap-[26px] h-[50px]">
            <div className="md:w-auto md:gap-[20px] md:pb-[10px] flex flex-row justify-between border-b border-[#DDD]">
              <Link
                to="/download/parent"
                className={`${activeDownloadsSubPage === "parent"
                  ? `${subLinkStyles.active}`
                  : `${subLinkStyles.none}`
                  }`}
                onClick={() => setActiveDownloadsSubpage("parent")}
              >
                {t("navbar-parent")}
              </Link>
              <Link
                to="/download/teacher"
                className={`${activeDownloadsSubPage === "teacher"
                  ? `${subLinkStyles.active}`
                  : `${subLinkStyles.none}`
                  }`}
                onClick={() => setActiveDownloadsSubpage("teacher")}
              >
                {t("navbar-teacher")}
              </Link>
              <Link
                to="/download/admin"
                className={`${activeDownloadsSubPage === "admin"
                  ? `${subLinkStyles.active}`
                  : `${subLinkStyles.none}`
                  }`}
                onClick={() => setActiveDownloadsSubpage("admin")}
              >
                {t("navbar-admin")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
