import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Box } from "./meshes/geometryMeshes"
import { LetterI, LetterJ } from "./meshes/letterMeshes";

export default function App() {
  return (
    <Canvas>
      <OrbitControls />
      <LetterJ />
      <LetterI />
    </Canvas>
  );
}