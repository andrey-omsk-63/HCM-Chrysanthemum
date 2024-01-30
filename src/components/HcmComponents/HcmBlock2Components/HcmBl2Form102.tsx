import * as React from "react";

import Grid from "@mui/material/Grid";
//import Box from "@mui/material/Box";
//import Button from '@mui/material/Button';

import { styleBl2Form00 } from "../../HcmMainStyle";

const HcmBl2Form102 = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container sx={styleBl2Form00(window.innerHeight * 0.4, 2)}>
          <Grid item xs={12}></Grid>
        </Grid>
        <Grid container sx={styleBl2Form00(window.innerHeight * 0.3, 1)}>
          <Grid item xs={12}></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HcmBl2Form102;
