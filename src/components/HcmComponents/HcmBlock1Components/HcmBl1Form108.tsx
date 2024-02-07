import * as React from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { TablStr } from '../../HcmServiceFunctions';

import { styleBl1Form011, styleMain04 } from '../../HcmMainStyle';
import { styleBl1Form07, styleBl1Form08 } from '../../HcmMainStyle';
import { styleBl1Form09, styleBl1Form099 } from '../../HcmMainStyle';
import { styleBl1Form06 } from '../../HcmMainStyle';

let Illum = -1;
let oldIdx = -1;
let soobButt = '';

const HcmBl1Form108 = (props: { idx: number }) => {
  const [trigger, setTrigger] = React.useState(false);

  //=== инициализация ======================================
  if (props.idx !== oldIdx) {
    oldIdx = props.idx;
    Illum = -1;
  }
  //========================================================
  const ClickKnop = () => {
    Illum = Illum > 0 ? -1 : 1;
    setTrigger(!trigger); // ререндер
  };

  const StrokaForm108 = () => {
    let resStr = [];
    let masStr: any = [];
    let ch = 1;
    for (let i = 0; i < 5; i++) {
      for (let j = 1; j < 5; j++) {
        let maskStr = {
          nom: ch++,
          creat: '28.09.2023',
          plan: '28.09.2023',
          actor: 'Фантомас',
          avtor: 'Лишенец',
          tema: 'Краткое описание',
          player: 'Чёпик',
          status: 'Сделать',
        };

        switch (j) {
          case 1:
            maskStr.creat = '28.09.2023';
            maskStr.plan = '04.10.2023';
            maskStr.actor = 'Фантомас';
            maskStr.avtor = 'Лишенец';
            maskStr.tema = 'Безумно сложная и опасная задача';
            maskStr.player = 'Чёпик';
            maskStr.status = 'Сделать';
            break;
          case 2:
            maskStr.creat = '28.09.2023';
            maskStr.plan = '04.10.2023';
            maskStr.actor = 'Фантомас';
            maskStr.avtor = 'Бугор';
            maskStr.tema = 'Краткое описание';
            maskStr.player = 'Чёпик';
            maskStr.status = 'В работе';
            break;
          case 3:
            maskStr.creat = '28.09.2023';
            maskStr.plan = '04.10.2023';
            maskStr.actor = 'Фантомас';
            maskStr.avtor = 'Клёпа';
            maskStr.tema = 'Сделать анализ конкретной бизнес-ситуации и прочее и прочее...';
            maskStr.player = 'Чёпик';
            maskStr.status = 'Сделать';
            break;
          case 4:
            maskStr.creat = '28.09.2023';
            maskStr.plan = '04.10.2023';
            maskStr.actor = 'Фантомас';
            maskStr.avtor = 'Балбес';
            maskStr.tema = 'Краткое описание';
            maskStr.player = 'Чёпик';
            maskStr.status = 'Готово';
        }
        masStr.push(maskStr);
      }
    }
    for (let i = 0; i < masStr.length; i++) {
      let brb: any = i === masStr.length - 1 ? 0 : '1px solid #d4d4d4';
      resStr.push(
        <Grid key={i} container sx={{ color: '#5B1080' }}>
          {TablStr(0, 1.0, masStr[i].nom, styleBl1Form09(brb))}
          {TablStr(0, 1.5, masStr[i].creat, styleBl1Form09(brb))}
          {TablStr(0, 2.5, masStr[i].plan, styleBl1Form09(brb))}
          {TablStr(0, 1.0, masStr[i].actor, styleBl1Form09(brb))}
          {TablStr(0, 1.0, masStr[i].avtor, styleBl1Form09(brb))}
          {TablStr(0, 3.0, masStr[i].tema, styleBl1Form099(brb))}
          {TablStr(0, 1.0, masStr[i].player, styleBl1Form09(brb))}
          {TablStr(0, 1.0, masStr[i].status, styleBl1Form09(brb))}
        </Grid>,
      );
    }
    return resStr;
  };

  const HeaderTabl = () => {
    return (
      <Grid container sx={styleBl1Form07}>
        {TablStr(1, 1.0, 'Номер', styleBl1Form08)}
        {TablStr(1, 1.5, 'Дата созания', styleBl1Form08)}
        {TablStr(1, 2.5, 'Плановая дата выполнения', styleBl1Form08)}
        {TablStr(1, 1.0, 'Субъект', styleBl1Form08)}
        {TablStr(1, 1.0, 'Автор', styleBl1Form08)}
        {TablStr(1, 3.0, 'Тема', styleBl1Form08)}
        {TablStr(1, 1.0, 'Исполнитель', styleBl1Form08)}
        {TablStr(1, 1.0, 'Статус', styleBl1Form08)}
      </Grid>
    );
  };

  soobButt = Illum < 0 ? 'Показать закрытые' : 'Не показывать закрытые';

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
        <Grid container sx={styleBl1Form011(373)}>
          <Grid item xs={12}>
            {HeaderTabl()}
            <Box sx={styleBl1Form06(410)}>{StrokaForm108()}</Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HcmBl1Form108;
