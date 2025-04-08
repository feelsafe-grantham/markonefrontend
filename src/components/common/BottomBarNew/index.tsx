import styles from "./BottomBarNew.module.css"
import CtaCard from "../../widgets/CtaCard"
import { Link } from "react-router-dom"
const BottomBarNew = () => {
    return (
        <div className={`${styles.bottomBar}`}>

            <Link to={"#"} className={`${styles.bottomBarLink} ${styles.redCap}`}>
                connect
            </Link>
            <div className={`${styles.ctaCardContainer}`}>
                <CtaCard onClick={() => { }} link="/" type="testimonial" />
                <CtaCard onClick={() => { }} link="/" type="blog" />
                <CtaCard onClick={() => { }} link="/" type="result" />
            </div>
            <Link to={"#"} className={`${styles.bottomBarLink} ${styles.greenCap}`}>
                profile
            </Link>
            <div className={`${styles.capsHalfContainer}`}>
                <Link to={"#"} className={`${styles.capsHalf} ${styles.capsHalfGreen}`}>
                    connect
                </Link>
                <Link to={"#"} className={`${styles.capsHalf} ${styles.capsHalfRed}`}>
                    profile
                </Link>
            </div>
        </div>
    );
}

export default BottomBarNew