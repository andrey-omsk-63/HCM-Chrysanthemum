import * as React from 'react';
//import { useSelector } from "react-redux";

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
//mport TextField from '@mui/material/TextField';

import { FooterContent, BadExit, StrTablProp } from '../../HcmServiceFunctions';
import { InputStrField, InputStrFieldMult } from '../../HcmServiceFunctions';

import { styleModalEnd, styleBl5Form00 } from '../../HcmMainStyle';
import { styleBl5Form01, styleBl5Form02 } from '../../HcmMainStyle';
import { styleBl5Form03 } from '../../HcmMainStyle';

//let massForm: any = null;
let flagInput = true;
let HAVE = 0;

const HcmBl5Form101 = (props: { close: Function }) => {
  //== Piece of Redux =======================================
  // let massplan = useSelector((state: any) => {
  //   const { massplanReducer } = state;
  //   return massplanReducer.massplan;
  // });
  //const dispatch = useDispatch();
  //console.log("Setup_massplan:", massplan);
  //========================================================
  const [open, setOpen] = React.useState(true);
  const [badExit, setBadExit] = React.useState(false);
  //const [trigger, setTrigger] = React.useState(false);
  //=== инициализация ======================================
  if (flagInput) {
    HAVE = 0;
    // currenciesFaza = PreparCurrenciesFaza(MaxFaz);
    // massForm = JSON.parse(JSON.stringify(massplan.setup));
    flagInput = false;
  }
  //========================================================
  //const [currencyFaza, setCurrencyFaza] = React.useState((massForm.sumPhases - 2).toString());

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

  // const handleKey = (event: any) => {
  //   if (event.key === 'Enter') event.preventDefault();
  // };
  //=== Функции - обработчики ==============================
  const SaveForm = (mode: number) => {
    if (mode) {
      //massplan.setup = massForm;
      //dispatch(massplanCreate(massplan));
      handleClose();
    } else handleCloseBad();
  };
  const hdlChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      setValueName(event.target.value.trimStart()); // удаление пробелов в начале строки
      maskForm.name = event.target.value.trimStart();
      HAVE++;
    }
  };

  const hdlChangeMent = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      setValueMent(event.target.value.trimStart()); // удаление пробелов в начале строки
      maskForm.ment = event.target.value.trimStart();
      HAVE++;
    }
  };

  const hdlChangeAvtor = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      setValueAvtor(event.target.value.trimStart()); // удаление пробелов в начале строки
      maskForm.avtor = event.target.value.trimStart();
      HAVE++;
    }
  };

  const hdlChangeLink = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      setValueLink(event.target.value.trimStart()); // удаление пробелов в начале строки
      maskForm.link = event.target.value.trimStart();
      HAVE++;
    }
  };

  const hdlChangeComment = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      setValueComment(event.target.value.trimStart()); // удаление пробелов в начале строки
      maskForm.comment = event.target.value.trimStart();
      HAVE++;
    }
  };
  //========================================================
  let maskForm = {
    name: 'Пупкин Иван',
    ment: 'Тяпкин Фёдор',
    avtor: 'Фантомас',
    link: 'https://e.mail.ru/newsletters/0:17066793751836945566',
    comment:
      'Политик напомнил, что согласно референдуму, проведенному в 1991 году, Закарпатье должно существовать как автономия с широким кругом прав.',
  };

  const [valueName, setValueName] = React.useState(maskForm.name);
  const [valueMent, setValueMent] = React.useState(maskForm.ment);
  const [valueAvtor, setValueAvtor] = React.useState(maskForm.avtor);
  const [valueLink, setValueLink] = React.useState(maskForm.link);
  const [valueComment, setValueComment] = React.useState(maskForm.comment);

  const TableContent = () => {
    return (
      <>
        {StrTablProp(4, 'Сотрудник*', InputStrField(212, hdlChangeName, valueName))}
        {StrTablProp(4, 'Ментор*', InputStrField(212, hdlChangeMent, valueMent))}
        {StrTablProp(4, 'Дата начала*', '12.12.2021')}
        {StrTablProp(4, 'Дата окончания*', '21.12.2023')}
        {StrTablProp(4, 'Автор (Ник)', InputStrField(212, hdlChangeAvtor, valueAvtor))}
        {StrTablProp(4, 'Ссылка на план адаптации', InputStrField(386, hdlChangeLink, valueLink))}
        <Grid container sx={{ marginTop: 2 }}>
          <Grid item xs={4} sx={{ height: 100, border: 0 }}>
            Комментарий
          </Grid>
          <Grid item xs sx={styleBl5Form03}>
            {InputStrFieldMult(386, hdlChangeComment, valueComment)}
          </Grid>
        </Grid>
      </>
    );
  };

  return (
    <>
      <Modal open={open} onClose={CloseEnd} hideBackdrop={false}>
        <Box sx={styleBl5Form00(650, 452)}>
          <Button sx={styleModalEnd} onClick={() => handleCloseBad()}>
            <b>&#10006;</b>
          </Button>
          <Box sx={styleBl5Form01}>
            <b>Добавить данные по адаптации</b>
          </Box>
          <Box sx={styleBl5Form02}>{TableContent()}</Box>
          {HAVE > 0 && <>{FooterContent(SaveForm)}</>}
        </Box>
      </Modal>
      {badExit && <>{BadExit(badExit, handleCloseBadExit)}</>}
    </>
  );
};

export default HcmBl5Form101;
