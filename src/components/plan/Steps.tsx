import styled from "styled-components";
import Step from "./Step";
import { useState } from "react";
import Button from "../common/Button";
type Props = {
  steps: string[];
};
const Steps = ({ steps = [] }: Props) => {
  const [activeStep, setActiveStep] = useState(1);
  const handleClick = (type: string) => {
    if (type === "next" && steps.length === activeStep) return;
    if (type === "prev" && 0 === activeStep - 1) return;
    setActiveStep((prev) => (type === "next" ? prev + 1 : prev - 1));
  };
  return (
    <>
      <StepsBlock>
        {steps.map((item, index) => (
          <Step
            key={index}
            stepName={item}
            isActive={activeStep === index + 1}
          />
        ))}
      </StepsBlock>
      <ButtonBlock>
        <Button
          text="Prev Step"
          color="black"
          onClick={() => handleClick("prev")}
        />
        <Button
          text="Next Step"
          color="black"
          onClick={() => handleClick("next")}
        />
      </ButtonBlock>
    </>
  );
};

const StepsBlock = styled.div`
  display: flex;
`;

const ButtonBlock = styled.div`
  display: flex;
`;

export default Steps;
