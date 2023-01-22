import React from 'react'
import './home.css'
import Featured from '../../components/featured/Featured'
import HeaderComponent from '../../components/Header/Header'
import NavBar from '../../components/navBar'
import PropertyList from '../../components/propertylist/PropertyList'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'

const HomePage = () => {
  return (
    <div>
      <NavBar/>
      <HeaderComponent/>
      <div className='homeContainer'>
        <Featured/>
        <h1 className='homeTitle'>Browse by property type</h1>
        <PropertyList/>
        <h1 className='homeTitle'>Homes guests love</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default HomePage
