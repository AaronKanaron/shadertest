import { motion } from 'framer-motion'
import React from 'react'
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'

export const Shader = React.forwardRef((props, ref) => {
    return (
        <ShaderGradientCanvas
            style={{
                position: 'fixed',
                zIndex: -1,
                top: 0,
                pointerEvents: 'none',
                backgroundColor: 'black',
            }}
            ref={ref}
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
                uStrength={0.3}
                uDensity={0.2}
                grain='on'
                uFrequency={10}
                uAmplitude={9}
                
                color1='#5606FF'
                color2='#FE8989'
                color3='#000000'
                
                envPreset='city'
                lightType='env'
                brightness={0.5}
                
        
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
})

// export const MotionShader = motion(Shader)

