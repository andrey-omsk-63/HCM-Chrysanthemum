import * as React from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { styleBl3Form01 } from "../../HcmMainStyle";

const HcmBl1Form103 = () => {
  const styleMain04 = {
    fontSize:  12.9,
    height: '20px',
    width: '190px',
    marginTop: '-5px',
    //bgcolor:  '#E6F5D6', // светло-салатовый
    // border: '1px solid #d4d4d4', // серый
    // borderRadius: 1,
    //border: 1,
    color: 'black',
    textTransform: 'unset !important',
    //padding: "2px 0px 2px 0px",
    //textShadow: '2px 2px 3px rgba(0,0,0,0.3)',
  };
  return (
    <Grid container sx={styleBl3Form01(340)}>
      <Grid item xs={12}>
        <Box>
          <Grid container>
            <Grid
              item
              xs={9.9}
              sx={{ height: window.innerHeight - 570, border: 1 }}
            ></Grid>
            <Grid
              item
              xs={2.1}
              sx={{ fontSize: 14, height: "30px", border: 1 }}
            >
              Посмотреть структуру компании
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ height: window.innerHeight - 700, border: 1 }}>
          <Button sx={styleMain04}>
            ▼ История перемещений
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default HcmBl1Form103;
