import { Plan } from "../../types";
import PlanItem from "./PlanItem";
import styled from "styled-components";

type Props = {
  plans: Plan[];
};

const PlanList = ({ plans }: Props) => {
  return (
    <PlanListBlock>
      {plans &&
        plans.map((plan) => <PlanItem key={plan.plan_id} plan={plan} />)}
    </PlanListBlock>
  );
};

const PlanListBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default PlanList;
