import React from "react";

import logo from "../../assets/termspolicy/Icon.svg"
import close from "../../assets/parentmodal/close.svg";
import { useTranslation } from "react-i18next";

const FormModal = ({ FormOpen, setFormOpen }) => {
    const { t, i18n } = useTranslation();
    const handleCloseModal = () => {
        setFormOpen(false);
    };

    const handleModalClick = (e) => {
        e.stopPropagation(); // Stop propagation to prevent backdrop click from firing
    };


    return (
        <>
            {FormOpen ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        onClick={handleCloseModal}
                    >
                        <div
                            className="relative md:w-[1200px] max-w-[1000px] overflow-auto my-auto md:py-[50px] flex justify-center modal-content"
                            onClick={handleModalClick}
                        >
                            <div className="border-0 md:w-5/6 w-full md:rounded-[50px] relative flex flex-col bg-white outline-none focus:outline-none justify-center items-center md:p-[50px] pt-[50px] md:pb-[100px] pb-[60px]">
                                <div className="flex flex-col gap-[30px] md:px-[50px] px-[30px]">
                                    <div className="flex flex-col md:gap-[30px] gap-[50px]">
                                        <div className="flex flex-row flex-wrap items-center justify-center">
                                            <img src={logo} alt="Logo" className="md:w-[150px] w-[100px] md:h-[100px] h-[66.667px]" />
                                            {/* <div className="flex flex-col">
                                                <button onClick={() => setFormOpen(false)}>
                                                    <img
                                                        src={close}
                                                        alt="CloseButton"
                                                        className="md:w-[35px] md:h-[35px] w-[30px] h-[30px] fixed z-50"
                                                    />
                                                </button>
                                            </div> */}
                                        </div>
                                        {/*CONTENT 1*/}
                                        <div className="flex flex-col md:gap-5 gap-[15px] text-[#000]">
                                            <div
                                                className="md:text-[48px] text-2xl flex justify-center"
                                                style={{ fontFamily: "SF Pro Display B" }}
                                            >
                                                {t("leave-your-contact")}
                                            </div>
                                        </div>
                                    </div>
                                    {/*CONTENT 2*/}
                                    <div className="w-full flex flex-col md:gap-[100px] gap-[100px]">
                                        <div className="w-full flex flex-col gap-5 text-[#000]">
                                            <div
                                                className="md:text-[24px] text-sm flex flex-col items-center align-center"
                                                style={{
                                                    fontFamily: "SF Pro Display M",
                                                    lineHeight: "normal",
                                                }}
                                            >
                                                <div className="font-medium md:text-2xl text-sm text-center">
                                                    <div>
                                                        {t("leave-your-contact-desc1")}
                                                    </div><div>
                                                        {t("leave-your-contact-desc2")}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col md:gap-[150px] gap-[100px] text-[#000]">
                                            {/*CONTENT 3*/}
                                            <div className="flex flex-col md:gap-[50px] gap-[30px]">
                                                <div
                                                    className="md:text-[40px] text-2xl font-bold"
                                                    style={{ fontFamily: "SF Pro Display B" }}
                                                >
                                                    Our Service
                                                </div>
                                                <div
                                                    className="md:text-2xl text-sm flex flex-col gap-[50px]"
                                                    style={{
                                                        fontFamily: "SF Pro Display M",
                                                        lineHeight: "normal",
                                                    }}
                                                >
                                                    <div>
                                                        <div className="font-bold md:text-2xl text-[20px] leading-normal pb-[10px] tracking-wider">
                                                            Software
                                                        </div>
                                                        <div className="text-[#666] tracking-wider">
                                                            Empower your business with bespoke software solutions. Our expert developers turn your vision into reality, delivering innovative and dependable software tailored to your unique requirements.
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold md:text-2xl text-[20px] leading-normal pb-[10px] tracking-wider">
                                                            Website
                                                        </div>
                                                        <div className="text-[#666] tracking-wider">
                                                            We develop websites of all sizes using a step-by-step approach. From pre-production planning and crafting the GUI design to backend development, we execute each phase with precision.
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold md:text-2xl text-[20px] leading-normal pb-[10px] tracking-wider">
                                                            Mobile App
                                                        </div>
                                                        <div className="text-[#666] tracking-[.075em]">
                                                            We transform our clients’ core ideas into innovative applications for mobile, cloud, and web platforms. We ensure these apps are compatible with major platforms and accessible on a wide range of devices.
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold md:text-2xl text-[20px] leading-normal pb-[10px] tracking-wider">
                                                            Management System
                                                        </div>
                                                        <div className="text-[#666] tracking-wider">
                                                            The Employee Intelligence Management System (EIMS) is a groundbreaking HR tool that enhances workflow efficiency. It fosters organizational growth and unlocks employee potential through intuitive dashboards, automation, and predictive analytics.
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold md:text-2xl text-[20px] leading-normal pb-[10px] tracking-wider">
                                                            POS System
                                                        </div>
                                                        <div className="text-[#666] tracking-wider">
                                                            Maximize your business efficiency with our robust POS and e-Invoice system. Seamlessly handle sales, inventory, and customer data, ensuring a frictionless checkout experience. Integrated into your workflow, it boosts productivity and customer satisfaction.
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold md:text-2xl text-[20px] leading-normal pb-[10px] tracking-wider">
                                                            Support & Service
                                                        </div>
                                                        <div className="text-[#666] tracking-wider">
                                                            Enhance system performance with our expert support. Our team guarantees timely updates and troubleshooting to ensure smooth operations, maintaining your systems at optimal efficiency.
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold md:text-2xl text-[20px] leading-normal pb-[10px] tracking-wider">
                                                            More info
                                                        </div>
                                                        <div className="text-[#666] tracking-wider">
                                                            You can learn more about us by visiting our official website at: <br />
                                                            <a href="#" className="text-[#0075fe] underline underline-offset-4">
                                                                Current Tech Industries</a>.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fixed inset-0 z-40 bg-gray-800 bg-opacity-50 backdrop-blur-sm"></div>
                </>
            ) : null}
        </>
    );
};

export default FormModal;
