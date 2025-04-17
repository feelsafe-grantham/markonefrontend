import styles from "./ProfileView.module.css";
import { Link } from 'react-router-dom';
import PageSeo from '../../components/common/PageSeo';
import LeadForm from '../../components/Profile/LeadForm';
import { ContactData } from "../../utilities/contactData";
const ProfileView = () => {
    return (
        <>
            <PageSeo
                title="Markone's Digital Growth Expert | Website Development & SEO"
                description="Learn about the expert behind Markone's successful website development & SEO strategies. Helping businesses grow with custom web solutions and SEO services."
            />
            <div className={`${styles.parentContainer}`}>
                <LeadForm />
                <div className={`${styles.socialMediaContainer} ${styles.textColor}`}>
                    <div className={`${styles.socialMediaIconsContainer}`}>
                        <Link target="_blank" to={ContactData.linkedin}>
                            <img className={`${styles.socialMediaIcon}`} src="/images/linkedin.png" alt="linkedin" />
                        </Link>
                        <Link target="_blank" to={ContactData.instagram}>
                            <img className={`${styles.socialMediaIcon}`} src="/images/instagram.png" alt="instagram" />
                        </Link>
                        <Link target="_blank" to={ContactData.x}>
                            <img className={`${styles.socialMediaIcon}`} src="/images/twitter.png" alt="x" />
                        </Link>
                        <Link target="_blank" to={ContactData.youtube}>
                            <img className={`${styles.socialMediaIcon}`} src="/images/youtube.png" alt="youtube" />
                        </Link>
                    </div>
                    <div className={`${styles.copyRightContainer}`}>
                        <p className={`${styles.copyRightText}`}>@feelsafemarkone All Rights Reserved 2022</p>
                    </div>
                    <div className={`${styles.linksContainer}`}>
                        <Link className="text-center" to={"/privacy-policy"}>Privacy Policy</Link>
                        |
                        <Link className="text-center" to={"/terms-and-conditon"}>Terms & Conditions</Link>
                        |
                        <Link className="text-center" to={"/refund-policy"}>Refunds & Cancellation</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileView;
