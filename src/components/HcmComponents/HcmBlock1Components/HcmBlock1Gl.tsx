import * as React from "react";

import Grid from "@mui/material/Grid";
//import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import HcmBl1Form101 from "./HcmBl1Form101";
import HcmBl1Form102 from "./HcmBl1Form102";
import HcmBl1Form103 from "./HcmBl1Form103";
import HcmBl1Form104 from "./HcmBl1Form104";
import HcmBl1Form106 from "./HcmBl1Form106";
import HcmBl1Form108 from "./HcmBl1Form108";

import { RandomNumber } from '../../HcmServiceFunctions';

import { styleMain04, styleBl2Gl01, styleBl1Form01 } from "../../HcmMainStyle";

let Illum = 1;
let oldIdx = -1;

const HcmBlock1Gl = (props: { idx: number }) => {
  const [bl1Form101, setBl1Form101] = React.useState(false);
  const [bl1Form102, setBl1Form201] = React.useState(false);
  const [bl1Form103, setBl1Form301] = React.useState(false);
  const [bl1Form104, setBl1Form401] = React.useState(false);
  const [bl1Form105, setBl1Form501] = React.useState(false);
  const [bl1Form106, setBl1Form601] = React.useState(false);
  const [bl1Form107, setBl1Form701] = React.useState(false);
  const [bl1Form108, setBl1Form801] = React.useState(false);

  //=== инициализация ======================================
  if (props.idx !== oldIdx) {
    oldIdx = props.idx;
    switch (Illum) {
      case 1: // Отсутствия
        setBl1Form101(true);
        break;
      case 2: // Оборудование
        setBl1Form201(true);
        break;
      case 3: // В структуре компании
        setBl1Form301(true);
        break;
      case 4: // ИПР
        setBl1Form401(true);
        break;
      case 5: // Оценка компетенций
        setBl1Form501(true);
        break;
      case 6: // Оценка компетенций
        setBl1Form601(true);
        break;
      case 7: // Оценка компетенций
        setBl1Form701(true);
        break;
      case 8: // Оценка компетенций
        setBl1Form801(true);
    }
  }
  //========================================================

  const ClickKnop1 = () => {
    Illum = 1;
    setBl1Form101(true);
    bl1Form102 && setBl1Form201(false);
    bl1Form103 && setBl1Form301(false);
    bl1Form104 && setBl1Form401(false);
    bl1Form105 && setBl1Form501(false);
    bl1Form106 && setBl1Form601(false);
    bl1Form107 && setBl1Form701(false);
    bl1Form108 && setBl1Form801(false);
  };

  const ClickKnop2 = () => {
    Illum = 2;
    bl1Form101 && setBl1Form101(false);
    setBl1Form201(true);
    bl1Form103 && setBl1Form301(false);
    bl1Form104 && setBl1Form401(false);
    bl1Form105 && setBl1Form501(false);
    bl1Form106 && setBl1Form601(false);
    bl1Form107 && setBl1Form701(false);
    bl1Form108 && setBl1Form801(false)
  };

  const ClickKnop3 = () => {
    Illum = 3;
    bl1Form101 && setBl1Form101(false);
    bl1Form102 && setBl1Form201(false);
    setBl1Form301(true);
    bl1Form104 && setBl1Form401(false);
    bl1Form105 && setBl1Form501(false);
    bl1Form106 && setBl1Form601(false);
    bl1Form107 && setBl1Form701(false);
    bl1Form108 && setBl1Form801(false);
  };

  const ClickKnop4 = () => {
    Illum = 4;
    bl1Form101 && setBl1Form101(false);
    bl1Form102 && setBl1Form201(false);
    bl1Form103 && setBl1Form301(false);
    setBl1Form401(true);
    bl1Form105 && setBl1Form501(false);
    bl1Form106 && setBl1Form601(false);
    bl1Form107 && setBl1Form701(false);
    bl1Form108 && setBl1Form801(false)
  };

  const ClickKnop5 = () => {
    Illum = 5;
    bl1Form101 && setBl1Form101(false);
    bl1Form102 && setBl1Form201(false);
    bl1Form103 && setBl1Form301(false);
    bl1Form104 && setBl1Form401(false);
    setBl1Form501(true);
    bl1Form106 && setBl1Form601(false);
    bl1Form107 && setBl1Form701(false);
    bl1Form108 && setBl1Form801(false);
  };

  const ClickKnop6 = () => {
    Illum = 6;
    bl1Form101 && setBl1Form101(false);
    bl1Form102 && setBl1Form201(false);
    bl1Form103 && setBl1Form301(false);
    bl1Form104 && setBl1Form401(false);
    bl1Form105 && setBl1Form501(false);
    setBl1Form601(true);
    bl1Form107 && setBl1Form701(false);
    bl1Form108 && setBl1Form801(false);
  };

  const ClickKnop7 = () => {
    Illum = 7;
    bl1Form101 && setBl1Form101(false);
    bl1Form102 && setBl1Form201(false);
    bl1Form103 && setBl1Form301(false);
    bl1Form104 && setBl1Form401(false);
    bl1Form105 && setBl1Form501(false);
    bl1Form106 && setBl1Form601(false);
    setBl1Form701(true);
    bl1Form108 && setBl1Form801(false);
  };

  const ClickKnop8 = () => {
    Illum = 8;
    bl1Form101 && setBl1Form101(false);
    bl1Form102 && setBl1Form201(false);
    bl1Form103 && setBl1Form301(false);
    bl1Form104 && setBl1Form401(false);
    bl1Form105 && setBl1Form501(false);
    bl1Form106 && setBl1Form601(false);
    bl1Form107 && setBl1Form701(false);
    setBl1Form801(true);
  };

  return (
    <Grid container sx={styleBl2Gl01}>
      <Grid item xs={12}>
        <Grid container sx={{ marginTop: 0 }}>
          <Grid item xs={12} sx={styleBl1Form01}>
            <em>установочные данные</em>
          </Grid>
        </Grid>
        <Grid container sx={{ marginTop: 2, border: 0 }}>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={1.5} sx={{ border: 0, height: "30px" }}>
                <Button
                  sx={styleMain04(1.5, Illum, 1)}
                  onClick={() => ClickKnop1()}
                >
                  Отсутствия
                </Button>
              </Grid>
              <Grid item xs={1.5} sx={{ border: 0, height: "30px" }}>
                <Button
                  sx={styleMain04(1.5, Illum, 2)}
                  onClick={() => ClickKnop2()}
                >
                  Оборудование
                </Button>
              </Grid>
              <Grid item xs={1.75} sx={{ border: 0, height: "30px" }}>
                <Button
                  sx={styleMain04(1.75, Illum, 3)}
                  onClick={() => ClickKnop3()}
                >
                  В структуре компании
                </Button>
              </Grid>
              <Grid item xs={1.25} sx={{ border: 0, height: "30px" }}>
                <Button
                  sx={styleMain04(1.25, Illum, 4)}
                  onClick={() => ClickKnop4()}
                >
                  ИПР
                </Button>
              </Grid>
              <Grid item xs={1.75} sx={{ border: 0, height: "30px" }}>

                <Button
                  sx={styleMain04(1.75, Illum, 5)}
                  onClick={() => ClickKnop5()}
                >
                  Оценка компетенций
                </Button>
              </Grid>
              <Grid item xs={1.5} sx={{ border: 0, height: "30px" }}>
                <Button
                  sx={styleMain04(1.5, Illum, 6)}
                  onClick={() => ClickKnop6()}
                >
                  Адаптация
                </Button>
              </Grid>
              <Grid item xs={1.25} sx={{ border: 0, height: "30px" }}>
                <Button
                  sx={styleMain04(1.25, Illum, 7)}
                  onClick={() => ClickKnop7()}
                >
                  Цели
                </Button>
              </Grid>
              <Grid item xs={1.5} sx={{ border: 0, height: "30px" }}>
                <Button
                  sx={styleMain04(1.525, Illum, 8)}
                  onClick={() => ClickKnop8()}
                >
                  Задачи
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        
        {bl1Form101 && <HcmBl1Form101 />}
        {bl1Form102 && <HcmBl1Form102 />}
        {bl1Form103 && <HcmBl1Form103 />}
        {bl1Form104 && <HcmBl1Form104 />}
        {bl1Form106 && <HcmBl1Form106 />}
        {bl1Form108 && <HcmBl1Form108 idx={RandomNumber(1, 10000)} />}
      </Grid>
    </Grid>
  );
};

export default HcmBlock1Gl;
