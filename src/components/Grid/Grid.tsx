import styled from 'styled-components'
import { ResponsiveValue, system } from 'styled-system'

import { Box } from 'components/Box'
import { Flex, FlexProps } from 'components/Flex'

type ColProps = {
  span?: ResponsiveValue<number>
}

export const Grid = styled(Box)``

export const Row = styled(Flex)``

const ColStyled = styled(Flex)<ColProps & FlexProps>`
  ${system({
    span: {
      property: 'flex'
    }
  })}
`

export const Col: React.FC<ColProps> = ({ span, children }) => {
  return <ColStyled span={span}>{children}</ColStyled>
}
