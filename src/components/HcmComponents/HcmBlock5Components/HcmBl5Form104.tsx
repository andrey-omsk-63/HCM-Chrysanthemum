import * as React from "react";
//import { useSelector } from "react-redux";

//import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

import { FooterContent, BadExit } from "../../HcmServiceFunctions";

// import { FooterContent, BadExit, WaysInput } from "./../MapServiceFunctions";
// import { StrTablVert, ShiftOptimal } from "./../MapServiceFunctions";
// import { PreparCurrenciesFaza, InputFromList } from "./../MapServiceFunctions";

//import { PLANER } from "./../MainMapGl";
//import { MaxFaz } from "./../MapConst";

import { styleModalEnd, styleBl5Form00 } from "../../HcmMainStyle";
import { styleBl5Form01, styleBl5Form02 } from "../../HcmMainStyle";

//let massForm: any = null;
let flagInput = true;
let HAVE = 0;

const HcmBl5Form104 = (props: { close: Function }) => {
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
  // const VertexContent = () => {
  //   return (
  //     <>
  //       <Box sx={{ fontSize: 12 }}>Параметры перекрёстка</Box>
  //       {StrTablVert(
  //         9,
  //         "Количество фаз",
  //         InputFromList(handleChangeFaza, currencyFaza, currenciesFaza)
  //       )}
  //       {StrTablVert(
  //         9,
  //         "Минимальная длительность фазы",
  //         WaysInput(0, massForm.minDuration, SetMinDuration, 0, 10000)
  //       )}
  //       {StrTablVert(
  //         9,
  //         "Участвует в автоматической оптимизации",
  //         ShiftOptimal(massForm.optimal, ChangeOptimal, -0.1)
  //       )}
  //     </>
  //   );
  // };

  // const DirectContent = () => {
  //   return (
  //     <>
  //       <Box sx={{ fontSize: 12, marginTop: 0.5 }}>Параметры направлений</Box>
  //       {StrTablVert(
  //         9,
  //         "Насыщение(т.е./ч.)",
  //         WaysInput(0, massForm.satur, SetSatur, 0, 10000)
  //       )}
  //       {StrTablVert(
  //         9,
  //         "Средняя интенсивность(т.е./ч.)",
  //         WaysInput(0, massForm.intens, SetIntens, 0, 10000)
  //       )}
  //       {StrTablVert(
  //         9,
  //         "Дисперсия пачки(%)",
  //         WaysInput(0, massForm.dispers, SetDispers, 0, 100)
  //       )}
  //       {StrTablVert(
  //         9,
  //         "Смещ.начала зелёного(сек)",
  //         WaysInput(0, massForm.offsetBeginGreen, SetOffsetBeginGreen, 0, 20)
  //       )}
  //       {StrTablVert(
  //         9,
  //         "Смещ.конца зелёного(сек)",
  //         WaysInput(0, massForm.offsetEndGreen, SetOffsetEndGreen, 0, 20)
  //       )}
  //       {StrTablVert(
  //         9,
  //         "Вес остановки",
  //         WaysInput(0, massForm.wtStop, SetWtStop, 0, 10)
  //       )}
  //       {StrTablVert(
  //         9,
  //         "Вес задержки",
  //         WaysInput(0, massForm.wtDelay, SetWtDelay, 0, 10)
  //       )}
  //     </>
  //   );
  // };

  return (
    <>
      <Modal open={open} onClose={CloseEnd} hideBackdrop={false}>
        <Box sx={styleBl5Form00(500, 505)}>
          <Button sx={styleModalEnd} onClick={() => handleCloseBad()}>
            <b>&#10006;</b>
          </Button>
          <Box sx={styleBl5Form01}>
            <b>Добавить Healt Check</b>
          </Box>
          <Box sx={styleBl5Form02}>
            {/* {VertexContent()}
            {DirectContent()} */}
          </Box>
          {HAVE > 0 && <>{FooterContent(SaveForm)}</>}
        </Box>
      </Modal>
      {badExit && <>{BadExit(badExit, handleCloseBadExit)}</>}
    </>
  );
};

export default HcmBl5Form104;