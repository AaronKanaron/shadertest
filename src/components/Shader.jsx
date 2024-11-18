import { motion } from 'framer-motion'
import React, { useEffect, useState, useRef } from 'react'
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import * as THREE from "three"

// const useZoomEffect = (scrollY, minZoom, maxZoom) => {
//     const ref = useRef()

//     useEffect(() => {
//         // if (!ref.current) return;

//         const canvas = ref.current;
//         const scene = canvas.__r3f?.scene;
//         const camera = canvas.__r3f?.camera;

//         if (!scene || !camera) { print('no scene or camera'); return; };

//         print('scene', scene);

//     }, [scrollY])
// }

const SmoothShaderGradient = ({ scrollY}) => {
    const canvasRef = useRef();


    // const [zoom, setZoom] = useState(15.1);
  
    useEffect(() => {
        // const targetZoom = 15.1 - (scrollY * 0.01);
        // const newZoom = zoom + (targetZoom - zoom) * 0.1;
        // setZoom(newZoom);

        const container = canvasRef.current;
        if (!container) { console.log('no container'); return; };

        const scene = container.__r3f;
        console.log('scene', scene);

    }, [scrollY]);

    return (
        <ShaderGradientCanvas
            style={{
                position: 'fixed',
                zIndex: 1,
                top: 0,
                // pointerEvents: 'none',
                backgroundColor: 'black',
            }}
            pixelDensity={0.9}
            ref={canvasRef}
        >
            {/* <ShaderGradient
            control='props'
    
            type='waterPlane'
            grain='on'

            uStrength={2}
            uDensity={1}

            brightness={2}

            color1='#5b9bff'
            color2='#003894'
            color3='#000000'
            uSpeed={0.1}
              // reflection={0.5}
            // lightType='env'
            // envPreset='city'
            /> */}
            {/* <ShaderGradient
                control='props'
                
                type='sphere'
                uStrength={0.3}
                uDensity={0.8}
                grain='on'
                uFrequency={5}
                uAmplitude={9}
                
                color1='#5606FF'
                color2='#FE8989'
                color3='#000000'
                
                envPreset='city'
                lightType='env'
                brightness={0.5}
                
        
                // cameraZoom={10.1 - (scrollY * 6)}
                cameraZoom={5.1}
                // cameraZoom={5.1}
                cAzimuthAngle={290}
                cPolarAngle={20}
                
                uSpeed={0.5}
                positionX={0.0}
                rotationY={130}
                rotationZ={70}
            /> */}
            <ShaderGradient
                control='props'
                
                type='sphere'
                uStrength={0.5}
                uDensity={0.3}
                grain='on'
                uFrequency={12}
                uAmplitude={4}
                
                color1='#5606FF'
                color2='#FE8989'
                color3='#000000'
                
                envPreset='city'
                lightType='env'
                // brightness={3}
                // reflection={2}
                
        
                // cameraZoom={10.1 - (scrollY * 6)}
                cameraZoom={15.1}
                // cameraZoom={5.1}
                cAzimuthAngle={290}
                cPolarAngle={20}
                
                uSpeed={0.1}
                positionX={0.0}
                rotationY={130}
                rotationZ={70}
            />
        </ShaderGradientCanvas>
    )
}

export default SmoothShaderGradient

// export const MotionShader = motion(Shader)

