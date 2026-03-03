import React, { useRef } from "react";

export default function RefExample() {
  const inputRef = useRef();

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <div>
      <input ref={inputRef} placeholder="Click button" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}