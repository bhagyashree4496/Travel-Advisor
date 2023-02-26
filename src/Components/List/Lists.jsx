import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import {
  Select,
  InputLabel,
  FormControl,
  MenuItem,
  SelectChangeEvent,
} from "@material-ui/core";
import Placedeatils from "../Placedetails/Placedetails";
export default function Lists({ places, type, setType, rating, setRating }) {
  console.log("hiiii", places);

  useEffect(() => {
    console.log(type);
  }, [type]);
  return (
    <div className="container mx-auto px-0 ">
      <h5 className=" text-center mt-3 ">
        Hotels, Restaurants & Attractions around you
      </h5>
      <Grid container spacing={3} style={{ width: "100%" }} className="ms-2">
        <Grid item xs={6}>
          {/* <select
              className="form-select "
              aria-label="Default select example"
              value={type}
              onChange={(e) => {
                setType(e.target.value);
                console.log(e.target.value);
              }}
            >
              <option value="restaurants">Restaurants</option>
              <option value="hotels">Hotels</option>
              <option value="attractions">Attractions</option>
            </select> */}
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={type}
              onChange={(e) => {
                setType(e.target.value);
                console.log("hi i m in onchane type", e.target.value, type);
              }}
              label="type"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={rating}
              onChange={(e) => {
                setRating(e.target.value);
              }}
              label="rating"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="4">Above 4</MenuItem>
              <MenuItem value="3">Above 3</MenuItem>
              <MenuItem value="">All</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <div className="container   overflow-auto " style={{ height: "450px" }}>
        {places?.map((place, i) => {
          return (
            <div className="container mb-3 " key={i}>
              <Placedeatils place={place}></Placedeatils>
            </div>
          );
        })}
      </div>
    </div>
  );
}
