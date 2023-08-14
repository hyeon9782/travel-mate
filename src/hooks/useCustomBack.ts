import { useEffect } from "react";

const useCustomBack = (customBack: () => void) => {
  useEffect(() => {
    console.log("들어옴");

    (() => {
      console.log("발동됨");

      history.pushState(null, "", location.href);
      window.addEventListener("popstate", customBack);
    })();

    return () => {
      window.removeEventListener("popstate", customBack);
    };
  }, [customBack]);
};

export default useCustomBack;
