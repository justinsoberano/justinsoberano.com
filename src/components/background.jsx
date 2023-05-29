import React, { useRef, useEffect } from "react";
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import { Effects, OrbitControls } from "@react-three/drei";
import { LetterI, LetterJ, LetterU, 
         LetterS, LetterT, LetterN } from "../meshes/letterMeshes";
import { FilmPass } from "/node_modules/three/examples/jsm/postprocessing/FilmPass.js";
import { useSpring, animated, to } from "@react-spring/three";

extend({ FilmPass })

function Controls() {
    const {gl, camera} = useThree();
    useSpring({
        from: { z: 5 },
        to: { z: 8 },
        onFrame: ({ z }) => {
            camera.position.z = z;
        }
    })
}

export default function Background() {
    return (
        <Canvas>
            {/* <Camera position={[0,0,8]}/> */}
            /* Background color */
            <color attach={"background"} args={["rgb(210, 210, 212)"]} />
            /* Grid for letter placement */
            {/* <gridHelper args={[100, 100, 100]} rotation-x={Math.PI / 2} /> */}
            <EffectsComposer />
            <Lighting />
            <Letters />
        </Canvas>
    );  
}
const Letters = () => {
    return (
        <group>
            <LetterJ />
            <LetterU />
            <LetterS />
            <LetterT />
            <LetterI />
            <LetterN />
        </group>
    );
}
const Lighting = () => {
    return (
        <group>
            <ambientLight intensity={0.4} />
            <spotLight position={[10, 15, 10]} angle={0.4} />
        </group>
    )
}
const EffectsComposer = () => {
    return (
        <group>
            <Effects>
                <filmPass attachArray={"passes"} args={[0.15, 0, 2048, false]} />
            </Effects>
        </group>
    )
}