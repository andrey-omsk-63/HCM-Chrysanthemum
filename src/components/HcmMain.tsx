import * as React from 'react';
import { useSelector } from 'react-redux';
//import { massfazCreate, statsaveCreate } from '../redux/actions';

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

import { PreparCurrencies01, PreparCurrencies02 } from './HcmServiceFunctions';
import { PreparCurrencies03, PreparCurrencies04 } from './HcmServiceFunctions';
import { PreparCurrencies05 } from './HcmServiceFunctions';

//import { SendSocketGetPhases } from './HcmSocketFunctions';

//import { SendSocketDispatch } from './HcmSocketFunctions';

//import { MyYandexKey } from './HcmMainConst';

import { styleMain01 } from './HcmMainStyle';

export let DEMO = false;

let currencies01: any = []; // Личный кабинет
let currencies02: any = [];
let currencies03: any = [];
let currencies04: any = [];
let currencies05: any = [];

let flagOpen = false;
let widthGl = window.innerWidth - 3;
let ILLUM = -1;

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
  // let massfaz = useSelector((state: any) => {
  //   const { massfazReducer } = state;
  //   return massfazReducer.massfaz;
  // });
  let datestat = useSelector((state: any) => {
    const { statsaveReducer } = state;
    return statsaveReducer.datestat;
  });
  //const debug = datestat.debug;
  //const ws = datestat.ws;
  //const homeRegion = datestat.region;
  DEMO = datestat.demo;
  //const dispatch = useDispatch();
  //===========================================================
  // const [control, setControl] = React.useState(false);
  // const [flagCenter, setFlagCenter] = React.useState(false);
  // const [demoSost, setDemoSost] = React.useState(-1);
  // const [openSetErr, setOpenSetErr] = React.useState(false);
  // const [ymaps, setYmaps] = React.useState<YMapsApi | null>(null);
  // const mapp = React.useRef<any>(null);
  const [currency01, setCurrency01] = React.useState('0');
  const [currency02, setCurrency02] = React.useState('0');
  const [currency03, setCurrency03] = React.useState('0');
  const [currency04, setCurrency04] = React.useState('0');
  const [currency05, setCurrency05] = React.useState('0');

  const Turn01 = () => {
    setCurrency02('0');
    setCurrency03('0');
    setCurrency04('0');
    setCurrency05('0');
  };

  const Turn02 = () => {
    setCurrency01('0');
    setCurrency03('0');
    setCurrency04('0');
    setCurrency05('0');
  };

  const Turn03 = () => {
    setCurrency01('0');
    setCurrency02('0');
    setCurrency04('0');
    setCurrency05('0');
  };

  const Turn04 = () => {
    setCurrency01('0');
    setCurrency02('0');
    setCurrency03('0');
    setCurrency05('0');
  };

  const Turn05 = () => {
    setCurrency01('0');
    setCurrency02('0');
    setCurrency03('0');
    setCurrency04('0');
  };

  //=== Функции - обработчики ==============================
  const PressButton = (mode: number) => {
    mode < 200 && Turn01();
    mode < 300 && mode > 200 && Turn02();
    mode < 400 && mode > 300 && Turn03();
    mode < 500 && mode > 400 && Turn04();
    mode > 500 && Turn05();
    switch (mode) {
      case 101: // Личный кабинет
        break;
      case 102: // Личный кабинет
        break;
      case 103: // Справочная информация
        break;
      case 201: // Мои подразделения
        break;
      case 202: // Мои подразделения
        break;
      case 203: // Мои подразделения
        break;
      case 301: // Мои подразделения
        break;
      case 302: // Мои подразделения
        break;
      case 303: // Мои подразделения
        break;
      case 401: // Аналитика по подразделениям
        break;
      case 402: // Аналитика по подразделениям
        break;
      case 403: // Аналитика по подразделениям
        break;
      case 501: // Ввод данных
        break;
      case 502: // Ввод данных
        break;
      case 503: // Ввод данных
    }
  };

  //=== инициализация ======================================
  if (!flagOpen) {
    currencies01 = PreparCurrencies01(); // Личный кабинет
    currencies02 = PreparCurrencies02(); // Мои подразделения
    currencies03 = PreparCurrencies03(); // Справочная информация
    currencies04 = PreparCurrencies04(); // Аналитика по подразделениям
    currencies05 = PreparCurrencies05(); // Ввод данных
    flagOpen = true;
  }
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
    ////StatusQuo(false);
    //  event.preventDefault();
    //  event.returnValue = "";
  };

  function removePlayerFromGame() {
    throw new Error('Function not implemented.');
  }
  //========================================================

  const InputDirect = (
    mode: number,
    func: any,
    widthBlok: number,
    currency: any,
    currencies: any,
  ) => {
    const styleSetNapr = {
      width: widthBlok - 25,
      maxHeight: '2px',
      minHeight: '2px',
      bgcolor: mode === ILLUM ? '#BAE186' : '#E6F5D6', // тёмно-салатовый/светло-салатовый
      border: '1px solid #93D145', // тёмно салатовый
      borderRadius: 1,
      p: 1.25,
      textAlign: 'center',
      boxShadow: mode === ILLUM ? 9 : 3,
    };

    const styleBoxFormNapr = {
      '& > :not(style)': {
        border: 0,
        marginTop: '-10px',
        marginLeft: '-8px',
        width: widthBlok,
      },
    };
    const handleKey = (event: any) => {
      if (event.key === 'Enter') event.preventDefault();
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      ILLUM = mode;
      let evTV = event.target.value === '0' ? '1' : event.target.value;
      switch (mode) {
        case 1: // Личный кабинет
          setCurrency01(evTV);
          switch (Number(evTV)) {
            case 0: // Работа с перекрёстками
              func(101);
              break;
            case 1: // Создание связей
              func(102);
              break;
            case 3: // Настройки
              func(103);
          }
          break;
        case 2: // Мои подразделения
          setCurrency02(evTV);
          switch (Number(evTV)) {
            case 0: // Работа с перекрёстками
              func(201);
              break;
            case 1: // Создание связей
              func(202);
              break;
            case 3: // Настройки
              func(203);
          }
          break;
        case 3: // Справочная информация
          setCurrency03(evTV);
          switch (Number(evTV)) {
            case 0: // Работа с перекрёстками
              func(301);
              break;
            case 1: // Создание связей
              func(302);
              break;
            case 3: // Настройки
              func(303);
          }
          break;
        case 4: // Аналитика по подразделениям
          setCurrency04(evTV);
          switch (Number(evTV)) {
            case 0: // Работа с перекрёстками
              func(401);
              break;
            case 1: // Создание связей
              func(402);
              break;
            case 3: // Настройки
              func(403);
          }
          break;
        case 5: // Ввод данных
          setCurrency05(evTV);
          switch (Number(evTV)) {
            case 0: // Работа с перекрёстками
              func(501);
              break;
            case 1: // Создание связей
              func(502);
              break;
            case 3: // Настройки
              func(503);
          }
      }
    };

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
                fontSize: currency === '0' ? 12.9 : 12.4,
                fontWeight: currency === '0' ? 700 : 400,
              },
            }}
            variant="standard"
            color="secondary">
            {currencies.map((option: any) => (
              <MenuItem
                key={option.value}
                value={option.value}
                sx={{
                  fontSize: 12.9,
                  color: option.label === currencies[0].label ? 'blue' : 'black',
                  cursor: option.label === currencies[0].label ? 'none' : 'pointer',
                }}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </Box>
    );
  };

  const StrokaMenuGlob = (
    mode: number,
    wdth: number,
    func: any,
    currency: any,
    currencies: any,
  ) => {
    let widthBlok = (widthGl / 12) * wdth + 1;

    return (
      <Box sx={{ fontSize: 12.9, width: widthBlok }}>
        {InputDirect(mode, func, widthBlok, currency, currencies)}
      </Box>
    );
  };

  return (
    <Grid container sx={styleMain01}>
      <Grid item xs={12} sx={{ height: '24px' }}>
        <Grid container sx={{ height: '24px', fontSize: 12.9 }}>
          <Grid item xs={1.5} sx={{ bgcolor: '#BDE6FB', textAlign: 'center' }}>
            Логотип
          </Grid>

          <Grid item xs={1.25} sx={{ border: 0 }}>
            {/* Личный кабинет */}
            <Box>{StrokaMenuGlob(1, 1.25, PressButton, currency01, currencies01)}</Box>
          </Grid>
          <Grid item xs={1.45} sx={{ border: 0 }}>
            {/* Мои подразделения */}
            <Box>{StrokaMenuGlob(2, 1.45, PressButton, currency02, currencies02)}</Box>
          </Grid>
          <Grid item xs={1.75} sx={{ border: 0 }}>
            {/* Справочная информация */}
            <Box>{StrokaMenuGlob(3, 1.75, PressButton, currency03, currencies03)}</Box>
          </Grid>
          <Grid item xs={2.05} sx={{ border: 0 }}>
            {/* Аналитика по подразделениям */}
            <Box>{StrokaMenuGlob(4, 2.05, PressButton, currency04, currencies04)}</Box>
          </Grid>
          <Grid item xs={1} sx={{ border: 0 }}>
            {/* Ввод данных */}
            <Box>{StrokaMenuGlob(5, 1, PressButton, currency05, currencies05)}</Box>
          </Grid>

          <Grid item xs={1.5} sx={{ border: 0 }}></Grid>
          <Grid item xs={1.5} sx={{ bgcolor: '#FFFEF7', padding: '0px 0px 0px 8px' }}>
            🔍 Поиск
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HcmMain;
