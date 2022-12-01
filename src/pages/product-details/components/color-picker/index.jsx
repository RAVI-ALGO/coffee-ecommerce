import React from "react";
import "./color-picker.css";

const ColorPicker = (props) =>{
    const {color,name,active}=props;
    console.log(color);
    return <div className="color-picker-main">
        <div className="color-picker-color"style={{backgroundColor:color}}></div>
        <div className={`color-picker-Name ${active ? "pink-text" : ""}`}>{name}</div>

    </div>
}

export default ColorPicker ;