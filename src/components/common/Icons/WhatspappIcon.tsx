import { Link } from "react-router-dom";
import styles from "./Icon.module.css"
// import { ContactData } from "../../../utils/Data";
const WhatsappIcon = () => {

    return (
        <Link to={`https://wa.me/+91${"ContactData.phone2"}`} className={`${styles.iconContainer}`}>
            <img className={`${styles.icon} ${styles.whatsappIcon}`} src="/images/whatsappIcon.png" />
        </Link>
    )
}

export default WhatsappIcon;