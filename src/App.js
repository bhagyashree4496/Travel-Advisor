import React, { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import Header from "./Components/Header/Header";
import Lists from "./Components/List/Lists";
import Map from "./Components/Map/Map";
import { getPlacesData } from "./Api";

function App() {
  const [places, setPlaces] = useState([]);
  const [coords, setCoords] = useState();
  const [bounds, setBounds] = useState({});
  const [rating, setRating] = useState(0);
  const [type, setType] = useState("restaurants");
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      }
    );
  }, []);
  useEffect(() => {
    console.log(coords, bounds);
    getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
      console.log(data);
      setPlaces(data);
    });
  }, [bounds, type]);
  useEffect(() => {
    const filtered = places.filter((place) => Number(place.rating) > rating);

    setPlaces(filtered);
  }, [rating]);
  return (
    <>
      <CssBaseline />
      <Header setCoords={setCoords}></Header>
      <Grid container spacing={3} style={{ width: "100%" }} className="mx-auto">
        <Grid item xs={12} md={4}>
          <Lists
            places={places}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          ></Lists>
        </Grid>
        <Grid item xs={12} md={8} className="mx-auto">
          <Map
            setBounds={setBounds}
            setCoords={setCoords}
            coords={coords}
            places={places}
          ></Map>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
