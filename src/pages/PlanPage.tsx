import styled from "styled-components";
import { useState } from "react";
import PlanArea from "../components/plan/PlanArea";
import PreviewArea from "../components/plan/PreviewArea";
import CityArea from "../components/cities/CityArea";
import DateArea from "../components/date/DateArea";
import SearchArea from "../components/search/SearchArea";
import { useNavigate } from "react-router-dom";
import PrevStep from "../components/plan/PrevStep";
import { useRecoilState, useSetRecoilState } from "recoil";
import { planState } from "../store/planState";
import { createPlan } from "../service/plan";
import { searchPlacesState } from "../store/searchPlacesState";

const INITIAL_DATA = {
  cities: [],
  period: [new Date(), new Date()],
  selectedPlaces: [
    {
      name: "",
      rating: "",
      user_rating: "",
      types: [],
      isSelect: false,
      day: 0,
      order: 0,
    },
  ],
};

const PlanPage2 = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<
    "도시선택" | "날짜선택" | "장소검색" | "일정계획" | "미리보기"
  >("도시선택");

  const [planData, setPlanData] = useRecoilState(planState);
  const setSearchPlaces = useSetRecoilState(searchPlacesState);

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

  const handleSubmit = () => {
    try {
      createPlan({ ...planData, user_id: "0" });
      setPlanData(INITIAL_DATA);
      setSearchPlaces([]);
      alert("등록");
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <PlanPageBlock>
      {step !== "도시선택" && <PrevStep onPrev={onPrev} />}
      {step === "도시선택" && (
        <CityArea onNext={() => setStep("날짜선택")} onPrev={onPrev} />
      )}
      {step === "날짜선택" && <DateArea onNext={() => setStep("장소검색")} />}
      {step === "장소검색" && (
        <SearchArea onNext={() => setStep("일정계획")} planData={planData} />
      )}
      {step === "일정계획" && (
        <PlanArea onNext={() => setStep("미리보기")} planData={planData} />
      )}
      {step === "미리보기" && (
        <PreviewArea onSubmit={handleSubmit} planData={planData} />
      )}
    </PlanPageBlock>
  );
};

const PlanPageBlock = styled.main`
  height: 100%;
`;

export default PlanPage2;
