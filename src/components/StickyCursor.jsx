import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useVelocity } from "framer-motion";
import "./StickyCursor.scss";
import { animate, transform } from 'motion';

export default function StickyCursor({stickyElement}) {
    const [isHovered, setIsHovered] = useState(false);

    const cursorSize = {x: isHovered ? stickyElement.current.getBoundingClientRect().width / 3: 20,
                        y: isHovered ? stickyElement.current.getBoundingClientRect().height / 3: 20};
    // const cursorSize = {x: isHovered ? 60: 20,
    //                     y: isHovered ? 60: 20};
    const cursor = useRef(null);
    
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
        const { left, top, height, width } = stickyElement.current.getBoundingClientRect();

        const center = {x: left + width / 2, y: top + height / 2};

        if (isHovered) {
            const distance = {x: clientX - center.x, y: clientY - center.y};

            // const newScaleX = transform(absDistance, [0, height / 2], [1, 1.3])
            // const newScaleY = transform(absDistance, [0, width / 2], [1, .8])
            // transforms.x.set(newScaleX);
            // transforms.y.set(newScaleY);
            // rotate(distance ,newScaleX, newScaleY);


            mouse.x.set((center.x - cursorSize.x / 2) + (distance.x * 0.1))
            mouse.y.set((center.y - cursorSize.y / 2) + (distance.y * 0.1))
        } 
        else {
            mouse.x.set(clientX - cursorSize.x / 2);
            mouse.y.set(clientY - cursorSize.y / 2);
        }
    }

    const manageMouseOver = e => {
        setIsHovered(true);
    }

    const manageMouseLeave = e => {
        setIsHovered(false);
        // animate(cursor.current, { scaleX: 1, scaleY: 1 }, {duration: 0.1}, { type: "spring" })
    }

    const manageMousePress = () => {
        animate(cursor.current, {
            scale: 1.2,
        }, {
            duration: 0.1
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
        stickyElement.current.addEventListener("mouseenter", manageMouseOver);
        stickyElement.current.addEventListener("mouseleave", manageMouseLeave);
        window.addEventListener("mousemove", manageMouseMove);
        window.addEventListener("mousedown", manageMousePress);
        window.addEventListener("mouseup", manageMouseRelease);
        return () => {
            window.removeEventListener("mousemove", manageMouseMove);
            window.removeEventListener("mousedown", manageMousePress);
            window.removeEventListener("mouseup", manageMouseRelease);
            stickyElement.current.removeEventListener("mouseenter", manageMouseOver);
            stickyElement.current.removeEventListener("mouseleave", manageMouseLeave);
        }
    }, [isHovered]);
    
    
    const template = ({rotate, scaleX, scaleY}) => {
        console.log("Rotate", rotate)
        console.log("ScaleX", scaleX)
        console.log("ScaleY", scaleY)
        return `rotate(${rotate}) scaleX(${scaleX}) scaleY(${scaleY})` 
    }
    
    return (
        <div className='cursor-container'>
            <motion.div
            style={{
                left: smoothMouse.x,
                top: smoothMouse.y,
            }} 
            animate={{
                width: cursorSize.x,
                height: cursorSize.y,
            }}
            className={`cursor`}
            ref={cursor}
            />
        </div>
    )
}
