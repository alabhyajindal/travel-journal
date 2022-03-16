import React from "react";
import data from "../data";
import { LocationMarkerIcon } from "@heroicons/react/solid";

export default function Cards(props) {
  return (
    <>
      <div className="card-cont">
        <img src={props.imageUrl} className="image" />
        <div className="card-details">
          <div className="card-loc">
            <LocationMarkerIcon className="marker-icon" />
            <p className="location">{props.location}</p>
            <a href={props.googleMapsUrl} className="maps">
              View on Google Maps
            </a>
          </div>
          <h2 className="card-heading">{props.title}</h2>
          <p className="dates">
            {props.startDate} - {props.endDate}
          </p>
          <p className="desc">{props.description}</p>
        </div>
      </div>
      <hr className="breakline" />
    </>
  );
}
