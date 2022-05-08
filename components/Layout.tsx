import Head from 'next/head';
import React, { Component } from 'react'
import Footer from './Footer';
import Header from './Header';

class Layout extends Component {
  
  render () {
    const { children } = this.props
    
    return (
        <div className="flex min-h-screen flex-col items-center justify-center font-body 
        bg-gradient-to-r from-gray-400 via-gray-100 to-gray-400 overflow-x-hidden">
          <Head>
            <title>Goku day</title>
            <link rel="icon" href="/GokuAvatar.png" />
          </Head>
    
         <Header/>
      <hr className='opacity-40'/>
    
        {children}

        <hr className='opacity-40'/>
<Footer/>


      </div>
    );
  }
}
export default Layout