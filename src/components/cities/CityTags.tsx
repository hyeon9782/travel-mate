import styled from "styled-components";
import CityTag from "./CityTag";
import { SwiperSlide, Swiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";

const CityTags = ({ tags }: any) => {
  return (
    <CityTagsBlock>
      <Swiper slidesPerView={3} className="swiper">
        {tags.map((tag, index) => (
          <CityTagWrapper key={index}>
            <CityTag>{tag}</CityTag>
          </CityTagWrapper>
        ))}
      </Swiper>
    </CityTagsBlock>
  );
};

const CityTagsBlock = styled.div`
  background-color: #faf9fc;
  padding: 10px;
  /* .swiper {
    display: flex;
  } */
`;

const CityTagWrapper = styled(SwiperSlide)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default CityTags;
