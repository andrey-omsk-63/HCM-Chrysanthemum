import * as React from "react";

import Grid from "@mui/material/Grid";
//import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { styleBl3Form01, styleMain04 } from "../../HcmMainStyle";

let Illum = 1;

const HcmBl2Form102 = () => {
  //== Piece of Redux =======================================
  // let datestat = useSelector((state: any) => {
  //   const { statsaveReducer } = state;
  //   return statsaveReducer.datestat;
  // });
  //const dispatch = useDispatch();
  //console.log("Setup_massplan:", massplan);
  //========================================================
  const [trigger, setTrigger] = React.useState(false);

  const ClickKnop1 = () => {
    Illum = 1;
    setTrigger(!trigger);
  };

  const ClickKnop2 = () => {
    Illum = 2;
    setTrigger(!trigger);
  };

  const ClickKnop3 = () => {
    Illum = 3;
    setTrigger(!trigger);
  };

  const ClickKnop4 = () => {
    Illum = 4;
    setTrigger(!trigger);
  };

  return (
    <Grid container sx={styleBl3Form01(153)}>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={1} sx={{}}>
            <Button
              sx={styleMain04(1.0, Illum, 1)}
              onClick={() => ClickKnop1()}
            >
              1Q 2023
            </Button>
          </Grid>
          <Grid item xs={1} sx={{}}>
            <Button
              sx={styleMain04(1.0, Illum, 2)}
              onClick={() => ClickKnop2()}
            >
              2Q 2023
            </Button>
          </Grid>
          <Grid item xs={1} sx={{}}>
            <Button
              sx={styleMain04(1.0, Illum, 3)}
              onClick={() => ClickKnop3()}
            >
              3Q 2023
            </Button>
          </Grid>
          <Grid item xs={1} sx={{}}>
            <Button
              sx={styleMain04(1.0, Illum, 4)}
              onClick={() => ClickKnop4()}
            >
              4Q 2023
            </Button>
          </Grid>

          <Grid item xs={5} sx={{ border: 0, height: "30px" }}></Grid>
          <Grid item xs={1.5} sx={{}}>
            <Button
              sx={styleMain04(1.5, Illum, 9)}
              //onClick={() => ClickKnop4()}
            >
              Добавить НС
            </Button>
          </Grid>
          <Grid item xs={1.5} sx={{}}>
            <Button
              sx={styleMain04(1.5, Illum, 9)}
              //onClick={() => ClickKnop4()}
            >
              Открыть все НС
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HcmBl2Form102;
