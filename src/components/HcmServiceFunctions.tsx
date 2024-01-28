import * as React from 'react';

import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import { ILLUM } from './HcmMain';

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

export const PreparCurrencies04 = () => {
  const currencies: any = [];
  let dat = [
    'Аналитика по подразделениям:',
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

export const PreparCurrencies05 = () => {
  const currencies: any = [];
  let dat = [
    'Ввод данных:',
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

export const InputDirect = (
  mode: number,
  handleChange: any,
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
      width: widthBlok - 5,
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
