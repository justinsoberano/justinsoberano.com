import React, { useEffect, useState } from "react";
import * as THREE from "three";
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import { Effects, OrbitControls, Stars } from "@react-three/drei";
import { LetterI, LetterJ, LetterU, 
         LetterS, LetterT, LetterN } from "../meshes/FirstName";
import { LastLetterO_1, LastLetterS, LastLetterA, LastLetterB, LastLetterE, LastLetterN, LastLetterO_2, LastLetterR } from "../meshes/LastName";
import { FilmPass } from "/node_modules/three/examples/jsm/postprocessing/FilmPass.js";
import { GlitchPass } from "/node_modules/three/examples/jsm/postprocessing/GlitchPass.js";
import { UnrealBloomPass } from "/node_modules/three/examples/jsm/postprocessing/UnrealBloomPass.js";

extend({ FilmPass, GlitchPass, UnrealBloomPass })

const CameraAnimation = () => {
    const [started, setStarted] = useState(false)
    const vec = new THREE.Vector3();
    const { viewport } = useThree();
    useEffect(() => {
        setTimeout(() => setStarted(true), 2000);
    });
    useFrame(state => {
        if (started) {
            if(viewport.aspect > 0.7) state.camera.position.lerp(vec.set(0, -viewport.aspect * 2, 7), .025);
            else if (viewport.aspect <= 0.7) state.camera.position.lerp(vec.set(0, -viewport.aspect * 5.9, 6), .075);
        }
    })
}

export default function Background() {
    return (
        <Canvas>
            {/* <OrbitControls /> */}
            {/* Background color */}
            <color attach={"background"} args={["rgb(20, 20, 20)"]} />
            {/* Grid for letter placement */}
            {/* <gridHelper args={[100, 100, 100]} rotation-x={Math.PI / 2} /> */}
            <EffectsComposer />
            <Lighting />
            <FirstName />
            <CameraAnimation />
        </Canvas>
    );  
}

const FirstName = () => {
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

const LastName = () => {
    return(
        <group>
            <LastLetterS />
            <LastLetterO_1 />
            <LastLetterB />
            <LastLetterE />
            <LastLetterR />
            <LastLetterA />
            <LastLetterN />
            <LastLetterO_2 />
        </group>
    )
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
    const { viewport } = useThree();
    return (
        <group>
            <Effects>
                {/* Looks a bit too strong on desktop mode */}
                <unrealBloomPass attachArray={"passes"} args={[undefined, 1, 2.2, 0.7]} />
                <filmPass attachArray={"passes"} args={[0.2, 0.3, 2048, false]} />
                {/* fix later */}
                {/* <glitchPass attachArray={"passes"}/> */}
            </Effects>
        </group>
    )
}