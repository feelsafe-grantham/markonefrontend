import React, { useRef } from "react";
import styles from "./SeoProjectView.module.css";
import Sidebar from "../../components/common/Sidebar";
import Timeline from "../../components/common/Timeline";
import useProjectView from "../ProjectView/useProjectView";
import LoadingProjects from "../../components/common/LoadingProjects";

const SeoProjectView = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const handleWheel = (e: React.WheelEvent) => {
    if (scrollContainerRef.current) {
      e.preventDefault();
      scrollContainerRef.current.scrollLeft += e.deltaY;
    }
  };

  const {
    title,
    error,
    subTitle,
    timelinedata,
    setSelectedType,
    links,
    loading,
    currentProject,
  } = useProjectView("seo");

  const handleLinkClick = (value: string) => {
    setSelectedType(value);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  if (loading) return <LoadingProjects />;
  if (error) return null;
  return (
    <>
      <div
        className={`flex flex-col space-x-4 mx-auto ${styles.mainContainer}`}
      >
        <div className={`flex space-x-4 ${styles.headingContainer}`}>
          <div className={`${styles.emptyDiv}`}></div>
          <h2 className={`${styles.mainHeading}`}>{title}</h2>
        </div>
        <div className={`flex space-x-4 mx-auto ${styles.contentContainer}`}>
          <Sidebar handleClick={handleLinkClick} links={links} />
          <div
            className={`px-5 py-2 flex-1 trans-black-bg scrollbar-hidden ${styles.projectsContainer}`}
          >
            <h2 className={`text-2xl mb-2 ${styles.sectionHeading}`}>
              {subTitle}
            </h2>
            <div
              onWheel={handleWheel}
              ref={scrollContainerRef}
              className={`${styles.midContainer}`}
            >
              {currentProject?.map((item: any, index: number) => (
                <img
                  key={index}
                  className={`${styles.image}`}
                  src={item.image}
                  alt=""
                />
              ))}
            </div>
          </div>
          <div className={`${styles.timelineContainer}`}>
            <Timeline timelineData={timelinedata} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SeoProjectView;
