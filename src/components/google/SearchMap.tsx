import Map from "./Map";
import { useRecoilValue } from "recoil";
import { Marker } from "@react-google-maps/api";
import { searchState } from "../../store/searchState";
import { selectPlacesState } from "../../store/selectPlacesState";

const SearchMap = () => {
  const selectPlaces = useRecoilValue(selectPlacesState);
  const searchData = useRecoilValue(searchState);

  return (
    <Map position={searchData}>
      {selectPlaces.length > 0 &&
        selectPlaces.map((item) => (
          <Marker key={item.place_id} position={item.geometry.location} />
        ))}
    </Map>
  );
};

export default SearchMap;
