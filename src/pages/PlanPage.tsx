import styled from "styled-components";
import Steps from "../components/plan/Steps";
import Wrapper from "../components/layout/Wrapper";

const STEPS = ["정보 입력", "장소 검색", "일정 계획", "미리 보기"];

const PlanPage = () => {
  return (
    <Wrapper>
      <PlanPageBlock>
        <Steps steps={STEPS} />
      </PlanPageBlock>
    </Wrapper>
  );
};

const PlanPageBlock = styled.section``;

export default PlanPage;
