import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar.js';
import Banner from '../components/Banner.js';
import Products from '../components/Products.js'


const Home = () =>{
  return(
    <div className=''>
      <Head>
        <title>Wire Cart | Ecommerce Web Application</title>
      </Head>
      <Navbar />
      <Banner />
      <Products />
    </div>
  )
}


export default Home;