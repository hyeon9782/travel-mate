import styled from "styled-components";
import { Place } from "../../types";
import Accordion from "../common/Accordion";

type Props = {
  place: Place;
  handleClick: (place: Place) => void;
};
const Schedule = ({ place, handleClick }: Props) => {
  return (
    <>
      {/* <ScheduleBlock onClick={() => handleClick(place)}></ScheduleBlock> */}
      <Accordion title={place.name}>
        <Memo placeholder="메모를 입력해보세요!" />
      </Accordion>
    </>
  );
};

const ScheduleBlock = styled.div`
  border-radius: 5px;
  border: 1px solid lightgray;
  padding: 15px;
  text-align: center;
`;

const Memo = styled.textarea`
  width: 100%;
  resize: none;
`;

export default Schedule;
