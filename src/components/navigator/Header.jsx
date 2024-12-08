import React from 'react'
import './Header.scss'
import { useScroll, motion, useTransform, useSpring } from "motion/react"


export default function Header({ sections }) {
    const { scrollYProgress } = useScroll();
    const scrollY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    const handleClick = (index) =>{
        sections[index].current.scrollIntoView({ behavior: 'smooth' });
    }

    const yPercentage1 = useTransform(scrollY, [0, 1], ['0%', '100%']);
    const yPercentage2 = useTransform(scrollY, [0, 1], ['100%', '0%']);
    return (
        <header className='header'>
            <div className="background-effect" />
            <div className="header-container">
                <div className="logo">
                    <img className="logo-image" src="/shadertest/aarontes2t.png" alt="Logo" />
                </div>
                <div className="cubes">
                    <div className="cube" id="hero" onClick={() => handleClick(0)}>
                        <motion.div className="fill" style={{
                            y: yPercentage1,
                        }}></motion.div>
                    </div>
                    <div className="cube" id="about" onClick={() => handleClick(1)}>
                        <motion.div className="fill" style={{
                            y: yPercentage2,
                        }}></motion.div>
                    </div>
                </div>
            </div>
        </header>
    )
}
