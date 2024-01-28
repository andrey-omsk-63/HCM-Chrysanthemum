import * as React from 'react';
import { useSelector } from 'react-redux';
//import { massfazCreate, statsaveCreate } from '../redux/actions';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import MenuItem from '@mui/material/MenuItem';

//import { YMaps, Map, FullscreenControl } from 'react-yandex-maps';
//import { GeolocationControl, YMapsApi } from 'react-yandex-maps';
//import { RulerControl, SearchControl } from 'react-yandex-maps';
//import { TrafficControl, TypeSelector, ZoomControl } from 'react-yandex-maps';

//import SdcDoPlacemarkDo from './HcmComponents/SdcDoPlacemarkDo';
//import SdcControlVertex from './HcmComponents/SdcControlVertex';
import HcmErrorMessage from './HcmComponents/HcmErrorMessage';

//import { PreparCurrencies01, PreparCurrencies02 } from './HcmServiceFunctions';
import { PreparCurrencies03, PreparCurrencies04 } from './HcmServiceFunctions';
import { PreparCurrencies05, InputDirect } from './HcmServiceFunctions';

//import { SendSocketGetPhases } from './HcmSocketFunctions';

//import { SendSocketDispatch } from './HcmSocketFunctions';

//import { MyYandexKey } from './HcmMainConst';

import { styleMain01, styleMain02, styleMain03, styleMain04 } from './HcmMainStyle';

export let DEMO = false;
export let ILLUM = -1; // номер активной кнопки меню

//let currencies01: any = []; // Личный кабинет
//let currencies02: any = [];
let currencies03: any = [];
let currencies04: any = [];
let currencies05: any = [];

let widthGl = window.innerWidth - 3; // ширина окна браузера

let flagOpen = false;
let soob = '';

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
  DEMO = datestat.demo;
  //const dispatch = useDispatch();
  //===========================================================
  // const [control, setControl] = React.useState(false);
  // const [flagCenter, setFlagCenter] = React.useState(false);
  // const [demoSost, setDemoSost] = React.useState(-1);
  const [openSetErr, setOpenSetErr] = React.useState(false);
  // const [ymaps, setYmaps] = React.useState<YMapsApi | null>(null);
  // const mapp = React.useRef<any>(null);
  //const [currency01, setCurrency01] = React.useState('0');
  //const [currency02, setCurrency02] = React.useState('0');
  const [currency03, setCurrency03] = React.useState('0');
  const [currency04, setCurrency04] = React.useState('0');
  const [currency05, setCurrency05] = React.useState('0');

  //=== инициализация ======================================
  if (!flagOpen) {
    //currencies01 = PreparCurrencies01(); // Личный кабинет
    //currencies02 = PreparCurrencies02(); // Мои подразделения
    currencies03 = PreparCurrencies03(); // Справочная информация
    currencies04 = PreparCurrencies04(); // Аналитика по подразделениям
    currencies05 = PreparCurrencies05(); // Ввод данных
    flagOpen = true;
  }
  //========================================================
  const Turn00 = () => {
    //setCurrency01('0');
    //setCurrency02('0');
    setCurrency03('0');
    setCurrency04('0');
    setCurrency05('0');
  };

  const Turn01 = () => {
    //setCurrency02('0');
    setCurrency03('0');
    setCurrency04('0');
    setCurrency05('0');
  };

  const Turn02 = () => {
    //setCurrency01('0');
    setCurrency03('0');
    setCurrency04('0');
    setCurrency05('0');
  };

  const Turn03 = () => {
    //setCurrency01('0');
    //setCurrency02('0');
    setCurrency04('0');
    setCurrency05('0');
  };

  const Turn04 = () => {
    //setCurrency01('0');
    //setCurrency02('0');
    setCurrency03('0');
    setCurrency05('0');
  };

  const Turn05 = () => {
    //setCurrency01('0');
    //setCurrency02('0');
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

  const ClickSearch = () => {
    soob = 'Здесь будет поиск';
    setOpenSetErr(true);
  };

  const ClickLogo = () => {
    ILLUM = -1;
    Turn00();
    //soob = 'Здесь будет действие по нажатию логотипа';
    //setOpenSetErr(true);
  };

  const ClickKnop1 = () => {
    ILLUM = 1;
    Turn01();
    soob = 'Здесь будет действие по нажатию на кнопку ЛИЧНЫЙ КАБИНЕТ';
    setOpenSetErr(true);
  };

  const ClickKnop2 = () => {
    ILLUM = 2;
    Turn02();
    soob = 'Здесь будет действие по нажатию на кнопку МОИ ПОДРАЗДЕЛЕНИЯ';
    setOpenSetErr(true);
  };
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

  // const InputDirect = (
  //   mode: number,
  //   handleChange: any,
  //   widthBlok: number,
  //   currency: any,
  //   currencies: any,
  //   //handleChange: Function,
  // ) => {
  //   const styleSetNapr = {
  //     width: widthBlok - 25,
  //     maxHeight: '2px',
  //     minHeight: '2px',
  //     bgcolor: mode === ILLUM ? '#BAE186' : '#E6F5D6', // тёмно-салатовый/светло-салатовый
  //     border: '1px solid #93D145', // тёмно салатовый
  //     borderRadius: 1,
  //     p: 1.25,
  //     textAlign: 'center',
  //     boxShadow: mode === ILLUM ? 9 : 3,
  //   };

  //   const styleBoxFormNapr = {
  //     '& > :not(style)': {
  //       border: 0,
  //       marginTop: '-10px',
  //       marginLeft: '-8px',
  //       width: widthBlok - 5,
  //     },
  //   };
  //   const handleKey = (event: any) => {
  //     if (event.key === 'Enter') event.preventDefault();
  //   };

  //   return (
  //     <Box sx={styleSetNapr}>
  //       <Box component="form" sx={styleBoxFormNapr}>
  //         <TextField
  //           select
  //           size="small"
  //           onKeyPress={handleKey} //отключение Enter
  //           value={currency}
  //           onChange={handleChange}
  //           InputProps={{
  //             disableUnderline: true,
  //             style: {
  //               fontSize: currency === '0' ? 12.9 : 12.4,
  //               fontWeight: currency === '0' ? 700 : 400,
  //             },
  //           }}
  //           variant="standard"
  //           color="secondary">
  //           {currencies.map((option: any) => (
  //             <MenuItem
  //               key={option.value}
  //               value={option.value}
  //               sx={{
  //                 fontSize: 12.9,
  //                 color: option.label === currencies[0].label ? 'blue' : 'black',
  //                 cursor: option.label === currencies[0].label ? 'none' : 'pointer',
  //               }}>
  //               {option.label}
  //             </MenuItem>
  //           ))}
  //         </TextField>
  //       </Box>
  //     </Box>
  //   );
  // };

  const StrokaMenuGlob = (
    mode: number,
    wdth: number,
    func: any,
    currency: any,
    currencies: any,
  ) => {
    let widthBlok = (widthGl / 12) * wdth - 0;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      ILLUM = mode;
      let evTV = event.target.value === '0' ? '1' : event.target.value;
      switch (mode) {
        case 1: // Личный кабинет
          //setCurrency01(evTV);
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
          //setCurrency02(evTV);
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
      <Box sx={{ fontSize: 12.9, width: widthBlok }}>
        {InputDirect(mode, handleChange, widthBlok, currency, currencies)}
      </Box>
    );
  };

  return (
    <>
      <Grid container sx={styleMain01}>
        <Grid item xs={12} sx={{ height: '24px' }}>
          <Grid container sx={{ height: '24px', fontSize: 12.9 }}>
            <Grid item xs={1.5} onClick={() => ClickLogo()}>
              <Box sx={{ width: (widthGl / 12) * 1.5 - 2 }}>
                <Box sx={styleMain02}>Л О Г О Т И П</Box>
              </Box>
            </Grid>

            <Grid item xs={1.35} sx={{ border: 0 }}>
              {/* Личный кабинет */}
              {/* <Box>{StrokaMenuGlob(1, 1.35, PressButton, currency01, currencies01)}</Box> */}
              <Button sx={styleMain04(1.35, ILLUM, 1)} onClick={() => ClickKnop1()}>
                Личный кабинет
              </Button>
            </Grid>
            <Grid item xs={1.6} sx={{ border: 0 }}>
              {/* Мои подразделения */}
              {/* <Box>{StrokaMenuGlob(2, 1.6, PressButton, currency02, currencies02)}</Box> */}
              <Button sx={styleMain04(1.6, ILLUM, 2)} onClick={() => ClickKnop2()}>
                Мои подразделения
              </Button>
            </Grid>
            <Grid item xs={1.9} sx={{ border: 0 }}>
              {/* Справочная информация */}
              <Box>{StrokaMenuGlob(3, 1.9, PressButton, currency03, currencies03)}</Box>
            </Grid>
            <Grid item xs={2.2} sx={{ border: 0 }}>
              {/* Аналитика по подразделениям */}
              <Box>{StrokaMenuGlob(4, 2.2, PressButton, currency04, currencies04)}</Box>
            </Grid>
            <Grid item xs={1.15} sx={{ border: 0 }}>
              {/* Ввод данных */}
              <Box>{StrokaMenuGlob(5, 1.15, PressButton, currency05, currencies05)}</Box>
            </Grid>

            <Grid item xs={0.7} sx={{ fontSize: 16, textAlign: 'center' }}>
              🔔🐷
            </Grid>
            <Grid item xs={1.6} sx={styleMain03} onClick={() => ClickSearch()}>
              <Box sx={{ cursor: 'pointer' }}>🔍 Поиск</Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {openSetErr && <HcmErrorMessage sErr={soob} setOpen={setOpenSetErr} />}
    </>
  );
};

export default HcmMain;
