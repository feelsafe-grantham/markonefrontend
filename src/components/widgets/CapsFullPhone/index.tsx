import styles from "./RedCaps.module.css";
import { Link } from "react-router-dom";

interface RedCapsProps {
    text?: string;
    type: "green" | "red" | "blue";
    size?: "small" | "medium" | "large";
    link: string
    onClick?: () => void;

}

const CapsFullPhone = (
    {
        text = "",
        type = "green",
        size = "medium",
        link = "/home",
        onClick,
    }: Readonly<RedCapsProps>) => {
    const capsuleClass = type === "green" ? styles.greenCaps : type === "blue" ? styles.blueCaps :
        styles.redCaps;
    const sizeClass =
        size === "small" ? styles.small : size === "large" ? styles.large : styles.medium;

    return (
        <Link onClick={onClick} to={link} className={`${capsuleClass} ${sizeClass} ${styles.redCaps} ${styles.capsuleContainer} ${styles.capsuleContainerSmall} `}>
            <h3>{text}</h3>
        </Link>
    );
};

export default CapsFullPhone;