// import { Variants } from "framer-motion";


// export const fadeIn = (direction) => ({
//     y: 0,
//     opacity: 1,
    
//     hidden: direction === 'up' ? { y: ' -100%', opacity: 0 } : { y: '100%', opacity: 0 },
//     show: direction === 'up' ? { y: 0, opacity: 1 } : { y: 0, opacity: 1 },
//     exit: direction === 'up' ? { y: '-100%', opacity: 0 } : { y: '100%', opacity: 0 },
//   transition: {
//         type: "tween",
//       duration: 0.8

//     },
// })

export const staggerContainer = {
    hidden: {opacity: 0},
    animate: {
        opacity: 1,
        transition: {
           staggerChildren: 0.1,
                delayChildren: 0.3,
        }
    }
}
export const fadeLeft = {
    hidden: {
        opacity:0,
        x: -160
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            ease: [0.455, 0.03, 0.515, 0.955],
            duration: 1
        }
    }
}
export const logoAnimation = {
    hidden: {
        opacity: 0,
        y: -60
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'tween',
            duration: 0.7
        }
    }
}
export const fadeIn = {
    hidden: {
        opacity: 0,
        x: 160
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1 
        }
    }
}
export const homeImg = {
    hidden: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: 1.9
        }
    }
}
export const letter = {
    hidden: {
        x: '50vw'
    },
    animate: {
        x: 0,
        transition: {
            duration: 1,
            delay: 0.9
        }
    }
}
export const fadeUp = {
    hidden: {
        opacity: 0,
        y: 60,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            delay: 0.6
        }
    }
}
export const fadeUpProject = {
    hidden: {
        opacity: 0,
        y: 60,
    },
    animate: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            delay: 0.1 * index
        }
    })
}
// export const navVariants = {
//     hidden: {
//         opacity: 0,
//         y: 50,
//         transition: {
//             type: 'tween',
//             stiffness: 300,
//             damping: 140
//         }
//     },
//     show: {
//         opacity: 1,
//         y: 0,
//         transition: {
//             type: 'tween',
//             stiffness: 80,
//             delay: 0.5
//         }
//     }
// }

