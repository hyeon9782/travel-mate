import styled from "styled-components";
import Input from "../common/Input";
import ResultList from "./ResultList";
import SearchMap from "../google/SearchMap";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { searchState } from "../../store/searchState";
import { searchPlacesState } from "../../store/searchPlacesState";
import axios from "axios";

const SearchPlaces = () => {
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

    const cols = [
      "geometry",
      "name",
      "place_id",
      "ratings",
      "types",
      "user_ratings_total",
    ];

    const arr = res.data.filter((item) => {
      console.log(Object.keys(item));
      console.log(Object.keys(item)[0]);
      return cols.includes(Object.keys(item)[0]);
    });

    console.log(arr);

    setSearchPlaces(arr);
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
