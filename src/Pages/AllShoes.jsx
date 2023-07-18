import {useState} from 'react'
import NewsletterSection from '../Components/NewsletterSection'
import { shoeProducts } from '../Backend/db/products'


const AllShoes = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const handleImageToggle = (product) => {
    setHoveredProduct(product);
  };

  return (
    <section className='w-full pt-5'>
      <div className='w-full mb-10 after:absolute after:block after:w-7 after:bg-black after:h-1 after:left-2/4 after:transform after:-translate-x-1/2'>
        <h1 className='text-2xl md:text-3xl text-center font-body py-2'>Women's shoes</h1>
      </div>

      <div className='w-full flex justify-center pl-7 pr-7'>
        <div className='products-display-container flex w-[100%] flex-wrap gap-[5%]'>
        {shoeProducts.map((product) => (
            <div key={product.name} className='w-[30%] pb-5'>
              <div className=''>
                <div
                  // className={`display-image-section ${hoveredProduct === product ? 'hovered' : ''}`}
                  onMouseEnter={() => handleImageToggle(product)}
                  onMouseLeave={() => handleImageToggle(null)}
                >
                  <img
                    src={product.images[hoveredProduct === product ? 1 : 0]}
                    alt={product.name}
                    className='w-full'
                  />
                </div>
                <div className='flex justify-between items-center pt-2 pb-2'>
                  <p className='capitalize text-xl font-2xl'>{product.name}</p>
                  <p className='font-body text-xl'>{`$${product.price}`}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <NewsletterSection/>
    </section>
  )
}

export default AllShoes
