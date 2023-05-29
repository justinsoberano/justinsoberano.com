import React from "react";
import { Canvas, extend } from "@react-three/fiber";
import { Effects } from "@react-three/drei";
import { LetterI, LetterJ, LetterU, 
         LetterS, LetterT, LetterN } from "../meshes/letterMeshes";
import { FilmPass } from "/node_modules/three/examples/jsm/postprocessing/FilmPass.js";
extend({ FilmPass })

export default function Background() {
    return (
        <Canvas>
            /* Background color */
            <color attach={"background"} args={["rgb(200, 200, 202)"]} />
            /* Grid for letter placement */
            <gridHelper args={[100, 100, 100]} rotation-x={Math.PI / 2} />
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
            <spotLight position={[10, 15, 10]} angle={0.3} />
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