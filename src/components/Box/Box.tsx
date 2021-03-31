import styled from 'styled-components'
import { space, color, layout, position, SpaceProps, ColorProps, LayoutProps, PositionProps } from 'styled-system'

export type BoxProps = SpaceProps & ColorProps & LayoutProps & PositionProps

export const Box = styled.div<BoxProps>`
  ${space};
  ${color};
  ${layout};
  ${position};
`
