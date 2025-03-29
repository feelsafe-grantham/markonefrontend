"use client"
import { useState, useEffect } from "react";
import styles from "./ConnectView.module.css";
import Modal, { useModal } from "../../components/common/Modal";
import VerCaps from "../../components/widgets/VerCaps";
import { VerCapsType } from "../../types/componentTypes";
import TextInputForm from "../../components/common/TextInputForm";
const ConnectView = () => {
    const { isOpen, openModal, closeModal } = useModal();
    const first: VerCapsType[] = [
        {
            caps: "blue",
            text: "Application "
        },
        {
            caps: "blue",
            text: "SEO"
        },
        {
            caps: "blue",
            text: "Website Dev."
        },
        {
            caps: "blue",
            text: "Ads"
        }
    ]
    const second: VerCapsType[] = [
        {
            caps: "red",
            text: "₹25K  -  ₹50K"
        },
        {
            caps: "red",
            text: "₹50K - ₹1L"
        },
        {
            caps: "red",
            text: "₹1L & above"
        },
    ]
    useEffect(() => {
        openModal();
        return () => {
            closeModal();
        }
    }, []);
    const [step, setStep] = useState(0);
    const handleClick = () => {
        setStep(step + 1);
    }

    return (
        <div>
            <Modal
                isOpen={isOpen}
            // onOpenModal={openModal}
            // onCloseModal={closeModal}

            >
                {step === 0 && <div className={`${styles.capsuleContainer}`}>
                    <VerCaps onClick={handleClick} heading="Services You Want!" caps={first} />
                </div>}
                {step === 1 && <div className={`${styles.capsuleContainer} max-w-[900px] mx-auto`}>
                    <VerCaps onClick={handleClick} heading="Estimate Budget !" caps={second} />
                </div>}

                {step === 2 && <div> <TextInputForm /> </div>}

            </Modal>
        </div>
    )
}

export default ConnectView;