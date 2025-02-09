import React from 'react'
import { star } from '../assets/icons'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { scaleImage } from '../utilities/animations'

const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
        <motion.img {...scaleImage} src={imgURL} alt={name} className='w-[250px] h-[280px]'/>
        <div className='mt-8 flex justify-start gap-2.5 '>
            <img src={star} alt='rating' width={24} height={24} />
            <p className='font-montserrat text-xl leading-normal text-slate-gray'>{4.5}</p>
        </div>
        <Link to={`/product/${name}`} className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>
          {name}
        </Link>
        <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>{price}</p>
    </div>
  )
}

export default PopularProductCard