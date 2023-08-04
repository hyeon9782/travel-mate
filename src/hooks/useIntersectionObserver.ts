import { useRef } from "react";

const useIntersectionObserver = (cb: () => void) => {
  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          cb();
        });
      },
      { threshold: 0.4 } //40%가 보일때를 기본 값으로 설정 했습니다.
    )
  );

  /**
   *@returns {()=>void} unobserve:()=>viod 를 반환한다.
   */
  const observe = (element: HTMLElement) => {
    observer.current.observe(element);
    return () => observer.current.unobserve(element);
  };
  return { observe };
};

export default useIntersectionObserver;
