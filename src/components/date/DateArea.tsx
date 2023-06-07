import styled from "styled-components";
import AppCalender from "../common/AppCalender";

const DateArea = () => {
  return (
    <DateAreaBlock>
      <AppCalender />
    </DateAreaBlock>
  );
};

const DateAreaBlock = styled.div`
  display: flex;
  justify-content: center;
`;

export default DateArea;
