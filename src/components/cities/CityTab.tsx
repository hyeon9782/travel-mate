import styled from "styled-components";
import Cities from "./Cities";
import { useEffect, useState } from "react";
import SeletedCities from "./SeletedCities";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { searchState } from "../../store/searchState";
import CitiesTag from "./CityTags";
import DoneButton from "../plan/DoneButton";
import { citiesState } from "../../store/citiesState";
import { toggle } from "../../service/city";
import { selectedCitiesState } from "../../store/seletedCitiesState";
import { isDomesticState } from "../../store/isDomesticState";

const CityTab = ({ moveStep }: (direction: number) => void) => {
  const setSearchData = useSetRecoilState(searchState);
  const [isDomestic, setIsDomestic] = useRecoilState(isDomesticState);
  const [cities, setCities] = useRecoilState(citiesState);
  // const [selectCities, setSelectCities] = useState([]);
  const selectedCities = useRecoilValue(selectedCitiesState);

  useEffect(() => {
    setCities((prev) => prev.filter((v) => v.isDomestic === isDomestic));
  }, []);

  return (
    <CityTabBlock>
      <ButtonBox>
        <CityTabButton
          onClick={() => toggle(false, setIsDomestic, setCities)}
          className={!isDomestic ? "active" : ""}
        >
          해외도시
        </CityTabButton>
        <CityTabButton
          onClick={() => toggle(true, setIsDomestic, setCities)}
          className={isDomestic ? "active" : ""}
        >
          국내도시
        </CityTabButton>
      </ButtonBox>
      {!isDomestic && (
        <CitiesTag
          tags={["전체", "일본", "동남아시아", "유럽", "미주", "중화/중국"]}
        />
      )}
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
    </CityTabBlock>
  );
};

const CityTabBlock = styled.div`
  position: relative;
`;

const ButtonBox = styled.div`
  border-bottom: 1px solid lightgray;
`;

const CityTabButton = styled.button`
  width: 50%;
  font-size: 1rem;
  padding: 10px;
  font-weight: bold;
  color: gray;
  background-color: white;
  border: none;
  border-top: 1px solid lightgray;
  &.active {
    color: black;
    border-bottom: 2px solid blue;
  }
`;

const SeletedBox = styled.div`
  /* padding: 10px; */
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

export default CityTab;
