import styled from "styled-components";
import Steps from "../components/steps/Steps";
import Wrapper from "../components/layout/Wrapper";
import { useState } from "react";
import PlanArea from "../components/plan/PlanArea";
import PreviewArea from "../components/plan/PreviewArea";
import CityArea from "../components/cities/CityArea";
import DateArea from "../components/date/DateArea";
import SearchArea from "../components/search/SearchArea";
import PrevStep from "../components/plan/PrevStep";
import { useNavigate } from "react-router-dom";
const STEPS = ["도시 선택", "날짜 선택", "장소 검색", "일정 계획", "미리 보기"];

const PlanPage = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(1);
  const moveStep = (direction: number) => {
    if (activeStep === 1) {
      navigate(-1);
    }
    setActiveStep(activeStep + direction);
  };
  const move = () => {
    let component = <></>;
    switch (STEPS[activeStep - 1]) {
      case "도시 선택":
        component = <CityArea moveStep={moveStep} />;
        break;
      case "날짜 선택":
        component = <DateArea moveStep={moveStep} />;
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
        <PrevStep moveStep={moveStep} />
        {move()}
      </PlanPageBlock>
    </Wrapper>
  );
};

const PlanPageBlock = styled.section``;

const PlanBlock = styled.article``;

export default PlanPage;
