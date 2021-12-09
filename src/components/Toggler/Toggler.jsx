/*
    File name - Toggler.jsx
    Created on - Wednesday 08 December 2021 02:30:31 PM
    Last Modified On- Wednesday 08 December 2021 02:36:22 PM
    Author -  Vigneshwaran Jheyaraman (VickySuraj)
*/

import React from "react";
import "./Toggler.css";

export default function Toggler(props) {
    let {value, onChange, label} = props;
    value = value || false;
    function onValueChange(e) {
        onChange && onChange(e);
    }
    return (
        <div className="toggler">
            {
                label && value? <div className="toggle-label">{label}</div> : null
            }
            <input
                type="checkbox"
                defaultValue={value}
                onChange={onValueChange}
            />
        </div>
    );
}
