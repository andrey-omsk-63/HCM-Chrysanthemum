import * as React from 'react';
//import { useSelector } from "react-redux";

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import 'dayjs/locale/ru';
import dayjs, { Dayjs } from 'dayjs';

import { FooterContent, BadExit, StrTablProp } from '../../HcmServiceFunctions';
import { InputStrField } from '../../HcmServiceFunctions';
import { MakeDate, InputerDate, InputDirectRec } from '../../HcmServiceFunctions';
import { PreparCurrenciesCommon } from '../../HcmServiceFunctions';

import { styleModalEnd, styleBl5Form00 } from '../../HcmMainStyle';
import { styleBl5Form01, styleBl5Form02 } from '../../HcmMainStyle';
import { styleBl5Form06 } from '../../HcmMainStyle';
import { styleBl5Form04, styleBl5Form05 } from '../../HcmMainStyle';

//let massForm: any = null;
let flagInput = true;
let HAVE = 0;

const date = new Date();
let formSett = MakeDate(date);
let eventInp1 = dayjs(formSett);

let massGoodDate: Array<string> = [];

let maskForm = {
  avtor: 'Доцент', // 'Автор
  base: 'Так себе основание', // Причина проведения
  state: 'Хорошее', // Общее состояние команды
  coop: 'Не очень хорошее', // Взаимодействие с руководителем
  wages: 'Хорошая', // Заработная плата, бонусы
  load: 'Сильная', // Нагрузка, режим работы
  //============
  unit: 'ООО Рога и капыта', // Подразделение
  know: 'Высокая', // Информированность
  develop: 'Непрерывное', // Развитие
  task: 'Сложные', // Текущие задачи
  connect: 'Хорошее', // Взаимодействие в команде
};
let currencies01: any = []; // Авторы
let currencies02: any = []; // Причины проведения
let currencies03: any = []; // Подразделения

let dat1 = ['Фантомас', 'Лишенец', 'Бугор', 'Ляля'];
let dat2 = [
  'Очень важное основание',
  'Так себе основание',
  'Необходимая необходимость',
  'Фигня какая-та',
];
let dat3 = ['ООО Рога и капыта', 'Пехота', 'Автобат', 'Конница', 'Хозвзвод'];

const HcmBl5Form104 = (props: { close: Function }) => {
  //== Piece of Redux =======================================
  // let massplan = useSelector((state: any) => {
  //   const { massplanReducer } = state;
  //   return massplanReducer.massplan;
  // });
  //const dispatch = useDispatch();
  //console.log("Setup_massplan:", massplan);
  //========================================================
  const [valueState, setValueState] = React.useState(maskForm.state);
  const [valueCoop, setValueCoop] = React.useState(maskForm.coop);
  const [valueWages, setValueWages] = React.useState(maskForm.wages);
  const [valueLoad, setValueLoad] = React.useState(maskForm.load);
  const [valueDate1, setValueDate1] = React.useState<Dayjs | null>(dayjs(formSett));
  const [valueKnow, setValueKnow] = React.useState(maskForm.know);
  const [valueDevelop, setValueDevelop] = React.useState(maskForm.develop);
  const [valueTask, setValueTask] = React.useState(maskForm.task);
  const [valueConnect, setValueConnect] = React.useState(maskForm.connect);

  const [currency01, setCurrency01] = React.useState('0');
  const [currency02, setCurrency02] = React.useState('0');
  const [currency03, setCurrency03] = React.useState('0');
  const [open, setOpen] = React.useState(true);
  const [badExit, setBadExit] = React.useState(false);
  //const [trigger, setTrigger] = React.useState(false);
  //=== инициализация ======================================
  if (flagInput) {
    HAVE = 0;
    setValueDate1(dayjs(formSett));
    currencies01 = PreparCurrenciesCommon(dat1); // Авторы
    currencies02 = PreparCurrenciesCommon(dat2); // Причины проведения
    currencies03 = PreparCurrenciesCommon(dat3); // Подразделения
    // massForm = JSON.parse(JSON.stringify(massplan.setup));
    flagInput = false;
  }
  //========================================================
  const handleClose = () => {
    flagInput = true;
    setOpen(false);
    props.close(false);
  };

  const handleCloseBad = () => {
    HAVE && setBadExit(true);
    !HAVE && handleClose();
  };

  const CloseEnd = (event: any, reason: string) => {
    if (reason === 'escapeKeyDown') handleCloseBad();
  };

  const handleCloseBadExit = (mode: boolean) => {
    setBadExit(false);
    mode && handleClose(); // выход без сохранения
  };
  //=== Функции - обработчики ==============================
  const SaveForm = (mode: number) => {
    if (mode) {
      handleClose();
    } else handleCloseBad();
  };

  const hdlChangeState = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      setValueState(event.target.value.trimStart()); // удаление пробелов в начале строки
      maskForm.state = event.target.value.trimStart();
      HAVE++;
    }
  };

  const hdlChangeCoop = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      setValueCoop(event.target.value.trimStart()); // удаление пробелов в начале строки
      maskForm.coop = event.target.value.trimStart();
      HAVE++;
    }
  };

  const hdlChangeWages = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      setValueWages(event.target.value.trimStart()); // удаление пробелов в начале строки
      maskForm.wages = event.target.value.trimStart();
      HAVE++;
    }
  };

  const hdlChangeLoad = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      setValueLoad(event.target.value.trimStart()); // удаление пробелов в начале строки
      maskForm.load = event.target.value.trimStart();
      HAVE++;
    }
  };

  const hdlChangeKnow = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      setValueKnow(event.target.value.trimStart()); // удаление пробелов в начале строки
      maskForm.know = event.target.value.trimStart();
      HAVE++;
    }
  };

  const hdlChangeDevelop = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      setValueDevelop(event.target.value.trimStart()); // удаление пробелов в начале строки
      maskForm.develop = event.target.value.trimStart();
      HAVE++;
    }
  };

  const hdlChangeTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      setValueTask(event.target.value.trimStart()); // удаление пробелов в начале строки
      maskForm.task = event.target.value.trimStart();
      HAVE++;
    }
  };

  const hdlChangeConnect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      setValueConnect(event.target.value.trimStart()); // удаление пробелов в начале строки
      maskForm.connect = event.target.value.trimStart();
      HAVE++;
    }
  };
  //========================================================
  const InputDate1 = () => {
    const handleChangeDP = (event: any) => {
      if (event.toString() === 'Invalid Date') {
        setValueDate1(dayjs(eventInp1));
      } else {
        setValueDate1((eventInp1 = event));
      }
    };
    return <>{InputerDate(valueDate1, handleChangeDP, massGoodDate)}</>;
  };

  const ContentDate1 = () => {
    return (
      <Grid item container sx={styleBl5Form04}>
        <Grid item xs sx={styleBl5Form05}>
          <Box sx={styleBl5Form06}>{InputDate1()}</Box>
        </Grid>
      </Grid>
    );
  };

  const StrokaMenuGlob = (mode: number, currency: any, currencies: any) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      switch (mode) {
        case 1: // Авторы
          setCurrency01(event.target.value);
          maskForm.avtor = dat1[Number(event.target.value)];
          HAVE++;
          break;
        case 2: // Причины проведения
          setCurrency02(event.target.value);
          maskForm.base = dat2[Number(event.target.value)];
          HAVE++;
          break;
        case 3: // Подразделения
          setCurrency03(event.target.value);
          maskForm.unit = dat3[Number(event.target.value)];
          HAVE++;
      }
    };

    return (
      <Box sx={{ marginTop: '-5px' }}>
        {InputDirectRec(handleChange, 232, currency, currencies)}
      </Box>
    );
  };

  const TableContent = () => {
    return (
      <>
        <Grid container>
          <Grid item xs={6} sx={{ padding: '0px 2px 0px 0px' }}>
            {StrTablProp(4.5, 'Автор', StrokaMenuGlob(1, currency01, currencies01))}
            {StrTablProp(4.5, 'Причина проведения', StrokaMenuGlob(2, currency02, currencies02))}
            {StrTablProp(
              6,
              'Общее состояние команды',
              InputStrField(212, hdlChangeState, valueState),
            )}
            {StrTablProp(
              6,
              'Взаимодействие с руководителем',
              InputStrField(212, hdlChangeCoop, valueCoop),
            )}
            {StrTablProp(
              6,
              'Заработная плата, бонусы',
              InputStrField(212, hdlChangeWages, valueWages),
            )}
            {StrTablProp(6, 'Нагрузка, режим работы', InputStrField(212, hdlChangeLoad, valueLoad))}
          </Grid>{' '}
          <Grid item xs={6} sx={{ padding: '0px 0px 0px 2px' }}>
            {StrTablProp(4.5, 'Подразделение', StrokaMenuGlob(3, currency03, currencies03))}
            {StrTablProp(4.5, 'За период', ContentDate1())}
            {StrTablProp(6, 'Информированность', InputStrField(212, hdlChangeKnow, valueKnow))}
            {StrTablProp(6, 'Развитие', InputStrField(212, hdlChangeDevelop, valueDevelop))}
            {StrTablProp(6, 'Текущие задачи', InputStrField(212, hdlChangeTask, valueTask))}
            {StrTablProp(
              6,
              'Взаимодействие в команде',
              InputStrField(212, hdlChangeConnect, valueConnect),
            )}
          </Grid>
        </Grid>
      </>
    );
  };
  return (
    <>
      <Modal open={open} onClose={CloseEnd} hideBackdrop={false}>
        <Box sx={styleBl5Form00(1050, 344)}>
          <Button sx={styleModalEnd} onClick={() => handleCloseBad()}>
            <b>&#10006;</b>
          </Button>
          <Box sx={styleBl5Form01}>
            <b>Добавить Health Check</b>
          </Box>
          <Box sx={styleBl5Form02}>{TableContent()}</Box>
          {HAVE > 0 && <>{FooterContent(SaveForm)}</>}
        </Box>
      </Modal>
      {badExit && <>{BadExit(badExit, handleCloseBadExit)}</>}
    </>
  );
};

export default HcmBl5Form104;
