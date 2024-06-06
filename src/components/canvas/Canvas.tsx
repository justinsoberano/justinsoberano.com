// React and related hooks
import React, { Suspense, useEffect, useState } from "react";

// three.js and @react-three/fiber
import * as THREE from "three";
import { Canvas, extend, useThree, useFrame, Node } from "@react-three/fiber";
import { Effects, Stars } from "@react-three/drei";

// Post-processing effects from three.js
import { FilmPass } from "three/examples/jsm/postprocessing/FilmPass.js";
import { GlitchPass } from "three/examples/jsm/postprocessing/GlitchPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

// Local components and utilities
import { LoadingScreen } from "../LoadingScreen";
import { Buttons } from "../Buttons";
import { Planets } from "../../meshes/geometries/BackgroundPlanets";
import { LetterI, LetterJ, LetterU, LetterS, LetterT, LetterN } from "../../meshes/name/FirstName";
import { LastLetterO1, LastLetterS, LastLetterA, LastLetterB, LastLetterE, LastLetterN, LastLetterO2, LastLetterR } from "../../meshes/name/LastName";

// Styles
import "../styles/canvas_stylesheet.css";
import "../styles/global_stylesheet.css";

// Extending the available components in @react-three/fiber with custom passes
extend({ FilmPass, GlitchPass, UnrealBloomPass })

// Audio setup
const main = new Audio("assets/audio/main.mp3");
main.loop = true;

// Extending JSX Intrinsic Elements to include custom passes
declare global {
    namespace JSX {
        interface IntrinsicElements {
            unrealBloomPass: Omit<Node<UnrealBloomPass, typeof UnrealBloomPass>, 'args'> & {
                attachArray?: string;
                args?: [number | undefined, number, number, number];
              };
              filmPass: Omit<Node<FilmPass, typeof FilmPass>, 'args'> & {
                attachArray?: string;
                args?: [number, number, number, boolean];
              };
        }
    }
}

// Component for camera animation
const CameraAnimation: React.FC = () => {
    const [started, setStarted] = useState(false);
    const [musicStarted, setMusicStarted] = useState(false);
    const vec = new THREE.Vector3();
    const { viewport } = useThree();

    // Start the animation after a delay
    useEffect(() => {
        setTimeout(() => setStarted(true), 2000);
    }, []);

    // Animate the camera position
    useFrame(state => {
        if (started) {
            if (!musicStarted) {
                setMusicStarted(true);
            }
            if (viewport.aspect > 1) 
                state.camera.position.lerp(vec.set(0, -3, 7), .025);
            else if (viewport.aspect <= 1) 
                state.camera.position.lerp(vec.set(0, -3, 5), .025);
        }
    });
    return null;
}

// Main background component
const Background: React.FC = () =>{

    const [start, setStart] = useState(false)
    const [showSound, setShowSound] = useState(true)

    const pauseAudio = () => {
        main.pause();
    }

    const startAudio = () => {
        main.play();
    }

    // Play the audio when 'start' state changes to true
    useEffect(() => {
        if(start) {
            main.play();
        }
    }, [start]);

    return (
        <>
            <Canvas dpr={1} shadows>
                <Stars radius={0.1} depth={30} count={2000} factor={0.7} saturation={2} fade speed={2} />
                <Suspense fallback={null}> {start && 
                    <>
                        <color attach={"background"} args={["rgb(0, 0, 0)"]} />
                        {/* <gridHelper args={[100, 100, 100]} rotation-x={Math.PI / 2} /> */}
                        <FirstName />
                        <LastName />
                        <Planets />
                        <CameraAnimation />
                    </>
                } </Suspense>
                <EffectsComposer />
            </Canvas>
            {start && <Buttons />}
            <div>
                {start && showSound && <p className={'soundtext'}
                onClick={() => {pauseAudio(); setShowSound(false)}}> PAUSE MUSIC </p>}
                {start && !showSound && <p className={'soundtext'}
                onClick={() => {startAudio(); setShowSound(true)}}> UNPAUSE MUSIC </p>}
            </div>
            
            <LoadingScreen started={start} onStarted={() => setStart(true)} />
        </>
    );  
}

// Component for rendering first name letters
const FirstName: React.FC = () => {
    return (
        <group>
            <LetterJ />
            <LetterU />
            <LetterS />
            <LetterT />
            <LetterI />
            <LetterN />
        </group>
    );
}

// Component for rendering last name letters
const LastName: React.FC = () => {
    return(
        <group>
            <LastLetterS />
            <LastLetterO1 />
            <LastLetterB />
            <LastLetterE />
            <LastLetterR />
            <LastLetterA />
            <LastLetterN />
            <LastLetterO2 />
        </group>
    )
}

// Component for rendering effects
const EffectsComposer: React.FC = () => {
    const {viewport} = useThree();
    let bloom = viewport.aspect >= 1 ? 0.6 : 0.8;
    return (
        <group>
            <Effects>
                <unrealBloomPass attachArray={"passes"} args={[undefined, bloom, 2.2, 0.7]} />
                <filmPass attachArray={"passes"} args={[0.5, 0.5, 1024, false]} />
            </Effects>
        </group>
    )
}

export default Background;