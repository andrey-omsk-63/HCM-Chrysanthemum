import * as React from "react";

import Grid from "@mui/material/Grid";
//import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { styleBl2Form00, styleMain04 } from "../../HcmMainStyle";

let Illum = -1;
let oldIdx = -1;
let soobButt = ""

const HcmBl2Form103 = (props: { idx: number }) => {
  const [trigger, setTrigger] = React.useState(false);

  //=== инициализация ======================================
  if (props.idx !== oldIdx) {
    oldIdx = props.idx;
    Illum = -1;
  }
  //========================================================
  const ClickKnop = () => {
    Illum = Illum > 0 ? -1 : 1;
    setTrigger(!trigger) // ререндер
  };

  soobButt = Illum < 0?'Показать закрытые':'Не показывать закрытые'

  return (
    <Grid container>
      <Grid item xs={12} sx={{ marginTop: 2 }}>
        <Grid container>
          <Grid item xs={1.8}>
            <Button sx={styleMain04(1.8, Illum, 1)} onClick={() => ClickKnop()}>
              {soobButt}
            </Button>
          </Grid>
        </Grid>
        <Grid container sx={styleBl2Form00(window.innerHeight * 0.75, 1)}>
          <Grid item xs={12}></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HcmBl2Form103;
