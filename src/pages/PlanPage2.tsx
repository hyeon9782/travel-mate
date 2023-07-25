import styled from "styled-components";
import { useState } from "react";
import PlanArea from "../components/plan/PlanArea";
import PreviewArea from "../components/plan/PreviewArea";
import CityArea from "../components/cities/CityArea";
import DateArea from "../components/date/DateArea";
import SearchArea from "../components/search/SearchArea";
import { useNavigate } from "react-router-dom";
import PrevStep from "../components/plan/PrevStep";

const PlanPage2 = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<
    "도시선택" | "날짜선택" | "장소검색" | "일정계획" | "미리보기"
  >("도시선택");

  const onPrev = () => {
    switch (step) {
      case "도시선택":
        navigate(-1);
        break;
      case "날짜선택":
        setStep("도시선택");
        break;
      case "장소검색":
        setStep("날짜선택");
        break;
      case "일정계획":
        setStep("장소검색");
        break;
      case "미리보기":
        setStep("일정계획");
    }
  };

  return (
    <PlanPageBlock>
      {step !== "도시선택" && <PrevStep onPrev={onPrev} />}
      {step === "도시선택" && (
        <CityArea onNext={() => setStep("날짜선택")} onPrev={onPrev} />
      )}
      {step === "날짜선택" && <DateArea onNext={() => setStep("장소검색")} />}
      {step === "장소검색" && <SearchArea onNext={() => setStep("일정계획")} />}
      {step === "일정계획" && <PlanArea onNext={() => setStep("미리보기")} />}
      {step === "미리보기" && (
        <PreviewArea onSubmit={() => console.log("등록")} />
      )}
    </PlanPageBlock>
  );
};

const PlanPageBlock = styled.main`
  height: 100%;
`;

export default PlanPage2;
