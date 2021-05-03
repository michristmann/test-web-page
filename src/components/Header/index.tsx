import React from 'react'
import NextLink from 'next/link'

import {
  Container,
  NavBar,
  HomeImageLink,
  PagesLinksWrapper,
  RestrictedAreaButton
} from './styles'
import headerLogo from '../../assets/header/headerLogo.png'

const Header: React.FC = () => {
  return (
    <Container>
      <NavBar>
        <HomeImageLink>
          <NextLink href="/">
            <img src={headerLogo} alt="Logo H. Maria Joias" />
          </NextLink>
        </HomeImageLink>
        <PagesLinksWrapper>
          <NextLink href="/produtos">
            <a>Produtos</a>
          </NextLink>
          <NextLink href="/encontre-uma-consultora">
            <a>Econtre uma consultora</a>
          </NextLink>
          <NextLink href="/quero-ser-consultora">
            <a>Quero ser consultora</a>
          </NextLink>
          <NextLink href="/sobre">
            <a>H. Maria</a>
          </NextLink>
          <NextLink href="/mulheres-de-verdade">
            <a>Mulheres de verdade</a>
          </NextLink>
          <NextLink href="/blog">
            <a>Blog</a>
          </NextLink>
        </PagesLinksWrapper>
        <RestrictedAreaButton>
          <p>♥️ Area restrita</p>
        </RestrictedAreaButton>
      </NavBar>
    </Container>
  )
}

export default Header
