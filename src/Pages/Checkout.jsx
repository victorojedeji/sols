import {useState} from 'react'
import { Link } from 'react-router-dom';
import { 
  RiArrowLeftSLine,
 } from "react-icons/ri" ;

const Checkout = () => {

  const [selectedOption, setSelectedOption] = useState('Ship');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  
  return (
    <section className=''>
      <div className='w-full mb-10 after:absolute after:block after:w-7 after:bg-black after:h-1 after:left-2/4 after:transform after:-translate-x-1/2'>
        <h1 className='text-2xl md:text-3xl text-center font-body py-2'>Checkout</h1>
      </div>

      <div className='w-full'>
        <div className='w-[50%] pl-20 pr-10'>
          <h3 className='text-xl font-body mb-1'>Contact</h3>
          <p>Victor Ojedeji (ojedejivictordaniel@gmail.com)</p>
          <Link to='#' className='block mb-5'>
            <p className='underline'>Logout</p>
          </Link>

          <div>
            <h3 className='text-xl font-body mb-1'>Delivery Method</h3>
            <div>
              <label className='mr-10 font-body'>
                <input
                  type="radio"
                  value="Ship"
                  checked={selectedOption === 'Ship'}
                  onChange={handleOptionChange}
                  className='mr-1'
                />
                Ship
              </label>
              
              <label className='mr-10 font-body'>
                <input
                  type="radio"
                  value="Pick up"
                  checked={selectedOption === 'Pick up'}
                  onChange={handleOptionChange}
                  className='mr-1'
                />
                Pick up
              </label>

              {selectedOption === 'Pick up' ? (
                <div className='min-h-[80vh] mt-5'>
                  <h5>Pick up</h5>
                  
                </div>
              ) : (
                <div className='min-h-[80vh] mt-5'>
                  <h5 className='mb-3 text-xl font-body'>Shipping Address</h5>
                  <label className='mb-3 block'>
                    Address
                    <input type="text" placeholder='Address...' className='block border px-1 py-2 w-full'/>
                  </label>

                  <label className='mb-3 block'>
                    Country/Region
                    <input type="text" placeholder='Country Or Region...' className='block border px-1 py-2 w-full'/>
                  </label>

                  <div className='flex mb-3 block justify-between'>
                    <label className='w-[47%]'>
                      First Name
                      <input type="text" placeholder='First Name...' className='block w-full border px-1 py-2 '/>
                    </label>
                    <label className='w-[47%]'>
                      Last Name
                      <input type="text" placeholder='Last Name...' className='block w-full border px-1 py-2 '/>
                    </label>
                  </div>

                  <label className='mb-3 block'>
                    Phone
                    <input type="phone" placeholder='Phone' className='block border px-1 py-2 w-full'/>
                  </label>

                  <div className='flex mb-5 block justify-between'>
                    <label className='w-[30%]'>
                      City
                      <input type="text" placeholder='City...' className='block border px-1 py-2 w-full'/>
                    </label>
                    <label className='w-[30%]'>
                      State
                      <input type="text" placeholder='State...' className='block border px-1 py-2 w-full'/>
                    </label>
                    <label className='w-[30%]'>
                      ZIP Code
                      <input type="text" placeholder='ZIP Code...' className='block border px-1 py-2 w-full'/>
                    </label>
                  </div>

                  <div className='flex justify-between items-center'>
                    <button className=' flex items-center'><RiArrowLeftSLine/>Return To Cart</button>
                    <button className='py-2 px-6 border bg-sky-400 text-white'>Continue To Shipping</button>
                  </div>
                </div>
              )}
              </div>
          </div>
        </div>

        <div className='w-[50%] pr-20 pl-10 bg-slate-300'>

        </div>
      </div>
    </section>
  )
}

export default Checkout
