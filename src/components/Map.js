import React, { useState } from "react";
import Mapgl from "react-map-gl";

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 45.5111,
    longitude: -75.2319,
    width: "100vw",
    height: "100vh",
    zoom: 10,
  });

  return (
    <div className="map">
      <Mapgl
        mapboxApiAccessToken="pk.eyJ1IjoiaGFya2lyYXRzaW5naHZpcmRpIiwiYSI6ImNrazIxd2JobTB3d3EydnQxczd6cWp6cmcifQ.QoxRNRFF46cjlcZ1yz61jg"
        {...viewport}
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
        mapStyle="mapbox://styles/harkiratsinghvirdi/cklehx9sk15x617rx2kvkc6wv"
      ></Mapgl>
    </div>
  );
};

export default Map;
