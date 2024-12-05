import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useVelocity } from "framer-motion";
import "./StickyCursor.scss";
import { animate, transform } from 'motion';

export default function StickyCursor() {
    const cursorSize = 15;
    const cursor = useRef(null);

    // const scale = {
    //     x: useMotionValue(1),
    //     y: useMotionValue(1),
    // }
    
    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0),
    }

    const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 }
    const smoothMouse = {
        x: useSpring(mouse.x, smoothOptions),
        y: useSpring(mouse.y, smoothOptions),
    }
    

    const manageMouseMove = e => {
        const { clientX, clientY } = e;
        
        mouse.x.set(clientX - cursorSize / 2);
        mouse.y.set(clientY - cursorSize / 2);
    }

    const manageMousePress = () => {
        animate(cursor.current, {
            scale: 1.5,
        }, {
            duration: 0.05
        }, {
            type: "spring",
            stiffness: 200,
            damping: 10,
        });
    }

    const manageMouseRelease = () => {
        animate(cursor.current, {
            scale: 1,
        }, {
            duration: 0.2
        }, {
            ease: "easeIn"
        });
    }

    useEffect(() => {
        window.addEventListener("mousemove", manageMouseMove);
        window.addEventListener("mousedown", manageMousePress);
        window.addEventListener("mouseup", manageMouseRelease);
        return () => {
            window.removeEventListener("mousemove", manageMouseMove);
        }
    }, []);
    
    return (
        <div className='cursor-container'>
            <motion.div
            style={{
                left: smoothMouse.x,
                top: smoothMouse.y,
            }} 
            className={`cursor`}
            ref={cursor}
            />
        </div>
    )
}
