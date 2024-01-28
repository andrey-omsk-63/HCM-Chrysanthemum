export const styleMain01 = {
  height: '99.9vh',
  background: 'linear-gradient(135deg, #DCE0AB 25%,#97BB92 52%, #D2D8B7 85%)',
  padding: '2px 1px 0px 1px',
  //opacity: 0.75,
};

export const styleMain02 = {
  bgcolor: '#BDE6FB', // голубой
  textAlign: 'center',
  border: '3px solid #BDE6FB', // голубой
  borderRadius: 1,
  padding: '0px 5px 0px 0px',
  marginRigth: 10,
  boxShadow: 3,
  cursor: 'pointer',
};

export const styleMain03 = {
  bgcolor: '#FFFEF7',
  border: '3px solid #FFFEF7', // молоко
  borderRadius: 1,
  padding: '0px 0px 0px 6px',
  boxShadow: 3,
};

export const styleMain04 = (part: number, ILLUM: number, mode: number) => {
  const styleMain040 = {
    fontSize: 12.5,
    height: '24px',
    width: ((window.innerWidth - 3) / 12) * part - 2,
    bgcolor: ILLUM === mode ? '#BAE186' : '#E6F5D6', // тёмно-салатовый/светло-салатовый
    color: 'black',
    textTransform: 'unset !important',
    border: '1px solid #BAE186', // тёмно-салатовый
    borderRadius: 1,
    boxShadow: 3,
    //textShadow: '2px 2px 3px rgba(0,0,0,0.3)',
  };
  return styleMain040;
};

//=====================================================================
//=== InputObject =====================================================
export const searchControl = {
  float: 'left',
  provider: 'yandex#search',
  size: 'large',
};

export const styleModalEnd = {
  position: 'absolute',
  top: '0%',
  left: 'auto',
  right: '0%',
  height: '21px',
  maxWidth: '2%',
  minWidth: '2%',
  color: 'black',
  textShadow: '2px 2px 3px rgba(0,0,0,0.3)',
};

export const styleSetInf = {
  position: 'absolute',
  marginTop: '15vh',
  marginLeft: '24vh',
  width: 380,
  bgcolor: 'background.paper',
  border: '3px solid #000',
  borderColor: 'primary.main',
  borderRadius: 2,
  boxShadow: 24,
  p: 1.5,
};
//=== InputObject =====================================================
export const styleSetAdress = {
  outline: 'none',
  width: '319px',
  height: '160px',
  marginTop: '9vh',
  marginLeft: '48px',
  border: '3px solid #000',
  borderColor: '#FFFEF7',
  borderRadius: 2,
  boxShadow: 24,
  bgcolor: '#FFFEF7',
  opacity: 0.85,
};

export const styleSet = {
  //marginTop: '2vh',
  width: '230px',
  maxHeight: '4px',
  minHeight: '4px',
  //bgcolor: "#FAFAFA",
  bgcolor: '#FFFBE5',
  boxShadow: 3,
  textAlign: 'center',
  p: 1.5,
};

export const styleInpKnop = {
  border: 1,
  borderColor: '#FFDB4D',
  fontSize: 13.3,
  color: 'black',
  maxHeight: '27px',
  minHeight: '27px',
  maxWidth: '62px',
  minWidth: '62px',
  backgroundColor: '#FFDB4D',
  textTransform: 'unset !important',
};

export const styleBoxForm = {
  '& > :not(style)': {
    marginTop: '-9px',
    marginLeft: '-12px',
    width: '250px',
  },
};

export const styleSetAdrAreaID = {
  marginTop: '10vh',
  marginLeft: '48px',
  width: '316px',
  height: '14vh',
  bgcolor: '#FFFEF7',
  opacity: 0.8,
};

export const styleSetAdrArea = {
  marginTop: '1vh',
  width: '319px',
  height: '30px',
};

export const styleSetAdrID = {
  width: '319px',
  height: '30px',
  //marginTop: '-1vh',
};

export const styleSetArea = {
  width: '230px',
  maxHeight: '3px',
  minHeight: '3px',
  //bgcolor: "#FAFAFA",
  bgcolor: '#FFFBE5',
  boxShadow: 3,
  textAlign: 'center',
  p: 1.5,
};

export const styleSetID = {
  border: 0,
  width: '230px',
  maxHeight: '3px',
  minHeight: '3px',
  //bgcolor: "#FAFAFA",
  bgcolor: '#FFFBE5',
  boxShadow: 3,
  textAlign: 'center',
  p: 1.5,
};

export const styleBoxFormArea = {
  '& > :not(style)': {
    marginTop: '-10px',
    marginLeft: '-12px',
    width: '253px',
  },
};

export const styleBoxFormID = {
  '& > :not(style)': {
    marginTop: '-9px',
    marginLeft: '-12px',
    width: '253px',
  },
};
//=== ProcessObject ===================================================
export const styleModalMenu = {
  fontSize: 17,
  maxHeight: '21px',
  minHeight: '21px',
  backgroundColor: '#E6F5D6',
  color: 'black',
  marginRight: 1,
  marginBottom: 2,
  textTransform: 'unset !important',
  textAlign: 'center',
};

export const styleSetProcess = {
  outline: 'none',
  position: 'relative',
  marginTop: 8,
  marginLeft: 8,
  marginRight: 'auto',
  width: 333,
  bgcolor: 'background.paper',
  border: '3px solid #000',
  borderColor: 'primary.main',
  borderRadius: 2,
  boxShadow: 24,
  p: 1.5,
};
//=== ProcessObject ===================================================
export const styleEditName = {
  outline: 'none',
  width: '319px',
  height: '60px',
  marginTop: '9vh',
  marginLeft: '48px',
  border: '3px solid #000',
  borderColor: '#FFFEF7',
  borderRadius: 2,
  boxShadow: 24,
  bgcolor: '#FFFEF7',
  opacity: 0.9,
};
//=== AppointVertex ===================================================
export const styleSetAppoint = {
  outline: 'none',
  position: 'relative',
  marginTop: '12vh',
  marginLeft: 1,
  marginRight: 'auto',
  width: '98.5%',
  bgcolor: 'background.paper',
  border: '3px solid #000',
  borderColor: 'primary.main',
  borderRadius: 2,
  boxShadow: 24,
};

export const styleAppSt02 = {
  transform: 'translate(-50%, -50%)',
  position: 'relative',
  top: '50%',
  left: '50%',
};

export const styleAppSt03 = {
  textAlign: 'center',
  transform: 'translate(-50%, -100%)',
  position: 'relative',
  top: '50%',
  left: '50%',
};

export const styleSetAV = {
  width: '48px',
  maxHeight: '19px',
  minHeight: '19px',
  marginTop: '2px',
  bgcolor: '#FFFBE5',
  boxShadow: 3,
};

export const styleBoxFormAV = {
  '& > :not(style)': {
    marginTop: '-0px',
    marginLeft: '-2px',
    width: '50px',
  },
};

export const styleSetFazaNull = {
  position: 'relative',
  marginTop: '1px',
  left: '27%',
  width: '30px',
  maxHeight: '19px',
  minHeight: '19px',
  bgcolor: 'background.paper',
};

export const styleSetFaza = {
  position: 'relative',
  marginTop: '1px',
  left: '27%',
  width: '30px',
  maxHeight: '19px',
  minHeight: '19px',
  bgcolor: '#FFFBE5',
  boxShadow: 3,
};

export const styleBoxFormFaza = {
  '& > :not(style)': {
    marginTop: '-2px',
    marginLeft: '-1px',
    width: '32px',
  },
};
//=====================================================================
