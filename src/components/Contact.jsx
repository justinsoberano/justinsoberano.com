import React, { useState, useEffect } from 'react';
import { useSpring, a } from '@react-spring/web';
import './styles/button_stylesheet.css';
import './styles/backbutton_stylesheet.css';

export const Contact = props => {

    let toggle = props.s

    function ContactSpring() {
        return useSpring({
            from: !toggle ? { opacity: 1, transform: "translateY(450px)" } : { opacity: 0, transform: "translateY(0px)" },
            to: !toggle ? { opacity: 1, transform: "translateY(0px)" } : { opacity: 0, transform: "translateY(450px)" },
            delay: 0,
            config: { mass: 1, tension: 200, friction: 50 }
        })
    }

    return (
        <div>

            <a.div className="flex-container" style={{ ...ContactSpring() }}>

                <a.div className="button-design noselect white"
                    style={{ ...ContactSpring() }}>
                    <span className="button-text">LinkedIn</span>
                </a.div>

                <a.div className="button-design noselect white"
                    style={{ ...ContactSpring() }}>
                    <span className="button-text">GitHub</span>
                </a.div>

                <a.div className="button-design noselect white" 
                    style={{ ...ContactSpring() }}>
                    <span className="button-text">Resume</span>
                </a.div>

                <a.div className="button-design noselect white"
                    style={{ ...ContactSpring() }}>
                    <span className="button-text">Email</span>
                </a.div>

                <a.div className="back-button"
                    onClick={() => {
                        props.changeShow(true);
                        props.changeTimer(100)
                        props.changeShowContact(true)
                    }}
                    style={{ ...ContactSpring() }}>
                    <span className="button-text">Back</span>
                </a.div>

            </a.div>
        </div>
    )
}
