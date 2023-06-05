import styled from "styled-components";
import Input from "../common/Input";
import ResultList from "./ResultList";
import SearchMap from "../google/SearchMap";
import axios from "axios";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { placesState } from "../../store/placesState";
import { searchState } from "../../store/searchState";

const SearchPlaces = () => {
  const setPlaces = useSetRecoilState(placesState);
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
    setPlaces(res.data);
  };
  return (
    <SearchPlacesBlock>
      <div className="search-block">
        <Input onSubmit={handleSubmit} />
        <ResultList />
      </div>
      <div className="map-block">
        <SearchMap />
      </div>
    </SearchPlacesBlock>
  );
};

const SearchPlacesBlock = styled.div`
  display: flex;
  .search-block {
    /* box-sizing: border-box; */
    width: 50%;
    padding: 10px;
  }

  .map-block {
    width: 50%;
  }
`;

export default SearchPlaces;
