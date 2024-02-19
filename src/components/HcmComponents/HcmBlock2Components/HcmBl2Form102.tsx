import * as React from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import HcmBl2Form1021 from './HcmBl2Form1021';
import HcmBl2Form1022 from './HcmBl2Form1022';
import HcmBl2Form1023 from './HcmBl2Form1023';

import { TablStr } from '../../HcmServiceFunctions';

import { styleBl3Form01, styleMain04 } from '../../HcmMainStyle';
import { styleBl1Form077, styleBl1Form08 } from '../../HcmMainStyle';
import { styleBl2Form07, styleBl2Form05 } from '../../HcmMainStyle';
import { styleBl1Form09, styleBl2Form04 } from '../../HcmMainStyle';

const date = new Date();
const tekYear = date.getFullYear();
const tekMonth = date.getMonth();
//const tekMonth = 7;
let tekQ = 0;

// if (tekMonth < 4) tekQ = 1;
// if (tekMonth > 3 && tekMonth < 7) tekQ = 2;
// if (tekMonth > 6 && tekMonth < 10) tekQ = 3;
// if (tekMonth > 9) tekQ = 4;
let masQ: Array<string> = [];

let Illum = tekQ;
let optQ = tekQ;
let IDX = -1;
let FORM: any = null;
let flagInic = true;

let maskForm = {
  avtor: 'Доцент', // 'Автор
  why: 'Так себе основание', // Причина проведения
  status: '0.0', // Общее состояние команды
  connect2: '0.0', // Взаимодействие с руководителем
  pay: '0.0', // Заработная плата, бонусы
  load: '0.0', // Нагрузка, режим работы
  link: 'https://e.mail.ru/newsletters/0:17066793751836945566',
  comment:
    'Таганский суд Москвы в пятницу приступит к рассмотрению по существу иска к компании МТС с требованием компенсации миллиарда долларов за «голую вечеринку» в клубе «Мутабор». МТС с требованием компенсации миллиарда долларов за «голую вечеринку» в клубе «Мутабор».',
  //============
  unit: 'ООО Рога и капыта', // Подразделение
  period: '1 квартал 2023',
  know: '0.0', // Информированность
  develop: '0.0', // Развитие
  tasks: '0.0', // Текущие задачи
  connect1: '0.0', // Взаимодействие в команде
};

let formPeriod: any = null;

const HcmBl2Form102 = () => {
  //== Piece of Redux =======================================
  // let datestat = useSelector((state: any) => {
  //   const { statsaveReducer } = state;
  //   return statsaveReducer.datestat;
  // });
  //const dispatch = useDispatch();
  //console.log("Setup_massplan:", massplan);
  //=== инициализация ======================================
  if (flagInic) {
    flagInic = false;
    if (tekMonth < 4) tekQ = 1;
    if (tekMonth > 3 && tekMonth < 7) tekQ = 2;
    if (tekMonth > 6 && tekMonth < 10) tekQ = 3;
    if (tekMonth > 9) tekQ = 4;
    masQ.push(tekQ + 'Q ' + tekYear);

    let Q2 = tekQ - 1 === 0 ? 4 : tekQ - 1;
    let year2 = Q2 > tekQ ? tekYear - 1 : tekYear;
    masQ.push(Q2 + 'Q ' + year2);

    let Q3 = Q2 - 1 === 0 ? 4 : Q2 - 1;
    let year3 = Q3 > tekQ ? tekYear - 1 : tekYear;
    masQ.push(Q3 + 'Q ' + year3);

    let Q4 = Q3 - 1 === 0 ? 4 : Q3 - 1;
    let year4 = Q4 > tekQ ? tekYear - 1 : tekYear;
    masQ.push(Q4 + 'Q ' + year4);

    console.log('!!!!!!:', tekQ, Q2, Q3, Q4, masQ);

    Illum = 1;
    optQ = 1;
  }

  //========================================================
  const [bl2Form1021, setBl2Form2011] = React.useState(false);
  const [bl2Form1022, setBl2Form2012] = React.useState(false);
  const [viewing, setViewing] = React.useState(false);
  const [trigger, setTrigger] = React.useState(false);
  //=== Функции - обработчики ==============================
  const ClickKnop1 = () => {
    Illum = optQ = 1;
    setTrigger(!trigger);
  };

  const ClickKnop2 = () => {
    Illum = optQ = 2;
    setTrigger(!trigger);
  };

  const ClickKnop3 = () => {
    Illum = optQ = 3;
    setTrigger(!trigger);
  };

  const ClickKnop4 = () => {
    Illum = optQ = 4;
    setTrigger(!trigger);
  };

  const ClickKnop5 = () => {};

  const ClickKnop6 = () => {
    //setBl2Form2011(true);
    setBl2Form2012(true);
  };
  //=== Компоненты =========================================
  const MenuContent = () => {
    const KnopQ = (nomQ: number, func: Function) => {
      return (
        <>
          {/* {nomQ <= tekQ ? (
            <Button sx={styleMain04(1.0, Illum, nomQ)} onClick={() => func()}>
              {nomQ}Q {tekYear}
            </Button>
          ) : (
            <Box sx={styleBl2Form06}>
              <b>
                {nomQ}Q {tekYear}
              </b>
            </Box>
          )} */}
          <Button sx={styleMain04(1.0, Illum, nomQ)} onClick={() => func()}>
            {masQ[nomQ - 1]}
          </Button>
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

        <Grid item xs={5} sx={styleBl2Form07}>
          <em>Нажмите на запись для более детального просмотра</em>
        </Grid>
        <Grid item xs={1.5} sx={{}}>
          <Button sx={styleMain04(1.5, Illum, 9)} onClick={() => ClickKnop5()}>
            Добавить НС
          </Button>
        </Grid>
        <Grid item xs={1.5} sx={{}}>
          <Button sx={styleMain04(1.5, Illum, 9)} onClick={() => ClickKnop6()}>
            Выбрать за период
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

  const ClicStr = (idx: number, form: any) => {
    IDX = idx;
    FORM = form;
    setViewing(true);
  };

  const StrokaForm1021 = () => {
    let resStr = [];
    let masStr: any = [];
    for (let i = 0; i < 6; i++) {
      for (let j = 1; j < 5; j++) {
        let maskStr = JSON.parse(JSON.stringify(maskForm));
        //maskStr.period = optQ + '-й квартал ' + tekYear;
        maskStr.period = masQ[optQ - 1];
        switch (j) {
          case 1:
            maskStr.unit = 'ИТ отдел';
            //maskStr.period = "1 квартал 2023";
            maskStr.why = 'Орг.изменения';
            maskStr.status = '1.0';
            maskStr.connect1 = '6.9';
            maskStr.connect2 = '5.0';
            maskStr.know = '3.0';
            maskStr.develop = '4.0';
            maskStr.tasks = '8.0';
            maskStr.pay = '7.7';
            maskStr.load = '9.0';
            break;
          case 2:
            maskStr.unit = 'ИТ отдел';
            //maskStr.period = "2 квартал 2023";
            maskStr.why = 'Смена руководителя';
            maskStr.status = '7.0';
            maskStr.connect1 = '6.0';
            maskStr.connect2 = '4.0';
            maskStr.know = '9.0';
            maskStr.develop = '2.0';
            maskStr.tasks = '5.0';
            maskStr.pay = '4.0';
            maskStr.load = '3.0';
            break;
          case 3:
            maskStr.unit = 'ИТ отдел';
            // maskStr.period = "3 квартал 2023";
            maskStr.why = 'Выгорание команды';
            maskStr.status = '6.0';
            maskStr.connect1 = '3.0';
            maskStr.connect2 = '7.0';
            maskStr.know = '6.0';
            maskStr.develop = '7.0';
            maskStr.tasks = '4.0';
            maskStr.pay = '8.0';
            maskStr.load = '2.0';
            break;
          case 4:
            maskStr.unit = 'ИТ отдел';
            //maskStr.period = "4 квартал 2023";
            maskStr.why = 'Просто так';
            maskStr.status = '4.0';
            maskStr.connect1 = '10';
            maskStr.connect2 = '2.0';
            maskStr.know = '8.0';
            maskStr.develop = '10.0';
            maskStr.tasks = '9.0';
            maskStr.pay = '6.0';
            maskStr.load = '7.0';
        }
        masStr.push(maskStr);
      }
    }
    for (let i = 0; i < masStr.length; i++) {
      let brb: any = i === masStr.length - 1 ? 0 : '1px solid #d4d4d4';
      resStr.push(
        <Grid
          key={i}
          container
          sx={{ color: '#5B1080', cursor: 'pointer' }}
          onClick={() => ClicStr(i, masStr[i])}>
          {TablStr(0, 1.4, masStr[i].unit, styleBl1Form09(brb))}
          {TablStr(0, 0.8, masStr[i].period, styleBl1Form09(brb))}
          {TablStr(0, 1.0, masStr[i].why, styleBl1Form09(brb))}
          {TablStr(0, 1.2, masStr[i].status, styleBl1Form09(brb))}
          {TablStr(0, 1.25, masStr[i].connect1, styleBl1Form09(brb))}
          {TablStr(0, 1.25, masStr[i].connect2, styleBl1Form09(brb))}
          {TablStr(0, 1.5, masStr[i].know, styleBl1Form09(brb))}
          {TablStr(0, 0.8, masStr[i].develop, styleBl1Form09(brb))}
          {TablStr(0, 0.8, masStr[i].tasks, styleBl1Form09(brb))}
          {TablStr(0, 1.0, masStr[i].pay, styleBl1Form09(brb))}
          {TablStr(0, 1.0, masStr[i].load, styleBl1Form09(brb))}
        </Grid>,
      );
    }
    return resStr;
  };

  const SetBl2Form2012 = (mask: any) => {
    formPeriod = mask;
    setBl2Form2012(false);
    setBl2Form2011(true);
  };

  return (
    <Grid container sx={styleBl3Form01(138)}>
      <Grid item xs={12}>
        <Grid container>
          {MenuContent()}
          <Grid item xs={12} sx={styleBl2Form05}>
            {HeaderTabl()}
            <Box sx={styleBl2Form04(228)}>{StrokaForm1021()}</Box>
          </Grid>
        </Grid>
        {bl2Form1021 && <HcmBl2Form1021 form={formPeriod} close={setBl2Form2011} />}
        {bl2Form1022 && <HcmBl2Form1022 close={SetBl2Form2012} />}
        {viewing && <HcmBl2Form1023 idx={IDX} form={FORM} close={setViewing} />}
      </Grid>
    </Grid>
  );
};

export default HcmBl2Form102;
