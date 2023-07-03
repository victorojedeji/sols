import React from 'react'
import desktopHero from '../Assets/header/hero/hero-img-desktop.jpg'
import tabMobileHero from '../Assets/header/hero/hero-img-mobile-tab.jpg'

const HeaderHero = () => {
  return (
    // <div className='h-[80vh] border border-solid border-black relative'>
    //    <img src={desktopHero} alt="desktop-hero" className='hidden md:block h-full aspect-[4/3] absolute top-0 right-0' />
    //    <img src={tabMobileHero} alt="mobile-hero" className='md:hidden h-full w-full' />
    // </div>

    <div className="relative hero-container h-[80vh] w-full">
      <div className=' w-full h-full before:block before:absolute before:w-full before:h-full hover:before:bg-[#e5e5e54d]'>
        <div className='flex flex-col items-center justify-center w-5/12 h-full'>
          <h1 className='uppercase block text-5xl mb-7 font-title tracking-[.4em]'>Summer</h1>
          <h1 className='capitalize block text-5xl mb-7 font-statement tracking-[.4em]'>statement</h1>
          <h1 className='uppercase block text-5xl font-title tracking-[.4em]'>pieces</h1>
        </div>
      </div>
    </div>
  )
}

export default HeaderHero
