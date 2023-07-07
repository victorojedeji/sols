import React, { useState, useEffect } from 'react';

import vogue from '../Assets/media/vogue.png';
// import cosmopolitan from '../Assets/media/cosmopolitan.png';
import mensjournal from '../Assets/media/mensjournal.png';
import fastcompany from '../Assets/media/fastcompany.png';
import huffingtonpost from '../Assets/media/huffingtonpost.png';

import ratingstars from '../Assets/rating/ratingstars.png';

const mediaData = [
  {
    id: 1,
    img: vogue,
    post: '"Sustainable, ethical shoes that are actually chic."',
  },

  // {
  //   id: 2,
  //   img: cosmopolitan,
  //   post: '"All the producers involved in making the sols products are paid fair-trade wages, receive healtth care, and work in an healthy environment, The brand\'s accessories have a minimal aesthetic that go with basically any outfit."'
  // },

  {
    id: 3,
    img: mensjournal,
    post: '"Sols shoes and boots exude effortless style that\'s rooted in versatility, comfort, and quality."',
  },

  {
    id: 4,
    img: fastcompany,
    post: '"There\'s a backlash against fashion made in counrtries where workers toil in deplorable conditions. Sols wants to keep these workers safe and employed"',
  },

  {
    id: 5,
    img: huffingtonpost,
    post: '"The businesses that practice transparent, ethical and responsible business practices that are embedded into their business models."',
  },
];


const customerData = [
  {
    id: 1,
    rating: ratingstars,
    post: '"High quality, great craftmanship, and extremely comfortable."',
  },
  {
    id: 2,
    rating: ratingstars,
    post: '"Stunningly chic, versatile, and comfortable straight out of the box."',
  },
  {
    id: 3,
    rating: ratingstars,
    post:  '"Hands down one of the best purchases I\'ve made in the last year. They are comfortable and stylish and I get at least one compliment every time I wear them."',
  },
];

const Recognition = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [customerActiveIdx, setCustomerActiveIdx] = useState(0);

  const handleDotClick = (idx) => {
    setActiveIdx(idx);
  };

  const handleCustomerDotClick = (idx) => {
    setCustomerActiveIdx(idx);
  };

  useEffect(() => {
    const mediaTimer = setInterval(() => {
      setActiveIdx((prevIdx) => (prevIdx + 1) % mediaData.length);
    }, 7000);

    const customerTimer = setInterval(() => {
      setCustomerActiveIdx((prevIdx) => (prevIdx + 1) % customerData.length);
    }, 7000);

    return () => {
      clearInterval(mediaTimer);
      clearInterval(customerTimer);
    };
  }, []);

  return (
    <section className="w-full flex items-center mb-14">
      <div className="w-[50%] h-[80vh] bg-gray-500 pt-20 pb-20 pl-10 pr-10">
        <h5 className="text-white font-body text-center mb-10">In The Press</h5>
        <div>
          <div className="flex">
            {mediaData.map((data, idx) => (
              <div
                key={data.id}
                className={`flex flex-col justify-center items-center min-w-[100%] ${
                  activeIdx === idx ? 'block' : 'hidden'
                } transition-opacity duration-500 min-h-[30vh]`}
              >
                <img src={data.img} alt={data.id} className="w-[15rem] pb-5" />
                <p className="text-white text-center">{data.post}</p>
              </div>
            ))}
          </div>
          <div className='w-full relative'>
            <div className="carousel__dots absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {mediaData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  className={`dot ${activeIdx === idx ? 'active' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-[50%] bg-gray-100 h-[80vh] pt-20 pb-20 pl-10 pr-10">
        <h5 className="text-center font-body text-center mb-10">From Our Customers</h5>

        <div>
          <div className="flex">
            {customerData.map((data, idx) => (
              <div
                key={data.id}
                className={`flex flex-col justify-center items-center min-w-[100%] ${
                  customerActiveIdx === idx ? 'block' : 'hidden'
                } transition-opacity duration-500 min-h-[30vh]`}
              >
                <img src={data.rating} alt={data.id} className="w-[15rem] pb-5 invert-[0.7]" />
                <p className="text-center">{data.post}</p>
              </div>
            ))}
          </div>
          
          <div className='w-full relative'>
            <div className="customer_carousel__dots absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {customerData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleCustomerDotClick(idx)}
                  className={`customer_dot ${customerActiveIdx === idx ? 'active' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recognition;