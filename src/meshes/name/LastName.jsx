import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import { useThree } from "@react-three/fiber";

function Position(mX, mY, mZ, dX, dY, dZ) {
    const {viewport} = useThree();
    if(viewport.aspect >= 0.7) {
        return new useSpring({
            to: { position: [dX, dY, dZ] },
            config: {mass: 2, tension: 200, friction: 50},
            delay: 1000
        })
    } else if (viewport.aspect < 0.7) {
        return new useSpring({
            to: {position: [mX, mY, mZ]},
            config: { mass: 2, tension: 200, friction: 50},
            delay: 1000
        })
    }
}

function Scale() {
    const {viewport} = useThree();
    if(viewport.aspect >= 0.7) {
        return new useSpring({ 
            from: {scale: 0},
            to: {scale: viewport.aspect / 1.4},
            config: { mass: 2, tension: 200, friction: 50, },
            delay: 2500,
        });
    } else if (viewport.aspect < 0.7) {
        return new useSpring({
            from: {scale: 0},
            to: {scale: viewport.aspect},
            config: { mass: 2, tension: 200, friction: 50, },
            delay: 2500,
        });
    }
}

/* SOBERANO */
export function LastLetterS(props) {
    const meshS = useRef();
    const {viewport} = useThree();
    const { nodes, materials } = useGLTF("assets/letters/bit_s.gltf");
    const position = Position(-viewport.aspect * 3.6, -viewport.aspect * 2.7, -1,
                              -viewport.aspect * 2.8, -viewport.aspect / 2, -3);
    const scale = Scale();
    return (
        <group {...props} dispose={null}>
            <animated.mesh
                castShadow
                receiveShadow
                geometry={nodes.S.geometry}
                material={materials.White}
                position={position.position}
                rotation={[Math.PI/2 , 0 , 0]}
                scale={scale.scale}
                ref={meshS}
            />
        </group>
    );
}

export function LastLetterO1(props) {
    const { viewport } = useThree();
    const { nodes, materials } = useGLTF("assets/letters/bit_o.gltf");
    const position = Position(-viewport.aspect * 2.63, -viewport.aspect * 2.7, -1,
                              -viewport.aspect * 2, -viewport.aspect / 2, -3);
    const scale = Scale();
    return (
        <group {...props} dispose={null}>
            <animated.mesh
                castShadow
                receiveShadow
                geometry={nodes.O.geometry}
                material={materials.White}
                position={position.position}
                rotation={[Math.PI / 2, 0, 0]}
                scale={scale.scale}
            />
        </group>
    );
}

export function LastLetterB(props) {
    const { viewport } = useThree();
    const { nodes, materials } = useGLTF("assets/letters/bit_b.gltf");
    const position = Position(-viewport.aspect * 1.65, -viewport.aspect * 2.7, -1,
                              -viewport.aspect * 1.2, -viewport.aspect / 2, -3);
    const scale = Scale();
    return (
        <group {...props} dispose={null}>
            <animated.mesh
                castShadow
                receiveShadow
                geometry={nodes.B.geometry}
                material={materials.White}
                position={position.position}
                rotation={[Math.PI / 2, 0, 0]}
                scale={scale.scale}            
            />
        </group>
    );
}
export function LastLetterE(props) {
    const { viewport } = useThree();
    const { nodes, materials } = useGLTF("assets/letters/bit_e.gltf");
    const position = Position(-viewport.aspect / 1.45, -viewport.aspect * 2.7, -1,
                              -viewport.aspect / 2.1, -viewport.aspect / 2, -3);
    const scale = Scale();
    return (
        <group {...props} dispose={null}>
            <animated.mesh
                castShadow
                receiveShadow
                geometry={nodes.E.geometry}
                material={materials.White}
                position={position.position}
                rotation={[Math.PI / 2, 0, 0]}
                scale={scale.scale}            
            />
        </group>
    );
}
export function LastLetterR(props) {
    const { viewport } = useThree();
    const { nodes, materials } = useGLTF("assets/letters/bit_r.gltf");
    const position = Position(viewport.aspect / 4, -viewport.aspect * 2.7, -1,
                              viewport.aspect / 4, -viewport.aspect / 2, -3);
    const scale = Scale();
    return (
        <group {...props} dispose={null}>
            <animated.mesh
                castShadow
                receiveShadow
                geometry={nodes.R.geometry}
                material={materials.White}
                position={position.position}
                rotation={[Math.PI / 2, 0, 0]}
                scale={scale.scale}            
            />
        </group>
    );
}
export function LastLetterA(props) {
    const { viewport } = useThree();
    const { nodes, materials } = useGLTF("assets/letters/bit_a.gltf");
    const position = Position(viewport.aspect * 1.2, -viewport.aspect * 2.7, -1,
                              viewport.aspect, -viewport.aspect / 2, -3);
    const scale = Scale();
    return (
        <group {...props} dispose={null}>
            <animated.mesh
                castShadow
                receiveShadow
                geometry={nodes.A.geometry}
                material={materials.White}
                position={position.position}
                rotation={[Math.PI / 2, 0, 0]}
                scale={scale.scale}            
            />
        </group>
    );
}
export function LastLetterN(props) {
    const { viewport } = useThree();
    const { nodes, materials } = useGLTF("assets/letters/bit_n.gltf");
    const position = Position(viewport.aspect * 2.2, -viewport.aspect * 2.7, -1,
                              viewport.aspect * 1.75, -viewport.aspect / 2, -3);
    const scale = Scale();
    return (
        <group {...props} dispose={null}>
            <animated.mesh
                castShadow
                receiveShadow
                geometry={nodes.N.geometry}
                material={materials.White}
                position={position.position}
                rotation={[Math.PI / 2, 0, 0]}
                scale={scale.scale}           
            />
        </group>
    );
}

export function LastLetterO2(props) {
    const { viewport } = useThree();
    const { nodes, materials } = useGLTF("assets/letters/bit_o.gltf");
    const position = Position(viewport.aspect * 3.2, -viewport.aspect * 2.7, -1,
                              viewport.aspect * 2.5, -viewport.aspect / 2, -3);
    const scale = Scale();
    return (
        <group {...props} dispose={null}>
            <animated.mesh
                castShadow
                receiveShadow
                geometry={nodes.O.geometry}
                material={materials.White}
                position={position.position}
                rotation={[Math.PI / 2, 0, 0]}
                scale={scale.scale}            
            />
        </group>
    );
}


useGLTF.preload("assets/letters/bit_s.gltf");
useGLTF.preload("assets/letters/bit_o.gltf");
useGLTF.preload("assets/letters/bit_b.gltf");
useGLTF.preload("assets/letters/bit_e.gltf");
useGLTF.preload("assets/letters/bit_r.gltf");
useGLTF.preload("assets/letters/bit_a.gltf");
