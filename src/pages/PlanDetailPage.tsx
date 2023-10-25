import styled from "styled-components";
import { Suspense } from "react";
import { useParams } from "react-router-dom";
import PlanDetailContainer from "../components/plan/PlanDetailContainer";
import { Container } from "../components/layout/Container";

const PlanDetailPage = () => {
  const { id } = useParams();

  return (
    <Container>
      <PlanDetailPageBlock>
        <Suspense fallback={<>로딩중..</>}>
          <PlanDetailContainer plan_id={Number(id)} />
        </Suspense>
      </PlanDetailPageBlock>
    </Container>
  );
};

const PlanDetailPageBlock = styled.section`
  height: 100%;
`;

export default PlanDetailPage;
