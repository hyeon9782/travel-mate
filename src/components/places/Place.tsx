import styled from "styled-components";
import { Place } from "../../types";
import { truncateTextOverflow } from "../../utils/utils";
import { removePlace } from "../../service/place";
import { useSetRecoilState } from "recoil";
import { selectedPlacesState } from "../../store/selectedPlacesState";

type Props = {
  place: Place;
  handleClick: (place: Place) => void;
};
const Place = ({ place, handleClick }: Props) => {
  const setSelectedPlaces = useSetRecoilState(selectedPlacesState);
  return (
    <PlaceBlock onClick={() => removePlace(place, setSelectedPlaces)}>
      <PlaceImage></PlaceImage>
      <PlaceName>{truncateTextOverflow(place.name)}</PlaceName>
    </PlaceBlock>
  );
};

const PlaceBlock = styled.div``;

const PlaceImage = styled.div`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: lightgray;
`;

const PlaceName = styled.div`
  padding: 5px 0;
`;

export default Place;
