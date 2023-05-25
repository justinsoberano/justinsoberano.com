
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function LetterJ(props) {
    const { nodes, materials } = useGLTF("assets/j.gltf");
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.J.geometry}
                material={materials["Light Blue Bubble Letter Material"]}
                position={[0, 0, 0]}
            />
        </group>
    );
}

export function LetterI(props) {
    const { nodes, materials } = useGLTF("assets/i.gltf");
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.I.geometry}
                material={materials["Pink Bubble Letter Material"]}
                position={[1, 0, 0]}
            />
        </group>
    );
}

export function LetterU(props) {
    const { nodes, materials } = useGLTF("assets/u.gltf");
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.U.geometry}
                material={materials["Dark Brown Bubble Letter Material"]}
                position={[2, 0, 0]}
            />
        </group>
    );
}

export function LetterS(props) {
    const { nodes, materials } = useGLTF("assets/s.gltf");
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.S.geometry}
                material={materials["Dark Green Bubble Letter Material"]}
                position={[3, 0, 0]}
            />
        </group>
    );
}

export function LetterN(props) {
    const { nodes, materials } = useGLTF("assets/n.gltf");
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.N.geometry}
                material={materials["Light Green Bubble Letter Material"]}
                position={[4, 0, 0]}
            />
        </group>
    );
}

export function LetterT(props) {
    const { nodes, materials } = useGLTF("assets/t.gltf");
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.T.geometry}
                material={materials["Dark Blue Bubble Letter Material"]}
                position={[5, 0, 0]}
            />
        </group>
    );
}


useGLTF.preload("assets/j.gltf");