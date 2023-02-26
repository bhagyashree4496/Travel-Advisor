import React, { useState } from "react";
import photo from "./rest.jpg";
import GoogleMapReact from "google-map-react";
import { Marker } from "@react-google-maps/api";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { InfoWindow } from "@react-google-maps/api";
import "./style.css";

export default function Map({ setBounds, setCoords, coords, places }) {
  // const Locationcard = (place) => {
  //   return <div>{element && <LocationC></LocationC>}</div>;
  // };
  const [popup, setPopup] = useState(null);
  const Handlepopup = (place) => {
    setPopup(place);
  };
  return (
    <>
      <div
        className="container map mt-2"
        style={{ height: "88vh", width: "100%", padding: "10px" }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBb6g3Dvp6to2muhMoqaX_4LPqy9tG1kIw" }}
          center={coords}
          defaultCenter={coords}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
          options={""}
          onChange={(e) => {
            setCoords({ lat: e.center.lat, lng: e.center.lng });
            setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
          }}
          onChildClick={""}
        >
          {places?.map((place, i) => {
            return (
              <Marker
                key={i}
                lat={place.latitude ? Number(place.latitude) : ""}
                lng={place.longitude ? Number(place.longitude) : ""}
                onClick={(place) => {
                  Handlepopup(place);
                }}
              >
                {/* <div
                  onClick={(e) => {
                    e.preventDefault();
                    setElement(true);
                    Locationcard(place);
                  }}
                > */}
                {/* <div className="cardonmap card ">
                  <img
                    className="card card-img-top cardImg"
                    src={place.photo ? place.photo.images.small.url : photo}
                    alt="Card image cap"
                  />
                  <p className="card-text">{place.name}</p>
                </div> */}
                <LocationOnOutlinedIcon
                  style={{ color: "red" }}
                ></LocationOnOutlinedIcon>
                {/* {popup && (
                  <InfoWindow
                    onCloseClick={() => {
                      setPopup(null);
                    }}
                    position={{
                      lat: Number(place.latitude),
                      lng: Number(place.longitude),
                    }}
                  > */}

                {/* </InfoWindow>
                )} */}

                {/* {element ? (
                  <Marker
                    key={i}
                    lat={place.latitude ? Number(place.latitude) : ""}
                    lng={place.longitude ? Number(place.longitude) : ""}
                  >
                    <div className="cardonmap card">
                      <img
                        className="card card-img-top cardImg"
                        src={place.photo ? place.photo.images.small.url : photo}
                        alt="Card image cap"
                      />

                      <p className="card-text">{place.name}</p>
                      <div>{setElement(false)}</div>
                    </div>
                  </Marker>
                ) : (
                  ""
                )} */}
              </Marker>
            );
          })}
        </GoogleMapReact>
      </div>
    </>
  );
}
{
  // function LocationC() {
  //   return (
  //     <>
  //       <Marker
  //         lat={place.latitude ? Number(place.latitude) : ""}
  //         lng={place.longitude ? Number(place.longitude) : ""}
  //       >
  //         <div className="cardonmap card">
  //           <img
  //             className="card card-img-top cardImg"
  //             src={place.photo ? place.photo.images.small.url : photo}
  //             alt="Card image cap"
  //           />
  //           <p className="card-text">{place.name}</p>
  //           <div>{setElement(false)}</div>
  //         </div>
  //       </Marker>
  //     </>
  //   );
  /* <Marker
            lat={place.latitude ? Number(place.latitude) : ""}
            lng={place.longitude ? Number(place.longitude) : ""}
          >
            <div className="cardonmap card">
              <img
                className="card card-img-top cardImg"
                src={place.photo ? place.photo.images.small.url : photo}
                alt="Card image cap"
              />

              <p className="card-text">{place.name}</p>
              <div>{setElement(false)}</div>
            </div>
          </Marker> */
}
