import React, { Suspense, useEffect, useState } from "react";
import Background from "./components/Canvas";
import {Buttons, Wxperience} from "./components/Buttons";
import { Html, Plane } from "@react-three/drei";
import { Experience } from "./components/Cards";

/* Remove styles whenever finished with website */

var styles = {
  div: {
    position: "absolute",
    top: "0%",
    left: "50%",
    transform: "translateX(-50%)",
    textAlign: "center",
  },
  h2: {
    background: "rgb(255,200,255)",
    padding: '10px 20px',
    borderRadius: '10px',
    fontWeight: 'bold',
    border: '5px solid black',
  },
  p: {
    fontFamily: 'Monospace',
    fontSize: '15px',
    fontWeight: 'bold',
    color: 'white',
  }
}

export default function App() {
  return (
    <>
      <Background />
    </>
  );
}