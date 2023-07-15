import styled from "styled-components";
import AppCalender from "../common/AppCalender";

const DateArea = (props) => {
  return (
    <DateAreaBlock>
      <DateAreaTitle>
        <div className="main">여행일정 등록</div>
        <div className="sub">
          일정에 따른 날씨예보, 여행 정보를 알려드립니다.
        </div>
      </DateAreaTitle>
      <CalenderBox>
        <AppCalender {...props} />
      </CalenderBox>
    </DateAreaBlock>
  );
};

const DateAreaBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const CalenderBox = styled.div`
  display: flex;
  justify-content: center;
`;

const DateAreaTitle = styled.div`
  padding: 0px 15px;

  .main {
    font-size: 1.5rem;
    font-weight: bold;
    padding: 10px 0;
  }

  .sub {
    color: gray;
  }
  padding-bottom: 20px;
  border-bottom: 1px solid gray;
`;

export default DateArea;
