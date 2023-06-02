import styled from "styled-components";

type Props = {
  day: number;
};

const DayItem = ({ day }: Props) => {
  return <DayItemBlock>{day + 1}일차</DayItemBlock>;
};

const DayItemBlock = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 5px;
  border: 1px solid gray;
  padding: 10px 15px;
`;

export default DayItem;
