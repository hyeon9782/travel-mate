import styled from "styled-components";
import { PlusIcon } from "../common/icons";

const DayCreater = () => {
  return (
    <DayCreaterBlock>
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
