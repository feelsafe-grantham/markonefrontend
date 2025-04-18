import React, { useRef } from "react";
import styles from "./Project.module.css"
// import styles from "./ProjectView.module.css";
import Sidebar from "../../components/common/Sidebar";
import Timeline from "../../components/common/Timeline";
import useProjectView from "./useProjectView";
import LoadingProjects from "../../components/common/LoadingProjects";
import { Endpoint } from "../../utilities/static/varNames";
import PageSeo from "../../components/common/PageSeo";
import { useImageViewer } from "../../context/ImageViewerContext";
const ProjectView = ({ endpoint }: { endpoint: Endpoint }) => {
  const {
    error,
    subTitle,
    timelinedata,
    setSelectedType,
    links,
    loading,
    currentProject,
  } = useProjectView(endpoint);
  const { openImageViewer } = useImageViewer();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const handleWheel = (e: React.WheelEvent) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += e.deltaY;
    }
  };

  const imageArray = currentProject?.map((item: any) => item.image);

  const handleLinkClick = (e: React.MouseEvent, value: string) => {
    e.preventDefault();
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
      <PageSeo
        title={endpoint === "development" ? "Website Development Services That Drive Results | Markone" : "SEO Services That Rank Websites on Google | Markone"}
        description={endpoint === "development" ? "Markone’s website development services create high-performing websites that rank and convert. Get a site designed to grow your business and lead generation." : "Improve your Google ranking with Markone’s SEO services. Our expert strategies drive traffic, enhance visibility, and increase conversions for your business."}
      />
      <div className={`${styles.sidebarContainer}`}>
        <Sidebar handleClick={handleLinkClick} links={links} />
      </div>
      <div className={`trans-black-bg  ${styles.contentContainer}`}>
        <h2 className={`${styles.sectionHeading}`}>{subTitle}</h2>
        <div
          onWheel={handleWheel}
          ref={scrollContainerRef}
          className={`${styles.midContainer} `}
        >

          {imageArray?.map((item: string, index: number) => (
            <img
              key={index}
              src={item}
              alt={`Project ${index + 1}`}
              className={`${styles.imageVer}`}
              onClick={() => openImageViewer(imageArray, index)}
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
