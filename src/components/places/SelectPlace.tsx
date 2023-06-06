import styled from "styled-components";
import { Place } from "../../types";

type Props = {
  place: Place;
};
const SelectPlace = ({ place }: Props) => {
  return <SelectPlaceBlock>장소</SelectPlaceBlock>;
};

const SelectPlaceBlock = styled.div`
  border-radius: 5px;
  border: 1px solid lightgray;
  padding: 15px;
  text-align: center;
`;

export default SelectPlace;
