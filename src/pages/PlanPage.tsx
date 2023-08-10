import styled from "styled-components";
import { useEffect, useState } from "react";
import PlanArea from "../components/plan/PlanArea";
import PreviewArea from "../components/plan/PreviewArea";
import CityArea from "../components/cities/CityArea";
import DateArea from "../components/date/DateArea";
import SearchArea from "../components/search/SearchArea";
import { useLocation, useNavigate } from "react-router-dom";
import PrevStep from "../components/plan/PrevStep";
import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";
import { planState } from "../store/planState";
import { createPlan, modifyPlan } from "../service/plan";
import { searchPlacesState } from "../store/searchPlacesState";
import { Plan } from "../types";

export const INITIAL_DATA: Plan = {
  plan_id: 0,
  user_id: "",
  cities: [],
  period: [String(new Date()), String(new Date())],
  selectedPlaces: [
    {
      place_id: "",
      name: "",
      user_ratings_total: "",
      rating: "",
      geometry: {
        location: {
          lat: 214254,
          lng: 3215213,
        },
      },
      types: [],
      isSelect: false,
      day: 0,
      order: 0,
    },
  ],
};

const PlanPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [step, setStep] = useState<
    "도시선택" | "날짜선택" | "장소검색" | "일정계획" | "미리보기"
  >("도시선택");
  const planDataParam = location?.state?.planData || null;
  const [isPlanDataInitialized, setPlanDataInitialized] = useState(false); // New state
  const resetPlanData = useResetRecoilState(planState);
  console.log(planDataParam);

  const [planData, setPlanData] = useRecoilState(planState);

  console.log(planData);

  useEffect(() => {
    // 최초에만 planDataParam을 recoil의 planData에 설정
    if (planDataParam && !isPlanDataInitialized) {
      setPlanData({ ...planDataParam });
      setPlanDataInitialized(true);
    }

    () => {
      resetPlanData();
    };
  }, [planDataParam, isPlanDataInitialized, setPlanData]);

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
      if (location.pathname === "/plan") {
        createPlan({ ...planData, user_id: "0" });
      } else {
        modifyPlan(planData.plan_id, planData);
      }

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
        <CityArea
          onNext={() => setStep("날짜선택")}
          onPrev={onPrev}
          planData={planData}
        />
      )}
      {step === "날짜선택" && (
        <DateArea onNext={() => setStep("장소검색")} planData={planData} />
      )}
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

export default PlanPage;
