import styled from "styled-components";
import Steps from "../components/plan/Steps";
import Wrapper from "../components/layout/Wrapper";
import { useState } from "react";
import SearchPlaces from "../components/search/SearchPlaces";
import PlanArea from "../components/plan/PlanArea";
import Preview from "../components/plan/Preview";
import CityArea from "../components/cities/CityArea";
import DateArea from "../components/date/DateArea";
import PlacesArea from "../components/places/PlacesArea";

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
        component = <PlacesArea />;
        break;
      case "일정 계획":
        component = <PlanArea />;
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
  height: 800px; // 나중에 수정
`;

export default PlanPage;
