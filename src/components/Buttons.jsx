import React, { useState } from "react";
import {useTrail, useSpring , a} from "@react-spring/web";
import "./styles.css";

/* Try to use maps to create the buttons */
/* Use 'useTrail' to animate the buttons */

export default function Buttons() {

    function Springs(delay) {
        return useSpring({
            from: { opacity: 0, transform: "translateY(100px)" },
            to: { opacity: 1, transform: "translateY(0px)" },
            delay: delay,
            config: { mass: 2, tension: 200, friction: 50, },
        })
    }

    return(
        <div className="flex-container">
            <a.div className="button-design noselect yellow" style={{...Springs(2250)}}>
                <span className="button-text">experiences</span>
            </a.div>
            <a.div className="button-design noselect aqua" style={{...Springs(2300)}}>
                <span className="button-text">projects</span>
            </a.div>
            <a.div className="button-design noselect coral" style={{ ...Springs(2400)}}>
                <span className="button-text">involvement</span>
            </a.div>
            <a.div className="button-design noselect pink" style={{ ...Springs(2450)}}>
                <span className="button-text">contact</span>
            </a.div>
        </div>
    );
}

