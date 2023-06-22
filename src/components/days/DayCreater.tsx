import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { PlusIcon } from "../common/icons";
import { scheduleState } from "../../store/scheduleState";

const DayCreater = () => {
  const setSchedule = useSetRecoilState(scheduleState);

  const handleClick = () => {
    setSchedule((prev) => {
      const newSchedule = [...prev];
      newSchedule[newSchedule.length] = [];
      return newSchedule;
    });
  };
  return (
    <DayCreaterBlock onClick={() => handleClick()}>
      <PlusIcon />
      <div>날짜추가</div>
    </DayCreaterBlock>
  );
};

const DayCreaterBlock = styled.div`
  background: black;
  color: white;
  text-align: center;
  font-size: 1rem;
  padding: 0px 6px 4px 6px;
`;

export default DayCreater;
