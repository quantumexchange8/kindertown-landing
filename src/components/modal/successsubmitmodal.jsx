import React, { useEffect } from "react";
import SuccessSubmit from "../../assets/successSubmit.svg";
import { useTranslation } from "react-i18next";

const SuccessSubmitmodal = ({ showSuccessSubmit, setShowSuccessSubmit }) => {
    const handleCloseModal = () => {
        setShowSuccessSubmit(false);
    };

    const handleModalClick = (e) => {
        e.stopPropagation(); // Stop propagation to prevent backdrop click from firing
    };

    // const [FormOpen, setFormOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSuccessSubmit(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, ); 

    const { t } = useTranslation();
    return (
        <>
            {showSuccessSubmit ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        onClick={handleCloseModal}
                    >
                        <div
                            className="relative w-full md:max-w-[255px] max-w-[155px] flex justify-center modal-content"
                            onClick={handleModalClick}
                        >
                            <div className="relative flex flex-col outline-none focus:outline-none justify-center items-center">
                                <div className="w-[255px] h-[200px] w-full md:flex flex-col hidden 
                                gap-[30px] px-[39px] justify-center items-center bg-white border rounded-[16.393px]">
                                    <img
                                        src={SuccessSubmit}
                                        alt="SuccessSubmit"
                                        className="w-[81.967px] md:h-[81.967px] "
                                    />

                                    <div
                                        className="flex flex-col justify-center text-center text-[24px] font-semibold"
                                        style={{
                                            lineHeight: "normal"
                                        }}>
                                        {t("message-sent")}
                                    </div>
                                </div>
                                <div className=" w-[155px] h-[122px] flex flex-col md:hidden fixed top-[40px]
                                gap-[20px] px-[20px] justify-center items-center bg-white border rounded-[10px]">
                                    <img
                                        src={SuccessSubmit}
                                        alt="SuccessSubmit"
                                        className="w-[50px] h-[50px]"
                                    />

                                    <div
                                        className="flex flex-col justify-center text-center text-[16px] font-semibold"
                                        style={{
                                            lineHeight: "normal"
                                        }}>
                                        {t("message-sent")}
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

export default SuccessSubmitmodal;
