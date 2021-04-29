import React from 'react'
import {
  Container,
  NavBar,
  HomeImageLink,
  PagesLinksWrapper,
  RestrictedAreaButton
} from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <NavBar>
        <HomeImageLink></HomeImageLink>
        <PagesLinksWrapper></PagesLinksWrapper>
        <RestrictedAreaButton></RestrictedAreaButton>
      </NavBar>
    </Container>
  )
}

export default Header
