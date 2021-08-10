import React, { useState } from "react";
import House from "../pexels-pixabay-276551.jpg";
import { useHistory } from "react-router-dom";

const Hero = () => {
  const [address, setAddress] = useState("");
  const history = useHistory();

  const onSearch = async () => {
    history.push(`/findHome?location=${address}`);
  };
  return (
    <div className="hero">
      <div className="hero__image">
        <img src={House} alt="Living Room" />
      </div>

      <div className="hero__search">
        <div className="hero__search__form">
          <div className="hero__inputs">
            <input
              type="text"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              placeholder="Search by Postal Code, Neighbourhood, City or Address"
            />

            {window.innerWidth > 870 ? (
              <button onClick={onSearch}>Search Home</button>
            ) : (
              <button onClick={onSearch}>Search</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
