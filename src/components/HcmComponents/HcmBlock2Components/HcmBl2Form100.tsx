import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { statsaveCreate } from "./../../../redux/actions";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

import { FooterContent, BadExit } from "../../HcmServiceFunctions";

import { styleModalEnd, styleBl5Form00 } from "../../HcmMainStyle";
import { styleBl5Form01, styleBl2Form02 } from "../../HcmMainStyle";

let flagInput = true;
let HAVE = 0;

let treeMenu: any = [];
let IDX = 0;

const HcmBl2Form100 = (props: { close: Function }) => {
  //== Piece of Redux =======================================
  let datestat = useSelector((state: any) => {
    const { statsaveReducer } = state;
    return statsaveReducer.datestat;
  });
  const dispatch = useDispatch();
  //console.log("Setup_massplan:", massplan);
  //========================================================
  const [open, setOpen] = React.useState(true);
  const [badExit, setBadExit] = React.useState(false);
  const [trigger, setTrigger] = React.useState(false);
  //=== инициализация ======================================
  if (flagInput) {
    HAVE = 0;
    IDX = datestat.idxTreeUnit;
    treeMenu = datestat.treeUnit;
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
  const SaveForm = (mode: number) => {
    if (mode) {
      datestat.idxTreeUnit = IDX;
      dispatch(statsaveCreate(datestat));
      handleClose();
    } else handleCloseBad();
  };

  const ClickTree = (idx: number) => {
    // datestat.idxTreeUnit = idx;
    // dispatch(statsaveCreate(datestat));
    IDX = idx;
    HAVE++;
    setTrigger(!trigger);
  };

  //========================================================

  const styleMain04 = (ILLUM: number, mode: number) => {
    const styleMain040 = {
      marginTop: "5px",
      fontSize: ILLUM === mode ? 13.5 : 12.5,
      height: "24px",
      bgcolor: ILLUM === mode ? "#82e94a" : "#E6F5D6", // ярко-салатовый/светло-салатовый
      border: "1px solid #d4d4d4", // серый
      borderRadius: 1,
      color: "black",
      textTransform: "unset !important",
      boxShadow: ILLUM === mode ? 9 : 3,
    };
    return styleMain040;
  };

  const TreeContent = () => {
    let resStr = [];
    for (let i = 0; i < treeMenu.length; i++) {
      let xss = 3.0;
      let rec = treeMenu[i].lev3;
      if (!treeMenu[i].lev3) {
        xss = 1.0;
        rec = treeMenu[i].lev2;
        if (!treeMenu[i].lev2) {
          xss = 0.01;
          rec = treeMenu[i].lev1;
        }
      }

      resStr.push(
        <Grid key={i} container sx={{ marginBottom: 0 }}>
          <Grid item xs={xss}></Grid>
          <Grid item xs>
            <Button sx={styleMain04(IDX, i)} onClick={() => ClickTree(i)}>
              {xss === 3 && (
                <Box>
                  <em>{rec}</em>
                </Box>
              )}
              {xss === 0.01 && (
                <Box>
                  <b>{rec}</b>
                </Box>
              )}
              {xss === 1 && <Box>{rec}</Box>}
            </Button>
          </Grid>
        </Grid>
      );
    }
    return resStr;
  };

  let heightBlock = window.innerHeight - 50;
  //let widthBlock = window.innerWidth - 50;

  return (
    <>
      <Modal open={open} onClose={CloseEnd} hideBackdrop={false}>
        <Box sx={styleBl5Form00(548, heightBlock)}>
          <Button sx={styleModalEnd} onClick={() => handleCloseBad()}>
            <b>&#10006;</b>
          </Button>
          <Box sx={styleBl5Form01}>
            <b>Фильтр подразделений</b>
          </Box>
          <Box sx={styleBl2Form02(145)}>{TreeContent()}</Box>
          {HAVE > 0 && <>{FooterContent(SaveForm)}</>}
        </Box>
      </Modal>
      {badExit && <>{BadExit(badExit, handleCloseBadExit)}</>}
    </>
  );
};

export default HcmBl2Form100;
