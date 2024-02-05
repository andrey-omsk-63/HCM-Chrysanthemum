import * as React from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { TablStr } from '../../HcmServiceFunctions';

import { styleBl3Form01, styleBl1Form06 } from '../../HcmMainStyle';
import { styleBl1Form07, styleBl1Form08 } from '../../HcmMainStyle';
import { styleBl1Form09, styleBl1Form099 } from '../../HcmMainStyle';

const HcmBl1Form101 = () => {
  const StrokaForm101 = () => {
    let resStr = [];
    let masStr: any = [];
    for (let i = 0; i < 5; i++) {
      for (let j = 1; j < 5; j++) {
        let maskStr = {
          nom: i * 4 + j,
          period: '01.01.2023-09.012.2023',
          why: 'больничный',
          status: 'Предоставлено',
          quo: true,
        };

        switch (j) {
          case 1:
            maskStr.period = '01.01.2023 - 09.12.2023';
            maskStr.why = 'больничный';
            maskStr.status = 'Предоставлено';
            maskStr.quo = true;
            break;
          case 2:
            maskStr.period = '15.08.2023 - 27.08.2023';
            maskStr.why = 'Отпуск';
            maskStr.status = 'Предоставлено';
            maskStr.quo = true;
            break;
          case 3:
            maskStr.period = '18.12.2023 - 27.12.2023';
            maskStr.why = 'Компенсация отпуска';
            maskStr.status = 'Согласовано';
            maskStr.quo = false;
            break;
          case 4:
            maskStr.period = '29.12.2023 - 30.12.2023';
            maskStr.why = 'Отгул';
            maskStr.status = 'Согласовано';
            maskStr.quo = false;
        }
        masStr.push(maskStr);
      }
    }
    for (let i = 0; i < masStr.length; i++) {
      let brb: any = i === masStr.length - 1 ? 0 : '1px solid #d4d4d4';
      let quo = masStr[i].quo ? '✔' : '';
      resStr.push(
        <Grid key={i} container sx={{ marginBottom: 0 }}>
          {TablStr(0, 1, masStr[i].nom, styleBl1Form09(brb))}
          {TablStr(0, 4, masStr[i].period, styleBl1Form09(brb))}
          {TablStr(0, 4, masStr[i].why, styleBl1Form099(brb))}
          {TablStr(0, 2, masStr[i].status, styleBl1Form09(brb))}
          {TablStr(1, 0.3, quo, styleBl1Form09(brb))}
          {TablStr(0, 0, '', styleBl1Form09(brb))}
        </Grid>,
      );
    }
    return resStr;
  };

  const HeaderTabl = () => {
    return (
      <Grid container sx={styleBl1Form07}>
        {TablStr(1, 1, '№', styleBl1Form08)}
        {TablStr(1, 4, 'Период', styleBl1Form08)}
        {TablStr(1, 4, 'Причина', styleBl1Form08)}
        {TablStr(1, 2, 'Статус', styleBl1Form08)}
        {TablStr(1, 0.3, '', styleBl1Form08)}
      </Grid>
    );
  };

  return (
    <Grid container sx={styleBl3Form01(340)}>
      <Grid item xs={12}>
        {HeaderTabl()}
        <Box sx={styleBl1Form06}>{StrokaForm101()}</Box>
      </Grid>
    </Grid>
  );
};

export default HcmBl1Form101;
