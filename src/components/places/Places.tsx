import styled from "styled-components";
import Place from "./Place";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
type Props = {
  places: [];
  handleClick: (place: any) => void;
};
const Places = ({ places, handleClick }: Props) => {
  return (
    <PlacesBlock>
      <Swiper slidesPerView={5}>
        {places.map((place, index) => (
          <SwiperSlide key={index}>
            <Place key={index} place={place} handleClick={handleClick} />
          </SwiperSlide>
        ))}
      </Swiper>
    </PlacesBlock>
  );
};

const PlacesBlock = styled.article`
  padding: 10px;
  width: 100%;
`;

export default Places;
