import React from 'react'



// import styled from 'styled-components'
// import display from '../Assets/shopBg/shopbg.jpg'

// const ShopBgImg = styled.div`
//   width: 60%;
//   height: 100%;
//   background: url(${display});
//   background-position: center; 
//   background-repeat: no-repeat; 
//   background-size: cover; 
// `

const LocationSection = () => {
  return (
    <section className='w-full h-[90vh] flex flex-col md:flex-row align-center bg-stone-50 p-2 md:p-14 mb-14'>
      <div className='w-full md:w-[40%] relative'>
        <div className='static md:absolute bg-white pt-8 pb-7 md:pb-16 pl-6 pr-6 md:top-1/2 md:transform md:-translate-y-1/2 md:right-[-5rem]'>
          <div className='w-full after:absolute after:block after:w-7 after:bg-black after:h-1 mb-5'>
            <h5 className='text-2xl font-title py-1 text-2xl capitalize'>Los angeles flagship</h5>
          </div>
          
          <div className='flex gap-[2em] md:gap-[11rem]'>
            <div>
              <p>417 E. 43rd St.</p>
              <p>Beverly Hills, LA 78751</p>
              <p>(123) 123-1234</p>
              <p>info@sols.com</p>
            </div>

            <div>
              <p>Monday - Saturday</p>
              <p>9am - 5pm</p>
            </div>
          </div>
        </div>
      </div>

      <div className='shopbg w-full md:w-[60%] h-full'></div>
    </section>
  )
}

export default LocationSection
