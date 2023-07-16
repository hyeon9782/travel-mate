import styled from "styled-components";
import SearchMap from "../google/SearchMap";
import { useRecoilState } from "recoil";
import Input from "../common/Input";
import ResultList from "./ResultList";
import PlacesTab from "../places/PlacesTab";
import { Place } from "../../types";
import { selectedPlacesState } from "../../store/selectedPlacesState";
import DoneButton from "../plan/DoneButton";
import { removePlace, searchPlaces } from "../../service/place";

const SearchArea = ({ moveStep }) => {
  const [selectPlaces, setSelectPlaces] = useRecoilState(selectedPlacesState);

  // 클릭 시 장소 선택 취소
  const handleClick = (place: Place) => {
    removePlace(place, setSelectPlaces);
  };

  return (
    <SearchAreaBlock>
      <PlacesTab handleClick={handleClick} />
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
      <DoneButton moveStep={moveStep}>장소 선택 완료</DoneButton>
    </SearchAreaBlock>
  );
};

const SearchAreaBlock = styled.article`
  height: 100%;
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
  height: 100%;
`;

const MapBox = styled.div`
  height: 200px;
  background-color: gray;
`;

export default SearchArea;
