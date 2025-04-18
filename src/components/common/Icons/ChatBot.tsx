import { useState, useEffect } from "react";
import styles from "./Icon.module.css"
import { useNavigate } from "react-router-dom";
import { ContactData } from "../../../utilities/contactData";

const ChatBot = () => {
    const whatsappLink = `https://wa.me/91${ContactData.phone1}?text=${encodeURIComponent(
        "Hi! I'm interested in your digital services. Could you please provide more details?"
    )}`;

    const emailLink = `mailto:${ContactData.email}?subject=${encodeURIComponent(
        "Service Inquiry"
    )}&body=${encodeURIComponent(
        `Hi,\n\nI'm interested in your services. Please find my details below:\n\nName:\nPhone:\nWebsite:\nService I'm interested in:\n\nThanks!`
    )}`;
    const navigate = useNavigate();
    const [isExpanded, setIsExpanded] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
    const img1 = "/images/lisa.png";
    const img2 = "/images/whatsappIcon.png";
    const img3 = "/images/email2.png";

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleClick = () => {
        if (isMobile) {
            setIsExpanded(!isExpanded);
        } else {
            navigate("/connect");
        }
    }

    const handleIconClick = (path: string) => {
        navigate(path);
    }

    return (
        <div className={styles.chatIconContainer}>
            <div
                onClick={handleClick}
                className={`${styles.mainChatIconContainer} ${styles.mainIcon}`}
            >
                <img
                    src={img1}
                    alt="chatbot"
                    className={`${styles.icon} ${styles.chatIcon}`}
                />
            </div>
            {isMobile && (
                <div className={`${styles.popOutContainer} ${isExpanded ? styles.expanded : ''}`}>
                    <div
                        className={`${styles.popOutIcon} `}
                        onClick={() => handleIconClick(whatsappLink)}
                    >
                        <img
                            src={img2}
                            alt="profile"
                            className={`${styles.icon} ${styles.chatIcon}`}
                        />
                    </div>
                    <div
                        className={`${styles.popOutIcon} `}
                        onClick={() => handleIconClick(emailLink)}
                    >
                        <img
                            src={img3}
                            alt="connect"
                            className={`${styles.icon} ${styles.chatIcon}`}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default ChatBot;