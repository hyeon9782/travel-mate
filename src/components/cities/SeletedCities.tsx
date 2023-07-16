import styled from "styled-components";
import SelectedCity from "./SeletedCity";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSetRecoilState } from "recoil";
import { selectedCitiesState } from "../../store/seletedCitiesState";
type Props = {
  selectedCities: [];
};
const SeletedCities = ({ selectedCities = [] }: Props) => {
  const setSelectedCities = useSetRecoilState(selectedCitiesState);
  return (
    <SeletedCitiesBlock>
      <Swiper slidesPerView={5}>
        {selectedCities.map((city, index) => (
          <SwiperSlide>
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
