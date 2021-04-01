import Image from 'next/image'
import styled from 'styled-components'

import { Box } from 'components/Box'
import { ButtonIcon } from 'components/ButtonIcon'
import { Flex } from 'components/Flex'
import { Icon } from 'components/Icon'
import { Text } from 'components/Text'

const CardContainerStyled = styled(Flex)`
  position: relative;

  height: 360px;
  width: 240px;
`

const CardContentContainerStyled = styled(Box)`
  border-radius: 5px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.colors.dark};

  opacity: 0;
  height: 360px;
  width: 240px;
  transition: all 0.3s;

  padding: 12px;

  :hover {
    opacity: 0.7;
  }

  > button {
    position: absolute;
    top: 12px;
    right: 12px;

    background-color: transparent;

    :hover {
      background-color: transparent;
    }
  }

  > img {
    position: absolute;
    top: 0;
    left: 0;

    height: 360px;
    width: 240px;

    padding: 0;
  }
`

const CardContentBodyStyled = styled(Flex)`
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;

  height: 100%;
  width: 100%;
`

const ImageStyled = styled(Image)`
  border-radius: 5px;
`

const TitleStyled = styled(Text)`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.white};
`

const DescriptionStyled = styled(Text)`
  font-size: 20px;
  color: ${(props) => props.theme.colors.white};
`

type CardProps = {
  title: string
  description: string
  backgroundImage: string
}

export const Card = ({ title, description, backgroundImage }: CardProps) => {
  return (
    <CardContainerStyled>
      <ImageStyled src={backgroundImage} width="240px" height="360px" />

      <CardContentContainerStyled>
        <ButtonIcon leftIcon={<Icon name="heart-default" width="16px" height="16px" />} />

        <CardContentBodyStyled>
          <TitleStyled>{title}</TitleStyled>
          <DescriptionStyled>{description}</DescriptionStyled>
        </CardContentBodyStyled>
      </CardContentContainerStyled>
    </CardContainerStyled>
  )
}
