import styled, { css } from 'styled-components'

import Tooltip from '../Tooltip'

interface ContainerProps {
  isFocused: boolean
  isFilled: boolean
  hitAnError: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;

  width: 100%;
  padding: 1.6rem;

  align-items: center;

  background: ${props => props.theme.colors.primaryBackground};
  border: 0.1rem solid ${props => props.theme.colors.primary};
  border-radius: 0.2rem;

  transition: outline-offset 2ms ease;

  & + div {
    margin-top: 3.2rem;
  }

  input {
    flex: 1;

    border: 0;

    background: transparent;
    color: ${props => props.theme.colors.secondary};

    font: ${props => props.theme.fonts.p16};

    &::placeholder {
      color: ${props => props.theme.colors.primary};
    }
  }

  ${props =>
    props.hitAnError &&
    css`
      border: 0.2rem solid ${props => props.theme.colors.alertBackground};

      input {
        color: ${props => props.theme.colors.alertText};

        &::placeholder {
          color: ${props => props.theme.colors.alertText};
        }
      }
    `}

  ${props =>
    props.isFocused &&
    css`
      outline: 0.2rem solid ${props => props.theme.colors.primary};
      outline-offset: -0.3rem;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: ${props => props.theme.colors.primary};
    `}

  svg {
    margin-right: 16px;
  }
`

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    color: ${props => props.theme.colors.alertText};

    margin: 0;
    cursor: pointer;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`
