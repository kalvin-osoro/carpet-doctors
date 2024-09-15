import React from 'react'
import '../../Styles.css'
import HeroSection from '../HeroSection'
import Navbar from '../navigation/Navbar'
import Layout from '../navigation/Layout'
import Cards from '../Cards'

const Home = () => {
  return (
    <>
    <Layout>
        <HeroSection />
        <Cards />

    </Layout> 
   
    </>
  )
}

export default Home
