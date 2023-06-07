import styled from "styled-components";
type Props = {
  selectCities: [];
};
const CityCarousel = ({ selectCities = [] }: Props) => {
  return (
    <CityCarouselBlock>
      {selectCities.map((city, index) => (
        <SelectCity key={index}>{city.city}</SelectCity>
      ))}
    </CityCarouselBlock>
  );
};

const CityCarouselBlock = styled.div`
  display: flex;
  background-color: lightgray;
  gap: 10px;

  margin: 10px 0px;
  height: 120px;
`;

const SelectCity = styled.div`
  border-radius: 50%;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: gray;
`;

export default CityCarousel;
