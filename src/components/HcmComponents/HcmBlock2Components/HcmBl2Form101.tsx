import * as React from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
//import Button from '@mui/material/Button';

import { TablStr } from '../../HcmServiceFunctions';

import { styleBl3Form01, styleBl2Form01 } from '../../HcmMainStyle';
import { styleBl1Form07, styleBl1Form08 } from '../../HcmMainStyle';
import { styleBl1Form09 } from '../../HcmMainStyle';

const HcmBl2Form101 = () => {
  const StrokaForm101 = () => {
    let resStr = [];
    let masStr: any = [];
    for (let i = 0; i < 5; i++) {
      for (let j = 1; j < 5; j++) {
        let maskStr = {
          unit: 'ИТ отдел',
          nik: 'Доцент',
          name: 'Иван',
          post: 'Гранатомётчик',
          city: 'Омск',
          status: 'Отпуск 14.01.2024-30.01.2024',
          tip: 'Офисный',
        };

        switch (j) {
          case 1:
            maskStr.unit = 'ИТ отдел';
            maskStr.nik = 'Доцент';
            maskStr.name = 'Иван';
            maskStr.post = 'Гранатомётчик';
            maskStr.city = 'Омск';
            maskStr.status = 'Отпуск 14.01.2024-30.01.2024';
            maskStr.tip = 'Офисный';
            break;
          case 2:
            maskStr.unit = 'ИТ отдел';
            maskStr.nik = 'Фантомас';
            maskStr.name = 'Артём';
            maskStr.post = 'Смотрящий';
            maskStr.city = 'Омск';
            maskStr.status = 'Работа';
            maskStr.tip = 'Офисный';
            break;
          case 3:
            maskStr.unit = 'ИТ отдел';
            maskStr.nik = 'Лишенец';
            maskStr.name = 'Валерий';
            maskStr.post = 'Консультант';
            maskStr.city = 'Москва';
            maskStr.status = 'Работа';
            maskStr.tip = 'Удалённый';
            break;
          case 4:
            maskStr.unit = 'ИТ отдел';
            maskStr.nik = 'Бугор';
            maskStr.name = 'Фёдор';
            maskStr.post = 'Начальник';
            maskStr.city = 'Омск';
            maskStr.status = 'Работа';
            maskStr.tip = 'Офисный';
        }
        masStr.push(maskStr);
      }
    }
    for (let i = 0; i < masStr.length; i++) {
      let brb: any = i === masStr.length - 1 ? 0 : '1px solid #d4d4d4';
      resStr.push(
        <Grid key={i} container sx={{ color: '#5B1080' }}>
          {TablStr(0, 2, masStr[i].unit, styleBl1Form09(brb))}
          {TablStr(0, 2, masStr[i].nik, styleBl1Form09(brb))}
          {TablStr(0, 1, masStr[i].name, styleBl1Form09(brb))}
          {TablStr(0, 2, masStr[i].post, styleBl1Form09(brb))}
          {TablStr(0, 1, masStr[i].city, styleBl1Form09(brb))}
          {TablStr(0, 2, masStr[i].status, styleBl1Form09(brb))}
          {TablStr(0, 2, masStr[i].tip, styleBl1Form09(brb))}
        </Grid>,
      );
    }
    return resStr;
  };

  const HeaderTabl = () => {
    return (
      <Grid container sx={styleBl1Form07}>
        {TablStr(1, 2, 'Подразделение', styleBl1Form08)}
        {TablStr(1, 2, 'Сотрудник', styleBl1Form08)}
        {TablStr(1, 1, 'Имя', styleBl1Form08)}
        {TablStr(1, 2, 'Должность', styleBl1Form08)}
        {TablStr(1, 1, 'Город', styleBl1Form08)}
        {TablStr(1, 2, 'Текущий статус работы', styleBl1Form08)}
        {TablStr(1, 2, 'Тип', styleBl1Form08)}
      </Grid>
    );
  };

  return (
    <Grid container sx={styleBl3Form01(153)}>
      <Grid item xs={12}>
        {HeaderTabl()}
        <Box sx={styleBl2Form01}>{StrokaForm101()}</Box>
      </Grid>
    </Grid>
  );
};

export default HcmBl2Form101;
