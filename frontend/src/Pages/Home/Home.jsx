import React from 'react'
import Header from '../../components/Header/Header'
import { Outlet } from 'react-router-dom'
import OfferCard from '../../components/OfferCard/OfferCard'
import Pamplet from '../../components/Pamplet/Pamplet'
import Text from '../../components/Text/Text'
import Suggestion from '../../components/Manage/suggestion'
import Shop from '../../components/ShopNow/shop'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
      <main>
          <Header/>
          <OfferCard/>
          <Pamplet/>
          <Text/>
          <Suggestion/>
          <Shop/>
          <Banner/>
          <Footer/>
          <Outlet/>
      </main>
  )
}

export default Home