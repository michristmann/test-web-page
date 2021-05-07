import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const PageIntro = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 0 2.1rem;
  margin-bottom: 1.6rem;

  align-items: center;
  text-align: center;

  > h2 {
    font-size: 4rem;

    margin-top: 1.2rem;
    margin-bottom: 2.4rem;
  }

  > p {
    font: ${props => props.theme.fonts.p26};
    font-size: 1.8rem;

    padding: 1.6rem;
  }

  @media (min-width: 1024px) {
    padding: 0 7.8rem;
    margin-bottom: 6.8rem;

    text-align: unset;

    > h2 {
      font-size: 9rem;

      margin-top: 0;
      margin-bottom: 9.6rem;
    }

    > p {
      font-size: 2.6rem;
    }
  }
`

export const Prerequisites = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-between;

  @media (min-width: 1680px) {
    flex-direction: row;
  }
`

export const RequisiteWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`

export const Requisite = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1.6rem;

  align-items: center;

  > img {
    width: 6.4rem;
    height: 6.4rem;

    margin-bottom: 3.2rem;
  }

  > h4 {
    font-size: 2rem;

    text-transform: uppercase;
    text-align: center;
  }

  @media (min-width: 1024px) {
    width: 26rem;
    height: 28rem;

    > h4 {
      font-size: 2.8rem;
      letter-spacing: 0.1rem;
    }
  }
`

export const FormArea = styled.div`
  display: flex;

  width: 100%;
  padding: 4.2rem 2.1rem;

  align-items: center;

  background-color: ${props => props.theme.colors.secondaryBackground};

  @media (min-width: 1024px) {
    padding: 12.6rem 7.6rem;
  }
`

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 88rem;

  margin: 0 auto;
`

export const FormHeader = styled.div`
  text-align: center;

  > h2 {
    font-size: 4rem;

    margin-bottom: 2.8rem;

    text-transform: uppercase;
  }

  > p {
    font: ${props => props.theme.fonts.p16};
  }

  @media (min-width: 1024px) {
    padding: 1.6rem;
    padding-top: 0;

    > h2 {
      width: 90%;

      margin-bottom: 2.8rem;

      font-size: 9rem;
    }
  }
`

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;

  margin: 2.8rem 0;

  text-align: center;

  p {
    font: ${props => props.theme.fonts.p16};
    font-size: 1.2rem;

    text-align: start;

    padding: 1.6rem 0;
  }
`

export const FormButton = styled.button`
  width: 12rem;

  margin: 1.6rem 0;

  background: ${props => props.theme.colors.primaryBackground};
  border: 0.2rem solid ${props => props.theme.colors.primary};

  transition: background-color 1ms linear, color 1ms linear;

  p {
    font-size: 1.3rem;
    font-weight: 500;
    text-transform: uppercase;
    text-align: center;

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

export const FormFooter = styled.div`
  text-align: center;

  > p {
    font: ${props => props.theme.fonts.p16};

    &:first-child {
      margin-bottom: 1.4rem;
    }
  }
`

export const Advertising = styled.div`
  display: flex;
  flex-direction: column;

  text-align: start;

  width: 100vw;
  padding: 4.2rem 2.1rem;

  @media (min-width: 1024px) {
    padding: 12.6rem 7.6rem;
  }
`

export const AdvertHeader = styled.div`
  width: 100%;

  margin-bottom: 6.8rem;

  > h2 {
    font-size: 4rem;
  }

  > h3 {
    font-size: 2.8rem;
  }

  > h2,
  h3 {
    text-transform: uppercase;
    margin-bottom: 2.8rem;
  }

  > p {
    font: ${props => props.theme.fonts.p16};
    color: ${props => props.theme.colors.primary};

    line-height: 2.8rem;
  }

  @media (min-width: 1024px) {
    width: 65%;

    > h2 {
      font-size: 9rem;
    }

    > h3 {
      font-size: 5.6em;
    }
  }
`

export const AdvertContent = styled.div`
  display: flex;
  position: relative;

  width: 100%;
  height: 62rem;

  margin-bottom: 3.4rem;

  align-items: center;

  @media (min-width: 1024px) {
    height: 74rem;

    margin-bottom: 6.8rem;
  }

  @media (min-width: 1680px) {
    height: 74rem;
  }
`

export const AdvertContentImg = styled.div`
  position: absolute;
  top: 0;

  > img {
    width: 90%;
  }

  @media (min-width: 1024px) {
    > img {
      width: 70%;
    }
  }

  @media (min-width: 1680px) {
    top: unset;

    > img {
      width: 90%;
    }
  }
`

export const AdvertContentText = styled.div`
  z-index: 1;

  position: absolute;

  width: 90%;
  padding: 3rem;

  right: 0;
  top: 15rem;

  background: ${props => props.theme.colors.tertiaryBackground};
  color: ${props => props.theme.colors.tertiary};

  > h2 {
    text-transform: uppercase;

    font-size: 4rem;

    margin-bottom: 2.8rem;
  }

  > p {
    font: ${props => props.theme.fonts.p16};
    color: ${props => props.theme.colors.tertiary};

    margin-bottom: 1.4rem;
  }

  @media (min-width: 1024px) {
    width: 70%;
    padding: 3.6rem 4.3rem;

    top: 30rem;

    > h2 {
      font-size: 6rem;
    }
  }

  @media (min-width: 1400px) {
    width: 50%;
    padding: 7.2rem 8.6rem;

    top: unset;

    > h2 {
      font-size: 9rem;
    }
  }
`

export const AdvertFooter = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-end;

  text-align: end;

  > h2,
  h4 {
    text-transform: uppercase;
    margin-bottom: 2.8rem;
  }

  > h2 {
    font-size: 4rem;
  }

  > h4 {
    font-size: 1.8rem;
  }

  > p {
    font: ${props => props.theme.fonts.p16};
    color: ${props => props.theme.colors.primary};

    line-height: 2.8rem;
  }

  @media (min-width: 1024px) {
    > h2,
    h4,
    p {
      width: 55%;
    }

    > h2 {
      font-size: 9rem;
    }

    > h4 {
      font-size: 2.8rem;
    }
  }
`
