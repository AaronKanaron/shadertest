import React from 'react'
import { motion } from 'framer-motion'

const transition = {
    ease: [0.33, 1, 0.68, 1]
}

const wordSplit = {
    animate: {
        transition: {
            delayChildren: 2,
            staggerChildren: 0.04,
            staggerDirection: -1,
        },
    }
}

const wordSplitLetter = {
    initial: {
        y: "100%",
    },
    animate: {
        y: 0,
        transition: { duration: 1, ...transition }
    }
}

export const SplitWord = ({ children, ...rest}) => {
    let letters = children.split('')

    return (
        <motion.span
            variants={wordSplit}
            initial="initial"
            animate="animate"
            style={{ display: 'inline-block', overflow: "hidden" }}
            {...rest}
        >
            {letters.map((letter, i) => (
                <motion.span
                    variants={wordSplitLetter}
                    style={{ display: 'inline-block', willChange: 'transform' }}
                    key={children + i}
                >
                    {/* {letter + (i !== letters.length - 1 ? '\u00A0' : '')} */}
                    {letter}
                </motion.span>
            ))}
        </motion.span>
    )
}