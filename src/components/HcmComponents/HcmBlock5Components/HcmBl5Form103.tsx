import * as React from "react";
//import { useSelector } from "react-redux";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

import { FooterContent, BadExit, StrTablProp } from "../../HcmServiceFunctions";

// import { FooterContent, BadExit, WaysInput } from "./../MapServiceFunctions";
// import { StrTablVert, ShiftOptimal } from "./../MapServiceFunctions";
// import { PreparCurrenciesFaza, InputFromList } from "./../MapServiceFunctions";

//import { PLANER } from "./../MainMapGl";
//import { MaxFaz } from "./../MapConst";

import { styleModalEnd, styleBl5Form00 } from "../../HcmMainStyle";
import { styleBl5Form01, styleBl5Form02 } from "../../HcmMainStyle";
import { styleBl5Form03 } from "../../HcmMainStyle";

//let massForm: any = null;
let flagInput = true;
let HAVE = 0;

const HcmBl5Form103 = (props: { close: Function }) => {
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
    HAVE = 1;
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
    if (reason === "escapeKeyDown") handleCloseBad();
  };

  const handleCloseBadExit = (mode: boolean) => {
    setBadExit(false);
    mode && handleClose(); // выход без сохранения
  };
  //=== Функции - обработчики ==============================
  const SaveForm = (mode: number) => {
    if (mode) {
      //massplan.setup = massForm;
      //dispatch(massplanCreate(massplan));
      handleClose();
    } else handleCloseBad();
  };
  // const SetMinDuration = (valueInp: number) => {
  //   massForm.minDuration = valueInp;
  //   HAVE++;
  //   setTrigger(!trigger); // ререндер
  // };

  // const ChangeOptimal = () => {
  //   massForm.optimal = !massForm.optimal;
  //   HAVE++;
  //   setTrigger(!trigger); // ререндер
  // };

  // const SetSatur = (valueInp: number) => {
  //   massForm.satur = valueInp; // поток насыщения(т.е./ч.)
  //   HAVE++;
  //   setTrigger(!trigger); // ререндер
  // };

  // const SetIntens = (valueInp: number) => {
  //   massForm.intens = valueInp;
  //   HAVE++;
  //   setTrigger(!trigger); // ререндер
  // };

  // const SetDispers = (valueInp: number) => {
  //   massForm.dispers = valueInp;
  //   HAVE++;
  //   setTrigger(!trigger); // ререндер
  // };

  // const SetOffsetBeginGreen = (valueInp: number) => {
  //   massForm.offsetBeginGreen = valueInp;
  //   HAVE++;
  //   setTrigger(!trigger); // ререндер
  // };

  // const SetOffsetEndGreen = (valueInp: number) => {
  //   massForm.offsetEndGreen = valueInp;
  //   HAVE++;
  //   setTrigger(!trigger); // ререндер
  // };

  // const SetWtStop = (valueInp: number) => {
  //   massForm.wtStop = valueInp;
  //   HAVE++;
  //   setTrigger(!trigger); // ререндер
  // };

  // const SetWtDelay = (valueInp: number) => {
  //   massForm.wtDelay = valueInp;
  //   HAVE++;
  //   setTrigger(!trigger); // ререндер
  // };

  // const handleChangeFaza = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   massForm.sumPhases = Number(event.target.value) + 2;
  //   //setCurrencyFaza(event.target.value);
  // };
  //========================================================
  const TableContent = () => {
    return (
      <>
        {StrTablProp(4, "Объект*", "Пупкин Иван")}
        {StrTablProp(4, "Оснвание*", "Очень важное основание")}
        {StrTablProp(4, "Тема*", "Суд вынес приговор")}
        {StrTablProp(4, "Дата выполнения*", "21.12.2023")}
        {StrTablProp(4, "Исполнитель*", "Ник Фантомас")}
        <Grid container sx={{ marginTop: 2 }}>
          <Grid item xs={4} sx={{ height: 100, border: 0 }}>
            Описание
          </Grid>
          <Grid item xs sx={styleBl5Form03}>
            Центральный районный суд города Омска вынес приговор 37-летнему
            жителю города Омска, обвиняемому в хулиганстве.
          </Grid>
        </Grid>
      </>
    );
  };

  return (
    <>
      <Modal open={open} onClose={CloseEnd} hideBackdrop={false}>
        <Box sx={styleBl5Form00(650, 408)}>
          <Button sx={styleModalEnd} onClick={() => handleCloseBad()}>
            <b>&#10006;</b>
          </Button>
          <Box sx={styleBl5Form01}>
            <b>Создать задачу</b>
          </Box>
          <Box sx={styleBl5Form02}>{TableContent()}</Box>
          {HAVE > 0 && <>{FooterContent(SaveForm)}</>}
        </Box>
      </Modal>
      {badExit && <>{BadExit(badExit, handleCloseBadExit)}</>}
    </>
  );
};

export default HcmBl5Form103;
