import styled from "styled-components";
import Cities from "./Cities";
import { useRecoilValue } from "recoil";
import { citiesState } from "../../store/citiesState";
import SeletedCities from "./SeletedCities";
import DoneButton from "../plan/DoneButton";
import CitySubHeader from "./CitySubHeader";
import { City, Plan } from "../../types";

type Props = {
  onNext: () => void;
  onPrev: () => void;
  onCitySelection: (isSelect: boolean, city: City) => void;
  planData: Plan;
};
const CityArea = ({ onNext, onPrev, planData, onCitySelection }: Props) => {
  const cities = useRecoilValue(citiesState);

  return (
    <CityAreaBlock>
      <div className="box">
        <CitySubHeader onPrev={onPrev} />
        <Cities
          cities={cities}
          onCitySelection={onCitySelection}
          planData={planData}
        />
      </div>
      <SeletedBox>
        {planData?.cities?.length !== 0 && (
          <SeletedCities
            selectedCities={planData?.cities}
            onAddCity={onCitySelection}
          />
        )}
      </SeletedBox>
      <BtnBox>
        <DoneButton
          onNext={onNext}
          disabled={planData?.cities?.length === 0 ? true : false}
        >
          {planData?.cities?.length > 0
            ? planData?.cities?.length !== 1
              ? `${planData?.cities[0]?.city} 외 ${planData?.cities?.length}개 선택 완료`
              : `${planData?.cities[0]?.city} 선택 완료`
            : planData?.cities?.length !== 1 && "최소 1개 이상의 도시 선택"}
        </DoneButton>
      </BtnBox>
    </CityAreaBlock>
  );
};

const CityAreaBlock = styled.section`
  position: relative;
  box-sizing: border-box;
  height: 100%;
  .box {
    min-height: calc(100% - 68px);
  }
`;

const SeletedBox = styled.div`
  width: 100%;
  background-color: white;
  border-top: 1px solid lightgray;
  position: sticky;
  bottom: 0;
  left: 0;
`;

const BtnBox = styled.div`
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  background-color: white;
  position: sticky;
  bottom: 0;
  left: 0;
`;

export default CityArea;
