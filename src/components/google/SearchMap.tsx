import Map from "./Map";
import { useRecoilValue } from "recoil";
import { searchState } from "../../store/searchState";
import { Marker } from "@react-google-maps/api";

const SearchMap = () => {
  const searchResult = useRecoilValue(searchState);
  return (
    <Map>
      {searchResult.length > 0 &&
        searchResult.map((item) => (
          // <InfoWindow key={item.place_id} position={item.geometry.location}>
          //   <div>{item.place_id}</div>
          // </InfoWindow>
          <Marker key={item.place_id} position={item.geometry.location} />
        ))}
    </Map>
  );
};

export default SearchMap;
