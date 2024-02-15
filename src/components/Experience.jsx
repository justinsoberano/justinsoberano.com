import React from 'react';
import { useSpring, a } from '@react-spring/web';
import './styles/card_stylesheet.css';
import tech_stack1 from "../images/experience_images/Tech_1.png";
import tech_stack2 from "../images/experience_images/Tech_2.png";
import tech_stack3 from "../images/experience_images/Tech_3.png";
import nasa from "../images/experience_images/nasa_logo_white.png";
import isu from "../images/experience_images/isu.png";

export const Experience = props => {

    let toggle = props.s

    function CardSpring() {
        return useSpring({
            from: !toggle ? { opacity: 1, transform: "translateY(450px)" } : { opacity: 0, transform: "translateY(0px)" },
            to: !toggle ? { opacity: 1, transform: "translateY(0px)" } : { opacity: 0, transform: "translateY(450px)" },
            delay: 0,
            config: { mass: 1, tension: 200, friction: 50 }
        })
    }

    return (
        <>
            <a.div className="container noselect" style={{ ...CardSpring() }} key={toggle}>
                
                <div className="card-design">
                    <div className="computer-image">
                        <img style={{ opacity: "0" }} src="https://picsum.photos/325/150" alt="image" />
                    </div>
                    <img className="tech-stack" src={tech_stack2} alt="image" />
                    <img className="employer" src={nasa} alt="image" />
                    <p className="job-dates"> JUN '23 - AUG '23 </p>
                    <p className="job-title">SWE - Spacesuits Intern</p>
                    <p className="job-description">Developed a telemetry collection system for spacesuits.
                        This system will be used for mental state determination when astronauts go to Mars! :D </p>
                </div>


                <div className="card-design">
                    <div className="mars-image">
                        <img style={{ opacity: "0" }} src="https://picsum.photos/325/150" alt="image" />
                    </div>
                    <img className="tech-stack" src={tech_stack1} alt="image" />
                    <img className="employer" src={nasa} alt="image" />
                    <p className="job-dates"> AUG '22 - DEC '22 </p>
                    <p className="job-title">SWE - Digital Twins Intern</p>
                    <p className="job-description">In a team of four, we developed a virtual
                        hyperrealistic Martian environment. These environments will be used to train
                        astronauts for future Artemis missions. Currently being used by 
                        <a href="https://www.nasa.gov/chapea" target="_blank"
                        style={{color: "lightblue",
                                fontWeight: "800"
                            }}> NASA's CHAPEA</a> group!</p>
                </div>

                <div className="card-design">
                    <div className="durham-image">
                        <img style={{ opacity: "0" }} src="https://picsum.photos/325/150" alt="image" />
                    </div>
                    <img className="tech-stack" src={tech_stack3} alt="image" />
                    <img className="employer" src={isu} alt="image" />
                    <p className="job-dates"> JAN '22 - MAY '22 </p>
                    <p className="job-title">Technical Assistant</p>
                    <p className="job-description">Worked with a team of nine to monitor and administer administration level
                        devices all throughout campus. Helped order IT equipment for various departments when needed. </p>
                </div>

                <div className="card-back-button" style={{ ...CardSpring() }} onClick={() => {
                    props.changeShow(true);
                    props.changeTimer(100)
                    props.changeShowExperience(true)
                }}>
                    <p> BACK </p>
                </div>

            </a.div>
        </>
    )
}
