import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Container } from "../components/layout/Container";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../store/userState";
import PrevStep from "../components/plan/PrevStep";
import CityArea from "../components/cities/CityArea";
import DateArea from "../components/date/DateArea";
import SearchArea from "../components/search/SearchArea";
import PlanArea from "../components/plan/PlanArea";
import { createPlan, modifyPlan } from "../service/plan";

const PlanEditPage = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { id } = useParams();
  const [step, setStep] = useState<
    "도시선택" | "날짜선택" | "장소검색" | "일정계획"
  >("일정계획");
  const { email } = useRecoilValue(userState);

  console.log(id);

  const [planData, setPlanData] = useState({
    title: "",
    plan_id: 0,
    user_id: "",
    cities: [],
    period: [String(new Date()), String(new Date())],
    selectedPlaces: [],
  });

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

  const handleSubmit = (title: string) => {
    try {
      if (pathname === "/plan") {
        createPlan({ ...planData, user_id: email, title });
      } else {
        modifyPlan(planData.plan_id, planData);
      }
    } catch (err) {
      console.error(err);
    }
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
