import styles from "./Card.module.css";
import { NavLink } from "react-router-dom";
interface CtaCardProps {
    type?: "testimonial" | "connect" | "project" | "blog" | "profile" | "e-book" | "contact-us" | "plans";
    link: string
}

const CtaCard = ({ type, link = "#", }: Readonly<CtaCardProps>) => {
    const cardObj = {
        image: "/images/testimonials.png",
        title: "Testimonial",
    }
    if (type === "testimonial") {
        cardObj.image = "/images/testimonialsnew.png";
        cardObj.title = "Testimonial";
    }
    else if (type === "connect") {
        cardObj.image = "/images/callNew.png";
        cardObj.title = "Connect";
    }
    else if (type === "project") {
        cardObj.image = "/images/resultnew.png";
        cardObj.title = "Projects";
    }
    else if (type === "blog") {
        cardObj.image = "/images/resultnew.png";
        cardObj.title = "Blog";
    }
    else if (type === "profile") {
        cardObj.image = "/images/resultnew.png";
        cardObj.title = "Contact Us";
    }
    else if (type === "e-book") {
        cardObj.image = "/images/bookNew.png";
        cardObj.title = "E-Book";
    }
    else if (type === "contact-us") {
        cardObj.image = "/images/callNew.png";
        cardObj.title = "Contact Us";
    }
    else if (type === "plans") {
        cardObj.image = "/images/resultnew.png";
        cardObj.title = "Plans";
    }


    return (
        <NavLink to={link} className={({ isActive }) => isActive ? `${styles.card} ${styles.active}` : `${styles.card}`}>
            <img
                className={`h-12 mx-auto ${styles.cardImage}`}
                src={cardObj.image}
                alt={cardObj.title}
            />
            <h2 className={`text-center text-sm ${styles.cardTitle}`}>{cardObj.title === "Result" ? "Project" : cardObj.title}</h2>
        </NavLink>
    );
}

export default CtaCard;