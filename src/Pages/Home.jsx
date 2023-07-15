import React from 'react'
import HeaderHero from '../Components/HeaderHero'
import CategorySection from '../Components/CategorySection'
import GiftShopSection from '../Components/GiftShopSection'
import Shoemakers from '../Components/Shoemakers'
import LocationSection from '../Components/LocationSection'
import ShowcaseSection from '../Components/ShowcaseSection'
import ExploreSection from '../Components/ExploreSection'
import Recognition from '../Components/Recognition'
import NewsletterSection from '../Components/NewsletterSection'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div className='md:p-6'>
      <HeaderHero />
      <CategorySection />
      <GiftShopSection />
      <Shoemakers />
      <Recognition />
      <ShowcaseSection />
      <LocationSection />
      <ExploreSection />
      <NewsletterSection />
      <Footer />
    </div>
  )
}

export default Home
