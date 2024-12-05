import React, { useRef, useState, useEffect } from 'react'
import { useGLTF, Text, MeshTransmissionMaterial } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { MeshBasicMaterial, Vector2, Vector4 } from 'three';
// import { useControls } from 'leva'

export default function Model(props) {
    const { nodes } = useGLTF('https://aaronkanaron.github.io/shadertest/aaronpixel.glb');
    const { viewport, size } = useThree();
    const model = useRef(null);

    const [cursor, setCursor] = useState({ x: 0, y: 0 });

    // Update cursor state on mouse move
    useEffect(() => {
        const handleMouseMove = (event) => {
            const scrollX = window.scrollX || 0; // Horizontal scroll offset
            const scrollY = window.scrollY || 0; // Vertical scroll offset
            setCursor({
                x: ((event.clientX + scrollX) / size.width) * 2 - 1, // Normalize with scroll
                y: -((event.clientY + scrollY) / size.height) * 2 + 1, // Normalize with scroll
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        // window.addEventListener("scroll", handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [size]);

    useFrame(() => {
        if (model.current) {
            const targetY = -cursor.y * Math.PI * 0.2;
            const targetZ = -cursor.x * Math.PI * 0.1; 

            model.current.rotation.x += (Math.PI / 2 + targetY - model.current.rotation.x) * 0.1; 
            model.current.rotation.z += (targetZ - model.current.rotation.z) * 0.1;

            model.current.position.y = cursor.y * 0.05;
            model.current.position.x = cursor.x * 0.15;
            // console.log(model.current)

            // model.current.material.uniforms.uMouse.value = cursor;
        }
    });

    const materialProps = {
        thickness: 2,
        // roughness: 0.35,
        roughness: 0.0,
        transmission: 1,
        ior: 1.2,
        chromaticAberration: 0.0,
        backside: true,
    }

    return (
        <group scale={viewport.width / 3.75} {...props} dispose={null}>
            <Text maxWidth={3.52} textAlign="center" font={"https://aaronkanaron.github.io/shadertest/fonts/Italianno-Regular.ttf"} position={[0, 0, -1]} fontSize={0.8} color="white" anchorX="center" anchorY="middle">
                Aaron Clauss Portfolio 2024.
            </Text>
            <mesh ref={model} {...nodes.Text} >
                {/* <MeshTransmissionMaterial {...materialProps} /> */}
                {/* <meshBasicMaterial color={[2,0,0]} toneMapped={false}/> */}
                <meshStandardMaterial emissive="red" emissiveIntensity={15} toneMapped={true} />
            </mesh>
        </group>
    )
}

useGLTF.preload('https://aaronkanaron.github.io/shadertest/aaronpixel.glb')