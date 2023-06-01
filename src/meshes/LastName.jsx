import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useSpring, animated } from "@react-spring/three";
import { useThree, useFrame } from "@react-three/fiber";

function Position(ref) {
    const {viewport} = useThree();
    useFrame(state => {
        if(viewport.aspect >= 0.7) {
            ref.current.position.lerp(new THREE.Vector3(0, 0, -3), .05);
        } else if (viewport.aspect < 0.7) {
            ref.current.position.lerp(new THREE.Vector3(-viewport.aspect * 3.6, -viewport.aspect * 2.7, -1), .05);
        }
    });
}

function Scale(ref) {

}

/* SOBERANO */
export function LastLetterS(props) {
    const meshS = useRef();
    const {viewport} = useThree();
    const { nodes, materials } = useGLTF("assets/bit_s.gltf");
    Position(meshS);
    return (
        <group {...props} dispose={null}>
            <animated.mesh
                castShadow
                receiveShadow
                geometry={nodes.S.geometry}
                material={materials.White}
                position={[-viewport.aspect * 3.6, -viewport.aspect * 2.7, -1]}
                rotation={[Math.PI/2 , 0 , 0]}
                scale={viewport.aspect}
                ref={meshS}
            />
        </group>
    );
}

export function LastLetterO_1(props) {
    const { viewport } = useThree();
    const { nodes, materials } = useGLTF("assets/bit_o.gltf");
    return (
        <group {...props} dispose={null}>
            <animated.mesh
                castShadow
                receiveShadow
                geometry={nodes.O.geometry}
                material={materials.White}
                position={[-viewport.aspect * 2.63, -viewport.aspect * 2.7, -1]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={viewport.aspect}
            />
        </group>
    );
}

export function LastLetterB(props) {
    const { viewport } = useThree();
    const { nodes, materials } = useGLTF("assets/bit_b.gltf");
    return (
        <group {...props} dispose={null}>
            <animated.mesh
                castShadow
                receiveShadow
                geometry={nodes.B.geometry}
                material={materials.White}
                position={[-viewport.aspect * 1.65, -viewport.aspect * 2.7, -1]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={viewport.aspect}
            />
        </group>
    );
}
export function LastLetterE(props) {
    const { viewport } = useThree();
    const { nodes, materials } = useGLTF("assets/bit_e.gltf");
    return (
        <group {...props} dispose={null}>
            <animated.mesh
                castShadow
                receiveShadow
                geometry={nodes.E.geometry}
                material={materials.White}
                position={[-viewport.aspect / 1.45, -viewport.aspect * 2.7, -1]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={viewport.aspect}
            />
        </group>
    );
}
export function LastLetterR(props) {
    const { viewport } = useThree();
    const { nodes, materials } = useGLTF("assets/bit_r.gltf");
    return (
        <group {...props} dispose={null}>
            <animated.mesh
                castShadow
                receiveShadow
                geometry={nodes.R.geometry}
                material={materials.White}
                position={[viewport.aspect / 4, -viewport.aspect * 2.7, -1]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={viewport.aspect}
            />
        </group>
    );
}
export function LastLetterA(props) {
    const { viewport } = useThree();
    const { nodes, materials } = useGLTF("assets/bit_a.gltf");
    return (
        <group {...props} dispose={null}>
            <animated.mesh
                castShadow
                receiveShadow
                geometry={nodes.A.geometry}
                material={materials.White}
                position={[viewport.aspect * 1.2, -viewport.aspect * 2.7, -1]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={viewport.aspect}
            />
        </group>
    );
}
export function LastLetterN(props) {
    const { viewport } = useThree();
    const { nodes, materials } = useGLTF("assets/bit_n.gltf");
    return (
        <group {...props} dispose={null}>
            <animated.mesh
                castShadow
                receiveShadow
                geometry={nodes.N.geometry}
                material={materials.White}
                position={[viewport.aspect * 2.2, -viewport.aspect * 2.7, -1]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={viewport.aspect}
            />
        </group>
    );
}

export function LastLetterO_2(props) {
    const { viewport } = useThree();
    const { nodes, materials } = useGLTF("assets/bit_o.gltf");
    return (
        <group {...props} dispose={null}>
            <animated.mesh
                castShadow
                receiveShadow
                geometry={nodes.O.geometry}
                material={materials.White}
                position={[viewport.aspect * 3.2, -viewport.aspect * 2.7, -1]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={viewport.aspect}
            />
        </group>
    );
}


useGLTF.preload("assets/bit_s.gltf");
useGLTF.preload("assets/bit_o.gltf");