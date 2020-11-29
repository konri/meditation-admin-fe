import { createGlobalStyle } from 'styled-components'

import 'styled-components'
import { StyleThemeType } from './type/StyleThemeType'

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends StyleThemeType {}
}

const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: Montserrat,sans-serif!important;
    transition: all 0.25s linear;
  }
`

export default GlobalStyles
