import * as React from 'react';

import Grid from '@mui/material/Grid';
//import Box from "@mui/material/Box";
//import Button from '@mui/material/Button';

import { styleBl2Form00 } from '../../HcmMainStyle';

const HcmBl2Form102 = () => {
  //const [openSet, setOpenSet] = React.useState(true);

  // const styleBl2Form00 = (part: number, mt: number) => {
  //   const styleBl2Form = {
  //     marginTop: mt,
  //     height: window.innerHeight - part,
  //     bgcolor: 'background.paper',
  //     border: '1px solid #FFFFFF',
  //     borderRadius: 1,
  //     boxShadow: 9,
  //     padding: '0px 1px 0px 1px',
  //   };
  //   return styleBl2Form;
  // };

  // const styleBl2Gl02 = {
  //   height: '30px',
  //   bgcolor: 'background.paper',
  //   border: '1px solid #FFFFFF',
  //   borderRadius: 1,
  //   boxShadow: 24,
  //   textAlign: 'center',
  // };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container sx={styleBl2Form00(450, 2)}>
          <Grid item xs={12}></Grid>
        </Grid>
        <Grid container sx={styleBl2Form00(500, 1)}>
          <Grid item xs={12}></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HcmBl2Form102;
