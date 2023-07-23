import styled from "styled-components";
import SearchMap from "../google/SearchMap";
import Input from "../common/Input";
import ResultList from "./ResultList";
import PlacesTab from "../places/PlacesTab";
import DoneButton from "../plan/DoneButton";
import { handlePlaceSelection, searchPlaces } from "../../service/place";
import { Place } from "../../types";
import { useSetRecoilState } from "recoil";
import { planState } from "../../store/planState";

const SearchArea = ({ onNext }: () => void) => {
  const setPlanData = useSetRecoilState(planState);

  const handlePlaceSelectionRemove = (place: Place) => {
    handlePlaceSelection(true, setPlanData, place);
  };

  return (
    <SearchAreaBlock>
      <PlacesTab handleClick={handlePlaceSelectionRemove} />
      <SearchBlock>
        <MapBox>
          <SearchMap />
        </MapBox>
        <SearchBox>
          <InputBox>
            <Input
              onSubmit={searchPlaces}
              holder="가고 싶은 장소를 검색해보세요!"
            />
          </InputBox>
          <ResultList />
        </SearchBox>
      </SearchBlock>
      <DoneButtonBox>
        <DoneButton moveStep={onNext}>장소 선택 완료</DoneButton>
      </DoneButtonBox>
    </SearchAreaBlock>
  );
};

const SearchAreaBlock = styled.article`
  position: relative;
  height: calc(100vh - 41.59px);
`;

const DoneButtonBox = styled.div`
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const SearchBlock = styled.article`
  display: flex;
  flex-direction: column;
`;

const InputBox = styled.div`
  padding: 10px;
`;

const SearchBox = styled.div`
  width: 100%;
`;

const MapBox = styled.div`
  height: 200px;
  background-color: gray;
`;

export default SearchArea;
