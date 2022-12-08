import React from "react";
import "./color-picker.css";
const ColorPicker = (props) => {
  const { color, name, active, clickfun } = props;
  const hide ={display:"none"};
  const show ={display:"block"};
  return (
    <div className="color-picker-main mx-2" onClick={clickfun}>
      <div className="color-picker-color" style={{ backgroundColor: color }}>
        <div className="right-check" style={active ?  show: hide}><i className="right-check-icon bi bi-check-lg pb-3"></i></div>
      </div>
      <div className={`color-picker-Name ${active ? "pink-text" : ""}`}>
        {name}
      </div>
    </div>
  );
};

export default ColorPicker;
