import styled from "styled-components";
import { useState } from "react";
import PlanArea from "../components/plan/PlanArea";
import CityArea from "../components/cities/CityArea";
import DateArea from "../components/date/DateArea";
import SearchArea from "../components/search/SearchArea";
import { useNavigate } from "react-router-dom";
import PrevStep from "../components/plan/PrevStep";
import { useRecoilValue } from "recoil";
import { createPlan } from "../service/plan";
import { userState } from "../store/userState";
import { Container } from "../components/layout/Container";
import { PLAN_INITIAL_DATA } from "../constants/plan";
import { City, Plan } from "../types";

const PlanPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<
    "도시선택" | "날짜선택" | "장소검색" | "일정계획"
  >("도시선택");
  const { email } = useRecoilValue(userState);
  const [planData, setPlanData] = useState<Plan>({ ...PLAN_INITIAL_DATA });

  const handleClickPrev = () => {
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
    createPlan({ ...planData, user_id: email, title });
  };

  // 도시 선택 또는 취소
  const handleCitySelection = (isSelect: boolean, city: City) => {
    if (isSelect) {
      // 도시 취소
      setPlanData((prevData) => ({
        ...prevData,
        cities: prevData.cities.filter((c) => c !== city),
      }));
    } else {
      // 도시 선택
      setPlanData((prevData) => ({
        ...prevData,
        cities: [...prevData.cities, city],
      }));
    }
  };

  return (
    <Container>
      <PlanPageBlock>
        {step !== "도시선택" && <PrevStep onPrev={handleClickPrev} />}
        {step === "도시선택" && (
          <CityArea
            onNext={() => setStep("날짜선택")}
            onPrev={handleClickPrev}
            onCitySelection={handleCitySelection}
            planData={planData}
          />
        )}
        {step === "날짜선택" && (
          <DateArea
            onNext={() => setStep("장소검색")}
            planData={planData}
            setPlanData={setPlanData}
          />
        )}
        {step === "장소검색" && (
          <SearchArea
            onNext={() => setStep("일정계획")}
            planData={planData}
            setPlanData={setPlanData}
          />
        )}
        {step === "일정계획" && (
          <PlanArea
            planData={planData}
            onSubmit={handleSubmit}
            setPlanData={setPlanData}
          />
        )}
      </PlanPageBlock>
    </Container>
  );
};

const PlanPageBlock = styled.main`
  height: 100vh;
`;

export default PlanPage;
