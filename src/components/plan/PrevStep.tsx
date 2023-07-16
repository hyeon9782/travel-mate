import { ArrowLeftIcon } from "../common/icons";
import styled from "styled-components";
type Props = {
  moveStep: (direction: number) => void;
};
const PrevStep = ({ moveStep }: Props) => {
  return (
    <PrevStepBlock>
      <PrevStepBox onClick={() => moveStep(-1)}>
        <ArrowLeftIcon></ArrowLeftIcon>
      </PrevStepBox>
    </PrevStepBlock>
  );
};

const PrevStepBlock = styled.div`
  display: flex;
  padding: 5px 10px;
  background-color: white;
  position: sticky;
  top: 0;
  left: 0;
`;

const PrevStepBox = styled.span`
  font-size: 1.8rem;
  width: 10%;
`;

export default PrevStep;
