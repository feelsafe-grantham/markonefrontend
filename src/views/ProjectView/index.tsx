
import React, { useState, useRef } from 'react';
import styles from "./ProjectView.module.css"
import Sidebar from "../../components/common/Sidebar";
import Timeline from "../../components/common/Timeline";
import useFetchProjects from '../../utilities/customHooks/useFetchProjects';
const ProjectView = () => {
    const [timelinedata, setTimelinedata] = useState([
        "Start",
        "Requirement Analysis",
        "Prototype Building",
        "Finilizing Ui/Ux",
        "Setting Timeline",
        "Build Beta Version/Test",
        "Deploy Prod Version",
        "Improvement Phase",
    ]);
    const [projects, setProjects] = useState({
        "ios": [
            { image: "/images/project1.png", },
            { image: "/images/project2.png", },
            { image: "/images/project3.png", },
            { image: "/images/project4.png", },
        ],
        "android": [
            { image: "/images/project2.png", },
            { image: "/images/project3.png", },
            { image: "/images/project4.png", },
            { image: "/images/project1.png", },
        ],
        "web": [
            { image: "/images/project3.png", },
            { image: "/images/project4.png", },
            { image: "/images/project1.png", },
            { image: "/images/project2.png", },
        ],
    });
    const [links, setLinks] = useState<{ label: string, value: string }[]>(
        [
            { label: "IOS App", value: "ios" },
            { label: "Android App", value: "android" },
            { label: "Web App", value: "web" },
            { label: "IOS App", value: "ios" },
            { label: "Android App", value: "android" },
            { label: "Web App", value: "web" },
            { label: "IOS App", value: "ios" },
            { label: "Android App", value: "android" },
            { label: "Web App", value: "web" },

        ]);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const handleWheel = (e: React.WheelEvent) => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft += e.deltaY;
        }
    };
    // const { data, loading, error } = useFetchProjects("seo")
    // const timeline = data?.timeline.replace(/'/g, '"');
    // const timelinedataApi = timeline && JSON.parse(timeline)

    const [selectedType, setSelectedType] = useState<"ios" | "android" | "web">("ios");
    const handleLinkClick = (value: "ios" | "android" | "web") => {
        setSelectedType(value);
        // scroll to left of the container with smooth animation
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
    };
    const currentProject = projects[selectedType];

    return (
        <div className={`flex flex-col space-x-4 mx-auto ${styles.mainContainer}`}>
            <div className={`flex space-x-4 ${styles.headingContainer}`} >
                <div className={`${styles.emptyDiv}`}></div>
                <h2 className={`${styles.mainHeading}`}>Projects</h2>
            </div>
            <div className={`flex space-x-4 mx-auto ${styles.contentContainer}`}>
                <Sidebar handleClick={handleLinkClick} links={links} />
                <div className={`trans-black-bg scrollbar-hidden ${styles.projectsContainer}`}>
                    <h2 className={`${styles.sectionHeading}`}>Project Summary</h2>
                    <div
                        onWheel={handleWheel}
                        ref={scrollContainerRef}
                        className={`${styles.midContainer}`}
                    >
                        {currentProject?.map((item: any, index: number) => <img
                            key={index} className={`${styles.image}`} src={item.image} alt="" />
                        )}
                    </div>
                </div>
                <div className={`${styles.timelineContainer}`}>
                    <Timeline timelineData={timelinedata} />
                </div>

            </div >
        </div >
    );


}

export default ProjectView;