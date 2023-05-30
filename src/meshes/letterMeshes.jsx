import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import { useThree, useFrame, Canvas } from "@react-three/fiber";

/* Create an if statement for mobile position */
/* viewport < 500 ? -viewport.width / 2.9 : -viewport.width / 3.6 */

 export const Viewport = () => {
    const { viewport } = useThree();
    return viewport;
}

const PositionSpring = (pX, pY, pZ, newX, delay) => {
    const v = Viewport();
    if(v.width >= 5) {
    return new useSpring({ 
        from: { position: [0, 0, 0] }, 
        to: [
            { position: [pX, pY, pZ] },
            { position: [newX, 0, -3]}
        ],
        delay: delay,
        config: { mass: 4, tension: 200, friction: 40, }
    })
    } else if (v.width < 5) {
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
    const v = Viewport();
    const b = v.width / v.height;
    const a = v.width / 100;
    // TODO: edit values so the letters look more uniform
    const mB = v.width / (v.height / 2);
    console.log(v.width);
    console.log(Canvas.length);
    if(v.width >= 5) {
        return new useSpring({
            from: { scale: [a, a, a] }, to: { scale: [b, b, b] },
            config: { mass: 2, tension: 200, friction: 50, },
            delay: delay,
        })
    } else if(v.width < 5) {
        return new useSpring({
            from: { scale: [a, a, a] }, to: { scale: [mB, mB, mB] },
            config: { mass: 2, tension: 200, friction: 50, },
            delay: delay,
        })
    }
}

const FloatAnimation = (mesh, rZ, rY, pY, a, b, c, multiplier) => {
    const rotationZ = rZ / 10000; 
    const rotationY = rY / 10000; 
    const positionY = pY / 10000;
    return new useFrame(({ clock }) => {
            mesh.current.rotation.z += a(clock.getElapsedTime()) * rotationZ;
            mesh.current.rotation.y += b(clock.getElapsedTime()) * rotationY;
            mesh.current.position.y += c(clock.getElapsedTime() * multiplier) * positionY;
    })
}

export function LetterJ(props) {

    const JMesh = useRef();
    const { viewport } = useThree();
    const positionAnimation = PositionSpring(-viewport.width / 2.9, 0, 0,-viewport.width / 3.6 ,0);
    const rotationAnimation = rotationSpring(Math.PI / 2, 0.6, 6, 3.5, 200, 50, 0);
    const scale = ScaleSpring(0);
    FloatAnimation(JMesh, 5, 5, 7, Math.cos, Math.sin, Math.sin, 1);

    const { nodes, materials } = useGLTF("assets/j.gltf");
    return (
        <group {...props} dispose={null}>
            <animated.mesh
                castShadow
                receiveShadow
                geometry={nodes.J.geometry}
                material={materials["Light Blue Bubble Letter Material"]}
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
    const positionAnimation = PositionSpring(-viewport.width / 5, -viewport.width / 5, 0, -viewport.width / 7, 100);  
    const rotationAnimation = rotationSpring(Math.PI / 4, 0, 3, 3.5, 200, 50, 100);
    const scale = ScaleSpring(100);
    FloatAnimation(UMesh, 5, 7, 7, Math.cos, Math.cos, Math.cos, 0.7)

    const { nodes, materials } = useGLTF("assets/u.gltf");
    return (
        <group {...props} dispose={null}>
            <animated.mesh
                castShadow
                receiveShadow
                geometry={nodes.U.geometry}
                material={materials["Dark Brown Bubble Letter Material"]}
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
    const positionAnimation = PositionSpring(-viewport.width / 15, viewport.width / 15, -0.5, -viewport.width / 30, 200);
    const rotationAnimation = rotationSpring(Math.PI / 2, 0.2, 6, 4, 100, 40, 200);
    const scale = ScaleSpring(200);
    FloatAnimation(SMesh, 5, 5, 10, Math.cos, Math.cos, Math.cos, 0.6);

    const { nodes, materials } = useGLTF("assets/s.gltf");
    return (
        <group {...props} dispose={null}>
            <animated.mesh
                castShadow
                receiveShadow
                geometry={nodes.S.geometry}
                material={materials["Dark Green Bubble Letter Material"]}
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
    const positionAnimation = PositionSpring(viewport.width / 10, viewport.width / 10, 0, viewport.width / 15, 300);
    /* Px, Py, Pz, mass, tension, friction, delay*/
    const rotationAnimation = rotationSpring(Math.PI / 1.3, 0, 1, 2, 200, 50, 100);
    const scale = ScaleSpring(200);
    FloatAnimation(TMesh, 5, 5, 7, Math.sin, Math.sin, Math.cos, 0.3);

    const { nodes, materials } = useGLTF("assets/t.gltf");
    return (
        <group {...props} dispose={null}>
            <animated.mesh
                castShadow
                receiveShadow
                geometry={nodes.T.geometry}
                material={materials["Dark Yellow Bubble Letter Material"]}
                position={positionAnimation.position}
                rotation={rotationAnimation.rotation}
                scale={scale.scale}
                ref={TMesh}
            />
        </group>
    );
}

export function LetterI(props) {

    const IMesh = React.useRef();
    const { viewport } = useThree();
    const positionAnimation = PositionSpring(viewport.width / 5, -viewport.width / 8, 0, viewport.width / 6, 400);
    /* Px, Py, Pz, mass, tension, friction, delay*/
    const rotationAnimation = rotationSpring(Math.PI / 2, 0.2, 6, 3, 100, 40, 400);
    const scale = ScaleSpring(300);
    FloatAnimation(IMesh, 5, 5, 5, Math.sin, Math.sin, Math.sin, 0.8);

    const { nodes, materials } = useGLTF("assets/i.gltf");
    return (
        <group {...props} dispose={null}>
            <animated.mesh
                castShadow
                receiveShadow
                geometry={nodes.I.geometry}
                material={materials["Pink Bubble Letter Material"]}
                position={positionAnimation.position}
                rotation={rotationAnimation.rotation}
                scale={scale.scale}
                ref={IMesh}
            />
        </group>
    );
}

export function LetterN(props) {

    const NMesh = React.useRef();
    const { viewport } = useThree();
    const positionAnimation = PositionSpring(viewport.width / 3, 0.1, 0, viewport.width / 4, 500);
    const rotationAnimation = rotationSpring(Math.PI / 2, -0.5, 1.2, 3.5, 200, 50, 500);
    const scale = ScaleSpring(400);
    FloatAnimation(NMesh, 5, 5, 5, Math.sin, Math.sin, Math.cos, 0.8);

    const { nodes, materials } = useGLTF("assets/n.gltf");
    return (
        <group {...props} dispose={null}>
            <animated.mesh
                castShadow
                receiveShadow
                geometry={nodes.N.geometry}
                material={materials["Light Orange Bubble Letter Material"]}
                position={positionAnimation.position}
                rotation={rotationAnimation.rotation}
                scale={scale.scale}
                ref={NMesh}
            />
        </group>
    );
}

useGLTF.preload("assets/assets/j.gltf");
useGLTF.preload("assets/assets/u.gltf");
useGLTF.preload("assets/assets/s.gltf");
useGLTF.preload("assets/assets/t.gltf");
useGLTF.preload("assets/assets/i.gltf");
useGLTF.preload("assets/assets/n.gltf");