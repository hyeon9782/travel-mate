import styled from "styled-components";
import DirectionItem from "./DirectionItem";
import { useRecoilValue } from "recoil";
import { currentDayState } from "../../store/currentDayState";
import { planState } from "../../store/planState";

const Directions = () => {
  const currentDay = useRecoilValue(currentDayState);

  const planData = useRecoilValue(planState);
  const schedules = planData.selectedPlaces.filter(
    (selectedPlace) => selectedPlace.day === currentDay
  );

  return (
    <DirectionsBlock>
      {schedules.length > 1 && <Line />}
      {schedules &&
        schedules.map((_, index) => (
          <DirectionItem key={index} index={index} />
        ))}
    </DirectionsBlock>
  );
};

const DirectionsBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Line = styled.div`
  position: absolute;
  z-index: 1;
  left: 14px;
  border-right: 3px solid gray;
  height: 100%;
`;

export default Directions;
