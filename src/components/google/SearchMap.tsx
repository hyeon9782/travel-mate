import Map from "./Map";
import { Marker } from "@react-google-maps/api";
import { Plan } from "../../types";
type Props = {
  planData: Plan;
};
const SearchMap = ({ planData }: Props) => {
  return (
    <Map type="검색" planData={planData}>
      {planData.selectedPlaces[0]?.name !== "" &&
        planData.selectedPlaces.map((item) => (
          <Marker key={item.place_id} position={item.geometry.location} />
        ))}
    </Map>
  );
};

export default SearchMap;
