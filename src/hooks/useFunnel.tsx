import { useState } from "react";

export function useFunnel({ steps }) {
  const [step, setStep] = useState("dd");

  const Step = (props) => {
    return <>{props.children}</>;
  };

  const Funnel = ({ children }) => {
    // name이 현재 step 상태와 동일한 Step만 렌더링
    const targetStep = children.find(
      (childStep) => childStep.props.name === step
    );
    return Object.assign(targetStep, { Step });
  };
  return [Funnel, setStep];
}
