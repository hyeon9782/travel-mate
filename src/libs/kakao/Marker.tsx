import React, { useEffect } from "react";
const { kakao } = window;
export const Marker = () => {
  useEffect(() => {
    const marker = new kakao.maps.Marker({});
  }, []);
  return <div>Marker</div>;
};
