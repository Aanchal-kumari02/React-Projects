import React from 'react'

const Hero = () => {
  return (
      <main className='hero'>
          <div className='hero-content'>
              <h1>YOUR FEET DESERVE THE BEST</h1>
              <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
              <div className='hero-button'>
                  <button className='btn-1'>Shop Now</button>
                  <button className='btn-2'>Category</button>
              </div>
              <div className='shopping'>
                  <p>Available On</p>
                  <div className='brand-icons'>
                    <img src="/src/assets/amazon.png" alt="amazon_logo" />
                    <img src="/src/assets/flipkart.png" alt="flipkart_logo" />
                  </div>
              </div>
          </div>
          <div className='hero-image'>
            <img src="/src/assets/shoe_image.png" alt="shoe" />
          </div>
      </main>
  )
}

export default Hero
