import * as React from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import HcmBl2Form1021 from './HcmBl2Form1021';

import { TablStr } from '../../HcmServiceFunctions';

import { styleBl3Form01, styleMain04 } from '../../HcmMainStyle';
import { styleBl1Form077, styleBl1Form08 } from '../../HcmMainStyle';
import { styleBl2Form06, styleBl2Form05 } from '../../HcmMainStyle';

const date = new Date();
const tekYear = date.getFullYear();
const tekMonth = date.getMonth();
//const tekMonth = 7;
let tekQ = 0;
if (tekMonth < 4) tekQ = 1;
if (tekMonth > 3 && tekMonth < 7) tekQ = 2;
if (tekMonth > 6 && tekMonth < 10) tekQ = 3;
if (tekMonth > 9) tekQ = 4;

let Illum = tekQ;

const HcmBl2Form102 = () => {
  //== Piece of Redux =======================================
  // let datestat = useSelector((state: any) => {
  //   const { statsaveReducer } = state;
  //   return statsaveReducer.datestat;
  // });
  //const dispatch = useDispatch();
  //console.log("Setup_massplan:", massplan);
  //=== инициализация ======================================

  //========================================================
  const [bl2Form1021, setBl2Form2011] = React.useState(false);
  const [trigger, setTrigger] = React.useState(false);
  //=== Функции - обработчики ==============================
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

  const ClickKnop5 = () => {};

  const ClickKnop6 = () => {
    //setBl2Form2011(true);
  };
  //========================================================
  const MenuContent = () => {
    const KnopQ = (nomQ: number, func: Function) => {
      return (
        <>
          {nomQ <= tekQ ? (
            <Button sx={styleMain04(1.0, Illum, nomQ)} onClick={() => func()}>
              {nomQ}Q {tekYear}
            </Button>
          ) : (
            <Box sx={styleBl2Form06}>
              <b>
                {nomQ}Q {tekYear}
              </b>
            </Box>
          )}
        </>
      );
    };

    return (
      <>
        <Grid item xs={1} sx={{}}>
          {KnopQ(1, ClickKnop1)}
        </Grid>
        <Grid item xs={1} sx={{}}>
          {KnopQ(2, ClickKnop2)}
        </Grid>
        <Grid item xs={1} sx={{}}>
          {KnopQ(3, ClickKnop3)}
        </Grid>
        <Grid item xs={1} sx={{}}>
          {KnopQ(4, ClickKnop4)}
        </Grid>

        <Grid item xs={5} sx={{ border: 0, height: '30px' }}></Grid>
        <Grid item xs={1.5} sx={{}}>
          <Button sx={styleMain04(1.5, Illum, 9)} onClick={() => ClickKnop5()}>
            Добавить НС
          </Button>
        </Grid>
        <Grid item xs={1.5} sx={{}}>
          <Button sx={styleMain04(1.5, Illum, 9)} onClick={() => ClickKnop6()}>
            Выбрать период
          </Button>
        </Grid>
      </>
    );
  };

  const HeaderTabl = () => {
    return (
      <Grid container sx={styleBl1Form077}>
        {TablStr(1, 1.4, 'Подразделение', styleBl1Form08)}
        {TablStr(1, 0.8, 'За период', styleBl1Form08)}
        {TablStr(1, 1, 'Причина проведения', styleBl1Form08)}
        {TablStr(1, 1.2, 'Общее состояние команды', styleBl1Form08)}
        {TablStr(1, 1.25, 'Взаимодействие в команде', styleBl1Form08)}
        {TablStr(1, 1.25, 'Взаимодействие с руководителем', styleBl1Form08)}
        {TablStr(1, 1.5, 'Информированность', styleBl1Form08)}
        {TablStr(1, 0.8, 'Развитие', styleBl1Form08)}
        {TablStr(1, 0.8, 'Текущие задачи', styleBl1Form08)}
        {TablStr(1, 1, 'Заработная плата, бонусы', styleBl1Form08)}
        {TablStr(1, 1, 'Нагрузка, режим работы', styleBl1Form08)}
      </Grid>
    );
  };

  // const styleBl2Form05 = {
  //   border: 0,
  //   marginTop: '10px',
  //   height: window.innerHeight - 195,
  // };

  return (
    <Grid container sx={styleBl3Form01(153)}>
      <Grid item xs={12}>
        <Grid container>
          {MenuContent()}
          <Grid item xs={12} sx={styleBl2Form05}>
            {HeaderTabl()}
          </Grid>
        </Grid>
        {bl2Form1021 && <HcmBl2Form1021 close={setBl2Form2011} />}
      </Grid>
    </Grid>
  );
};

export default HcmBl2Form102;
