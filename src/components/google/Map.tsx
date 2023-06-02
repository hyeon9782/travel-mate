import { LoadScript, GoogleMap } from "@react-google-maps/api";

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
  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_APP_GOOGLE_API_KEY}>
      <GoogleMap zoom={14} mapContainerStyle={containerStyle} center={center}>
        {children}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
