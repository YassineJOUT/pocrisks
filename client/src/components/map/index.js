import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import { token } from "../../util/config";

mapboxgl.accessToken = token;

const Map = () => {
  const mapContainerRef = useRef(null);

  const [state, setState] = useState({
    lng: -7,
    lat: 33,
    zoom: 6,
  });

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [state.lng, state.lat],
      zoom: state.zoom,
    });
  }, []);

  return (
    <>
      <div ref={(el) => (mapContainerRef.current = el)} className="mapbox" />
    </>
  );
};

export default Map;
