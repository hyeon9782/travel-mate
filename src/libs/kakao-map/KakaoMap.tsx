import { useQueryClient } from "@tanstack/react-query";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const KakaoMap = () => {
  const queryClient = useQueryClient();

  const searchPlaces = queryClient.getQueryData(["search-places", true]);

  console.log(searchPlaces);

  return (
    <Map
      center={{ lat: 33.5563, lng: 126.79581 }}
      style={{ width: "100%", height: "100%" }}
    >
      {searchPlaces?.map((place) => {
        return (
          <MapMarker
            key={place.id}
            position={{ lat: Number(place.y), lng: Number(place.x) }}
          >
            <div style={{ color: "#000" }}>{place.place_name}</div>
          </MapMarker>
        );
      })}
    </Map>
  );
};

export default KakaoMap;
