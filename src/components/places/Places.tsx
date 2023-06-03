import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { placesState } from "../../store/placesState";
import Place from "./Place";
import Arrow from "./Arrow";

const Places = () => {
  const places = useRecoilValue(placesState);
  return (
    <PlacesBlock>
      {places.map((item, index, self) => (
        <>
          <Place key={index} />
          {index !== self.length - 1 && <Arrow />}
        </>
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
