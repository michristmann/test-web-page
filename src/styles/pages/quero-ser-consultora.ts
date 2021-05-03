import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const PageIntro = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 0 7.8rem;
  margin-bottom: 6.8rem;

  align-items: center;

  > h2 {
    margin-bottom: 9.6rem;
  }

  > p {
    font: ${props => props.theme.fonts.p26};

    padding: 1.6rem;
  }
`

export const Prerequisites = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
`

export const Requisite = styled.div`
  display: flex;
  flex-direction: column;

  width: 26rem;
  height: 28rem;
  padding: 1.6rem;

  align-items: center;

  > img {
    width: 6.4rem;
    height: 6.4rem;

    margin-bottom: 3.2rem;
  }

  > h4 {
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    text-align: center;
  }
`

export const FormArea = styled.div`
  display: flex;

  width: 100%;
  padding: 12.6rem 7.6rem;

  align-items: center;

  background-color: ${props => props.theme.colors.secondaryBackground};
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 88rem;

  margin: 0 auto;
`

export const FormHeader = styled.div`
  text-align: center;

  padding: 1.6rem;
  padding-top: 0;

  > h2 {
    text-transform: uppercase;

    margin-bottom: 2.8rem;
  }

  > p {
    font: ${props => props.theme.fonts.p16};
  }
`

export const InputArea = styled.div``

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

  width: 100%;
  padding: 12.6rem 7.6rem;
`

export const AdvertHeader = styled.div`
  width: 65%;

  margin-bottom: 6.8rem;

  > h2,
  h3 {
    text-transform: uppercase;
    margin-bottom: 2.8rem;
  }

  > p {
    font: ${props => props.theme.fonts.p16};
    color: ${props => props.theme.colors.primaryText};

    line-height: 2.8rem;
  }
`

export const AdvertContent = styled.div`
  display: flex;
  position: relative;

  width: 100%;
  height: 74rem;

  margin-bottom: 6.8rem;

  align-items: center;
`

export const AdvertContentImg = styled.div`
  position: absolute;

  > img {
    width: 105rem;
    height: 71rem;
  }
`

export const AdvertContentText = styled.div`
  z-index: 1;

  position: absolute;

  width: 50%;
  padding: 7.2rem 8.6rem;

  right: 0;

  background: ${props => props.theme.colors.tertiaryBackground};
  color: ${props => props.theme.colors.tertiaryText};

  > h2 {
    text-transform: uppercase;

    margin-bottom: 2.8rem;
  }

  > p {
    font: ${props => props.theme.fonts.p16};
    color: ${props => props.theme.colors.tertiaryText};

    margin-bottom: 1.4rem;
  }
`

export const AdvertFooter = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-end;

  text-align: end;

  > h2,
  h4,
  p {
    width: 55%;
  }

  > h2,
  h4 {
    text-transform: uppercase;
    margin-bottom: 2.8rem;
  }

  > p {
    font: ${props => props.theme.fonts.p16};
    color: ${props => props.theme.colors.primaryText};

    line-height: 2.8rem;
  }
`