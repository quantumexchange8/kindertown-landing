import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GlobalIcon } from "./Icons/outline";
import "../font.css";

const Navbar = () => {
  const location = useLocation();
  const [activeProductSubPage, setActiveProductSubPage] = useState("parent"); // Default active sub-page for Products section
  const [activeJoinUsSubPage, setActiveJoinUsSubPage] =
    useState("referral-program"); // Default active sub-page for Products section

  // Define common styles for the links
  const linkStyles = {
    base: "flex justify-center items-center text-[#FFF] bg-[#F67F00] rounded-[15px]",
    home: "w-[66px]",
    products: "w-[90px]",
    joinUs: "w-20",
    download: "w-[100px]",
  };

  const subLinkStyles = {
    active: "text-[#000] text-center text-base",
    none: "text-[#BBB] text-center text-base",
  };

  // Handle click on Products link to set the default active sub-page
  const handleProductsClick = () => {
    setActiveProductSubPage("parent"); // Set the default active sub-page to Kindertown Parent
  };

  const handleJoinUsClick = () => {
    setActiveJoinUsSubPage("referral-program"); // Set the default active sub-page to Kindertown Parent
  };

  // Handle click on Products sub-page links
  const handleProductSubPage = (subPage) => {
    setActiveProductSubPage(subPage);
  };

  const handleJoinUsSubPage = (subPage) => {
    setActiveJoinUsSubPage(subPage);
  };

  return (
    <div className="flex flex-col fixed top-0 w-full z-40">
      <div className="bg-[#fff7efe6] w-full flex justify-center h-[50px]">
        <div className="max-w-[1000px] w-full flex items-center justify-between">
          <div>
            <img src="image/logo/logo.svg" alt="" />
          </div>
          <div className="flex items-center gap-[20px]">
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
              onClick={() => handleProductSubPage("parent")}
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
              onClick={() => handleProductSubPage("teacher")}
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
              onClick={() => handleProductSubPage("admin")}
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
              onClick={() => handleJoinUsSubPage("referral-program")}
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
              onClick={() => handleJoinUsSubPage("career-opportunities")}
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
