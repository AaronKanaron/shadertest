import { Canvas } from '@react-three/fiber';
import Model from './Model';
import { Environment } from "@react-three/drei";
import { EffectComposer, Bloom } from '@react-three/postprocessing';

export default function Scene() {
    return (
        <Canvas className="canvas"  > {/*style={{background: "#020400"}}*/}
            <Model />
            <directionalLight intensity={0.0} position={[0, 2, 3]} />
            <EffectComposer>
                <Bloom intensity={.01}/>
            </EffectComposer>
            {/* <spotLight intensity={0} position={[2, 2, 5]} /> */}
            {/* <Environment preset='city' /> */}
        </Canvas>
    )
}