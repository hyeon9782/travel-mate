import styled from "styled-components";
import { useState } from "react";
import PlanArea from "../components/plan/PlanArea";
import PreviewArea from "../components/plan/PreviewArea";
import CityArea from "../components/cities/CityArea";
import DateArea from "../components/date/DateArea";
import SearchArea from "../components/search/SearchArea";

import { useNavigate } from "react-router-dom";

const PlanPage2 = () => {
  const [registerData, setRegisterData] = useState({});
  const [step, setStep] = useState<
    "도시선택" | "날짜선택" | "장소검색" | "일정계획" | "미리보기"
  >("도시선택");

  const navigate = useNavigate();
  const [planData, setPlanData] = useState({});
  const [activeStep, setActiveStep] = useState(1);

  const appendData = () => {
    setRegisterData((prev) => {
      const newData = { ...prev };
      return newData;
    });
  };

  const moveStep = (direction: number) => {
    if (activeStep === 1 && direction === -1) {
      navigate(-1);
    } else {
      setActiveStep(activeStep + direction);
      setStep("날짜선택");
    }
  };

  const addData = (key: string, value: string) => {
    setPlanData((prev) => {
      const newPrev = { ...prev };
      newPrev[key] = value;
      return newPrev;
    });
  };

  return (
    <PlanPageBlock>
      {step !== "도시선택" && (
        <PrevStep moveStep={moveStep} activeStep={activeStep} />
      )}

      {step === "도시선택" && (
        <CityArea moveStep={moveStep} addData={addData} />
      )}
      {step === "날짜선택" && (
        <DateArea moveStep={moveStep} addData={addData} />
      )}
      {step === "장소검색" && (
        <SearchArea moveStep={moveStep} addData={addData} />
      )}
      {step === "일정계획" && (
        <PlanArea moveStep={moveStep} addData={addData} />
      )}
      {step === "미리보기" && <PreviewArea />}
    </PlanPageBlock>
  );
};

const PlanPageBlock = styled.main``;

export default PlanPage2;
