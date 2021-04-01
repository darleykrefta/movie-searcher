import { ReactElement } from 'react'

import styled from 'styled-components'

import { Box } from 'components/Box'
import { Flex } from 'components/Flex'
import { Text } from 'components/Text'

type BadgeIconProps = {
  backgroundColorIcon: string
}

type BadgeProps = {
  text: string
  icon: ReactElement
} & BadgeIconProps

const BadgeContainerStyled = styled(Box)`
  display: inline-flex;
`

const BadgeIconStyled = styled(Flex)<BadgeIconProps>`
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 5px 0 0 5px;
  ${(props) => (props.backgroundColorIcon ? `background-color: ${props.backgroundColorIcon}` : ``)};
`

const BadgeTextStyled = styled(Flex)`
  padding: 8px;
  border-radius: 0 5px 5px 0;
  border: ${(props) => props.theme.colors.lightgrey} 1px solid;
  border-left: none;
  background-color: ${(props) => props.theme.colors.dark};
`

const TextStyled = styled(Text)`
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.white};
`

export const BadgeIcon = ({ text, icon, backgroundColorIcon }: BadgeProps) => {
  return (
    <BadgeContainerStyled>
      <BadgeIconStyled backgroundColorIcon={backgroundColorIcon}>{icon}</BadgeIconStyled>

      <BadgeTextStyled>
        <TextStyled>{text}</TextStyled>
      </BadgeTextStyled>
    </BadgeContainerStyled>
  )
}
