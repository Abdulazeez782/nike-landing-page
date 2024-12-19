import React from 'react'

const AdditonalProductDetails = ({productName, productDetails}) => {
  return (
    <section className='w-full text-left lg:w-[60%] mx-auto'>
      <h3 className='font-bold text-2xl'>{productName}</h3>
      <p className='info-text mt-4'>{productDetails}</p>
    </section>
  )
}

export default AdditonalProductDetails