import styles from "./BlogListView.module.css";
import BlogCard from "../../components/BlogComponents/BlogCard";
import BlogFeaturedCard from "../../components/BlogComponents/BlogFeaturedCard";
import { BlogListType } from "../../types/contentTypes";
import useFetchBlogList from "../../utilities/customHooks/useFetchBlogList";
import LoadingProjects from "../../components/common/LoadingProjects";
import PageSeo from "../../components/common/PageSeo";
const BlogListView = () => {
  // const blogs: BlogListType[] = [
  //     {
  //         id: 1,
  //         title: "This is blog title and i am clapoing it herer",
  //         date: "8 March 2025",
  //         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nam, doloremque quam aperiam asperiores, nobis, hic veritatis corporis amet deserunt  nobis, hic veritatis corporis amet deserunt"
  //     },
  //     {
  //         id: 2,
  //         title: "This is blog title and i am clapoing it herer",
  //         date: "8 March 2025",
  //         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nam, doloremque quam aperiam asperiores, nobis, hic veritatis corporis amet deserunt  nobis, hic veritatis corporis amet deserunt"
  //     },
  //     {
  //         id: 3,
  //         title: "This is blog title and i am clapoing it herer",
  //         date: "8 March 2025",
  //         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nam, doloremque quam aperiam asperiores, nobis, hic veritatis corporis amet deserunt  nobis, hic veritatis corporis amet deserunt"
  //     },
  //     {
  //         id: 4,
  //         title: "This is blog title and i am clapoing it herer",
  //         date: "8 March 2025",
  //         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nam, doloremque quam aperiam asperiores, nobis, hic veritatis corporis amet deserunt  nobis, hic veritatis corporis amet deserunt"
  //     },
  // ]
  // const fBlogs: BlogListType[] = [
  //     {
  //         id: 1,
  //         cover_image: "/images/blogFeature.png",
  //         title: "This is blog title and i am clapoing it herer",
  //         date: "8 March 2025",
  //         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nam, doloremque quam aperiam asperiores, nobis, hic veritatis corporis amet deserunt  nobis, hic veritatis corporis amet deserunt"
  //     },
  //     {
  //         id: 2,
  //         cover_image: "/images/blogFeature.png",
  //         title: "This is blog title and i am clapoing it herer",
  //         date: "8 March 2025",
  //         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nam, doloremque quam aperiam asperiores, nobis, hic veritatis corporis amet deserunt  nobis, hic veritatis corporis amet deserunt"
  //     },
  //     {
  //         id: 3,
  //         cover_image: "/images/blogFeature.png",
  //         title: "This is blog title and i am clapoing it herer",
  //         date: "8 March 2025",
  //         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nam, doloremque quam aperiam asperiores, nobis, hic veritatis corporis amet deserunt  nobis, hic veritatis corporis amet deserunt"
  //     },
  //     {
  //         id: 4,
  //         cover_image: "/images/blogFeature.png",
  //         title: "This is blog title and i am clapoing it herer",
  //         date: "8 March 2025",
  //         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nam, doloremque quam aperiam asperiores, nobis, hic veritatis corporis amet deserunt  nobis, hic veritatis corporis amet deserunt"
  //     },

  // ];
  let blogss: BlogListType[] = [];
  let fBlogss: BlogListType[] = [];
  const { data, loading, error } = useFetchBlogList();
  blogss = data?.blogs;
  fBlogss = data?.f_blogs;
  if (loading) return <LoadingProjects />;
  if (error) return <div>error</div>;
  return (
    <div className={`${styles.mainContainer} `}>
      <PageSeo
        title="Insights on Website Development & SEO | Markone Blog"
        description="Stay updated with Markone’s blog for expert tips on website development & SEO strategies. Learn how to enhance your digital presence and grow your business."
      />
      <div className={`scrollbar-hidden ${styles.blogsCardContainer}`}>
        {blogss?.length > 0 ? (
          blogss.map((blog, index) => <BlogCard key={index} blog={blog} />)
        ) : (
          <div className={`${styles.noBlogFound}`}>No Blog Found</div>
        )}

      </div>
      <div className={`scrollbar-hidden ${styles.featuredBlogsContainer}`}>
        {fBlogss?.length > 0 ? (
          fBlogss.map((blog, index) => (
            <BlogFeaturedCard key={index} blog={blog} />
          ))
        ) : (
          <div className={`${styles.noBlogFound}`}>No Blog Found</div>
        )}
      </div>
    </div>
  );
};

export default BlogListView;
