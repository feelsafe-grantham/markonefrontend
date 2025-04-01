import React, { useRef } from "react";
import Sidebar from "../../components/common/Sidebar";
import styles from "./TestimonialView.module.css";
import useTestimonialView from "./useTestimonialView";

const TestimonialView = () => {
  const { title, testimonial, links, selectedClient, setSelectedClient } =
    useTestimonialView();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const handleWheel = (e: React.WheelEvent) => {
    if (scrollContainerRef.current) {
      e.preventDefault();
      scrollContainerRef.current.scrollLeft += e.deltaY;
    }
  };

  const { client_name, client_image, client_segment, images, stars } =
    testimonial[selectedClient];

  const handleClick = (value: string, index: number) => {
    console.log(value, index);
    setSelectedClient(index);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  return (
    <div className={` ${styles.mainContainer}`}>
      <div className={`flex space-x-4 ${styles.headingContainer}`}>
        <div className={`${styles.emptyDiv}`}></div>
        <h2 className={`${styles.mainHeading}`}>{title}</h2>
      </div>
      <div className={`flex space-x-4 mx-auto ${styles.contentContainer}`}>
        <Sidebar handleClick={handleClick} links={links} />
        <div
          className={`px-5 py-2 flex-1 trans-black-bg scrollbar-hidden ${styles.projectsContainer}`}
        >
          <div className={`flex justify-between`}>
            <div className={`${styles.userContainer}`}>
              <img
                className={` ${styles.userImage} `}
                src={client_image}
                alt=""
              />
              <h2 className={`text-2xl mb-2 ${styles.sectionHeading}`}>
                {client_name} | {client_segment}
              </h2>
            </div>
            <div className={`${styles.ratingContainer}`}>
              {[...Array(stars)].map((_, index) => (
                <span key={index}>⭐</span>
              ))}
            </div>
            <div className={`${styles.recIconContainer}`}>
              <img src="/images/recicon.png" alt="" />
            </div>
          </div>
          <div
            onWheel={handleWheel}
            ref={scrollContainerRef}
            className={`flex flex-nowrap overflow-auto ${styles.testimonialImageContainer} ${styles.midContainer}`}
          >
            {images.map((image, index) => (
              <img
                key={index}
                className={`${styles.testimonialImage} ${styles.image}`}
                src={image}
                alt=""
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialView;
