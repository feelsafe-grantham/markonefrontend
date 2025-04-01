import { useEffect, useState } from "react";
import { BASE_URL } from "../static/varNames";
import { BlogListResponse } from "../../types/contentTypes";
const useFetchBlogList = (): {
  data: BlogListResponse;
  loading: boolean;
  error: any;
} => {
  const [data, setData] = useState<BlogListResponse>({
    blogs: [],
    f_blogs: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const fetchData = async () => {
    try {
      const response = await fetch(BASE_URL + "get-blog-for-search/");
      if (!response.ok) {
        throw new Error(`Error fetching blog: ${response.statusText}`);
      }
      const data = await response.json();
      setData(data.data);
    } catch (error) {
      setError("error");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return { data, loading, error };
};

export default useFetchBlogList;
