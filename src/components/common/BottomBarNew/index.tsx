import styles from "./BottomBarNew.module.css"
import CtaCard from "../../widgets/CtaCard"
import { Link } from "react-router-dom"

const BottomBarNew = () => {

    return (
        <div className={`${styles.bottomBar}`}>

            <Link to={"/connect"} className={`${styles.bottomBarLink} ${styles.redCap}`}>
                connect
            </Link>
            <nav className={`${styles.ctaCardContainer}`}>
                <CtaCard link="/testimonial" type="testimonial" />
                <CtaCard link="/profile" type="profile" />
                <CtaCard link="/e-book" type="e-book" />
            </nav>
            <nav className={`${styles.ctaCardContainer} ${styles.ctaCardContainerMobile}`}>
                <CtaCard link="/testimonial" type="testimonial" />
                <CtaCard link="/connect" type="connect" />
                <CtaCard link="/profile" type="profile" />
                <CtaCard link="/e-book" type="e-book" />
            </nav>
            <Link to={"/blog"} className={`${styles.bottomBarLink} ${styles.greenCap}`}>
                Blog
            </Link>

            {/*
             <div className={`${styles.capsHalfContainer}`}>
                <Link to={"/connect"} className={`${styles.capsHalf} ${styles.capsHalfGreen}`}>
                    connect
                </Link>
                <Link to={"/profile"} className={`${styles.capsHalf} ${styles.capsHalfRed}`}>
                    profile
                </Link>
            </div> 
        */}

        </div>
    );
}

export default BottomBarNew