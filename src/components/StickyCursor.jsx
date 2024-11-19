import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useVelocity } from "framer-motion";
import "./StickyCursor.scss";

export default function StickyCursor({arrowArea}) {
    
    const [isArrow, setIsArrow] = useState(false);

    const cursorSize = isArrow ? 40 : 15;
    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0),
    }

    const smoothOptions = { damping: 20, stiffness: 400, mass: 0.2 }
    const smoothMouse = {
        x: useSpring(mouse.x, smoothOptions),
        y: useSpring(mouse.y, smoothOptions),
    }

    const manageMouseMove = e => {
        const { clientX, clientY } = e;
        const { left, top, height, width } = arrowArea.current.getBoundingClientRect();
        
        const center = {x: left + width / 2, y: top + height / 2};

        if(isArrow) {
            const distance = {x: clientX - center.x, y: clientY - (cursorSize / 2) - center.y};

            mouse.x.set((center.x - cursorSize / 2) + (distance.x / 10));
            mouse.y.set((center.y - cursorSize / 2) + (distance.y / 10));
        } else {
            mouse.x.set(clientX - cursorSize / 2);
            mouse.y.set(clientY - cursorSize / 2);
        }
    }

    const manageMouseOver = e => {
        setIsArrow(true);
    }

    const manageMouseLeave = e => {
        setIsArrow(false);
    }


    useEffect(() => {
        arrowArea.current.addEventListener("mouseover", manageMouseOver);
        arrowArea.current.addEventListener("mouseleave", manageMouseLeave);
        window.addEventListener("mousemove", manageMouseMove);
        return () => {
            window.removeEventListener("mousemove", manageMouseMove);
            arrowArea.current.removeEventListener("mouseover", manageMouseOver);
            arrowArea.current.removeEventListener("mouseleave", manageMouseLeave);
        }
    }, [isArrow]);
    
    return (
        <div className='cursor-container'>
            <motion.div
            style={{
                left: smoothMouse.x,
                top: smoothMouse.y,
            }} 
            className={`cursor ${isArrow ? "arrow" : ""}`}
            />
        </div>
    )
}
