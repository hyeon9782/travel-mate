import styled from "styled-components";
import CityTag from "./CityTag";
import { SwiperSlide, Swiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";

const CityTags = ({ tags }: any) => {
  return (
    <CityTagsBlock>
      <Swiper slidesPerView={3}>
        {tags.map((tag, index) => (
          <SwiperSlide key={index}>
            <CityTag>{tag}</CityTag>
          </SwiperSlide>
        ))}
      </Swiper>
    </CityTagsBlock>
  );
};

const CityTagsBlock = styled.div`
  background-color: #faf9fc;
  padding: 10px;
`;

export default CityTags;
