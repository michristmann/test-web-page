import React, { HTMLAttributes, useState } from 'react'
import NextLink from 'next/link'
import { FiMenu, FiX } from 'react-icons/fi'

import {
  Container,
  NavBar,
  HomeImageLink,
  PagesLinks,
  PagesLinksWrapper,
  Block,
  RestrictedAreaButton,
  Dropdown,
  DropdownButton,
  DropdownContent,
  RestrictedAreaDropdownButton
} from './styles'
import headerLogo from '../../assets/header/headerLogo.png'

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  isActive: Boolean
}

const Header: React.FC<HeaderProps> = () => {
  const [isActive, setIsActive] = useState(false)
  const [currentPage, setCurrentPage] = useState('')
  console.log(currentPage)

  return (
    <Container>
      <NavBar>
        <HomeImageLink>
          <NextLink href="/">
            <img
              src={headerLogo}
              alt="Logo H. Maria Joias"
              onClick={() => setCurrentPage('home')}
            />
          </NextLink>
        </HomeImageLink>

        <PagesLinks>
          <PagesLinksWrapper>
            <NextLink href="/produtos">
              <Block onClick={() => setCurrentPage('produtos')}>
                {currentPage === 'produtos' ? (
                  <div>
                    <a>Produtos</a>
                    <div id="current" />
                  </div>
                ) : (
                  <a>Produtos</a>
                )}
              </Block>
            </NextLink>
            <NextLink href="/encontre-uma-consultora">
              <Block onClick={() => setCurrentPage('encontre-uma-consultora')}>
                {currentPage === 'encontre-uma-consultora' ? (
                  <div>
                    <a>Econtre uma consultora</a>
                    <div id="current" />
                  </div>
                ) : (
                  <a>Econtre uma consultora</a>
                )}
              </Block>
            </NextLink>
            <NextLink href="/quero-ser-consultora">
              <Block onClick={() => setCurrentPage('quero-ser-consultora')}>
                {currentPage === 'quero-ser-consultora' ? (
                  <div>
                    <a>Quero ser consultora</a>
                    <div id="current" />
                  </div>
                ) : (
                  <a>Quero ser consultora</a>
                )}
              </Block>
            </NextLink>
          </PagesLinksWrapper>

          <PagesLinksWrapper>
            <NextLink href="/sobre">
              <Block onClick={() => setCurrentPage('sobre')}>
                {currentPage === 'sobre' ? (
                  <div>
                    <a>H. Maria</a>
                    <div id="current" />
                  </div>
                ) : (
                  <a>H. Maria</a>
                )}
              </Block>
            </NextLink>
            <NextLink href="/mulheres-de-verdade">
              <Block onClick={() => setCurrentPage('mulheres-de-verdade')}>
                {currentPage === 'mulheres-de-verdade' ? (
                  <div>
                    <a>Mulheres de verdade</a>
                    <div id="current" />
                  </div>
                ) : (
                  <a>Mulheres de verdade</a>
                )}
              </Block>
            </NextLink>
            <NextLink href="/blog">
              <Block onClick={() => setCurrentPage('blog')}>
                {currentPage === 'blog' ? (
                  <div>
                    <a>Blog</a>
                    <div id="current" />
                  </div>
                ) : (
                  <a>Blog</a>
                )}
              </Block>
            </NextLink>
          </PagesLinksWrapper>
        </PagesLinks>

        <Dropdown>
          <DropdownButton onClick={() => setIsActive(!isActive)}>
            {isActive === false ? <FiMenu /> : <FiX />}
          </DropdownButton>

          <DropdownContent isActive={isActive}>
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
            <RestrictedAreaDropdownButton>
              <p>♥️ Area restrita</p>
            </RestrictedAreaDropdownButton>
          </DropdownContent>
        </Dropdown>

        <RestrictedAreaButton>
          <p>♥️ Area restrita</p>
        </RestrictedAreaButton>
      </NavBar>
    </Container>
  )
}

export default Header
