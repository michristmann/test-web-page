import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2.1rem;

  width: 100vw;

  @media (min-width: 1024px) {
    padding: 6.4rem 7.6rem;
  }
`

export const MediaLinks = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  border-top: 0.1rem solid ${props => props.theme.colors.primary};

  > svg {
    width: 3.2rem;
    height: 3.2rem;

    margin: 3.2rem 0.4rem;
    margin-bottom: 4rem;

    cursor: pointer;
  }
`

export const CompanyLinks = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 0.8rem;

  align-items: center;
  justify-content: space-around;
  text-align: center;
  text-decoration: underline;

  > div {
    margin-bottom: 2.4rem;
  }

  a {
    font: ${props => props.theme.fonts.a};
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.4rem;

    color: ${props => props.theme.colors.primary};
    margin-bottom: 0.4rem;
  }

  @media (min-width: 1024px) {
    flex-direction: row;

    margin-bottom: 6.8rem;

    > div {
      margin-bottom: 0;
    }
  }
`

export const Policies = styled.div`
  display: flex;
  flex-direction: column;
`

export const Merchandising = styled.div`
  display: flex;
  flex-direction: column;
`

export const ProductRelated = styled.div`
  display: flex;
  flex-direction: column;
`

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
`

export const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1.6rem 0;

  align-items: center;

  text-align: center;

  div {
    margin-bottom: 1.6rem;

    span {
      font: ${props => props.theme.fonts.p16};
      color: ${props => props.theme.colors.secondary};
    }

    > a {
      font: ${props => props.theme.fonts.p16};
      color: ${props => props.theme.colors.primary};
    }
  }

  p {
    width: 90%;

    font: ${props => props.theme.fonts.p16};
    font-size: 1.4rem;

    line-height: 2.4rem;
  }

  @media (min-width: 1024px) {
    padding: 1.6rem;

    p {
      width: unset;

      font: ${props => props.theme.fonts.p16};
      font-size: 1.2rem;
    }
  }
`
