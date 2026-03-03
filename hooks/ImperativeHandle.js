import React, { forwardRef, useImperativeHandle, useRef } from "react";

const Child = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    sayHello() {
      alert("Hello from Child Component!");
    }
  }));

  return <h3>Child Component</h3>;
});

export default function Parent() {
  const childRef = useRef();

  return (
    <div>
      <Child ref={childRef} />
      <button onClick={() => childRef.current.sayHello()}>
        Call Child Method
      </button>
    </div>
  );
}