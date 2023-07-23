import Map from "./Map";
import { useRecoilValue } from "recoil";
import { Marker } from "@react-google-maps/api";
import { selectedPlacesState } from "../../store/selectedPlacesState";
import { planState } from "../../store/planState";

const SearchMap = () => {
  const selectPlaces = useRecoilValue(selectedPlacesState);
  const planData = useRecoilValue(planState);
  return (
    <Map position={planData.selectedPlaces?.at(-1)}>
      {planData.selectedPlaces &&
        planData.selectedPlaces.map((item) => (
          <Marker key={item.place_id} position={item.geometry.location} />
        ))}
    </Map>
  );
};

export default SearchMap;
