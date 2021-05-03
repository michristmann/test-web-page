import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 6.4rem 7.6rem;

  width: 100vw;
`

export const MediaLinks = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  border-top: 0.1rem solid ${props => props.theme.colors.primaryColor};

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

  margin-bottom: 6.8rem;

  align-items: center;
  justify-content: space-around;
  text-align: center;
  text-decoration: underline;

  a {
    font: ${props => props.theme.fonts.a};
    text-decoration: none;
    text-transform: uppercase;

    color: ${props => props.theme.colors.primaryText};
    margin-bottom: 0.4rem;
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

  padding: 1.6rem;

  align-items: center;

  div {
    margin-bottom: 1.6rem;

    span {
      font: ${props => props.theme.fonts.p16};
      color: ${props => props.theme.colors.secondaryText};
    }

    > a {
      font: ${props => props.theme.fonts.p16};
      color: ${props => props.theme.colors.primaryText};
    }
  }

  p {
    font: ${props => props.theme.fonts.p16};
    font-size: 1.2rem;
  }
`
