import Map from "./Map";
import { useRecoilValue } from "recoil";
import { Marker } from "@react-google-maps/api";
import { planState } from "../../store/planState";

const SearchMap = () => {
  const planData = useRecoilValue(planState);
  return (
    <Map type="검색">
      {planData.selectedPlaces[0]?.name !== "" &&
        planData.selectedPlaces.map((item) => (
          <Marker key={item.place_id} position={item.geometry.location} />
        ))}
    </Map>
  );
};

export default SearchMap;
