import React, { useContext } from "react";
import { MessageContext } from "./AContext";

function CContext() {
    const message = useContext(MessageContext);

    return (
        <div style={{ marginLeft: "20px" }}>
            <h5>This is Component C (Context Consumer)</h5>
            <p style={{ color: "blue", fontWeight: "bold" }}>
                Message from A Context: {message}
            </p>
        </div>
    );
}

export default CContext;
