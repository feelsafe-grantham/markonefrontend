import styles from "./Card.module.css";
import { Link } from "react-router-dom";
interface CtaCardProps {
    type?: "testimonial" | "connect" | "result" | "blog";
    link: string
    onClick?: () => void
}

const CtaCard = ({ type, link = "#", onClick }: Readonly<CtaCardProps>) => {
    const cardObj = {
        image: "/images/testimonials.png",
        title: "Testimonial",
    }
    if (type === "testimonial") {
        cardObj.image = "/images/testimonialsnew.png";
        cardObj.title = "Testimonial";
    }
    else if (type === "connect") {
        cardObj.image = "/images/connectNew.png";
        cardObj.title = "Connect";
    }
    else if (type === "result") {
        cardObj.image = "/images/resultnew.png";
        cardObj.title = "Result";
    }
    else if (type === "blog") {
        cardObj.image = "/images/resultnew.png";
        cardObj.title = "Blog";
    }

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    }
    return (
        <Link onClick={handleClick} to={link} className={styles.card}>
            <img
                className={`h-12 mx-auto ${styles.cardImage}`}
                src={cardObj.image}
                alt={cardObj.title}
            />
            <h2 className="text-center">{cardObj.title === "Result" ? "Project" : cardObj.title}</h2>
        </Link>
    );
}

export default CtaCard;