import * as React from "react";
//import { useSelector } from "react-redux";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

import "dayjs/locale/ru";
import dayjs, { Dayjs } from "dayjs";

import { FooterContent, BadExit, StrTablProp } from "../../HcmServiceFunctions";
import { InputStrField, InputStrFieldMult } from "../../HcmServiceFunctions";
import { MakeDate, InputerDate } from "../../HcmServiceFunctions";

import { styleModalEnd, styleBl5Form00, styleInpOk } from "../../HcmMainStyle";
import { styleBl5Form01, styleBl5Form02, styleButOk } from "../../HcmMainStyle";
import { styleBl5Form03, styleBl5Form06 } from "../../HcmMainStyle";
import { styleBl5Form04, styleBl5Form05 } from "../../HcmMainStyle";

//let massForm: any = null;
let flagInput = true;
let HAVE = 0;

const date = new Date();
const tekYear = date.getFullYear();
let eventInp: any = null;
let formSett = MakeDate(date);
let inpDate = false;
let massGoodDate: Array<string> = [];

let maskForm = {
  name: "Пупкин Иван",
  ment: "Тяпкин Фёдор",
  avtor: "Фантомас",
  link: "https://e.mail.ru/newsletters/0:17066793751836945566",
  comment:
    "Политик напомнил, что согласно референдуму, проведенному в 1991 году, Закарпатье должно существовать как автономия с широким кругом прав.",
};

const HcmBl5Form101 = (props: { close: Function }) => {
  //== Piece of Redux =======================================
  // let massplan = useSelector((state: any) => {
  //   const { massplanReducer } = state;
  //   return massplanReducer.massplan;
  // });
  //const dispatch = useDispatch();
  //console.log("Setup_massplan:", massplan);
  //========================================================
  const [valueName, setValueName] = React.useState(maskForm.name);
  const [valueMent, setValueMent] = React.useState(maskForm.ment);
  const [valueAvtor, setValueAvtor] = React.useState(maskForm.avtor);
  const [valueLink, setValueLink] = React.useState(maskForm.link);
  const [valueComment, setValueComment] = React.useState(maskForm.comment);
  //const [valueDate, setValueDate] = React.useState<Dayjs | null>(null);
  const [valueDate, setValueDate] = React.useState<Dayjs | null>(
    dayjs(formSett)
  );
  const [open, setOpen] = React.useState(true);
  const [badExit, setBadExit] = React.useState(false);
  const [trigger, setTrigger] = React.useState(false);
  //=== инициализация ======================================
  if (flagInput) {
    HAVE = 0;
    setValueDate(dayjs(formSett));
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
    if (reason === "escapeKeyDown") handleCloseBad();
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
  const InputDate = () => {
    const handleChangeDP = (event: any) => {
      let god = new Date(event.toString()).getFullYear();
      let yearAll = tekYear - god;
      console.log("god:", god, event.toString());
      console.log("yearAll:", yearAll);
      if (event.toString() === "Invalid Date" || yearAll <= -11 || yearAll > 11) {
        inpDate = false;
        setTrigger(!trigger);
      } else {
        inpDate = true;
        setValueDate((eventInp = event));
      }
    };
    return <>{InputerDate(valueDate, handleChangeDP, massGoodDate)}</>;
  };

  const InputOk = () => {
    inpDate = false;
    setValueDate(eventInp);
    setTrigger(!trigger);
  };

  const InputerOk = (inpDate: boolean, InputOk: Function) => {
    return (
      <Grid item xs={2.3} sx={styleInpOk}>
        {inpDate && (
          <Button sx={styleButOk} onClick={() => InputOk()}>
            Да
          </Button>
        )}
      </Grid>
    );
  };

  const ContentDate = () => {
    return (
      <Grid item container sx={styleBl5Form04}>
        <Grid item xs sx={styleBl5Form05}>
          <Box sx={styleBl5Form06}>{InputDate()}</Box>
        </Grid>
        {InputerOk(inpDate, InputOk)}
      </Grid>
    );
  };

  const TableContent = () => {
    return (
      <>
        {StrTablProp(
          4,
          "Сотрудник*",
          InputStrField(212, hdlChangeName, valueName)
        )}
        {StrTablProp(
          4,
          "Ментор*",
          InputStrField(212, hdlChangeMent, valueMent)
        )}
        {StrTablProp(4, "Дата начала*", ContentDate())}
        {StrTablProp(4, "Дата окончания*", "21.12.2023")}
        {StrTablProp(
          4,
          "Автор (Ник)",
          InputStrField(212, hdlChangeAvtor, valueAvtor)
        )}
        {StrTablProp(
          4,
          "Ссылка на план адаптации",
          InputStrField(386, hdlChangeLink, valueLink)
        )}
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
