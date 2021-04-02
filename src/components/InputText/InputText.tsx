import { InputHTMLAttributes, ReactElement } from 'react'

import styled from 'styled-components'

import { Box } from 'components/Box'

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: ReactElement
}

const InputTextContainer = styled(Box)`
  width: 100%;

  svg {
    position: absolute;
    z-index: 1;
    top: 12px;
    left: 12px;
    width: 16px;
    height: 16px;
    transition: all 0.3s;
  }
`

const InputTextStyled = styled.input<InputTextProps>`
  width: 100%;
  z-index: 0;

  border: none;
  border-radius: 5px;
  color: ${(props) => props.theme.colors.dark};
  ${(props) => (props.leftIcon ? `padding: 12px 12px 12px 40px; ` : `padding: 12px;`)}

  &::placeholder {
    color: ${(props) => props.theme.colors.lightgrey};
  }

  &:active,
  &:active > span {
    color: ${(props) => props.theme.colors.white};
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    color: ${(props) => props.theme.colors.lightgrey};
    background-color: ${(props) => props.theme.colors.midgrey};
  }
`

export const InputText = ({ leftIcon, ...props }: InputTextProps) => {
  return (
    <InputTextContainer position="relative">
      {leftIcon}
      <InputTextStyled leftIcon={leftIcon} {...props} />
    </InputTextContainer>
  )
}
