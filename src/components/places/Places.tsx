import styled from "styled-components";
import { useRecoilValue } from "recoil";
import Place from "./Place";
import Arrow from "./Arrow";
import { selectPlacesState } from "../../store/selectPlacesState";

const Places = () => {
  const selectPlaces = useRecoilValue(selectPlacesState);
  return (
    <PlacesBlock>
      {selectPlaces &&
        selectPlaces.map((item, index, self) => (
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
