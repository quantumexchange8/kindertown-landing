import React, { useState } from "react";
import Form from "../components/modal/formmodal";
import SuccessSubmitmodal from "../components/modal/successsubmitmodal";
import "../font.css";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const PopupForm = () => {
    const { t, i18n } = useTranslation();
    const [FormOpen, setFormOpen] = useState(false);
    const [showSuccessSubmit, setShowSuccessSubmit] = useState(false);  
    const location = useLocation();

    const webButtonTexts = {
        '/': 'complimentary-demo',
        '/products/parent': 'interested-parent',
        '/products/teacher': 'interested-teacher',
        '/products/admin': 'interested-admin',
        '/join-us/referral-program': 'receive-details',
        '/download/parent': 'jadual-percuma',
        '/download/teacher': 'jadual-percuma',
        '/download/admin': 'jadual-percuma',
    }
    const mobileButtonTexts = {
        '/': 'complimentary-demo',
        '/products/parent': 'interested-parent',
        '/products/teacher': 'interested-teacher',
        '/products/admin': 'interested-admin',
        '/join-us/referral-program': 'mobile-receive-details',
        '/download/parent': 'mobile-jadual-percuma',
        '/download/teacher': 'mobile-jadual-percuma',
        '/download/admin': 'mobile-jadual-percuma',
    }
    const webButtonText = webButtonTexts[location.pathname] || 'defaultButton';
    const mobileButtonText = mobileButtonTexts[location.pathname] || 'defaultButton';
    const createMarkup = (htmlString) => ({ __html: htmlString });

    return (
        <div className="flex justify-center md:pb-[150px] pb-[50px]">
            <button className={`bg-white border-2 border-[#f67f00] border-solid rounded-[31px] shadow-[2px_4px_4px_0px_rgba(246,127,0,0.50)] w-[333px] h-[50px]
         ${i18n.language === "en"
                    ? "md:w-[600px] md:h-[60px]"
                    : i18n.language === "ms"
                        ? "md:w-[760px] md:h-[60px]"
                        : i18n.language === "zh"
                            ? "md:w-[450px] md:h-[60px]"
                            : "md:w-[600px] md:h-[60px]"
                }`}
                onClick={() => setFormOpen(true)}
            >
                <div style={{
                    lineHeight: "normal",
                }}
                    className={`inline-block md:text-xl font-wrap font-semibold text-[14px] items-center justify-center text-pretty ${i18n.language === "ms"
                        ? "mx-8" : " "
                        }`}>
                    {/* Desktop */}
                    <div className="inline-block hidden md:flex"><span dangerouslySetInnerHTML={createMarkup(t(webButtonText))} /></div>
                    {/* Mobile */}
                    <div className="flex flex-col md:hidden"><span dangerouslySetInnerHTML={createMarkup(t(mobileButtonText))} /></div>
                </div>
            </button>

            <Form
                FormOpen={FormOpen}
                setFormOpen={setFormOpen}
            />
            <SuccessSubmitmodal
                showSuccessSubmit={showSuccessSubmit}
                setShowSuccessSubmit={setShowSuccessSubmit}
            />
        </div>
    );
};

export default PopupForm;