import styled from "styled-components";
import SelectedCity from "./SeletedCity";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSetRecoilState } from "recoil";
import { planState } from "../../store/planState";
type Props = {
  selectedCities: [];
};
const SeletedCities = ({ selectedCities = [] }: Props) => {
  const setPlanData = useSetRecoilState(planState);
  return (
    <SeletedCitiesBlock>
      <Swiper slidesPerView={5}>
        {selectedCities.map((city, index) => (
          <SwiperSlide key={index}>
            <SelectedCity key={index} city={city} setPlanData={setPlanData} />
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
