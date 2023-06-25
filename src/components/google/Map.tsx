import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useRecoilValue } from "recoil";
import { searchState } from "../../store/searchState";

type Props = {
  children: React.ReactNode;
  size: object;
  position: object;
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const Map = ({
  children,
  size = { width: "100%", height: "100%" },
  position,
}: Props) => {
  const searchData = useRecoilValue(searchState);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_APP_GOOGLE_API_KEY,
  });

  if (!isLoaded) {
    return null;
  }

  return (
    <GoogleMap
      zoom={13}
      mapContainerStyle={size}
      center={
        position?.geometry ? position.geometry.location : searchData.location
      }
    >
      {children}
    </GoogleMap>
  );
};

export default Map;
