import * as React from "react";

import Grid from "@mui/material/Grid";
//import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

// import HcmBl5Form101 from "./HcmBl5Form101";
// import HcmBl5Form102 from "./HcmBl5Form102";
// import HcmBl5Form103 from "./HcmBl5Form103";

//import { RandomNumber } from '../../HcmServiceFunctions';

import { styleMain04, styleBl2Gl01, styleBl2Gl02 } from "../../HcmMainStyle";

let Illum = -1;
let oldIdx = -1;

const HcmBlock4Gl = (props: { idx: number }) => {
  const [bl5Form101, setBl5Form101] = React.useState(false);
  const [bl5Form102, setBl5Form201] = React.useState(false);
  const [bl5Form103, setBl5Form301] = React.useState(false);
  const [bl5Form104, setBl5Form401] = React.useState(false);
  const [bl5Form105, setBl5Form501] = React.useState(false);

  //=== инициализация ======================================
  if (props.idx !== oldIdx) {
    oldIdx = props.idx;
    switch (Illum) {
      case 1: // Адаптация
        setBl5Form101(true);
        break;
      case 2: // HealtH Check
        setBl5Form201(true);
        break;
      case 3: // Задачи
        setBl5Form301(true);
        break;
      case 4: // ИПР
        setBl5Form401(true);
        break;
      case 5: // Оценка компетенций
        setBl5Form501(true);
    }
  }
  //========================================================

  const ClickKnop1 = () => {
    Illum = 1;
    setBl5Form101(true);
    setBl5Form201(false);
    setBl5Form301(false);
    setBl5Form401(false);
    setBl5Form501(false);
  };

  const ClickKnop2 = () => {
    Illum = 2;
    setBl5Form101(false);
    setBl5Form201(true);
    setBl5Form301(false);
    setBl5Form401(false);
    setBl5Form501(false);
  };

  const ClickKnop3 = () => {
    Illum = 3;
    setBl5Form101(false);
    setBl5Form201(false);
    setBl5Form301(true);
    setBl5Form401(false);
    setBl5Form501(false);
  };

  const ClickKnop4 = () => {
    Illum = 4;
    setBl5Form101(false);
    setBl5Form201(false);
    setBl5Form301(false);
    setBl5Form401(true);
    setBl5Form501(false);
  };

  const ClickKnop5 = () => {
    Illum = 5;
    setBl5Form101(false);
    setBl5Form201(false);
    setBl5Form301(false);
    setBl5Form401(false);
    setBl5Form501(true);
  };

  return (
    <Grid container sx={styleBl2Gl01}>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={2} sx={{ border: 0, height: "30px" }}>
                {/* Адаптация */}
                <Button
                  sx={styleMain04(1.33, Illum, 1)}
                  onClick={() => ClickKnop1()}
                >
                  Адаптация
                </Button>
              </Grid>
              <Grid item xs={2} sx={{ border: 0, height: "30px" }}>
                {/* HealtH Check */}
                <Button
                  sx={styleMain04(1.33, Illum, 2)}
                  onClick={() => ClickKnop2()}
                >
                  HealtH Check
                </Button>
              </Grid>
              <Grid item xs={2} sx={{ border: 0, height: "30px" }}>
                {/* Задачи */}
                <Button
                  sx={styleMain04(1.33, Illum, 3)}
                  onClick={() => ClickKnop3()}
                >
                  Задачи
                </Button>
              </Grid>
              <Grid item xs={1.5} sx={{ border: 0, height: "30px" }}>
                {/* ИПР */}
                <Button
                  sx={styleMain04(1.0, Illum, 4)}
                  onClick={() => ClickKnop4()}
                >
                  ИПР
                </Button>
              </Grid>
              <Grid item xs={2.5} sx={{ border: 0, height: "30px" }}>
                {/* Оценка компетенций */}
                <Button
                  sx={styleMain04(1.67, Illum, 5)}
                  onClick={() => ClickKnop5()}
                >
                  Оценка компетенций
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container sx={{ marginTop: 2 }}>
          <Grid item xs={12} sx={styleBl2Gl02}>
            <em>это сервисная строка</em>
          </Grid>
        </Grid>
        {/* {bl5Form101 && <HcmBl5Form101 />}
        {bl5Form102 && <HcmBl5Form102 />}
        {bl5Form103 && <HcmBl5Form103 idx={RandomNumber(1, 10000)} />} */}
      </Grid>
    </Grid>
  );
};

export default HcmBlock4Gl;
