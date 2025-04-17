import styles from "./Icon.module.css"
import { useNavigate } from "react-router-dom";
const ChatBot = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/contact");
    }
    return (
        <div onClick={handleClick} className={`${styles.iconContainer} ${styles.chatIconContainer}`}>
            <img className={`${styles.icon} ${styles.chatIcon}`} src="/images/chatBot1.jpeg" alt="chatbot" />
            {/* <p className={`${styles.iconText}`}>Contact <span className={`${styles.iconName}`}>Anjali</span></p> */}
        </div>
    )
}
export default ChatBot;