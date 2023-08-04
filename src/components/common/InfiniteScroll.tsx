import React, { useState, useEffect, useRef } from "react";
type Props = {
  children: React.ReactNode;
  fetchData: any;
};
function InfiniteScroll({ children, fetchData }: Props) {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMoreData, setHasMoreData] = useState(true); // 추가된 상태
  const divRef = useRef(null);

  const pageRef = useRef(1); // 페이지 번호를 useRef를 이용해 상태로 관리

  useEffect(() => {
    const options = {
      root: null, // viewport를 기준으로 교차를 감지합니다.
      rootMargin: "0px",
      threshold: 0.1, // 요소의 10%가 뷰포트에 들어오면 교차로 판단합니다.
    };

    const handleIntersection = async (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      if (entry.isIntersecting && !loading && hasMoreData) {
        // 추가된 조건
        setLoading(true);
        const newData = await fetchData(pageRef.current);
        if (newData.data.length === 0) {
          setHasMoreData(false); // 더 이상 데이터가 없을 때 상태 업데이트
        } else {
          setData((prevData) => [...prevData, ...newData.data]);
          pageRef.current += 1; // 다음 페이지를 위해 페이지 번호 업데이트
        }
        setLoading(false);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (divRef.current) observer.observe(divRef.current);

    return () => {
      if (divRef.current) observer.unobserve(divRef.current); // 컴포넌트 언마운트 시 옵저버 해제
    };
  }, [loading, hasMoreData]); // 추가된 의존성 배열

  return (
    <>
      {React.Children.map(children, (child: any) =>
        React.cloneElement(child, { data })
      )}
      <div ref={divRef} style={{ height: "10px" }}></div>
      {loading && <div>Loading...</div>}
    </>
  );
}

export default InfiniteScroll;
