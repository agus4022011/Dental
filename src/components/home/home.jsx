import React, { useState } from "react";
import "./home.css";

import MediaCard from "../card/card";
import Grid from "@material-ui/core/Grid";
import Carrusel from "../carrusel/carrusel";

function Home() {
  return (
    <section>
      <div className="section__img"></div>
      <Grid className='section__cards' container spacing={3}>
        <Grid item xs={6} sm={3}>
          <MediaCard />
        </Grid>
        <Grid item xs={6} sm={3}>
          <MediaCard />
        </Grid>
        <Grid item xs={6} sm={3}>
          <MediaCard />
        </Grid>
        <Grid item xs={6} sm={3}>
          <MediaCard />
        </Grid>
      </Grid>

      <Grid className='section__cards' container spacing={3}>
        <Grid item xs={6} sm={3}>
          <MediaCard />
        </Grid>
        <Grid item xs={6} sm={3}>
          <MediaCard />
        </Grid>
        <Grid item xs={6} sm={3}>
          <MediaCard />
        </Grid>
        <Grid item xs={6} sm={3}>
          <MediaCard />
        </Grid>
      </Grid>

      <Carrusel    />

    </section>
  );
}

export default Home;
