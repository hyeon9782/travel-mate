import styled from "styled-components";
import { Place } from "../../types";
import { truncateTextOverflow } from "../../utils/utils";

type Props = {
  place: Place;
  handleClick: (arg: any) => void;
};
const PlaceItem = ({ place, handleClick }: Props) => {
  return (
    <PlaceBlock onClick={() => handleClick(place)}>
      <PlaceImage></PlaceImage>
      <PlaceName>{truncateTextOverflow(place.name)}</PlaceName>
    </PlaceBlock>
  );
};

const PlaceBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PlaceImage = styled.div`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: lightgray;
`;

const PlaceName = styled.div`
  padding: 5px 0;
`;

export default PlaceItem;
