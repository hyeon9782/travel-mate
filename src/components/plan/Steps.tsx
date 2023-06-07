import styled from "styled-components";
import Step from "./Step";
import { Dispatch, SetStateAction, useState } from "react";
import Button from "../common/Button";
type Props = {
  steps: string[];
  children: React.ReactElement;
  activeStep: number;
  setActiveStep: Dispatch<SetStateAction<number>>;
};
const Steps = ({ steps = [], children, activeStep, setActiveStep }: Props) => {
  const handleClick = (type: string) => {
    if (type === "next" && steps.length === activeStep) return;
    if (type === "prev" && 0 === activeStep - 1) return;
    setActiveStep((prev) => (type === "next" ? prev + 1 : prev - 1));
  };
  return (
    <>
      <ButtonBlock>
        <Button
          text="이전"
          color="black"
          size="big"
          onClick={() => handleClick("prev")}
        />
        <Button
          text="다음"
          color="black"
          size="big"
          onClick={() => handleClick("next")}
        />
      </ButtonBlock>
      <StepsBlock>
        {steps.map((item, index) => (
          <Step
            key={index}
            stepName={item}
            isActive={activeStep === index + 1}
          />
        ))}
      </StepsBlock>
      {children}
    </>
  );
};

const StepsBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonBlock = styled.div`
  // 별도의 컴포넌트로 분리하자
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
  /* gap: 10px; */
`;

export default Steps;
