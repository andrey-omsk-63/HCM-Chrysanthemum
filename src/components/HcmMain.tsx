import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { massfazCreate, statsaveCreate } from '../redux/actions';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

//import { YMaps, Map, FullscreenControl } from 'react-yandex-maps';
//import { GeolocationControl, YMapsApi } from 'react-yandex-maps';
//import { RulerControl, SearchControl } from 'react-yandex-maps';
//import { TrafficControl, TypeSelector, ZoomControl } from 'react-yandex-maps';

//import SdcDoPlacemarkDo from './HcmComponents/SdcDoPlacemarkDo';
//import SdcControlVertex from './HcmComponents/SdcControlVertex';
//import HcmErrorMessage from './HcmComponents/HcmErrorMessage';

//import { StrokaMenuGlob, CenterCoord } from './HcmServiceFunctions';
import { CloseInterval } from './HcmServiceFunctions';

//import { SendSocketGetPhases } from './HcmSocketFunctions';

import { SendSocketDispatch } from './HcmSocketFunctions';

//import { MyYandexKey } from './HcmMainConst';

//import { searchControl } from './HcmMainStyle';

export let DEMO = false;

//et flagOpen = false;
// const zoomStart = 10;
// let zoom = zoomStart;
// let pointCenter: any = 0;
// let newCenter: any = [];
// let funcBound: any = null;

// let soobErr = '';
// let idxObj = -1;

//let ev: any = null

let widthGl = window.innerWidth - 3;

const HcmMain = (props: { trigger: boolean }) => {
  //== Piece of Redux =======================================
  // const map = useSelector((state: any) => {
  //   const { mapReducer } = state;
  //   return mapReducer.map.dateMap;
  // });
  // let coordinates = useSelector((state: any) => {
  //   const { coordinatesReducer } = state;
  //   return coordinatesReducer.coordinates;
  // });
  let massfaz = useSelector((state: any) => {
    const { massfazReducer } = state;
    return massfazReducer.massfaz;
  });
  let datestat = useSelector((state: any) => {
    const { statsaveReducer } = state;
    return statsaveReducer.datestat;
  });
  const debug = datestat.debug;
  const ws = datestat.ws;
  //const homeRegion = datestat.region;
  DEMO = datestat.demo;
  const dispatch = useDispatch();
  //===========================================================
  // const [control, setControl] = React.useState(false);
  // const [flagCenter, setFlagCenter] = React.useState(false);
  // const [demoSost, setDemoSost] = React.useState(-1);
  // const [openSetErr, setOpenSetErr] = React.useState(false);
  // const [ymaps, setYmaps] = React.useState<YMapsApi | null>(null);
  // const mapp = React.useRef<any>(null);

  const StatusQuo = (mode: boolean) => {
    for (let i = 0; i < datestat.timerId.length; i++) {
      if (!DEMO && datestat.timerId[i] !== null) {
        SendSocketDispatch(debug, ws, massfaz[i].idevice, 9, 9); // КУ
        SendSocketDispatch(debug, ws, massfaz[i].idevice, 4, 0); // закрытие id
      }
      mode && CloseInterval(datestat, i);
    }
    if (mode) {
      datestat.timerId = [];
      datestat.massInt = [];
      datestat.first = true;
      datestat.working = false;
      datestat.massMem = [];
      datestat.demoIdx = [];
      datestat.demoTlsost = [];
      datestat.demoLR = [];
      datestat.stopSwitch = [];
      datestat.tekDemoTlsost = [];
      dispatch(statsaveCreate(datestat));
      massfaz = [];
      dispatch(massfazCreate(massfaz));
    }
  };

  //=== вывод светофоров ===================================

  const PressButton = (mode: number) => {
    switch (mode) {
      case 61: // режим управления
        StatusQuo(true);
        datestat.finish = false;
        datestat.demo = false;
        dispatch(statsaveCreate(datestat));
        DEMO = false;
        break;
      case 62: // режим Демо
        StatusQuo(true);
        datestat.finish = false;
        datestat.demo = true;
        dispatch(statsaveCreate(datestat));
        DEMO = true;
        break;
      case 63: // Косяк при работе с меню
      //soobErr = 'Завершите предыдущий режим нормальным образом';
      //setOpenSetErr(true);
    }
  };
  //=== Функции - обработчики ==============================

  //=== инициализация ======================================
  // if (!flagOpen && Object.keys(map.tflight).length) {
  //   pointCenter = CenterCoord(
  //     map.boxPoint.point0.Y,
  //     map.boxPoint.point0.X,
  //     map.boxPoint.point1.Y,
  //     map.boxPoint.point1.X,
  //   );
  //   flagOpen = true;
  // }
  //=== Закрытие или перезапуск вкладки ====================
  React.useEffect(() => {
    window.addEventListener('beforeunload', alertUser);
    window.addEventListener('unload', handleTabClosing);

    return () => {
      window.removeEventListener('beforeunload', alertUser);
      window.removeEventListener('unload', handleTabClosing);
    };
  });

  const handleTabClosing = () => {
    console.log('3пришло:');
    removePlayerFromGame();
  };

  const alertUser = (event: any) => {
    console.log('2пришло:', event);
    // ev = JSON.parse(JSON.stringify(event));
    StatusQuo(false);
    //  event.preventDefault();
    //  event.returnValue = "";
  };

  function removePlayerFromGame() {
    throw new Error('Function not implemented.');
  }
  //========================================================

  // const styleChat05 = {
  //   fontSize: 11,
  //   flexGrow: 1,
  //   width: '100%',
  //   //background: '#E5E5E5',
  //   background: 'linear-gradient(125deg, #DCE0AB 30%,#97BB92 52%, #D2D8B7 85%)',
  //   paddingLeft: '12px',
  //   paddingRight: '12px',
  //   height: '86vh',
  // };

  const styleMain01 = {
    height: '99.9vh',
    background: 'linear-gradient(105deg, #DCE0AB 25%,#97BB92 52%, #D2D8B7 85%)',
    padding: '3px 0px 0px 0px',
  };

  const InputDirect = (func: any, widthBlok: number) => {
    const styleSetNapr = {
      width: widthBlok - 25,
      maxHeight: '2px',
      minHeight: '2px',
      bgcolor: '#BAE186', // салатовый
      border: '1px solid #93D145', // тёмно салатовый
      borderRadius: 1,
      p: 1.25,
      textAlign: 'center',
      boxShadow: 6,
    };

    const styleBoxFormNapr = {
      '& > :not(style)': {
        marginTop: '-10px',
        marginLeft: '-12px',
        width: widthBlok,
      },
    };
    const handleKey = (event: any) => {
      if (event.key === 'Enter') event.preventDefault();
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setCurrency(Number(event.target.value));
      switch (Number(event.target.value)) {
        case 0: // режим управления
          func(61);
          break;
        case 1: // режим Demo
          func(62);
      }
    };

    let dat = ['Режим управления', 'Режим Демо'];
    let massKey = [];
    let massDat: any[] = [];
    const currencies: any = [];
    for (let key in dat) {
      massKey.push(key);
      massDat.push(dat[key]);
    }
    for (let i = 0; i < massKey.length; i++) {
      let maskCurrencies = {
        value: '',
        label: '',
      };
      maskCurrencies.value = massKey[i];
      maskCurrencies.label = massDat[i];
      currencies.push(maskCurrencies);
    }

    const [currency, setCurrency] = React.useState(0);

    console.log('Ширина: ', widthBlok);

    return (
      <Box sx={styleSetNapr}>
        <Box component="form" sx={styleBoxFormNapr}>
          <TextField
            select
            size="small"
            onKeyPress={handleKey} //отключение Enter
            value={currency}
            onChange={handleChange}
            InputProps={{
              disableUnderline: true,
              style: {
                fontSize: currency === 1 ? 14.5 : 14,
                //fontSize: 14,
                fontWeight: 700,
                color: currency === 1 ? 'red' : 'black',
                //marginTop: currency === 1 ? -3 : 0,
              },
            }}
            variant="standard"
            color="secondary">
            {currencies.map((option: any) => (
              <MenuItem
                key={option.value}
                value={option.value}
                sx={{
                  fontSize: 14,
                  color: option.label === 'Режим Демо' ? 'red' : 'black',
                }}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </Box>
    );
  };

  const StrokaMenuGlob = (func: any, wdth: number) => {
    let widthBlok = (widthGl / 12) * wdth + 1;

    const styleApp01 = {
      fontSize: 12.9,
      //marginRight: 0.1,
      //marginLeft: 0.1,
      width: widthBlok,
      //paddingBottom: 0.5,
    };

    return <Box sx={styleApp01}>{InputDirect(func, widthBlok)}</Box>;
  };

  return (
    <Grid container sx={styleMain01}>
      <Grid item xs={12} sx={{ height: '24px' }}>
        <Grid container sx={{ height: '24px', fontSize: 12.9 }}>
          <Grid item xs={1.5} sx={{ border: 1 }}>
            Логотип
          </Grid>

          <Grid item xs={1.25} sx={{ border: 0 }}>
            {/* Личный кабинет */}
            <Box>{StrokaMenuGlob(PressButton, 1.25)}</Box>
          </Grid>
          <Grid item xs={1.45} sx={{ border: 0 }}>
            {/* Мои подразделения */}
            <Box>{StrokaMenuGlob(PressButton, 1.45)}</Box>
          </Grid>
          <Grid item xs={1.75} sx={{ border: 0 }}>
            {/* Справочная информация */}
            <Box>{StrokaMenuGlob(PressButton, 1.75)}</Box>
          </Grid>
          <Grid item xs={2.05} sx={{ border: 0 }}>
            {/* Аналитика по подразделениям */}
            <Box>{StrokaMenuGlob(PressButton, 2.05)}</Box>
          </Grid>
          <Grid item xs={1} sx={{ border: 0 }}>
            {/* Ввод данных */}
            <Box>{StrokaMenuGlob(PressButton, 1)}</Box>
          </Grid>

          <Grid item xs={1.5} sx={{ border: 1 }}></Grid>
          <Grid item xs={1.5} sx={{ border: 1 }}>
            Поиск
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HcmMain;
//{/* <Box>{StrokaMenuGlob(PressButton, datestat.working)}</Box> */}
