import { useParams } from "react-router-dom";
import Blogdetail from "../../components/BlogComponents/Blogdetail";
import { BlogDetailType } from "../../types/contentTypes";
import { getIdFromSlug } from "../../utilities/helper";
import useFetchBlogDetail from "../../utilities/customHooks/useFetchBlogDetail";
const BlogDetailView = () => {
    const blog: BlogDetailType =
    {
        id: 1,
        title: "This is blog title and i am clapoing it herer",
        date: "8 March 2025",
        author_image: "https://www.amanpandey.com/images/aman.png",
        author_name: "Aman Pandey",
        read_min: "5 min read",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nam, doloremque quam aperiam asperiores, nobis, hic veritatis corporis amet deserunt  nobis, hic veritatis corporis amet deserunt",
        content: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nam, doloremque quam aperiam asperiores, nobis, hic veritatis corporis amet deserunt  nobis, hic veritatis corporis amet deserunt</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nam, doloremque quam aperiam asperiores, nobis, hic veritatis corporis amet deserunt  nobis, hic veritatis corporis amet deserunt</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nam, doloremque quam aperiam asperiores, nobis, hic veritatis corporis amet deserunt  nobis, hic veritatis corporis amet deserunt</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nam, doloremque quam aperiam asperiores, nobis, hic veritatis corporis amet deserunt  nobis, hic veritatis corporis amet deserunt</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nam, doloremque quam aperiam asperiores, nobis, hic veritatis corporis amet deserunt  nobis, hic veritatis corporis amet deserunt</p>",
        cover_image: "https://www.amanpandey.com/images/aman.png",
        youtube_link: "https://www.youtube.com/watch?v=2g8v0j1x4aM",
    }
    const { slug } = useParams();
    const blogId = getIdFromSlug(slug || "");
    const { loading, data, error } = useFetchBlogDetail(blogId);
    console.log("this is data on page::", data);
    if (loading) {
        return (
            <div>
                laskdjf
            </div>
        )
    }
    return (
        <Blogdetail blog={data} />
    );
}

export default BlogDetailView;