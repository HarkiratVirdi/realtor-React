import React from "react";
import { Link } from "react-router-dom";

const HomeCard = ({ mls, photo, details, type, price, address }) => {
  console.log("price", price);
  console.log("mls", mls);
  console.log("photo", photo);
  console.log("type", type);

  return (
    <div className="homecard mt-l mb-l">
      <div className="homecard__img">
        <img src={photo} alt="" />
      </div>
      <div className="homecard__name h-4">{address}</div>
      <div className="homecard__details">
        <p>Bedroom: {details.Building.Bedrooms}</p>
        <p>Bathroom: {details.Building.BathroomTotal}</p>
        <p>Type: {type}</p>
        <p>Price: {price}</p>
      </div>
      <div className="homecard__contact h-4 cursor-pointer">
        <Link to="/contact">Contact Me</Link>
      </div>
    </div>
  );
};

export default HomeCard;
