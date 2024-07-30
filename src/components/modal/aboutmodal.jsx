import React from "react";
import logo from "../../assets/admin/ct-logo.svg"
import close from "../../assets/parentmodal/close.svg";
const aboutmodal = ({ AboutOpen, setAboutOpen }) => {
    const handleCloseModal = () => {
        setAboutOpen(false);
    };

    const handleModalClick = (e) => {
        e.stopPropagation(); // Stop propagation to prevent backdrop click from firing
    };
    return (
        <>
            {AboutOpen ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[70] outline-none focus:outline-none"
                        onClick={handleCloseModal}
                    >
                        <div
                            className="relative w-full max-w-[1000px] overflow-auto my-auto md:py-[50px] flex justify-center modal-content"
                            onClick={handleModalClick}
                        >
                            {/* <div className="md:hidden fixed z-50 bottom-[20px] right-[20px]">
                                <button onClick={() => setAboutOpen(false)}>
                                    <img
                                        src={close}
                                        alt="CloseButton"
                                        className="md:w-[60px] md:h-[60px] w-[50px] h-[50px]"
                                    />
                                </button>
                            </div> */}
                            {/*content*/}
                            <div className="border-0 w-full md:rounded-[50px] relative flex flex-col bg-white outline-none focus:outline-none justify-center items-center md:pt-70 pt-[50px] md:pb-[150px] pb-[60px]">
                                <div className="md:w-[1000px] w-full flex flex-col gap-[50px] md:px-[100px] px-[30px]">
                                    <div className="flex flex-col md:gap-[30px] gap-[50px] ">
                                        <div className="flex flex-row flex-wrap items-center justify-between ">
                                            <div><img src={logo} alt="Logo" className="md:w-[150px] w-[100px] md:h-[100px] h-[66.667px]" /></div>
                                            <div className="flex flex-row ">
                                                <button onClick={() => setAboutOpen(false)}>
                                                    <img
                                                        src={close}
                                                        alt="CloseButton"
                                                        className="md:w-[60px] md:h-[60px] w-[30px] h-[30px] z-50"
                                                    />
                                                </button>
                                            </div>
                                        </div>

                                        {/*CONTENT 1*/}

                                        <div className="w-full flex flex-col md:gap-5 gap-[15px] text-[#000]">
                                            <div
                                                className="md:w-[464px] w-full md:h-auto h-[58px] md:text-[40px] text-2xl md:leading-[3rem]"
                                                style={{ fontFamily: "SF Pro Display B" }}
                                            >
                                                We are <br /> Current Tech Industries
                                            </div>
                                        </div>
                                    </div>
                                    {/*CONTENT 2*/}
                                    <div className="w-full flex flex-col md:gap-[150px] gap-[100px]">
                                        {" "}
                                        <div className="w-full flex flex-col gap-5 text-[#000]">
                                            <div
                                                className="md:text-[24px] text-sm "
                                                style={{
                                                    fontFamily: "SF Pro Display M",
                                                    lineHeight: "normal",
                                                }}
                                            >
                                                <div className="font-medium md:text-2xl text-sm">
                                                    <div>
                                                        Welcome to Current Tech Industries Sdn Bhd.
                                                        <br /><br />
                                                        Founded in 2006 and headquartered in Kuala Lumpur Malaysia, Current Tech Industries stands as a pioneer in technology, web, and software development. Over the years, we have led the charge in technological innovation, equipping businesses to thrive in the digital age.
                                                        <br /><br />
                                                            At Current Tech Industries, our mission is clear: to empower traditional industries to seamlessly transition into the modern technological era. We achieve this by harnessing cutting-edge solutions and leveraging unparalleled expertise to drive digital transformation and foster growth across all sectors.
                                                        <br /><br />
                                                        As part of our strategic expansion, we are excited to announce our plans to establish strategic branches in Penang and East Malaysia. These expansions will not only strengthen our regional presence but also enable us to deliver localised support and advanced technological solutions tailored to meet the unique needs of our clients.
                                                        <br /><br />
                                                        Our commitment extends beyond innovation; it encompasses a dedication to shaping the future of business through technology. By staying at the forefront of industry trends and advancements, we ensure that our clients remain ahead in an ever-evolving digital landscape.
                                                        <br /><br />
                                                        Join us at Current Tech Industries as we continue to redefine possibilities and pave the way for a future driven by innovation, collaboration, and technological excellence.
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
                                                        <div className="font-bold md:text-2xl text-[20px] leading-normal pb-[10px]">
                                                            Software
                                                        </div>
                                                        <div className="text-[#666] font-medium">
                                                        Empower your business with bespoke software solutions. Our expert developers turn your vision into reality, delivering innovative and dependable software tailored to your unique requirements.
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold md:text-2xl text-[20px] leading-normal pb-[10px]">
                                                            Website
                                                        </div>
                                                        <div className="text-[#666] font-medium">
                                                            We develop websites of all sizes using a step-by-step approach. From pre-production planning and crafting the GUI design to backend development, we execute each phase with precision.
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold md:text-2xl text-[20px] leading-normal pb-[10px]">
                                                            Mobile App
                                                        </div>
                                                        <div className="text-[#666] font-medium">
                                                            We transform our clients’ core ideas into innovative applications for mobile, cloud, and web platforms. We ensure these apps are compatible with major platforms and accessible on a wide range of devices.
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold md:text-2xl text-[20px] leading-normal pb-[10px]">
                                                            Management System
                                                        </div>
                                                        <div className="text-[#666] font-medium">
                                                            The Employee Intelligence Management System (EIMS) is a groundbreaking HR tool that enhances workflow efficiency. It fosters organizational growth and unlocks employee potential through intuitive dashboards, automation, and predictive analytics.
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold md:text-2xl text-[20px] leading-normal pb-[10px]">
                                                            POS System
                                                        </div>
                                                        <div className="text-[#666] font-medium">
                                                            Maximize your business efficiency with our robust POS and e-Invoice system. Seamlessly handle sales, inventory, and customer data, ensuring a frictionless checkout experience. Integrated into your workflow, it boosts productivity and customer satisfaction.
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold md:text-2xl text-[20px] leading-normal pb-[10px]">
                                                            Support & Service
                                                        </div>
                                                        <div className="text-[#666] font-medium">
                                                            Enhance system performance with our expert support. Our team guarantees timely updates and troubleshooting to ensure smooth operations, maintaining your systems at optimal efficiency.
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold md:text-2xl text-[20px] leading-normal pb-[10px]">
                                                            More info
                                                        </div>
                                                        <div className="text-[#666] font-medium">
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

export default aboutmodal;
