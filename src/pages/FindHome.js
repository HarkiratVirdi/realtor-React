import React, { useState, useEffect } from "react";
import HomeCard from "../components/HomeCard";
import axios from "axios";

const FindHome = () => {
  const [address, setAddress] = useState("");
  const [properties, setproperties] = useState([]);
    const [pins, setPins] = useState([]);
  const onSearch = async () => {
    let Latitude;
    let Longitude;
    let LongitudeMax;
    let LatitudeMax;

    await axios(
      `http://www.mapquestapi.com/geocoding/v1/address?key=pvsghb2CWyLCu9X61thqVq2X8e5FtuP7&location=${address}`
    )
      .then(async(res) => {
        Longitude = res.data.results[0].locations[0].latLng.lng;
        Latitude = res.data.results[0].locations[0].latLng.lat;

        if (Math.sign(Latitude) === -1) {
          LatitudeMax = Latitude  - 0.004;
        } else {
          LatitudeMax = Latitude + 0.004;
        }

        if (Math.sign(Longitude) === -1) {
          LongitudeMax = Longitude +0.004;
        } else {
          LongitudeMax = Longitude -0.004;
        }
      

    console.log("lat", Latitude);
    console.log("latM", LatitudeMax);
    console.log("long", Longitude);
    console.log("longM", LongitudeMax);

    const options = {
      method: "GET",
      url:
        "https://realtor-canadian-real-estate.p.rapidapi.com/properties/list-residential",
      params: {
        CurrentPage: "1",
        LatitudeMin: Latitude,
        LongitudeMax: LongitudeMax,
        RecordsPerPage: "50",
        LongitudeMin: Longitude,
        LatitudeMax: LatitudeMax,
        BedRange: "0-0",
        BathRange: "0-0",
        NumberOfDays: "0",
        CultureId: "1",
        PriceMin: "0",
        SortBy: "1",
        SortOrder: "A",
        RentMin: "0",
      },
      headers: {
        "x-rapidapi-key": "3055f960admsh414cf42ccecdc7bp1e7948jsn61613aff45cd",
        "x-rapidapi-host": "realtor-canadian-real-estate.p.rapidapi.com",
      },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log("results", response.data);
        setproperties(response.data.Results);
      })
      .catch(function (error) {
        console.error(error);
      });

    })
      .catch((err) => console.log(err));
  };

  return (
    <div className="findHome container">
      {/* <h1>Find Home</h1> */}

      <div className=" findHome_search">
        <div className="findHome_search_form">
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
      <div className="container">
        <div className="findHome_property">
                {properties.map((property) => {
                    return <HomeCard photo={property.Photo[0].HighResPath} mls={property.MlsNumber} price={property.Property.Price} lat={property.Property.Address.Latitude} long={property.Property.Address.Longitude} address={property.Property.Address.AddressText} type={property.Property.Type}/>
                })}
        </div>
      </div>
    </div>
  );
};

export default FindHome;
