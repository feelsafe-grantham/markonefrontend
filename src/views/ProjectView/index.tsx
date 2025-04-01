
import React, { useRef } from 'react';
import styles from "./ProjectView.module.css"
import Sidebar from "../../components/common/Sidebar";
import Timeline from "../../components/common/Timeline";
import useProjectView from './useProjectView';
const ProjectView = () => {

    const { title, error, subTitle, timelinedata, setSelectedType, links, loading, currentProject } = useProjectView("development");
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
        return <div>Loading...</div>
    }
    if (error) {
        return null
    }

    return (
        <div className={`flex flex-col space-x-4 mx-auto ${styles.mainContainer}`}>
            <div className={`flex space-x-4 ${styles.headingContainer}`} >
                <div className={`${styles.emptyDiv}`}></div>
                <h2 className={`${styles.mainHeading}`}>{title}</h2>
            </div>
            <div className={`flex space-x-4 mx-auto ${styles.contentContainer}`}>
                <Sidebar handleClick={handleLinkClick} links={links} />
                <div className={`trans-black-bg scrollbar-hidden ${styles.projectsContainer}`}>
                    <h2 className={`${styles.sectionHeading}`}>{subTitle}</h2>
                    <div
                        onWheel={handleWheel}
                        ref={scrollContainerRef}
                        className={`${styles.midContainer}`}
                    >
                        {currentProject?.map((item: any, index: number) => <img
                            key={index} className={`${styles.image}`} src={item.image} alt={`Project ${index + 1}`} />
                        )}

                    </div>
                </div>
                <div className={`${styles.timelineContainer}`}>
                    <Timeline timelineData={timelinedata} />
                </div>

            </div>
        </div >
    );


}

export default ProjectView;