import styled from 'styled-components'
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  textAlign,
  TextAlignProps,
  textShadow,
  TextShadowProps,
  typography,
  TypographyProps
} from 'styled-system'

export type TextProps = ColorProps & SpaceProps & TextAlignProps & TextShadowProps & TypographyProps

export const Text = styled.span<TextProps>`
  ${textAlign};
  ${textShadow};
  ${typography};
  ${color};
  ${space};
`
