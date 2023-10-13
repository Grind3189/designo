import { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

interface MapProp {
    latitude: number
    longitude: number
    location: string
}

const Map = ({latitude, longitude, location}: MapProp) => {

  useEffect(() => {
    const getMap = async () => {
      const map = L.map(location).setView(
        [latitude, longitude],
        19,
      );
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 17,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);
      L.marker([latitude, longitude]).addTo(
        map,
      );
    };
    getMap();
  }, []);
  return <div id={location} className="h-[320px] md:rounded-[15px] md:h-[326px] xl:w-[35%]" />;
};

export default Map;
