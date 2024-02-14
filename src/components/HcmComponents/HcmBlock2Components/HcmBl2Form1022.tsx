import * as React from "react";
//import { useDispatch, useSelector } from 'react-redux';
//import { statsaveCreate } from '../../../redux/actions';

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

import { BadExit, InputDirectRec } from "../../HcmServiceFunctions";
import { PreparCurrenciesCommon } from "../../HcmServiceFunctions";

import { styleModalEnd } from "../../HcmMainStyle";
import { styleBl5Form01 } from "../../HcmMainStyle";
// import { styleBl1Form07, styleBl1Form08 } from '../../HcmMainStyle';
// import { styleBl1Form09, styleBl2Form04, styleBl2Form03} from '../../HcmMainStyle';

let flagInput = true;
let HAVE = 0;

let currencies01: any = []; // Год
let currencies02: any = []; // Квартал

let dat1 = ["2023", "2022", "2021", "2020"];
let dat2 = ["1-й квартал", "2-й квартал", "3-й квартал", "4-й квартал"];

const HcmBl2Form1022 = (props: { close: Function }) => {
  //== Piece of Redux =======================================
  // let datestat = useSelector((state: any) => {
  //   const { statsaveReducer } = state;
  //   return statsaveReducer.datestat;
  // });
  //const dispatch = useDispatch();
  //console.log("Setup_massplan:", massplan);
  //========================================================
  const [open, setOpen] = React.useState(true);
  const [badExit, setBadExit] = React.useState(false);
  const [currency01, setCurrency01] = React.useState("0");
  const [currency02, setCurrency02] = React.useState("0");
  //const [trigger, setTrigger] = React.useState(false);
  //=== инициализация ======================================
  if (flagInput) {
    HAVE = 0;
    currencies01 = PreparCurrenciesCommon(dat1); // Год
    currencies02 = PreparCurrenciesCommon(dat2); // Квартал
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
    if (reason === "escapeKeyDown") handleCloseBad();
  };

  const handleCloseBadExit = (mode: boolean) => {
    setBadExit(false);
    mode && handleClose(); // выход без сохранения
  };
  //=== Функции - обработчики ==============================
  const SavePeriod = () => {
    // datestat.idxTreeUnit = IDX;
    // dispatch(statsaveCreate(datestat));
    handleClose();
  };
  //========================================================

  const styleModalMenu = {
    marginTop: 0.5,
    maxHeight: "30px",
    minHeight: "30px",
    border: "1px solid #d4d4d4", // серый
    borderRadius: 1,
    bgcolor: "#E6F5D6", // светло салатовый
    color: "#5B1080", // сиреневый
    textTransform: "unset !important",
    textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
    boxShadow: 6,
  };

  const styleSetPK01 = {
    outline: "none",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: 260,
    bgcolor: "background.paper",
    border: "1px solid #FFFFFF",
    borderRadius: 1,
    boxShadow: 24,
    textAlign: "center",
    padding: "1px 10px 12px 12px",
  };

  const StrokaMenuGlob = (mode: number, currency: any, currencies: any) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      switch (mode) {
        case 1: 
          setCurrency01(event.target.value);
          //maskForm.avtor = dat1[Number(event.target.value)];
          HAVE++;
          break;
        case 2:
          setCurrency02(event.target.value);
          //maskForm.why = dat2[Number(event.target.value)];
          HAVE++;
      }
    };

    return (
      <Box sx={{ marginTop: "-5px" }}>
        {InputDirectRec(handleChange, 155, currency, currencies)}
      </Box>
    );
  };

  return (
    <>
      <Modal open={open} onClose={CloseEnd} hideBackdrop={false}>
        <Box sx={styleSetPK01}>
          <Button sx={styleModalEnd} onClick={() => handleCloseBad()}>
            <b>&#10006;</b>
          </Button>
          <Box sx={styleBl5Form01}>
            <b>Выберите период просмотра:</b>
          </Box>
          <Grid container sx={{ textAlign: "left", color: "#5B1080" }}>
            <Grid item xs={5} sx={{ border: 0 }}>
              <b>Год</b>
            </Grid>
            <Grid item xs={7} sx={{ border: 0 }}>
              {StrokaMenuGlob(1, currency01, currencies01)}
            </Grid>
            <Grid item xs={5} sx={{ border: 0, marginTop: "10px" }}>
              <b>Квартал</b>
            </Grid>
            <Grid item xs={7} sx={{ border: 0, marginTop: "10px" }}>
              {StrokaMenuGlob(2, currency02, currencies02)}
            </Grid>
          </Grid>
          <Box sx={{ marginTop: "15px", color: "#5B1080" }}>
            <Button sx={styleModalMenu} onClick={() => handleCloseBad()}>
              Отмена
            </Button>
            &nbsp;
            <Button sx={styleModalMenu} onClick={() => SavePeriod()}>
              Сохранить
            </Button>
          </Box>
        </Box>
      </Modal>
      {badExit && <>{BadExit(badExit, handleCloseBadExit)}</>}
    </>
  );
};

export default HcmBl2Form1022;
