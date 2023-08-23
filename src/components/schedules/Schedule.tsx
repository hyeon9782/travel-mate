import styled from "styled-components";
import { Place } from "../../types";
import Accordion from "../common/Accordion";
import { changeMemo } from "../../service/place";
import { useSetRecoilState } from "recoil";
import { planState } from "../../store/planState";
import { useLocation } from "react-router-dom";
import { ArrowUpDownIcon, MinusIcon } from "../common/icons";

type Props = {
  place: Place;
  onRemove: (place: Place) => void;
};
const Schedule = ({ place, onRemove }: Props) => {
  const location = useLocation();
  const path = location.pathname;

  const setPlanData = useSetRecoilState(planState);

  const handleChangeMemo = (memo: string) => {
    changeMemo(memo, place.place_id, setPlanData);
  };
  return (
    <ScheduleBlock>
      <ArrowIconBox>
        <ArrowUpDownIcon />
      </ArrowIconBox>
      <ScheduleBox>
        <Accordion title={place.name}>
          <Memo
            placeholder="메모를 입력해보세요!"
            value={place.memo}
            readOnly={path !== "/plan" && path !== "/plan/edit"}
            onChange={(e) => handleChangeMemo(e.target.value)}
          />
        </Accordion>
      </ScheduleBox>
      <MinusIconBox onClick={() => onRemove(place)}>
        <MinusIcon />
      </MinusIconBox>
    </ScheduleBlock>
  );
};

const ScheduleBlock = styled.div`
  display: flex;
`;

const ArrowIconBox = styled.div`
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  color: lightgray;
`;

const MinusIconBox = styled.div`
  font-size: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  color: gray;
`;

const ScheduleBox = styled.div`
  width: 80%;
`;

const Memo = styled.textarea`
  width: 100%;
  height: 100px;
  resize: none;
`;

export default Schedule;
