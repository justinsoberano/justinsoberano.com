import React, { useEffect, useState } from "react";
import * as THREE from "three";
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import { Effects } from "@react-three/drei";
import { LetterI, LetterJ, LetterU, 
         LetterS, LetterT, LetterN } from "../meshes/FirstName";
import { FilmPass } from "/node_modules/three/examples/jsm/postprocessing/FilmPass.js";

extend({ FilmPass })

const CameraAnimation = () => {
    const [started, setStarted] = useState(false)
    const vec = new THREE.Vector3();
    const { viewport } = useThree();
    useEffect(() => {
        setTimeout(() => setStarted(true), 2000);
    });
    useFrame(state => {
        if (started) {
            /* have positions dynamic to viewport.aspect */
            /* Currently they are static */
            if(viewport.aspect > 0.6) state.camera.position.lerp(vec.set(0, -2.7, 7), .025);
            else if (viewport.aspect <= 0.6) state.camera.position.lerp(vec.set(0, -4, 6), .075);
        }
    })
}

export default function Background() {
    
    return (
        <Canvas>
            {/* Background color */}
            <color attach={"background"} args={["rgb(210, 210, 212)"]} />
            {/* Grid for letter placement */}
            {/* <gridHelper args={[100, 100, 100]} rotation-x={Math.PI / 2} /> */}
            <EffectsComposer />
            <Lighting />
            <Letters />
            <CameraAnimation />
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