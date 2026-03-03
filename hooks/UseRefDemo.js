import React, { useRef } from "react";

function UseRefDemo() {
    const inputRef = useRef(null);

    const handleFocus = () => {
        // Access the DOM element directly to call focus()
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div style={{ padding: "10px", border: "1px solid #ccc", margin: "10px 0" }}>
            <h3>useRef Demo</h3>
            <div>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Click the button to focus me"
                    style={{ padding: "5px", width: "200px" }}
                />
                <button onClick={handleFocus} style={{ marginLeft: "10px", padding: "5px 10px" }}>
                    Focus Input
                </button>
            </div>
            <p style={{ fontSize: "14px", color: "gray", marginTop: "10px" }}>
                The <code>useRef</code> hook is used here to securely access the input DOM element without triggering re-renders.
            </p>
        </div>
    );
}

export default UseRefDemo;
