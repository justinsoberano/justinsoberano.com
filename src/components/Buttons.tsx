import { useState } from "react";
import { useSpring , a } from "@react-spring/web";
import { Experience } from "./Experience";
import { Contact } from "./Contact";
import { Involvement } from "./Involvement";
import { Projects } from "./Projects";
import "./styles/button_stylesheet.css";
import "./styles/card_stylesheet.css"
import "./styles/global_stylesheet.css"

export const Buttons = () => {
    function ButtonSprings(delay: number) {
        return useSpring({
            from: showButtons
                ? { opacity: 0, transform: "translateY(100px)" }
                : { opacity: 1, transform: "translateY(0px)" },
            to: showButtons
                ? { opacity: 1, transform: "translateY(0px)" }
                : { opacity: 0, transform: "translateY(100px)" },
            delay: showButtons ? delay : 0, 
            config: showButtons
                ? { mass: 4, tension: 200, friction: 40 }
                : { mass: 1, tension: 200, friction: 40 },
        });
    }

    const [timer, setTimer] = useState(2300);
    const [showButtons, setButtons] = useState(true);
    const [showExperience, setExperience] = useState(true);
    const [showProjects, setProjects] = useState(true); 
    const [showInvolvement, setInvolvement] = useState(true);
    const [showContact, setContact] = useState(true); 

    return(
        <div>
            <a.div className="noselect button-container" style={{ ...ButtonSprings(timer)}}>
                <a.div className="button-design yellow" 
                       onClick={() => {setButtons(!showButtons); setExperience(!showExperience);} } 
                       style={{...ButtonSprings(timer + 50)}}>
                    <span className="button-text">experiences</span>
                </a.div>
                <a.div className="button-design aqua"
                       onClick={() => { setButtons(!showButtons); setProjects(!showProjects); }} 
                       style={{ ...ButtonSprings(timer + 100) }}>
                    <span className="button-text">projects</span>
                </a.div>
                <a.div className="button-design purple"
                       onClick={() => { setButtons(!showButtons); setInvolvement(!showInvolvement); }}    
                       style={{ ...ButtonSprings(timer + 150) }}>
                    <span className="button-text">involvement</span>
                </a.div>
                <a.div className="button-design pink"
                       onClick={() => { setButtons(!showButtons); setContact(!showContact); }}  
                       style={{ ...ButtonSprings(timer + 200) }}>
                    <span className="button-text">contact</span>
                </a.div>
            </a.div>
            <Experience
                changeShow={show => setButtons(show)}
                changeTimer={timer => setTimer(timer)}
                changeShowExperience={showExperience => setExperience(showExperience)}
                s={showExperience}
            />
            <Projects
                changeShow={show => setButtons(show)}
                changeTimer={timer => setTimer(timer)}
                changeShowProjects={showProjects => setProjects(showProjects)}
                s={showProjects}
            />
            <Involvement
                changeShow={show => setButtons(show)}
                changeTimer={timer => setTimer(timer)}
                changeShowInvolvement={showInvolvement => setInvolvement(showInvolvement)}
                s={showInvolvement}
            />
            <Contact
                changeShow={show => setButtons(show)}
                changeTimer={timer => setTimer(timer)}
                changeShowContact={showContact => setContact(showContact)}
                s={showContact}
            />
        </div>
    );
}