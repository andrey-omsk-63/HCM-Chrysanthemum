import * as React from 'react';

import Grid from '@mui/material/Grid';
//import Box from "@mui/material/Box";
//import Button from '@mui/material/Button';

//import { styleMain04 } from '../../HcmMainStyle';

let Illum = 1;

const HcmBl2Form101 = () => {
  //const [openSet, setOpenSet] = React.useState(true);

  const styleBl2Form01 = {
    marginTop: 2,
    height: window.innerHeight - 200,
    bgcolor: 'background.paper',
    border: '1px solid #FFFFFF',
    borderRadius: 1,
    boxShadow: 24,
    padding: '0px 1px 0px 1px',
  };

  // const styleBl2Gl02 = {
  //   height: '30px',
  //   bgcolor: 'background.paper',
  //   border: '1px solid #FFFFFF',
  //   borderRadius: 1,
  //   boxShadow: 24,
  //   textAlign: 'center',
  // };

  return (
    <Grid container sx={styleBl2Form01}>
      <Grid item xs={12}></Grid>
    </Grid>
  );
};

export default HcmBl2Form101;
