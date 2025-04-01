import { useEffect, useState } from "react";
import { BASE_URL, Endpoint } from "../static/varNames";
const useFetchProjects = (endpoint: Endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  const fetchData = async () => {
    try {
      const response = await fetch(BASE_URL + "get-project/" + endpoint);
      if (!response.ok) {
        throw new Error(`Error fetching blog: ${response.statusText}`);
      }
      const data = await response.json();
      setData(data.data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error };
};

export default useFetchProjects;
