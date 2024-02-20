import * as React from 'react';
import { useSelector } from 'react-redux';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { TablStr } from './HcmServiceFunctions';

import { styleBl3Form01, styleBl1Form09 } from './HcmMainStyle';
import { styleBl1Form088 } from './HcmMainStyle';
import { styleBl1Form16, styleBl1Form07 } from './HcmMainStyle';
import { styleBl5Form01 } from './HcmMainStyle';

const HcmBl0Form101 = (props: { pers: any; openCard: Function }) => {
  //== Piece of Redux =======================================
  let datestat = useSelector((state: any) => {
    const { statsaveReducer } = state;
    return statsaveReducer.datestat;
  });
  //console.log('dateStat.person:', datestat.user.login, datestat.person);
  //let PERSON = datestat.person;
  let PERSON = props.pers;

  //const debug = datestat.debug;
  //const dispatch = useDispatch();
  //===========================================================
  const ClickProfile = (NIK: string) => {
    props.openCard(NIK);
  };

  const ButtonLink = (rec: any, func: Function) => {
    return (
      <Button sx={styleBl1Form16} onClick={() => func(rec)}>
        {rec}
      </Button>
    );
  };

  const StrokaForm101 = () => {
    let resStr = [];
    for (let i = 0; i < PERSON.length; i++) {
      let brb: any = i === PERSON.length - 1 ? 0 : '1px solid #d4d4d4';
      let coler = datestat.user.login === PERSON[i].nickName ? '#F68A1E' : '#5B1080';
      resStr.push(
        <Grid key={i} container sx={{ color: coler }}>
          {TablStr(0, 3, PERSON[i].name, styleBl1Form09(brb))}
          {TablStr(0, 3, ButtonLink(PERSON[i].nickName, ClickProfile), styleBl1Form09(brb))}
          {TablStr(0, 3, PERSON[i].department.name, styleBl1Form09(brb))}
          {TablStr(0, 3, PERSON[i].jobPosition, styleBl1Form09(brb))}
        </Grid>,
      );
    }
    return resStr;
  };

  const HeaderTabl = () => {
    return (
      <Grid container sx={styleBl1Form07}>
        {TablStr(1, 3, 'Имя', styleBl1Form088)}
        {TablStr(1, 3, 'Ник', styleBl1Form088)}
        {TablStr(1, 3, 'Подразделение', styleBl1Form088)}
        {TablStr(1, 3, 'Должность', styleBl1Form088)}
      </Grid>
    );
  };

  return (
    <Grid container sx={styleBl3Form01(48)}>
      <Grid item xs={12}>
        <Box sx={styleBl5Form01}>
          <b>Список сотрудников</b>
        </Box>
        {HeaderTabl()}
        <Box sx={{ overflowX: 'auto', height: window.innerHeight - 121 }}>{StrokaForm101()}</Box>
      </Grid>
    </Grid>
  );
};

export default HcmBl0Form101;
