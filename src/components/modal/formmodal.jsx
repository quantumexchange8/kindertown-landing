import React, { useState } from "react";
import logo from "../../assets/termspolicy/Icon.svg";
import form from "../../assets/mobileform.svg";
import close from "../../assets/parentmodal/close.svg";
import SuccessSubmit from "./successsubmitmodal";
import { useTranslation } from "react-i18next";
import { Field, Label, Radio, RadioGroup } from '@headlessui/react'

const FormModal = ({ FormOpen, setFormOpen }) => {
    const { t } = useTranslation();
    const handleCloseModal = () => {
        setFormOpen(false);
    };
    const handleModalClick = (e) => {
        e.stopPropagation(); // Stop propagation to prevent backdrop click from firing
    };

    const [showSuccessSubmit, setShowSuccessSubmit] = useState(false);
    const interestedPlans = ['Kindertown Parent', 'Kindertown Teacher', 'Kindertown Admin', 'All Products']

    const [formData, setFormData] = useState({
        formFullName: '',
        formSchoolName: '',
        formContactNumber: '',
        formEmailAddress: '',
        formLocation: '',
        formInterested: 'Kindertown Parent',
    })

    let [interestedPlan, setInterestedPlan] = useState(interestedPlans[0])


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // fetch('/api', { method: form.method, body: formData })
        console.log(formData);
        setShowSuccessSubmit(true);
        setFormData({
            formFullName: '',
            formSchoolName: '',
            formContactNumber: '',
            formEmailAddress: '',
            formLocation: '',
            formInterested: 'Kindertown Parent',
        });
    }

    return (
        <>
            {FormOpen ? (
                <>
                    <div
                        className="justify-center items-center md:flex md:pt-0 pt-[20px] overflow-x-hidden px-[30px] overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        onClick={handleCloseModal}
                    >
                        <div
                            className="relative md:w-[1200px] max-w-[1000px] overflow-auto my-auto md:py-[50px] flex justify-center modal-content"
                            onClick={handleModalClick}
                        >
                            <div className="border-0 w-full md:rounded-[50px] rounded-[10px] relative flex flex-col bg-white outline-none focus:outline-none justify-center items-center md:p-[50px] pt-[50px] md:pb-[100px] pb-[60px]">
                                <div className="absolute md:flex hidden top-0 right-0 md:p-[50px]">
                                    <button onClick={() => setFormOpen(false)}>
                                        <img
                                            src={close}
                                            alt="CloseButton"
                                            className="md:w-[35px] md:h-[35px] w-[30px] h-[30px] z-50"
                                        />
                                    </button>
                                </div>
                                <div className="flex flex-col md:gap-[50px] gap-[30px] w-full md:px-[50px] px-[30px]">
                                    <div className="flex flex-col md:gap-[30px] gap-[50px]">
                                        <div className="md:flex hidden flex-row flex-wrap items-center justify-center">
                                            <img src={logo} alt="Logo" className="md:w-[150px] w-[100px] md:h-[100px] h-[66.667px]" />
                                        </div>
                                        <div className="flex md:hidden relative flex-row flex-wrap items-center justify-center">
                                            <img src={form} alt="Form" className="md:w-[150px] w-[100px] md:h-[100px] h-[66.667px]" />
                                            <div className="md:hidden absolute items-end justify-items-end top-0 right-0 md:p-[50px]">
                                                <button onClick={() => setFormOpen(false)}>
                                                    <img
                                                        src={close}
                                                        alt="CloseButton"
                                                        className="md:w-[35px] md:h-[35px] w-[30px] h-[30px] z-50"
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                        {/*Title*/}
                                        {/* <form onSubmit=(handleSubmit)></form> */}
                                        <div className="flex flex-col md:gap-5 gap-[15px] text-[#000]">
                                            <div
                                                className={`md:text-[48px] text-xl flex justify-center font-bold `}
                                                style={{ fontFamily: "SF Pro Display B" }}
                                            >
                                                {t("leave-your-contact")}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full flex flex-col md:gap-[100px] gap-[100px]">
                                        <div className="w-full flex flex-col gap-5 text-[#000]">
                                            <div
                                                className="flex flex-col items-center align-center"
                                                style={{
                                                    fontFamily: "SF Pro Display M",
                                                    lineHeight: "normal",
                                                }}
                                            >
                                                <div className="font-medium md:text-4xl text-sm text-center">
                                                    <div>
                                                        {t("leave-your-contact-desc1")}
                                                    </div><div>
                                                        {t("leave-your-contact-desc2")}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="flex flex-col md:gap-[100px] gap-[50px]">
                                            {/*Form*/}
                                            <div className="flex flex-col md:gap-[50px] gap-[30px]">
                                                <div className="flex flex-col md:gap-[10px]">
                                                    <div
                                                        className="md:text-base text-sm font-bold"
                                                        style={{ fontFamily: "SF Pro Display B" }}
                                                    >
                                                        {t("form-full-name")}<span className="text-[#F00]">*</span>
                                                    </div>
                                                    <div
                                                        className="md:text-2xl text-sm flex flex-col gap-[50px]"
                                                        style={{
                                                            fontFamily: "SF Pro Display M",
                                                            lineHeight: "normal",
                                                        }}
                                                    >
                                                        <input className="shadow border border-solid border-[#F67F00] bg-[#FFF8F1] rounded-[10px] w-full md:h-[60px] focus:outline-none focus:shadow-outline"
                                                            name="formFullName"
                                                            type="text"
                                                            value={formData.formFullName}
                                                            onChange={handleChange}
                                                            required>
                                                        </input>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col md:gap-[10px]">
                                                    <div
                                                        className="md:text-base text-sm font-bold"
                                                        style={{ fontFamily: "SF Pro Display B" }}
                                                    >
                                                        {t("form-school-name")}<span className="text-[#F00]">*</span>
                                                    </div>
                                                    <div
                                                        className="md:text-2xl text-sm flex flex-col gap-[50px]"
                                                        style={{
                                                            fontFamily: "SF Pro Display M",
                                                            lineHeight: "normal",
                                                        }}
                                                    >
                                                        <input
                                                            className="shadow border border-solid border-[#F67F00] bg-[#FFF8F1] rounded-[10px] w-full md:h-[60px] focus:outline-none focus:shadow-outline"
                                                            name="formSchoolName"
                                                            type="text"
                                                            value={formData.formSchoolName}
                                                            onChange={handleChange}
                                                            required>
                                                        </input>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col md:gap-[10px]">
                                                    <div
                                                        className="md:text-base text-sm font-bold"
                                                        style={{ fontFamily: "SF Pro Display B" }}
                                                    >
                                                        {t("form-contact-number")}<span className="text-[#F00]">*</span>
                                                    </div>
                                                    <div
                                                        className="md:text-2xl text-sm flex flex-col gap-[50px]"
                                                        style={{
                                                            fontFamily: "SF Pro Display M",
                                                            lineHeight: "normal",
                                                        }}
                                                    >
                                                        <input className="shadow border border-solid border-[#F67F00] bg-[#FFF8F1] rounded-[10px] w-full md:h-[60px] focus:outline-none focus:shadow-outline"
                                                            name="formContactNumber"
                                                            type="text"
                                                            value={formData.formContactNumber}
                                                            onChange={handleChange}
                                                            required>
                                                        </input>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col md:gap-[10px]">
                                                    <div
                                                        className="md:text-base text-sm font-bold"
                                                        style={{ fontFamily: "SF Pro Display B" }}
                                                    >
                                                        {t("form-email-address")}<span className="text-[#F00]">*</span>
                                                    </div>
                                                    <div
                                                        className="md:text-2xl text-sm flex flex-col gap-[50px]"
                                                        style={{
                                                            fontFamily: "SF Pro Display M",
                                                            lineHeight: "normal",
                                                        }}
                                                    >
                                                        <input className="shadow border border-solid border-[#F67F00] bg-[#FFF8F1] rounded-[10px] w-full md:h-[60px] focus:outline-none focus:shadow-outline"
                                                            name="formEmailAddress"
                                                            type="text"
                                                            value={formData.formEmailAddress}
                                                            onChange={handleChange}
                                                            required>
                                                        </input>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col md:gap-[10px]">
                                                    <div
                                                        className="md:text-base text-sm font-bold"
                                                        style={{ fontFamily: "SF Pro Display B" }}
                                                    >
                                                        {t("form-location")}<span className="text-[#F00]">*</span>
                                                    </div>
                                                    <div
                                                        className="md:text-sm text-sm flex flex-col gap-[50px]"
                                                        style={{
                                                            fontFamily: "SF Pro Display M",
                                                            lineHeight: "normal",
                                                        }}
                                                    >
                                                        <input className="shadow border border-solid border-[#F67F00] bg-[#FFF8F1] rounded-[10px] w-full md:h-[60px] focus:outline-none focus:shadow-outline"
                                                            name="formLocation"
                                                            type="text"
                                                            value={formData.formLocation}
                                                            onChange={handleChange}
                                                            required>
                                                        </input>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col md:gap-[25px] ">
                                                    <div
                                                        className="md:text-base text-sm font-bold mb-[20px]"
                                                        style={{ fontFamily: "SF Pro Display B" }}
                                                    >
                                                        {t("form-interest-product")}<span className="text-[#F00]">*</span>
                                                    </div>
                                                    <div
                                                        className="md:text-2xl text-sm flex flex-col gap-[50px]"
                                                        style={{
                                                            fontFamily: "SF Pro Display M",
                                                            lineHeight: "normal",
                                                        }}
                                                    >
                                                        <div className="flex flex-row justify-start text-medium text-base md:gap-[60px]"
                                                            style={{
                                                                fontFamily: "SF Pro Display M",
                                                                lineHeight: "normal",
                                                            }}>
                                                            <RadioGroup name="formInterested" value={interestedPlan} onChange={setInterestedPlan} aria-label="Server size"
                                                                className="md:flex md:flex-wrap md:w-[1200px] w-full justify-between">
                                                                {interestedPlans.map((interestedPlan) => (
                                                                    <Field key={interestedPlan} className="flex items-center gap-[15px] mb-[20px]">
                                                                        <Radio
                                                                            value={interestedPlan}
                                                                            className="group flex size-5 items-center justify-center rounded-full border bg-white data-[checked]:bg-[#F67F00] gap-[60px]"
                                                                        >
                                                                            <span className="invisible size-2 rounded-full bg-white group-data-[checked]:visible" />
                                                                        </Radio>
                                                                        <Label>{interestedPlan}</Label>
                                                                    </Field>
                                                                ))}
                                                            </RadioGroup>
                                                        </div>


                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex md:justify-end justify-center">
                                                <button type="submit" className="md:w-[130px] w-[80px] md:h-[60px] h-[30px] md:text-xl text-sm font-semibold border-2 border-[#F67F00] md:rounded-[31px] rounded-[10px] shadow-[2px_4px_4px_0px_rgba(246,127,0,0.50)]"
                                                    style={{
                                                        fontFamily: "SF Pro Display M",
                                                        lineHeight: "normal"
                                                    }}
                                                    onClick={() => (setShowSuccessSubmit(true))}
                                                    >
                                                    
                                                    {t("form-send")}
                                                </button>
                                                <SuccessSubmit 
                                                    showSuccessSubmit={showSuccessSubmit} 
                                                    setShowSuccessSubmit={setShowSuccessSubmit} />
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fixed inset-0 z-40 bg-gray-800 bg-opacity-50 backdrop-blur-sm"></div>
                </>
            ) : null}
        </>
    );
}


export default FormModal;
