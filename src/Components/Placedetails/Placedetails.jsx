import React from "react";
import { Grid } from "@material-ui/core";

function Placedetails({ place }) {
  return (
    <>
      <div className="card">
        <img
          src={place.photo ? place.photo.images.medium.url : ""}
          className="card-img-top"
          alt="hotel image"
        />
        <div className="card-body">
          <h5 className="card-title">{place.name}</h5>

          <Grid container spacing={3} style={{ width: "100%" }}>
            <Grid item xs={6}>
              <p className="card-subtitle small ">Price</p>
            </Grid>
            <Grid item xs={6}>
              <p className="card-subtitle small text-end">{place.price}</p>
            </Grid>
          </Grid>
          <Grid container spacing={3} style={{ width: "100%" }}>
            <Grid item xs={3}>
              <p className="card-subtitle small ">Ranking</p>
            </Grid>
            <Grid item xs={9}>
              <p className="card-subtitle small text-end">{place.ranking}</p>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default Placedetails;
