import { useNavigate, useParams } from "react-router-dom";
import { Container } from "../components/layout/Container";
import { useState } from "react";
import PrevStep from "../components/plan/PrevStep";
import CityArea from "../components/cities/CityArea";
import DateArea from "../components/date/DateArea";
import SearchArea from "../components/search/SearchArea";
import PlanArea from "../components/plan/PlanArea";
import { modifyPlan } from "../service/plan";
import { PLAN_INITIAL_DATA } from "../constants/plan";

const PlanEditPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [step, setStep] = useState<
    "도시선택" | "날짜선택" | "장소검색" | "일정계획"
  >("일정계획");

  console.log(id);

  const [planData, setPlanData] = useState({ ...PLAN_INITIAL_DATA });

  //   useEffect(() => {}, []);

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

  const handleSubmit = () => {
    modifyPlan(planData.plan_id, planData);
  };

  return (
    <Container>
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
    </Container>
  );
};

export default PlanEditPage;
