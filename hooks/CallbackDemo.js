import React, { useState, useCallback } from "react";

const ChildButton = React.memo(({ onClick }) => {
    console.log("ChildButton rendered!");
    return <button onClick={onClick} style={{ marginTop: "10px" }}>Increment from Child</button>;
});

function CallbackDemo() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    const handleIncrement = useCallback(() => {
        setCount((prev) => prev + 1);
    }, []); 
    return (
        <div style={{ padding: "10px", border: "1px solid #ccc", margin: "10px 0" }}>
            <h3>useCallback Demo</h3>
            <p>Count: {count}</p>
            <div>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Type to trigger parent render"
                />
            </div>
            <ChildButton onClick={handleIncrement} />
        </div>
    );
}

export default CallbackDemo;
