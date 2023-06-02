import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { daysState } from "../../store/daysState";
import { PlusIcon } from "../common/icons";

const DayCreater = () => {
  const setDays = useSetRecoilState(daysState);
  return (
    <DayCreaterBlock onClick={() => setDays((prev) => [...prev, "1"])}>
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
