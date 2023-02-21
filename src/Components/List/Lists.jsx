import React, { useState } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import Placedeatils from "../Placedetails/Placedetails";
export default function Lists({ places }) {
  console.log("hiiii", places);

  const [type, setType] = useState("Restaurants");
  const [rating, setRating] = useState("");
  return (
    <div className="container mx-0 px-0">
      <h5 className=" text-center mt-3 ">
        Hotels, Restaurants & Attractions around you
      </h5>
      <Grid container spacing={3} style={{ width: "100%" }} className="ms-2">
        <Grid item xs={6}>
          <form className=" d-flex justify-content-center">
            <select
              className="form-select "
              aria-label="Default select example"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="Restaurants">Restaurants</option>
              <option value="Hotels">Hotels</option>
              <option value="Attractions">Attractions</option>
            </select>
          </form>
        </Grid>
        <Grid item xs={6}>
          <form className=" d-flex justify-content-center">
            <select
              className="form-select"
              aria-label="Default select example"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <option value={1}>All</option>
              <option value={3}>Above 3</option>
              <option value={4}>Above 4</option>
            </select>
          </form>
        </Grid>
      </Grid>
      <div className="container   overflow-auto" style={{ height: "450px" }}>
        {places?.map((place, i) => {
          return (
            <div className="container mb-3" key={i}>
              <Placedeatils place={place}></Placedeatils>
            </div>
          );
        })}
      </div>
    </div>
  );
}
