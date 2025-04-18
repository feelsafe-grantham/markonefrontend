import { Link } from "react-router-dom";
import styles from "./BlogCard.module.css"
import { BlogListType } from "../../../types/contentTypes";
import { generateBlogSlug } from "../../../utilities/helper";
const BlogCard = ({ blog }: { blog: BlogListType }) => {
    const slug = generateBlogSlug(blog.id, blog.title);
    return (
        <div key={blog.id} className={`trans-black-bg ${styles.blogCard} `}>
            <h2 className={`clamp-1 ${styles.blogTitle}`}>{blog.title}</h2>
            <p className={`clamp-2 ${styles.blogInfo}`}>{blog.description}</p>

            <div className={`${styles.blogDetailContainer}`}>
                <span className={`${styles.detailChip} ${styles.date}`}>{blog.date}</span>
                <Link to={`${slug}`} className={`${styles.detailChip} ${styles.viewMoreBtn}`}> View More</Link>
            </div>
        </div>
    )
}

export default BlogCard;