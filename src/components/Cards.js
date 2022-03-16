import React from "react";
import data from "../data";
import { LocationMarkerIcon } from "@heroicons/react/solid";

export default function Cards(props) {
  return (
    <>
      <div className="card-cont">
        <img src={data[0].imageUrl} className="image" />
        <div className="card-details">
          <div className="card-loc">
            <LocationMarkerIcon className="marker-icon" />
            <p className="location">{data[0].location}</p>
            <a href={data[0].googleMapsUrl} className="maps">
              View on Google Maps
            </a>
          </div>
          <h2 className="card-heading">{props.title}</h2>
          <p className="dates">
            {data[0].startDate} - {data[0].endDate}
          </p>
          <p className="desc">{data[0].description}</p>
        </div>
      </div>
      <hr className="breakline" />
    </>
  );
}
