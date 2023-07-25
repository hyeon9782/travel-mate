import styled from "styled-components";
import DayItem from "./DayItem";
import { Plan } from "../../types";
type Props = {
  planData: Plan;
};
const Days = ({ planData }: Props) => {
  const days =
    Number(new Date(planData.period[1]).getDate()) -
    Number(new Date(planData.period[0]).getDate());
  return (
    <DaysBlock>
      {Array.from(Array(days + 1), (_, i) => i).map((_, i) => (
        <DayItem key={i} day={i + 1} />
      ))}
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
