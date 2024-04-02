import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { GlobalIcon } from "./Icons/outline";
import "../font.css";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
const Navbar = () => {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false); // State to manage the visibility of the menu

  useEffect(() => {
    // Close the menu when the location changes
    setShowMenu(false);
  }, [location]);

  const [activeProductSubPage, setActiveProductSubPage] = useState("parent"); // Default active sub-page for Products section
  const [activeJoinUsSubPage, setActiveJoinUsSubPage] =
    useState("referral-program"); // Default active sub-page for Join Us section

  // Define common styles for the links
  const linkStyles = {
    base: "flex justify-center items-center text-[#FFF] bg-[#F67F00] rounded-[15px]",
    home: "w-[66px]",
    products: "w-[90px]",
    joinUs: "w-20",
    download: "w-[100px]",
  };
  const linkStylesmobile = {
    base: "block py-2 px-4 text-[#FFF] bg-[#F67F00] rounded-[15px]",
    home: "block w-[66px]",
    products: "block w-[90px]",
    joinUs: "block w-20",
    download: "block w-[100px]",
  };

  const subLinkStyles = {
    active: "text-[#000] text-center text-base",
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
    <div className="fixed flex flex-col top-0 w-full z-10">
      {/* Navbar container */}

      <div className="bg-[#fff7efe6] w-full flex justify-center h-[50px] px-5 md:px-[220px] fixed z-50">
        <div className="md:w-full md:max-w-[1000px] w-full flex items-center justify-between ">
          {/* Navbar content */}
          <div>
            <img src={logo} alt="Logo" />
          </div>
          <div className="md:hidden flex items-center gap-[30px]">
            <div className="flex flex-col">
              <GlobalIcon />
            </div>
            <div className="flex flex-col">
              <button onClick={() => setShowMenu(!showMenu)}>
                <img src={menu} alt="Menu" />
              </button>
            </div>
          </div>
          {/*Web/Desktop*/}
          <div className="hidden md:flex items-center gap-[20px]">
            {/* Home link */}
            <Link
              to="/"
              className={`${
                location.pathname === "/"
                  ? `${linkStyles.base} ${linkStyles.home}`
                  : ""
              }`}
              style={{ fontFamily: "SF Pro Display M" }}
            >
              Home
            </Link>
            {/* Products link */}
            <Link
              to="/products/parent"
              className={`${
                location.pathname.includes("/products")
                  ? `${linkStyles.base} ${linkStyles.products}`
                  : ""
              }`}
              style={{ fontFamily: "SF Pro Display M" }}
              onClick={handleProductsClick} // Add onClick handler
            >
              Products
            </Link>
            {/* Join Us link */}
            <Link
              to="/join-us/referral-program"
              className={`${
                location.pathname.includes("/join-us")
                  ? `${linkStyles.base} ${linkStyles.joinUs}`
                  : ""
              }`}
              style={{ fontFamily: "SF Pro Display M" }}
              onClick={handleJoinUsClick} // Add onClick handler
            >
              Join Us
            </Link>
            {/* Download link */}
            <Link
              to="/download"
              className={`${
                location.pathname === "/download"
                  ? `${linkStyles.base} ${linkStyles.download}`
                  : ""
              }`}
              style={{ fontFamily: "SF Pro Display M" }}
            >
              Download
            </Link>
            {/* Global icon */}
            <div>
              <GlobalIcon />
            </div>
          </div>
          {/*Mobile*/}
          <div className={`md:hidden ${showMenu ? "block" : "hidden"}`}>
            <div className="fixed inset-0 z-50">
              <div className="bg-[#E8E8E8] bg-opacity-75 backdrop-blur-sm flex items-center justify-center min-h-screen">
                <div className="bg-white w-full flex flex-col pb-[100px]">
                  <div>
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
                  <div>
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
                  <div>
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
                  <div>
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

        {/* Sub-navigation content for products */}
        {location.pathname.includes("/products") && (
          <div className="bg-[#ffffffe6] w-full flex justify-center h-[50px]">
            <div className="max-w-[1000px] w-full flex items-end justify-end gap-[26px] border-b border-[#DDD]">
              {/* Sub-navigation links for products */}
              <Link
                to="/products/parent"
                id="parent-link"
                className={`${
                  activeProductSubPage === "parent"
                    ? `${subLinkStyles.active}`
                    : `${subLinkStyles.none}`
                }`}
                style={{ fontFamily: "SF Pro Display M" }}
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
                style={{ fontFamily: "SF Pro Display M" }}
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
                style={{ fontFamily: "SF Pro Display M" }}
                onClick={() => setActiveProductSubPage("admin")}
              >
                Kindertown Admin
              </Link>
            </div>
          </div>
        )}

        {/* Sub-navigation content for join-us */}
        {location.pathname.includes("/join-us") && (
          <div className="w-full bg-[#ffffffe6] flex justify-center h-[50px]">
            <div className="max-w-[1000px] w-full flex items-end justify-end gap-[26px] border-b border-[#DDD]">
              {/* Sub-navigation links for join-us */}
              <Link
                to="/join-us/referral-program"
                className={`${
                  activeJoinUsSubPage === "referral-program"
                    ? `${subLinkStyles.active}`
                    : `${subLinkStyles.none}`
                }`}
                style={{ fontFamily: "SF Pro Display M" }}
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
                style={{ fontFamily: "SF Pro Display M" }}
                onClick={() => setActiveJoinUsSubPage("career-opportunities")}
              >
                Career Opportunities
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
