import React from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import Header from "./Components/Header/Header";
import Lists from "./Components/List/Lists";
import Map from "./Components/Map/Map";

function App() {
  return (
    <>
      <CssBaseline />
      <Header></Header>
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={8}>
          <Map></Map>
        </Grid>
        <Grid item xs={12} md={4}>
          <Lists></Lists>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
