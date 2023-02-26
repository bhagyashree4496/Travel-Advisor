import React from "react";
import { Grid } from "@material-ui/core";
import { Chip } from "@material-ui/core";
import photo from "./rest.jpg";
import "./style.css";

function Placedetails({ place }) {
  return (
    <>
      <div className="card mt-4 ">
        <img
          src={place.photo ? place.photo.images.large.url : photo}
          className="card-img-top hover-zoom photoscroll"
          alt="hotel image"
          height="auto"
          style={{ maxHeight: "350px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{place.name}</h5>
          <Grid container spacing={1} style={{ width: "100%" }}>
            <Grid item xs={6}>
              <p className="card-subtitle small ">Price</p>
            </Grid>
            <Grid item xs={6}>
              <p className="card-subtitle small text-end">
                {place.price ? place.price : "--"}
              </p>
            </Grid>
          </Grid>
          <Grid container spacing={1} style={{ width: "100%" }}>
            <Grid item xs={3}>
              <p className="card-subtitle small ">Ranking</p>
            </Grid>
            <Grid item xs={9}>
              <p className="card-subtitle small text-end">
                {place.ranking ? place.ranking : "--"}
              </p>
            </Grid>
          </Grid>
          <Grid container spacing={1} style={{ width: "100%" }}>
            <Grid item xs={3}>
              <p className="card-subtitle small ">Rating</p>
            </Grid>
            <Grid item xs={9}>
              <p className="card-subtitle small text-end">
                {place.rating ? `${place.rating}⭐` : "--"}
              </p>
            </Grid>
          </Grid>
          <Grid container spacing={1} style={{ width: "100%" }}>
            <Grid item xs={3}>
              <p className="card-subtitle small  ">Phone</p>
            </Grid>
            <Grid item xs={9}>
              <p className="card-subtitle small  text-end">
                {place.phone ? place.phone : "--"}
              </p>
            </Grid>
          </Grid>
          <div className="d-flex w-100 flex-wrap">
            {place?.cuisine?.map(({ name }, i) => {
              return (
                <div key={i}>
                  <Chip label={name} size="small" style={{ height: "20px" }} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Placedetails;
