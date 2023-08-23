import { Plan } from "../../types";
import PlanItem from "./PlanItem";
import styled from "styled-components";

type Props = {
  plans: Plan[];
  onDelete: (event: MouseEvent, plan_id: number) => void;
};

const PlanList = ({ plans, onDelete }: Props) => {
  return (
    <PlanListBlock>
      {plans &&
        plans.map((plan) => (
          <PlanItem key={plan.plan_id} plan={plan} onDelete={onDelete} />
        ))}
    </PlanListBlock>
  );
};

const PlanListBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 300px;
  overflow: auto;
`;

export default PlanList;
