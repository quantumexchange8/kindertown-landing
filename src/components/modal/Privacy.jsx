import React from "react";

import logo from "../../assets/termspolicy/Icon.svg";
import handshake from "../../assets/termspolicy/handshake.svg";
import close from "../../assets/parentmodal/close.svg";
import { faDisplay } from "@fortawesome/free-solid-svg-icons";
function Privacy({ isOpen, onClose }) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-800 bg-opacity-75 backdrop-blur-sm py-12">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white md:w-[900px] rounded-[50px] overflow-hidden px-[100px] pt-20 pb-[100px]">
          <div className="flex flex-col gap-[200px]">
            <div className="flex flex-col w-[74px] h-[50px]">
              <img src={logo} alt="Logo" />
            </div>
            <div className="w-[700px] flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <div
                  className="text-5xl"
                  style={{ fontFamily: "SF Pro Display B" }}
                >
                  Kindertown Privacy Policy
                </div>
                <div
                  className="text-[28px]"
                  style={{ fontFamily: "SF Pro Display M" }}
                >
                  Kindertown‘s Privacy Policy describes how Kindertown collects,
                  uses, and shares your personal data.
                </div>
              </div>
              <div
                className="text-2xl"
                style={{ fontFamily: "SF Pro Display R" }}
              >
                Updated November 6, 2023
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-[150px] pb-[100px]">
            <div className="flex flex-col pt-[100px] gap-5">
              <div className="w-[150px] h-[150px]">
                <img src={handshake} alt="Handshake" />
              </div>
              <div
                className="text-2xl"
                style={{ fontFamily: "SF Pro Display M", lineHeight: "normal" }}
              >
                <div className="relative flex flex-col gap-7">
                  <div>
                    <div>
                      In addition to this Privacy Policy, we provide embedded
                      data
                    </div>
                    <div>
                      and privacy information in our products and certain
                      features that
                    </div>
                    <div>
                      require the use of your personal data. This
                      product-specific
                    </div>
                    <div>
                      information is accompanied by our Data & Privacy Icon.
                    </div>
                  </div>
                  <div>
                    <div>
                      You will read this product-specific information before
                      using these
                    </div>
                    <div>
                      features. You can also view this information at any time
                      by
                    </div>
                    <div>
                      accessing settings related to these features and/or online
                      at
                    </div>
                    <div>
                      <span className="text-[#0075FE]">
                        kindertown.pro/privacy.
                      </span>
                    </div>

                    <div className="absolute top-[224px] right-0">
                      <button onClick={onClose}>
                        <img
                          src={close}
                          alt="CloseButton"
                          className="w-[60px] h-[60px]"
                        />
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    You can familiarize yourself with our privacy practices via
                    the headings below and contact us if you have any questions.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div
                className="text-3xl"
                style={{ fontFamily: "SF Pro Display B" }}
              >
                What Is Personal Data at Kindertown?
              </div>
              <div
                className="flex flex-col gap-7 text-xl"
                style={{ fontFamily: "SF Pro Display M", lineHeight: "normal" }}
              >
                <div>
                  At Kindertown, we strongly believe in fundamental privacy
                  rights - and we believe these rights should not vary depending
                  on your location in the world. That's why we consider any data
                  related to Kindertown as "personal data," regardless of where
                  individuals reside. This means that data directly identifying
                  you - such as your name - is personal data, as well as data
                  that may not directly identify you but can reasonably be used
                  to do so, such as your device's serial number. Aggregated data
                  is considered non-personal data under this Privacy Policy.
                </div>

                <div>
                  This Privacy Policy covers how Kindertown handles personal
                  data, whether you interact with us through our website or
                  through Kindertown applications (such as Kindertown Parent,
                  Kindertown Teacher, or Kindertown Admin). Kindertown may also
                  link to third parties within our services or provide
                  third-party applications for download in app stores.
                  Kindertown's Privacy Policy does not apply to how third
                  parties define or use personal data. We encourage you to read
                  their privacy policies and understand your privacy rights
                  before interacting with them.
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div
                className="text-3xl"
                style={{ fontFamily: "SF Pro Display B" }}
              >
                Your Privacy Rights at Kindertown
              </div>
              <div
                className="flex flex-col gap-7 text-xl h-[400px]"
                style={{ fontFamily: "SF Pro Display M", lineHeight: "normal" }}
              >
                <div>
                  At Kindertown, we respect your ability to know, access,
                  correct, transfer, restrict the processing of, and delete your
                  personal data. We have provided these rights to all our
                  customers, and if you choose to exercise these privacy rights,
                  you have the right not to be treated in a discriminatory way
                  nor to receive a lesser degree of service from us. Where you
                  are requested to consent to the processing of your personal
                  data by us, you have the right to withdraw your consent at any
                  time.
                </div>

                <div>
                  <span style={{ fontFamily: "SF Pro Display B" }}>
                    To exercise your privacy rights and choices and to ensure
                    the security of your personal data,
                  </span>
                  you must sign in to your Kindertown account and undergo
                  identity verification.
                </div>
                <div>
                  In some cases, we may not be able to fulfill your request -
                  for example, if you ask us to delete your transaction data and
                  Kindertown is legally obligated to retain that transaction
                  record to comply with the law. We may also decline to fulfill
                  a request if doing so would undermine our legitimate use of
                  data for anti-fraud and security purposes, such as when you
                  request deletion of an account under investigation for
                  security concerns. Other reasons your privacy request may be
                  denied include if it jeopardizes the privacy of others, is
                  frivolous or malicious, or would be extremely impractical. If
                  you are unable to access Kindertown's privacy page from your
                  location, you can submit a request at{" "}
                  <span className="text-[#0075FE]">
                    kindertown.pro/support/contact.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
