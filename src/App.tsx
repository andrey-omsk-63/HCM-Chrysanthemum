import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { statsaveCreate } from './redux/actions';
//import { massfazCreate } from './redux/actions';

import Grid from '@mui/material/Grid';

import axios from 'axios';

import HcmMain from './components/HcmMain';
import AppSocketError from './AppSocketError';

//import { MasskPoint } from "./components/MapServiceFunctions";

//import { SendSocketGetPhases } from "./components/MapSocketFunctions";

//import { dataMap } from './otladkaMaps';
//import { imgFaza } from "./otladkaPicFaza";

export let dateMapGl: any;
export let dateBindingsGl: any;
export let dateAddObjectsGl: any;

export interface Stater {
  ws: any;
  debug: boolean;
  picture: any;
  finish: boolean;
  demo: boolean;
  readyFaza: boolean;
  region: string;
  area: string;
  id: string;
  phSvg: Array<any>; // массив картинок фаз у светофора
  first: boolean; // флаг начального запуска на данном режиме работы
  working: boolean;
  massMem: Array<number>; // массив "запущенных" светофоров
  demoIdx: Array<number>;
  demoTlsost: Array<number>;
  demoLR: Array<boolean>;
  timerId: Array<any>;
  massInt: any[][];
  stopSwitch: Array<boolean>;
  tekDemoTlsost: Array<number>;
}

export let dateStat: Stater = {
  ws: null,
  debug: false,
  picture: null,
  finish: false,
  demo: false,
  readyFaza: true,
  region: '0',
  area: '0',
  id: '0',
  phSvg: [null, null, null, null, null, null, null, null],
  first: true,
  working: false,
  massMem: [],
  demoIdx: [],
  demoTlsost: [],
  demoLR: [],
  timerId: [],
  massInt: [],
  stopSwitch: [],
  tekDemoTlsost: [],
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
let flagOpenWS = true;
let WS: any = null;
let soob = '';

const App = () => {
  //=== Piece of Redux =====================================
  let massfaz = useSelector((state: any) => {
    const { massfazReducer } = state;
    return massfazReducer.massfaz;
  });
  //console.log("APPmassfaz", massfaz);
  // let coordinates = useSelector((state: any) => {
  //   const { coordinatesReducer } = state;
  //   return coordinatesReducer.coordinates;
  // });
  const dispatch = useDispatch();
  //========================================================
  const host =
    'wss://' + window.location.host + window.location.pathname + 'W' + window.location.search;

  const [openSetErr, setOpenSetErr] = React.useState(false);
  //=== инициализация ======================================
  if (flagOpenWS) {
    WS = new WebSocket(host);
    dateStat.ws = WS;
    if (WS.url === 'wss://localhost:3000/W') dateStat.debug = true;
    dispatch(statsaveCreate(dateStat));
    flagOpenWS = false;
  }

  React.useEffect(() => {
    WS.onopen = function (event: any) {
      console.log('WS.current.onopen:', event);
    };
    WS.onclose = function (event: any) {
      console.log('WS.current.onclose:', event);
    };
    WS.onerror = function (event: any) {
      console.log('WS.current.onerror:', event);
    };
    WS.onmessage = function (event: any) {
      let allData = JSON.parse(event.data);
      let data = allData.data;
      //console.log("пришло:", allData.type, data);
      switch (allData.type) {
        case 'tflight':
          //console.log("Tflight:", data, data.tflight);
          // for (let j = 0; j < data.tflight.length; j++) {
          //   for (let i = 0; i < dateMapGl.tflight.length; i++) {
          //     if (data.tflight[j].idevice === dateMapGl.tflight[i].idevice) {
          //       dateMapGl.tflight[i].tlsost = data.tflight[j].tlsost;
          //     }
          //   }
          // }
          // dispatch(mapCreate(dateMapGl));
          // setTrigger(!trigger);
          break;
        case 'phases':
          // console.log("App пришло:", allData.type, data.phases[0].phase);
          // for (let i = 0; i < massfaz.length; i++) {
          //   if (
          //     massfaz[i].idevice === data.phases[0].device &&
          //     !dateStat.demo
          //   ) {
          //     massfaz[i].fazaSist = data.phases[0].phase;
          //     dispatch(massfazCreate(massfaz));
          //     setTrigger(!trigger);
          //   }
          // }
          break;
        case 'mapInfo':
          // dateMapGl = JSON.parse(JSON.stringify(data));
          // dispatch(mapCreate(dateMapGl));
          // let massRegion = [];
          // for (let key in dateMapGl.regionInfo) {
          //   if (!isNaN(Number(key))) massRegion.push(Number(key));
          // }
          // homeRegion = massRegion[0].toString();
          // dateStat.region = homeRegion;
          // dispatch(statsaveCreate(dateStat));
          // //flagMap = true;
          // setTrigger(!trigger);
          break;
        case 'getPhases':
          // console.log("getPhases:", data);
          // dateStat.area = data.pos.area;
          // dateStat.id = data.pos.id.toString();
          // dateStat.phSvg = Array(8).fill(null);
          // if (data.phases) {
          //   for (let i = 0; i < data.phases.length; i++) {
          //     dateStat.phSvg[i] = data.phases[i].phase;
          //   }
          // }
          // dateStat.readyFaza = true;
          // dispatch(statsaveCreate(dateStat));
          // setTrigger(!trigger);
          break;
        default:
          console.log('data_default:', data);
      }
    };
  }, [dispatch, massfaz]);

  if (WS.url === 'wss://localhost:3000/W' && flagOpenDebug) {
    console.log('РЕЖИМ ОТЛАДКИ!!!');
    // чтение и перевод в двоичный вид файла с картинкой
    axios
      .get('http://localhost:3000/portrait.jpg', {
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

    // dateMapGl = JSON.parse(JSON.stringify(dataMap));
    // dispatch(mapCreate(dateMapGl));
    flagOpenDebug = false;
  }

  // if (flagMap && !flagOpenWS) {
  //   flagMap = false;
  //   setOpenMapInfo(true);
  // }

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
