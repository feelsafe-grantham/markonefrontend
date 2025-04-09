import React, { useRef } from "react";
import styles from "./Project.module.css"
// import styles from "./ProjectView.module.css";
import Sidebar from "../../components/common/Sidebar";
import Timeline from "../../components/common/Timeline";
import useProjectView from "./useProjectView";
import LoadingProjects from "../../components/common/LoadingProjects";
import { Endpoint } from "../../utilities/static/varNames";
const ProjectView = ({ endpoint }: { endpoint: Endpoint }) => {
  const {
    title,
    error,
    subTitle,
    timelinedata,
    setSelectedType,
    links,
    loading,
    currentProject,
  } = useProjectView(endpoint);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const handleWheel = (e: React.WheelEvent) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += e.deltaY;
    }
  };

  const handleLinkClick = (value: string) => {
    setSelectedType(value);
    // scroll to left of the container with smooth animation
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  if (loading) {
    return <LoadingProjects />;
  }
  if (error) {
    return null;
  }
  return (
    <div className={`${styles.mainContainer}`}>
      <div className={`${styles.sidebarContainer}`}>
        <Sidebar links={links} />
      </div>
      <div className={`trans-black-bg scrollbar-hidden   ${styles.contentContainer}`}>
        <h2 className={`${styles.sectionHeading}`}>{subTitle}</h2>
        <div
          onWheel={handleWheel}
          ref={scrollContainerRef}
          className={`${styles.midContainer} scrollbar-hidden`}
        >
          {["/images/vartical1.png", "/images/vartical1.png", "/images/vartical1.png", "/images/vartical1.png", "/images/vartical1.png", "/images/vartical1.png", "/images/vartical1.png",]?.map((item: any, index: number) => (
            <img
              key={index}
              src={item}
              alt={`Project ${index + 1}`}
              className={`${styles.imageVer}`}
            />
          ))}
        </div>
      </div>
      <div className={`${styles.timelineContainer}`}>
        <Timeline timelineData={timelinedata} />
      </div>
    </div>
  );
};

export default ProjectView;
