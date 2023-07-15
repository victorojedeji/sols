import { useState } from 'react';

import { 
  CiMenuBurger,
 } from "react-icons/ci"

 import { 
  RiArrowDownSLine,
  RiArrowRightSLine
 } from "react-icons/ri" 

 import { 
  PiMagnifyingGlassThin,
 } from "react-icons/pi" 

 import { 
  LiaShoppingBagSolid,
 } from "react-icons/lia" 

 import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai"

import {CiInstagram, CiFacebook} from "react-icons/ci"

import logo from '../Assets/logo/svg/logo-no-background.svg';
import products from '../Assets/gift_shop/products_2.jpg'
import styled from 'styled-components';


const ProductContainer = styled.div`
  background: url(${products});
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover; 
  height: 10rem;
  width: 100%;
`

const Navbar = () => {
  const [showShoesMenu, setShowShoesMenu] = useState(false);
  const [showAccessoriesMenu, setShowAccessoriesMenu] = useState(false);

  const [showSidebar, setShowSidebar] = useState(false);

  const [showIndentedNav, setShowIndentedNav] = useState(null);

  const handleSidebar =() => {
    setShowSidebar(!showSidebar)
  };

  const handleIndentedNav = (item) => {
    setShowIndentedNav((prevItem) => (prevItem === item ? null : item));
  };


  const handleShoesMenuToggleOn = () => {
    setShowAccessoriesMenu(false);
    setShowShoesMenu(true);
  };

  const handleShoesMenuToggleOff = () => {
    setShowShoesMenu(false);
  };

  const handleAccessoriesMenuToggleOn = () => {
    setShowAccessoriesMenu(true);
  };

  const handleAccessoriesMenuToggleOff = () => {
    setShowAccessoriesMenu(false);
  };

  return (
    <section className='sticky top-0 left-0 z-50'>
      <div className='relative'>
        <div className="w-full bg-fuchsia-50 flex items-center justify-between px-6 py-3">
          <div className="hamburger_container block lg:hidden">
            <CiMenuBurger 
              className="hamburger_icon text-2xl" 
              onClick={handleSidebar} 
            />

            <div 
            className={`
              mobile-navbar lg:hidden min-w-full absolute top-0 left-0 h-[100vh]
              ${showSidebar ? 'hidden' : 'block' }
            `}>
              <div className='before:block before:absolute before:top-0 before:bottom-0 before:w-full before:h-full before:bg-[#00000085]'></div>

              <div className='h-full min-w-[22rem] bg-gray-50 absolute overflow-y-auto'>
                <div className='pt-4 pl-4 pb-6 absolute top-0 left-0'> 
                  <AiOutlineClose 
                    className='text-2xl'
                    onClick={handleSidebar} 
                  />
                </div>

                <div className='pl-4 pr-4 mt-20'>
                  <ul className='pb-8'>
                    <li className='capitalize text-lg pt-2 pb-2 border-t border-x-0 '>all shoes</li>
                    <li className='capitalize text-lg pt-2 pb-2 border-t border-x-0'>
                      <div 
                        className='w-full flex items-center justify-between' 
                        onClick={() => handleIndentedNav(1)}
                      >
                        <p>collections</p> 
                        <AiOutlinePlus 
                          className={`
                            ${showIndentedNav === 1 ? 'rotate-45' : 'rotate-0'}
                          `}
                        />
                      </div>

                      <ul 
                        className={`
                          pl-4 
                          ${showIndentedNav === 1 ? 'block' : 'hidden'}
                        `}
                      >
                        <li className='pt-1 pb-1 text-[.98rem]'>New Arrivals</li>
                        <li className='pt-1 pb-1 text-[.98rem]'>All Shoes</li>
                        <li className='pt-1 pb-1 text-[.98rem]'>Boots</li>
                        <li className='pt-1 pb-1 text-[.98rem]'>Clogs</li>
                        <li className='pt-1 pb-1 text-[.98rem]'>Flats</li>
                        <li className='pt-1 pb-1 text-[.98rem]'>Heels</li>
                        <li className='pt-1 pb-1 text-[.98rem]'>Sandals</li>
                        <l className='pt-1 pb-1 text-[.98rem]'>Sneakers</l>
                      </ul>
                    </li>
                    <li className='capitalize text-lg pt-2 pb-2 border-t border-x-0'>
                      <div 
                        className='flex items-center justify-between w-full'
                        onClick={() => handleIndentedNav(2)}
                      >
                        <p>accessories</p> 
                        <AiOutlinePlus  
                          className={`
                            ${showIndentedNav === 2 ? 'rotate-45' : 'rotate-0'}
                          `}
                        />
                      </div>

                      <ul 
                         className={`
                         pl-4 
                         ${showIndentedNav === 2 ? 'block' : 'hidden'}
                       `}
                      >
                        <li className='pt-1 pb-1 text-[.98rem]'>New Accessories</li>
                        <li className='pt-1 pb-1 text-[.98rem]'>Alpaca Throws</li>
                        <li className='pt-1 pb-1 text-[.98rem]'>Candles + scents</li>
                        <li className='pt-1 pb-1 text-[.98rem]'>Jewelry</li>
                        <li className='pt-1 pb-1 text-[.98rem]'>Nail-Polish</li>
                        <li className='pt-1 pb-1 text-[.98rem]'>Tote bags</li>
                        <li className='pt-1 pb-1 text-[.98rem]'>Pillows</li>
                        <li className='pt-1 pb-1 text-[.98rem]'>Shoe Care</li>
                      </ul>
                    </li>
                    <li className='capitalize text-lg pt-2 pb-2 border-t border-x-0 '>shoemakers</li>
                    <li className='capitalize text-lg pt-2 pb-2 border-t border-x-0 '>contact</li>
                    <li className='capitalize text-lg pt-2 pb-2 border-t border-x-0 '>Log in</li>
                  </ul>

                  <div className='flex items-center bg-white p-2'>
                    <input type="text" placeholder='Search our stores...' className='bg-inherit flex-1 '/>
                    <PiMagnifyingGlassThin />
                  </div>

                  <div className='mt-5 mb-4'>
                    <h5 className='font-body text-2xl capitalize pb-2'>contact</h5>
                    <p className='pb-2'>123-333-4444</p>
                    <p className='pb-2'>support@sols.com</p>
                    <ul className='flex gap-3'>
                      <li><CiFacebook className='text-3xl'/></li>
                      <li><CiInstagram className='text-3xl'/></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="desktop_nav hidden lg:block">
            <ul className="flex">
              <li
                className="flex items-center mr-3 capitalize cursor-pointer h-full"
                onMouseEnter={handleShoesMenuToggleOn}
                
              >
                shoes
                <RiArrowDownSLine className="ml-1" />

                {showShoesMenu && (
                  <div className="megamenu w-full h-[23rem] bg-fuchsia-50 absolute left-0 top-[7.75rem] border border-slate-400 border-solid border-x-0 flex justify-between p-14" onMouseLeave={handleShoesMenuToggleOff}>
                    <div className='w-[40%]'>
                      <div className=' border border-slate-400 border-solid border-x-0 border-t-0 pb-6'> 
                        <h4 className='text-2xl font-body'>Shoes</h4>
                      </div>

                      <div className='flex mt-5'>
                        <ul className='w-[50%]'>
                          <li className='py-1 px-1 hover:bg-fuchsia-100 transition duration-500 cursor-pointer'>New Arrivals</li>
                          <li className='py-1 px-1 hover:bg-fuchsia-100 transition duration-500 cursor-pointer'>All</li>
                          <li className='py-1 px-1 hover:bg-fuchsia-100 transition duration-500 cursor-pointer'>Boots</li>
                          <li className='py-1 px-1 hover:bg-fuchsia-100 transition duration-500 cursor-pointer'>Clogs</li>
                          <li className='py-1 px-1 hover:bg-fuchsia-100 transition duration-500 cursor-pointer'>Flats</li>
                        </ul>
                        <ul className='w-[50%]'>
                          <li className='py-1 px-1 hover:bg-fuchsia-100 transition duration-500 cursor-pointer'>Heels</li>
                          <li className='py-1 px-1 hover:bg-fuchsia-100 transition duration-500 cursor-pointer'>Sandals</li>
                          <li className='py-1 px-1 hover:bg-fuchsia-100 transition duration-500 cursor-pointer'>Sneakers</li>
                        </ul>
                      </div>
                    </div>
                    <div className='w-[25%]'>
                      <ProductContainer></ProductContainer>
                      <h4 className='text-2xl font-body mt-2'>Non -Toxic lip products.</h4>
                      <p className='mt-1'>Stunning shades made for sandal days.</p>
                      <div className='flex items-center mt-2 cursor-pointer'> 
                        <p className='text-sm font-body'>Shop now</p><RiArrowRightSLine className='flex item-center justify-center' />
                      </div>
                    </div>
                  </div>
                )}
              </li>

              <li
                className="flex items-center mr-3 capitalize cursor-pointer"
                onMouseEnter={handleAccessoriesMenuToggleOn}
                
              >
                accessories
                <RiArrowDownSLine className="ml-1" />
                {showAccessoriesMenu && (
                  <div 
                    className="megamenu"
                    onMouseLeave={handleAccessoriesMenuToggleOff}
                  >
                    <div className="megamenu w-full h-[23rem] bg-fuchsia-50 absolute left-0 top-[7.75rem] border border-slate-400 border-solid border-x-0 flex justify-between p-14" onMouseLeave={handleShoesMenuToggleOff}>
                    <div className='w-[40%]'>
                      <div className=' border border-slate-400 border-solid border-x-0 border-t-0 pb-6'> 
                        <h4 className='text-2xl font-body'>Accossories</h4>
                      </div>

                      <div className='flex mt-5'>
                        <ul className='w-[50%]'>
                          <li className='py-1 px-1 hover:bg-fuchsia-100 transition duration-500 cursor-pointer'>New Arrivals</li>
                          <li className='py-1 px-1 hover:bg-fuchsia-100 transition duration-500 cursor-pointer'>All</li>
                          <li className='py-1 px-1 hover:bg-fuchsia-100 transition duration-500 cursor-pointer'>Alpaca Throws</li>
                          <li className='py-1 px-1 hover:bg-fuchsia-100 transition duration-500 cursor-pointer'>Candles + Scents</li>
                          <li className='py-1 px-1 hover:bg-fuchsia-100 transition duration-500 cursor-pointer'>Jewelry</li>
                        </ul>
                        <ul className='w-[50%]'>
                          <li className='py-1 px-1 hover:bg-fuchsia-100 transition duration-500 cursor-pointer'>Non-Toxic Nail Polish</li>
                          <li className='py-1 px-1 hover:bg-fuchsia-100 transition duration-500 cursor-pointer'>Leather Tote Bags</li>
                          <li className='py-1 px-1 hover:bg-fuchsia-100 transition duration-500 cursor-pointer'>Pillows</li>
                          <li className='py-1 px-1 hover:bg-fuchsia-100 transition duration-500 cursor-pointer'>Shoe Care</li>
                        </ul>
                      </div>
                    </div>
                    <div className='w-[25%]'>
                      <ProductContainer></ProductContainer>
                      <h4 className='text-2xl font-body mt-2'>Non -Toxic lip products.</h4>
                      <p className='mt-1'>Stunning shades made for sandal days.</p>
                      <div className='flex items-center mt-2 cursor-pointer'> 
                        <p className='text-sm font-body'>Shop now</p><RiArrowRightSLine className='flex item-center justify-center' />
                      </div>
                    </div>
                  </div>
                  </div>
                )}
              </li>
            </ul>
          </div>

          <div className="logo_container">
            <img src={logo} alt="sols" className="w-40 cursor-pointer" />
          </div>

          <div className="others hidden lg:block">
            <ul className="flex items-center">
              <li className="mr-3 cursor-pointer">Log in</li>
              <li className="mr-3 cursor-pointer">
                Cart<span className="mx-1">(0)</span>
              </li>
              <li className="mr-3 cursor-pointer">
                <PiMagnifyingGlassThin />
              </li>
            </ul>
          </div>

          <div className="block lg:hidden">
            <ul className="flex">
              <li className="mr-3 cursor-pointer">
                <PiMagnifyingGlassThin className='text-2xl'/>
              </li>

              <li className='cursor-pointer'>
                <LiaShoppingBagSolid className='text-2xl' />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;