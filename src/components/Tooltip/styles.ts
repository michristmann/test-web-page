import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  span {
    background: ${props => props.theme.colors.alertBackground};
    width: 16rem;
    padding: 0.8rem;
    border-radius: 0.1rem;
    font: ${props => props.theme.fonts.span};
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;

    position: absolute;
    bottom: calc(100% + 1.2rem);
    left: 50%;
    transform: translateX(-50%);

    color: ${props => props.theme.colors.tertiary};

    &::before {
      content: '';
      border-style: solid;
      border-width: 0.6rem 0.6rem 0 0.6rem;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`
