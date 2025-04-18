import 'swiper/swiper-bundle.css';
import styles from './Carousel.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCube } from 'swiper/modules';
import { Link } from 'react-router-dom';
const Carousel = () => {
    const ebooks = [
        {
            image: "/images/vartical1.png",
            title: "Ebook 1",
            description: "Description 1",
            downloadLink: "https://www.google.com"
        },
        {
            image: "/images/vartical2.png",
            title: "Ebook 2",
            description: "Description 2",
            downloadLink: "https://www.google.com"
        },
        {
            image: "/images/vartical3.png",
            title: "Ebook 3",
            description: "Description 3",
            downloadLink: "https://www.google.com"
        },
        {
            image: "/images/vartical4.png",
            title: "Ebook 4",
            description: "Description 4",
            downloadLink: "https://www.google.com"
        },
        {
            image: "/images/vartical5.png",
            title: "Ebook 5",
            description: "Description 5",
            downloadLink: "https://www.google.com"
        },

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
                {ebooks.map((ebook, index) => (
                    <SwiperSlide key={index} className={`${styles.slide}`}>
                        <div className={`${styles.imageContainer}`}>
                            <img
                                src={ebook.image}
                                alt="ebbok:markone"
                                className={`${styles.image}`}
                            />
                            <Link
                                to={ebook.downloadLink}
                                download={true}
                                target="_blank"
                                onClick={handleButtonClick}
                                className={`${styles.downloadBtn}`}
                            >
                                Download
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Carousel;