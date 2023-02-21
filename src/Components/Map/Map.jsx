import React from "react";
import GoogleMapReact from "google-map-react";
import { LocationOnOutlinedIcon } from "@material-ui/icons";
import { Rating } from "@material-ui/lab";

export default function Map({ setBounds, setCoords, coords }) {
  return (
    <>
      <div
        className="container"
        style={{ height: "85vh", width: "100%", padding: "10px" }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBb6g3Dvp6to2muhMoqaX_4LPqy9tG1kIw" }}
          center={coords}
          defaultCenter={coords}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
          options={""}
          onChange={(e) => {
            console.log(e);
            setCoords({ lat: e.center.lat, lng: e.center.lng });
            setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
          }}
          onChildClick={""}
        ></GoogleMapReact>
      </div>
    </>
  );
}
