// import { Variants } from "framer-motion";

import { animate } from "framer-motion"

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

// export const staggerContainer = {
//     hidden: {},
//     show: {
//         transition: {
//             staggerChildren: 0.5,
//             delayChildren: 0.7
//         }
//     }
// }

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

export const easeing = [0.6, -0.05, 0.01, 0.99]

export const stagger = {
    animate: {
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.2,
            staggerDirection: 1
        }
    }
}

export const fadeInUp = {
    initial: {
        y: -60,
        opacity: 0,
        transition: {
            duration: 0.6, ease:easeing
        }
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            delay: 0.5,
            ease:easeing
        }
    }
}

export const transition = {
    duration: 1.4,
    ease: [0.6, 0.01, -0.05, 0.9]
}

export const firstName = {
    initial: {
        y: -20,
    },
    animate: {
        y: 0,
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.04,
            staggerDirection: 1
        }
    }
}
export const lastName = {
    initial: {
        y: -20,
    },
    animate: {
        y: 0,
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.04,
            staggerDirection: 1
        }
    }
}
export const letter = {
    initial: {
        y: 400,
    },
    animate: {
        y: 0,
        transition: {
            duration: 1,
            ...transition
        }
    }
}
export const btnGroup = {
    initial: {
        y: -60,
        opacity: 0,
        transition: {
            duration: 0.6,
            ease: easeing
        }
    },
    animate: {
        y: 0,
        opacity: 1,
        animation: {
            duration: 0.6,
            ease:easeing
        }
    }
}
export const header = {
    initial: {
        y: 60,
        opacity: 0,
        transition: {
            duration: 0.8,
            ease: easeing
        }
    },
    animate: {
        y: 0,
        opacity: 1,
        animate: {
            duration: 0.9,
            ease: easeing
        }
    }
}
export const fadeLeft = {
    initial: {
        x: -60,
        opacity: 0,
        transition: {
            duration: 0.8,
            ease: easeing
        }
    },
    animate: {
        x: 0,
        opacity: 1,
        animate: {
            duration: 0.9,
            ease: easeing
        }
    }
}
export const fadeRight = {
    initial: {
        x: 100,
        opacity: 0,
        transition: {
            duration: 0.8,
            ease: easeing
        }
    },
    animate: {
        x: 0,
        opacity: 1,
        animate: {
            duration: 0.9,
            ease: easeing
        }
    }
}
export const fade = {
    initial: {
        opacity: 0,
        transition: {
            duration: 1.5,
            ease: easeing
        }
    },
    animate: {
        opacity: 1,
        animate: {
            duration: 1.5,
            ease: easeing
        }
    }
}