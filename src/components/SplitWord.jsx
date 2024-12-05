import React, { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const transition = {
    ease: [0.33, 1, 0.68, 1]
}

const wordSplit = {
    animate: {
        transition: {
            delayChildren: 0.1,
            staggerChildren: 0.05,
            staggerDirection: 1,
        },
    },
    initial: {
        transition: {
            delayChildren: 0.0,
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    }
}

const wordSplitLetter = {
    initial: {
        y: "100%",
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: { duration: 1, ...transition }
    }
}

export const SplitWord = ({ children, ...rest}) => {
    let letters = children.split('')
    const ref = useRef();
    const isInView = useInView(ref, { once: false, amount: 1, margin: "-100px 0px 0px 0px"});

    useEffect(() => {
        console.log(isInView)
    }, [isInView])

    return (
        <motion.span
            variants={wordSplit}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            style={{ display: "inline-flex", overflowY: "visible", pointerEvents: "none"}}
            {...rest}
            ref={ref}
        >
            {letters.map((letter, i) => (
                <motion.span
                    variants={wordSplitLetter}
                    style={{ display: 'inline-block', willChange: 'transform'}}
                    key={children + i}
                >
                    {/* {letter + (i !== letters.length - 1 ? '\u00A0' : '')} */}
                    {letter}
                </motion.span>
            ))}
        </motion.span>
    )
}