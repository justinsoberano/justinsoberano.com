import React from "react";
import Background from "./components/background";

var styles = {
  div: {
    position: "absolute",
    top: "70%",
    left: "50%",
    transform: "translateX(-50%)",
    textAlign: "center",
  },
  h2: {
    background: "yellow",
    padding: '10px 20px',
    borderRadius: '10px',
    fontWeight: 'bold',
    border: '5px solid black',
  }
}


export default function App() {
  return (
    <>
    <Background />
    <div style={styles.div}>
      <h2 style ={styles.h2}>❤️ WORK IN PROGRESS ❤️</h2>
    </div>
    </>
  );
}