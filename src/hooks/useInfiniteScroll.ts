import { useState, useEffect, useRef } from "react";

function useInfiniteScroll<T>(
  fetchData: any,
  hasMoreData: boolean,
  setHasMoreData: any
): [T[], boolean] {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const pageRef = useRef(1);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const handleIntersection = async (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      if (entry.isIntersecting && !loading && hasMoreData) {
        setLoading(true);
        const newData = await fetchData(pageRef.current);
        if (newData.length === 0) {
          setHasMoreData(false);
        } else {
          setData((prevData) => [...prevData, ...newData]);
          pageRef.current += 1;
        }
        setLoading(false);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    return () => {
      observer.disconnect();
    };
  }, [loading, hasMoreData]);

  return [data, loading];
}

export default useInfiniteScroll;
