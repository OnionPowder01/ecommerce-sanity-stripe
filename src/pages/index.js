import React from 'react'

const Home = () => {
  return (
    <>
      HeroBanner 

      <div>
        <h1>Best Sellin Products</h1>
        <p>Speakers of many variations</p>
      </div>

      <div>
        {['Product 1', 'Product 2'].map((product) => product)}
      </div>

      Footer 
      </>
  )
}

export default Home