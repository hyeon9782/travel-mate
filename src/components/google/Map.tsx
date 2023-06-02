import { GoogleMap, useLoadScript } from "@react-google-maps/api";

type Props = {
  children: React.ReactNode;
};

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const Map = ({ children }: Props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_APP_GOOGLE_API_KEY,
  });

  if (!isLoaded) {
    return null;
  }

  return (
    <GoogleMap zoom={14} mapContainerStyle={containerStyle} center={center}>
      {children}
    </GoogleMap>
  );
};

export default Map;
