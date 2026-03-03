import React from "react";
import B from "./B";

function A() {

  const msg = "Hello from Component A";

  return (
    <div>

      <h1>This is Component A</h1>

      <B message={msg} />

    </div>
  );

}

export default A;
