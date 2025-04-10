import { Link } from 'react-router-dom';
import styles from "./EbookView.module.css"
import PageSeo from '../../components/common/PageSeo';
import Carousel from '../../components/common/Carousel';

const EbookView = () => {
    return (
        <>
            <PageSeo

                title="Markone's Digital Growth Expert | Website Development & SEO"
                description=" Learn about the expert behind Markone's successful website development & SEO strategies. Helping businesses grow with custom web solutions and SEO services."
            />
            <Carousel />
            <div className={`${styles.socialMediaContainer} ${styles.textColor}`}>
                <div className={`${styles.socialMediaIconsContainer}`}>
                    <Link target="_blank" to={"https://in.linkedin.com/company/feelsafe-markone"}>
                        <img className={`${styles.socialMediaIcon}`} src="/images/linkedin.png" alt="instagram" />
                    </Link>
                    <Link target="_blank" to={"https://www.instagram.com/feelsafe_markone/"}>
                        <img className={`${styles.socialMediaIcon}`} src="/images/instagram.png" alt="instagram" />
                    </Link>
                    <Link target="_blank" to={"https://x.com/feelsafe_mark1?t=qBgHTsTQPT3CXOsyMwiFdw&s=08"}>
                        <img className={`${styles.socialMediaIcon}`} src="/images/twitter.png" alt="instagram" />
                    </Link>
                    <Link target="_blank" to={"https://www.youtube.com/@feelsafemarkone"}>
                        <img className={`${styles.socialMediaIcon}`} src="/images/youtube.png" alt="instagram" />
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
        </>


    )
}

export default EbookView;