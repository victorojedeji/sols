import React from 'react'
import HeaderHero from '../Components/HeaderHero'
import CategorySection from '../Components/CategorySection'
import GiftShopSection from '../Components/GiftShopSection'
import Shoemakers from '../Components/Shoemakers'

const Home = () => {
  return (
    <div className='p-6'>
      <HeaderHero />
      <CategorySection />
      <GiftShopSection />
      <Shoemakers />
    </div>
  )
}

export default Home
