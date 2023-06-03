import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { daysState } from "../../store/daysState";
import DayCreater from "./DayCreater";
import DayItem from "./DayItem";

const Days = () => {
  const days = useRecoilValue(daysState);
  return (
    <DaysBlock>
      {days.map((_, i) => (
        <DayItem key={i} day={i} />
      ))}
      <DayCreater />
    </DaysBlock>
  );
};

const DaysBlock = styled.div`
  display: flex;
  gap: 5px;
`;

export default Days;
