import React, { Suspense, useEffect, useState } from "react";
import Background from "./components/render_engine/Canvas";

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

  useEffect(() => {
    const isFirefox = typeof InstallTrigger !== 'undefined';
    if (isFirefox) {
      alert("This website is not optimized for Firefox. Currently working on a fix :)")
    }
  }, []);

  useEffect(() => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.platform);
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (isIOS && isSafari) {
      alert('This webpage is not optiimized for Safari on iPad. Working on getting it to work properly :)');
    }
  }, []);

  return (
    <>
      <Background />
    </>
  );
}