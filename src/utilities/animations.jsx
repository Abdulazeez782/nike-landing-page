export const sectionFadeIn =  {
    initial: {translateY: 50, scale: 0.8, opacity: 0.8},  
    whileInView: {translateY: 0, scale: 1, opacity: 1},
    transition: {duration: 1, ease: "easeIn", delay: 0.2}, 
}

export const scaleImage = {
    whileHover: {scale: 1.1},
    transition: {duration: 0.4, ease: "easeInOut"}
}