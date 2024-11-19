import { Canvas } from '@react-three/fiber';
import Model from './Model';
import { Environment } from "@react-three/drei";

export default function Scene() {
    return (
        <Canvas style={{background: "#000000"}} >
            <Model />
            {/* <directionalLight intensity={0} position={[0, 2, 3]} /> */}
            <spotLight intensity={10} position={[2, 2, 5]} />
            <Environment preset='city' />
        </Canvas>
    )
}