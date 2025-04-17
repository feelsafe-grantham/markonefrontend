import styles from "./Icon.module.css"
import { useNavigate } from "react-router-dom";
const ChatBot = () => {
    const navigate = useNavigate();
    const img1 = "/images/chatBot1.jpeg";
    const img2 = "/images/girl1.png";
    const img3 = "/images/user3.png";
    const handleClick = () => {
        navigate("/contact");
    }
    return (
        <div onClick={handleClick} className={`${styles.iconContainer} ${styles.chatIconContainer}`}>
            <img src={img3} className={`${styles.icon} ${styles.chatIcon}`} alt="chatbot" />
        </div>
    )
}
export default ChatBot;