import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";
interface links {
    label: string;
    value: string
}
const Sidebar = ({ links = [
    { label: "IOS App", value: "ios", },
], handleClick }: { links: links[], handleClick?: any }) => {

    return (
        <div className={`${styles.sidebarContainer} scrollbar-hidden trans-black-bg`}>
            {links.map((link, index) => {
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