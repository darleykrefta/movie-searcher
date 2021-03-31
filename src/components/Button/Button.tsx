import { ButtonHTMLAttributes, ReactElement } from 'react'

import styled from 'styled-components'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  leftIcon?: ReactElement
}

export const ButtonStyled = styled.button<ButtonProps>`
  position: relative;

  transition: all 0.3s;

  font-weight: bold;

  background-color: ${(props) => props.theme.colors.dark};
  border: ${(props) => props.theme.colors.lightgrey} 1px solid;
  border-radius: 5px;
  color: ${(props) => props.theme.colors.lightgrey};

  ${(props) => (props.leftIcon ? `padding: 12px 12px 12px 40px;` : `padding: 12px 12px 12px 12px;`)}

  svg {
    position: absolute;
    z-index: 1;
    top: 12px;
    left: 12px;
    width: 16px;
    height: 16px;
    transition: all 0.3s;
  }

  &:hover {
    border: ${(props) => props.theme.colors.red} 1px solid;
    background-color: ${(props) => props.theme.colors.dark};

    svg path {
      stroke: ${(props) => props.theme.colors.white};
    }
  }

  &:hover,
  &:hover > span {
    color: ${(props) => props.theme.colors.white};
  }

  &:active {
    color: ${(props) => props.theme.colors.white};
    border: ${(props) => props.theme.colors.red} 1px solid;
    background-color: ${(props) => props.theme.colors.red};
  }

  &:active,
  &:active > span {
    color: ${(props) => props.theme.colors.white};
  }

  &:focus {
    outline: none;
  }
`

export const Button = ({ children, leftIcon, ...props }: ButtonProps) => {
  return (
    <ButtonStyled leftIcon={leftIcon} {...props}>
      {leftIcon}
      {children}
    </ButtonStyled>
  )
}
