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
      })
      .catch((err) => {
        purgeState()
        history.push("/login")
      });
  }, []);

  return <Map geoData={geoData} />;
};

export default MapContainer;
