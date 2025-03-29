import { Link } from "react-router-dom";
import styles from "./BlogFeaturedCard.module.css"
import { BlogListType } from "../../../types/contentTypes";
import { generateBlogSlug } from "../../../utilities/helper";
const BlogFeaturedCard = ({ blog }: { blog: BlogListType }) => {
    const slug = generateBlogSlug(blog.id, blog.title);
    return (
        <Link to={`${slug}`} className={`${styles.blogCard}`}>
            <img className={`${styles.blogCover}`} src={blog.cover_image} alt={blog.title} />
            <h2 className={`clamp-1 ${styles.featuredTextPosition} ${styles.featuredTextFont}`} >{blog.title}
            </h2>
        </Link>
    )
}
export default BlogFeaturedCard;