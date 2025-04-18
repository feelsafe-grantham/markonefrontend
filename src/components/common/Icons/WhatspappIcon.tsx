import { Link } from "react-router-dom";
import styles from "./Icon.module.css"
import { ContactData } from "../../../utilities/contactData";

const WhatsappIcon = () => {

    return (
        <Link to={`https://wa.me/+91${ContactData.phone2}?text=${encodeURIComponent(
            "Hi there! I'm interested in your services. Could you please share more information?"
        )}`} target="_blank" className={`${styles.iconContainer}`}>
            <img className={`${styles.icon} ${styles.whatsappIcon}`} src="/images/whatsappIcon.png" />
        </Link>
    )
}

export default WhatsappIcon;