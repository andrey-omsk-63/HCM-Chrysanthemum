import * as React from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
//import Button from '@mui/material/Button';

//import { Chart as ChartJS } from "chart.js";
//import { Chart } from "react-chartjs-2";

// import { Chart as ChartJS, CategoryScale } from "chart.js";
// import { LinearScale, PointElement } from "chart.js";
// import { LineElement, Title, Tooltip, Legend } from "chart.js";
// import { Line } from "react-chartjs-2";
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

import { InputDirectA, PreparCurrencies041 } from "../../HcmServiceFunctions";
import { PreparCurrencies042 } from "../../HcmServiceFunctions";
//import { PreparCurrencies043 } from "../../HcmServiceFunctions";

import { styleBl3Form01, styleBl4Form01 } from "../../HcmMainStyle";
import { styleBl4Form02, styleBl4Form03 } from "../../HcmMainStyle";

import { widthGl } from "../../HcmMain";

import { Chart as ChartJS, CategoryScale } from "chart.js";
import { LinearScale, PointElement } from "chart.js";
import { LineElement, Title, Tooltip, Legend } from "chart.js";
import { BarElement } from "chart.js";
//import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

let currencies01: any = []; // Подразделение
let currencies02: any = []; // Период
//let currencies03: any = []; // Аналитика

let partHeight = 152;
let heightBlock = (window.innerHeight - partHeight) / 2;

let flagOpen = false;

const HcmBl4Form101 = () => {
  const [currency01, setCurrency01] = React.useState("0");
  const [currency02, setCurrency02] = React.useState("0");
  //const [currency03, setCurrency03] = React.useState("0");

  //=== инициализация ======================================
  if (!flagOpen) {
    currencies01 = PreparCurrencies041(); // Подразделение
    currencies02 = PreparCurrencies042(); // Период
    flagOpen = true;
  }
  //========================================================

  const StrokaMenuGlob = (
    mode: number,
    wdth: number,
    currency: any,
    currencies: any
  ) => {
    let widthBlok = (widthGl / 12) * wdth - 0;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      switch (mode) {
        case 1: // Подразделение
          setCurrency01(event.target.value);
          break;
        case 2: // Период
          setCurrency02(event.target.value);
      }
    };

    return (
      <Box sx={{ fontSize: 12.9, width: widthBlok }}>
        {InputDirectA(mode, handleChange, widthBlok, currency, currencies)}
      </Box>
    );
  };

  const BarChart01 = () => {
    const data = {
      labels: [
        "ИТ Отдел",
        "1С автоматизация",
        "Тренер",
        "Поддержка пользователей",
        "Арм",
      ],
      datasets: [
        // {
        //   label: "Dataset 1",
        //   data: [10, 20, 30, 40, 50],
        //   backgroundColor: "rgba(255, 99, 132, 0.6)", // Customize bar color
        // },
        {
          label: "На адаптации",
          data: [45, 25, 40, 15, 30],
          backgroundColor: "rgba(54, 162, 235, 0.6)", // Customize bar color
        },
        // Add more datasets as needed
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top" as const,
        },
        title: {
          display: false,
        },
      },
    };

    return (
      <Box sx={{ width: "99%", height: "99%" }}>
        <Bar options={options} data={data} />
      </Box>
    );
  };

  return (
    <>
      <Grid container sx={{ marginTop: 2 }}>
        <Grid item xs={6} sx={{}}>
          <Grid container>
            {/* Подразделение */}
            <Grid item xs={4} sx={{ height: "30px", border: 0 }}>
              <Box>{StrokaMenuGlob(1, 2, currency01, currencies01)}</Box>
            </Grid>
            {/* Период */}
            <Grid item xs={4} sx={{ height: "30px", border: 0 }}>
              <Box>{StrokaMenuGlob(2, 2, currency02, currencies02)}</Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container sx={styleBl3Form01(partHeight)}>
        <Grid item xs={6} sx={styleBl4Form01(heightBlock)}>
          <Box sx={styleBl4Form02}>
            <b>На адаптации на текущий момент</b>
          </Box>
          <Box sx={styleBl4Form03(heightBlock - 55)}>{BarChart01()}</Box>
        </Grid>

        <Grid item xs={6} sx={styleBl4Form01(heightBlock)}>
          <Box sx={styleBl4Form02}>
            <b>На адаптации / без плана</b>
          </Box>
          <Box sx={styleBl4Form03(heightBlock - 55)}></Box>
        </Grid>

        <Grid item xs={6} sx={styleBl4Form01(heightBlock)}>
          <Box sx={styleBl4Form02}>
            <b>Средняя продолжительность Адаптации</b>
          </Box>
          <Box sx={styleBl4Form03(heightBlock - 60)}></Box>
        </Grid>

        <Grid item xs={6} sx={styleBl4Form01(heightBlock)}>
          <Box sx={styleBl4Form02}>
            <b>Адаптационные планы 2021 - 2024</b>
          </Box>
          <Box sx={styleBl4Form03(heightBlock - 60)}></Box>
        </Grid>
      </Grid>
    </>
  );
};

export default HcmBl4Form101;
