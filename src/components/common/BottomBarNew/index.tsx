import styles from "./BottomBarNew.module.css"
import CtaCard from "../../widgets/CtaCard"
import { Link } from "react-router-dom"

const BottomBarNew = () => {

    return (
        <div className={`${styles.bottomBar}`}>

            <Link to={"/plans"} className={`${styles.bottomBarLink} ${styles.redCap}`}>
                Plans
            </Link>
            <nav className={`${styles.ctaCardContainer}`}>
                <CtaCard link="/testimonial" type="testimonial" />
                <CtaCard link="/contact-us" type="contact-us" />
                <CtaCard link="/e-book" type="e-book" />
            </nav>
            <nav className={`${styles.ctaCardContainer} ${styles.ctaCardContainerMobile}`}>
                <CtaCard link="/testimonial" type="testimonial" />
                <CtaCard link="/plans" type="plans" />
                <CtaCard link="/contact-us" type="contact-us" />
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
                <Link to={"/contact-us"} className={`${styles.capsHalf} ${styles.capsHalfRed}`}>
                    profile
                </Link>
            </div> 
        */}

        </div>
    );
}

export default BottomBarNew