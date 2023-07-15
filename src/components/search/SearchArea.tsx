import styled from "styled-components";
import SearchMap from "../google/SearchMap";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { searchState } from "../../store/searchState";
import Input from "../common/Input";
import ResultList from "./ResultList";
import { searchPlacesState } from "../../store/searchPlacesState";
import PlacesTab from "../places/PlacesTab";
import axios from "axios";
import { Place } from "../../types";
import { selectPlacesState } from "../../store/selectPlacesState";
import DoneButton from "../plan/DoneButton";

const PlacesArea = ({ moveStep }) => {
  const setSearchPlaces = useSetRecoilState(searchPlacesState);
  const [selectPlaces, setSelectPlaces] = useRecoilState(selectPlacesState);
  const searchData = useRecoilValue(searchState);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formElement = e.currentTarget;
    const inputElement = formElement.querySelector("input") as HTMLInputElement; //Form의 input 원소에 대한 참조
    const res = await axios.get(
      `http://localhost:4000/api/search?keyword=${
        inputElement.value
      }&radius=${5000}&latitude=${searchData.location.lat}&longitude=${
        searchData.location.lng
      }`
    );
    console.log(res);
    console.log(res.data);

    setSearchPlaces(res.data);
  };

  // 클릭 시 장소 선택 취소
  const handleClick = (place: Place) => {
    const newSelectPlaces = selectPlaces.filter(
      (selectPlace) => selectPlace.place_id !== place.place_id
    );
    setSelectPlaces(newSelectPlaces);
  };
  return (
    <PlacesAreaBlock>
      <PlacesTab selectPlace={handleClick} />
      <SearchBlock>
        <MapBox>
          <SearchMap />
        </MapBox>
        <SearchBox>
          <InputBox>
            <Input
              onSubmit={handleSubmit}
              holder="가고 싶은 장소를 검색해보세요!"
            />
          </InputBox>
          <ResultList />
        </SearchBox>
      </SearchBlock>
      <DoneButton moveStep={moveStep}>장소 선택 완료</DoneButton>
    </PlacesAreaBlock>
  );
};

const PlacesAreaBlock = styled.article`
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

export default PlacesArea;
