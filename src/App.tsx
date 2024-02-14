import React from 'react';
import {
  //useSelector,
  useDispatch,
} from 'react-redux';
import { statsaveCreate } from './redux/actions';
//import { massfazCreate } from './redux/actions';

import Grid from '@mui/material/Grid';

import axios from 'axios';

import HcmMain from './components/HcmMain';
import HcmErrorMessage from './components/HcmComponents/HcmErrorMessage';
//import AppSocketError from "./AppSocketError";

import { baseURL1, baseURL2 } from './components/HcmMainConst';

//import { SendSocketGetPhases } from "./components/MapSocketFunctions";

export let dateMapGl: any;
export let dateBindingsGl: any;
export let dateAddObjectsGl: any;

export interface Stater {
  ws: any;
  debug: boolean;
  picture: any; // фото в личную карточу в двоичном коде
  treeUnit: any; // дерево подразделений
  idxTreeUnit: number; // индекс в дереве подразделений
  usersRoles: Array<any>; // список сотрудников и их ролей
  person: Array<any>; // список сотрудников с фильтрацией по подразделениям
  personNik: any; // карточка сотрудника
  token: string; // токен
}

export let dateStat: Stater = {
  ws: null,
  debug: false,
  picture: null,
  treeUnit: [],
  idxTreeUnit: 0,
  usersRoles: [],
  person: [],
  personNik: null,
  token: '',
};

export interface Pointer {
  ID: number;
  coordinates: Array<number>;
  nameCoordinates: string;
  region: number;
  area: number;
  phases: Array<number>;
  phSvg: Array<string | null>;
}
export let massDk: Pointer[] = [];

export interface Fazer {
  idx: number;
  area: number;
  id: number;
  faza: number;
  fazaSist: number;
  fazaZU: number; // 0 - отправлено ЖМ, ОС, ЛР или КУ (10,11,0,9)
  phases: Array<number>;
  idevice: number;
}

export let massFaz: Fazer[] = [];

export interface NameMode {
  name: string;
  delRec: boolean;
}
export let massMode: NameMode[] = [];

export let Coordinates: Array<Array<number>> = []; // массив координат

let flagOpenDebug = true;
let soob = '';

const App = () => {
  //=== Piece of Redux =====================================
  // let massfaz = useSelector((state: any) => {
  //   const { massfazReducer } = state;
  //   return massfazReducer.massfaz;
  // });
  //console.log("APPmassfaz", massfaz);
  // let coordinates = useSelector((state: any) => {
  //   const { coordinatesReducer } = state;
  //   return coordinatesReducer.coordinates;
  // });
  const dispatch = useDispatch();
  //========================================================
  //const host =
  //  'wss://' + window.location.host + window.location.pathname + 'W' + window.location.search;
  //console.log('Host:', window.location.host);
  //console.log('Pathname:', window.location.pathname);
  //console.log('Search:', window.location.search);

  let token = window.location.search.slice(7);
  dateStat.token = token;
  console.log('token:', token);

  if (window.location.host === 'localhost:3000') dateStat.debug = true;
  dispatch(statsaveCreate(dateStat));

  //const [getPermission, setGetPermission] = React.useState(null);
  const [getPerson, setGetPerson] = React.useState<any>(null);
  //const [getPersonNik, setGetPersonNik] = React.useState(null);
  //const [postRoles, setPostRoles] = React.useState(null);
  const [getUsersRoles, setGetUsersRoles] = React.useState(null);
  const [getUsersPermission, setGetUsersPermission] = React.useState(null);
  const [openSetErr, setOpenSetErr] = React.useState(false);
  if (dateStat.debug) console.log('РЕЖИМ ОТЛАДКИ!!!', getUsersRoles, getPerson, getUsersPermission);

  //=== инициализация ======================================

  //===  Слушатель с сервера ===============================
  React.useEffect(() => {
    // Получение списка сотрудников и их ролей
    axios
      .get(baseURL1 + '/usersRoles')
      .then((response) => {
        console.log('GetUsersRoles.data:', response.data);
        setGetUsersRoles(response.data);
      })
      .catch((error: any) => {
        console.error('Ошибка в GetPermissions/usersRoles:', error);
      });

    console.log('AAAAAA:', `Bearer ${token}`);

    // Получение доступов пользователя по информации, содержащейся в bearer token
    axios
      .get(baseURL1 + '/permissions', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log('GetUsersPermissions.data:', response.data);
        setGetUsersPermission(response.data);
      })
      .catch((error: any) => {
        console.error('Ошибка в GetPermissions/usersRoles:', error);
      });

    // Получение списка сотрудников с фильтрацией по подразделениям
    axios
      .get(baseURL2, {
        params: {
          departments: [],
          _offset: 2,
          limit: 100,
        },
      })
      .then((response) => {
        console.log('GetPerson.data:', response.data);
        console.log('GetPerson.url:', response.config.url);
        setGetPerson(response.data);
        dateStat.person = response.data;
        dispatch(statsaveCreate(dateStat));
      })
      .catch((error: any) => {
        console.error('Ошибка в GetPerson:', error);
        soob =
          'Ошибка при открытии справочника сотрудников с фильтрацией по подразделениям. Обратитесь к администратору Базы данных';
      });
  }, [setGetPerson, setGetUsersRoles, dispatch, token]);
  //========================================================
  // React.useEffect(() => {
  //   if (getPerson) {
  //     if (getPerson.length) {
  //       //console.log("***:", getPerson[0].nickName)
  //       let url = baseURL2 + '/' + getPerson[0].nickName;
  //       console.log('***:', url);
  //       // Карточка сотрудника
  //       axios
  //         .get(url, {
  //           // params: {
  //           //   departments: [],
  //           //   _offset: 2,
  //           //   limit: 100,
  //           // },
  //         })
  //         .then((response) => {
  //           console.log('GetPersonNik.data:', response.data);
  //           console.log('GetPersonNik.url:', response.config.url);
  //           setGetPersonNik(response.data);
  //         })
  //         .catch((error: any) => {
  //           console.error('Ошибка в GetPersonNik:', error);
  //         });
  //     }
  //   }
  // }, [setGetPersonNik, getPerson]);

  if (flagOpenDebug) {
    // чтение и перевод в двоичный вид файла с картинкой
    axios
      //.get('https://farm6.static.flickr.com/5100/5488231741_9105ea3953_b.jpg', {
      //.get('https://st.peopletalk.ru/wp-content/uploads/2017/04/1492060532.png', {
      .get('https://cdn.ananasposter.ru/image/cache/catalog/poster/music/87/7464-1000x830.jpg', {
        //.get('http://localhost:3000/portrait.jpg', {
        responseType: 'arraybuffer',
      })
      .then(function (response) {
        let image = btoa(
          new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            '',
          ),
        );
        dateStat.picture = image;
        dispatch(statsaveCreate(dateStat));
      });

    flagOpenDebug = false;
  }

  return (
    <Grid container sx={{ height: '100vh', width: '100%', bgcolor: '#E9F5D8' }}>
      <Grid item xs>
        {/* {getPerson && getUsersRoles && <HcmMain />} */}
        {getPerson && <HcmMain />}
      </Grid>
      {openSetErr && <HcmErrorMessage sErr={soob} setOpen={setOpenSetErr} />}
    </Grid>
  );
};

export default App;

// axios({
//   method: "POST",
//   url: baseURL,
//   data: {
//     id: "string",
//     userLogin: "string",
//     userRole: "string",
//   },
// })
//   .then((response) => {
//     console.log("post-response.data:", response.data);
//     setPostt(response.data);
//   })
//   .catch((error: any) => {
//     console.error("Ошибка в Post:", error);
// });

// axios
//   .put(baseURL, {
//     id: 'string',
//   })
//   .then((response) => {
//     setPost(response.data);
//   })
//   .catch((error: any) => {
//     // Если запрос не будет выполнен, то ошибка выводится в терминал
//     console.error('Put:', error);
//   });

// axios
// .get('https://localhost:21812/permissions')
// .then((response) => {
//   console.log("getPermission-response.data:", response.data);
//   setGetPermission(response.data);
// })
// .catch((error: any) => {
//   console.error("2Ошибка в GetPermissions:", error);
// });
// 'Access-Control-Allow-Origin': '*',
// 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
// 'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
