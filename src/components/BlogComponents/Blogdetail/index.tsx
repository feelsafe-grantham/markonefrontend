import { BlogDetailType } from "../../../types/contentTypes";
import styles from "./Blogdetail.module.css"
import parse from "html-react-parser"
const Blogdetail = ({ blog }: { blog: BlogDetailType }) => {
    return (
        <div className={`trans-black-bg scrollbar-hidden ${styles.mainContainer} `}>
            <div className="flex flex-col justify-center items-center gap-4">
                <h1 className={`${styles.blogTitle}`}>{blog.title}</h1>
                <div className="flex justify-center items-center gap-4">
                    <div className={`flex gap-2 ${styles.authorContainer}`}>
                        <img
                            className="h-6"
                            src={blog.author_image}
                            alt=""
                        />
                        <p>{blog.author_name}</p>
                    </div>
                    <p>{blog.date}</p>
                    <p>{blog.read_min}</p>
                </div>
            </div>
            <div className={`${styles.blogContentContainer} `}>
                {blog.content && <>{parse(blog.content)}</>}
            </div>
        </div>
    )
};
export default Blogdetail;