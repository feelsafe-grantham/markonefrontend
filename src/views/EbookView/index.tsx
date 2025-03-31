import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import styles from "./EbookView.module.css"
import { Link } from 'react-router-dom';
import 'swiper/swiper-bundle.css';

const EbookView = () => {
    return (
        <>
            <section className={styles.collection}>
                <div className="swiper mySwiper">
                    <Swiper
                        effect="coverflow"
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView="auto"
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 150,
                            modifier: 2.5,
                            slideShadows: true,
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                    >
                        {/* Slide 1 */}
                        <SwiperSlide className={styles.content}>
                            <img src="/images/Image1.jpg" alt="Photography 1" />
                            <div className={styles.textContent}>
                                <h3>Photography</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto accusamus ratione nesciunt atque, dolores
                                    vel culpa debitis officia expedita unde?
                                </p>
                                <button className={styles.btn}>Read more</button>
                            </div>
                        </SwiperSlide>

                        {/* Slide 2 */}
                        <SwiperSlide className={styles.content}>
                            <img src="/images/Image2.jpg" alt="Photography 2" />
                            <div className={styles.textContent}>
                                <h3>Photography</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto accusamus ratione nesciunt atque, dolores
                                    vel culpa debitis officia expedita unde?
                                </p>
                                <button className={styles.btn}>Read more</button>
                            </div>
                        </SwiperSlide>

                        {/* Slide 3 */}
                        <SwiperSlide className={styles.content}>
                            <img src="/images/Image3.jpg" alt="Photography 3" />
                            <div className={styles.textContent}>
                                <h3>Photography</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto accusamus ratione nesciunt atque, dolores
                                    vel culpa debitis officia expedita unde?
                                </p>
                                <button className={styles.btn}>Read more</button>
                            </div>
                        </SwiperSlide>

                        {/* Slide 4 */}
                        <SwiperSlide className={styles.content}>
                            <img src="/images/Image4.jpg" alt="Photography 4" />
                            <div className={styles.textContent}>
                                <h3>Photography</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto accusamus ratione nesciunt atque, dolores
                                    vel culpa debitis officia expedita unde?
                                </p>
                                <button className={styles.btn}>Read more</button>
                            </div>
                        </SwiperSlide>

                        {/* Slide 5 */}
                        <SwiperSlide className={styles.content}>
                            <img src="/images/Image5.jpg" alt="Photography 5" />
                            <div className={styles.textContent}>
                                <h3>Photography</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto accusamus ratione nesciunt atque, dolores
                                    vel culpa debitis officia expedita unde?
                                </p>
                                <button className={styles.btn}>Read more</button>
                            </div>
                        </SwiperSlide>

                        {/* Slide 6 */}
                        <SwiperSlide className={styles.content}>
                            <img src="/images/Image6.jpg" alt="Photography 6" />
                            <div className={styles.textContent}>
                                <h3>Photography</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto accusamus ratione nesciunt atque, dolores
                                    vel culpa debitis officia expedita unde?
                                </p>
                                <button className={styles.btn}>Read more</button>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            {/* <div className={styles.swiperContainer}>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    navigation
                    pagination={{
                        clickable: true,
                    }}
                    slideToClickedSlide={true}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1400: {
                            slidesPerView: 3,
                            spaceBetween: 25,
                        },
                    }}
                >
                    <SwiperSlide className={`${styles.swiperSlide} swiper-slide`}>
                        <img className={`${styles.image}`} src="/images/project1.png" alt="Project 1" />
                    </SwiperSlide>
                    <SwiperSlide className={`${styles.swiperSlide} swiper-slide`}>
                        <img className={`${styles.image}`} src="/images/project2.png" alt="Project 2" />
                    </SwiperSlide>
                    <SwiperSlide className={`${styles.swiperSlide} swiper-slide`}>
                        <img className={`${styles.image}`} src="/images/project3.png" alt="Project 3" />
                    </SwiperSlide>
                    <SwiperSlide className={`${styles.swiperSlide} swiper-slide`}>
                        <img className={`${styles.image}`} src="/images/project4.png" alt="Project 4" />
                    </SwiperSlide>
                    <SwiperSlide className={`${styles.swiperSlide} swiper-slide`}>
                        <img className={`${styles.image}`} src="/images/project1.png" alt="Project 1" />
                    </SwiperSlide>
                    <SwiperSlide className={`${styles.swiperSlide} swiper-slide`}>
                        <img className={`${styles.image}`} src="/images/project2.png" alt="Project 2" />
                    </SwiperSlide>
                    <SwiperSlide className={`${styles.swiperSlide} swiper-slide`}>
                        <img className={`${styles.image}`} src="/images/project3.png" alt="Project 3" />
                    </SwiperSlide>
                    <SwiperSlide className={`${styles.swiperSlide} swiper-slide`}>
                        <img className={`${styles.image}`} src="/images/project4.png" alt="Project 4" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className={`${styles.socialMediaContainer}`}>
                <div className={`${styles.socialMediaIconsContainer}`}>
                    <Link to={"https://in.linkedin.com/company/feelsafe-markone"}><img className={`${styles.socialMediaIcon}`} src="/images/linkedin.png" alt="instagram" /></Link>
                    <Link to={"https://www.instagram.com/feelsafe_markone/"}><img className={`${styles.socialMediaIcon}`} src="/images/instagram.png" alt="instagram" /></Link>
                    <Link to={"#"}><img className={`${styles.socialMediaIcon}`} src="/images/twitter.png" alt="instagram" /></Link>
                    <Link to={"#"}><img className={`${styles.socialMediaIcon}`} src="/images/youtube.png" alt="instagram" /></Link>
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
            </div> */}
        </>
        // <div className={styles.swiperContainer}>
        //     <Swiper
        //         modules={[Navigation, Pagination, Scrollbar, A11y]}
        //         navigation
        //         spaceBetween={50}
        //         slidesPerView={3}
        //         slideToClickedSlide={true}
        //         onSlideChange={() => console.log('slide change')}
        //         onSwiper={(swiper) => console.log(swiper)}
        //     >
        //         <SwiperSlide className={`${styles.swiperSlide} `}>
        //             <img src="/images/project1.png" alt="Project 1" />
        //         </SwiperSlide>
        //         <SwiperSlide className={`${styles.swiperSlide}`}>
        //             <img src="/images/project2.png" alt="Project 2" />
        //         </SwiperSlide>
        //         <SwiperSlide className={`${styles.swiperSlide}`}>
        //             <img src="/images/project3.png" alt="Project 3" />
        //         </SwiperSlide>
        //         <SwiperSlide className={`${styles.swiperSlide}`}>
        //             <img src="/images/project4.png" alt="Project 4" />
        //         </SwiperSlide>
        //         <SwiperSlide className={`${styles.swiperSlide}`}>
        //             <img src="/images/project1.png" alt="Project 1" />
        //         </SwiperSlide>
        //         <SwiperSlide className={`${styles.swiperSlide}`}>
        //             <img src="/images/project2.png" alt="Project 2" />
        //         </SwiperSlide>
        //         <SwiperSlide className={`${styles.swiperSlide}`}>
        //             <img src="/images/project3.png" alt="Project 3" />
        //         </SwiperSlide>
        //         <SwiperSlide className={`${styles.swiperSlide}`}>
        //             <img src="/images/project4.png" alt="Project 4" />
        //         </SwiperSlide>
        //     </Swiper>
        // </div>

    )
}

export default EbookView;