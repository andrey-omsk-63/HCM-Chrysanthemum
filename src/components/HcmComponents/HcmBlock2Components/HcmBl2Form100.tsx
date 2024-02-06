import * as React from 'react';
//import { useSelector } from "react-redux";

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import { FooterContent, BadExit, TablStr } from '../../HcmServiceFunctions';
//import { InputStrField } from '../../HcmServiceFunctions';
//import { MakeDate, InputerDate, InputDirectRec } from '../../HcmServiceFunctions';
//import { PreparCurrenciesCommon } from '../../HcmServiceFunctions';

import { UNIT } from '../../HcmMainConst';

import { styleModalEnd, styleBl5Form00 } from '../../HcmMainStyle';
import { styleBl5Form01 } from '../../HcmMainStyle';

//let massForm: any = null;
let flagInput = true;
let HAVE = 0;

let treeMenu: any = [];

const HcmBl2Form100 = (props: { close: Function }) => {
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
    let arr = UNIT;

    // Apply array.sort with comparison function
    arr.sort(function (a, b) {
      let af = a.lev2;
      let bf = b.lev2;
      let as = a.lev3;
      let bs = b.lev3;

      // If first value is same
      if (af == bf) {
        return as < bs ? -1 : as > bs ? 1 : 0;
      } else {
        return af < bf ? -1 : 1;
      }
    });

    //arr.sort((a, b) => a.lev1 - b.lev1 || a.lev2 - b.lev2 || a.lev3 - b.lev3);

    // Display output
    console.log('£££:', arr);

    let mask = {
      lev1: arr[0].lev1,
      lev2: '',
      lev3: '',
    };

    let mas2: any = [];

    treeMenu = [];
    treeMenu.push(JSON.parse(JSON.stringify(mask)));
    for (let i = 0; i < arr.length; i++) {
      if (mas2.indexOf(arr[i].lev2) < 0) {
        mas2.push(arr[i].lev2);
        let maskk = JSON.parse(JSON.stringify(mask));
        maskk.lev2 = arr[i].lev2;
        treeMenu.push(maskk);
      }
      let maskk = JSON.parse(JSON.stringify(mask));
      maskk.lev2 = arr[i].lev2;
      maskk.lev3 = arr[i].lev3;
      treeMenu.push(maskk);
    }
    console.log('!!!:', treeMenu);
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

  //========================================================

  const TreeContent = () => {
    let resStr = [];
    for (let i = 0; i < treeMenu.length; i++) {
      let xss = 1.5;
      let rec = treeMenu[i].lev3;
      if (!treeMenu[i].lev3) {
        xss = 1;
        rec = treeMenu[i].lev2;
        if (!treeMenu[i].lev2) {
          xss = 0.5;
          rec = treeMenu[i].lev1;
        }
      }

      resStr.push(
        <Grid key={i} container sx={{ marginBottom: 0 }}>
          <Grid item xs={xss}></Grid>
          <Grid item xs>
            {rec}
          </Grid>
        </Grid>,
      );
    }
    return resStr;
  };

  let heightBlock = window.innerHeight - 50;
  let widthBlock = window.innerWidth - 50;

  const styleBl5Form02 = {
    fontSize: 15,
    textAlign: 'left',
    bgcolor: '#F1F5FB', // светло серый
    border: '1px solid #d4d4d4',
    borderRadius: 1,
    color: '#5B1080', // сиреневый
    boxShadow: 3,
    padding: '0px 20px 14px 20px',
    textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
    height: heightBlock - 95, //=====================================================
  };

  return (
    <>
      <Modal open={open} onClose={CloseEnd} hideBackdrop={false}>
        <Box sx={styleBl5Form00(widthBlock, heightBlock)}>
          <Button sx={styleModalEnd} onClick={() => handleCloseBad()}>
            <b>&#10006;</b>
          </Button>
          <Box sx={styleBl5Form01}>
            <b>Фильтр подразделений</b>
          </Box>
          <Box sx={styleBl5Form02}>{TreeContent()}</Box>
          {HAVE > 0 && <>{FooterContent(SaveForm)}</>}
        </Box>
      </Modal>
      {badExit && <>{BadExit(badExit, handleCloseBadExit)}</>}
    </>
  );
};

export default HcmBl2Form100;
