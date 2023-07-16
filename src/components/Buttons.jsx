import React, { useEffect, useState } from "react";
import {useSpring , a} from "@react-spring/web";
import { Experience } from "./Cards";
import "./styles/button_stylesheet.css";
import "./styles/card_stylesheet.css"

/* Try to use maps to create the buttons */
/* Use 'useTrail' to animate the buttons */

export const Buttons = () => {
    
    function ButtonSprings(delay) {
        return useSpring({
            from: show ? { opacity: 0, transform: "translateY(100px)" } : { opacity: 1, transform: "translateY(0px)" },
            to: show ? { opacity: 1, transform: "translateY(0px)" } : { opacity: 0, transform: "translateY(100px)"},
            delay: show ? delay: 0,
            config: show ? { mass: 2, tension: 200, friction: 50 } : {mass: 7, tension: 400, friction: 20}
        })
    }

    const [timer, setTimer] = useState(2200)
    const [show, set] = useState(true);
    const [showExperience, setExperience] = useState(show)

    return(
        <div>
            <a.div className="flex-container" style={{ ...ButtonSprings(timer)}}>
                <a.div className="button-design noselect yellow" onClick={() => set(!show)} style={{...ButtonSprings(timer + 50)}}>
                    <span className="button-text">experiences</span>
                </a.div>
                
                <a.div className="unimplemented-button noselect" style={{ ...ButtonSprings(timer + 100) }}>
                    <span className="unimplemented-button-text">projects</span>
                </a.div>
                <a.div className="unimplemented-button noselect" style={{ ...ButtonSprings(timer + 150) }}>
                    <span className="unimplemented-button-text">involvement</span>
                </a.div>
                <a.div className="unimplemented-button noselect" style={{ ...ButtonSprings(timer + 200) }}>
                    <span className="unimplemented-button-text">contact</span>
                </a.div>
            
            
            {/* <a.div className="button-design noselect aqua" onClick={() => set(!show)} style={{...ButtonSprings(timer + 100)}}>
                    <span className="button-text">projects</span>
                </a.div>
            <a.div className="button-design noselect coral" onClick={() => set(!show)} style={{ ...ButtonSprings(timer + 150)}}>
                    <span className="button-text">involvement</span>
                </a.div>
            <a.div className="button-design noselect pink" onClick={() => set(!show)} style={{ ...ButtonSprings(timer + 200)}}>
                    <span className="button-text">contact</span>
                </a.div> */}

            </a.div>
            
            <Experience
                changeShow = {show => set(show)}
                changeTimer = {timer => setTimer(timer)}
                s = { show }
            />
        </div>

    );
}

// export const Wxperience = props => {

//     let toggle = props.s

//     function CardSpring() {
//         return useSpring({
//             from: !toggle ? { opacity: 1, transform: "translateY(400px)" } : { opacity: 0, transform: "translateY(0px)" },
//             to: !toggle ? { opacity: 1, transform: "translateY(0px)" } : { opacity: 0, transform: "translateY(400px)" },
//             delay: 200,
//             config: { mass: 2, tension: 200, friction: 50 }
//         })
//     }

//     return (
//         <>
//             <a.div className="container" style={{ ...CardSpring() }} key={toggle}>
//                 <div className="back-button" onClick={() => props.changeShow(true)}>
//                     <p> BACK </p>
//                 </div>
//                 <div className="card-design">
//                     <img className="image" src="https://picsum.photos/400/150" />
//                     <h1 className="employer">NASA</h1>
//                     <p className="job-dates"> JUN '23 - AUG '23 </p>
//                     <p className="job-title">AI/ML - Computer Vision Intern</p>
//                     <p className="job-description">Developed a image-to-3D AI model that uses depth analysis,
//                         image view synthesis, and a bunch of other cool algorithms.
//                         A super cool experience!</p>
//                 </div>
//                 <div className="card-design">
//                     <img className="image" src="https://picsum.photos/400/150" />
//                     <h1 className="employer">NASA</h1>
//                     <p className="job-dates"> AUG '22 - DEC '22 </p>
//                     <p className="job-title">XR/VR - Digital Twins Intern</p>
//                     <p className="job-description">Worked in a team of four to help design and develop a virtual Mars
//                         environment. These environments will be used to train future astronauts
//                         for future Mars exploration! </p>
//                 </div>
//                 <div className="card-design">
//                     <img className="image" src="https://picsum.photos/400/150" />
//                     <h1 className="employer">ISU IT Dept.</h1>
//                     <p className="job-dates"> AUG '22 - DEC '22 </p>
//                     <p className="job-title">Technical Assistant II</p>
//                     <p className="job-description">Worked in a team of 10 to help service administration level machines
//                         throughout campus. Helped other departments order IT equiment when
//                         needed.</p>
//                 </div>
//             </a.div>
//         </>
//     )
// }
