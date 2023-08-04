import styled from "styled-components";

type Props = {
  index: number;
};
const DirectionItem = ({ index }: Props) => {
  return <DirectionItemBlock>{index + 1}</DirectionItemBlock>;
};

const DirectionItemBlock = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;

  z-index: 2;
  background-color: gray;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default DirectionItem;
