import React, { useEffect } from "react";

function HelloWorld() {

  useEffect(() => {

    const timer = setInterval(() => {

      console.log("Hello World");

    }, 1000);

    return () => clearInterval(timer);

  }, []);

  return <h2>Check Console</h2>;

}

export default HelloWorld;
