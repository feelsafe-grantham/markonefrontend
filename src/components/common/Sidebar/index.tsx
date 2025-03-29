import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";
interface links {
    name: string;
    url: string
}
const Sidebar = ({ links = [
    { name: "IOS App", url: "/" },
] }: { links: links[] }) => {

    return (
        <div className={`${styles.sidebarContainer} scrollbar-hidden trans-black-bg`}>
            {links.map((link, index) => {
                return (
                    <Link className={`${styles.link}`} key={index} to={link.url}>
                        {link.name}
                    </Link>
                );
            })}
        </div>
    );
}

export default Sidebar;