import { useEffect } from "react";

const useCustomBack = (customBack: () => void) => {
  useEffect(() => {
    const handlePopState = (e: PopStateEvent) => {
      e.preventDefault();
      customBack();
    };

    window.addEventListener("popstate", handlePopState);
    history.pushState(null, "", location.href);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [customBack]);
};

export default useCustomBack;
