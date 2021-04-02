import styled from 'styled-components'
import { ResponsiveValue, system } from 'styled-system'

import { Box, BoxProps } from 'components/Box'
import { Flex } from 'components/Flex'

type ColProps = {
  span?: ResponsiveValue<number>
}

export const Grid = styled(Box)``

export const Row = styled(Flex)``

export const Col = styled(Flex)<ColProps & BoxProps>`
  ${system({
    span: {
      property: 'flex'
    }
  })}
`
