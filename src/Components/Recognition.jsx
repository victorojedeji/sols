import React, { useState } from 'react';

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

const Recognition = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const handleDotClick = (idx) => {
    setActiveIdx(idx);
  };

  return (
    <section className="w-full flex items-center mb-14">
      <div className="w-[50%] min-h-[60vh] bg-slate-600 pt-20 pb-20">
        <h5 className="text-white font-body text-center mb-10">In The Press</h5>
        <div>
          <div className="flex">
            {mediaData.map((data, idx) => (
              <div
                key={data.id}
                className={`flex flex-col justify-center items-center min-w-[10rem] ${
                  activeIdx === idx ? 'translate-x-[-10rem]' : 'translate-x-0'
                } transition-transform duration-500`}
              >
                <img src={data.img} alt={data.id} className="w-[15rem] pb-5" />
                <p className="text-white">{data.post}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="carousel__dots">
          {mediaData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`dot ${activeIdx === idx ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>

      <div className="w-[50%]">
        <h5>From Our Customers</h5>
      </div>
    </section>
  );
};

export default Recognition;