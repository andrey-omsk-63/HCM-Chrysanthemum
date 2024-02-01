//=== HcmMain =========================================================
export const styleMain01 = {
  height: "99.9vh",
  //background: 'linear-gradient(135deg, #DCE0AB 25%,#97BB92 52%, #D2D8B7 85%)',
  // этюд в зелёных тонах:
  //background: 'linear-gradient(135deg, #e2e5b9 25%,#a8c6a4 52%, #dadec3 85%)',
  // этюд в сиреневых тонах:
  background: "linear-gradient(140deg, #e3d8f7 26%,#dcbaf1 57%, #f8d7f7 85%)",
  padding: "2px 1px 0px 1px",
  //opacity: 0.99,
};

export const styleMain02 = {
  fontSize: 17,
  //bgcolor: '#BDE6FB', // голубой
  //bgcolor: '#EFDE7E', // светло оранжевый
  bgcolor: "#7620a2", // сиреневый
  textAlign: "center",
  //border: '3px solid #EFDE7E', // светло оранжевый
  border: "3px solid #7620a2", // сиреневый
  borderRadius: 1,
  color: "background.paper",
  padding: "0px 0px 1px 0px",
  marginRigth: 10,
  boxShadow: 3,
  cursor: "pointer",
  textShadow: "2px 2px 3px rgba(0,0,0,0.3)",
};

export const styleMain03 = {
  bgcolor: "#FFFEF7",
  border: "3px solid #FFFEF7", // молоко
  borderRadius: 1,
  padding: "0px 0px 0px 6px",
  boxShadow: 3,
};

export const styleMain04 = (part: number, ILLUM: number, mode: number) => {
  const styleMain040 = {
    fontSize: ILLUM === mode ? 13.5 : 12.5,
    height: "30px",
    width: ((window.innerWidth - 3) / 12) * part - 3,
    //bgcolor: ILLUM === mode ? '#BAE186' : '#E6F5D6', // тёмно-салатовый/светло-салатовый
    // bgcolor: ILLUM === mode ? '#82e94a' : '#E6F5D6', // ярко-салатовый/светло-салатовый
    bgcolor: ILLUM === mode ? "#82e94a" : "#F4E8FB", // ярко-салатовый/светло-сиреневый
    border: "1px solid #d4d4d4", // серый
    borderRadius: 1,
    color: "black",
    textTransform: "unset !important",
    //padding: "2px 0px 2px 0px",
    boxShadow: ILLUM === mode ? 9 : 3,
    //textShadow: '2px 2px 3px rgba(0,0,0,0.3)',
  };
  return styleMain040;
};

export const styleMain05 = {
  border: 0,
  fontSize: 19,
  cursor: "pointer",
  textAlign: "center",
  padding: "3px 0px 0px 0px",
};

export const styleModalEnd = {
  position: "absolute",
  top: "0%",
  left: "auto",
  right: "-0%",
  height: "21px",
  maxWidth: "2%",
  minWidth: "2%",
  //color: 'black',
  color: "#801F95", // сиреневый
  textShadow: "2px 2px 3px rgba(0,0,0,0.3)",
};
//=== HcmBlock1 =======================================================
export const styleBl1Form01 = {
  //height: "220px",
  bgcolor: "background.paper",
  border: "1px solid #FFFFFF",
  borderRadius: 1,
  boxShadow: 9,
};

export const styleBl1Form02 = {
  border: 1,
  height: "214px",
  marginTop: "15px",
  //padding: "20px 10px 0px 18px",
};

export const styleBl1Form03 = {
  marginLeft: "10px",
  marginTop: "-12px",
  fontSize: 14,
  color: "#5B1080",
};

export const styleBl1Form04 = {
  marginLeft: "10px",
  marginTop: "9px",
};

export const styleBl1Form05 = {
  height: "180px",
  width: "180px",
  boxShadow: 6,
};
//=== HcmBlock2 =======================================================
export const styleBl2Gl01 = {
  border: 0,
  marginTop: 2,
  height: window.innerHeight - 52,
  padding: "0px 1px 0px 1px",
};

export const styleBl2Gl02 = {
  height: "30px",
  bgcolor: "background.paper",
  border: "1px solid #FFFFFF",
  borderRadius: 1,
  boxShadow: 6,
  textAlign: "center",
};

export const styleBl2Form00 = (part: number, mt: number) => {
  const styleBl2Form = {
    marginTop: mt,
    height: part,
    bgcolor: "background.paper",
    border: "1px solid #FFFFFF",
    borderRadius: 1,
    boxShadow: 9,
    padding: "0px 1px 0px 1px",
  };
  return styleBl2Form;
};
//=== HcmBlock3 =======================================================
export const styleBl3Form01 = (part: number) => {
  const styleBl3Form = {
    bgcolor: "background.paper",
    border: "1px solid #FFFFFF",
    borderRadius: 1,
    margin: "20px 1px 0px 1px",
    height: window.innerHeight - part,
    //padding: '0px 1px 0px 1px',
  };
  return styleBl3Form;
};
//=== HcmBlock5 =======================================================
export const styleBl5Form00 = (wdth: number, hdth: number) => {
  const styleSetPK01 = {
    outline: "none",
    position: "absolute",
    left: "50%",
    top: "45%",
    transform: "translate(-50%, -50%)",
    width: wdth,
    height: hdth,
    bgcolor: "background.paper",
    border: "1px solid #FFFFFF",
    borderRadius: 1,
    boxShadow: 24,
    textAlign: "center",
    padding: "1px 10px 10px 10px",
  };
  return styleSetPK01;
};

export const styleBl5Form01 = {
  fontSize: 20,
  textAlign: "center",
  //color: '#5B1080',
  //color: "#801F95", // сиреневый
  color: "#7620a2", // сиреневый
  margin: "15px 0 10px 0",
  textShadow: "2px 2px 3px rgba(0,0,0,0.3)",
};

export const styleBl5Form02 = {
  fontSize: 15,
  textAlign: "left",
  bgcolor: "#F1F5FB",
  border: "1px solid #d4d4d4",
  borderRadius: 1,
  color: "#5B1080", // сиреневый
  boxShadow: 3,
  //margin: "1px 0 1px 0",
  padding: "0px 20px 20px 20px",
  textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
  //height: 380, //=====================================================
};

export const styleBl5Form03 = {
  fontSize: 15,
  color: "#5B1080",
  border: "1px dashed #5B1080",
  padding: "0px 2px 1px 5px",
};
//=====================================================================

//=== InputObject =====================================================
export const searchControl = {
  float: "left",
  provider: "yandex#search",
  size: "large",
};

// export const styleModalEnd = {
//   position: "absolute",
//   top: "0%",
//   left: "auto",
//   right: "0%",
//   height: "21px",
//   maxWidth: "2%",
//   minWidth: "2%",
//   color: "black",
//   textShadow: "2px 2px 3px rgba(0,0,0,0.3)",
// };

export const styleSetInf = {
  position: "absolute",
  marginTop: "15vh",
  marginLeft: "24vh",
  width: 380,
  bgcolor: "background.paper",
  border: "3px solid #000",
  borderColor: "primary.main",
  borderRadius: 2,
  boxShadow: 24,
  p: 1.5,
};
//=== InputObject =====================================================
export const styleSetAdress = {
  outline: "none",
  width: "319px",
  height: "160px",
  marginTop: "9vh",
  marginLeft: "48px",
  border: "3px solid #000",
  borderColor: "#FFFEF7",
  borderRadius: 2,
  boxShadow: 24,
  bgcolor: "#FFFEF7",
  opacity: 0.85,
};

export const styleSet = {
  //marginTop: '2vh',
  width: "230px",
  maxHeight: "4px",
  minHeight: "4px",
  //bgcolor: "#FAFAFA",
  bgcolor: "#FFFBE5",
  boxShadow: 3,
  textAlign: "center",
  p: 1.5,
};

export const styleInpKnop = {
  border: 1,
  borderColor: "#FFDB4D",
  fontSize: 13.3,
  color: "black",
  maxHeight: "27px",
  minHeight: "27px",
  maxWidth: "62px",
  minWidth: "62px",
  backgroundColor: "#FFDB4D",
  textTransform: "unset !important",
};

export const styleBoxForm = {
  "& > :not(style)": {
    marginTop: "-9px",
    marginLeft: "-12px",
    width: "250px",
  },
};

export const styleSetAdrAreaID = {
  marginTop: "10vh",
  marginLeft: "48px",
  width: "316px",
  height: "14vh",
  bgcolor: "#FFFEF7",
  opacity: 0.8,
};

export const styleSetAdrArea = {
  marginTop: "1vh",
  width: "319px",
  height: "30px",
};

export const styleSetAdrID = {
  width: "319px",
  height: "30px",
  //marginTop: '-1vh',
};

export const styleSetArea = {
  width: "230px",
  maxHeight: "3px",
  minHeight: "3px",
  //bgcolor: "#FAFAFA",
  bgcolor: "#FFFBE5",
  boxShadow: 3,
  textAlign: "center",
  p: 1.5,
};

export const styleSetID = {
  border: 0,
  width: "230px",
  maxHeight: "3px",
  minHeight: "3px",
  //bgcolor: "#FAFAFA",
  bgcolor: "#FFFBE5",
  boxShadow: 3,
  textAlign: "center",
  p: 1.5,
};

export const styleBoxFormArea = {
  "& > :not(style)": {
    marginTop: "-10px",
    marginLeft: "-12px",
    width: "253px",
  },
};

export const styleBoxFormID = {
  "& > :not(style)": {
    marginTop: "-9px",
    marginLeft: "-12px",
    width: "253px",
  },
};
//=== ProcessObject ===================================================
export const styleModalMenu = {
  fontSize: 17,
  maxHeight: "21px",
  minHeight: "21px",
  backgroundColor: "#E6F5D6",
  color: "black",
  marginRight: 1,
  marginBottom: 2,
  textTransform: "unset !important",
  textAlign: "center",
};

export const styleSetProcess = {
  outline: "none",
  position: "relative",
  marginTop: 8,
  marginLeft: 8,
  marginRight: "auto",
  width: 333,
  bgcolor: "background.paper",
  border: "3px solid #000",
  borderColor: "primary.main",
  borderRadius: 2,
  boxShadow: 24,
  p: 1.5,
};
//=== ProcessObject ===================================================
export const styleEditName = {
  outline: "none",
  width: "319px",
  height: "60px",
  marginTop: "9vh",
  marginLeft: "48px",
  border: "3px solid #000",
  borderColor: "#FFFEF7",
  borderRadius: 2,
  boxShadow: 24,
  bgcolor: "#FFFEF7",
  opacity: 0.9,
};
//=== AppointVertex ===================================================
export const styleSetAppoint = {
  outline: "none",
  position: "relative",
  marginTop: "12vh",
  marginLeft: 1,
  marginRight: "auto",
  width: "98.5%",
  bgcolor: "background.paper",
  border: "3px solid #000",
  borderColor: "primary.main",
  borderRadius: 2,
  boxShadow: 24,
};

export const styleAppSt02 = {
  transform: "translate(-50%, -50%)",
  position: "relative",
  top: "50%",
  left: "50%",
};

export const styleAppSt03 = {
  textAlign: "center",
  transform: "translate(-50%, -100%)",
  position: "relative",
  top: "50%",
  left: "50%",
};

export const styleSetAV = {
  width: "48px",
  maxHeight: "19px",
  minHeight: "19px",
  marginTop: "2px",
  bgcolor: "#FFFBE5",
  boxShadow: 3,
};

export const styleBoxFormAV = {
  "& > :not(style)": {
    marginTop: "-0px",
    marginLeft: "-2px",
    width: "50px",
  },
};

export const styleSetFazaNull = {
  position: "relative",
  marginTop: "1px",
  left: "27%",
  width: "30px",
  maxHeight: "19px",
  minHeight: "19px",
  bgcolor: "background.paper",
};

export const styleSetFaza = {
  position: "relative",
  marginTop: "1px",
  left: "27%",
  width: "30px",
  maxHeight: "19px",
  minHeight: "19px",
  bgcolor: "#FFFBE5",
  boxShadow: 3,
};

export const styleBoxFormFaza = {
  "& > :not(style)": {
    marginTop: "-2px",
    marginLeft: "-1px",
    width: "32px",
  },
};
//=====================================================================
