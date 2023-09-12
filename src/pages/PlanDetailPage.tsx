import styled from "styled-components";
import { Suspense } from "react";
import { useLocation } from "react-router-dom";
import PlanDetailContainer from "../components/plan/PlanDetailContainer";
import { Container } from "../components/layout/Container";

const PlanDetailPage = () => {
  const location = useLocation();

  const plan_id = location?.state?.plan_id;

  return (
    <Container>
      <PlanDetailPageBlock>
        <Suspense fallback={<>로딩중..</>}>
          <PlanDetailContainer plan_id={plan_id} />
        </Suspense>
      </PlanDetailPageBlock>
    </Container>
  );
};

const PlanDetailPageBlock = styled.section`
  height: 100%;
`;

export default PlanDetailPage;
