import styles from "./Icon.module.css"
import { useNavigate } from "react-router-dom";
const ChatBot = () => {
    const navigate = useNavigate();
    const img1 = "/images/lisa.png";
    const img2 = "/images/girl1.png";
    const img3 = "/images/user3.png";
    const handleClick = () => {
        navigate("/profile");
    }
    return (
        <div onClick={handleClick} className={`${styles.iconContainer} ${styles.chatIconContainer}`}>
            <img src={img1} className={`${styles.icon} ${styles.chatIcon}`} alt="chatbot" />
        </div>
    )
}
export default ChatBot;