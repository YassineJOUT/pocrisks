import React, { useEffect, useState } from "react";
import Map from "../../components/map";
import { getGeoData } from "../../service/repository";
import { history } from "../../util/history";
import { purgeState } from "../../util/useAuth";

const MapContainer = () => {
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    getGeoData()
      .then((res) => {
        setGeoData(res.data);
        console.log("API GEO DATA ", res.data);
      })
      .catch((err) => {
        console.error("API ERROR : ", err.response.status);
        purgeState()
        history.push("/login")
      });
  }, []);

  return <Map geoData={geoData} />;
};

export default MapContainer;
