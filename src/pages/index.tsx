import React from 'react'
import Head from 'next/head'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>H. Maria - Joias Contemporâneas</title>
      </Head>

      <Header isActive />

      <Footer />
    </div>
  )
}

export default Home
