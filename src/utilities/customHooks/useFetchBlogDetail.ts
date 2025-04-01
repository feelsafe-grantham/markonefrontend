import { useEffect, useState } from "react";
import { BASE_URL } from "../static/varNames";
const useFetchBlogDetail = (blogId: number | null) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const fetchData = async () => {
    try {
      const response: any = await fetch(BASE_URL + `get-blog/${blogId}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("data: ", data.data);
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

export default useFetchBlogDetail;
