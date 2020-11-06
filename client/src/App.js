import React, { useEffect, useState } from "react";
import Map from "./components/map";
import { getGeoData } from "./service/geodata";
import "./style.css";

const App = () => {
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    getGeoData()
      .then((res) => setGeoData(res.data))
      .catch((err) => console.error("API ERROR : ", err.message));
  }, [geoData]);

  return (
    <>
      <Map geoData={geoData} />
    </>
  );
};

export default App;
