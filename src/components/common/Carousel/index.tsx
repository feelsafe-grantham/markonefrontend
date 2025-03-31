import styles from "./Carousel.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
const Carousel = () => {
    return (

        <section className={styles.collection}>
            <div className="swiper mySwiper">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={3}
                    spaceBetween={10}
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
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className={styles.content}>
                        <div className={styles.imageContainer}>
                            <img className={styles.image} src="/images/project1.png" alt="Photography 1" />
                            <button className={`${styles.btn} ${styles.downloadbtn}`}>Read more</button>
                        </div>
                        <div className={styles.textContent}>
                            {/* <h3>Photography</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto accusamus ratione nesciunt atque, dolores
                                vel culpa debitis officia expedita unde?
                            </p> */}
                            <button className={styles.btn}>Read more</button>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className={styles.content}>
                        <img src="/images/image2.jpg" alt="Photography 2" />
                        <div className={styles.textContent}>
                            <h3>Photography</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto accusamus ratione nesciunt atque, dolores
                                vel culpa debitis officia expedita unde?
                            </p>
                            <button className={styles.btn}>Read more</button>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className={styles.content}>
                        <img src="/images/image3.jpg" alt="Photography 3" />
                        <div className={styles.textContent}>
                            <h3>Photography</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto accusamus ratione nesciunt atque, dolores
                                vel culpa debitis officia expedita unde?
                            </p>
                            <button className={styles.btn}>Read more</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.content}>
                        <img src="/images/image4.jpg" alt="Photography 1" />
                        <div className={styles.textContent}>
                            <h3>Photography</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto accusamus ratione nesciunt atque, dolores
                                vel culpa debitis officia expedita unde?
                            </p>
                            <button className={styles.btn}>Read more</button>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className={styles.content}>
                        <img src="/images/image5.jpg" alt="Photography 2" />
                        <div className={styles.textContent}>
                            <h3>Photography</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto accusamus ratione nesciunt atque, dolores
                                vel culpa debitis officia expedita unde?
                            </p>
                            <button className={styles.btn}>Read more</button>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className={styles.content}>
                        <img src="/images/image6.jpg" alt="Photography 3" />
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
    );
};

export default Carousel;