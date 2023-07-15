import styled from "styled-components";
import Steps from "../components/steps/Steps";
import Wrapper from "../components/layout/Wrapper";
import { useState } from "react";
import PlanArea from "../components/plan/PlanArea";
import PreviewArea from "../components/plan/PreviewArea";
import CityArea from "../components/cities/CityArea";
import DateArea from "../components/date/DateArea";
import SearchArea from "../components/search/SearchArea";

const STEPS = ["도시 선택", "날짜 선택", "장소 검색", "일정 계획", "미리 보기"];

const PlanPage = () => {
  const [activeStep, setActiveStep] = useState(1);
  const move = () => {
    let component = <></>;
    switch (STEPS[activeStep - 1]) {
      case "도시 선택":
        component = <CityArea />;
        break;
      case "날짜 선택":
        component = <DateArea />;
        break;
      case "장소 검색":
        component = <SearchArea />;
        break;
      case "일정 계획":
        component = <PlanArea />;
        break;
      case "미리 보기":
        component = <PreviewArea />;
        break;
    }
    return component;
  };

  return (
    <Wrapper>
      <PlanPageBlock>
        {/* <Steps
          steps={STEPS}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        >
          <PlanBlock>{move()}</PlanBlock>
        </Steps> */}
        {move()}
      </PlanPageBlock>
    </Wrapper>
  );
};

const PlanPageBlock = styled.section``;

const PlanBlock = styled.article``;

export default PlanPage;
