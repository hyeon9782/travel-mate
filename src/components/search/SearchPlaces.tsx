import styled from "styled-components";
import Input from "../common/Input";
import SearchDetail from "./SearchDetail";
import SearchMap from "../google/SearchMap";

const SearchPlaces = () => {
  return (
    <SearchPlacesBlock>
      <div className="search-block">
        <Input />
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
    width: 50%;
  }

  .map-block {
    width: 50%;
  }
`;

export default SearchPlaces;
