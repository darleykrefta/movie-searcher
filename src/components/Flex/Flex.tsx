import styled from 'styled-components'
import { flexbox, FlexboxProps } from 'styled-system'

import { BoxProps } from 'components/Box'

export type FlexProps = BoxProps & FlexboxProps

export const Box = styled.div<FlexProps>`
  display: flex;
  ${flexbox};
`
