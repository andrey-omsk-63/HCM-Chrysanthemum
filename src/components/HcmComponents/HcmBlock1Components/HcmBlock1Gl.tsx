import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { statsaveCreate } from './../../../redux/actions';
import imageCompression from 'browser-image-compression';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import axios from 'axios';
//import 'dayjs/locale/ru';
//import dayjs, { Dayjs } from 'dayjs';

import HcmBl1Form101 from './HcmBl1Form101';
import HcmBl1Form102 from './HcmBl1Form102';
import HcmBl1Form103 from './HcmBl1Form103';
import HcmBl1Form104 from './HcmBl1Form104';
import HcmBl1Form106 from './HcmBl1Form106';
import HcmBl1Form105 from './HcmBl1Form105';
import HcmBl1Form107 from './HcmBl1Form107';
import HcmBl1Form108 from './HcmBl1Form108';
import HcmBlock1ViewImg from './HcmBlock1ViewImg';

import { RandomNumber, MakeNewBlob, MakeDateRus } from '../../HcmServiceFunctions';

import { baseURL2 } from '../../HcmMainConst';

import { styleMain04, styleBl2Gl01, styleBl1Form01 } from '../../HcmMainStyle';
import { styleBl1Form03, styleBl1Form04 } from '../../HcmMainStyle';
import { styleBl1Form05, styleBl1Form15 } from '../../HcmMainStyle';

let Illum = 1;
let oldNik = '######';

let maskForm = {
  name: '',
  nik: '',
  birthDate: '',
  beginDate: '21.12.2021',
  post: 'Гранатомётчик',
  department: 'Пехота',
  chief: 'Бугор',
  location: 'Россия, Омск UTC+6 (MSK+3)',
  status: '💊 больничный',
};

let blob: any = null;
let reader: any = null;
let compressedFile: any = null;
let PICT: any = null;
let openFace = true;

const HcmBlock1Gl = (props: { nik: string }) => {
  //== Piece of Redux =======================================
  let datestat = useSelector((state: any) => {
    const { statsaveReducer } = state;
    return statsaveReducer.datestat;
  });
  //const debug = datestat.debug;
  const dispatch = useDispatch();
  //console.log('!!!getPersonNik:');

  //===========================================================
  const [bl1Form101, setBl1Form101] = React.useState(false);
  const [bl1Form102, setBl1Form201] = React.useState(false);
  const [bl1Form103, setBl1Form301] = React.useState(false);
  const [bl1Form104, setBl1Form401] = React.useState(false);
  const [bl1Form105, setBl1Form501] = React.useState(false);
  const [bl1Form106, setBl1Form601] = React.useState(false);
  const [bl1Form107, setBl1Form701] = React.useState(false);
  const [bl1Form108, setBl1Form801] = React.useState(false);
  const [getPersonNik, setGetPersonNik] = React.useState(null);
  const [openImg, setOpenImg] = React.useState(false);
  //const [trigger, setTrigger] = React.useState(false);
  //let ppp = PICT ? false : true;

  const [openLoader, setOpenLoader] = React.useState(PICT ? false : true);

  const handleImageUpload = async () => {
    let options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 320,
      useWebWorker: true,
    };
    try {
      compressedFile = await imageCompression(blob, options);
      reader.readAsDataURL(compressedFile);
    } catch (error) {
      console.log(error);
    }
  };

  const FillMask = React.useCallback((rec: any) => {
    maskForm.name = rec.name;
    maskForm.nik = rec.nickName;
    maskForm.birthDate = MakeDateRus(rec.birthDate);
    maskForm.beginDate = MakeDateRus(rec.startDate);
    maskForm.post = rec.jobPosition;
    maskForm.department = rec.department.name;
    maskForm.chief = rec.manager;

    let znak1 = rec.location.timeZone <= 0 ? '+' : '-';
    maskForm.location = rec.location.country + ', ' + rec.location.city;
    maskForm.location += ' UTC' + znak1 + Math.abs(rec.location.timeZone);
    let znak2 = rec.location.timeZone - 3 <= 0 ? '+' : '-';
    maskForm.location += ' (MSK' + znak2 + Math.abs(rec.location.timeZone - 3) + ')';

    maskForm.status = rec.state;
  }, []);

  if (!PICT && openFace) {
    openFace = false;
    if (!PICT && datestat.picture) {
      blob = MakeNewBlob(datestat.picture);
      reader = new FileReader();
      compressedFile = null;
      handleImageUpload();
      const handleMake = () => {
        if (reader.result !== null) {
          PICT = reader.result; // если длина спрессованной картинки < 200байт - косячная картинка
          setOpenLoader(false);
          openFace = false;
        } else {
          setTimeout(() => {
            handleMake();
          }, 100);
        }
      };
      handleMake();
    } else setOpenLoader(false);
    openFace = false;
  }

  //=== инициализация ======================================
  let kard = -1;
  console.log('££££££:', props.nik);
  for (let i = 0; i < datestat.person.length; i++) {
    if (datestat.person[i].nickName === props.nik) kard = i;
  }
  React.useEffect(() => {
    if (kard >= 0) {
      let url = baseURL2 + '/' + datestat.person[kard].nickName + '?expand=personAbsence';
      // Карточка сотрудника
      axios
        .get(url)
        .then((response) => {
          console.log('Карточка сотрудника:', response.data);
          //console.log('GetPersonNik.url:', response.config.url);
          FillMask(response.data[0]);
          setGetPersonNik(response.data);
        })
        .catch((error: any) => {
          console.error('Ошибка в GetPersonNik:', error);
        });
    }
  }, [kard, props.nik, datestat, dispatch, FillMask, setGetPersonNik]);

  if (props.nik !== oldNik) {
    oldNik = props.nik;
    switch (Illum) {
      case 1: // Отсутствия
        setBl1Form101(true);
        break;
      case 2: // Оборудование
        setBl1Form201(true);
        break;
      case 3: // В структуре компании
        setBl1Form301(true);
        break;
      case 4: // ИПР
        setBl1Form401(true);
        break;
      case 5: // Оценка компетенций
        setBl1Form501(true);
        break;
      case 6: // Оценка компетенций
        setBl1Form601(true);
        break;
      case 7: // Оценка компетенций
        setBl1Form701(true);
        break;
      case 8: // Оценка компетенций
        setBl1Form801(true);
    }
  }
  //=== Функции - обработчики ==============================
  const ClickKnop1 = () => {
    Illum = 1;
    setBl1Form101(true);
    bl1Form102 && setBl1Form201(false);
    bl1Form103 && setBl1Form301(false);
    bl1Form104 && setBl1Form401(false);
    bl1Form105 && setBl1Form501(false);
    bl1Form106 && setBl1Form601(false);
    bl1Form107 && setBl1Form701(false);
    bl1Form108 && setBl1Form801(false);
  };

  const ClickKnop2 = () => {
    Illum = 2;
    bl1Form101 && setBl1Form101(false);
    setBl1Form201(true);
    bl1Form103 && setBl1Form301(false);
    bl1Form104 && setBl1Form401(false);
    bl1Form105 && setBl1Form501(false);
    bl1Form106 && setBl1Form601(false);
    bl1Form107 && setBl1Form701(false);
    bl1Form108 && setBl1Form801(false);
  };

  const ClickKnop3 = () => {
    Illum = 3;
    bl1Form101 && setBl1Form101(false);
    bl1Form102 && setBl1Form201(false);
    setBl1Form301(true);
    bl1Form104 && setBl1Form401(false);
    bl1Form105 && setBl1Form501(false);
    bl1Form106 && setBl1Form601(false);
    bl1Form107 && setBl1Form701(false);
    bl1Form108 && setBl1Form801(false);
  };

  const ClickKnop4 = () => {
    Illum = 4;
    bl1Form101 && setBl1Form101(false);
    bl1Form102 && setBl1Form201(false);
    bl1Form103 && setBl1Form301(false);
    setBl1Form401(true);
    bl1Form105 && setBl1Form501(false);
    bl1Form106 && setBl1Form601(false);
    bl1Form107 && setBl1Form701(false);
    bl1Form108 && setBl1Form801(false);
  };

  const ClickKnop5 = () => {
    Illum = 5;
    bl1Form101 && setBl1Form101(false);
    bl1Form102 && setBl1Form201(false);
    bl1Form103 && setBl1Form301(false);
    bl1Form104 && setBl1Form401(false);
    setBl1Form501(true);
    bl1Form106 && setBl1Form601(false);
    bl1Form107 && setBl1Form701(false);
    bl1Form108 && setBl1Form801(false);
  };

  const ClickKnop6 = () => {
    Illum = 6;
    bl1Form101 && setBl1Form101(false);
    bl1Form102 && setBl1Form201(false);
    bl1Form103 && setBl1Form301(false);
    bl1Form104 && setBl1Form401(false);
    bl1Form105 && setBl1Form501(false);
    setBl1Form601(true);
    bl1Form107 && setBl1Form701(false);
    bl1Form108 && setBl1Form801(false);
  };

  const ClickKnop7 = () => {
    Illum = 7;
    bl1Form101 && setBl1Form101(false);
    bl1Form102 && setBl1Form201(false);
    bl1Form103 && setBl1Form301(false);
    bl1Form104 && setBl1Form401(false);
    bl1Form105 && setBl1Form501(false);
    bl1Form106 && setBl1Form601(false);
    setBl1Form701(true);
    bl1Form108 && setBl1Form801(false);
  };

  const ClickKnop8 = () => {
    Illum = 8;
    bl1Form101 && setBl1Form101(false);
    bl1Form102 && setBl1Form201(false);
    bl1Form103 && setBl1Form301(false);
    bl1Form104 && setBl1Form401(false);
    bl1Form105 && setBl1Form501(false);
    bl1Form106 && setBl1Form601(false);
    bl1Form107 && setBl1Form701(false);
    setBl1Form801(true);
  };

  const ClickImg = () => {
    setOpenImg(true);
  };

  const ClickNik1 = () => {
    console.log('Действие по нажатию на ник1');
  };

  const ClickNik2 = () => {
    console.log('Действие по нажатию на ник2');
  };
  //=== Компоненты =========================================
  const MenuBatton = (xss: number, wt: number, ill: number, name: string, func: Function) => {
    return (
      <Grid item xs={xss} sx={{ height: '30px' }}>
        <Button sx={styleMain04(wt, Illum, ill)} onClick={() => func()}>
          {name}
        </Button>
      </Grid>
    );
  };

  const StrTablProp = (xss: number, recLeft: string, recRight: any) => {
    return (
      <Grid container sx={{ marginTop: 1, color: '#5B1080' }}>
        <Grid item xs={xss} sx={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
          {recLeft}
        </Grid>
        {typeof recRight === 'object' ? (
          <Grid item xs>
            {recRight}
          </Grid>
        ) : (
          <Grid item xs sx={{ fontSize: 14, marginLeft: '6px', border: 0 }}>
            <b>{recRight}</b>
          </Grid>
        )}
      </Grid>
    );
  };

  //============ Dinama =====================================================
  const handleClose = () => {
    setOpenLoader(false);
  };

  //let bot = 100 - 25000 / window.innerHeight;

  const styleBackdropBaza = {
    color: '#fff',
    marginLeft: '12px',
    //marginRight: "90vh",
    width: '180px',
    marginTop: '63px',
    //marginBottom: "73.5vh",
    marginBottom: (100 - 25000 / window.innerHeight).toString() + 'vh',
    zIndex: (theme: any) => theme.zIndex.drawer + 1,
  };

  const Dinama = () => {
    return (
      <Backdrop sx={styleBackdropBaza} open={openLoader} onClick={handleClose}>
        <CircularProgress color="inherit" size={69} />
      </Backdrop>
    );
  };

  //if (openLoader) Output();
  //=========================================================================

  const ButtonLink = (rec: any, func: Function) => {
    return (
      <Button sx={styleBl1Form15} onClick={() => func()}>
        <b>{rec}</b>
      </Button>
    );
  };

  const Title = () => {
    return (
      <Grid container>
        <Grid item xs={12} sx={styleBl1Form03}>
          <em>
            Личная карточка <b>{maskForm.nik}</b>
          </em>
        </Grid>
      </Grid>
    );
  };

  const Portrait = () => {
    return (
      <Grid container>
        <Grid item xs={12} sx={styleBl1Form04}>
          <Box sx={styleBl1Form05} onClick={() => ClickImg()}>
            {datestat.user.login !== props.nik && (
              <img
                src="https://farm6.static.flickr.com/5100/5488231741_9105ea3953_b.jpg"
                //width={160}
                height={180}
                alt="PICT"
              />
            )}
            {datestat.user.login === props.nik && (
              <>
                {openLoader && <Dinama />}
                {!openLoader && (
                  <>
                    <img src={PICT} height={180} alt="PICT" />
                  </>
                )}
              </>
            )}
          </Box>
        </Grid>
      </Grid>
    );
  };

  const CardContent = () => {
    return (
      <Grid container>
        <Grid item xs={12} sx={styleBl1Form01}>
          <Grid container>
            <Grid item xs={2} sx={{ height: '180px' }}>
              {Title()}
              {Portrait()}
            </Grid>
            <Grid item xs={10} sx={{ fontSize: 14.5 }}>
              <Grid container>
                <Grid item xs={4} sx={{ border: 0, height: '56px', fontSize: 14.5 }}>
                  {StrTablProp(3, 'Имя:', maskForm.name)}
                  {StrTablProp(3, 'Ник:', ButtonLink(maskForm.nik, ClickNik1))}
                </Grid>
                <Grid item xs={8} sx={{ border: 0, height: '56px' }}>
                  {StrTablProp(0.1, '', maskForm.location)}
                  {StrTablProp(0.1, '', maskForm.status)}
                </Grid>
              </Grid>
              <Grid container sx={{}}>
                <Grid item xs={12} sx={{ border: 0, height: '150px', fontSize: 14.5 }}>
                  {StrTablProp(2, 'Дата рождения:', maskForm.birthDate)}
                  {StrTablProp(2, 'В компании с:', maskForm.beginDate)}
                  {StrTablProp(2, 'Должность:', maskForm.post)}
                  {StrTablProp(2, 'Подразделение:', maskForm.department)}
                  {StrTablProp(2, 'Руководитель(Ник):', ButtonLink(maskForm.chief, ClickNik2))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  };

  return (
    <Grid container sx={styleBl2Gl01}>
      <Grid item xs={12}>
        {CardContent()}
        {(datestat.permissions.length > 0 || datestat.user.login === props.nik) && (
          <Grid container sx={{ marginTop: 2, border: 0 }}>
            <Grid item xs={12}>
              <Grid container>
                {MenuBatton(1.5, 1.5, 1, 'Отсутствия', ClickKnop1)}
                {MenuBatton(1.5, 1.5, 2, 'Оборудование', ClickKnop2)}
                {MenuBatton(1.75, 1.75, 3, 'В структуре компании', ClickKnop3)}
                {MenuBatton(1.25, 1.25, 4, 'ИПР', ClickKnop4)}
                {MenuBatton(1.75, 1.75, 5, 'Оценка компетенций', ClickKnop5)}
                {MenuBatton(1.5, 1.5, 6, 'Адаптация', ClickKnop6)}
                {MenuBatton(1.25, 1.25, 7, 'Цели', ClickKnop7)}
                {MenuBatton(1.5, 1.5, 8, 'Задачи', ClickKnop8)}
              </Grid>
            </Grid>
          </Grid>
        )}
        {bl1Form101 &&
          (datestat.permissions.length > 0 || datestat.user.login === props.nik) &&
          getPersonNik && <HcmBl1Form101 card={getPersonNik} />}
        {bl1Form102 && <HcmBl1Form102 />}
        {bl1Form103 && <HcmBl1Form103 />}
        {bl1Form104 && <HcmBl1Form104 />}
        {bl1Form105 && <HcmBl1Form105 />}
        {bl1Form106 && <HcmBl1Form106 />}
        {bl1Form107 && <HcmBl1Form107 />}
        {bl1Form108 && <HcmBl1Form108 idx={RandomNumber(1, 10000)} />}
        {openImg && (
          <HcmBlock1ViewImg close={setOpenImg} name={maskForm.name} nik={props.nik} pict={PICT} />
        )}
      </Grid>
    </Grid>
  );
};

export default HcmBlock1Gl;
