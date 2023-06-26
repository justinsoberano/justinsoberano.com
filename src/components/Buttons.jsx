import React, { useEffect, useState } from "react";
import {useSpring , a} from "@react-spring/web";
import "./styles.css";
import "./cardstyle.css"
import { Experience } from "./Cards";

/* Try to use maps to create the buttons */
/* Use 'useTrail' to animate the buttons */

export function Buttons() {
    
    function ButtonSprings(delay) {
        return useSpring({
            from: toggle ? { opacity: 0, transform: "translateY(100px)" } : { opacity: 1, transform: "translateY(0px)" },
            to: toggle ? { opacity: 1, transform: "translateY(0px)" } : { opacity: 0, transform: "translateY(100px)"},
            delay: toggle ? delay : 0,
            config: toggle ? { mass: 2, tension: 200, friction: 50 } : { mass: 10, tension: 1000, friction: 75 }
        })
    }

    const [toggle, set] = useState(true);

    return(
        <div>
            <a.div className="flex-container" style={{ ...ButtonSprings(2250)}}>
                <a.div className="button-design noselect yellow" onClick={() => set(!toggle)} style={{...ButtonSprings(2250)}}>
                    <span className="button-text">experiences</span>
                </a.div>
            <a.div className="button-design noselect aqua" onClick={() => set(!toggle)} style={{...ButtonSprings(2300)}}>
                    <span className="button-text">projects</span>
                </a.div>
            <a.div className="button-design noselect coral" onClick={() => set(!toggle)} style={{ ...ButtonSprings(2400)}}>
                    <span className="button-text">involvement</span>
                </a.div>
            <a.div className="button-design noselect pink" onClick={() => set(!toggle)} style={{ ...ButtonSprings(2450)}}>
                    <span className="button-text">contact</span>
                </a.div>
            </a.div>
            
            <Experience 
                show = {toggle}
            />
        </div>

    );
}
