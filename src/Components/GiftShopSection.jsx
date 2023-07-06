import React from 'react'

const GiftShopSection = () => {
  return (
    <div className='w-full h-[90vh] flex align-center bg-slate-100 p-14'>
      <div className='giftshop-img-holder w-[60%] h-full'></div>
  
      <div className='w-[40%] relative'>
        <div className='absolute bg-white pt-8 pb-16 pl-6 pr-6 top-1/2 transform -translate-y-1/2 left-[-5rem]'>
          <div className='w-full after:absolute after:block after:w-7 after:bg-black after:h-1 mb-5'>
            <h5 className='text-2xl font-title py-1 text-3xl'>Gifts + Accessories</h5>
          </div>
          <p className='pt-3 pb-3'>Shop our collection of alpaca throws, jewelry, candles, and more.</p>
          <div className='w-full relative h-auto'>
            <button className='shop-gift-btn absolute bg-black text-white py-4 px-10 right-[-2em] capitalize'>shop gifts</button>
          </div>
        </div>
    </div>
    </div>
  )
}

export default GiftShopSection