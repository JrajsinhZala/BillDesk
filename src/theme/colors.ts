export type ColorType =
  | 'black'
  | 'white'
  | 'transparent'
  | 'primary'
  | 'darkGrey'
  | 'darkGrey2'
  | 'grey'
  | 'regentGrey'
  | 'error'
  | 'green';

type Colors = {
  black: string;
  white: string;
  transparent: string;
  primary: string;
  darkGrey: string;
  darkGrey2: string;
  grey: string;
  regentGrey: string;
  error: string;
  green: string;
  color1: string;
  color2: string;
  color3: string;
  color4: string;
  color5: string;
  color6: string;
  borderColor: string;
  borderColor2: string;
};

const colors: Colors = {
  black: '#000000',
  white: '#FFFFFF',
  transparent: 'transparent',
  primary: '#2F87B3',
  darkGrey: '#222222',
  darkGrey2: '#211E1F',
  grey: '#7D7D7D',
  regentGrey: '#8391A1',
  error: '#EB4335',
  green: '#186F4D',
  color1: '#F9F9F9',
  color2: '#D9D9D9',
  color3: '#F5F5F5',
  color4: '#ECEFF1',
  color5: '#F7F7F7',
  color6: '#F7F8F9',
  borderColor:"#DADADA",
  borderColor2:"#6D6D6D"
};

export default colors;
