
import { useState } from "react";
import styles from "./Modal.module.css";;

const Modal = (
    {
        children,
        isOpen,
        // onOpenModal,
        // onCloseModal
    }: Readonly<{
        children: React.ReactNode,
        isOpen?: boolean,
        // onOpenModal?: () => void,
        // onCloseModal?: () => void
    }>
) => {

    if (!isOpen) return null;
    return (
        <div className={styles.modalContainer}>
            <div className={styles.modal}>
                <div className={`${styles.modalContent}`}>
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