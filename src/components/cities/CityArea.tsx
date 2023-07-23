import styled from "styled-components";
import Cities from "./Cities";
import { useRecoilValue } from "recoil";
import { citiesState } from "../../store/citiesState";
import SeletedCities from "./SeletedCities";
import DoneButton from "../plan/DoneButton";
import CitySubHeader from "./CitySubHeader";
import { planState } from "../../store/planState";

type Props = {
  onNext: () => void;
  onPrev: () => void;
};
const CityArea = ({ onNext, onPrev }: Props) => {
  const cities = useRecoilValue(citiesState);
  const planData = useRecoilValue(planState);

  return (
    <CityAreaBlock>
      <CitySubHeader onPrev={onPrev} />
      <Cities cities={cities} />
      <SeletedBox>
        {planData?.cities?.length !== 0 && (
          <SeletedCities selectedCities={planData?.cities} />
        )}
        <div className="done-btn-box">
          <DoneButton
            moveStep={onNext}
            disabled={planData?.cities?.length === 0 ? true : false}
          >
            {planData.cities.length > 0
              ? planData.cities.length !== 1
                ? `${planData.cities[0].city} 외 ${planData.cities.length}개 선택 완료`
                : `${planData.cities[0].city} 선택 완료`
              : planData.cities.length !== 1 && "최소 1개 이상의 도시 선택"}
          </DoneButton>
        </div>
      </SeletedBox>
    </CityAreaBlock>
  );
};

const CityAreaBlock = styled.section`
  box-sizing: border-box;
  margin-bottom: 152px;
`;

const SeletedBox = styled.div`
  width: 100%;
  background-color: white;
  border-top: 1px solid lightgray;
  position: fixed; /* DoneButton이 고정될 수 있도록 설정 */
  bottom: 0; /* 화면 하단에 위치하도록 설정 */
  left: 0; /* 왼쪽 정렬을 위해 설정 (센터 정렬을 원한다면, left와 right를 조정) */

  .done-btn-box {
    padding: 10px;
  }
`;

export default CityArea;
