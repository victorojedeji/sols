import React from 'react'

const Account = () => {
  return (
    <section className='w-full mb-20'>
      <div className='w-full mb-10 after:absolute after:block after:w-7 after:bg-black after:h-1 after:left-2/4 after:transform after:-translate-x-1/2'>
        <h1 className='text-2xl md:text-3xl text-center font-body py-2'>Account</h1>
      </div>

      <div className='pl-10 pr-10'>
        <h2 className='mb-3 font-body text-2xl'>Account Details</h2>

        

        <div className='flex gap-2 mb-1'>
          <h4>Name -</h4>
          <p>Ojedeji Victor</p>
        </div>

        <div className='flex gap-2 mb-1'>
          <h4>Email -</h4>
          <p>ojedejivictordaniel@gmail.com</p>
        </div>

        <div className='mt-10'>
          <button className='px-5 py-2 bg-black hover:bg-slate-900 text-white'>Logout</button>
        </div>
      </div>


      
    </section>
  )
}

export default Account
