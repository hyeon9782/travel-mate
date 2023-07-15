import { useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const AppCalender = ({ moveStep }: () => void) => {
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);

  const onChange = (selectedDates) => {
    // selectedDates is [start, end]
    setDateRange(selectedDates);
  };

  return (
    <CalenderBlock>
      <Calendar
        onChange={onChange}
        value={dateRange}
        calendarType="US"
        selectRange={true}
      />
      <DoneButton onClick={() => moveStep(1)}>
        {`${dateRange[0].getMonth() + 1}월 ${dateRange[0].getDate()}일`} -{" "}
        {`${dateRange[1].getMonth() + 1}월 ${dateRange[1].getDate()}일`} / 등록
        완료
      </DoneButton>
    </CalenderBlock>
  );
};

const CalenderBlock = styled.div`
  padding-top: 20px;
`;

const DoneButton = styled.button`
  text-align: center;
  width: 100%;
  border-radius: 5px;
  border: none;
  background-color: blue;
  color: white;
  padding: 15px;
  margin-top: 20px;
`;

export default AppCalender;
