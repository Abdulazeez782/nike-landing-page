import React from 'react'

const Button = ({label, iconUrl, backgoundColor, textColor, borderColor, fullWidth}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 transform transition-transform hover:scale-105 py-4 border font-montserrat text-lg leading-none rounded-full
    ${backgoundColor 
    ? `${backgoundColor} ${textColor} ${borderColor}` 
    : "bg-coral-red text-white border-coral-red" } ${fullWidth && "w-full"}`
    }>
        {label}
        
        {iconUrl && <img    
            src={iconUrl}
            alt='arrow-right-icon'
            className='ml-2 rounded-full h-5 w-5'
        />}
    </button>
  )
}

export default Button