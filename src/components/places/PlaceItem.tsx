import styled from "styled-components";
import { Place } from "../../types";
import { truncateTextOverflow } from "../../utils/utils";
import {
  handlePlaceSelection,
  handleScheduleSelection,
} from "../../service/place";
import { useSetRecoilState } from "recoil";
import { planState } from "../../store/planState";

type Props = {
  place: Place;
  handleClick: () => void;
};
const PlaceItem = ({ place }: Props) => {
  const setPlanData = useSetRecoilState(planState);

  const handleClick = (step = "일정계획") => {
    if (step === "장소검색") {
      handlePlaceSelection(true, setPlanData, place);
    } else {
      handleScheduleSelection(false, setPlanData, place);
    }
  };
  return (
    <PlaceBlock onClick={() => handlePlaceSelection(true, setPlanData, place)}>
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

export default PlaceItem;
