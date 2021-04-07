import { ButtonHTMLAttributes, ReactElement } from 'react'

import styled from 'styled-components'

interface ButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactElement
}

const ButtonIconStyled = styled.button<ButtonIconProps>`
  cursor: pointer;
  position: relative;

  transition: all 0.3s;

  font-weight: bold;

  background-color: ${(props) => props.theme.colors.dark};
  border: none;
  border-radius: 5px;
  color: ${(props) => props.theme.colors.lightgrey};

  padding: 12px 12px 12px 12px;

  svg {
    z-index: 1;
    width: 24px;
    height: 24px;
    transition: all 0.3s;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.dark};

    svg path {
      stroke: ${(props) => props.theme.colors.white};
    }

    svg polyline {
      stroke: ${(props) => props.theme.colors.white};
    }
  }

  &:focus {
    outline: none;
  }
`

export const ButtonIcon = ({ icon, ...props }: ButtonIconProps) => {
  return (
    <ButtonIconStyled icon={icon} {...props}>
      {icon}
    </ButtonIconStyled>
  )
}
