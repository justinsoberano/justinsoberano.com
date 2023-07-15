import React, { Suspense, useEffect, useState } from "react";
import * as THREE from "three";
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import { AsciiRenderer, Effects, Plane, Stars } from "@react-three/drei";
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
                state.camera.position.lerp(vec.set(0, -3, 7), .025);
            else if (viewport.aspect <= 0.7) 
                state.camera.position.lerp(vec.set(0, -5.1, 6), .025);
        }
    })
}

export default function Background() {
    return (
        <Canvas dpr={1}>
                <Stars radius={1.2} depth={5} count={2000} factor={0.2} saturation={1} fade speed={2} />
                <color attach={"background"} args={["rgb(0, 0, 0)"]} />
                {/* <gridHelper args={[100, 100, 100]} rotation-x={Math.PI / 2} /> */}
                <EffectsComposer />
                <Lighting />
                <FirstName />
                <LastName />
                <CameraAnimation />
                {/* <Pickaxe /> */}
                {/* <Plane args={[100,3]} /> */}
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
    let bloom = viewport.aspect >= 0.7 ? 0.5 : 0.8;
    return (
        <group>
            <Effects>
                {/* Looks a bit too strong on desktop mode */}
                <unrealBloomPass attachArray={"passes"} args={[undefined, bloom, 2.2, 0.7]} />
                {/* <glitchPass attachArray={"passes"}/> */}
                <filmPass attachArray={"passes"} args={[0.5, 0.5, 1512, false]} />
                {/* <AsciiRenderer /> */}
                {/* fix later */}
            </Effects>
        </group>
    )
}