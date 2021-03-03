import React, { useEffect, useState } from "react";
import Mapgl, { Marker, Popup } from "react-map-gl";
import Toronto from '../pexels-andrea-piacquadio-733872.jpg';
const Maplocation = () => {
    const [Pop, setPop] = useState(null);
  const [viewport, setViewport] = useState({
    latitude: 43.683334,
    longitude: -79.76667,
    width: "100vw",
    height: "70vh",
    zoom: 12,
  });

  
  return (
    <div className="map mb-xl">
      <Mapgl
        mapboxApiAccessToken="pk.eyJ1IjoiaGFya2lyYXRzaW5naHZpcmRpIiwiYSI6ImNrazIxd2JobTB3d3EydnQxczd6cWp6cmcifQ.QoxRNRFF46cjlcZ1yz61jg"
        {...viewport}
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
        mapStyle="mapbox://styles/harkiratsinghvirdi/cklehx9sk15x617rx2kvkc6wv"
      >
        <Marker
          onClick={(e) => {
            e.preventDefault();
            setPop(true);
          }}
          latitude={43.683334}
          longitude={-79.76667}
        >
          <button className="marker-btn">
            <img
              src={Toronto}
              style={{ width: "4rem", height: "4rem" }}
              alt=""
            />
          </button>
        </Marker>

        {Pop ? (
          <Popup
            latitude={43.683334}
            longitude={-79.76667}
            onClose={() => setPop(null)}
          >
            <div>
              <p>Royal Estate Agency</p>
              <p>+1 6476851425</p>
            </div>
          </Popup>
        ) : null}
      </Mapgl>
    </div>
  );
};

export default Maplocation;
