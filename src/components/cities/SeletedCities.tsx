import styled from "styled-components";
import SelectedCity from "./SeletedCity";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSetRecoilState } from "recoil";
import { selectedCitiesState } from "../../store/selectedCitiesState";
type Props = {
  selectedCities: [];
};
const SeletedCities = ({ selectedCities = [] }: Props) => {
  const setSelectedCities = useSetRecoilState(selectedCitiesState);
  return (
    <SeletedCitiesBlock>
      <Swiper slidesPerView={5}>
        {selectedCities.map((city, index) => (
          <SwiperSlide key={index}>
            <SelectedCity
              key={index}
              city={city}
              setSelectedCities={setSelectedCities}
            />
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
