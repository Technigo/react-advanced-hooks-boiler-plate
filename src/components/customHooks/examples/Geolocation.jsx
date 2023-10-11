import { useGeolocation } from "../../../hooks/useGeolocation";

export const Geolocation = () => {
  const coords = useGeolocation(); // Use the custom hook
  return (
    <div>
      <p>Latitude: {coords?.latitude}</p>
      <p>Longitude: {coords?.longitude}</p>
    </div>
  );
};
