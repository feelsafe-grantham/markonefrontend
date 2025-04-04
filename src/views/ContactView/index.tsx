import { Link } from "react-router-dom";
import styles from "./ContactView.module.css";
const ContactView = () => {
    return (
        <div className={`${styles.contactTextColor}`}>
            <div className={`${styles.testimonialContainer}`}>
                <div className={`${styles.testimonialParentCard}`}>
                    <div className={`${styles.testimonialCountryNameContainer}`}>
                        <h3 className={`${styles.countryName}`}>India </h3>
                        <img className={`h-12 ${styles.flag}`} src="/images/indiaflag.png" alt="THis is me" />
                    </div>
                    <div className={`${styles.testimonialCardContainer}`}>
                        <div className={`${styles.testimonialCard}`}>
                            <div className={`${styles.testimonialClientInfoConainer}`}>
                                <img className={`${styles.userImage}`} src="/images/user.jpg" alt="user" />
                                <span className={`${styles.clientName}`}>- Client Name</span>
                            </div>
                            <p className={`${styles.testimonialText}`}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quae sunt accusantium non numquam, similique nesciunt! In suscipit
                            </p>
                        </div>
                    </div>

                </div>
                <div className={`${styles.testimonialParentCard} ${styles.testimonialParentCardMid}`} >
                    <div className={`${styles.testimonialCountryNameContainer}`}>
                        <h3 className={`${styles.countryName}`}>India </h3><img className={`h-10 ${styles.flag}`} src="/images/indiaflag.png" alt="asdf" />
                    </div>
                    <div className={`${styles.testimonialCardContainer}`}>
                        <div className={`${styles.testimonialCard}`}>
                            <div className={`${styles.testimonialClientInfoConainer}`}>
                                <img className={`${styles.userImage}`} src="/images/user.jpg" alt="user" />
                                <span className={`${styles.clientName}`}>- Client Name</span>
                            </div>
                            <p className={`${styles.testimonialText}`}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quae sunt accusantium non numquam, similique nesciunt! In suscipit
                            </p>
                        </div>
                    </div>

                </div>
                <div className={`${styles.testimonialParentCard}`}>
                    <div className={`${styles.testimonialCountryNameContainer}`}>
                        <h3 className={`${styles.countryName}`}>India </h3><img className={`h-10 ${styles.flag}`} src="/images/indiaflag.png" alt="asdf" />
                    </div>
                    <div className={`${styles.testimonialCardContainer}`}>
                        <div className={`${styles.testimonialCard}`}>
                            <div className={`${styles.testimonialClientInfoConainer}`}>
                                <img className={`${styles.userImage}`} src="/images/user.jpg" alt="user" />
                                <span className={`${styles.clientName}`}>- Client Name</span>
                            </div>
                            <p className={`${styles.testimonialText}`}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quae sunt accusantium non numquam, similique nesciunt! In suscipit
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <div className={`${styles.socialMediaContainer}`}>
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
        </div>
    );
};

export default ContactView;
