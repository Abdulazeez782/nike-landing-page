import React from 'react'
import { motion } from 'framer-motion'
import { scaleImage } from '../utilities/animations'

const ProductGallery = ({imgBig}) => {
  return (
    <section className='w-full'>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
        <motion.img {...scaleImage} src={imgBig} className='bg-red-100'/>
        <motion.img {...scaleImage} src={imgBig} className='bg-coral-red'/>
        <motion.img {...scaleImage} src={imgBig} className='bg-coral-red'/>
        <motion.img {...scaleImage} src={imgBig} className='bg-red-100'/>
      </div>
    </section>
  )
}

export default ProductGallery