import React from 'react'
import scissors from '../Assets/about_sols/scissors.png'
import lever from '../Assets/about_sols/lever.png'
import shoe from '../Assets/about_sols/shoes.png'


const CategorySection = () => {
  return (
    <section className='py-0 md:py-14 w-full'>
      <div className='relative w-full'>
        <div className='w-full after:absolute after:block after:w-7 after:bg-black after:h-1 after:left-2/4 after:transform after:-translate-x-1/2'>
          <h1 className='text-2xl md:text-3xl text-center font-body py-2'>Trendsetting designs. Timeless elegance.</h1>
        </div>
      </div>


      <div className='flex flex-col md:flex-row mt-10 mb-10 md:mb-20 gap-10'>
        <div className='about w-full md:w-1/3 px-4 md:px-0'>
          <div className='w-full flex align-center justify-center'>
            <img src={scissors} alt='scissors' />
          </div>
          <div className='relative w-full mb-2'>
            <div className='w-full after:absolute after:block after:w-7 after:bg-black after:h-1 after:left-2/4 after:transform after:-translate-x-1/2 mb-5'>
              <h1 className='text-lg md:text-xl text-center font-title py-1'>HandMade in Mexico</h1>
            </div>
          </div>
          <p className='text-sm md:text-1xl text-center'>Our shoes are a testament to Mexico's tradition of producing exceptional products, showcasing the country's commitment to craftsmanship.</p>
        </div>

        <div className='about w-full md:w-1/3 px-4 md:px-0'>
          <div className='w-full flex align-center justify-center'>
            <img src={lever} alt='lever' />
          </div>
            <div className='relative w-full mb-2'>
              <div className='w-full after:absolute after:block after:w-7 after:bg-black after:h-1 after:left-2/4 after:transform after:-translate-x-1/2 mb-5'>
                <h1 className='text-lg md:text-xl text-center font-title py-1'>Fair Trade</h1>
              </div>
            </div>
            <p className='text-sm md:text-1xl text-center'>At the core of our values, we prioritize equitable compensation, gender equality, and favorable working environments for every individual involved in the shoemaking process.</p>
        </div>

        <div className='about w-full md:w-1/3 px-4 md:px-0'>
          <div className='w-full flex align-center justify-center'>
            <img src={shoe} alt='shoes' />
          </div>
            <div className='relative w-full mb-2'>
              <div className='w-full after:absolute after:block after:w-7 after:bg-black after:h-1 after:left-2/4 after:transform after:-translate-x-1/2 mb-5'>
                <h1 className='text-lg md:text-xl text-center font-title py-1'>Timeless Design</h1>
              </div>
            </div>
            <p className='text-sm md:text-1xl text-center'>Our emphasis lies in timeless designs, crafting shoes with refined and versatile silhouettes that possess enduring style and longevity.</p>
        </div>
      </div>

      <div className='shoe-category flex flex-col md:flex-row align-center min-h-[50vh]'>
          <div className='category first-cat w-full md:w-1/3 h-[40vh] md:h-[100%] flex flex-col align-center justify-center relative'>
            <div className='before:block before:absolute before:top-0 before:bottom-0 before:w-full before:h-full before:bg-[#00000061] hover:before:bg-[#00000085]'></div>
            <div className='relative w-full mb-2 z-10'>
              <div className='pt-[10rem] md:pt-[7rem] pb-[10rem] md:pb-[7rem] w-full after:absolute after:block after:w-7 after:bg-black after:h-1 after:left-2/4 after:transform after:-translate-x-1/2 mb-5'>
                <h1 className='text-2xl text-center font-title py-1 text-white text-3xl'>Women's Flats</h1>
              </div>
            </div>
          </div>

          <div className='category sec-cat w-full md:w-1/3 h-[40vh] md:h-full flex flex-col align-center justify-center relative'>
            <div className='before:block before:absolute before:top-0 before:bottom-0 before:w-full before:h-full before:bg-[#00000061] hover:before:bg-[#00000085]'></div>
            <div className='relative w-full mb-2 z-10'>
              <div className='pt-[10rem] md:pt-[7rem] pb-[10rem] md:pb-[7rem] w-full after:absolute after:block after:w-7 after:bg-black after:h-1 after:left-2/4 after:transform after:-translate-x-1/2 mb-5'>
                <h1 className='text-2xl text-center font-title py-1 text-white text-3xl'>Women's Heels</h1>
              </div>
            </div>
          </div>

          <div className='category third-cat w-full md:w-1/3 h-[40vh] md:h-full flex flex-col align-center justify-center relative'>
            <div className='before:block before:absolute before:top-0 before:bottom-0 before:w-full before:h-full before:bg-[#00000061] hover:before:bg-[#00000085]'></div>
            <div className='relative w-full mb-2 z-10'>
              <div className='pt-[10rem] md:pt-[7rem] pb-[10rem] md:pb-[7rem] w-full after:absolute after:block after:w-7 after:bg-black after:h-1 after:left-2/4 after:transform after:-translate-x-1/2 mb-5'>
                <p className='text-2xl text-center font-title py-1 text-white text-3xl'>Women's Clogs</p>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default CategorySection
