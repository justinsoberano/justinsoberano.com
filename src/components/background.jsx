import React from "react";
import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { LetterI, LetterJ, LetterU, LetterS, LetterT, LetterN } from "../meshes/letterMeshes";

export default function Background() {
    return (
        <Canvas>
            <color attach={"background"} args={["rgb(245, 245, 247)"]} />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 15, 10]} angle={0.3} />
            <LetterJ />
            <LetterU />
            <LetterS />
            <LetterT />
            <LetterI />
            <LetterN />
            <Html>
                <nav>
                    <p>
                        COMING SOON
                    </p>
                </nav>
            </Html>
        </Canvas>
    );  
}