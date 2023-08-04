import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
type Props = {
  list: [];
  children: React.ReactNode;
};
const AppSwiper = ({ list, children }: Props) => {
  return (
    <Swiper spaceBetween={10}>
      {list &&
        list.map((_, index) => (
          <SwiperSlide key={index}>{children}</SwiperSlide>
        ))}
    </Swiper>
  );
};

export default AppSwiper;
