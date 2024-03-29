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

export interface User {
  login: string;
  id: number;
}

export interface Stater {
  ws: any;
  debug: boolean;
  picture: any; // фото в личную карточу в двоичном коде
  picture2: any; // фото в личную карточу в двоичном коде ещё одна
  treeUnit: any; // дерево подразделений
  idxTreeUnit: number; // индекс в дереве подразделений
  usersRoles: Array<any>; // список сотрудников и их ролей
  person: Array<any>; // список сотрудников с фильтрацией по подразделениям
  personNik: any; // карточка сотрудника
  token: string; // токен
  permissions: Array<any>; // доступы пользователя по информации, содержащейся в bearer token
  user: null | User; // id и login вошедшего пользователя
}

export let dateStat: Stater = {
  ws: null,
  debug: false,
  picture: null,
  picture2: null,
  treeUnit: [],
  idxTreeUnit: 0,
  usersRoles: [],
  person: [],
  personNik: null,
  token: '',
  user: null,
  permissions: [],
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

let token = '';
//let flagOpen = true;
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
  //========================================================
  //const [getPermission, setGetPermission] = React.useState(null);
  const [getPerson, setGetPerson] = React.useState<any>(null);
  const [getPersonNik, setGetPersonNik] = React.useState(null);
  //const [getPersonNik, setGetPersonNik] = React.useState(null);
  //const [postRoles, setPostRoles] = React.useState(null);
  const [getUsersRoles, setGetUsersRoles] = React.useState<any>(null);
  const [getUsersPermission, setGetUsersPermission] = React.useState<any>(null);
  const [openSetErr, setOpenSetErr] = React.useState(false);

  //=== инициализация ======================================
  //if (flagOpen) {
  token = window.location.search.slice(7);
  if (!token && !openSetErr) {
    soob = 'Вы пытаетесь зайти в систему без авторизации!';
    setOpenSetErr(true);
  }
  dateStat.token = token;
  console.log('token:', token);

  if (window.location.host === 'localhost:3000') dateStat.debug = true;
  token && (dateStat.user = JSON.parse(atob(token.split('.')[1])));
  if (dateStat.debug) console.log('РЕЖИМ ОТЛАДКИ!!!', dateStat.user);
  dispatch(statsaveCreate(dateStat));

  //===  Слушатель с сервера ===============================
  React.useEffect(() => {
    // Получение списка сотрудников и их ролей
    axios
      .get(baseURL1 + '/usersRoles')
      .then((response) => {
        console.log('Списка сотрудников и их ролей:', response.data);
        setGetUsersRoles(response.data);
      })
      .catch((error: any) => {
        console.error('Список сотрудников и их ролей:', error);
      });

    // Получение доступов пользователя по информации, содержащейся в bearer token
    if (token) {
      axios
        .get(baseURL1 + '/permissions', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          console.log('Доступы пользователя:', response.data.permissions);
          dateStat.permissions = response.data.permissions;
          dispatch(statsaveCreate(dateStat));
          setGetUsersPermission(response.data);
        })
        .catch((error: any) => {
          console.error('Доступы пользователя:', error);
        });
    }

    // Получение списка сотрудников с фильтрацией по подразделениям
    axios
      .get(baseURL2, {
        params: {
          departments: [],
          _offset: 1,
          limit: 100,
        },
      })
      .then((response) => {
        console.log('Список сотрудников по подразделениям:', response.data);
        //console.log('GetPerson.url:', response.config.url);
        setGetPerson(response.data.data);
        dateStat.person = response.data.data;
        dispatch(statsaveCreate(dateStat));
      })
      .catch((error: any) => {
        console.error('Ошибка в GetPerson:', error);
        soob =
          'Ошибка при открытии справочника сотрудников с фильтрацией по подразделениям. Обратитесь к администратору Базы данных';
        //setOpenSetErr(true);
      });
  }, [setGetPerson, setGetUsersRoles, setGetUsersPermission, dispatch]);

  React.useEffect(() => {
    if (dateStat.user) {
      let url = baseURL2 + '/' + dateStat.user.login + '?expand=personAbsence';
      // Получение карточки пользователя
      axios
        .get(url)
        .then((response) => {
          console.log('Карточка пользователя:', response.data);
          dateStat.personNik = response.data;
          dispatch(statsaveCreate(dateStat));
          setGetPersonNik(response.data);
        })
        .catch((error: any) => {
          console.error('Карточка пользователя:', error);
        });
    }
  }, [dispatch, setGetPersonNik]);

  //========================================================
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
        //console.log('%%%%%%:', response.data);
        let image = btoa(
          new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            '',
          ),
        );
        //console.log('image', image);
        dateStat.picture = image;
      });
    dispatch(statsaveCreate(dateStat));
    flagOpenDebug = false;
  }

  return (
    <Grid
      container
      sx={{
        height: '100vh',
        width: '100%',
        //background: 'linear-gradient(135deg, #DCE0AB 25%,#97BB92 52%, #D2D8B7 85%)',
        background: 'linear-gradient(140deg, #e3d8f7 26%,#dcbaf1 57%, #f8d7f7 85%)',
      }}>
      <Grid item xs>
        {getPerson && getPersonNik && getUsersRoles && getUsersPermission && (
          <HcmMain pers={getPerson} />
        )}
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
