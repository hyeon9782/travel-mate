import { useRecoilValue } from "recoil";
import styled from "styled-components";
import DayCreater from "./DayCreater";
import DayItem from "./DayItem";
import { scheduleState } from "../../store/scheduleState";

const Days = () => {
  const schedules = useRecoilValue(scheduleState);

  return (
    <DaysBlock>
      {schedules.map((_, i) => (
        <DayItem key={i} day={i} />
      ))}
      <DayCreater />
    </DaysBlock>
  );
};

const DaysBlock = styled.div`
  display: flex;
  gap: 5px;
  padding-bottom: 20px;
`;

export default Days;
