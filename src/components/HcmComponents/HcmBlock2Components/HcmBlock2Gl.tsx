import * as React from "react";

import Grid from "@mui/material/Grid";
//import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { styleMain04,  } from "../../HcmMainStyle";

let Illum = 1;

const HcmBlock2Gl = () => {
  //const [openSet, setOpenSet] = React.useState(true);

  const styleBl2Gl01 = {
    border: 0,
    marginTop: 2,
    height: window.innerHeight - 52,
    padding: "0px 1px 0px 1px",
  };

  const styleBl2Gl02 = {
    height: "30px",
    bgcolor: "background.paper",
    border: "1px solid #FFFFFF",
    borderRadius: 1,
    boxShadow: 24,
    textAlign: "center",
  };

  return (
    <Grid container sx={styleBl2Gl01}>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={4}>
            <Grid container>
              <Grid item xs={4} sx={{ border: 0, height: "30px" }}>
                {/* Сотрудники */}
                <Button
                  sx={styleMain04(1.33, Illum, 1)}
                  //onClick={() => ClickKnop2()}
                >
                  Сотрудники
                </Button>
              </Grid>
              <Grid item xs={4} sx={{ border: 0, height: "30px" }}>
                {/* HealtH Check */}
                <Button
                  sx={styleMain04(1.33, Illum, 2)}
                  //onClick={() => ClickKnop2()}
                >
                  HealtH Check
                </Button>
              </Grid>
              <Grid item xs={4} sx={{ border: 0, height: "30px" }}>
                {/* Задачи */}
                <Button
                  sx={styleMain04(1.33, Illum, 3)}
                  //onClick={() => ClickKnop2()}
                >
                  Задачи
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container sx={{ marginTop: 2 }}>
          <Grid item xs={12} sx={styleBl2Gl02}>
            сервисная строка
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HcmBlock2Gl;
