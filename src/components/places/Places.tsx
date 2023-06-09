import styled from "styled-components";
import Place from "./Place";
type Props = {
  places: [];
};
const Places = ({ places }: Props) => {
  return (
    <PlacesBlock>
      {places &&
        places.map((place, index) => <Place key={index} place={place} />)}
    </PlacesBlock>
  );
};

const PlacesBlock = styled.article`
  display: flex;
  gap: 15px;
  padding: 10px 0;
  width: 100%;
`;

export default Places;
