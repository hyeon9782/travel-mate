import styled from "styled-components";
import SelectedCity from "./SeletedCity";
import { Swiper, SwiperSlide } from "swiper/react";
import { City } from "../../types";
type Props = {
  selectedCities: City[];
  onAddCity: (isSelect: boolean, city: City) => void;
};
const SeletedCities = ({ selectedCities = [], onAddCity }: Props) => {
  return (
    <SeletedCitiesBlock>
      <Swiper slidesPerView={5}>
        {selectedCities.map((city, index) => (
          <SwiperSlide key={index}>
            <SelectedCity key={index} city={city} onAddCity={onAddCity} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SeletedCitiesBlock>
  );
};

const SeletedCitiesBlock = styled.div`
  padding: 10px;
`;

export default SeletedCities;
