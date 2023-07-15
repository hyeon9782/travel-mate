import Input from "../common/Input";
import { ArrowLeftIcon, SearchIcon } from "../common/icons";
import styled from "styled-components";
type Props = {
  moveStep: (direction: number) => void;
  handleChange: () => void;
  activeStep: number;
};
const PrevStep = ({ moveStep, handleChange, activeStep }: Props) => {
  return (
    <PrevStepBlock>
      <PrevStepBox onClick={() => moveStep(-1)} className="test123">
        <ArrowLeftIcon></ArrowLeftIcon>
      </PrevStepBox>
      {activeStep === 1 && (
        <SearchBox>
          <Input
            onChange={handleChange}
            holder="여행을 떠날 도시를 검색해보세요!"
          />
          <SearchIcon className="icon" />
        </SearchBox>
      )}
    </PrevStepBlock>
  );
};

const PrevStepBlock = styled.div`
  display: flex;
  padding: 5px 10px;
  position: sticky;
`;

const PrevStepBox = styled.span`
  font-size: 1.8rem;
  width: 10%;
`;

const SearchBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;

  .icon {
    font-size: 1.5rem;
  }
`;

export default PrevStep;
