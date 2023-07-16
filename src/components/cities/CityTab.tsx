import styled from "styled-components";
import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { searchState } from "../../store/searchState";
import CitiesTag from "./CityTags";
import { citiesState } from "../../store/citiesState";
import { toggle } from "../../service/city";
import { isDomesticState } from "../../store/isDomesticState";

const CityTab = () => {
  const setSearchData = useSetRecoilState(searchState);
  const [isDomestic, setIsDomestic] = useRecoilState(isDomesticState);
  const [cities, setCities] = useRecoilState(citiesState);

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
    </CityTabBlock>
  );
};

const CityTabBlock = styled.div`
  background-color: white;
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

export default CityTab;
