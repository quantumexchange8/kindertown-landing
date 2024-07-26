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
    }, [showSuccessSubmit]); 

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
                            className="relative w-full max-w-[255px] flex justify-center modal-content"
                            onClick={handleModalClick}
                        >
                            <div className="border-0 w-full md:rounded-[16.393px] relative flex flex-col bg-white outline-none focus:outline-none justify-center items-center">
                                <div className="md:w-[255px] md:h-[200px] w-full flex flex-col gap-[30px] md:px-[45px] px-[30px] justify-center items-center">
                                    <img
                                        src={SuccessSubmit}
                                        alt="SuccessSubmit"
                                        className="md:w-[81.967px] md:h-[81.967px]"
                                    />

                                    <div
                                        className="flex flex-col justify-center text-center text-[24px] font-semibold"
                                        style={{
                                            fontFamily: "SF Pro Display Semibold",
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
