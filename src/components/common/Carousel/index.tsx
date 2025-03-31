import styles from "./Carousel.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
const Carousel = () => {
    return (
        <section className={styles.collection}>
            <div className="swiper mySwiper">
                <Swiper
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={3}
                    spaceBetween={30}
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
                        <img src="Image3.jpg" alt="Photography 3" />
                        <div className={styles.textContent}>
                            <h3>Photography</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto accusamus ratione nesciunt atque, dolores
                                vel culpa debitis officia expedita unde?
                            </p>
                            <button className={styles.btn}>Read more</button>
                        </div>
                    </SwiperSlide>

                    {/* Add more slides as needed */}
                </Swiper>
            </div>
        </section>
    );
};

export default Carousel;