import React, { useLayoutEffect, useRef } from "react";

export default function LayoutExample() {
  const boxRef = useRef();

  useLayoutEffect(() => {
    boxRef.current.style.background = "yellow";
    console.log("Box width:", boxRef.current.getBoundingClientRect().width);
  }, []);

  return (
    <div
      ref={boxRef}
      style={{ width: "200px", height: "100px", border: "1px solid black" }}
    >
      useLayoutEffect Example
    </div>
  );
}