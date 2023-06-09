import styled from "styled-components";
import Place from "./Place";
type Props = {
  places: [];
  handleClick: (place: Place) => void;
};
const Places = ({ places, handleClick }: Props) => {
  return (
    <PlacesBlock>
      {places &&
        places.map((place, index) => (
          <Place key={index} place={place} handleClick={handleClick} />
        ))}
    </PlacesBlock>
  );
};

const PlacesBlock = styled.article`
  display: flex;
  gap: 15px;
  padding: 10px;
  width: 100%;
`;

export default Places;
