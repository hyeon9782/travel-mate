import styled from "styled-components";
import CityTab from "./CityTab";
import Cities from "./Cities";
import { useRecoilState, useRecoilValue } from "recoil";
import { citiesState } from "../../store/citiesState";
import SeletedCities from "./SeletedCities";
import DoneButton from "../plan/DoneButton";
import { selectedCitiesState } from "../../store/selectedCitiesState";
import CitySubHeader from "./CitySubHeader";

const CityArea = ({ moveStep }: (direction: number) => void) => {
  const [cities, setCities] = useRecoilState(citiesState);
  const selectedCities = useRecoilValue(selectedCitiesState);
  return (
    <CityAreaBlock>
      <CitySubHeader moveStep={moveStep} />
      <Cities cities={cities} />
      <SeletedBox>
        {selectedCities.length !== 0 && (
          <SeletedCities selectedCities={selectedCities} />
        )}
        <div className="done-btn-box">
          <DoneButton
            moveStep={moveStep}
            disabled={selectedCities.length === 0 ? true : false}
          >
            {selectedCities.length > 0
              ? selectedCities.length !== 1
                ? `${selectedCities[0].city} 외 ${selectedCities.length}개 선택 완료`
                : `${selectedCities[0].city} 선택 완료`
              : selectedCities.length !== 1 && "최소 1개 이상의 도시 선택"}
          </DoneButton>
        </div>
      </SeletedBox>
    </CityAreaBlock>
  );
};

const CityAreaBlock = styled.section`
  position: relative;
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
