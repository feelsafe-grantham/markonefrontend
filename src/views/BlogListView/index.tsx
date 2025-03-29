import styles from "./BlogListView.module.css"
import BlogCard from "../../components/BlogComponents/BlogCard";
import BlogFeaturedCard from "../../components/BlogComponents/BlogFeaturedCard";
import { BlogListType } from "../../types/contentTypes";
const BlogListView = () => {
    const blogs: BlogListType[] = [
        {
            id: 1,
            title: "This is blog title and i am clapoing it herer",
            date: "8 March 2025",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nam, doloremque quam aperiam asperiores, nobis, hic veritatis corporis amet deserunt  nobis, hic veritatis corporis amet deserunt"
        },
        {
            id: 2,
            title: "This is blog title and i am clapoing it herer",
            date: "8 March 2025",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nam, doloremque quam aperiam asperiores, nobis, hic veritatis corporis amet deserunt  nobis, hic veritatis corporis amet deserunt"
        },
        {
            id: 3,
            title: "This is blog title and i am clapoing it herer",
            date: "8 March 2025",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nam, doloremque quam aperiam asperiores, nobis, hic veritatis corporis amet deserunt  nobis, hic veritatis corporis amet deserunt"
        },
        {
            id: 4,
            title: "This is blog title and i am clapoing it herer",
            date: "8 March 2025",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nam, doloremque quam aperiam asperiores, nobis, hic veritatis corporis amet deserunt  nobis, hic veritatis corporis amet deserunt"
        },
    ]
    const fBlogs: BlogListType[] = [
        {
            id: 1,
            cover_image: "/images/blogFeature.png",
            title: "This is blog title and i am clapoing it herer",
            date: "8 March 2025",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nam, doloremque quam aperiam asperiores, nobis, hic veritatis corporis amet deserunt  nobis, hic veritatis corporis amet deserunt"
        },
        {
            id: 2,
            cover_image: "/images/blogFeature.png",
            title: "This is blog title and i am clapoing it herer",
            date: "8 March 2025",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nam, doloremque quam aperiam asperiores, nobis, hic veritatis corporis amet deserunt  nobis, hic veritatis corporis amet deserunt"
        },
        {
            id: 3,
            cover_image: "/images/blogFeature.png",
            title: "This is blog title and i am clapoing it herer",
            date: "8 March 2025",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nam, doloremque quam aperiam asperiores, nobis, hic veritatis corporis amet deserunt  nobis, hic veritatis corporis amet deserunt"
        },
        {
            id: 4,
            cover_image: "/images/blogFeature.png",
            title: "This is blog title and i am clapoing it herer",
            date: "8 March 2025",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nam, doloremque quam aperiam asperiores, nobis, hic veritatis corporis amet deserunt  nobis, hic veritatis corporis amet deserunt"
        },


    ];
    return (
        <div className={`${styles.mainContainer} `}>
            <div className={`scrollbar-hidden ${styles.blogsCardContainer}`}>
                {blogs.length > 0 ? blogs.map((blog, index) => <BlogCard key={index} blog={blog} />) : <div className={`${styles.noBlogFound}`}>No Blog Found</div>
                }
            </div>
            <div className={`scrollbar-hidden ${styles.featuredBlogsContainer}`}>
                {fBlogs.length > 0 ? fBlogs.map((blog, index) => <BlogFeaturedCard key={index} blog={blog} />) : <div className={`${styles.noBlogFound}`}>No Blog Found</div>}
            </div>
        </div>

    )
}

export default BlogListView;