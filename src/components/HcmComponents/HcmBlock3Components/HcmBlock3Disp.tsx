import * as React from "react";

import HcmErrorMessage from "../HcmErrorMessage";
// import MapFormPK01 from './MapFormPK01';
// import MapFormPK02 from './MapFormPK02';
// import MapFormPK03 from './MapFormPK03';
// import MapFormPK04 from './MapFormPK04';
// import MapFormPK05 from './MapFormPK05';

import { FORM3 } from '../../HcmMain';

// import { MakeStylSpisPK06 } from "../../MainMapStyle";

const HcmBlock3Disp = (props: { setOpen: any }) => {
  let soob = "Здесь будет запуск формы ";
  switch (FORM3) {
    case "1": 
      soob += "Регламенты";
      break;
    case "2":
      soob += "Структура компании";
      break;
    case "3":
      soob += "Структура компании copy";
      break;
    case "4": 
      soob += "Профили компетенций";
      break;
    case "5": // Программа координации
      soob += "Программа координации";
  }

  return (
    <>
      {/* {FORM === '1' && <MapFormPK01 view={true} handleClose={props.setOpen} />}
      {FORM === '2' && <MapFormPK02 view={true} handleClose={props.setOpen} />}
      {FORM === '3' && <MapFormPK03 view={true} handleClose={props.setOpen} />}
      {FORM === '4' && <MapFormPK04 view={true} handleClose={props.setOpen} />}
      {FORM === '5' && <MapFormPK05 view={true} handleClose={props.setOpen} />} */}
      {Number(FORM3) > 0 && (
        <HcmErrorMessage sErr={soob} setOpen={props.setOpen} />
      )}
    </>
  );
};

export default HcmBlock3Disp;
