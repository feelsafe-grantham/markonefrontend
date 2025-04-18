import React, { useRef } from "react";
import styles from "./Testimonial2.module.css";
import Sidebar from "../../components/common/Sidebar";
import useTestimonialView from "./useTestimonialView";
import PageSeo from "../../components/common/PageSeo";
import { useImageViewer } from "../../context/ImageViewerContext";

const TestimonialView = () => {
  const { testimonial, links, selectedClient, setSelectedClient } =
    useTestimonialView();
  const { openImageViewer } = useImageViewer();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const handleWheel = (e: React.WheelEvent) => {
    if (scrollContainerRef.current) {
      e.preventDefault();
      scrollContainerRef.current.scrollLeft += e.deltaY;
    }
  };

  const { client_name, client_image, client_segment, images, stars } =
    testimonial[selectedClient] || {};

  const handleClick = (e: any, value: string, index: number) => {
    console.log(e, value, index);
    setSelectedClient(index);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  return (
    <div className={`${styles.mainContainer}`}>
      <PageSeo
        title="Client Success Stories | Markone Website & SEO Results"
        description="See how Markone helped businesses achieve success with website development & SEO. Real results that drive traffic and generate leads. Success stories inside!"
      />
      <div className={`${styles.sidebarContainer}`}>
        <Sidebar handleClick={handleClick} links={links} />
      </div>
      <div className={`trans-black-bg scrollbar-hidden ${styles.contentContainer}`}>
        <div className={`${styles.clientInfoContainer}`}>
          <div className={`${styles.userContainer}`}>
            <img
              className={` ${styles.userImage}`}
              src={client_image}
              alt={client_image}
            />
            <h2 className={`text-2xl mb-2 ${styles.clientName}`}>
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
          className={`${styles.midContainer} scrollbar-hidden`}
        >
          {images && images?.map((item: any, index: number) => (
            <img
              key={index}
              src={item}
              alt={`Project ${index + 1}`}
              className={`${styles.imageVer}`}
              onClick={() => openImageViewer(images, index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialView;
