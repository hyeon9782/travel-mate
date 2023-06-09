import styled from "styled-components";
import { Place } from "../../types";

type Props = {
  place: Place;
  handleClick: (place: Place) => void;
};
const Schedule = ({ place, handleClick }: Props) => {
  return (
    <ScheduleBlock onClick={() => handleClick(place)}>
      {place.name}
    </ScheduleBlock>
  );
};

const ScheduleBlock = styled.div`
  border-radius: 5px;
  border: 1px solid lightgray;
  padding: 15px;
  text-align: center;
`;

export default Schedule;
