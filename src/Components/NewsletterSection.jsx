import React from 'react'

const NewsletterSection = () => {
  return (
    <section className='mt-14 bg-pink-100 pt-14 pb-14 pr-10 pl-10 '>
      <div className='relative w-full mb-2'>
        <div className='w-full after:absolute after:block after:w-7 after:bg-black after:h-1 after:left-2/4 after:transform after:-translate-x-1/2 mb-5'>
          <h1 className='text-3xl text-center font-body py-1'>Connect With Us</h1>
        </div>
      </div>

      <p className='text-center'>Get the latest news on new arrivals, exclusive sales, and more.</p>

      <div className='w-full flex justify-center mt-10'>
        <div className='form_container w-[50%]'>
          <input type="text" placeholder='email@example.com' className='pl-4 pt-5 pr-4 pb-5 w-[70%]'/>
          <button className='w-[30%] text-center bg-zinc-950 pt-5 pb-5 text-white hover:bg-black transition duration-500'>Subscribe</button>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection
