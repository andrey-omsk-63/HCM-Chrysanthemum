import * as React from 'react';
import { useSelector } from 'react-redux';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import HcmBl1Form101 from './HcmBl1Form101';
import HcmBl1Form102 from './HcmBl1Form102';
import HcmBl1Form103 from './HcmBl1Form103';
import HcmBl1Form104 from './HcmBl1Form104';
import HcmBl1Form106 from './HcmBl1Form106';
import HcmBl1Form108 from './HcmBl1Form108';

import { RandomNumber } from '../../HcmServiceFunctions';

import { styleMain04, styleBl2Gl01, styleBl1Form01 } from '../../HcmMainStyle';
import { styleBl1Form03, styleBl1Form04 } from '../../HcmMainStyle';
import { styleBl1Form05 } from '../../HcmMainStyle';

let Illum = 1;
let oldIdx = -1;

const HcmBlock1Gl = (props: { idx: number }) => {
  //== Piece of Redux =======================================
  let datestat = useSelector((state: any) => {
    const { statsaveReducer } = state;
    return statsaveReducer.datestat;
  });
  console.log('datestat:', datestat);
  //const debug = datestat.debug;
  //const ws = datestat.ws;
  //const dispatch = useDispatch();
  //===========================================================
  const [bl1Form101, setBl1Form101] = React.useState(false);
  const [bl1Form102, setBl1Form201] = React.useState(false);
  const [bl1Form103, setBl1Form301] = React.useState(false);
  const [bl1Form104, setBl1Form401] = React.useState(false);
  const [bl1Form105, setBl1Form501] = React.useState(false);
  const [bl1Form106, setBl1Form601] = React.useState(false);
  const [bl1Form107, setBl1Form701] = React.useState(false);
  const [bl1Form108, setBl1Form801] = React.useState(false);
  const [openImg, setOpenImg] = React.useState(false);

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
  //=== Функции - обработчики ==============================
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
    bl1Form108 && setBl1Form801(false);
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
    bl1Form108 && setBl1Form801(false);
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
  //=== Компоненты =========================================
  const MenuBatton = (xss: number, wt: number, ill: number, name: string, func: Function) => {
    return (
      <Grid item xs={xss} sx={{ height: '30px' }}>
        <Button sx={styleMain04(wt, Illum, ill)} onClick={() => func()}>
          {name}
        </Button>
      </Grid>
    );
  };

  const StrTablProp = (xss: number, recLeft: string, recRight: any) => {
    return (
      <Grid container sx={{ marginTop: 1 }}>
        <Grid item xs={xss} sx={{ border: 0 }}>
          {recLeft}
        </Grid>
        <Grid item xs sx={{ fontSize: 14, color: '#5B1080', border: 0 }}>
          <b>{recRight}</b>
        </Grid>
      </Grid>
    );
  };

  const ClickImg = () => {
    setOpenImg(true);
  };

  const CardContent = () => {
    return (
      <Grid container>
        <Grid item xs={12} sx={styleBl1Form01}>
          <Grid container>
            <Grid item xs={2} sx={{ height: '180px' }}>
              <Grid container>
                <Grid item xs={12} sx={styleBl1Form03}>
                  Личная карточка <b>Доцент</b>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12} sx={styleBl1Form04}>
                  <Box sx={styleBl1Form05} onClick={() => ClickImg()}>
                    <img
                      src="http://localhost:3000/portrait.jpg"
                      //width={160}
                      height={180}
                      alt="PICT"
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4} sx={{ height: '214px', fontSize: 14.5 }}>
              {StrTablProp(2, 'Имя:', 'Пупкин Иван')}
              {StrTablProp(2, 'Ник:', 'Доцент')}
              {StrTablProp(4, 'Дата рождения:', '12.12.1989')}
              {StrTablProp(4, 'В компании с:', '21.12.2021')}
              {StrTablProp(4, 'Должность:', 'Гранатомётчик')}
              {StrTablProp(4, 'Подразделение:', 'Пехота')}
              {StrTablProp(4, 'Руководитель:', 'Бугор')}
            </Grid>
            <Grid item xs sx={{ height: '214px' }}>
              {StrTablProp(0.1, '', 'Россия, Омск UTC+6 (MSK+3)')}
              {StrTablProp(0.1, '', '💊 больничный')}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  };

  return (
    <Grid container sx={styleBl2Gl01}>
      <Grid item xs={12}>
        {CardContent()}
        <Grid container sx={{ marginTop: 2, border: 0 }}>
          <Grid item xs={12}>
            <Grid container>
              {MenuBatton(1.5, 1.5, 1, 'Отсутствия', ClickKnop1)}
              {MenuBatton(1.5, 1.5, 2, 'Оборудование', ClickKnop2)}
              {MenuBatton(1.75, 1.75, 3, 'В структуре компании', ClickKnop3)}
              {MenuBatton(1.25, 1.25, 4, 'ИПР', ClickKnop4)}
              {MenuBatton(1.75, 1.75, 5, 'Оценка компетенций', ClickKnop5)}
              {MenuBatton(1.5, 1.5, 6, 'Оценка компетенций', ClickKnop6)}
              {MenuBatton(1.25, 1.25, 7, 'Цели', ClickKnop7)}
              {MenuBatton(1.5, 1.5, 8, 'Задачи', ClickKnop8)}
            </Grid>
          </Grid>
        </Grid>
        {bl1Form101 && <HcmBl1Form101 />}
        {bl1Form102 && <HcmBl1Form102 />}
        {bl1Form103 && <HcmBl1Form103 />}
        {bl1Form104 && <HcmBl1Form104 />}
        {bl1Form106 && <HcmBl1Form106 />}
        {bl1Form108 && <HcmBl1Form108 idx={RandomNumber(1, 10000)} />}
        {/* {openImg && <HcmBlock1ViewImg close={setOpenImg} />} */}
      </Grid>
    </Grid>
  );
};

export default HcmBlock1Gl;
