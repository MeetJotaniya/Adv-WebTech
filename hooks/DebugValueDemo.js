import React, { useState, useDebugValue } from "react";

function useIsOnline() {
    const [isOnline, setIsOnline] = useState(true);

    // useDebugValue shows a label in React DevTools next to this custom hook
    useDebugValue(isOnline ? "User is Online" : "User is Offline");

    return [isOnline, setIsOnline];
}

function DebugValueDemo() {
    const [isOnline, setIsOnline] = useIsOnline();

    return (
        <div style={{ padding: "10px", border: "1px solid #ccc", margin: "10px 0" }}>
            <h3>useDebugValue Demo</h3>
            <p>Status: {isOnline ? "Online 🟢" : "Offline 🔴"}</p>
            <button onClick={() => setIsOnline(!isOnline)}>Toggle Status</button>
            <p style={{ fontSize: "12px", color: "gray", marginTop: "10px" }}>
                Inspect in React DevTools Components tab to see the custom hook debug value.
            </p>
        </div>
    );
}

export default DebugValueDemo;
