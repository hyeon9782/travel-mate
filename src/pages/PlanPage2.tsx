import CityArea from "../components/cities/CityArea";
import DateArea from "../components/date/DateArea";
import { useFunnel } from "../hooks/useFunnel";
import { useState } from "react";

// const PlanPage2 = () => {
//   const [placeData, setPlaceData] = useState();
//   const [Funnul, setStep] = useFunnel<
//     "도시선택" | "날짜선택" | "장소검색" | "일정계획" | "미리보기"
//   >("도시선택");
//   return (
//     <Funnul>
//       <Funnul.step name="도시선택">
//         <CityArea onNext={() => setStep("날짜선택")} />
//       </Funnul.step>
//       <Funnul.step name="날짜선택">
//         <DateArea onNext={() => setStep("장소검색")} />
//       </Funnul.step>
//     </Funnul>
//   );
// };

// export default PlanPage2;
