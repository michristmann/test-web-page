import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    font-size: 60%;
  }

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.primaryBackground};
    color: ${props => props.theme.colors.primaryText};
    -webkit-font-smoothing: antialiased;
  }

  a {
    font: ${props => props.theme.fonts.a}
  }

  h2 {
    font: ${props => props.theme.fonts.h2}
  }

  h3 {
    font: ${props => props.theme.fonts.h3}
  }

  h4 {
    font: ${props => props.theme.fonts.h4}
  }

  p {
    font: ${props => props.theme.fonts.p26};
    color: ${props => props.theme.colors.blackText}
  }

  button, a {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    :root {
      font-size: 62.5%
    }
  }
`
