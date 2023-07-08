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
    <div className='relative'>
      <div className="w-full bg-fuchsia-50 sticky top-0 left-0 z-50 flex items-center justify-between px-6 py-3">
        <div className="hamburger_container hidden">
          <CiMenuBurger className="hamburger_icon" />
        </div>

        <div className="desktop_nav">
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
                        <li className='py-1 hover:bg-fuchsia-100 transition duration-500 cursor-pointer'>New Arrivals</li>
                        <li className='py-1 hover:bg-fuchsia-100 transition duration-500 cursor-pointer'>All</li>
                        <li className='py-1 hover:bg-fuchsia-100 transition duration-500 cursor-pointer'>Boots</li>
                        <li className='py-1 hover:bg-fuchsia-100 transition duration-500 cursor-pointer'>Clogs</li>
                        <li className='py-1 hover:bg-fuchsia-100 transition duration-500 cursor-pointer'>Flats</li>
                      </ul>
                      <ul className='w-[50%]'>
                        <li className='py-1 hover:bg-fuchsia-100 transition duration-500 cursor-pointer'>Heels</li>
                        <li className='py-1 hover:bg-fuchsia-100 transition duration-500 cursor-pointer'>Mules</li>
                        <li className='py-1 hover:bg-fuchsia-100 transition duration-500 cursor-pointer'>Sandals</li>
                        <li className='py-1 hover:bg-fuchsia-100 transition duration-500 cursor-pointer'>Sneakers</li>
                      </ul>
                    </div>
                  </div>
                  <div className='w-[25%]'>
                    {/* <img src={products} alt="products" className='w-[100px]'/> */}
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
                        <li className='py-1 hover:bg-fuchsia-100 transition duration-500 cursor-pointer'>New Arrivals</li>
                        <li className='py-1 hover:bg-fuchsia-100 transition duration-500 cursor-pointer'>All</li>
                        <li className='py-1 hover:bg-fuchsia-100 transition duration-500 cursor-pointer'>Alpaca Throws</li>
                        <li className='py-1 hover:bg-fuchsia-100 transition duration-500 cursor-pointer'>Candles + Scents</li>
                        <li className='py-1 hover:bg-fuchsia-100 transition duration-500 cursor-pointer'>Gifts</li>
                        <li className='py-1 hover:bg-fuchsia-100 transition duration-500 cursor-pointer'>Jewelry</li>
                      </ul>
                      <ul className='w-[50%]'>
                        <li className='py-1 hover:bg-fuchsia-100 transition duration-500 cursor-pointer'>Non-Toxic Nail Polish</li>
                        <li className='py-1 hover:bg-fuchsia-100 transition duration-500 cursor-pointer'>Leather Tote Bags</li>
                        <li className='py-1 hover:bg-fuchsia-100 transition duration-500 cursor-pointer'>Pillows</li>
                        <li className='py-1 hover:bg-fuchsia-100 transition duration-500 cursor-pointer'>Shoe Care</li>
                      </ul>
                    </div>
                  </div>
                  <div className='w-[25%]'>
                    {/* <img src={products} alt="products" className='w-[100px]'/> */}
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

        <div className="others">
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

        <div className="hidden">
          <ul className="flex">
            <li className="mr-3 cursor-pointer">
              <PiMagnifyingGlassThin />
            </li>

            <li className='cursor-pointer'>
              <LiaShoppingBagSolid />
            </li>
          </ul>
        </div>
      </div>

      {/* <div className='meganmenu-container absolute top-0'>
        <div className="megamenu w-full h-[20rem] bg-slate-400">
                  
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;