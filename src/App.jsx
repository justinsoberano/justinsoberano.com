import React from "react";
import Background from "./components/Canvas";
import Buttons from "./components/Buttons";

/* Remove styles whenever finished with website */

var styles = {
  div: {
    position: "absolute",
    top: "70%",
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
    <Buttons />
    {/* <div style={styles.div}>
      <h3 style={styles.h2}>❤️ WORK IN PROGRESS ❤️</h3>
        <a style={styles.p} 
          rel="noreferrer"
           href="https://github.com/justinsoberano/justinsoberano.com" 
          target="_blank"> View Github Repository </a>
    </div> */}
    </>
  );
}