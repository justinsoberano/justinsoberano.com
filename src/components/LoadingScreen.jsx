import React from "react";
import { useProgress } from "@react-three/drei";
import "./loadingstyle.css"

export const LoadingScreen = ({started, onStarted}) => {
    return (
        <>
            <div className={ started ? "loadingScreen--started" : "loadingScreen"} style={{
                position: "absolute",
                top: "0%",
            }}>
                <p style= {{
                    color: "white",
                    fontSize: "20px",
                    fontFamily: "Minecraft",
                    fontWeight: "bold",
                }}>Ready Player One</p>
                <p style={{ 
                    position: "absolute",
                    top: "70%",
                    color: "yellow",
                    fontSize: "20px",
                    fontFamily: "Minecraft",
                    fontStyle: "italic",
                }}> Website is still a work in progress!</p>
                <p style={{
                    position: "absolute",
                    fontFamily: "Minecraft",
                    fontSize: "20px",
                    color: "white",
                    top: "51%",
                    cursor: "pointer",
                }}onClick={onStarted}> {'>'} INSERT COIN {'<'}</p>
            </div>
        </>
    );
}