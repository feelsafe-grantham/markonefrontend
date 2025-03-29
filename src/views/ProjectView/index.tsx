
import React, { useRef } from 'react';
import styles from "./ProjectView.module.css"
import Sidebar from "../../components/common/Sidebar";
import Timeline from "../../components/common/Timeline";
const ProjectView = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const handleWheel = (e: React.WheelEvent) => {
        if (scrollContainerRef.current) {
            e.preventDefault();
            scrollContainerRef.current.scrollLeft += e.deltaY;
        }
    };
    const links = [
        { name: "IOS App", url: "/" },
        { name: "Android App", url: "/" },
        { name: "Website | Portal", url: "/" },
        { name: "CRM", url: "/" },
        { name: "ERM", url: "/" },
        { name: "Software", url: "/" },
        { name: "IOS App", url: "/" },
        { name: "Android App", url: "/" },
    ]
    const timelinedata =
        [
            "Start",
            "Requirement Analysis",
            "Prototype Building",
            "Finilizing Ui/Ux",
            "Setting Timeline",
            "Build Beta Version/Test",
            "Deploy Prod Version",
            "Improvement Phase",
        ]

    const linkss = [
        { label: "IOS App", value: "", },
        { label: "Android App", value: "", },
        { label: "Website | Portal", value: "", },
        { label: "CRM", value: "", },
        { label: "ERP", value: "", },
        { label: "Software", value: "", },
        { name: "Android App", value: "/" },
    ]

    return (
        <div className={`flex flex-col space-x-4 mx-auto ${styles.mainContainer}`}>
            <div className={`flex space-x-4 ${styles.headingContainer}`} >
                <div className={`${styles.emptyDiv}`}></div>
                <h2 className={`${styles.mainHeading}`}>Projects</h2>
            </div>
            <div className={`flex space-x-4 mx-auto ${styles.contentContainer}`}>
                <Sidebar links={links} />
                <div className={`px-5 py-2 flex-1 trans-black-bg scrollbar-hidden ${styles.projectsContainer}`}>
                    <h2 className={`text-2xl mb-2 ${styles.sectionHeading}`} >Project Summary</h2>
                    <div
                        onWheel={handleWheel}
                        ref={scrollContainerRef}
                        className={`${styles.midContainer}`}
                    >
                        <img className={`${styles.image}`} src="/images/projects.png" alt="" />
                        <img className={`${styles.image}`} src="/images/projects.png" alt="" />
                        <img className={`${styles.image}`} src="/images/projects.png" alt="" />
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