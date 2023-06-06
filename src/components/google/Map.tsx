import { GoogleMap, useLoadScript } from "@react-google-maps/api";

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
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_APP_GOOGLE_API_KEY,
  });

  if (!isLoaded) {
    return null;
  }

  return (
    <GoogleMap
      zoom={14}
      mapContainerStyle={size}
      center={position?.cityLocation ? position.cityLocation : center}
    >
      {children}
    </GoogleMap>
  );
};

export default Map;
