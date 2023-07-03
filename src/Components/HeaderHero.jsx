import React from 'react'
import desktopHero from '../Assets/header/hero/hero-img-desktop.jpg'
import tabMobileHero from '../Assets/header/hero/hero-img-mobile-tab.jpg'

const HeaderHero = () => {
  return (
    <div className="bg-[url('/src/Assets/header/hero/hero-img-desktop.jpg')]">
       {/* <img src={desktopHero} alt="desktop-hero" className='hidden md:block' />
       <img src={tabMobileHero} alt="mobile-hero" className='md:hidden' /> */}

    </div>
  )
}

export default HeaderHero
