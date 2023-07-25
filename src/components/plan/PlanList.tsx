import PlanItem from "./PlanItem";
import styled from "styled-components";

const PlanList = ({ list }: { list: [] }) => {
  return (
    <PlanListBlock>
      {list && list.map((item) => <PlanItem key={item.plan_id} plan={item} />)}
    </PlanListBlock>
  );
};

const PlanListBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default PlanList;
