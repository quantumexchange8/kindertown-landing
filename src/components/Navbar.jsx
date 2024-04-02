import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { GlobalIcon } from "./Icons/outline";
import "../font.css";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
const Navbar = () => {
  const location = useLocation();
  const [activeProductSubPage, setActiveProductSubPage] = useState("parent"); // Default active sub-page for Products section
  const [activeJoinUsSubPage, setActiveJoinUsSubPage] =
    useState("referral-program"); // Default active sub-page for Products section
  const [showMenu, setShowMenu] = useState(false); // State to manage the visibility of the menu

  useEffect(() => {
    // Close the menu when the location changes
    setShowMenu(false);
  }, [location]);
  // Define common styles for the links
  const linkStyles = {
    base: "flex justify-center items-center text-[#FFF] bg-[#F67F00] rounded-[15px]",
    home: "w-[66px]",
    products: "w-[90px]",
    joinUs: "w-20",
    download: "w-[100px]",
  };

  const linkStylesmobile = {
    base: "flex px-2 text-[#FFF] bg-[#F67F00] rounded-[15px] items-center h-[28px]  text-[20px]",
    home: "w-[76px] items-center justify-center",
    products: "block w-[90px] items-center justify-center",
    joinUs: "block w-20 items-center justify-center",
    download: "block w-[100px] items-center justify-center",
  };

  const subLinkStyles = {
    active: "text-[#000] text-center text-[base]",
    none: "text-[#BBB] text-center text-base",
  };

  useEffect(() => {
    // Update active sub-page based on current location
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

  const handleJoinUsClick = () => {
    setActiveJoinUsSubPage("referral-program"); // Set the default active sub-page to Kindertown Parent
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

  return (
    <div className="flex flex-col fixed top-0 md:w-full z-40">
      <div className="bg-[#fff7efe6] w-full flex justify-center h-[50px] px-5 md:px-[220px]">
        <div className="w-full md:w-[1000px] flex items-center justify-between">
          <div className="hidden md:flex flex-col">
            <img src={logo} alt="Logo" />
          </div>
          {/* web/desktop*/}
          <div className="hidden md:flex items-center gap-[20px]">
            <Link
              to="/"
              className={`${
                location.pathname === "/"
                  ? `${linkStyles.base} ${linkStyles.home}`
                  : ""
              }`}
              style={{ fontFamily: "SF Pro Medium" }}
            >
              Home
            </Link>
            <Link
              to="/products/parent"
              className={`${
                location.pathname.includes("/products")
                  ? `${linkStyles.base} ${linkStyles.products}`
                  : ""
              }`}
              style={{ fontFamily: "SF Pro Medium" }}
              onClick={handleProductsClick}
            >
              Products
            </Link>
            <Link
              to="/join-us/referral-program"
              className={`${
                location.pathname.includes("/join-us")
                  ? `${linkStyles.base} ${linkStyles.joinUs}`
                  : ""
              }`}
              style={{ fontFamily: "SF Pro Medium" }}
              onClick={handleJoinUsClick}
            >
              Join Us
            </Link>
            <Link
              to="/download"
              className={`${
                location.pathname === "/download"
                  ? `${linkStyles.base} ${linkStyles.download}`
                  : ""
              }`}
              style={{ fontFamily: "SF Pro Medium" }}
            >
              Download
            </Link>
            <div>
              <GlobalIcon />
            </div>
          </div>
          {/* mobile*/}
          <div className="flex md:hidden items-center justify-between gap-[234px]">
            <div className="flex flex-col">
              <img src={logo} alt="Logo" />
            </div>
            <div className="flex gap-[30px] items-center">
              <div>
                <GlobalIcon />
              </div>
              <div>
                <button onClick={() => setShowMenu(!showMenu)}>
                  <img src={menu} alt="Menu" />
                </button>
              </div>
            </div>
          </div>
          {/*Mobile*/}
          <div className={`md:hidden ${showMenu ? "block" : "hidden"}`}>
            <div className="fixed inset-0 z-50">
              <div className="bg-[#E8E8E8] bg-opacity-75 backdrop-blur-sm flex items-center justify-center min-h-screen">
                <div className="bg-white w-full flex flex-col pb-[100px] gap-3 h-[212px] py-[30px] px-5 text-left">
                  <div className="text-[20px]">
                    <Link
                      to="/"
                      className={`${
                        location.pathname === "/"
                          ? `${linkStylesmobile.base} ${linkStylesmobile.home}`
                          : ""
                      }`}
                      style={{ fontFamily: "SF Pro Display M" }}
                    >
                      Home
                    </Link>
                  </div>
                  <div className="text-[20px]">
                    {/* Products link */}
                    <Link
                      to="/products/parent"
                      className={`${
                        location.pathname.includes("/products")
                          ? `${linkStylesmobile.base} ${linkStylesmobile.products}`
                          : ""
                      }`}
                      style={{ fontFamily: "SF Pro Display M" }}
                      onClick={handleProductsClick} // Add onClick handler
                    >
                      Products
                    </Link>
                  </div>
                  <div className="text-[20px]">
                    {/* Join Us link */}
                    <Link
                      to="/join-us/referral-program"
                      className={`${
                        location.pathname.includes("/join-us")
                          ? `${linkStylesmobile.base} ${linkStylesmobile.joinUs}`
                          : ""
                      }`}
                      style={{ fontFamily: "SF Pro Display M" }}
                      onClick={handleJoinUsClick} // Add onClick handler
                    >
                      Join Us
                    </Link>
                  </div>
                  <div className="text-[20px]">
                    {/* Download link */}
                    <Link
                      to="/download"
                      className={`${
                        location.pathname === "/download"
                          ? `${linkStylesmobile.base} ${linkStylesmobile.download}`
                          : ""
                      }`}
                      style={{ fontFamily: "SF Pro Display M" }}
                    >
                      Download
                    </Link>
                    {/* Global icon */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {location.pathname.includes("/products") && (
        <div className="bg-[#ffffffe6] w-full flex justify-center h-[50px]">
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
        <div className="w-full bg-[#ffffffe6] flex justify-center h-[50px]">
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
              Referral Program
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
              Career Opportunities
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
