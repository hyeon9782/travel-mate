import styled from "styled-components";

type Props = {
  index: number;
};
const DirectionItem = ({ index }: Props) => {
  return (
    <DirectionItemBlock>
      <div>{index + 1}</div>
      <div className="overlay">X</div>
    </DirectionItemBlock>
  );
};

const DirectionItemBlock = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  z-index: 2;
  background-color: gray;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    justify-content: center;
    align-items: center;
  }

  &:hover .overlay {
  }
`;

export default DirectionItem;
