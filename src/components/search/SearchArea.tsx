import styled from "styled-components";
import SearchMap from "../google/SearchMap";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { searchState } from "../../store/searchState";
import Input from "../common/Input";
import ResultList from "./ResultList";
import { searchPlacesState } from "../../store/searchPlacesState";
import PlacesTab from "../places/PlacesTab";
import axios from "axios";

const PlacesArea = () => {
  const setSearchPlaces = useSetRecoilState(searchPlacesState);
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
  return (
    <PlacesAreaBlock>
      <PlacesTab />
      <SearchBlock>
        <SearchBox>
          <InputBox>
            <Input onSubmit={handleSubmit} />
          </InputBox>
          <ResultList />
        </SearchBox>
        <MapBox>
          <SearchMap />
        </MapBox>
      </SearchBlock>
    </PlacesAreaBlock>
  );
};

const PlacesAreaBlock = styled.article`
  height: 100%;
`;

const SearchBlock = styled.article`
  display: flex;
  height: 80%;
`;

const InputBox = styled.div`
  padding: 10px;
`;

const SearchBox = styled.div`
  width: 50%;
  height: 100%;
  padding: 10px;
`;

const MapBox = styled.div`
  width: 50%;
`;

export default PlacesArea;
