
import React, { useRef, useState } from 'react';
import styles from "./SeoProjectView.module.css"
import Sidebar from "../../components/common/Sidebar";
import Timeline from "../../components/common/Timeline";
import useFetchProjects from '../../utilities/customHooks/useFetchProjects';
import { dividerClasses } from '@mui/material';
const SeoProjectView = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const handleWheel = (e: React.WheelEvent) => {
        if (scrollContainerRef.current) {
            e.preventDefault();
            scrollContainerRef.current.scrollLeft += e.deltaY;
        }
    };
    const [timelinedata, setTimelinedata] = useState([
        "Keyword Research",
        "Competitor Analysis",
        "On-Page Optimization",
        "Content Creation",
        "Technical SEO",
        "Link Building",
        "Performance Monitoring",
        "Continuous Optimization"
    ])
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
    // const { loading, data, error } = useFetchProjects("seo");
    // const { title, section_heading, projects: projectsApi, timeline } = data || {};
    // console.log(data);
    // const loading = true;

    const [links, setLink] = useState([
        { label: "IOS App", value: "ios", },
        { label: "Android App", value: "android", },
        { label: "Website | Portal", value: "web", },
        { label: "IOS App", value: "ios", },
        { label: "Android App", value: "android", },
        { label: "Website | Portal", value: "web", },
        { label: "IOS App", value: "ios", },
        { label: "Android App", value: "android", },
        { label: "Website | Portal", value: "web", },
        { label: "IOS App", value: "ios", },
        { label: "Android App", value: "android", },
        { label: "Website | Portal", value: "web", },
    ])

    const [selectedType, setSelectedType] = useState<"ios" | "android" | "web">("ios");
    const handleLinkClick = (value: "ios" | "android" | "web") => {
        setSelectedType(value);
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
    };
    const currentProject = projects[selectedType];
    // if (loading)
    //     return (
    //         <div className="flex space-x-10 justify-center">
    //             <div className="w-full sm:w-[48%] lg:w-[30%] h-[450px] bg-black animate-pulse rounded-lg"></div>
    //             <div className="w-full sm:w-[48%] lg:w-[30%] h-[450px] bg-black animate-pulse rounded-lg"></div>
    //             <div className="w-full sm:w-[48%] lg:w-[30%] h-[450px] bg-black animate-pulse rounded-lg"></div>
    //         </div>)
    return (
        <>
            <div className={`flex flex-col space-x-4 mx-auto ${styles.mainContainer}`}>
                <div className={`flex space-x-4 ${styles.headingContainer}`} >
                    <div className={`${styles.emptyDiv}`}></div>
                    <h2 className={`${styles.mainHeading}`}>SEO</h2>
                </div>
                <div className={`flex space-x-4 mx-auto ${styles.contentContainer}`}>
                    <Sidebar handleClick={handleLinkClick} links={links} />
                    <div className={`px-5 py-2 flex-1 trans-black-bg scrollbar-hidden ${styles.projectsContainer}`}>
                        <h2 className={`text-2xl mb-2 ${styles.sectionHeading}`} >Project Summary</h2>
                        <div
                            onWheel={handleWheel}
                            ref={scrollContainerRef}
                            className={`${styles.midContainer}`}
                        >
                            {currentProject?.map((item: any, index: number) => <img
                                key={index} className={`${styles.image}`} src={item.image} alt="" />
                            )}</div>
                    </div>
                    <div className={`${styles.timelineContainer}`}>
                        <Timeline timelineData={timelinedata} />
                    </div>
                </div >
            </div>
        </>
    )
}

export default SeoProjectView;



