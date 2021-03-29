import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      yellow: string
      red: string
      green: string
      dark: string
      grey: string
      midgrey: string
      lightgrey: string
      white: string
    }
  }
}
