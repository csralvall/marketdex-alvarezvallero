import { useState, useEffect } from 'react';

export const useFetch = (url, initialValue) => {
  const [data, setData] = useState(initialValue);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error - status: ${response.status}`);
      } else {
        const fetchedJson = await response.json();
        setData(fetchedJson);
      }
      setLoading(false);
    }

    if(mounted) fetchData();

    return () => mounted = false;
  }, [url]);

  return { loading, data };
};
