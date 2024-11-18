import React from 'react'
import { motion } from 'framer-motion'

const transition = {
    ease: [0.33, 1, 0.68, 1]
}

export const SplitText = ({ children, ...rest }) => {
    let words = children.split(' ')

    const container = {
        animate: {
            transition: {
                delayChildren: 0.6,
                staggerChildren: 0.04,
                staggerDirection: 1,
            }
        }
    }

    const child = {
        initial: {
            y: "100%",
        },
        animate: {
            y: 0,
            transition: { duration: 1, ...transition }
        }
    }

    return (
        <motion.div
            variants={container}
            initial="initial"
            animate="animate"
            style={{ display: 'inline-block' }}
        >
            {words.map((word, i) => (
                <div
                    key={children + i}
                    style={{ display: 'inline-block', overflow: 'hidden' }}
                >
                    <motion.span
                        variants={child}
                        style={{ display: 'inline-block', willChange: 'transform' }}
                    >
                        {word + (i !== words.length - 1 ? '\u00A0' : '')}
                    </motion.span>
                </div>
            ))}
        </motion.div>
    )
}