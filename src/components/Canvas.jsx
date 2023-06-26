import React, { Suspense, useEffect, useState } from "react";
import * as THREE from "three";
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import { Effects, Stars } from "@react-three/drei";
import { LetterI, LetterJ, LetterU, 
         LetterS, LetterT, LetterN } from "../meshes/name/FirstName";
import { LastLetterO1, LastLetterS, LastLetterA, 
         LastLetterB, LastLetterE, LastLetterN, 
         LastLetterO2, LastLetterR } from "../meshes/name/LastName";
import Pickaxe from "../meshes/geometries/Pickaxe";
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
            if(viewport.aspect > 0.7) 
                state.camera.position.lerp(vec.set(0, -4.5, 7), .025);
            else if (viewport.aspect <= 0.7) 
                state.camera.position.lerp(vec.set(0, -5.1, 6), .025);
        }
    })
}

export default function Background() {
    return (
        <Canvas>
            <Suspense fallback={null}>
            {/* <Stars radius={10} depth={10} count={5000} factor={1} saturation={3} fade speed={1} /> */}
            <color attach={"background"} args={["rgb(0, 0, 0)"]} />
            {/* <gridHelper args={[100, 100, 100]} rotation-x={Math.PI / 2} /> */}
            <EffectsComposer />
            <Lighting />
            <FirstName />
            <LastName />
            <CameraAnimation />
            {/* <Pickaxe /> */}
            </Suspense>
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
            <LastLetterO1 />
            <LastLetterB />
            <LastLetterE />
            <LastLetterR />
            <LastLetterA />
            <LastLetterN />
            <LastLetterO2 />
        </group>
    )
}

const Lighting = () => {
    return (
        <group>
            <ambientLight intensity={0.7} />
            {/* <spotLight position={[10, 15, 10]} angle={0.4} /> */}
        </group>
    )
}
const EffectsComposer = () => {
    const {viewport} = useThree();
    let bloom = viewport.aspect >= 0.7 ? 0.7 : 1;
    return (
        <group>
            <Effects>
                {/* Looks a bit too strong on desktop mode */}
                <unrealBloomPass attachArray={"passes"} args={[undefined, bloom, 2.2, 0.7]} />
                <glitchPass attachArray={"passes"}/>
                <filmPass attachArray={"passes"} args={[0.2, 0.5, 1500, false]} />
                {/* fix later */}
            </Effects>
        </group>
    )
}