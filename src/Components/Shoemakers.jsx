import React from 'react'
import styled from 'styled-components'
import shoemakerOne from '../Assets/shoemakers/shoemaker_1.jpg'
import shoemakerTwo from '../Assets/shoemakers/shoemaker_2.jpg'
import shoemakerThree from '../Assets/shoemakers/shoemaker_3.jpg'


const BgImg1 = styled.div`
  width: 100%;
  height: 100%;
  background: url(${shoemakerOne});
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover; 
  position: relative;
`

const BgImg2 = styled.div`
  width: 100%;
  height: 100%;
  background: url(${shoemakerTwo});
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover; 
  position: relative;

`

const BgImg3 = styled.div`
  width: 100%;
  height: 100%;
  background: url(${shoemakerThree});
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover; 
  position: relative;

`


const Shoemakers = () => {

  return (
    <section className='flex flex-wrap gap-16 mt-14 mb-14'>
      <div className='w-[47%] h-[30rem] bg-slate-50 flex flex-col align-center justify-center p-20'>
        <div className='relative w-full'>
          <div className='w-full after:absolute after:block after:w-7 after:bg-black after:h-1 after:left-2/4 after:transform after:-translate-x-1/2'>
            <h1 className='text-3xl text-center font-body py-2'>Meet Our Shoemakers.</h1>
          </div>

          <p className='text-center pt-4'>We work with some of the world's best shoemakers to craft each pair of shoes by hand.</p>

          <div className='w-full h-auto flex align-center justify-center mt-8'>
            <button className='btn bg-black text-white py-4 px-10 capitalize'>learn more</button>
          </div>
        </div>
      </div>

      <div className='w-[47%] h-[30rem] relative'>
        <div className='w-full h-full absolute before:block before:absolute before:top-0 before:bottom-0 before:w-full before:h-full before:bg-[#00000021] z-10'></div>
        <BgImg1>
          <div className='w-full h-full flex items-end pb-10 pl-10 z-20 absolute'>
            <h5 className='capitalize after:absolute after:block after:w-7 after:bg-black after:h-1 text-4xl text-white font-medium font-body'>Karla</h5>
          </div>
        </BgImg1>
      </div>

      <div className='w-[47%] h-[30rem] relative' >
        <div className='w-full h-full absolute before:block before:absolute before:top-0 before:bottom-0 before:w-full before:h-full before:bg-[#00000021] z-10'></div>
          <BgImg2>
            <div className='w-full h-full flex items-end pb-10 pl-10 z-20 absolute'>
              <h5 className='capitalize after:absolute after:block after:w-7 after:bg-black after:h-1 text-4xl text-white font-medium  font-body'>salvador</h5>
            </div>
          </BgImg2>
      </div>

      <div className='w-[47%] h-[30rem] relative'>
        <div className='w-full h-full absolute before:block before:absolute before:top-0 before:bottom-0 before:w-full before:h-full before:bg-[#00000021] z-10 '></div>
          <BgImg3>
            <div className='w-full h-full flex items-end pb-10 pl-10 z-20 absolute'>
              <h5 className='capitalize after:absolute after:block after:w-7 after:bg-black after:h-1 text-4xl text-white font-medium font-body'>Ana</h5>
            </div>
          </BgImg3>
      </div>
    </section>
  )
}

export default Shoemakers
