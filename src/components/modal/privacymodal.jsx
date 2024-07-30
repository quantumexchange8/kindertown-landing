import React from "react";

import logo from "../../assets/termspolicy/Icon.svg";
import handshake from "../../assets/termspolicy/handshake.svg";
import close from "../../assets/parentmodal/close.svg";
const PrivacyModal = ({ PrivacyOpen, setPrivacyOpen }) => {
  const handleCloseModal = () => {
    setPrivacyOpen(false);
  };

  const handleModalClick = (e) => {
    e.stopPropagation(); // Stop propagation to prevent backdrop click from firing
  };
  return (
    <>
      {PrivacyOpen ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
            onClick={handleCloseModal}
          >
            <div
              className="relative w-full md:max-w-[1000px] overflow-auto  my-auto md:py-[50px] flex  modal-content"
              onClick={handleModalClick}
            >
              {/*content*/}
              <div className="border-0 md:rounded-[50px] shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none justify-center items-center md:px-0 px-[30px] md:pt-20 pt-[50px] md:pb-[100px] pb-[60px]">
                <div className="w-full flex flex-col md:max-w-[800px] gap-[100px]">
                  <div className="flex flex-col md:gap-[60px] gap-[50px] text-[#000]">
                  <div className="flex flex-row w-full h-[100px] justify-between">
                      <img src={logo} alt="Logo" className="h-[100px]" />
                      <div className="flex">
                        <button onClick={() => setPrivacyOpen(false)}>
                          <img
                            src={close}
                            alt="CloseButton"
                            className="md:w-[60px] md:h-[60px] w-[30px] h-[30px]"
                          />
                        </button>
                      </div>
                    </div>
                    {/*CONTENT 1*/}
                    <div className="w-full flex flex-col gap-[10px]">
                      <div className="flex flex-col md:gap-[30px] gap-[15px]">
                        <div
                          className="md:text-5xl text-xl font-bold"
                        >
                          Kindertown Privacy Policy
                        </div>
                        <div
                          className="md:text-[24px] text-base font-semibold"
                          style={{
                            lineHeight: "normal",
                          }}
                        >
                          Kindertown‘s Privacy Policy describes how Kindertown
                          collects, uses, and shares your personal data.
                        </div>
                      </div>
                      <div
                        className="md:text-2xl text-base gap-[16px] font-medium"
                      >
                        Updated November 6, 2023
                      </div>
                    </div>
                  </div>

                  <div className="w-full flex flex-col md:gap-[150px] gap-[100px] text-[#000]">
                    {/*CONTENT 2*/}
                    <div className="flex flex-col md:gap-[30px] gap-[10px]">
                      <div className="md:w-[150px] md:h-[150px] w-[100px] h-[100px]">
                        <img src={handshake} alt="Handshake" />
                      </div>
                      <div
                        className="md:text-2xl text-base md:font-medium font-semibold"
                        style={{
                          lineHeight: "normal",
                        }}
                      >
                        <div className="relative flex flex-col md:gap-7 gap-4">
                          <div>
                            In addition to this Privacy Policy, we provide
                            embedded data and privacy information in our
                            products and certain features that require the use
                            of your personal data. This product-specific
                            information is accompanied by our Data & Privacy
                            Icon.
                          </div>
                          <div>
                            You will read this product-specific information
                            before using these features. You can also view this
                            information at any time by accessing settings
                            related to these features and/or online at
                            <span className="text-[#0075FE] underline">
                              {" "}
                              kindertown.pro/privacy
                            </span>.
                          </div>
                          <div className="flex flex-col">
                            You can familiarize yourself with our privacy
                            practices via the headings below and contact us if
                            you have any questions.
                          </div>
                        </div>
                      </div>
                    </div>

                    {/*CONTENT 3*/}
                    <div className="flex flex-col gap-[10px]">
                      <div
                        className="md:text-[32px] text-xl font-bold"
                      >
                        What Is Personal Data at Kindertown?
                      </div>
                      <div
                        className="flex flex-col md:gap-7 gap-4 md:text-2xl text-sm font-medium"
                        style={{
                          lineHeight: "normal",
                        }}
                      >
                        <div>
                          At Kindertown, we strongly believe in fundamental
                          privacy rights - and we believe these rights should
                          not vary depending on your location in the world.
                          That's why we consider any data related to Kindertown
                          as "personal data," regardless of where individuals
                          reside. This means that data directly identifying you
                          - such as your name - is personal data, as well as
                          data that may not directly identify you but can
                          reasonably be used to do so, such as your device's
                          serial number. Aggregated data is considered
                          non-personal data under this Privacy Policy.
                        </div>

                        <div>
                          This Privacy Policy covers how Kindertown handles
                          personal data, whether you interact with us through
                          our website or through Kindertown applications (such
                          as Kindertown Parent, Kindertown Teacher, or
                          Kindertown Admin). Kindertown may also link to third
                          parties within our services or provide third-party
                          applications for download in app stores. Kindertown's
                          Privacy Policy does not apply to how third parties
                          define or use personal data. We encourage you to read
                          their privacy policies and understand your privacy
                          rights before interacting with them.
                        </div>
                      </div>
                    </div>

                    {/*CONTENT 4*/}
                    <div className="flex flex-col gap-[10px]">
                      <div
                        className="md:text-[32px] text-xl font-bold"
                      >
                        Your Privacy Rights at Kindertown
                      </div>
                      <div
                        className="flex flex-col md:gap-7 gap-4 md:text-2xl text-sm font-medium"
                        style={{
                          lineHeight: "normal",
                        }}
                      >
                        <div>
                          At Kindertown, we respect your ability to know,
                          access, correct, transfer, restrict the processing of,
                          and delete your personal data. We have provided these
                          rights to all our customers, and if you choose to
                          exercise these privacy rights, you have the right not
                          to be treated in a discriminatory way nor to receive a
                          lesser degree of service from us. Where you are
                          requested to consent to the processing of your
                          personal data by us, you have the right to withdraw
                          your consent at any time.
                        </div>

                        <div>
                          To exercise your privacy rights and choices and to
                            ensure the security of your personal data,
                          you must sign in to your Kindertown account and
                          undergo identity verification.
                        </div>
                        <div>
                          In some cases, we may not be able to fulfill your
                          request - for example, if you ask us to delete your
                          transaction data and Kindertown is legally obligated
                          to retain that transaction record to comply with the
                          law. We may also decline to fulfill a request if doing
                          so would undermine our legitimate use of data for
                          anti-fraud and security purposes, such as when you
                          request deletion of an account under investigation for
                          security concerns. Other reasons your privacy request
                          may be denied include if it jeopardizes the privacy of
                          others, is frivolous or malicious, or would be
                          extremely impractical. If you are unable to access
                          Kindertown's privacy page from your location, you can
                          submit a request at{" "}
                          <span className="text-[#0075FE] underline">
                            kindertown.pro/support/contact
                          </span>.
                        </div>
                      </div>
                    </div>

                    {/*CONTENT 5*/}
                    <div className="flex flex-col gap-[10px]">
                      <div
                        className="md:text-[32px] text-xl font-bold"
                      >
                        Personal Data Kindertown Collects from You
                      </div>
                      <div
                        className="flex flex-col md:gap-7 gap-4 md:text-2xl text-sm font-medium"
                        style={{
                          lineHeight: "normal",
                        }}
                      >
                        <div>
                          At Kindertown, we believe you can have excellent
                          privacy. This means we strive to collect only the
                          personal data we need. Descriptions of how Kindertown
                          handles personal data for certain individual services
                          are available at kindertown.pro/privacy. When you
                          create a Kindertown ID, purchase and/or download
                          software updates, connect to our services, contact us
                          (including via social media), or interact with us in
                          other ways, we may collect various information,
                          including
                        </div>

                        <div>
                          <ul className="list-inside list-disc flex flex-col md:gap-7 gap-4 ">
                            <li>
                              <span
                                className="font-bold"
                              >
                                Account Information:{" "}
                              </span>
                              Your Kindertown ID and related account details,
                              including email address, account status, and age.
                            </li>
                            <li>
                              <span className="font-bold">
                                Contact Information:{" "}
                              </span>
                              Name, email address, physical address, phone
                              number, or other contact information
                            </li>
                            <li>
                              <span className="font-bold">
                                Payment Information:{" "}
                              </span>{" "}
                              Data about your billing address and method of
                              payment, such as bank details, credit, debit, or
                              other payment card information.
                            </li>
                            <li>
                              <span className="font-bold">
                                Transaction Information:{" "}
                              </span>
                              Data about purchases of Kindertown-related
                              products and services or transactions facilitated
                              by Kindertown, including purchases on Kindertown
                              software.
                            </li>
                            <li>
                              <span className="font-bold">
                                Fraud Prevention Information:
                              </span>{" "}
                              Data used to identify and prevent fraud.
                            </li>
                            <li>
                              <span className="font-bold">
                                Usage Data:
                              </span>{" "}
                              Data about your activity on and use of our
                              services, such as app launches within our
                              services, browsing history, search history,
                              product interaction, crash data, performance and
                              other diagnostic data, and other usage data.
                            </li>
                            <li>
                              <span className="font-bold">
                                Other Information You Provide to Us:
                              </span>{" "}
                              Details such as the content of your communications
                              with Kindertown, including interactions with
                              customer support and contacts through social media
                              channels.
                            </li>
                          </ul>
                        </div>
                        <div>
                          You are not required to provide the personal data that
                          we have requested. However, if you choose not to do
                          so, in many cases we will not be able to provide you
                          with our products or services or respond to requests
                          you may have.
                        </div>
                      </div>
                    </div>
                    {/*CONTENT 6*/}
                    <div className="flex flex-col gap-[10px]">
                      <div
                        className="md:text-[32px] text-xl font-bold"
                       style={{ lineHeight: "normal" }}
                      >
                        Personal Data Kindertown Receives from Other Sources
                      </div>
                      <div
                        className="flex flex-col md:gap-7 gap-4 md:text-2xl text-sm font-medium"
                        style={{
                          lineHeight: "normal",
                        }}
                      >
                        <div>
                          Kindertown may receive personal data about you from
                          other individuals, businesses, or third parties acting
                          on your behalf, from our partners who work with us to
                          provide products and services and assist us in
                          security and fraud prevention, and from other lawful
                          sources.
                        </div>

                        <div>
                          <ul className="list-inside list-disc flex flex-col md:gap-7 gap-4 ">
                            <li>
                              <span className="font-bold">
                                Individuals.{" "}
                              </span>
                              Kindertown may collect data about you from other
                              individuals — for example, if that individual has
                              sent you a referral code, invited or recommended
                              you to participate in Kindertown-related services
                              or forums, or shared content with you.
                            </li>
                            <li>
                              <span className="font-bold">
                                At Your Direction.{" "}
                              </span>
                              You may direct other individuals or third parties
                              to share data with Kindertown. For example, you
                              may request your mobile carrier to share data
                              about your account with Kindertown for account
                              activation, or request your referral program to
                              share information about your participation with
                              Kindertown so that you can receive rewards for
                              referrals made to Kindertown.
                            </li>
                            <li>
                              <span className="font-bold">
                                Kindertown Partners.{" "}
                              </span>{" "}
                              We may also validate the information you provide —
                              for example, when creating a Kindertown ID, with a
                              third party for security and fraud-prevention
                              purposes.
                            </li>
                          </ul>
                        </div>
                        <div>
                          For innovation, research, and development purposes, we
                          may utilize datasets that include images, voices, or
                          other data that could be associated with identifiable
                          individuals.
                        </div>
                      </div>
                    </div>
                    {/*CONTENT 7*/}
                    <div className="flex flex-col gap-[10px]">
                      <div
                        className="md:text-[32px] text-xl font-bold"
                       
                      >
                        Kindertown’s Use of Personal Data
                      </div>
                      <div
                        className="flex flex-col md:gap-7 gap-4 md:text-2xl text-sm font-medium"
                        style={{
                          lineHeight: "normal",
                        }}
                      >
                        <div>
                          Kindertown uses personal data to support our services,
                          process your transactions, communicate with you,
                          conduct security and fraud prevention measures, and
                          comply with the law. Kindertown may rely on your
                          consent or the necessity of processing to fulfill a
                          contract with you, protect your vital interests or
                          those of others. We may also process your personal
                          data where we believe it is in our or others'
                          legitimate interests, taking into consideration your
                          interests, rights, and expectations. More information
                          can be found in the specific information embedded in
                          our relevant systems, products, and features.
                        </div>

                        <div>
                          <ul className="list-inside list-disc flex flex-col md:gap-7 gap-4">
                            <li>
                              <span className="font-bold">
                                Power Our Services.{" "}
                              </span>
                              Kindertown collects necessary personal data to
                              power our services, which may include personal
                              data collected to improve and enhance our
                              products, for internal auditing or data analysis,
                              or for troubleshooting. For example, if you
                              purchase a widget through Kindertown Parent, we
                              collect data on your purchase to provide you with
                              the requested content and for royalty purposes.
                            </li>
                            <li>
                              <span className="font-bold">
                                Process Your Transactions.{" "}
                              </span>
                              To process transactions, Kindertown must collect
                              data such as your name, purchase, and payment
                              information.
                            </li>
                            <li>
                              <span className="font-bold">
                                Communicate with You.{" "}
                              </span>
                              To respond to your communications, reach out to
                              you about your transactions or account, market our
                              systems, products, and services, provide other
                              relevant information, or request information or
                              feedback. We may use your personal data to send
                              important notices from time to time, such as
                              communications about purchases and changes to our
                              terms, conditions, and policies. Because this
                              information is crucial to your interaction with
                              Kindertown, you may not be able to opt out of
                              receiving these important notices.
                            </li>
                            <li>
                              <span className="font-bold">
                                Security and Fraud Prevention.{" "}
                              </span>
                              To protect individuals, employees, and Kindertown,
                              and for loss prevention and fraud prevention,
                              including safeguarding the interests of all users
                              and prescreening or scanning uploaded content for
                              potentially illegal material, including child
                              sexual exploitation material.
                            </li>
                            <li>
                              <span className="font-bold">
                                Personal Data Used for Personalization.{" "}
                              </span>
                              If you choose to personalize your services or
                              communications where available, Kindertown will
                              use the information we collect to provide you with
                              those personalized services or communications. You
                              can learn more about how relevant services use
                              information to personalize your experience by
                              reviewing the privacy information presented when
                              you first use a service that requests your
                              personal data.
                            </li>
                            <li>
                              <span className="font-bold">
                                Compliance with Law.{" "}
                              </span>
                              To comply with applicable law — for example, to
                              fulfill tax or reporting obligations, or to comply
                              with lawful government requests.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/*CONTENT 8*/}
                    <div className="flex flex-col gap-[10px]">
                      <div
                        className="md:text-[32px] text-xl font-bold"
                       
                      >
                        Kindertown’s Sharing of Personal Data
                      </div>
                      <div
                        className="flex flex-col md:gap-7 gap-4 md:text-2xl text-sm font-medium"
                        style={{
                          lineHeight: "normal",
                        }}
                      >
                        <div>
                          Kindertown may share personal data with
                          Kindertown-affiliated companies, service providers who
                          act on our behalf, our partners, developers, and
                          publishers, or others at your direction. Kindertown
                          does not share personal data with third parties for
                          their own marketing purposes.
                        </div>

                        <div>
                          <ul className="list-inside list-disc flex flex-col md:gap-7 gap-4">
                            <li>
                              <span className="font-bold">
                                Service Providers.{" "}
                              </span>
                              Kindertown may engage third parties to act as our
                              service providers and perform certain tasks on our
                              behalf, such as processing or storing data,
                              including personal data, in connection with your
                              use of our services and delivering system products
                              to customers. Kindertown service providers are
                              obligated to handle personal data consistent with
                              this Privacy Policy and according to our
                              instructions.
                            </li>
                            <li>
                              <span className="font-bold">
                                Others.{" "}
                              </span>
                              Kindertown may share personal data with others at
                              your direction or with your consent, such as when
                              we share information with your carrier to activate
                              your account. We may also disclose your
                              information if we determine that disclosure is
                              necessary or appropriate for purposes of national
                              security, law enforcement, or other issues of
                              public importance. Additionally, we may disclose
                              your information if we determine that it is
                              reasonably necessary to enforce our terms and
                              conditions or to protect our operations or users,
                              or in the event of a reorganization, merger, or
                              sale, where there is a lawful basis for doing so.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/*CONTENT 9*/}
                    <div className="flex flex-col gap-[10px]">
                      <div
                        className="md:text-[32px] text-xl font-bold"
                      >
                        Protection of Personal Data at Kindertown
                      </div>
                      <div
                        className="flex flex-col md:gap-7 gap-4 md:text-2xl text-sm font-medium"
                        style={{
                          lineHeight: "normal",
                        }}
                      >
                        <div>
                          At Kindertown, we believe that excellent privacy is
                          built on a strong foundation of security. We employ
                          administrative, technical, and physical safeguards to
                          protect your personal data, taking into account the
                          nature of the data, how it is processed, and the
                          potential threats. We continuously strive to enhance
                          these protective measures to help ensure the security
                          of your personal data.
                        </div>
                      </div>
                    </div>
                    {/*CONTENT 10*/}
                    <div className="flex flex-col gap-[10px]">
                      <div
                        className="md:text-[32px] text-xl font-bold"
                       
                      >
                        Children and Personal Data
                      </div>
                      <div
                        className="flex flex-col md:gap-7 gap-4 md:text-2xl text-sm font-medium"
                        style={{
                          lineHeight: "normal",
                        }}
                      >
                        <div>
                          Kindertown understands the importance of safeguarding
                          the personal data of children, which we consider to be
                          individuals under the age of 13 or the equivalent age
                          as specified by law. Therefore, Kindertown has
                          implemented additional processes and protections to
                          help keep children's personal data safe. To access
                          certain Kindertown services, children must obtain
                          parental consent. Children's accounts can be created
                          by parents or, in managed situations, by the
                          educational institutions where the children are
                          enrolled.
                        </div>

                        <div>
                          <ul className="list-inside list-disc flex flex-col md:gap-7 gap-4  ">
                            <li>
                              <span className="font-bold">
                                Parents.{" "}
                              </span>
                              To create a parent and child account, parents must
                              submit the Family Privacy Disclosure for Children,
                              which describes how Kindertown handles children's
                              personal data - for example, as part of school
                              enrollment procedures.
                            </li>
                            <li>
                              <span className="font-bold">
                                Educational Institutions.{" "}
                              </span>
                              Educational institutions using the Kindertown
                              system for school management can also create new
                              accounts for student parents. These schools are
                              required to obtain parental consent. If we find
                              that a child's personal data was used by the
                              school or its employees without appropriate
                              authorization or in violation of the law, we will
                              promptly delete the data or refer the matter to
                              the relevant legal authorities in the country.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/*CONTENT 11*/}
                    <div className="flex flex-col gap-[10px]">
                      <div
                        className="md:text-[32px] text-xl font-bold"
                       
                      >
                        Privacy Questions
                      </div>
                      <div
                        className="flex flex-col md:gap-7 gap-4 md:text-2xl text-sm font-medium"
                        style={{
                          lineHeight: "normal",
                        }}
                      >
                        <div>
                          Kindertown places a high priority on addressing your
                          privacy concerns. Our team will review your inquiries
                          to determine the best way to address your questions or
                          concerns, including those related to access or
                          download requests. In most cases, substantive
                          inquiries will receive a response within seven days.
                          In other instances, we may require additional
                          information or inform you that more time is needed to
                          respond. If your complaint suggests areas for
                          improvement in how we handle privacy matters, we will
                          take steps to address them at the earliest
                          opportunity. We will strive to provide you with
                          relevant information applicable to your situation. In
                          the event of significant changes to this Privacy
                          Policy, we will provide notice on this website at
                          least one week prior to the changes, and if we hold
                          your data, we will contact you directly to inform you
                          of the changes.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" fixed inset-0 z-40 bg-gray-800 bg-opacity-50 backdrop-blur-sm"></div>
        </>
      ) : null}
    </>
  );
};

export default PrivacyModal;
