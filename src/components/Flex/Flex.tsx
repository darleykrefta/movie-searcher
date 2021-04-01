import styled from 'styled-components'
import { flexbox, FlexboxProps } from 'styled-system'

import { BoxProps } from 'components/Box'

export type FlexProps = BoxProps & FlexboxProps

export const Flex = styled.div<FlexProps>`
  display: flex;
  ${flexbox};
`
