import { StyleThemeType } from './type/StyleThemeType'

export const lightTheme: StyleThemeType = {
  type: 'lightTheme',
  body: '#fff',
  headerBackground: '#fff',
  voucherBody: '#f8f8f8',
  voucherBodySelected: 'rgba(120,207,222,0.55)',
  headerShadowColor: 'rgba(66,66,66,0.4)',
  menuText: '#000',
  menuActiveBackground: 'rgba(0,0,0,.05)',
  menuTextActive: '#000',
  text: '#363537',

  materialTable: {
    header: {
      backgroundColor: '#fff',
      color: '#000',
      borderBottom: '2px solid #e6e6e6',
    },
    rows: {
      backgroundColor: '#fff',
      selectedBackgroundColor: '#e6e6e6',
      color: '#000',
      borderBottom: '1px solid #e6e6e6',
    },
  },
}

export const darkTheme: StyleThemeType = {
  type: 'darkTheme',
  body: '#363537',
  headerBackground: '#171618',
  headerShadowColor: 'rgba(250,250,250,0.2)',
  voucherBody: '#3f3f3f',
  voucherBodySelected: 'rgba(120,207,222,0.55)',
  menuText: '#fff',
  menuActiveBackground: '#979294',
  menuTextActive: '#000',
  text: '#FAFAFA',

  materialTable: {
    header: {
      backgroundColor: '#343434',
      color: '#fff',
      borderBottom: '2px solid rgb(255, 59, 59)',
    },
    rows: {
      backgroundColor: '#343434',
      selectedBackgroundColor: '#1e1e1e',
      color: '#fff',
      borderBottom: '1px solid rgb(255, 59, 59)',
    },
  },
}
