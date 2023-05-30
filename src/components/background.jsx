import React, { useRef, useEffect, useLayoutEffect } from "react";
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import { CameraControls, Effects, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { LetterI, LetterJ, LetterU, 
         LetterS, LetterT, LetterN } from "../meshes/letterMeshes";
import { FilmPass } from "/node_modules/three/examples/jsm/postprocessing/FilmPass.js";
import { useSpring, animated, to } from "@react-spring/three";

extend({ FilmPass })

const cameraPositionSpring = () => {
    return new useSpring({
        from: { position: [0, 0, 6] },
        to: { position: [0, 0, 8] },
    })
}

const Camera = (props) => {
    const ref = useRef();
    const set = useThree((state) => state.set);
    useEffect(() => void set({ camera: ref.current }), []);
    useFrame(() => ref.current.updateMatrixWorld());
    const { viewport } = useThree();
    useLayoutEffect(() => {
        ref.current.aspect = viewport.aspect;
        ref.current.updateProjectionMatrix();
        ref.current.fov = 50;
        ref.current.near = 0.1;
        ref.current.far = 1000;
    });
    return <animated.perspectiveCamera ref={ref} {...props} />;
};

export default function Background() {
    return (
        <Canvas>
            <Camera position={[0,0,8]}/>
            /* Background color */
            <color attach={"background"} args={["rgb(210, 210, 212)"]} />
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