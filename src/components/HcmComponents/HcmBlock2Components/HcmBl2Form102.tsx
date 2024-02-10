import * as React from 'react';

import Grid from '@mui/material/Grid';
//import Box from "@mui/material/Box";
import Button from '@mui/material/Button';

import HcmBl2Form1021 from './HcmBl2Form1021';

import { styleBl3Form01, styleMain04 } from '../../HcmMainStyle';

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
  const [bl2Form1021, setBl2Form2011] = React.useState(false);
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

  const ClickKnop6 = () => {
    setBl2Form2011(true);
  };

  return (
    <Grid container sx={styleBl3Form01(153)}>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={1} sx={{}}>
            <Button sx={styleMain04(1.0, Illum, 1)} onClick={() => ClickKnop1()}>
              1Q 2023
            </Button>
          </Grid>
          <Grid item xs={1} sx={{}}>
            <Button sx={styleMain04(1.0, Illum, 2)} onClick={() => ClickKnop2()}>
              2Q 2023
            </Button>
          </Grid>
          <Grid item xs={1} sx={{}}>
            <Button sx={styleMain04(1.0, Illum, 3)} onClick={() => ClickKnop3()}>
              3Q 2023
            </Button>
          </Grid>
          <Grid item xs={1} sx={{}}>
            <Button sx={styleMain04(1.0, Illum, 4)} onClick={() => ClickKnop4()}>
              4Q 2023
            </Button>
          </Grid>

          <Grid item xs={5} sx={{ border: 0, height: '30px' }}></Grid>
          <Grid item xs={1.5} sx={{}}>
            <Button
              sx={styleMain04(1.5, Illum, 9)}
              //onClick={() => ClickKnop4()}
            >
              Добавить НС
            </Button>
          </Grid>
          <Grid item xs={1.5} sx={{}}>
            <Button sx={styleMain04(1.5, Illum, 9)} onClick={() => ClickKnop6()}>
              Открыть все НС
            </Button>
          </Grid>
        </Grid>
        {bl2Form1021 && <HcmBl2Form1021 close={setBl2Form2011} />}
      </Grid>
    </Grid>
  );
};

export default HcmBl2Form102;
