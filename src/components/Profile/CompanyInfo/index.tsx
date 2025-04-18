import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "./CompanyInfo.module.css";
import { ContactData } from "../../../utilities/contactData";
const CompanyInfo = () => {
    const navigate = useNavigate();
    return (
        <div className={`scrollbar-hidden ${styles.parentContainer} `}>
            <div className={`${styles.mapContainer} black-trans`}>
                <iframe
                    className={`${styles.map}`}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218.91808579808634!2d77.03415770083667!3d28.60909413957715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05e6d897c561%3A0xa0a263035a72062f!2sfeelsafe%20markone%20%7C%20Best%20SEO%20%26%20Application%20Development%20Company!5e0!3m2!1sen!2sin!4v1744883262964!5m2!1sen!2sin"

                    loading="lazy"
                >
                </iframe>
            </div>
            <div className={`${styles.contactInfoContainer}`}>
                <div className={`trans-black-bg ${styles.contactInfo}`}>
                    <label htmlFor="phone">Phone</label>: <Link to={`tel:${ContactData.phone1}`} className={`${styles.contactInfoText}`}>+91 {ContactData.phone1}</Link>
                </div>
                <div className={`trans-black-bg ${styles.contactInfo}`}>
                    <label htmlFor="email">Email</label>: <Link to={`mailto:${ContactData.email}`} className={`${styles.contactInfoText}`}>{ContactData.email}</Link>
                </div>
                <div className={`trans-black-bg ${styles.contactInfo}`}>
                    <label htmlFor="openingHours" className={`${styles.openingHoursLabel}`}>Opening hours</label>: <p className={`${styles.contactInfoText} ${styles.contactInfoTextOpeningHours}`}>10:00 AM - 6:00 PM (Mon - Sat)</p>
                </div>
                <div className={`trans-black-bg ${styles.contactInfo}`}>
                    <button onClick={() => navigate("/connect")} className={`${styles.connectButton}`}>Connect with us</button>
                </div>

            </div>
        </div>
    )
}

export default CompanyInfo;