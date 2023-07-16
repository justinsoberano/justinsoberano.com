import React from "react";
import { useProgress } from "@react-three/drei";
import "./styles/loading_stylesheet.css"

export const LoadingScreen = ({started, onStarted}) => {
    return (
        <>
            <div className={ started ? "loadingScreen--started" : "loadingScreen"} style={{
                position: "absolute",
                top: "0%",
            }}>
                <p className={"top-text"}>Ready Player One?</p>
                <p className={"ready-text"} onClick={onStarted}> {'>'} INSERT COIN {'<'}</p>
                <p style={{
                    position: "absolute",
                    top: "90%",
                    color: "yellow",
                    fontSize: "20px",
                    fontFamily: "Minecraft",
                    fontStyle: "italic",
                    letterSpacing: "2px",
                    fontWeight: "bold",

                }}> Website is still a work in progress!</p>
            </div>
        </>
    );
}