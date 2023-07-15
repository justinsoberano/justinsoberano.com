import React, { useState, useEffect } from 'react';
import { useSpring, a } from '@react-spring/web';
import './cardstyle.css';


export const Experience = props => {

    let toggle = props.s

    function CardSpring() {
        return useSpring({
            from: !toggle ? { opacity: 0, transform: "translateY(450px)" } : { opacity: 1, transform: "translateY(0px)" },
            to: !toggle ? { opacity: 1, transform: "translateY(0px)" } : { opacity: 0, transform: "translateY(450px)" },
            delay: 0,
            config: { mass: 1, tension: 200, friction: 50 }
        })
    }

    return (
        <>
            <a.div className="container" style={{ ...CardSpring() }} key={toggle}>
                <div className="back-button" style={{ ...CardSpring() }} onClick={() => {
                    props.changeShow(true);
                    props.changeTimer(100)
                }}>
                    <p className="back-button-text"> BACK </p>
                </div>
                <div className="card-design">
                    <img className="image" src="https://picsum.photos/400/150" />
                    <h1 className="employer">NASA</h1>
                    <p className="job-dates"> JUN '23 - AUG '23 </p>
                    <p className="job-title">AI/ML - Computer Vision Intern</p>
                    <p className="job-description">Developed a image-to-3D AI model that uses depth analysis,
                        image view synthesis, and a bunch of other cool algorithms.
                        A super cool experience!</p>
                </div>
                <div className="card-design">
                    <img className="image" src="https://picsum.photos/400/150" />
                    <h1 className="employer">NASA</h1>
                    <p className="job-dates"> AUG '22 - DEC '22 </p>
                    <p className="job-title">XR/VR - Digital Twins Intern</p>
                    <p className="job-description">Worked in a team of four to help design and develop a virtual Mars
                        environment. These environments will be used to train future astronauts
                        for future Mars exploration! </p>
                </div>
                <div className="card-design">
                    <img className="image" src="https://picsum.photos/400/150" />
                    <h1 className="employer">ISU IT Dept.</h1>
                    <p className="job-dates"> AUG '22 - DEC '22 </p>
                    <p className="job-title">Technical Assistant II</p>
                    <p className="job-description">Worked in a team of 10 to help service administration level machines
                        throughout campus. Helped other departments order IT equiment when
                        needed.</p>
                </div>
            </a.div>
        </>
    )
}