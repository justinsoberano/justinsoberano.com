import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/* Turn the functions to ternary notations for cleaner code */
/* possibly create the useSpring functions in a separate helper file */

const PositionSpring = (pX, pY, pZ, newX, delay) => {
    const { viewport } = useThree();
    if(viewport.aspect >= 0.7) {
    return new useSpring({ 
        from: { position: [0, 0, 0] }, 
        to: [
            { position: [pX, pY, pZ] },
            { position: [newX, 0, -1]}
        ],
        delay: delay,
        config: { mass: 4, tension: 200, friction: 40, }
    })
    } else if (viewport.aspect < 0.7) {
        return new useSpring({
            from: { position: [0, 0, 0] },
            to: [
                { position: [pX, pY, pZ] },
                { position: [newX * 2.1, 0, -3] }
            ],
            delay: delay,
            config: { mass: 4, tension: 200, friction: 40, }
        })
    }
}

const rotationSpring = (rX, rY, rZ, mass, tension, friction, delay) => {
    return new useSpring({ 
        from: { rotation: [0, 0, 0] }, 
        to: [
            { rotation: [rX, rY, rZ] },
            { rotation: [Math.PI / 2, 0, 0] },
        ],
        delay: delay, 
        config: { mass: mass, tension: tension, friction: friction,
        }
    })
}

const ScaleSpring = (delay) => {
    const { viewport } = useThree();
    const desktopScale = viewport.aspect;
    const mobileScale = 1;
    if(viewport.aspect >= 0.7) {
        return new useSpring({
            from: { scale: [0, 1, 0] }, 
            to: { scale: [desktopScale, 0.7, desktopScale] },
            config: { mass: 2, tension: 200, friction: 50, },
            delay: delay,
        })
    } else if(viewport.aspect < 0.7) {
        return new useSpring({
            from: { scale: [0, 1, 0] }, 
            to: { scale: [mobileScale, 0.5, mobileScale] },
            config: { mass: 2, tension: 200, friction: 50, },
            delay: delay,
        })
    }
}

const FloatAnimation = (mesh, rZ, rY, pY, a, b, c, multiplier) => {
    const rotationZ = rZ / 30000; 
    const rotationY = rY / 30000; 
    const positionY = pY / 30000;
    return new useFrame(({ clock }) => {
            mesh.current.rotation.z += a(clock.getElapsedTime()) * rotationZ;
            mesh.current.rotation.y += b(clock.getElapsedTime()) * rotationY;
            mesh.current.position.y += c(clock.getElapsedTime() * multiplier) * positionY;
    })
}

export function LetterJ(props) {

    const JMesh = useRef();
    const { viewport } = useThree();
    const positionAnimation = PositionSpring(-viewport.aspect * 2.5, 0, 0,-viewport.aspect * 2.1 ,0);
    const rotationAnimation = rotationSpring(Math.PI / 2, 0.6, 6, 3.5, 200, 50, 0);
    const scale = ScaleSpring(0);
    FloatAnimation(JMesh, 5, 5, 7, Math.cos, Math.sin, Math.sin, 1);

    const { nodes } = useGLTF("assets/letters/bit_j.gltf");
    return (
        <group {...props} dispose={null}>
            <animated.mesh
                castShadow
                receiveShadow
                geometry={nodes.J.geometry}
                material={new THREE.MeshNormalMaterial()}
                position={positionAnimation.position}
                rotation={rotationAnimation.rotation}
                ref={JMesh}
                scale={scale.scale}
            />
        </group>
    );
}

export function LetterU(props) {

    const UMesh = useRef();
    const { viewport } = useThree();
    const positionAnimation = PositionSpring(-viewport.aspect * 1.5, -viewport.aspect * 1.6, 0, -viewport.aspect * 1.2, 100);  
    const rotationAnimation = rotationSpring(Math.PI / 4, -0.4, 3, 3.5, 200, 50, 100);
    const scale = ScaleSpring(100);
    FloatAnimation(UMesh, 5, 7, 7, Math.cos, Math.cos, Math.cos, 0.7)

    const { nodes } = useGLTF("assets/letters/bit_u.gltf");
    return (
        <group {...props} dispose={null}>
            <animated.mesh
                castShadow
                receiveShadow
                geometry={nodes.U.geometry}
                material={new THREE.MeshNormalMaterial()}
                position={positionAnimation.position}
                rotation={rotationAnimation.rotation}
                scale={scale.scale}
                ref={UMesh}
            />
        </group>
    );
}

export function LetterS(props) {

    const SMesh = useRef();
    const { viewport } = useThree();
    const positionAnimation = PositionSpring(-viewport.aspect, viewport.aspect, -0.5, -viewport.aspect / 2.8, 200);
                                                                /* mass, tension, friction */
    const rotationAnimation = rotationSpring(Math.PI/1.5, 0, -1, 3.5, 200, 55, 0);
    const scale = ScaleSpring(200);
    FloatAnimation(SMesh, 5, 5, 10, Math.cos, Math.cos, Math.cos, 0.6);

    const { nodes } = useGLTF("assets/letters/bit_s.gltf");
    return (
        <group {...props} dispose={null}>
            <animated.mesh
                castShadow
                receiveShadow
                geometry={nodes.S.geometry}
                material={new THREE.MeshNormalMaterial()}
                position={positionAnimation.position}
                rotation={rotationAnimation.rotation}
                scale={scale.scale}
                ref={SMesh}
            />
        </group>
    );
}

export function LetterT(props) {
    
    const TMesh = useRef();
    const { viewport } = useThree();
    const positionAnimation = PositionSpring(viewport.aspect * 1.2, viewport.aspect * 1.2, 0, viewport.aspect / 2.2 , 300);
    const rotationAnimation = rotationSpring(Math.PI / 1.3, 0, 1, 2, 200, 50, 100);
    const scale = ScaleSpring(200);
    FloatAnimation(TMesh, 5, 5, 7, Math.sin, Math.sin, Math.cos, 0.3);

    const { nodes } = useGLTF("assets/letters/bit_t.gltf");
    return (
        <group {...props} dispose={null}>
            <animated.mesh
                castShadow
                receiveShadow
                geometry={nodes.T.geometry}
                material={new THREE.MeshNormalMaterial()}
                position={positionAnimation.position}
                rotation={rotationAnimation.rotation}
                scale={scale.scale}
                ref={TMesh}
            />
        </group>
    );
}

export function LetterI(props) {

    const IMesh = useRef();
    const { viewport } = useThree();
    const positionAnimation = PositionSpring(viewport.aspect * 2, -viewport.aspect, 0, viewport.aspect * 1.12, 400);
    const rotationAnimation = rotationSpring(Math.PI / 3, 0.4, 1, 3.5, 200, 50, 400);
    const scale = ScaleSpring(300);
    FloatAnimation(IMesh, 5, 5, 5, Math.sin, Math.sin, Math.sin, 0.8);

    const { nodes } = useGLTF("assets/letters/bit_i.gltf");
    return (
        <group {...props} dispose={null}>
            <animated.mesh
                castShadow
                receiveShadow
                geometry={nodes.I.geometry}
                material={new THREE.MeshNormalMaterial()}
                position={positionAnimation.position}
                rotation={rotationAnimation.rotation}
                scale={scale.scale}
                ref={IMesh}
            />
        </group>
    );
}

export function LetterN(props) {

    const NMesh = useRef();
    const { viewport } = useThree();
    const positionAnimation = PositionSpring(viewport.aspect * 2.5, 0.1, 0, viewport.aspect * 1.85, 500);
    const rotationAnimation = rotationSpring(Math.PI / 2, -0.5, 1.2, 3.5, 200, 50, 500);
    const scale = ScaleSpring(400);
    FloatAnimation(NMesh, 5, 5, 5, Math.sin, Math.sin, Math.cos, 0.8);

    const { nodes } = useGLTF("assets/letters/bit_n.gltf");
    return (
        <group {...props} dispose={null}>
            <animated.mesh
                castShadow
                receiveShadow
                geometry={nodes.N.geometry}
                material={new THREE.MeshNormalMaterial()}
                position={positionAnimation.position}
                rotation={rotationAnimation.rotation}
                scale={scale.scale}
                ref={NMesh}
            />
        </group>
    );
}

useGLTF.preload("assets/letters/bit_j.gltf");
useGLTF.preload("assets/letters/bit_u.gltf");
useGLTF.preload("assets/letters/bit_s.gltf");
useGLTF.preload("assets/letters/bit_t.gltf");
useGLTF.preload("assets/letters/bit_i.gltf");
useGLTF.preload("assets/letters/bit_n.gltf");