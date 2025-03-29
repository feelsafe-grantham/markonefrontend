import { useEffect, useState } from "react";
import { BASE_URL } from "../static/varNames";
const useFetchBlogDetail = async (blogId: number | null) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const fetchData = async () => {
    try {
      const response: any = await fetch(BASE_URL + `/blog/${blogId}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data: any = await response.data.data;
      setData(data);
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
