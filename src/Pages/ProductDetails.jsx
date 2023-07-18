import { useState } from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';
import { AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { displayImage } from '../Backend/db/products';
import NewsletterSection from '../Components/NewsletterSection';

const ProductDetails = () => {
  const [showDetails, setShowDetails] = useState({});

  const handleShowDetails = (item) => {
    setShowDetails((prevDetails) => {
      return {
        ...prevDetails,
        [item]: !prevDetails[item],
      };
    });
  };

  return (
    <section className='p-5'>
      <div className='breadcrumbs flex items-center mb-5 mt-2'>
        <Link className='flex item-center cursor-pointer'>Home</Link>
        <RiArrowRightSLine className='flex item-center' />
        <Link className='flex item-center cursor-pointer'>Women's shoes</Link>
        <RiArrowRightSLine className='flex item-center cursor-pointer' />
        <Link className='flex item-center cursor-pointer'>Frankie</Link>
      </div>

      <div className='w-full flex flex-col lg:flex-row'>
        <div className='w-[100%] lg:w-[60%]'>
          <img src={displayImage} alt='displayImage' className='w-full' />
        </div>
        <div className='w-[100%] lg:w-[40%] p-4'>
          <div className='border-b pb-3 flex items-end'>
            <h1 className='text-3xl font-body capitalize mr-4'>frankie</h1>
            <p className='font-body text-lg text-gray-700'>$230</p>
          </div>

          <div className='mb-3'>
            <h1 className='mb-2 font-body'>Size</h1>
            <div>
              <button className='border py-1 px-3 hover:border-black mr-3 mb-3'>35</button>
              <button className='border py-1 px-3 hover:border-black mr-3 mb-3'>36</button>
              <button className='border py-1 px-3 hover:border-black mr-3 mb-3'>37</button>
              <button className='border py-1 px-3 hover:border-black mr-3 mb-3'>38</button>
              <button className='border py-1 px-3 hover:border-black mr-3 mb-3'>39</button>
              <button className='border py-1 px-3 hover:border-black mr-3 mb-3'>40</button>
              <button className='border py-1 px-3 hover:border-black mr-3 mb-3'>41</button>
              <button className='border py-1 px-3 hover:border-black mr-3 mb-3'>42</button>
            </div>
          </div>

          <p>Free shipping in the US on orders over $150</p>

          <div className='w-full mt-5 pb-5 border-b'>
            <button className='w-full bg-gray-100 py-3 mb-7'>Add to cart</button>
            <button className='w-full bg-gray-100 py-3'>Checkout</button>
          </div>
        </div>
      </div>

      <div className='w-[100%] lg:w-[60%] mt-10'>
        <ul className='w-full'>
          <li>
            <div
              className='w-full flex items-center justify-between px-2 py-4 border-t cursor-pointer'
              onClick={() => handleShowDetails(1)}
            >
              <h5 className='font-body text-2xl'>Description</h5>
              <AiOutlinePlus
                className={`transform ${showDetails[1] ? 'rotate-45' : ''}`}
              />
            </div>

            <div
              className={`px-2 pb-10 ${showDetails[1] ? 'block' : 'hidden'}`}
            >
              <p className='text-sm'>
                An elevated, yet functional, low clog sandal with a criss-cross upper that hugs your foot and features a gentle incline for wear-all-day comfort.
              </p>
            </div>
          </li>
          <li>
            <div
              className='w-full flex items-center justify-between px-2 py-4 border-t cursor-pointer'
              onClick={() => handleShowDetails(2)}
            >
              <h5 className='font-body text-2xl'>Fit</h5>
              <AiOutlinePlus
                className={`transform ${showDetails[2] ? 'rotate-45' : ''}`}
              />
            </div>

            <div
              className={`px-2 pb-10 ${showDetails[2] ? 'block' : 'hidden'}`}
            >
              <p className='text-sm'>
                This style runs true to size. If you're in between sizes or have a narrow foot, we recommend sizing down. Check out our fit guide for your size recommendation.
              </p>
            </div>
          </li>
          <li>
            <div
              className='w-full flex items-center justify-between px-2 py-4 border-t cursor-pointer'
              onClick={() => handleShowDetails(3)}
            >
              <h5 className='font-body text-2xl'>Details</h5>
              <AiOutlinePlus
                className={`transform ${showDetails[3] ? 'rotate-45' : ''}`}
              />
            </div>

            <div
              className={`px-2 pb-10 ${showDetails[3] ? 'block' : 'hidden'}`}
            >
              <p className='text-sm'>
                This style runs true to size. If you're in between sizes or have a narrow foot, we recommend sizing down. Check out our fit guide for your size recommendation.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <NewsletterSection />
    </section>
  );
};

export default ProductDetails;