import styled from "styled-components";
import Place from "./Place";
type Props = {
  places: [];
};
const Places = ({ places = [] }: Props) => {
  return (
    <PlacesBlock>
      {places.map((place, index) => (
        <Place key={index} place={place} />
      ))}
    </PlacesBlock>
  );
};

const PlacesBlock = styled.article`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 300px;
`;

export default Places;
