import { useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const AppCalender = () => {
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);

  const onChange = (selectedDates) => {
    // selectedDates is [start, end]
    setDateRange(selectedDates);
  };

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={dateRange}
        calendarType="US"
        selectRange={true}
      />
      <DateText>
        {`${dateRange[0].getMonth() + 1}월 ${dateRange[0].getDate()}일`} ~{" "}
        {`${dateRange[1].getMonth() + 1}월 ${dateRange[1].getDate()}일`}
      </DateText>
    </div>
  );
};

const DateText = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 1.5rem;
  padding: 10px;
`;

export default AppCalender;
