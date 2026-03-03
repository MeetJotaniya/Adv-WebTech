import React, { useState, useDeferredValue, useMemo } from "react";

function SlowList({ text }) {
    const items = useMemo(() => {
        let result = [];
        for (let i = 0; i < 5000; i++) {
            result.push(<li key={i}>{text} Item {i}</li>);
        }
        return result;
    }, [text]);

    return <ul style={{ height: "150px", overflow: "auto", border: "1px solid #eee", padding: "10px" }}>{items}</ul>;
}

function DeferredValueDemo() {
    const [input, setInput] = useState("");
    // Defer updating the value that triggers the slow list render
    const deferredInput = useDeferredValue(input);

    return (
        <div style={{ padding: "10px", border: "1px solid #ccc", margin: "10px 0" }}>
            <h3>useDeferredValue Demo</h3>
            <div>
                <label>Search: </label>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type to search... UI won't freeze"
                />
            </div>
            <p style={{ fontSize: "14px", color: "gray" }}>
                Deferred value is lagging behind input to keep UI responsive.
            </p>
            {/* Pass deferred text to block rendering only when idle */}
            <SlowList text={deferredInput} />
        </div>
    );
}

export default DeferredValueDemo;
