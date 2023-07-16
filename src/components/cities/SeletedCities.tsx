import styled from "styled-components";
import SelectedCity from "./SeletedCity";
import { Swiper, SwiperSlide } from "swiper/react";
type Props = {
  selectedCities: [];
};
const SeletedCities = ({ selectedCities = [] }: Props) => {
  return (
    <SeletedCitiesBlock>
      <Swiper slidesPerView={5}>
        {selectedCities.map((city, index) => (
          <SwiperSlide>
            <SelectedCity key={index} city={city} />
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
