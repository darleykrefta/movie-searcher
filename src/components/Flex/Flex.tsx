import styled from 'styled-components'
import { flexbox, FlexboxProps } from 'styled-system'

import { Box, BoxProps } from 'components/Box'

export type FlexProps = BoxProps & FlexboxProps

export const Flex = styled(Box)<FlexProps>`
  display: flex;
  ${flexbox};
`
