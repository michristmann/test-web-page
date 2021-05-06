import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  width: 100vw;
`

export const NavBar = styled.div`
  display: flex;

  width: 100%;

  align-items: center;
  justify-content: space-between;

  padding: 5.6rem 7.8rem;
`

export const HomeImageLink = styled.div`
  display: flex;

  > img {
    width: 28rem;
    height: 9rem;

    cursor: pointer;
  }
`

export const PagesLinksWrapper = styled.div`
  display: flex;

  width: 100%;

  align-items: center;
  justify-content: flex-end;

  > a {
    font: ${props => props.theme.fonts.a};
    text-decoration: none;
    text-transform: uppercase;

    color: ${props => props.theme.colors.primary};
    margin-left: 2rem;
  }
`

export const RestrictedAreaButton = styled.button`
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
`
