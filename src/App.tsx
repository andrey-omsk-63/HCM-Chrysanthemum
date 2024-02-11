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
import AppSocketError from './AppSocketError';

import { baseURL } from './components/HcmMainConst';

//import { MasskPoint } from "./components/MapServiceFunctions";

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
}

export let dateStat: Stater = {
  ws: null,
  debug: false,
  picture: null,
  treeUnit: [],
  idxTreeUnit: 0,
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
//let flagOpenWS = true;
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
  console.log('Host:', window.location.host);
  console.log('Pathname:', window.location.pathname);
  console.log('Search:', window.location.search);
  if (window.location.host === 'localhost:3000') dateStat.debug = true;
  dispatch(statsaveCreate(dateStat));

  const [post, setPost] = React.useState(null);
  const [openSetErr, setOpenSetErr] = React.useState(false);
  if (dateStat.debug) console.log('РЕЖИМ ОТЛАДКИ!!!', post);

  //const baseURL = "https://user-permissions-api.hcm.ls-dev.ru/";

  //=== инициализация ======================================
  if (!dateStat.debug) {
    axios
      .post(baseURL, {
        id: 'string',
        userLogin: 'string',
        userRole: 'string',
      })
      .then((response) => {
        console.log('post-response.data:', response.data);
        setPost(response.data);
      });

    axios
      .put(baseURL, {
        id: 'string',
      })
      .then((response) => {
        console.log('put-response.data:', response.data);
        setPost(response.data);
      });

    axios.delete(`${baseURL}/1`).then(() => {
      console.log('!!!del.data:');
      setPost(null);
    });
  }
  //===  Слушатель с сервера ===============================

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log('get-response.data:', response.data);
      setPost(response.data);
    });
    // .catch((error: any) => { // Если запрос не будет выполнен, то ошибка выводится в терминал
    //   console.error(error);});
  }, [setPost]);
  //========================================================
  if (flagOpenDebug) {
    // чтение и перевод в двоичный вид файла с картинкой
    axios
      // .get('https//www.vladtime.ru/uploads/posts/2017-12/1514228400_app-store-ios.jpg', {
      .get('https://farm6.static.flickr.com/5100/5488231741_9105ea3953_b.jpg', {
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
        {openSetErr && <AppSocketError sErr={soob} setOpen={setOpenSetErr} />}
        <HcmMain />
      </Grid>
    </Grid>
  );
};

export default App;
