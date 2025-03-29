import styles from "./CapsHalf.module.css";
interface RedCapsProps {
    text?: string;
    type: "green" | "red" | "blue";
    size?: "small" | "medium" | "large";
    onClick?: () => void
}
const CapsHalf = ({
    text = "",
    type = "green",
    size = "medium",
    onClick,
}: Readonly<RedCapsProps>) => {
    const capsuleClass = type === "green" ? styles.greenCaps : type === "blue" ? styles.blueCaps :
        styles.redCaps;
    const sizeClass =
        size === "small" ? styles.small : size === "large" ? styles.large : styles.medium;
    return (
        <div onClick={onClick} className={`${capsuleClass} ${sizeClass} ${styles.redCaps} ${styles.capsuleContainer} ${styles.capsuleContainerSmall} `}>
            <h3>{text}</h3>
        </div>
    );
}

export default CapsHalf;