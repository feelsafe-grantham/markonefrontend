
import { Link } from 'react-router-dom';
import styles from "./EbookView.module.css"
import Carousel from '../../components/common/Carousel';

const EbookView = () => {
    return (
        <>
            <Carousel />
            <div className={`${styles.socialMediaContainer} ${styles.textColor}`}>
                <div className={`${styles.socialMediaIconsContainer}`}>
                    <Link target="_black" to={"https://in.linkedin.com/company/feelsafe-markone"}><img className={`${styles.socialMediaIcon}`} src="/images/linkedin.png" alt="instagram" /></Link>
                    <Link target="_black" to={"https://www.instagram.com/feelsafe_markone/"}><img className={`${styles.socialMediaIcon}`} src="/images/instagram.png" alt="instagram" /></Link>
                    <Link target="_black" to={"#"}><img className={`${styles.socialMediaIcon}`} src="/images/twitter.png" alt="instagram" /></Link>
                    <Link target="_black" to={"#"}><img className={`${styles.socialMediaIcon}`} src="/images/youtube.png" alt="instagram" /></Link>
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