import styled from "styled-components";
import SearchMap from "../google/SearchMap";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { searchState } from "../../store/searchState";
import Input from "../common/Input";
import ResultList from "../search/ResultList";
import { searchPlacesState } from "../../store/searchPlacesState";
import PlacesTab from "./PlacesTab";

const PlacesArea = () => {
  const setSearchPlaces = useSetRecoilState(searchPlacesState);
  const searchData = useRecoilValue(searchState);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.currentTarget.value);
    const formElement = e.currentTarget;
    const inputElement = formElement.querySelector("input") as HTMLInputElement; //Form의 input 원소에 대한 참조
    const res = await axios.get(
      `http://localhost:4000/api/search?keyword=${
        inputElement.value
      }&radius=${5000}&latitude=${searchData.cityLocation.lat}&longitude=${
        searchData.cityLocation.lng
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
          <Input onSubmit={handleSubmit} />
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
`;

const SearchBox = styled.div`
  width: 50%;
  padding: 10px;
`;

const MapBox = styled.div`
  width: 50%;
`;

export default PlacesArea;
