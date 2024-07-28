import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { LoadingScreen } from "../utils/LoadingScreen";
import { Menu } from "../Menu";
import { Planets } from "../../meshes/geometries/BackgroundPlanets";
import CameraAnimation from "./helpers/CameraAnimation";
import FirstName from "./helpers/FirstName";
import LastName from "./helpers/LastName";
import EffectsComposer from "./helpers/EffectsComposer";
import { Sound } from "./styles/CanvasStyles";

const main = new Audio("assets/audio/main.mp3");
main.loop = true;

const ThreeDEnv = () => {
  return (<>
    <FirstName />
    <LastName />
    <Planets />
    <CameraAnimation />
  </>)
};

const Background: React.FC = () => {
  const [start, setStart] = useState(false);
  const [audio, setAudio] = useState(true);
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);
  const handleAudio = (audio: boolean) => {
    audio ? (main.play()) : (main.pause())
    setAudio(audio)
  };
  const handleShowLoadingScreen = () => {
    setStart(true);
    main.play();
    setTimeout(() => {setShowLoadingScreen(false)}, 200);
  };
  return (
    <>
      <Canvas dpr={1} shadows>
        <EffectsComposer />
        <Stars radius={0.1} depth={30} count={2000} factor={0.7} saturation={2} fade speed={2} />
        <Suspense fallback={null}> {start && <ThreeDEnv/>} </Suspense>
      </Canvas>
      {start && (<>
        <Menu />
        <Sound onClick={() => handleAudio(!audio)}>
          {audio ? "PAUSE MUSIC" : "PLAY MUSIC"}
        </Sound>
      </>)}
      {showLoadingScreen && <LoadingScreen started={start} onStarted={handleShowLoadingScreen} />}
    </>
  );
};
export default Background;