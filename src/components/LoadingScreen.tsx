import React from "react";
import "./styles/loading_stylesheet.css"

export const LoadingScreen: React.FC<{ 
    started: boolean; onStarted: 
    () => void }> = ({ started, onStarted }) => {
    return (
        <>
            <div className={ started ? "loadingScreen--started" : "loadingScreen"} style={{
                position: "absolute",
                top: "0%",
            }}>
                <p className={"top-text"}> Ready Player One? </p>
                <p className={"ready-text"} onClick={onStarted}> {'>'} INSERT COIN {'<'}</p>
                <p style={{
                    position: "absolute",
                    top: "95%",
                    left: "1%",
                    fontSize: "15px",
                    color: "white",
                    fontFamily: "Minecraft",
                    fontStyle: "normal",
                    letterSpacing: "2px",
                }}>
                <a href="https://github.com/justinsoberano/justinsoberano.com"
                target="_blank" style={{color: "white", cursor: "pointer"}}>
                v2.4.2 </a> 
                
                </p>
            </div>
        </>
    );
}