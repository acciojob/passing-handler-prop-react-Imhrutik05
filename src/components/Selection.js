import React, { useState } from "react";

function Selection({applyColor}){
    const [selectionStyle, setSelectionStyle] = useState({background: "" });

    return (
        <div
            className="fix-box"
            style={{
                width: '200px',
                height: '200px',
                border: '2px solid white',
                cursor: 'pointer',
                borderRadius: "5px",
                ...selectionStyle
            }}
         
            onClick={() => applyColor(setSelectionStyle)}>
                <p style={{color: "white", fontWeight: 600, fontSize: 22, textAlign: "center"}}>Selection</p>
        </div>
    );
}

export default Selection;

