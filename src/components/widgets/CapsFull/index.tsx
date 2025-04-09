import styles from "./RedCaps.module.css";

interface RedCapsProps {
  text?: string;
  type: "green" | "red" | "blue";
  size?: "small" | "medium" | "large";

  onClick?: () => void;
}

const CapsFull = ({
  text = "",
  type = "green",
  size = "medium",

  onClick,
}: Readonly<RedCapsProps>) => {
  const capsuleClass =
    type === "green"
      ? styles.greenCaps
      : type === "blue"
        ? styles.blueCaps
        : styles.redCaps;
  const sizeClass =
    size === "small"
      ? styles.small
      : size === "large"
        ? styles.large
        : styles.medium;

  return (
    <button
      onClick={onClick}
      className={`${capsuleClass} ${sizeClass} ${styles.redCaps} ${styles.capsuleContainer} ${styles.capsuleContainerSmall}`}
    >
      <h3 className={`text-white-shadow ${styles.capsuleText}`}>{text}</h3>
    </button>
  );
};

export default CapsFull;
