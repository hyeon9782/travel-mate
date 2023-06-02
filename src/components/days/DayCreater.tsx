import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { daysState } from "../../store/daysState";

const DayCreater = () => {
  const setDays = useSetRecoilState(daysState);

  //   const handleClick = () => {
  //     setDays((prev) => {
  //       console.log([...prev, "1"]);
  //       return [...prev, "1"];
  //     });
  //   };
  return (
    <DayCreaterBlock onClick={() => setDays((prev) => [...prev, "1"])}>
      +
    </DayCreaterBlock>
  );
};

const DayCreaterBlock = styled.div`
  background: black;
  color: white;
  font-size: 2rem;
  padding: 0px 6px 4px 6px;
`;

export default DayCreater;
