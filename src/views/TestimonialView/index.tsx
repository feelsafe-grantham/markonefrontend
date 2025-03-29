
import React, { useRef } from "react";
import Sidebar from "../../components/common/Sidebar";
import styles from "./TestimonialView.module.css"
const TestimonialView = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const handleWheel = (e: React.WheelEvent) => {
        if (scrollContainerRef.current) {
            e.preventDefault();
            scrollContainerRef.current.scrollLeft += e.deltaY;
        }
    };

    const links = [
        { name: "IOS App", url: "/" },
        { name: "Android App", url: "/" },
        { name: "Website | Portal", url: "/" },
        { name: "CRM", url: "/" },
        { name: "ERM", url: "/" },
        { name: "Software", url: "/" },
        { name: "IOS App", url: "/" },
        { name: "Android App", url: "/" },
    ]
    return (
        <div className={` ${styles.mainContainer}`}>
            <div className={`flex space-x-4 ${styles.headingContainer}`} >
                <div className={`${styles.emptyDiv}`}></div>
                <h2 className={`${styles.mainHeading}`}>Testimonials</h2>
            </div>
            <div className={`flex space-x-4 mx-auto ${styles.contentContainer}`}>
                <Sidebar links={links} />
                <div className={`px-5 py-2 flex-1 trans-black-bg scrollbar-hidden ${styles.projectsContainer}`}>
                    <div className={`flex justify-between`}>
                        <div className={`${styles.userContainer}`}>
                            <img className={` ${styles.userImage} `} src="/images/user.jpg" alt="" />
                            <h2 className={`text-2xl mb-2 ${styles.sectionHeading}`}>Project Summary | Industry</h2>
                        </div>
                        <div className={`${styles.ratingContainer}`}>
                            ⭐⭐⭐⭐⭐
                        </div>
                        <div className={`${styles.recIconContainer}`}>
                            <img src="/images/recicon.png" alt="" />
                        </div>
                    </div>
                    <div
                        onWheel={handleWheel}
                        ref={scrollContainerRef}
                        className={`flex flex-nowrap overflow-auto scrollbar-hidden ${styles.testimonialImageContainer}`}
                    >
                        {/* <div className={styles.testimonialContainer}>
                            <div className={`${styles.testimonialTextContainer}`}>
                                <p className={`${styles.testimonialText}`}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsum, quibusdam ab in exercitationem ea reprehenderit! Iste dolorum voluptates commodiipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsum, quibusdam ab in exercitationem ea reprehenderit! Iste dolorum voluptates commodi.</p>
                                <span>-Client Name</span>
                            </div>
                            <div className={`${styles.userImageContainer}`}>
                                <img className={`${styles.userImageNew}`} src="/images/user1.png" alt="testimonaial" />
                            </div>
                        </div> */}

                        <img className={`${styles.testimonialImage}`} src="/images/testimonial.png" alt="" />
                        <img className={`${styles.testimonialImage}`} src="/images/testimonial.png" alt="" />
                        <img className={`${styles.testimonialImage}`} src="/images/testimonial.png" alt="" />
                        <img className={`${styles.testimonialImage}`} src="/images/testimonial.png" alt="" />
                        <img className={`${styles.testimonialImage}`} src="/images/testimonial.png" alt="" />
                        <img className={`${styles.testimonialImage}`} src="/images/testimonial.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialView;