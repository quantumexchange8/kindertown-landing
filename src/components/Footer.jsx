import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faTelegram,
  faFacebookMessenger,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#FFF7EF] mt-20 py-6">
      <div className="container container mx-auto py-4">
        <div className="flex flex-row items-center justify-start ">
          <div className="w-1/4 h-12">
            <img
              className="h-[90px] w-[80px] mr-4"
              src="image/logo/logo.svg"
              alt="Logo"
            />
          </div>
        </div>
        <div className="flex flex-row mt-16">
          <div className="w-24 h-12 mr-4">
            <h2 className="font-bold text-2xl">English</h2>
          </div>
          <div className="w-24 h-12 mr-4">
            <h2 className="font-bold text-2xl">Malay</h2>
          </div>
          <div className="w-24 h-12 mr-4">
            <h2 className="font-bold text-2xl">中文</h2>
          </div>
          <div className="flex-grow"></div>{" "}
          {/* This will push item 3 to the right */}
          <div className="w-60 h-12">
            <h2 className="font-bold text-2xl">Stay connect with us:</h2>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="h-12 mr-[4.5rem]">
            <h2 className="font-semibold text-xl">Kindertown Parents</h2>
          </div>
          <div className="h-12 mr-4">
            <h2 className="font-semibold text-xl">Referral Program</h2>
          </div>
          <div className="flex-grow"></div>{" "}
          <div className="flex justify-evenly lg:justify-end items-center space-x-2 mt-[-3.5rem]">
            <a href="#" className="bg-black rounded-full pt-1 px-1">
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="text-white w-5 h-5"
              />
            </a>
            <a href="#" className="bg-black rounded-full pt-1 px-1">
              <FontAwesomeIcon
                icon={faTelegram}
                className="text-white w-5 h-5"
              />
            </a>
            <a href="#" className="bg-black rounded-full pt-1 px-1">
              <FontAwesomeIcon
                icon={faFacebookMessenger}
                className="text-white w-5 h-5"
              />
            </a>
            <a href="#" className="bg-black rounded-full pt-1 px-1">
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-white w-5 h-5"
              />
            </a>
            <a href="#" className="bg-black rounded-full pt-1 px-1">
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-white w-5 h-5"
              />
            </a>
            <a href="#" className="bg-black rounded-full pt-1 px-1">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-white w-5 h-5"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="h-12 mr-[4.5rem]">
            <h2 className="font-semibold text-xl">Kindertown Teacher</h2>
          </div>
          <div className="h-12 mr-4">
            <h2 className="font-semibold text-xl">Career Opportunities</h2>
          </div>
          <div className="flex-grow"></div>
          <div className="h-12">
            <h2 className="font-bold text-2xl">Discover our applications:</h2>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="h-12 mr-20">
            <h2 className="font-semibold text-xl">Kindertown Admin</h2>
          </div>
          <div className="h-12 mr-4">
            <h2 className="font-semibold text-xl">Download</h2>
          </div>
          <div className="flex-grow"></div>

          <div className="flex justify-evenly lg:justify-end items-center space-x-2">
            <div className="flex-col">
              <img src="image/logo/appstore.png" className="w-32 h-auto"></img>
            </div>
            <div className="flex-col">
              <img
                src="image/logo/googlestore.png"
                className="w-32 h-auto"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
