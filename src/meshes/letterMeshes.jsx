import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import { useThree, useFrame } from "@react-three/fiber";

export function LetterJ(props) {

    const JMesh = React.useRef();
    const { viewport } = useThree();
    const isFinished = useRef(false);

    const positionSpring = useSpring({
        from: { position: [0, 0, 0] },
        to: { position: [- viewport.width / 2.9, 0, 0] },
    });

    const rotationSpring = useSpring({
        from: { rotation: [0, 0, 0] },
        to: { rotation: [Math.PI / 2, 0.6, 6] },
        config: {
            mass: 2,
            tension: 200,
            friction: 50,
        }
    });
    const scaleSpring = useSpring({
        from: { scale: [[viewport.width / 100], [viewport.width / 100], [viewport.width / 100]] },
        to: { scale: [[viewport.width / viewport.height], [viewport.width / viewport.height], [viewport.width / viewport.height]] },
        config: {
            mass: 2,
            tension: 200,
            friction: 50,
        },
    });

    useFrame(({ clock }) => {
        if (!isFinished.current) {
            JMesh.current.rotation.z += Math.cos(clock.getElapsedTime()) * 0.0005;
            JMesh.current.rotation.y += Math.cos(clock.getElapsedTime()) * 0.0005;
            JMesh.current.position.y += Math.sin(clock.getElapsedTime()) * 0.0007;
            // TODO: make the letters go up and down to add more motion

        }
    })

    const { nodes, materials } = useGLTF("assets/j.gltf");
    return (
        <group {...props} dispose={null}>
            <animated.mesh
                castShadow
                receiveShadow
                geometry={nodes.J.geometry}
                material={materials["Light Blue Bubble Letter Material"]}
                position={positionSpring.position}
                rotation={rotationSpring.rotation}
                ref={JMesh}
                scale={scaleSpring.scale}
            />
        </group>
    );
}

export function LetterU(props) {

    const UMesh = React.useRef();
    const { viewport } = useThree();
    const isFinished = useRef(false);

    const positionSpring = useSpring({
        from: { position: [0, 0, 0] },
        to: { position: [- viewport.width / 5, -viewport.width / 5, 0] },
    });

    const rotationSpring = useSpring({
        from: { rotation: [0, 0, 0] },
        to: { rotation: [Math.PI / 2, 0.2, 6] },
        config: {
            mass: 4,
            tension: 100,
            friction: 50,
        }
    });
    const scaleSpring = useSpring({
        from: { scale: [[viewport.width / 100], [viewport.width / 100], [viewport.width / 100]] },
        to: { scale: [[viewport.width / viewport.height], [viewport.width / viewport.height], [viewport.width / viewport.height]] },
        config: {
            mass: 2,
            tension: 200,
            friction: 50,
        },
    });

    useFrame(({ clock }) => {
        if (!isFinished.current) {
            UMesh.current.rotation.z += Math.cos(clock.getElapsedTime()) * 0.0005;
            UMesh.current.rotation.y += Math.cos(clock.getElapsedTime()) * 0.0005;
            UMesh.current.position.y += Math.cos(clock.getElapsedTime()) * 0.0007;
        }
    })

    const { nodes, materials } = useGLTF("assets/u.gltf");
    return (
        <group {...props} dispose={null}>
            <animated.mesh
                castShadow
                receiveShadow
                geometry={nodes.U.geometry}
                material={materials["Dark Brown Bubble Letter Material"]}
                position={positionSpring.position}
                rotation={rotationSpring.rotation}
                scale={scaleSpring.scale}
                ref={UMesh}
            />
        </group>
    );
}

export function LetterS(props) {

    const SMesh = React.useRef();
    const { viewport } = useThree();
    const isFinished = useRef(false);

    const positionSpring = useSpring({
        from: { position: [0, 0, 0] },
        to: { position: [- viewport.width / 15, viewport.width / 15, -0.5] },
    });

    const rotationSpring = useSpring({
        from: { rotation: [0, 0, 0] },
        to: { rotation: [Math.PI / 2, 0.2, 6] },
        config: {
            mass: 4,
            tension: 100,
            friction: 40,
        }
    });

    const scaleSpring = useSpring({
        from: { scale: [[viewport.width / 100], [viewport.width / 100], [viewport.width / 100]] },
        to: { scale: [[viewport.width / viewport.height], [viewport.width / viewport.height], [viewport.width / viewport.height]] },
        config: {
            mass: 2,
            tension: 200,
            friction: 50,
        },
    });

    useFrame(({ clock }) => {
        if (!isFinished.current) {
            SMesh.current.rotation.z += Math.cos(clock.getElapsedTime()) * 0.0005;
            SMesh.current.rotation.y += Math.cos(clock.getElapsedTime()) * 0.0005;
            SMesh.current.position.y += Math.cos(clock.getElapsedTime() * 0.6) * 0.001;
            // TODO: make the letters go up and down to add more motion

        }
    })

    const { nodes, materials } = useGLTF("assets/s.gltf");
    return (
        <group {...props} dispose={null}>
            <animated.mesh
                castShadow
                receiveShadow
                geometry={nodes.S.geometry}
                material={materials["Dark Green Bubble Letter Material"]}
                position={positionSpring.position}
                rotation={rotationSpring.rotation}
                scale={scaleSpring.scale}
                ref={SMesh}
            />
        </group>
    );
}

export function LetterT(props) {

    const TMesh = React.useRef();
    const { viewport } = useThree();
    const isFinished = useRef(false);

    const positionSpring = useSpring({
        from: { position: [0, 0, 0] },
        to: { position: [viewport.width / 10, viewport.width / 10, 0] },
    });

    const rotationSpring = useSpring({
        from: { rotation: [0, 0, 0] },
        to: { rotation: [Math.PI / 2, 0.1, -6] },
        config: {
            mass: 4,
            tension: 50,
            friction: 20,
        }
    });

    const scaleSpring = useSpring({
        from: { scale: [[viewport.width / 100], [viewport.width / 100], [viewport.width / 100]] },
        to: { scale: [[viewport.width / viewport.height], [viewport.width / viewport.height], [viewport.width / viewport.height]] },
        config: {
            mass: 2,
            tension: 200,
            friction: 50,
        },
    });

    useFrame(({ clock }) => {
        if (!isFinished.current) {
            TMesh.current.rotation.x += Math.sin(clock.getElapsedTime()) * 0.0005;
            TMesh.current.rotation.y += Math.sin(clock.getElapsedTime()) * 0.0005;
            TMesh.current.position.y += Math.cos(clock.getElapsedTime() * 0.3) * 0.001;
        }
    })

    const { nodes, materials } = useGLTF("assets/t.gltf");
    return (
        <group {...props} dispose={null}>
            <animated.mesh
                castShadow
                receiveShadow
                geometry={nodes.T.geometry}
                material={materials["Dark Yellow Bubble Letter Material"]}
                position={positionSpring.position}
                rotation={rotationSpring.rotation}
                scale={scaleSpring.scale}
                ref={TMesh}
            />
        </group>
    );
}

export function LetterI(props) {

    const IMesh = React.useRef();
    const { viewport } = useThree();
    const isFinished = useRef(false);

    const positionSpring = useSpring({
        from: { position: [0, 0, 0] },
        to: { position: [viewport.width / 5, -viewport.width / 8, 0] },
    });

    const rotationSpring = useSpring({
        from: { rotation: [0, 0, 0] },
        to: { rotation: [Math.PI / 2, 0.2, 6] },
        config: { mass: 3, tension: 100, friction: 40 }
    });

    const scaleSpring = useSpring({
        from: { scale: [[viewport.width / 100], [viewport.width / 100], [viewport.width / 100]] },
        to: { scale: [[viewport.width / viewport.height], [viewport.width / viewport.height], [viewport.width / viewport.height]] },
        config: {
            mass: 2,
            tension: 200,
            friction: 50,
        },
    });

    useFrame(({ clock }) => {
        if (!isFinished.current) {
            IMesh.current.rotation.x += Math.sin(clock.getElapsedTime()) * 0.0005;
            IMesh.current.rotation.y += Math.sin(clock.getElapsedTime()) * 0.0005;
            IMesh.current.position.y += Math.sin(clock.getElapsedTime() * 0.8) * 0.0005;
        }
    })

    const { nodes, materials } = useGLTF("assets/i.gltf");
    return (
        <group {...props} dispose={null}>
            <animated.mesh
                castShadow
                receiveShadow
                geometry={nodes.I.geometry}
                material={materials["Pink Bubble Letter Material"]}
                position={positionSpring.position}
                rotation={rotationSpring.rotation}
                scale={scaleSpring.scale}
                ref={IMesh}
            />
        </group>
    );
}

export function LetterN(props) {

    const NMesh = React.useRef();
    const { viewport } = useThree();
    const isFinished = useRef(false);

    const positionSpring = useSpring({
        from: { position: [0, 0, 0] },
        to: { position: [viewport.width / 3, 0.1, 0] },
    });

    const rotationSpring = useSpring({
        from: { rotation: [0, 0, 0] },
        to: { rotation: [Math.PI / 2, -0.3, 6.3] },
        config: {
            mass: 3,
            tension: 100,
            friction: 40,
        }
    });

    const scaleSpring = useSpring({
        from: { scale: [[viewport.width / 100], [viewport.width / 100], [viewport.width / 100]] },
        to: { scale: [[viewport.width / viewport.height], [viewport.width / viewport.height], [viewport.width / viewport.height]] },
        config: {
            mass: 2,
            tension: 200,
            friction: 50,
        },
    });

    useFrame(({ clock }) => {
        if (!isFinished.current) {
            NMesh.current.rotation.x += Math.sin(clock.getElapsedTime()) * 0.0005;
            NMesh.current.rotation.y += Math.sin(clock.getElapsedTime()) * 0.0005;
            NMesh.current.position.y += Math.cos(clock.getElapsedTime() * 0.8) * 0.0005;
        }
    })

    const { nodes, materials } = useGLTF("assets/n.gltf");
    return (
        <group {...props} dispose={null}>
            <animated.mesh
                castShadow
                receiveShadow
                geometry={nodes.N.geometry}
                material={materials["Light Orange Bubble Letter Material"]}
                position={positionSpring.position}
                rotation={rotationSpring.rotation}
                scale={scaleSpring.scale}
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