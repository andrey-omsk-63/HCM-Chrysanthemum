import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { massfazCreate, statsaveCreate } from '../redux/actions';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { YMaps, Map, FullscreenControl } from 'react-yandex-maps';
import { GeolocationControl, YMapsApi } from 'react-yandex-maps';
import { RulerControl, SearchControl } from 'react-yandex-maps';
import { TrafficControl, TypeSelector, ZoomControl } from 'react-yandex-maps';

import SdcDoPlacemarkDo from './HcmComponents/SdcDoPlacemarkDo';
import SdcControlVertex from './HcmComponents/SdcControlVertex';
import HcmErrorMessage from './HcmComponents/HcmErrorMessage';

import { StrokaMenuGlob, CenterCoord } from './HcmServiceFunctions';
import { CloseInterval } from './HcmServiceFunctions';

import { SendSocketGetPhases } from './HcmSocketFunctions';

import { SendSocketDispatch } from './HcmSocketFunctions';

import { MyYandexKey } from './HcmMainConst';

import { searchControl } from './HcmMainStyle';

export let DEMO = false;

let flagOpen = false;
const zoomStart = 10;
let zoom = zoomStart;
let pointCenter: any = 0;
let newCenter: any = [];
let funcBound: any = null;

let soobErr = '';
let idxObj = -1;

//let ev: any = null

const HcmMain = (props: { trigger: boolean }) => {
  //== Piece of Redux =======================================
  const map = useSelector((state: any) => {
    const { mapReducer } = state;
    return mapReducer.map.dateMap;
  });
  let coordinates = useSelector((state: any) => {
    const { coordinatesReducer } = state;
    return coordinatesReducer.coordinates;
  });
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
  const homeRegion = datestat.region;
  DEMO = datestat.demo;
  const dispatch = useDispatch();
  //===========================================================
  const [control, setControl] = React.useState(false);
  const [flagCenter, setFlagCenter] = React.useState(false);
  const [demoSost, setDemoSost] = React.useState(-1);
  const [openSetErr, setOpenSetErr] = React.useState(false);
  const [ymaps, setYmaps] = React.useState<YMapsApi | null>(null);
  const mapp = React.useRef<any>(null);

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

  const OnPlacemarkClickPoint = (index: number) => {
    //console.log("1OnPlacemarkClickPoint:", index, datestat.working);
    if (!datestat.working) {
      let area = map.tflight[index].area.num;
      let id = map.tflight[index].ID;
      console.log('OnPlacemarkClickPoint id:', id);
      datestat.area = area;
      datestat.id = id;
      if (!debug) datestat.phSvg = Array(8).fill(null);
      SendSocketGetPhases(debug, ws, homeRegion, area, id);
      dispatch(statsaveCreate(datestat));
      idxObj = index;
      setControl(true);
    } else {
      soobErr = 'В данный момент происходит управление другим перекрёстком';
      setOpenSetErr(true);
    }
  };
  //=== вывод светофоров ===================================
  const PlacemarkDo = () => {
    return (
      <>
        {flagOpen &&
          coordinates.map((coordinate: any, idx: any) => (
            <SdcDoPlacemarkDo
              key={idx}
              ymaps={ymaps}
              coordinate={coordinate}
              idx={idx}
              OnPlacemarkClickPoint={OnPlacemarkClickPoint}
            />
          ))}
      </>
    );
  };

  const InstanceRefDo = (ref: React.Ref<any>) => {
    if (ref) {
      mapp.current = ref;
      mapp.current.events.remove('boundschange', funcBound);
      funcBound = function () {
        pointCenter = mapp.current.getCenter();
        zoom = mapp.current.getZoom(); // покрутили колёсико мыши
      };
      mapp.current.events.add('boundschange', funcBound);
      if (flagCenter) {
        pointCenter = newCenter;
        setFlagCenter(false);
      }
    }
  };

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
        soobErr = 'Завершите предыдущий режим нормальным образом';
        setOpenSetErr(true);
    }
  };
  //=== Функции - обработчики ==============================
  const RandomNumber = (min: number, max: number) => {
    let rand = Math.random() * (max - min) + min;
    return Math.floor(rand);
  };

  const ChangeDemoSost = (mode: number) => {
    //console.log("ChangeDemoSost:", mode);
    //setDemoSost(mode + demoSost);// костыль
    setDemoSost(RandomNumber(1, 1000) + demoSost); // костыль
  };

  const SetControl = (mode: any) => {
    console.log('SETCONTROL:', mode);
    setControl(mode);
  };
  //=== инициализация ======================================
  if (!flagOpen && Object.keys(map.tflight).length) {
    pointCenter = CenterCoord(
      map.boxPoint.point0.Y,
      map.boxPoint.point0.X,
      map.boxPoint.point1.Y,
      map.boxPoint.point1.X,
    );
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
    StatusQuo(false);
    //  event.preventDefault();
    //  event.returnValue = "";
  };

  function removePlayerFromGame() {
    throw new Error('Function not implemented.');
  }
  //========================================================
  let mapState: any = {
    center: pointCenter,
    zoom,
  };

  const styleChat05 = {
    fontSize: 11,
    flexGrow: 1,
    width: '100%',
    //background: '#E5E5E5',
    background: 'linear-gradient(125deg, #DCE0AB 30%,#97BB92 52%, #D2D8B7 85%)',
    paddingLeft: '12px',
    paddingRight: '12px',
    height: '86vh',
  };

  return (
    <Grid
      container
      sx={{
        height: '99.9vh',
        background: 'linear-gradient(105deg, #DCE0AB 25%,#97BB92 52%, #D2D8B7 85%)',
      }}>
      <Grid item xs={12}>
        {/* главное меню */}
        <Box>{StrokaMenuGlob(PressButton, datestat.working)}</Box>
        {/* Яндекс карта */}

        {/* <Grid container sx={{ height: '96.9vh' }}>
          <Grid item xs>
            {Object.keys(map.tflight).length && (
              <YMaps query={{ apikey: MyYandexKey, lang: 'ru_RU' }}>
                <Map
                  modules={['templateLayoutFactory']}
                  state={mapState}
                  instanceRef={(ref) => InstanceRefDo(ref)}
                  onLoad={(ref) => {
                    ref && setYmaps(ref);
                  }}
                  width={'99.9%'}
                  height={'99.9%'}>
                 
                  <FullscreenControl />
                  <GeolocationControl options={{ float: 'left' }} />
                  <RulerControl options={{ float: 'right' }} />
                  <SearchControl options={searchControl} />
                  <TrafficControl options={{ float: 'right' }} />
                  <TypeSelector options={{ float: 'right' }} />
                  <ZoomControl options={{ float: 'right' }} />
                  
                  <PlacemarkDo />
                  {control && datestat.readyFaza && (
                    <SdcControlVertex
                      setOpen={SetControl}
                      idx={idxObj}
                      trigger={props.trigger}
                      change={ChangeDemoSost}
                    />
                  )}
                  {openSetErr && <HcmErrorMessage setOpen={setOpenSetErr} sErr={soobErr} />}
                </Map>
              </YMaps>
            )}
          </Grid>
        </Grid> */}
      </Grid>
    </Grid>
  );
};

export default HcmMain;
