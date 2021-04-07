import styled from 'styled-components'

import { Box } from 'components/Box'
import { Text } from 'components/Text'

type BadgeProps = {
  text: string
}

const BadgeBodyStyled = styled(Box)`
  padding: 8px;
  display: inline-block;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.lightgrey};
`

const BadgeTextStyled = styled(Text)`
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.dark};
`

export const Badge = ({ text }: BadgeProps) => {
  return (
    <BadgeBodyStyled>
      <BadgeTextStyled>{text}</BadgeTextStyled>
    </BadgeBodyStyled>
  )
}
