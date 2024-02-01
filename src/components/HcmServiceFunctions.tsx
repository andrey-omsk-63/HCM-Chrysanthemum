import * as React from 'react';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

import { ILLUM } from './HcmMain';

export const RandomNumber = (min: number, max: number) => {
  let rand = Math.random() * (max - min) + min;
  return Math.floor(rand);
};

export const PreparCurrencies01 = () => {
  const currencies: any = [];
  let dat = [
    'Личный кабинет:',
    'Первый пункт меню',
    'Второй пункт меню',
    'Третий пункт меню',
    'Настройки',
  ];
  let massKey: any = [];
  let massDat: any = [];
  for (let key in dat) {
    massKey.push(key);
    massDat.push(dat[key]);
  }
  let maskCurrencies = {
    value: '0',
    label: 'Все режимы',
  };
  for (let i = 0; i < massKey.length; i++) {
    maskCurrencies.value = massKey[i];
    maskCurrencies.label = massDat[i];
    currencies.push({ ...maskCurrencies });
  }
  return currencies;
};

export const PreparCurrencies02 = () => {
  const currencies: any = [];
  let dat = [
    'Мои подразделения:',
    'Первый пункт меню',
    'Второй пункт меню',
    'Третий пункт меню',
    'Настройки',
  ];
  let massKey: any = [];
  let massDat: any = [];
  for (let key in dat) {
    massKey.push(key);
    massDat.push(dat[key]);
  }
  let maskCurrencies = {
    value: '0',
    label: 'Все режимы',
  };
  for (let i = 0; i < massKey.length; i++) {
    maskCurrencies.value = massKey[i];
    maskCurrencies.label = massDat[i];
    currencies.push({ ...maskCurrencies });
  }
  return currencies;
};

export const PreparCurrencies03 = () => {
  const currencies: any = [];
  let dat = [
    'Справочная информация:',
    'Регламенты',
    'Структура компании',
    'Структура компании copy',
    'Профили компетенций',
  ];
  let massKey: any = [];
  let massDat: any = [];
  for (let key in dat) {
    massKey.push(key);
    massDat.push(dat[key]);
  }
  let maskCurrencies = {
    value: '0',
    label: 'Все режимы',
  };
  for (let i = 0; i < massKey.length; i++) {
    maskCurrencies.value = massKey[i];
    maskCurrencies.label = massDat[i];
    currencies.push({ ...maskCurrencies });
  }
  return currencies;
};

export const PreparCurrencies05 = () => {
  const currencies: any = [];
  let dat = [
    'Ввод данных:',
    'Адаптация',
    'Добавить ИПР',
    'Создать задачу',
    //'Добавить Risk&Value',
    'Добавить Healt Check',
  ];
  let massKey: any = [];
  let massDat: any = [];
  for (let key in dat) {
    massKey.push(key);
    massDat.push(dat[key]);
  }
  let maskCurrencies = {
    value: '0',
    label: 'Все режимы',
  };
  for (let i = 0; i < massKey.length; i++) {
    maskCurrencies.value = massKey[i];
    maskCurrencies.label = massDat[i];
    currencies.push({ ...maskCurrencies });
  }
  return currencies;
};

export const PreparCurrencies041 = () => {
  const currencies: any = [];
  let dat = [
    'Первое подразделение',
    'Второе подразделение',
    'Третье подразделение',
    'Четвёртое подразделение',
  ];
  let massKey: any = [];
  let massDat: any = [];
  for (let key in dat) {
    massKey.push(key);
    massDat.push(dat[key]);
  }
  let maskCurrencies = {
    value: '0',
    label: 'Все режимы',
  };
  for (let i = 0; i < massKey.length; i++) {
    maskCurrencies.value = massKey[i];
    maskCurrencies.label = massDat[i];
    currencies.push({ ...maskCurrencies });
  }
  return currencies;
};

export const PreparCurrencies042 = () => {
  const currencies: any = [];
  let dat = ['Первый период', 'Второй период', 'Третий период', 'Четвёртый период'];
  let massKey: any = [];
  let massDat: any = [];
  for (let key in dat) {
    massKey.push(key);
    massDat.push(dat[key]);
  }
  let maskCurrencies = {
    value: '0',
    label: 'Все режимы',
  };
  for (let i = 0; i < massKey.length; i++) {
    maskCurrencies.value = massKey[i];
    maskCurrencies.label = massDat[i];
    currencies.push({ ...maskCurrencies });
  }
  return currencies;
};

export const PreparCurrencies043 = () => {
  const currencies: any = [];
  let dat = ['Аналитика №1', 'Аналитика №2', 'Аналитика №3', 'Аналитика №4'];
  let massKey: any = [];
  let massDat: any = [];
  for (let key in dat) {
    massKey.push(key);
    massDat.push(dat[key]);
  }
  let maskCurrencies = {
    value: '0',
    label: 'Все режимы',
  };
  for (let i = 0; i < massKey.length; i++) {
    maskCurrencies.value = massKey[i];
    maskCurrencies.label = massDat[i];
    currencies.push({ ...maskCurrencies });
  }
  return currencies;
};

export const InputDirect = (
  mode: number,
  handleChange: any,
  widthBlok: number,
  currency: any,
  currencies: any,
) => {
  const styleSetNapr = {
    width: widthBlok - 27,
    maxHeight: '2px',
    minHeight: '2px',
    fontSize: mode === ILLUM ? 14 : 12.5,
    bgcolor: mode === ILLUM ? '#82e94a' : '#E6F5D6', // ярко-салатовый/светло-салатовый
    //border: '1px solid #93D145', // тёмно салатовый
    //bgcolor: ILLUM === mode ? "#82e94a" : "#F4E8FB", // ярко-салатовый/светло-сиреневый
    border: '1px solid #d4d4d4', // серый
    borderRadius: 1,
    padding: '15px 10px 11px 12px',
    textAlign: 'center',
    boxShadow: mode === ILLUM ? 9 : 3,
  };

  const styleBoxFormNapr = {
    '& > :not(style)': {
      border: 0,
      marginTop: '-11px',
      marginLeft: '-8px',
      width: widthBlok - 7,
    },
  };
  const handleKey = (event: any) => {
    if (event.key === 'Enter') event.preventDefault();
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
              fontSize: currency === '0' && mode === ILLUM ? 13.5 : 12.5,
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
                fontSize: option.label === currencies[0].label ? 13.5 : 12.9,
                fontWeight: option.label === currencies[0].label ? 700 : 400,
                color: option.label === currencies[0].label ? '#7c31ab' : 'black',
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

export const InputDirectA = (
  mode: number,
  handleChange: any,
  widthBlok: number,
  currency: any,
  currencies: any,
) => {
  const styleSetNapr = {
    width: widthBlok - 27,
    maxHeight: '2px',
    minHeight: '2px',
    fontSize: mode === ILLUM ? 14 : 12.5,
    //bgcolor: '#F4E8FB', // светло-сиреневый
    bgcolor: '#E6F5D6', // светло-салатовый
    border: '1px solid #d4d4d4', // серый
    borderRadius: 1,
    padding: '15px 10px 11px 12px',
    textAlign: 'center',
    boxShadow: 3,
  };

  const styleBoxFormNapr = {
    '& > :not(style)': {
      border: 0,
      marginTop: '-11px',
      marginLeft: '-8px',
      width: widthBlok - 7,
    },
  };
  const handleKey = (event: any) => {
    if (event.key === 'Enter') event.preventDefault();
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
              fontSize: 12.5,
              fontWeight: 700,
            },
          }}
          variant="standard"
          color="secondary">
          {currencies.map((option: any) => (
            <MenuItem
              key={option.value}
              value={option.value}
              sx={{
                fontSize: 13.5,
                //fontWeight: option.label === currencies[0].label ? 700 : 400,
                // color:
                //   option.label === currencies[0].label ? "#7c31ab" : "black",
                // cursor:
                //   option.label === currencies[0].label ? "none" : "pointer",
              }}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>
    </Box>
  );
};

export const BadExit = (badExit: boolean, handleCloseEnd: Function) => {
  const styleSetPoint = {
    outline: 'none',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#fcebfb', // бледно-розовый
    border: '1px solid #fcebfb', // бледно-розовый
    //borderColor: "red",
    borderRadius: 1,
    boxShadow: 24,
    textAlign: 'center',
    p: 1,
  };

  const styleModalMenu = {
    marginTop: 0.5,
    maxHeight: '30px',
    minHeight: '30px',
    border: '1px solid #d4d4d4', // серый
    borderRadius: 1,
    bgcolor: '#E6F5D6', // светло салатовый
    //bgcolor: '#EBD6F8', // светло-сиреневый
    //color: "black",
    color: '#5B1080', // сиреневый
    //color: "#7620a2", // сиреневый
    textTransform: 'unset !important',
    textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
    boxShadow: 6,
  };

  const styleModalEndAttent = {
    position: 'absolute',
    top: '0%',
    left: 'auto',
    right: '-0%',
    maxHeight: '21px',
    minHeight: '21px',
    maxWidth: '2%',
    minWidth: '2%',
    //color: "red",
    //color: "#801F95", // сиреневый
    color: '#7620a2', // сиреневый
    textShadow: '2px 2px 3px rgba(0,0,0,0.3)',
  };

  const handleClose = (mode: boolean) => {
    handleCloseEnd(mode);
  };

  const CloseEnd = (event: any, reason: string) => {
    if (reason === 'escapeKeyDown') handleClose(false);
  };

  return (
    <Modal open={badExit} onClose={CloseEnd} hideBackdrop>
      <Box sx={styleSetPoint}>
        <Button sx={styleModalEndAttent} onClick={() => handleClose(false)}>
          <b>&#10006;</b>
        </Button>
        <Typography variant="h6" sx={{ color: 'red', textShadow: '1px 1px 2px rgba(0,0,0,0.25)' }}>
          Предупреждение
        </Typography>
        <Box sx={{ marginTop: 0.5, color: '#5B1080' }}>
          <Box sx={{ marginBottom: 1.2 }}>
            <b>Будет произведён выход без сохранения введённых данных. Продолжать?</b>
          </Box>
          <Button sx={styleModalMenu} onClick={() => handleClose(false)}>
            Нет
          </Button>
          &nbsp;
          <Button sx={styleModalMenu} onClick={() => handleClose(true)}>
            Да
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export const FooterContent = (SaveForm: Function) => {
  const styleSetPK04 = {
    marginTop: 1.2,
    display: 'flex',
    justifyContent: 'center',
  };

  const styleFormPK03 = {
    maxHeight: '30px',
    minHeight: '30px',
    bgcolor: '#E6F5D6', // светло салатовый
    //bgcolor: '#F4E8FB', // светло-сиреневый
    border: '1px solid #000',
    borderRadius: 1,
    borderColor: '#d4d4d4', // серый
    textTransform: 'unset !important',
    //padding: "6px 6px 6px 6px",
    boxShadow: 6,
    textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
    //color: "black",
    color: '#5B1080', // сиреневый
    //color: "#7620a2", // сиреневый
  };

  return (
    <Box sx={styleSetPK04}>
      <Box sx={{ display: 'inline-block', margin: '0px 5px 0px 0px' }}>
        <Button sx={styleFormPK03} onClick={() => SaveForm(0)}>
          Выйти без сохранения
        </Button>
      </Box>
      <Box sx={{ display: 'inline-block', margin: '0px 6px 0px 6px' }}>
        <Button sx={styleFormPK03} onClick={() => SaveForm(1)}>
          Сохранить изменения
        </Button>
      </Box>
    </Box>
  );
};

export const StrTablProp = (xss: number, recLeft: string, recRight: any) => {
  return (
    <>
      <Grid container sx={{ marginTop: 2 }}>
        <Grid item xs={xss} sx={{ border: 0 }}>
          {recLeft}
        </Grid>
        {typeof recRight === 'object' ? (
          <Grid item xs>
            {recRight}
          </Grid>
        ) : (
          <Grid item xs sx={{ fontSize: 15, color: '#5B1080', border: 0 }}>
            <b>{recRight}</b>
          </Grid>
        )}
      </Grid>
    </>
  );
};
//===========================================================

export const CenterCoord = (aY: number, aX: number, bY: number, bX: number) => {
  let coord0 = (aY - bY) / 2 + bY;
  if (aY < bY) coord0 = (bY - aY) / 2 + aY;
  let coord1 = (aX - bX) / 2 + bX;
  if (aX < bX) coord1 = (bX - aX) / 2 + aX;
  return [coord0, coord1];
};

export const CloseInterval = (datestat: any, nominmass: number) => {
  console.log('CloseInt:', nominmass, datestat.massInt[nominmass]);
  if (datestat.massInt[nominmass]) {
    clearInterval(datestat.massInt[nominmass]);
    datestat.massInt[nominmass] = null;
  }
  datestat.timerId[nominmass] = null;
};

//=== Placemark =====================================
export const GetPointData = (index: number, map: any) => {
  let cont1 = '';
  let cont2 = '';
  let cont3 = '';
  cont1 = map.tflight[index].description + '<br/>';
  cont3 = map.tflight[index].tlsost.description + '<br/>';
  cont2 = '[';
  // + map.tflight[index].area.num + ", ";
  cont2 += map.tflight[index].ID + ', ' + map.tflight[index].idevice + ']';

  return { hintContent: cont1 + cont3 + cont2 };
};

export const GetPointOptions1 = (Hoster: any) => {
  return {
    // данный тип макета
    iconLayout: 'default#image',
    // изображение иконки метки
    iconImageHref: Hoster(),
    // размеры метки
    iconImageSize: [30, 38],
    // её "ножки" (точки привязки)
    iconImageOffset: [-15, -38],
  };
};

//=== Разное =======================================
// export const InputDirect = (func: any, otherWork: boolean) => {
//   const styleSetNapr = {
//     width: "140px",
//     maxHeight: "2px",
//     minHeight: "2px",
//     bgcolor: "#BAE186", // салатовый
//     border: "1px solid #93D145", // тёмно салатовый
//     borderRadius: 1,
//     p: 1.25,
//     textAlign: "center",
//     boxShadow: 6,
//   };

//   const styleBoxFormNapr = {
//     "& > :not(style)": {
//       marginTop: "-10px",
//       marginLeft: "-12px",
//       width: "165px",
//     },
//   };
//   const handleKey = (event: any) => {
//     if (event.key === "Enter") event.preventDefault();
//   };

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (!otherWork) {
//       setCurrency(Number(event.target.value));
//       switch (Number(event.target.value)) {
//         case 0: // режим управления
//           func(61);
//           break;
//         case 1: // режим Demo
//           func(62);
//       }
//     } else {
//       //func(63); // Косяк при работе с меню
//     }
//   };

//   let dat = ["Режим управления", "Режим Демо"];
//   let massKey = [];
//   let massDat: any[] = [];
//   const currencies: any = [];
//   for (let key in dat) {
//     massKey.push(key);
//     massDat.push(dat[key]);
//   }
//   for (let i = 0; i < massKey.length; i++) {
//     let maskCurrencies = {
//       value: "",
//       label: "",
//     };
//     maskCurrencies.value = massKey[i];
//     maskCurrencies.label = massDat[i];
//     currencies.push(maskCurrencies);
//   }

//   const [currency, setCurrency] = React.useState(0);

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
//               fontSize: currency === 1 ? 14.5 : 14,
//               //fontSize: 14,
//               fontWeight: 700,
//               color: currency === 1 ? "red" : "black",
//               //marginTop: currency === 1 ? -3 : 0,
//             },
//           }}
//           variant="standard"
//           color="secondary"
//         >
//           {currencies.map((option: any) => (
//             <MenuItem
//               key={option.value}
//               value={option.value}
//               sx={{
//                 fontSize: 14,
//                 color: option.label === "Режим Демо" ? "red" : "black",
//               }}
//             >
//               {option.label}
//             </MenuItem>
//           ))}
//         </TextField>
//       </Box>
//     </Box>
//   );
// };

// export const StrokaMenuGlob = (func: any, otherWork: boolean) => {
//   const styleApp01 = {
//     fontSize: 14,
//     marginRight: 0.1,
//     marginLeft: 0.5,
//     width: 165,
//     paddingBottom: 0.5,
//   };

//   return <Box sx={styleApp01}>{InputDirect(func, otherWork)}</Box>;
// };
