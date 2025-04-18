import styles from "./Icon.module.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ChatBot = () => {
    const navigate = useNavigate();
    const [isExpanded, setIsExpanded] = useState(false);
    const img1 = "/images/lisa.png";
    const img2 = "/images/girl1.png";
    const img3 = "/images/user3.png";

    const handleClick = () => {
        setIsExpanded(!isExpanded);
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
            <div className={`${styles.popOutContainer} ${isExpanded ? styles.expanded : ''}`}>
                <div
                    className={`${styles.popOutIcon} `}
                    onClick={() => handleIconClick("/profile")}
                >
                    <img
                        src={img2}
                        alt="profile"
                        className={`${styles.icon} ${styles.chatIcon}`}
                    />
                </div>
                <div
                    className={`${styles.popOutIcon} `}
                    onClick={() => handleIconClick("/connect")}
                >
                    <img
                        src={img3}
                        alt="connect"
                        className={`${styles.icon} ${styles.chatIcon}`}
                    />
                </div>
            </div>
        </div>
    )
}

export default ChatBot;