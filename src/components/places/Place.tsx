import styled from "styled-components";
import { Place } from "../../types";

type Props = {
  place: Place;
};
const Place = ({ place }: Props) => {
  return <PlaceBlock>1</PlaceBlock>;
};

const PlaceBlock = styled.div`
  border-radius: 50%;
  border: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
`;

export default Place;
