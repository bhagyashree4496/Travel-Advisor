import React from "react";
import GoogleMapReact from "google-map-react";
import { LocationOnOutlinedIcon } from "@material-ui/icons";
import { Rating } from "@material-ui/lab";
import { padding } from "@mui/system";
export default function Map() {
  const coordinates = { lat: 0, lng: 0 };
  return (
    <>
      <div
        className="container"
        style={{ height: "85vh", width: "100%", padding: "10px" }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBb6g3Dvp6to2muhMoqaX_4LPqy9tG1kIw" }}
          center={coordinates}
          defaultCenter={coordinates}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
          options={""}
          onChange={""}
          onChildClick={""}
        ></GoogleMapReact>
      </div>
    </>
  );
}
