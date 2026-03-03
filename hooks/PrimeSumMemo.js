import React, { useMemo, useState } from "react";

function PrimeSumMemo() {

  const [count, setCount] = useState(0);

  const result = useMemo(() => {

    console.log("Calculating...");

    function isPrime(num) {

      if (num < 2) return false;

      for (let i = 2; i <= Math.sqrt(num); i++) {

        if (num % i === 0)
          return false;

      }

      return true;

    }

    let count = 0;
    let num = 2;
    let sum = 0;

    while (count < 5000) {

      if (isPrime(num)) {

        sum += num;
        count++;

      }

      num++;

    }

    return sum;

  }, []);


  return (

    <div>

      <h2>Sum using useMemo:</h2>

      <h3>{result}</h3>

      <button onClick={() => setCount(count + 1)}>
        Re-render {count}
      </button>

    </div>

  );

}

export default PrimeSumMemo;
