import React from "react";
import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({property}) => {
  return (
 
    <div className="searchItem">
      <img
        src={property.images}
        className="siImg"
      />
      {console.log(property.images)}
      <div className="siDesc">
        <h1 className="siTitle">{property.name} {property.location}</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          {property.images}
        </span>
        <span className="siFeatures">
          {property.keyword}
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>{property.rating}</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$112</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to="/property/hotelDetails" target="_blank" >
            <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;