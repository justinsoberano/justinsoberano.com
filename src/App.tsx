import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Box } from "./geometries/geometry.tsx"

export default function App() {
  return (
    <Canvas>
      <OrbitControls />
      <Box />
    </Canvas>
  );
}