import { useState } from "react";

// export function useFunnel() {
//   const [step, setStep] = useState();
//   //   const step = useQueryParam("funnel-step")

//   const Step = (props) => {
//     return <>{props.children}</>;
//   };

//   const Funnel = ({ children }) => {
//     // name이 현재 step 상태와 동일한 Step만 렌더링
//     const targetStep = children.find(
//       (childStep) => childStep.props.name === step
//     );
//     return Object.assign(targetStep, { Step });
//   };
//   return [Funnel, setStep];
// }
