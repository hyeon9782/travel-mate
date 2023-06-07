import styled from "styled-components";
import Steps from "../components/plan/Steps";
import Wrapper from "../components/layout/Wrapper";
import { useState } from "react";
import SearchPlaces from "../components/search/SearchPlaces";
import Information from "../components/plan/Information";
import Plan from "../components/plan/Plan";
import Preview from "../components/plan/Preview";

const STEPS = ["도시 선택", "날짜 선택", "장소 검색", "일정 계획", "미리 보기"];

const PlanPage = () => {
  const [activeStep, setActiveStep] = useState(1);
  const move = () => {
    let component = <></>;
    switch (STEPS[activeStep - 1]) {
      case "도시 선택":
        component = <Information />;
        break;
      case "날짜 선택":
        component = <Information />;
        break;
      case "장소 검색":
        component = <SearchPlaces />;
        break;
      case "일정 계획":
        component = <Plan />;
        break;
      case "미리 보기":
        component = <Preview />;
        break;
    }
    return component;
  };
  return (
    <Wrapper>
      <PlanPageBlock>
        <Steps
          steps={STEPS}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        >
          <PlanBlock>{move()}</PlanBlock>
        </Steps>
      </PlanPageBlock>
    </Wrapper>
  );
};

const PlanPageBlock = styled.section``;

const PlanBlock = styled.article`
  min-height: 300px; // 나중에 수정
`;

export default PlanPage;
