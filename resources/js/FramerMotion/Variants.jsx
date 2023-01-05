// import { Variants } from "framer-motion";

export const fadeIn = (direction) => ({
    y: 0,
    opacity: 1,
    
    hidden: direction === 'up' ? { y: ' -100%', opacity: 0 } : { y: '100%', opacity: 0 },
    show: direction === 'up' ? { y: 0, opacity: 1 } : { y: 0, opacity: 1 },
    exit: direction === 'up' ? { y: '-100%', opacity: 0 } : { y: '100%', opacity: 0 },
  transition: {
        duration: 2,
        type: "tween",
      duration: 0.8

    },
})

export const staggerContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.5,
            delayChildren: 0.7
        }
    }
}

export const navVariants = {
    hidden: {
        opacity: 0,
        y: 50,
        transition: {
            type: 'tween',
            stiffness: 300,
            damping: 140
        }
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'tween',
            stiffness: 80,
            delay: 0.5
        }
    }
}