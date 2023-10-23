/* eslint-disable @typescript-eslint/ban-ts-comment */
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import DoneButton from "../plan/DoneButton";
import { Plan } from "../../types";

type Props = {
  onNext: () => void;
  planData: Plan;
  setPlanData: any;
};
const DateArea = ({ onNext, planData, setPlanData }: Props) => {
  const onChange = (selectedDates: string[]) => {
    setPlanData((prevData: Plan) => ({
      ...prevData,
      period: [...selectedDates],
    }));
  };
  return (
    <DateAreaBlock>
      <DateAreaTitle>
        <div className="main">여행일정 등록</div>
        <div className="sub">
          일정에 따른 날씨예보, 여행 정보를 알려드립니다.
        </div>
      </DateAreaTitle>
      <CalenderBox>
        {/* @ts-ignore */}
        <Calendar
          onChange={onChange}
          value={planData.period}
          calendarType="US"
          selectRange={true}
        />
      </CalenderBox>
      <BtnBox>
        <DoneButton onNext={onNext}>
          {`${new Date(planData.period[0]).getMonth() + 1}월 ${new Date(
            planData.period[0]
          ).getDate()}일`}{" "}
          -{" "}
          {`${new Date(planData.period[1]).getMonth() + 1}월 ${new Date(
            planData.period[1]
          ).getDate()}일`}{" "}
          / 등록 완료
        </DoneButton>
      </BtnBox>
    </DateAreaBlock>
  );
};

const DateAreaBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: calc(100% - 44.59px);
`;

const CalenderBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;
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

const BtnBox = styled.div`
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export default DateArea;
