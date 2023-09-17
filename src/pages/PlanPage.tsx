import styled from "styled-components";
import { useEffect, useState } from "react";
import PlanArea from "../components/plan/PlanArea";
import CityArea from "../components/cities/CityArea";
import DateArea from "../components/date/DateArea";
import SearchArea from "../components/search/SearchArea";
import { useLocation, useNavigate } from "react-router-dom";
import PrevStep from "../components/plan/PrevStep";
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from "recoil";
import { planState } from "../store/planState";
import { createPlan, modifyPlan } from "../service/plan";
import { searchPlacesState } from "../store/searchPlacesState";
import { Plan } from "../types";
import useCustomBack from "../hooks/useCustomBack";
import { userState } from "../store/userState";
import { Container } from "../components/layout/Container";

export const INITIAL_DATA: Plan = {
  title: "",
  plan_id: 0,
  user_id: "",
  cities: [],
  period: [String(new Date()), String(new Date())],
  selectedPlaces: [],
};

const PlanPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [step, setStep] = useState<
    "도시선택" | "날짜선택" | "장소검색" | "일정계획"
  >("도시선택");
  const { email } = useRecoilValue(userState);
  const planDataParam = location?.state?.planData || null;
  const resetPlanData = useResetRecoilState(planState);
  const setSearchPlaces = useSetRecoilState(searchPlacesState);
  const [planData, setPlanData] = useRecoilState(planState);

  // useEffect(() => {
  //   // 최초에만 planDataParam을 recoil의 planData에 설정
  //   if (planDataParam && planData.title === "") {
  //     setPlanData({ ...planDataParam });
  //     setStep("일정계획");
  //   }

  //   return () => {
  //     resetPlanData();
  //     setSearchPlaces([]);
  //   };
  // }, []);

  const handleClickPrev = () => {
    console.log("step : " + step);

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
    }
  };

  const handleSubmit = (title: string) => {
    try {
      if (location.pathname === "/plan") {
        createPlan({ ...planData, user_id: email, title });
      } else {
        modifyPlan(planData.plan_id, planData);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // useCustomBack(handleClickPrev);

  return (
    <Container>
      <PlanPageBlock>
        {step !== "도시선택" && <PrevStep onPrev={handleClickPrev} />}
        {step === "도시선택" && (
          <CityArea
            onNext={() => setStep("날짜선택")}
            onPrev={handleClickPrev}
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
          <PlanArea planData={planData} onSubmit={handleSubmit} />
        )}
      </PlanPageBlock>
    </Container>
  );
};

const PlanPageBlock = styled.main`
  height: 100%;
`;

export default PlanPage;
