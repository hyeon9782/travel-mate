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
      <Accordion title={place.name}>
        <Memo placeholder="메모를 입력해보세요!" />
      </Accordion>
    </>
  );
};

const Memo = styled.textarea`
  width: 100%;
  height: 100px;
  resize: none;
`;

export default Schedule;
