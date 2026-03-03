import React from "react";
import C from "./C";

function B(props) {

  return (
    <div>

      <h2>This is Component B</h2>

      <C message={props.message} />

    </div>
  );

}

export default B;
