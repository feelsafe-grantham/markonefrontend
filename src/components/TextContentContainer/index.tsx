import styles from "./TextContentContainer.module.css";
const TextContentContainer = ({ children }: { children: React.ReactNode }) => {
    return <div className={`${styles.container} scrollbar-hidden`}>{children}</div>
};

export default TextContentContainer;