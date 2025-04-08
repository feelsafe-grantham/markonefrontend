import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";
interface links {
    label: string;
    value: string
}
const Sidebar = ({ links = [
    { label: "IOS App", value: "ios", },
], handleClick }: { links: links[], handleClick?: any }) => {
    const tempLinks = [
        { label: "IOS App", value: "ios", },
        { label: "IOS App", value: "ios", },
        { label: "IOS App", value: "ios", },
        { label: "IOS App", value: "ios", },
        { label: "IOS App", value: "ios", },
        { label: "IOS App", value: "ios", },
        { label: "IOS App", value: "ios", },
        { label: "IOS App", value: "ios", },
        { label: "IOS App", value: "ios", },
        { label: "IOS App", value: "ios", },
    ]
    return (
        <div className={`scrollbar-hidden trans-black-bg ${styles.sidebarContainer}`}>
            {tempLinks.map((link, index) => {
                return (
                    <Link
                        onClick={() => handleClick(link.value, index)}
                        className={`${styles.link}`}
                        key={index}
                        to={"#"}
                    >
                        {link.label}
                    </Link>
                );
            })}
        </div>
    );
}

export default Sidebar;