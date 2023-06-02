import Map from "./Map";
import { useRecoilValue } from "recoil";
import { searchState } from "../../store/searchState";
import { InfoWindow } from "@react-google-maps/api";

const SearchMap = () => {
  const searchResult = useRecoilValue(searchState);
  return (
    <Map>
      {/* {searchResult.length > 0 &&
        searchResult.map((item, index) => {
          <InfoWindow
            key={index}
            position={item.geometry.location}
          ></InfoWindow>;
        })} */}
    </Map>
  );
};

export default SearchMap;
