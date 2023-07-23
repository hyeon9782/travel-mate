import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useRecoilState } from "recoil";
import { planState } from "../../store/planState";

const AppCalender = ({ onNext }: () => void) => {
  const [planData, setPlanData] = useRecoilState(planState);

  const onChange = (selectedDates: []) => {
    setPlanData((prevData) => ({
      ...prevData,
      period: [...selectedDates],
    }));
  };

  return (
    <CalenderBlock>
      <Calendar
        onChange={onChange}
        value={planData.period}
        calendarType="US"
        selectRange={true}
      />
      <DoneButton onClick={onNext}>
        {`${
          planData.period[0].getMonth() + 1
        }월 ${planData.period[0].getDate()}일`}{" "}
        -{" "}
        {`${
          planData.period[1].getMonth() + 1
        }월 ${planData.period[1].getDate()}일`}{" "}
        / 등록 완료
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
