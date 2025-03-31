
import { useState } from "react";
import styles from "./Modal.module.css";;

const Modal = (
    {
        children,
        isOpen,
        onPrevClick,
        // onOpenModal,
        // onCloseModal
    }: Readonly<{
        children: React.ReactNode,
        isOpen?: boolean,
        onPrevClick?: () => void
        // onOpenModal?: () => void,
        // onCloseModal?: () => void
    }>
) => {

    if (!isOpen) return null;
    return (
        <div className={styles.modalContainer}>
            <div className={`${styles.modal} scrollbar-hidden`}>
                <div className={`${styles.modalContent} `}>
                    <button className={`${styles.closeButton}`} onClick={onPrevClick}
                    >
                        {/* &larr; */}
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="_leftArrow_6gkt4_16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path></svg>
                        {/* <img className="h-10 w-10" src="/images/leftArrow.svg" alt="" /> */}
                    </button>
                    {children}
                </div>
            </div>
        </div>
    );
};

const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return { isOpen, openModal, closeModal };

};
export default Modal;
export { useModal };