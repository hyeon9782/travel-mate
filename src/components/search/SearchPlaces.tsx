import styled from "styled-components";
import Input from "../common/Input";
import SearchDetail from "./SearchDetail";
import SearchMap from "../google/SearchMap";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { searchState } from "../../store/searchState";

const SearchPlaces = () => {
  const setSearchState = useSetRecoilState(searchState);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    const inputElement = formElement.querySelector("input") as HTMLInputElement; //Form의 input 원소에 대한 참조
    const res = await axios.get(
      `http://localhost:4000/api/search?keyword=${inputElement.value}`
    );
    console.log(res);
    console.log(res.data);
    setSearchState(res.data);
  };
  return (
    <SearchPlacesBlock>
      <div className="search-block">
        <Input onSubmit={handleSubmit} />
        <SearchDetail />
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
