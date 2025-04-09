import { BlogDetailType } from "../../../types/contentTypes";
import styles from "./Blogdetail.module.css"
import parse from "html-react-parser"
const Blogdetail = ({ blog }: { blog: BlogDetailType | null }) => {
    if (!blog) return null
    return (
        <div className={`trans-black-bg scrollbar-hidden ${styles.mainContainer}`}>
            <div className={`${styles.blogMetaContainer}`}>
                <h1 className={`${styles.blogTitle}`}>{blog?.title}</h1>
                <div className={`${styles.blogMeta}`}>
                    <div className={`flex  ${styles.authorContainer}`}>
                        <img
                            className="h-6"
                            src={blog?.author_image}
                            alt={blog?.author_name}
                        />
                        <p className={`${styles.ellipsis}`}>{blog?.author_name}</p>
                    </div>
                    <p className={`${styles.ellipsis}`}>{blog?.date}</p>
                    <p className={`${styles.ellipsis}`}>{blog?.read_min}</p>
                </div>
            </div>
            <div className={`${styles.blogContentContainer} `}>
                {blog?.content && <>{parse(blog?.content)}</>}
            </div>
        </div>
    )
};
export default Blogdetail;