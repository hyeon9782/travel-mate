import Map from "./Map";
import { useRecoilValue } from "recoil";
import { Marker } from "@react-google-maps/api";
import { selectedPlacesState } from "../../store/selectedPlacesState";

const SearchMap = () => {
  const selectPlaces = useRecoilValue(selectedPlacesState);
  return (
    <Map position={selectPlaces.at(-1)}>
      {selectPlaces &&
        selectPlaces.map((item) => (
          <Marker key={item.place_id} position={item.geometry.location} />
        ))}
    </Map>
  );
};

export default SearchMap;
