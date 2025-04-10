import { useEffect, useState } from "react";
import { BASE_URL } from "../static/varNames";
import { AlertProps } from "../../types/componentTypes";
const useReview = (): {
  data: AlertProps;
  loading: boolean;
  error: any;
  fetchData: () => Promise<void>;
} => {
  const [data, setData] = useState<AlertProps>({
    message: "",
    name: "",
    emoji: "",
    segment: "",
    type: "comment",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const fetchData = async () => {
    try {
      const response = await fetch(BASE_URL + "get-reviews/");
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
  return { data, loading, error, fetchData };
};

export default useReview;
