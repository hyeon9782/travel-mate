import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { selectPlacesState } from "../../store/selectPlacesState";
import Arrow from "./Arrow";
import SelectPlace from "./SelectPlace";

const SelectPlaces = () => {
  const selectPlaces = useRecoilValue(selectPlacesState);
  return (
    <SelectPlacesBlock>
      {selectPlaces &&
        selectPlaces.map((item, index, self) => (
          <>
            <SelectPlace key={index} item={item} />
            {index !== self.length - 1 && <Arrow />}
          </>
        ))}
    </SelectPlacesBlock>
  );
};

const SelectPlacesBlock = styled.article`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 300px;
`;

export default SelectPlaces;
