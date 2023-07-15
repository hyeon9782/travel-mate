import { ArrowLeftIcon } from "../common/icons";
import styled from "styled-components";
type Props = {
  moveStep: (direction: number) => void;
};
const PrevStep = ({ moveStep }: Props) => {
  return (
    <PrevStepBox onClick={() => moveStep(-1)}>
      <ArrowLeftIcon></ArrowLeftIcon>
    </PrevStepBox>
  );
};

const PrevStepBox = styled.span`
  font-size: 1.8rem;
`;

export default PrevStep;
