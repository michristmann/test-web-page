import React, { useRef, useCallback, useState } from 'react'
import Head from 'next/head'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Input from '../components/Input'
import getFormErrors from '../utils/getFormErrors'
import {
  Container,
  PageIntro,
  Prerequisites,
  Requisite,
  FormArea,
  FormWrapper,
  FormHeader,
  InputArea,
  FormButton,
  FormFooter,
  Advertising,
  AdvertHeader,
  AdvertContent,
  AdvertContentImg,
  AdvertContentText,
  AdvertFooter
} from '../styles/pages/quero-ser-consultora'
import minimumAge from '../assets/quero-ser-consultora/18+.png'
import idCard from '../assets/quero-ser-consultora/id-card.png'
import authentication from '../assets/quero-ser-consultora/authentication.png'
import brSouthRegion from '../assets/quero-ser-consultora/sulBrasil.png'
import document from '../assets/quero-ser-consultora/document.png'
import thumbsUp from '../assets/quero-ser-consultora/like.png'
import femaleModel from '../assets/quero-ser-consultora/femaleModel.png'

interface RegisterFormData {
  name: string
  email: string
  phoneNumber: string
}

const wantToBeConsultant: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const maskPhone = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d{4})(\d)/, '$1-$2')
  }

  const [phoneNumber, setPhoneNumber] = useState('')

  const handleSubmit = useCallback(async (data: RegisterFormData) => {
    try {
      formRef.current?.setErrors({})

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome Obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um endereço de e-mail válido'),
        phoneNumber: Yup.string().min(
          11,
          'Informe um número válido de telefone'
        )
      })

      await schema.validate(data, { abortEarly: false })
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getFormErrors(error)

        formRef.current?.setErrors(errors)

        return
      }
    }
  }, [])

  return (
    <Container>
      <Head>
        <title>Quero ser Consultora — H. Maria - Joias Contemporâneas</title>
      </Head>

      <Header isActive />

      <PageIntro>
        <h2>PRÉ-REQUISITOS</h2>
        <Prerequisites>
          <Requisite>
            <img src={minimumAge} alt="Idade Mínima" />
            <h4>Ser maior de 18 anos</h4>
          </Requisite>
          <Requisite>
            <img src={idCard} alt="Idade Mínima" />
            <h4>Carteira de identidade</h4>
          </Requisite>
          <Requisite>
            <img src={authentication} alt="Idade Mínima" />
            <h4>Possuir CPF próprio</h4>
          </Requisite>
          <Requisite>
            <img src={brSouthRegion} alt="Idade Mínima" />
            <h4>Morar no RS ou SC</h4>
          </Requisite>
          <Requisite>
            <img src={document} alt="Idade Mínima" />
            <h4>Comprovante de residência</h4>
          </Requisite>
          <Requisite>
            <img src={thumbsUp} alt="Idade Mínima" />
            <h4>Estar livre de restrições cadastrais e financeiras</h4>
          </Requisite>
        </Prerequisites>
        <p>Tudo Ok? Agora é só preencher a sua solicitação!</p>
      </PageIntro>

      <FormArea>
        <FormWrapper>
          <FormHeader>
            <h2>Nos conte um pouco sobre você</h2>
            <p>
              Preencha os campos abaixo para que possamos conhecer um pouco de
              você. Assim que possível, uma de nossas gestoras entrará em
              contato.
            </p>
          </FormHeader>
          <InputArea>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <Input name="name" type="name" placeholder="Nome *" />
              <Input name="email" type="email" placeholder="E-mail *" />
              <Input
                value={phoneNumber}
                onChange={e => setPhoneNumber(maskPhone(e.target.value))}
                name="phoneNumber"
                type="phoneNumber"
                placeholder="Celular (WhatsApp) *"
              />
              <p>* Campo obrigatório</p>
              <FormButton type="submit">
                <p>Enviar</p>
              </FormButton>
            </Form>
          </InputArea>
          <FormFooter>
            <p>O cadastro não pode ser feito em nome de terceiros.</p>
            <p>
              Após a aprovação, você terá acesso ao kit de jóias e informações.
            </p>
          </FormFooter>
        </FormWrapper>
      </FormArea>

      <Advertising>
        <AdvertHeader>
          <h2>As vantagens</h2>
          <h3>De ser consultora H. Maria</h3>
          <p>
            Trabalhar como Consultora H. Maria é estar rodadeada de beleza, com
            produtos que você admira. É ser dona de um negócio próprio, onde
            você faz seus horários, com liberdade para exercer outras
            atividades. É saber que tem suporte e materiais de apoio para o
            sucesso de seu empreendimento e para o seu desenvolvimento pessoal e
            profissional.
          </p>
        </AdvertHeader>
        <AdvertContent>
          <AdvertContentImg>
            <img
              src={femaleModel}
              alt="Modelo feminina posando com joias H. Maria"
            />
          </AdvertContentImg>
          <AdvertContentText>
            <h2>Alguns dos principais benefícios</h2>
            <p>Kit de joias em consignação. Você paga somento o que vender.</p>
            <p>Comissão de 30 a 40%, conforme o desempenho.</p>
            <p>100% do kit renovado mensalmente.</p>
            <p>Marca reconhecida e produtos desejados!</p>
          </AdvertContentText>
        </AdvertContent>
        <AdvertFooter>
          <h2>Suporte</h2>
          <h4>Ao seu empreendimento</h4>
          <p>
            A gestora será sua maior aliada, auxiliando nas suas dúvidas e
            apoiando o seu desempenho. Você também poderá contar com a nossa
            equipe interna como apoio ao seu negócio. Investimos forte em mídias
            socias e em peças de apoio às suas vendas, como imagens das joias,
            cards para envio por WhatsApp e outras estratégias de comunicação.
            Oferecemos treinamentos para o desenvolvimento pessoal e
            profissional para nossas Consultoras.
          </p>
        </AdvertFooter>
      </Advertising>

      <Footer />
    </Container>
  )
}

export default wantToBeConsultant
