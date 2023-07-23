import styled from "styled-components";
import PlaceItem from "./PlaceItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Place } from "../../types";

type Props = {
  places: Place[];
  handleClick: () => void;
};
const Places = ({ places, handleClick }: Props) => {
  return (
    <PlacesBlock>
      <Swiper slidesPerView={5}>
        {places.map((place, index) => (
          <SwiperSlide key={index}>
            <PlaceItem key={index} place={place} handleClick={handleClick} />
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
