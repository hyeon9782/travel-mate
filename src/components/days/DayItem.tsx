import styled from "styled-components";
import { currentDayState } from "../../store/currentDayState";
import { useRecoilState } from "recoil";

type Props = {
  day: number;
};

const DayItem = ({ day }: Props) => {
  const [currentDay, setCurrentDay] = useRecoilState(currentDayState);

  const handleClick = () => {
    setCurrentDay(day);
  };
  return (
    <DayItemBlock onClick={handleClick}>
      <div className={day === currentDay ? "active" : "no"}>{day}일차</div>
    </DayItemBlock>
  );
};

const DayItemBlock = styled.div`
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;
  border: 1px solid gray;

  .active {
    background: black;
    color: white;
    padding: 10px 15px;
  }
  .no {
    padding: 10px 15px;
  }
`;

export default DayItem;
