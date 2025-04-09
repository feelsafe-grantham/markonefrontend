"use client"
import { useState, useEffect } from "react";
import styles from "./ConnectView.module.css";
import Modal, { useModal } from "../../components/common/Modal";
import VerCaps from "../../components/widgets/VerCaps";
import { VerCapsType } from "../../types/componentTypes";
import TextInputForm from "../../components/common/TextInputForm";
import { useNavigate } from "react-router-dom";
const ConnectView = ({ setActiveTab }: any) => {
    const navigate = useNavigate()
    const { isOpen, openModal, closeModal } = useModal();
    const [form, setForm] = useState({
        service: "",
        budget: "",
    })
    const first: VerCapsType[] = [
        {
            type: "service",
            caps: "blue",
            text: "Web & App",
            value: "web",
        },
        {
            type: "service",
            caps: "blue",
            text: "SEO",
            value: "seo",
        },
        {
            type: "service",
            caps: "blue",
            text: "Ads",
            value: "ads",
        }
    ]

    const second: VerCapsType[] = [
        {
            type: "budget",
            caps: "red",
            text: "₹25K  -  ₹50K",
            value: "25k-50k",
        },
        {
            type: "budget",
            caps: "red",
            text: "₹50K - ₹1L",
            value: "50k-1l",
        },
        {
            type: "budget",
            caps: "red",
            text: "₹1L & above",
            value: "1LAbove",
        },
    ]

    useEffect(() => {
        openModal();
        return () => {
            closeModal();
        }
    }, []);

    const [step, setStep] = useState(0);


    const handleNext = (type: string, value: string) => {
        setStep(step + 1);
        const upatedForm = { ...form, [type]: value };
        setForm(upatedForm);
    }

    const handlePrev = () => {

        if (step > 0) {
            setStep(step - 1);
        }
        else {
            navigate("/")
        }
    }

    return (
        <div>
            <Modal
                isOpen={isOpen}
                onPrevClick={handlePrev}
            >
                {step === 0 && <div className={`${styles.capsuleContainer}`}>
                    <VerCaps onClick={handleNext} heading="Services You Want!" caps={first} />
                </div>}
                {step === 1 && <div className={`${styles.capsuleContainer} max-w-[900px] mx-auto`}>
                    <VerCaps onClick={handleNext} heading="Estimate Budget !" caps={second} />
                </div>}

                {step === 2 && <TextInputForm form={form} />}

            </Modal>
        </div>
    )
}

export default ConnectView;