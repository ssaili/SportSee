import { useState, useEffect } from "react";

const useFetch = (isMockData, url, mockData, userIndex) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isMockData) {
          const result = mockData.filter(
            (user) =>
              user.id === parseInt(userIndex) ||
              user.userId === parseInt(userIndex),
          )[0];
          setData(result);
        } else {
          const response = await fetch(url);
          const result = await response.json();
          setData(result.data);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, isMockData]);

  return { data, loading, error };
};

export default useFetch;
