import React, { useState } from "react";
import "./style.css";
import { Autocomplete } from "@react-google-maps/api";

export default function Header({ setCoords }) {
  const [autocomplete, setautocomplete] = useState(null);
  const onLoad = (autoc) => {
    setautocomplete(autoc);
  };
  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    setCoords({ lat: lat, lng: lng });
  };
  return (
    <nav
      className="navbar navbar-light "
      style={{
        backgroundColor: "purple",
      }}
    >
      <div className="container-fluid">
        <a className="navbar-brand  text-light logo">Travel Advisor</a>

        <form className="d-flex align-items-center justify-content-center ">
          <h6 className="text-light me-1">Search for places</h6>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Explore new places"
              aria-label="Search"
            />
          </Autocomplete>
        </form>
      </div>
    </nav>
  );
}
