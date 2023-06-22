import styled from "styled-components";
import { Place } from "../../types";

type Props = {
  place: Place;
};
const Schedule = ({ place }: Props) => {
  return <ScheduleBlock>장소</ScheduleBlock>;
};

const ScheduleBlock = styled.div`
  border-radius: 5px;
  border: 1px solid lightgray;
  padding: 15px;
  text-align: center;
`;

export default Schedule;
