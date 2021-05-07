import styled, { css } from 'styled-components'

interface DivProps {
  isActive: boolean
}

export const Container = styled.div`
  display: flex;

  width: 100vw;
`

export const NavBar = styled.div`
  display: flex;
  position: relative;

  width: 100%;

  align-items: center;
  justify-content: space-between;

  padding: 2.1rem;

  @media (min-width: 1024px) {
    padding: 5.6rem 7.8rem;
  }
`

export const HomeImageLink = styled.div`
  display: flex;

  > img {
    width: 14rem;
    height: 4.6rem;

    cursor: pointer;
  }

  @media (min-width: 1024px) {
    > img {
      width: 28rem;
      height: 9rem;

      cursor: pointer;
    }
  }
`

export const PagesLinks = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;

    width: 100%;

    > div {
      height: 4rem;
    }

    > div:first-child {
      margin-top: 2rem;
    }
  }

  @media (min-width: 1363px) {
    flex-direction: row;

    justify-content: flex-end;

    > div {
      height: 2rem;
    }

    > div:first-child {
      margin-top: 0;
    }
  }
`

export const PagesLinksWrapper = styled.div`
  display: flex;

  align-items: baseline;
  justify-content: flex-end;
`

export const Block = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 2rem;

  a {
    font: ${props => props.theme.fonts.a};
    text-decoration: none;
    text-transform: uppercase;

    color: ${props => props.theme.colors.primary};
  }

  #current {
    display: flex;

    height: 0.1rem;
    margin-top: 0.2rem;

    background-color: ${props => props.theme.colors.primary};
  }
`

export const RestrictedAreaButton = styled.button`
  display: none;

  @media (min-width: 1024px) {
    display: block;

    width: 20rem;

    margin-left: 4rem;

    background: transparent;
    border: 0.2rem solid ${props => props.theme.colors.primary};

    transition: background-color 1ms linear, color 1ms linear;

    p {
      font-size: 1.3rem;
      font-weight: 500;
      text-transform: uppercase;

      color: ${props => props.theme.colors.primary};

      padding: 0.8rem 1.2rem;
    }

    &:hover {
      background: ${props => props.theme.colors.primary};

      p {
        color: ${props => props.theme.colors.tertiary};
      }
    }
  }
`

export const Dropdown = styled.div`
  display: flex;

  width: 10rem;

  align-items: center;
  justify-content: flex-end;

  @media (min-width: 1024px) {
    display: none;
  }
`

export const DropdownButton = styled.button`
  background: transparent;
  border: none;

  color: ${props => props.theme.colors.primary};

  > svg {
    width: 3.6rem;
    height: 3.6rem;
  }
`

export const DropdownContent = styled.div<DivProps>`
  display: none;

  ${props =>
    props.isActive &&
    css`
      display: flex;
      flex-direction: column;
      position: absolute;

      width: 100vw;
      height: 100vh;
      top: 0rem;
      left: 0;
      bottom: 0;
      margin-top: 6rem;

      padding: 6rem 0;

      align-items: center;
      text-align: center;

      background: ${props => props.theme.colors.primaryBackground};

      > a {
        font: ${props => props.theme.fonts.a};
        font-size: 2.8rem;
        text-decoration: none;
        text-transform: uppercase;

        line-height: 3.2rem;

        padding: 0.6rem 1.6rem;

        color: ${props => props.theme.colors.primary};
      }

      @media (min-width: 375px) {
        > a {
          font-size: 3.2rem;

          line-height: 3.6rem;

          padding: 1.2rem 1.6rem;
        }
      }
    `}
`

export const RestrictedAreaDropdownButton = styled.button`
  width: 20rem;

  margin-top: 4.2rem;

  background: transparent;
  border: 0.4rem solid ${props => props.theme.colors.primary};

  transition: background-color 1ms linear, color 1ms linear;

  p {
    font-size: 1.8rem;
    font-weight: 500;
    text-transform: uppercase;

    color: ${props => props.theme.colors.primary};

    padding: 0.8rem 1.2rem;
  }

  &:active {
    background: ${props => props.theme.colors.primary};

    p {
      color: ${props => props.theme.colors.tertiary};
    }
  }
`
