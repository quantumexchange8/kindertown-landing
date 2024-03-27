import React from "react";

import logo from "../../assets/termspolicy/Icon.png";

import close from "../../assets/parentmodal/close.png";

function Privacy({ isOpen, onClose }) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-800 bg-opacity-75 backdrop-blur-sm py-12">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white md:w-[900px] rounded-[50px] overflow-hidden px-[100px] pt-20 pb-[100px]">
          <div className="flex flex-col gap-[200px]">
            <div className="flex flex-col w-[74px] h-[50px]">
              <img src={logo} alt="Logo" />
            </div>
            {/*CONTENT 1*/}

            <div className="w-[700px] flex flex-col gap-5">
              <div
                className="text-5xl"
                style={{ fontFamily: "SF Pro Display B" }}
              >
                Kindertown Website Terms of Use
              </div>
              <div
                className="text-[28px]"
                style={{ fontFamily: "SF Pro Display M" }}
              >
                Kindertown Website Terms of Use
              </div>
            </div>
          </div>

          {/*CONTENT 2*/}
          <div className="w-full flex flex-col pt-[100px] gap-5">
            <div
              className="text-3xl"
              style={{ fontFamily: "SF Pro Display B" }}
            >
              Ownership of Site; Agreement to Terms of Use
            </div>

            <div
              className="text-2xl"
              style={{ fontFamily: "SF Pro Display M", lineHeight: "normal" }}
            >
              <div className="flex flex-col gap-7">
                <div>
                  These Terms and Conditions of Use (hereinafter referred to as
                  the "Terms of Use") apply to the Kindertown website located at
                  www.kindertown.pro, and all associated sites linked to
                  www.kindertown.pro by Kindertown, its subsidiaries, and
                  affiliated companies, including Kindertown sites worldwide
                  (collectively referred to as the "Website"). The Website is
                  the property of Kindertown Company (hereinafter referred to as
                  "Kindertown") and its licensors. By using the Website, you
                  agree to comply with these Terms of Use; if you do not agree,
                  please do not use the Website.
                </div>
                <div>
                  Kindertown reserves the right, at its sole discretion, to
                  change, modify, add, or delete portions of these Terms of Use
                  at any time. It is your responsibility to regularly review
                  these Terms of Use for changes. Your continued use of the
                  Website signifies your acceptance and agreement to these
                  changes. As long as you comply with these Terms of Use,
                  Kindertown grants you a personal, non-exclusive,
                  non-transferable, limited privilege to access and use the
                  Website.
                </div>
              </div>
              <div className="flex justify-end">
                <button onClick={onClose}>
                  <img
                    src={close}
                    alt="CloseButton"
                    className=" w-[60px] h-[60px]"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col pt-[91px] gap-[150px]">
            {/*CONTENT 3*/}
            <div className="flex flex-col gap-5">
              <div
                className="text-3xl"
                style={{ fontFamily: "SF Pro Display B" }}
              >
                Content
              </div>
              <div
                className="text-xl flex flex-col gap-7"
                style={{ fontFamily: "SF Pro Display M" }}
              >
                <div>
                  The following content (referred to collectively as "Content"),
                  including but not limited to the design, structure, selection,
                  coordination, expression, "look and feel," and arrangement of
                  such Content on the website, is owned, controlled, or licensed
                  by Kindertown and is protected by trade dress, copyright,
                  patent, trademark laws, and various other intellectual
                  property rights and unfair competition laws.
                </div>
                <div>
                  Unless expressly provided in these terms of use, no part of
                  the website and no Content may be copied, reproduced,
                  republished, uploaded, posted, publicly displayed, encoded,
                  translated, transmitted, or distributed in any way (including
                  "mirroring") to any other computer, server, website, or other
                  medium for publication or distribution or for any commercial
                  enterprise without the express prior written consent of
                  Kindertown.
                </div>
                <div>
                  You may use information about Kindertown products and services
                  (such as data sheets, knowledge base articles, and similar
                  materials) intentionally made available by Kindertown for
                  downloading from the website, provided that you
                  <ul className="list-none list-inside">
                    <li>
                      <span style={{ fontFamily: "SF Pro Display B" }}>
                        (1){" "}
                      </span>
                      do not remove any proprietary notice language in all
                      copies of such documents;
                    </li>
                    <li>
                      <span style={{ fontFamily: "SF Pro Display B" }}>
                        (2){" "}
                      </span>
                      use such information only for your personal,
                      non-commercial informational purposes and do not copy or
                      post such information on any networked computer or
                      broadcast it in any media;
                    </li>
                    <li>
                      <span style={{ fontFamily: "SF Pro Display B" }}>
                        (3){" "}
                      </span>
                      make no modifications to any such information; and
                    </li>
                    <li>
                      <span style={{ fontFamily: "SF Pro Display B" }}>
                        (4){" "}
                      </span>
                      do not make any additional representations or warranties
                      relating to such documents.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*CONTENT 4*/}
            <div className="flex flex-col gap-5">
              <div
                className="text-3xl"
                style={{ fontFamily: "SF Pro Display B" }}
              >
                Your Use of the Website
              </div>
              <div
                className="text-xl flex flex-col gap-7"
                style={{ fontFamily: "SF Pro Display M" }}
              >
                <div>
                  You may not use any "deep-link," "page-scrape," "robot,"
                  "spider," "any adverse," or other automatic device, program,
                  algorithm, or methodology, or any similar or equivalent manual
                  process, to access, acquire, copy, or monitor any portion of
                  the website or any content, or in any way reproduce or
                  circumvent the navigational structure or presentation of the
                  website or any content, to obtain or attempt to obtain any
                  materials, documents, or information through any means not
                  purposely made available through the website. Kindertown
                  reserves the right to prohibit any such activity.
                </div>
                <div>
                  You may not attempt to gain unauthorized access to any portion
                  or feature of the website, or any other systems or networks
                  connected to the website or any Kindertown server, or to any
                  of the services offered on or through the website.
                </div>
                <div>
                  You may not probe, scan, or test the vulnerability of the
                  website or any network connected to the website, nor breach
                  the security or authentication measures on the website or any
                  network connected to the website. You may not reverse look-up,
                  trace, or seek to trace any information about any other user
                  of the website or visitor to the website, or any other
                  customer of Kindertown, including any Kindertown account not
                  owned by you, to its source, or exploit the website or any
                  service or information made available or offered by or through
                  the website in any way where the purpose is to reveal any
                  information, including but not limited to personal
                  identification or information, other than your own
                  information.
                </div>
                <div>
                  You agree that you will not take any action that imposes an
                  unreasonable or disproportionately large load on the
                  infrastructure of the website or Kindertown's systems or
                  networks, or any systems or networks connected to the website
                  or to Kindertown.
                </div>
                <div>
                  You agree not to use any device, software, or routine to
                  interfere or attempt to interfere with the proper working of
                  the website or any transaction being conducted on the website,
                  or with any other person's use of the website.
                </div>
                <div>
                  You may not forge headers or otherwise manipulate identifiers
                  to disguise the origin of any message or transmission you send
                  to Kindertown on or through the website or any service offered
                  on or through the website. You may not pretend to be, or
                  represent, someone else, or impersonate any other individual
                  or entity.
                </div>
                <div>
                  You may not use the website or any content for any purpose
                  that is unlawful or prohibited by these Terms of Use, or to
                  solicit the performance of any illegal activity or other
                  activity which infringes Kindertown's or others' rights.
                </div>
              </div>
            </div>
            {/*CONTENT 5*/}
            <div className="flex flex-col gap-5">
              <div
                className="text-3xl"
                style={{ fontFamily: "SF Pro Display B" }}
              >
                Accounts, Passwords, and Security
              </div>
              <div
                className="text-xl flex flex-col gap-7"
                style={{ fontFamily: "SF Pro Display M" }}
              >
                <div>
                  Certain features or services offered on the website may
                  require you to open an account (including setting up a
                  Kindertown ID and password). You are entirely responsible for
                  maintaining the confidentiality of the information associated
                  with your account, including your password, and for any and
                  all activity that occurs under your account as a result of
                  your failure to keep this information secure and confidential.
                  You agree to promptly notify Kindertown of any unauthorized
                  use of your account or password, or any other breach of
                  security. You may be held liable for losses incurred by
                  Kindertown or any other user of or visitor to the website due
                  to someone else using your Kindertown ID, password, or account
                  as a result of your failure to keep your account information
                  secure and confidential.
                </div>
                <div>
                  You may not, at any time, use someone else's Kindertown ID,
                  password, or account without the express permission and
                  consent of the holder of that Kindertown ID, password, or
                  account. Kindertown shall not be liable for any serious
                  consequences, monetary loss, or other damages or losses
                  arising from your failure to comply with these obligations.
                </div>
              </div>
            </div>
            {/*CONTENT 6*/}
            <div className="flex flex-col gap-5">
              <div
                className="text-3xl"
                style={{ fontFamily: "SF Pro Display B" }}
              >
                Disclaimer
              </div>
              <div
                className="text-xl flex flex-col gap-7"
                style={{ fontFamily: "SF Pro Display M" }}
              >
                <div>
                  Kindertown does not guarantee that the website or any content,
                  service, or feature of the website will be error-free or
                  uninterrupted, or that any defects will be corrected, or that
                  your use of the website will yield specific results. The
                  website and its content are provided on an "as is" and "as
                  available" basis. All information provided on the website is
                  subject to change without notice. Kindertown cannot guarantee
                  that any files or other data you download from the website
                  will be free of viruses, contamination, or destructive
                  features. Kindertown disclaims all warranties, express or
                  implied, including any warranties of accuracy,
                  non-infringement, merchantability, and fitness for a
                  particular purpose. Kindertown disclaims any and all liability
                  for the acts, omissions, and conduct of any third parties in
                  connection with or related to your use of the website and/or
                  any Kindertown services. You assume total responsibility for
                  your use of the website and any linked websites. Your sole
                  remedy against Kindertown for dissatisfaction with the website
                  or any content is to cease using the website or any such
                  content. This limitation is part of the agreement between the
                  parties.
                </div>
                <div>
                  The above disclaimer applies to any damages, liability, or
                  injuries caused by any instability, uncertainty, failure,
                  error, omission, interruption, deletion, defect, delay in
                  operation or transmission, computer virus, communication line
                  failure, theft, or destruction, unauthorized access,
                  alteration, or use, whether for breach of contract, tort,
                  negligence, or any other cause of action.
                </div>
                <div>
                  Kindertown reserves the right to do any of the following, at
                  any time, without notice: (1) modify, suspend, or terminate
                  the operation of or access to the website, or any portion of
                  the website, for any reason; (2) modify or change the website,
                  the entirety or portions of the website's content, and any
                  applicable policies or terms; and (3) interrupt the operation
                  of the website, or any portion of the website, as necessary to
                  perform routine or non-routine maintenance, error correction,
                  or other changes.
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