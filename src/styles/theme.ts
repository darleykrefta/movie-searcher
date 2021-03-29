import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  colors: {
    yellow: '#ff9f1c',
    red: '#ff4040',
    green: '#2ec4b6',
    dark: '#0a1014',
    grey: '#1b2329',
    midgrey: '#353f4c',
    lightgrey: '#7a8c99',
    white: '#fff'
  }
}

export type ThemeProps = typeof theme
