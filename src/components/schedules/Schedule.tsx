import styled from "styled-components";
import { Place } from "../../types";
import Accordion from "../common/Accordion";
import { changeMemo } from "../../service/place";
import { useSetRecoilState } from "recoil";
import { planState } from "../../store/planState";

type Props = {
  place: Place;
  handleClick: (place: Place) => void;
};
const Schedule = ({ place, handleClick }: Props) => {
  console.log(place.memo);

  const setPlanData = useSetRecoilState(planState);

  const handleChangeMemo = (memo: string) => {
    changeMemo(memo, place.place_id, setPlanData);
  };
  return (
    <>
      <Accordion title={place.name}>
        <Memo
          placeholder="메모를 입력해보세요!"
          value={place.memo}
          onChange={(e) => handleChangeMemo(e.target.value)}
        />
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
