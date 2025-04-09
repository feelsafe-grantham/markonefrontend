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
                    autoplay={true}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 150,
                        modifier: 2.5,
                        slideShadows: true,
                    }}
                >
                    <SwiperSlide >
                        <div className={styles.content}>
                            <img className={styles.image} src="/images/vartical1.png" alt="Photography 1" />
                            <button className={`${styles.btn} ${styles.downloadbtn}`}>Download</button>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide >
                        <div className={`${styles.content}`}>

                            <img className={styles.image} src="/images/vartical2.png" alt="Photography 1" />
                            <button className={`${styles.btn} ${styles.downloadbtn}`}>Download</button>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide >
                        <div className={styles.content}>

                            <img className={styles.image} src="/images/vartical3.png" alt="Photography 1" />
                            <button className={`${styles.btn} ${styles.downloadbtn}`}>Download</button>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide >
                        <div className={styles.content}>

                            <img className={styles.image} src="/images/vartical4.png" alt="Photography 1" />
                            <button className={`${styles.btn} ${styles.downloadbtn}`}>Download</button>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide >
                        <div className={styles.content}>
                            <img className={styles.image} src="/images/vartical1.png" alt="Photography 1" />
                            <button className={`${styles.btn} ${styles.downloadbtn}`}>Download</button>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide >
                        <div className={styles.content}>
                            <img className={styles.image} src="/images/image6.jpg" alt="Photography 1" />
                            <button className={`${styles.btn} ${styles.downloadbtn}`}>Download</button>
                        </div>
                    </SwiperSlide>
                    {/* <SwiperSlide className={styles.content}>
                        <img className={styles.image} src="/images/image4.jpg" alt="Photography 1" />
                        <button className={`${styles.btn} ${styles.downloadbtn}`}>Download</button>
                    </SwiperSlide>
                    <SwiperSlide className={styles.content}>

                        <img className={styles.image} src="/images/image2.jpg" alt="Photography 1" />
                        <button className={`${styles.btn} ${styles.downloadbtn}`}>Download</button>

                    </SwiperSlide>
                    <SwiperSlide className={styles.content}>

                        <img className={styles.image} src="/images/image3.jpg" alt="Photography 1" />
                        <button className={`${styles.btn} ${styles.downloadbtn}`}>Download</button>

                    </SwiperSlide>
                    <SwiperSlide className={styles.content}>

                        <img className={styles.image} src="/images/image4.jpg" alt="Photography 1" />
                        <button className={`${styles.btn} ${styles.downloadbtn}`}>Download</button>

                    </SwiperSlide>
                    <SwiperSlide className={styles.content}>

                        <img className={styles.image} src="/images/image5.jpg" alt="Photography 1" />
                        <button className={`${styles.btn} ${styles.downloadbtn}`}>Download</button>

                    </SwiperSlide>
                    <SwiperSlide className={styles.content}>
                        <img className={styles.image} src="/images/image6.jpg" alt="Photography 1" />
                        <button className={`${styles.btn} ${styles.downloadbtn}`}>Download</button>
                    </SwiperSlide> */}
                </Swiper>
            </div>
        </section>
    );
};

export default Carousel;