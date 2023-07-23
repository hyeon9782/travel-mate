import { useRecoilValue } from "recoil";
import styled from "styled-components";
import DayCreater from "./DayCreater";
import DayItem from "./DayItem";
import { planState } from "../../store/planState";

const Days = () => {
  const planData = useRecoilValue(planState);
  const days =
    Number(planData.period[1].getDate()) - Number(planData.period[0].getDate());
  return (
    <DaysBlock>
      {Array.from(Array(days + 1), (_, i) => i).map((_, i) => (
        <DayItem key={i} day={i} />
      ))}
      <DayCreater />
    </DaysBlock>
  );
};

const DaysBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  padding: 10px 0;
`;

export default Days;
