const dark = {
  textColorMain: '#fff',
  textColorSecond: 'yellow',
  textColorThird: '#01F814',
  bgcMain: '#8a63f2',
  bgcContent: '#2c1338',
  bgcSecondary: '#000',
  bgcTabs: '#000',
  bgcInput: '#1f222b',
  borderColorInput: '#8a63f2',
  selectedBorderColor: '#fff',
  selectedTextColor: '#fff',
};

export type Theme = typeof dark;

const light: Theme = {
  textColorMain: '#000',
  bgcMain: '#fff',
  bgcContent: '#fff5fe',
  bgcSecondary: '#FFF',
  bgcTabs: '#FFF',
  bgcInput: '#ebf0f7',
  borderColorInput: '#8a63f2',
  selectedBorderColor: '#fff',
  textColorSecond: 'blue',
  textColorThird: 'red',
  selectedTextColor: '#fff',
};

const themes = {
  dark,
  light,
};

export const themePicker = (isDark: boolean = true): Theme =>
  isDark ? themes.dark : themes.light;
