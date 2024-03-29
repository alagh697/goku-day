import Head from 'next/head'
import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'

class Layout extends Component {
  render() {
    const { children } = this.props

    return (
      <div
        className="flex min-h-screen w-screen flex-col items-center justify-center  
        bg-gradient-to-r from-gray-400 via-gray-100 to-gray-400 font-body"
      >
        <Head>
          <title>Goku day</title>
          <link rel="icon" href="/GokuAvatar.png" />
          <link rel="preload" href="/fonts/Saiyan-Sans.ttf" as="font" />
        </Head>

        <Header />
        <hr className="opacity-40" />

        {children}

        <hr className="opacity-40" />
        <Footer />
      </div>
    )
  }
}
export default Layout
