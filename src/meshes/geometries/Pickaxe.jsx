
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";


export default function Pickaxe(props) {
    const { viewport } = useThree();
    const { nodes, materials } = useGLTF("assets/geometries/pickaxe.glb");
    return (
        <group {...props} dispose={null}>
            <group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_2.geometry}
                    material={materials["Material.009"]}
                    position={[0, -4, 0]}
                    rotation={[0, 2.3, 2]}
                    scale={[0.05, 0.05, 0.05]}
                />
            </group>
        </group>
    );
}

useGLTF.preload("assets/geometries/pickaxe.glb");