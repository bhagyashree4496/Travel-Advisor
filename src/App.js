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
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      }
    );
  }, []);
  useEffect(() => {
    console.log(coords, bounds);
    getPlacesData(bounds.sw, bounds.ne).then((data) => {
      console.log(data);
      setPlaces(data);
      console.log(places, "inside");
    });
  }, [coords, bounds]);
  return (
    <>
      <CssBaseline />
      <Header></Header>
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <Lists places={places}></Lists>
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setBounds={setBounds}
            setCoords={setCoords}
            coords={coords}
          ></Map>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
