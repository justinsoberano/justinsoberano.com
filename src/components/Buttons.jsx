import React from "react";
import "./styles.css";

export default function Buttons() {
    return(
        <div className="flex-container">
            <div className="button-design noselect yellow">
                <span className="button-text">experiences</span>
            </div>
            <div className="button-design noselect aqua">
                <span className="button-text">projects</span>
            </div>
            <div className="button-design noselect coral">
                <span className="button-text">involvement</span>
            </div>
            <div className="button-design noselect pink">
                <span className="button-text">contact</span>
            </div>
        </div>
    );
}

