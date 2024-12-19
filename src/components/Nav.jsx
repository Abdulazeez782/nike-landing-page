import { headerLogo, iconClose } from '../assets/images/'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

const Nav = () => {
const [nav, setNav] = useState(false);
const location = useLocation();

const isHomePage = location.pathname === '/';

useEffect(() => {
    const handleResize = () => {
        if(window.innerWidth > 1024) {
            setNav(true)
        } else {
            setNav(false)
        }
    }


handleResize();

window.addEventListener("resize", handleResize)

return () => removeEventListener("resize", handleResize);
}, []);


  return (
    <header className='padding-x py-8 absolute z-30 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href='/'>
            <img  
                src={headerLogo}
                alt="logo"
                width={130}
                height={29}
            />
            </a>

            {isHomePage && 
                <AnimatePresence>
                    {nav && 
                        <motion.ul 
                            initial={{opacity: 0, translateY: -50}}
                            animate={{opacity: 1, translateY: 0}}
                            exit={{opacity: 0,  translateY: 50}}
                            transition={{duration: 0.6, ease: "circIn"}}
                            className={`flex-1 flex justify-center items-center gap-16 custom-sidebar ${(nav) ? "max-lg:block" : "max-lg:hidden"}`}>
                            {
                                navLinks.map((item) => (
                                    <li key={item.label}>
                                        <a
                                        href={item.href}
                                        className='font-montserrat inline-block leading-normal text-lg text-slate-gray max-lg:text-white max-lg:hover:text-slate-gray max-lg:mb-6'
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))
                            }
                        </motion.ul>
                    }                
                </AnimatePresence>
            }
            
            
            {isHomePage && 
                <div className='hidden max-lg:block'>
                    <img 
                        src={(nav) ? iconClose : hamburger}
                        alt='hamburger'
                        width={25}
                        height={25}
                        onClick={() => setNav(!nav)}    
                    />
                </div>
            }
            
        </nav>
    </header>
  )
}

export default Nav