import React from "react";
import CContext from "./CContext";

function BContext() {
    return (
        <div style={{ marginLeft: "20px" }}>
            <h4>This is Component B (Intermediate)</h4>
            <CContext />
        </div>
    );
}

export default BContext;
