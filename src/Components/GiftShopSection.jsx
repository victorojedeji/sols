import React from 'react'

const GiftShopSection = () => {
  return (
    <section className='w-full h-[90vh] flex flex-col md:flex-row align-center bg-slate-100 p-2 md:p-14'>
      <div className='giftshop-img-holder w-[100%] md:w-[60%] h-full mt-10 md:mt-0'></div>
  
      <div className='w-[90%] md:w-[40%] relative'>
        <div className='static md:absolute bg-white transform translate-y-[-20px] pt-4 md:pt-8 pb-6 md:pb-16 pl-6 pr-6 md:top-1/2 md:transform md:-translate-y-1/2 md:left-[-5rem]'>
          <div className='w-full after:absolute after:block after:w-7 after:bg-black after:h-1 mb-5'>
            <h5 className='text-xl md:text-2xl font-title py-1 text-3xl'>Gifts + Accessories</h5>
          </div>
          <p className='pt-3 pb-3 text-sm md:text-lg'>Shop our collection of alpaca throws, jewelry, candles, and more.</p>
          <div className='w-full relative h-auto'>
            <button className='shop-gift-btn absolute bg-black text-white py-2 md:py-4 px-5 md:px-10 right-[-2em] capitalize text-sm md:text-lg'>shop gifts</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GiftShopSection