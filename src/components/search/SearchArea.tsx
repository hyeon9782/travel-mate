import styled from "styled-components";
import SearchMap from "../google/SearchMap";
import ResultList from "./ResultList";
import PlacesTab from "../places/PlacesTab";
import DoneButton from "../plan/DoneButton";
import { handlePlaceSelection } from "../../service/place";
import { Place, Plan } from "../../types";
import SearchInput from "./SearchInput";
import { useState } from "react";
import { useSearchPlaces } from "../../hooks/useSearchPlaces";

type Props = {
  onNext: () => void;
  planData: Plan;
  setPlanData: any;
};

const SearchArea = ({ onNext, planData, setPlanData }: Props) => {
  const [keyword, setKeyword] = useState("");
  const { data: places } = useSearchPlaces(keyword, false);

  const handlePlaceSelectionRemove = (place: Place) => {
    handlePlaceSelection(true, setPlanData, place);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setKeyword(e.target.keyword.value);
  };

  return (
    <SearchAreaBlock>
      <MapBox>
        <SearchMap planData={planData} />
      </MapBox>
      <SearchBlock>
        <PlacesTab
          handleClick={handlePlaceSelectionRemove}
          planData={planData}
        />
        <SearchBox>
          <InputBox>
            <SearchInput onSubmit={handleSubmit} />
          </InputBox>
          <ResultList
            planData={planData}
            setPlanData={setPlanData}
            keyword={keyword}
          />
        </SearchBox>
      </SearchBlock>
      <BtnBox>
        <DoneButton onNext={onNext}>장소 선택 완료</DoneButton>
      </BtnBox>
    </SearchAreaBlock>
  );
};

const SearchAreaBlock = styled.article`
  position: relative;
  width: 100%;
  height: calc(100vh - 44.59px);
  overflow: hidden;
`;

const SearchBlock = styled.article`
  display: flex;
  flex-direction: column;
`;

const InputBox = styled.div`
  padding: 10px;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  margin-top: 5px;
`;

const SearchBox = styled.div`
  width: 100%;
`;

const MapBox = styled.div`
  height: 250px;
  background-color: gray;
`;

const BtnBox = styled.div`
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  position: absolute;
  bottom: 0px;
  left: 0;
`;

export default SearchArea;
