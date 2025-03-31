
import React, { useRef, useState } from "react";
import Sidebar from "../../components/common/Sidebar";
import styles from "./TestimonialView.module.css"

const TestimonialView = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const handleWheel = (e: React.WheelEvent) => {
        if (scrollContainerRef.current) {
            e.preventDefault();
            scrollContainerRef.current.scrollLeft += e.deltaY;
        }
    };

    const testimonials = {
        "client1": {
            client_image: "/images/user.jpg",
            client_name: "Alice Johnson",
            client_segment: "Software Engineer",
            stars: 5,
            images: [
                "/images/project2.png",
                "/images/project1.png",
                "/images/project4.png",
            ]
        },
        "client2": {
            client_image: "/images/user.jpg",
            client_name: "Bob Smith",
            client_segment: "Marketing Specialist",
            stars: 3,
            images: [
                "/images/project4.png",
                "/images/project1.png",
                "/images/project2.png",
            ]
        },
        "client3": {
            client_image: "/images/user.jpg",
            client_name: "Charlie Brown",
            client_segment: "Graphic Designer",
            stars: 4,
            images: [
                "/images/project2.png",
                "/images/project4.png",
                "/images/project1.png",
            ]
        },
        "client4": {
            client_image: "/images/user.jpg",
            client_name: "David Lee",
            client_segment: "Content Writer",
            stars: 5,
            images: [
                "/images/project4.png",
                "/images/project2.png",
                "/images/project1.png",
            ]
        },
        "client5": {
            client_image: "/images/user.jpg",
            client_name: "Eve Carter",
            client_segment: "Data Scientist",
            stars: 4,
            images: [
                "/images/project1.png",
                "/images/project4.png",
                "/images/project2.png",
            ]
        },
        "client6": {
            client_image: "/images/user.jpg",
            client_name: "Frank Turner",
            client_segment: "Product Manager",
            stars: 5,
            images: [
                "/images/project2.png",
                "/images/project4.png",
                "/images/project1.png",
            ]
        },
        "client7": {
            client_image: "/images/user.jpg",
            client_name: "Grace Williams",
            client_segment: "Photographer",
            stars: 3,
            images: [
                "/images/project1.png",
                "/images/project2.png",
                "/images/project4.png",
            ]
        },
        "client8": {
            client_image: "/images/user.jpg",
            client_name: "Henry Jackson",
            client_segment: "Web Developer",
            stars: 4,
            images: [
                "/images/project4.png",
                "/images/project1.png",
                "/images/project2.png",
            ]
        },
        "client9": {
            client_image: "/images/user.jpg",
            client_name: "Isabel Scott",
            client_segment: "UI/UX Designer",
            stars: 5,
            images: [
                "/images/project1.png",
                "/images/project2.png",
                "/images/project4.png",
            ]
        },
        "client10": {
            client_image: "/images/user.jpg",
            client_name: "Jack Davis",
            client_segment: "SEO Specialist",
            stars: 3,
            images: [
                "/images/project2.png",
                "/images/project4.png",
                "/images/project1.png",
            ]
        },
        "client11": {
            client_image: "/images/user.jpg",
            client_name: "Kathy Thomas",
            client_segment: "Business Consultant",
            stars: 4,
            images: [
                "/images/project4.png",
                "/images/project1.png",
                "/images/project2.png",
            ]
        },
        "client12": {
            client_image: "/images/user.jpg",
            client_name: "Leo Martinez",
            client_segment: "Sales Executive",
            stars: 5,
            images: [
                "/images/project1.png",
                "/images/project4.png",
                "/images/project2.png",
            ]
        },
    }
    type ClientKey = keyof typeof testimonials;
    const [selectedClient, setSelectedClient] = useState<ClientKey>("client1");
    const linkss = [
        { label: "Alice Johnson | Software Engineer", value: "client1", },
        { label: "Bob Smith | Marketing Specialist", value: "client2", },
        { label: "Charlie Brown | Graphic Designer", value: "client3", },
        { label: "David Lee | Content Writer", value: "client4", },
        { label: "Eve Carter | Data Scientist", value: "client5", },
        { label: "Frank Turner | Product Manager", value: "client6", },
        { label: "Grace Williams | Photographer", value: "client7", },
        { label: "Henry Jackson | Web Developer", value: "client8", },
        { label: "Isabel Scott | UI/UX Designer", value: "client9", },
        { label: "Jack Davis | SEO Specialist", value: "client10", },
        { label: "Kathy Thomas | Business Consultant", value: "client11", },
        { label: "Leo Martinez | Sales Executive", value: "client12", },
    ]


    const { client_name, client_image, client_segment, images, stars } = testimonials[selectedClient];
    const handleClick = (value: ClientKey) => {
        setSelectedClient(value);
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
    }
    return (
        <div className={` ${styles.mainContainer}`}>
            <div className={`flex space-x-4 ${styles.headingContainer}`} >
                <div className={`${styles.emptyDiv}`}></div>
                <h2 className={`${styles.mainHeading}`}>Testimonials</h2>
            </div>
            <div className={`flex space-x-4 mx-auto ${styles.contentContainer}`}>
                <Sidebar handleClick={handleClick} links={linkss} />
                <div className={`px-5 py-2 flex-1 trans-black-bg scrollbar-hidden ${styles.projectsContainer}`}>
                    <div className={`flex justify-between`}>
                        <div className={`${styles.userContainer}`}>
                            <img className={` ${styles.userImage} `} src={client_image} alt="" />
                            <h2 className={`text-2xl mb-2 ${styles.sectionHeading}`}>{client_name} | {client_segment}</h2>
                        </div>
                        <div className={`${styles.ratingContainer}`}>
                            {[...Array(stars)].map((_, index) => <span key={index}>⭐</span>)}
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
                        {images.map((image, index) => <img key={index} className={`${styles.testimonialImage} ${styles.image}`} src={image} alt="" />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialView;