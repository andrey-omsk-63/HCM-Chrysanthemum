import * as React from 'react';
import { useSelector } from 'react-redux';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { TablStr } from '../../HcmServiceFunctions';

import { styleBl3Form01, styleBl2Form01 } from '../../HcmMainStyle';
import { styleBl1Form07, styleBl1Form08 } from '../../HcmMainStyle';
import { styleBl1Form09, styleBl1Form16 } from '../../HcmMainStyle';

const HcmBl2Form101 = () => {
  let datestat = useSelector((state: any) => {
    const { statsaveReducer } = state;
    return statsaveReducer.datestat;
  });
  let PERSON = datestat.person;
  console.log('PERSON:', PERSON);
  const ClickNik1 = () => {
    console.log('Действие по нажатию на ник1');
  };

  const ButtonLink = (rec: any, func: Function) => {
    return (
      <Button sx={styleBl1Form16} onClick={() => func()}>
        {rec}
      </Button>
    );
  };

  const StrokaForm101 = () => {
    let resStr = [];

    for (let i = 0; i < PERSON.length; i++) {
      let brb: any = i === PERSON.length - 1 ? 0 : '1px solid #d4d4d4';
      resStr.push(
        <Grid key={i} container sx={{ color: '#5B1080' }}>
          {TablStr(0, 3.5, PERSON[i].department.name, styleBl1Form09(brb))}
          {TablStr(0, 2, ButtonLink(PERSON[i].nickName, ClickNik1), styleBl1Form09(brb))}
          {TablStr(0, 1, PERSON[i].name, styleBl1Form09(brb))}
          {TablStr(0, 2.5, PERSON[i].jobPosition, styleBl1Form09(brb))}
          {TablStr(0, 1, PERSON[i].city, styleBl1Form09(brb))}
          {TablStr(0, 2, PERSON[i].state, styleBl1Form09(brb))}
          {/* {TablStr(0, 2, 'Офисный', styleBl1Form09(brb))} */}
        </Grid>,
      );
    }
    return resStr;
  };

  const HeaderTabl = () => {
    return (
      <Grid container sx={styleBl1Form07}>
        {TablStr(1, 3.5, 'Подразделение', styleBl1Form08)}
        {TablStr(1, 2, 'Сотрудник', styleBl1Form08)}
        {TablStr(1, 1, 'Имя', styleBl1Form08)}
        {TablStr(1, 2.5, 'Должность', styleBl1Form08)}
        {TablStr(1, 1, 'Город', styleBl1Form08)}
        {TablStr(1, 2, 'Текущий статус работы', styleBl1Form08)}
        {/* {TablStr(1, 2, 'Тип', styleBl1Form08)} */}
      </Grid>
    );
  };

  return (
    <Grid container sx={styleBl3Form01(138)}>
      <Grid item xs={12}>
        {HeaderTabl()}
        <Box sx={styleBl2Form01}>{StrokaForm101()}</Box>
      </Grid>
    </Grid>
  );
};

export default HcmBl2Form101;
