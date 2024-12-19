import React from 'react'
import Button from '../components/Button'
import { motion } from 'framer-motion'
import { scaleImage } from '../utilities/animations'

const ProductDetails = ({imgBig, productName, productPrice, ProductDetails}) => {
  return (
    <div className='w-full flex flex-col xl:flex-row justify-between min-h-screen gap-10 max-container pt-8'>
        <div className='p-2'>
            <motion.img {...scaleImage} src={imgBig} width={550} height={100} className=''/>                
        </div>

        <div className='xl:w-2/5'>
            <h2 className='lg:text-4xl text-3xl font-palanquin font-bold'>{productName}</h2>
            <h3 className='lg:text-3xl text-2xl mt-1'>{productPrice}</h3>
            <p className='info-text mt-6'>{ProductDetails}</p>
            <div className='mt-20'>
                <Button label={"Buy Now"}/>
            </div>
            
        </div>
</div>
  )
}

export default ProductDetails