import styles from './Carousel.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCube } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
const Carousel = () => {
    const images = [
        "/images/vartical1.png",
        "/images/vartical2.png",
        "/images/vartical3.png",
        "/images/vartical4.png",
        "/images/vartical5.png",
        "/images/vartical1.png",
        "/images/vartical2.png",
        "/images/vartical3.png",
        "/images/vartical4.png",
        "/images/vartical5.png",
    ]

    const handleButtonClick = () => {
        alert("btn clicked")
    }

    return (

        <section className={styles.container}>
            <Swiper
                navigation={false}
                breakpoints={{
                    50: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    900: {
                        slidesPerView: 2,
                    },
                    1200: {
                        slidesPerView: 3,
                    },

                }}
                grabCursor={true}
                effect={'creative'}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                    },
                    next: {
                        translate: ['100%', 0, 0],
                    },
                }}
                modules={[EffectCube, Navigation, Pagination]}
                className="mySwiper"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index} className={`${styles.slide}`}>
                        <div className={`${styles.imageContainer}`}>
                            <img
                                className={`${styles.image}`}
                                src={image}
                                alt=""
                            />
                            <button onClick={handleButtonClick} className={`${styles.downloadBtn}`}>Download</button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Carousel;