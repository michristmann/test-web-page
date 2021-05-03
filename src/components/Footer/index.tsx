import React from 'react'
import NextLink from 'next/link'
import { Instagram } from '@styled-icons/boxicons-logos/Instagram'
import { Facebook } from '@styled-icons/boxicons-logos/Facebook'
import { MailOutline } from '@styled-icons/material-sharp/MailOutline'

import {
  Container,
  MediaLinks,
  CompanyLinks,
  Policies,
  Merchandising,
  ProductRelated,
  Contact,
  CompanyInfo
} from './styles'

const Footer: React.FC = () => {
  return (
    <Container>
      <MediaLinks>
        <NextLink href="https://www.instagram.com/hmariajoiasoficial">
          <Instagram />
        </NextLink>
        <NextLink href="https://www.facebook.com/hmariajoiasoficial">
          <Facebook />
        </NextLink>
        <MailOutline />
      </MediaLinks>

      <CompanyLinks>
        <Policies>
          <NextLink href="/quero-ser-consultora">
            <a>Política de garantia</a>
          </NextLink>
          <NextLink href="/quero-ser-consultora">
            <a>Política de consertos</a>
          </NextLink>
          <NextLink href="/quero-ser-consultora">
            <a>Política de troca e devolução</a>
          </NextLink>
        </Policies>

        <Merchandising>
          <NextLink href="/quero-ser-consultora">
            <a>Encontre uma consultora</a>
          </NextLink>
          <NextLink href="/quero-ser-consultora">
            <a>Seja uma consultora</a>
          </NextLink>
          <NextLink href="/quero-ser-consultora">
            <a>Sobre H. Maria</a>
          </NextLink>
        </Merchandising>

        <ProductRelated>
          <NextLink href="/quero-ser-consultora">
            <a>Cuidado com as joias</a>
          </NextLink>
          <NextLink href="/quero-ser-consultora">
            <a>Descubra o tamanho deo seu anel</a>
          </NextLink>
          <NextLink href="/quero-ser-consultora">
            <a>Dúvidas frequentes</a>
          </NextLink>
        </ProductRelated>

        <Contact>
          <NextLink href="/quero-ser-consultora">
            <a>Trabalhe conosco</a>
          </NextLink>
          <NextLink href="/quero-ser-consultora">
            <a>Contato</a>
          </NextLink>
          <NextLink href="/quero-ser-consultora">
            <a>Mapa do site</a>
          </NextLink>
        </Contact>
      </CompanyLinks>

      <CompanyInfo>
        <div>
          <span>Site desenvolvido por </span>
          <a href="https://dosul.digital/" target="_blank">
            doSul
          </a>
        </div>
        <p>
          MHH COMERCIO DE BIJUTERIAS EIRELI - CNPJ: 24.208.503/0001-15 - Rua
          Gomes Portinho, 17 Sala 907 - Novo Hamburgo/RS
        </p>
      </CompanyInfo>
    </Container>
  )
}

export default Footer
