import React from 'react'
import {CiInstagram, CiFacebook} from "react-icons/ci"


const Footer = () => {
  return (
    <section>
      <div className='bg-fuchsia-50 flex justify-between pt-20 pb-10 pl-7 pr-7'>
        <div className='w-[17%]'>
          <h4 className='font-body mb-2 text-xl'>Shops</h4>
          <ul>
            <li>Women's Shoes</li>
            <li>Shoe Care Products</li>
          </ul>
        </div>

        <div className='w-[17%]'>
          <h4 className='font-body mb-2 text-xl'>Customer Services</h4>
          <ul>
            <li>My Account</li>
            <li>Returns & Exchanges</li>
            <li>Contact Us</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div className='w-[17%]'>
          <h4 className='font-body mb-2 text-xl'>Company</h4>
          <ul>
            <li>Our Story</li>
            <li>Shoemakers</li>
            <li>LA Showrooms</li>
            <li>Careers</li>
            <li>Retailers</li>

          </ul>
        </div>

        <div className='w-[17%]'>
          <h4 className='font-body mb-2 text-xl'>Socials</h4>
          <ul className='flex gap-6'>
            <li><CiFacebook className='text-3xl'/></li>
            <li><CiInstagram className='text-3xl'/></li>
          </ul>
        </div>
      </div>

      <div className='bg-fuchsia-100 flex justify-end pr-7 pt-3 pb-3 text-sm'>
        <p>© 2023, Sols.</p>
      </div>
    </section>
  )
}

export default Footer
