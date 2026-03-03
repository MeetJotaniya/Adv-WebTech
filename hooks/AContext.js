import React, { createContext } from "react";
import BContext from "./BContext";

export const MessageContext = createContext();

function AContext() {
    const msg = "Hello from Component A using useContext";

    return (
        <MessageContext.Provider value={msg}>
            <div style={{ padding: "10px", border: "1px solid #ccc", margin: "10px 0" }}>
                <h2>useContext Demo</h2>
                <h3>This is Component A (Context Provider)</h3>
                <BContext />
            </div>
        </MessageContext.Provider>
    );
}

export default AContext;
